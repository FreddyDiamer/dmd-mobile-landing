<script lang="ts">
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import MergeEggsSection from '$lib/components/sections/MergeEggsSection.svelte';
	import BreedDucksSection from '$lib/components/sections/BreedDucksSection.svelte';
	import CommunitySection from '$lib/components/sections/CommunitySection.svelte';
	import PvpExperienceSection from '$lib/components/sections/PvpExperienceSection.svelte';
	import StoreButtons from '$lib/components/StoreButtons.svelte';
	import BgIcons from '$lib/components/base/BgIcons.svelte';
</script>

<div class="relative overflow-hidden">
	<BgIcons />

	<header>
		<h1 class="mb-10 p-12 text-center font-display text-4xl uppercase">
			Ducky <span class="text-yellow">DUCK</span>
		</h1>

		<HeroSection />
	</header>

	<main class="relative mt-24 mb-20 flex flex-col overflow-hidden lg:mt-40">
		<div class="section-divider hidden lg:block"></div>

		<MergeEggsSection />
		<BreedDucksSection />
		<CommunitySection />

		<div class="h-[100px] lg:h-[120px]">
			<img src="/images/corn.png" alt="Corn" />
		</div>

		<PvpExperienceSection />

		<StoreButtons class="mx-auto" />
	</main>
</div>
