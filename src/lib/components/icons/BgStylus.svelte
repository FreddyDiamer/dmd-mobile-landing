<script lang="ts">
	let {
		class: className = '',
		position = 'absolute',
		height = 150,
		top = 0,
		left = 0,
		right = 0,
		isMirrored = false,
		isMobile = false
	} = $props();
</script>

<div
	class="{isMobile ? 'block lg:hidden' : 'hidden lg:block'} {className}"
	class:-scale-y-100={isMirrored}
	class:-scale-x-100={isMirrored}
	style="
	position: {position};
	height: {height}px;
	top: {top}px;
	{left ? `left: ${left}px;` : ''}
	{right ? `right: ${right}px;` : ''}
	"
>
	<img src="/images/icons/bg-stylus.png" alt="Stylus" />
</div>
