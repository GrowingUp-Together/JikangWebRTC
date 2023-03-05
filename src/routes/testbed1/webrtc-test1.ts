import { sendText$, receivedText$ } from '../../lib/stores';

var localConnection: RTCPeerConnection | null;
var remoteConnection: RTCPeerConnection | null;
var sendChannel: RTCDataChannel;
var receiveChannel: RTCDataChannel;

export function createConnection() {
  trace('Using SCTP based data channels');
  // For SCTP, reliable and ordered delivery is true by default.
  // Add localConnection to global scope to make it visible
  // from the browser console.
  localConnection = new RTCPeerConnection();
  trace('Created local peer connection object localConnection');

  sendChannel = localConnection.createDataChannel('sendDataChannel');
  trace('Created send data channel');

  localConnection.onicecandidate = iceCallback1;
  sendChannel.onopen = onSendChannelStateChange;
  sendChannel.onclose = onSendChannelStateChange;

  // Add remoteConnection to global scope to make it visible
  // from the browser console.
  remoteConnection = new RTCPeerConnection();
  trace('Created remote peer connection object remoteConnection');

  remoteConnection.onicecandidate = iceCallback2;
  remoteConnection.ondatachannel = receiveChannelCallback;

  localConnection.createOffer().then(
    gotDescription1,
    onCreateSessionDescriptionError
  );

  return 0;
}

function onCreateSessionDescriptionError(error: any) {
  trace('Failed to create session description: ' + error.toString());
}

export function sendData(sendTextValue: string) {
  var data = sendTextValue;
  sendChannel.send(data);
  trace('Sent Data: ' + data);
}

export function closeDataChannels() {
  if (!localConnection) {
    trace('localConnection is not created');
    return -1;
  }

  if (!remoteConnection) {
    trace('remoteConnection is not created');
    return -1;
  }

  trace('Closing data channels');
  sendChannel.close();
  trace('Closed data channel with label: ' + sendChannel.label);
  receiveChannel.close();
  trace('Closed data channel with label: ' + receiveChannel.label);
  localConnection.close();
  remoteConnection.close();
  localConnection = null;
  remoteConnection = null;
  trace('Closed peer connections');
  
  return 0;
}

function gotDescription1(desc: any) {
  if (!localConnection) {
    trace('localConnection is not created');
    return;
  }

  if (!remoteConnection) {
    trace('remoteConnection is not created');
    return;
  }

  localConnection.setLocalDescription(desc);
  trace('Offer from localConnection \n' + desc.sdp);
  remoteConnection.setRemoteDescription(desc);
  remoteConnection.createAnswer().then(
    gotDescription2,
    onCreateSessionDescriptionError
  );
}

function gotDescription2(desc: any) {
  if (!localConnection) {
    trace('localConnection is not created');
    return;
  }

  if (!remoteConnection) {
    trace('remoteConnection is not created');
    return;
  }

  remoteConnection.setLocalDescription(desc);
  trace('Answer from remoteConnection \n' + desc.sdp);
  localConnection.setRemoteDescription(desc);
}

function iceCallback1(event: any) {
  if (!remoteConnection) {
    trace('remoteConnection is not created');
    return;
  }

  trace('local ice callback');
  if (event.candidate) {
    remoteConnection.addIceCandidate(
      event.candidate
    ).then(
      onAddIceCandidateSuccess,
      onAddIceCandidateError
    );
    trace('Local ICE candidate: \n' + event.candidate.candidate);
  }
}

function iceCallback2(event: any) {
  if (!localConnection) {
    trace('remoteConnection is not created');
    return;
  }

  trace('remote ice callback');
  if (event.candidate) {
    localConnection.addIceCandidate(
      event.candidate
    ).then(
      onAddIceCandidateSuccess,
      onAddIceCandidateError
    );
    trace('Remote ICE candidate: \n ' + event.candidate.candidate);
  }
}

function onAddIceCandidateSuccess() {
  trace('AddIceCandidate success.');
}

function onAddIceCandidateError(error: any) {
  trace('Failed to add Ice Candidate: ' + error.toString());
}

function receiveChannelCallback(event: any) {
  trace('Receive Channel Callback');
  receiveChannel = event.channel;
  receiveChannel.onmessage = onReceiveMessageCallback;
  receiveChannel.onopen = onReceiveChannelStateChange;
  receiveChannel.onclose = onReceiveChannelStateChange;
}

function onReceiveMessageCallback(event: any) {
  trace('Received Message: ' + event.data);
  receivedText$.set(event.data);
}

function onSendChannelStateChange() {
  var readyState = sendChannel.readyState;
  trace('Send channel state is: ' + readyState);
  // if (readyState === 'open') {
  //   dataChannelSend.disabled = false;
  //   dataChannelSend.focus();
  //   sendButton.disabled = false;
  //   closeButton.disabled = false;
  // } else {
  //   dataChannelSend.disabled = true;
  //   sendButton.disabled = true;
  //   closeButton.disabled = true;
  // }
}

function onReceiveChannelStateChange() {
  var readyState = receiveChannel.readyState;
  trace('Receive channel state is: ' + readyState);
}

function trace(text: string) {
  if (text[text.length - 1] === '\n') {
    text = text.substring(0, text.length - 1);
  }
  if (window.performance) {
    var now = (window.performance.now() / 1000).toFixed(3);
    console.log(now + ': ' + text);
  } else {
    console.log(text);
  }
}
