import { writable, type Writable } from 'svelte/store';

export const sendText$: Writable<string> = writable('');
export const receivedText$: Writable<string> = writable('');
