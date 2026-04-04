<script>
	import StoreButtons from '$lib/components/StoreButtons.svelte';
</script>

<section class="section" aria-labelledby="hero-heading">
	<div class="relative mx-auto flex w-full flex-col items-center text-center">
		<div class="relative max-w-3xs lg:max-w-none">
			<h2 id="hero-heading" class="section-title">
				The <span class="text-yellow">ducks</span>
				<span class="text-[57px] whitespace-nowrap lg:text-[150px]">are coming</span>
			</h2>

			<div class="absolute top-0 left-0 flex size-full items-end justify-between">
				<div
					class="size-72 -translate-x-8 -translate-y-20 lg:translate-x-0 lg:translate-y-0"
					role="img"
				>
					<img src="/images/hero-duck-1.png" alt="Duck" />
				</div>
				<div
					class="size-72 translate-x-1/2 translate-y-6 lg:translate-x-0 lg:translate-y-0"
					role="img"
				>
					<img src="/images/hero-duck-2.png" alt="Duck" />
				</div>
			</div>
		</div>

		<dl class="mt-12">
			<div>
				<dd class="font-display text-5xl font-bold">4 000 000+</dd>
				<dt class="text-2xl text-gray">players</dt>
			</div>
		</dl>

		<StoreButtons class="mt-20" />
	</div>
</section>
