import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { APPLE_STORE_LINK, storeLinkForUserAgent } from '$lib/constants/links';

export const storeHref = writable(
	browser ? storeLinkForUserAgent(navigator.userAgent) : APPLE_STORE_LINK
);
