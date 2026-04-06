<script lang="ts">
	import { APPLE_STORE_LINK, GOOGLE_PLAY_LINK } from '$lib/constants/links';

	let { class: className = '' } = $props();
</script>

<div
	class="flex max-w-3xs flex-wrap items-center justify-center gap-4 {className} lg:flex-nowrap lg:gap-7"
>
	<a href={APPLE_STORE_LINK} target="_blank" class="h-[54px]">
		<img src="/images/store/app-store.png" alt="Download on the App Store" />
	</a>
	<a href={GOOGLE_PLAY_LINK} target="_blank" class="h-[54px]">
		<img src="/images/store/google-play.png" alt="Get it on Google Play" />
	</a>
</div>
