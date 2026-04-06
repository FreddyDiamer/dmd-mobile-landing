export const TELEGRAM_LINK = 'https://t.me/duckmyduck_official';

export const INSTAGRAM_LINK = 'https://www.instagram.com/duckmyduck.official/';
export const YOUTUBE_LINK = 'https://www.youtube.com/@DUCKMYDUCKtop/featured';

export const APPLE_STORE_LINK = 'https://apps.apple.com/app/';
export const GOOGLE_PLAY_LINK = 'https://play.google.com/store/apps/';

export function storeLinkForUserAgent(ua: string): string {
	if (/android/i.test(ua)) return GOOGLE_PLAY_LINK;
	if (/iphone|ipad|ipod/i.test(ua)) return APPLE_STORE_LINK;

	return APPLE_STORE_LINK;
}
