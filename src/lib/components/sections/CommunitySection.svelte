<script lang="ts">
	import { INSTAGRAM_LINK, TELEGRAM_LINK, YOUTUBE_LINK } from '$lib/constants/links';

	const avatars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] as const;
</script>

<section class="section px-4 py-16 md:py-24" aria-labelledby="community-heading">
	<h2 id="community-heading" class="section-title text-center">Uniting millions worldwide</h2>

	<div class="mx-auto mt-4 flex items-center justify-center lg:-mt-10">
		<div class="h-[100px] shrink-0 lg:h-[140px]">
			<img src="/images/yellow-wing.png" alt="Wing" />
		</div>

		<div class="z-10 flex translate-y-7 lg:translate-y-9">
			{#each avatars as avatarIndex (avatarIndex)}
				<div
					class="-ml-6 size-14 rounded-full border-2 border-primary lg:-ml-8 lg:size-[96px] lg:border-8"
					class:xs:hidden={avatarIndex > 6}
					class:lg:block={avatarIndex > 6 && avatarIndex < 12}
					class:xl:block={avatarIndex > 12}
				>
					<img src="/images/avatar/{avatarIndex}.png" alt="Avatar" />
				</div>
			{/each}
		</div>

		<div class="-ml-8 h-[100px] shrink-0 -scale-x-100 lg:h-[140px]">
			<img src="/images/yellow-wing.png" alt="Wing" />
		</div>
	</div>

	<p class="section-description mx-auto mt-5 max-w-md text-center lg:mt-14">
		A global community of players merging, competing, and earning together every day.
	</p>

	<div class="mx-auto mt-10 grid grid-cols-3 gap-0 lg:mt-20 lg:gap-10">
		<div
			class="mx-auto -mr-8 w-full max-w-[260px] translate-y-2 -rotate-6 lg:mr-0 lg:translate-y-4"
		>
			<img src="/images/comminity-1.png" alt="Ducky Duck on Instagram" />
		</div>
		<div class="z-10 mx-auto w-full max-w-[260px]">
			<img src="/images/comminity-2.png" alt="Ducky Duck community chat" />
		</div>
		<div
			class="z-20 mx-auto -ml-8 w-full max-w-[260px] translate-y-2 rotate-6 lg:ml-0 lg:translate-y-4"
		>
			<img src="/images/comminity-3.png" alt="Ducky Duck on YouTube" />
		</div>
	</div>

	<div class="mx-auto mt-14 flex flex-wrap items-end justify-center gap-8">
		<a class="btn btn-secondary" href={INSTAGRAM_LINK} rel="noopener noreferrer" target="_blank">
			Instagram
		</a>
		<a
			class="btn btn-primary btn-size--lg"
			href={TELEGRAM_LINK}
			rel="noopener noreferrer"
			target="_blank"
		>
			Join our community
		</a>
		<a class="btn btn-secondary" href={YOUTUBE_LINK} rel="noopener noreferrer" target="_blank">
			Youtube
		</a>
	</div>
</section>
