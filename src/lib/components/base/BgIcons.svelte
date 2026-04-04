<script>
	import BgEgg from '$lib/components/icons/BgEgg.svelte';
	import BgStylus from '$lib/components/icons/BgStylus.svelte';
</script>

<!-- Desktop icons: -->
<BgEgg top={800} left={-150} height={400} isMirrored />
<BgEgg top={2600} left={-100} height={300} isMirrored />
<BgEgg top={3800} left={-100} height={300} isMirrored />
<BgEgg top={5000} left={-100} height={300} isMirrored />

<BgEgg top={600} right={-150} height={350} />
<BgEgg top={2200} right={-150} height={350} />
<BgEgg top={4000} right={-100} height={300} />

<BgStylus top={500} left={300} />
<BgStylus top={1500} left={300} />
<BgStylus top={3400} left={200} />

<BgStylus top={900} right={300} isMirrored />
<BgStylus top={2100} right={300} isMirrored />
<BgStylus top={3000} right={300} />
<BgStylus top={4200} right={300} isMirrored />
<BgStylus top={5200} right={150} />

<!-- Mobile icons: -->
<BgEgg top={800} left={-100} height={200} isMirrored isMobile />
<BgEgg top={2600} left={-100} height={200} isMirrored isMobile />
<BgEgg top={3800} left={-100} height={200} isMirrored isMobile />
<BgEgg top={5000} left={-100} height={200} isMirrored isMobile />

<BgEgg top={600} right={-100} height={200} isMobile />
<BgEgg top={2200} right={-100} height={200} isMobile />
<BgEgg top={4000} right={-100} height={200} isMobile />

<BgStylus top={400} left={200} height={100} isMobile />
<BgStylus top={1500} left={200} height={100} isMobile />
<BgStylus top={3400} left={200} height={100} isMobile />

<BgStylus top={1200} right={200} height={100} isMirrored isMobile />
<BgStylus top={2100} right={200} height={100} isMirrored isMobile />
<BgStylus top={3000} right={200} height={100} isMobile />
<BgStylus top={4200} right={200} height={100} isMirrored isMobile />
<BgStylus top={5200} right={100} height={100} isMobile />
