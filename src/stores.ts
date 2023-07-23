import { writable } from 'svelte/store';

export const sidebar = writable({
	visible: false
});
