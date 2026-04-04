<script lang="ts">
	let { class: className = '' } = $props();
</script>

<div
	class="flex max-w-3xs flex-wrap items-center justify-center gap-4 {className} lg:flex-nowrap lg:gap-7"
>
	<a href="https://apps.apple.com/app/ducky-duck/id6768624112" target="_blank" class="h-[54px]">
		<img src="/images/store/app-store.png" alt="Download on the App Store" />
	</a>
	<a
		href="https://play.google.com/store/apps/details?id=com.duckyduck.app"
		target="_blank"
		class="h-[54px]"
	>
		<img src="/images/store/google-play.png" alt="Get it on Google Play" />
	</a>
</div>
