<script>
	import { goto } from "$app/navigation";
	import BasicButton from "../lib/BasicButton.svelte";

	const goToHome = () => {
		goto('/home');
	}
</script>

<svelte:head>
	<title>webrtc test bed</title>
	<meta name="description" content="webrtc test app" />
</svelte:head>

<section>
	<section style="height: 50vh; display: flex; justify-content:center; align-items: center">
		<h1 style="text-align: center;">
			<span class="g-title">
				<div>WEBRTC</div>
				<div>TEST BED</div>
			</span>
		</h1>
	</section>

	<section style="height: 50vh; display: flex; justify-content:space-around; align-items: center; flex-direction: column">
		<h2 style="color: rgb(0, 132, 255); font-weight: 800; font-size: 30px">Jikang이 mykang님과 sujung님의 버스를 타면서 만드는 앱</h2>
		<BasicButton on:click={() => goToHome()} color={"rgb(0, 132, 255)"}>들어가기</BasicButton>
	</section>
</section>

<style>
</style>
