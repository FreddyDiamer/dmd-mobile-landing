<script lang="ts">
	let {
		class: className = '',
		position = 'absolute',
		top = 0,
		left = 0,
		right = 0,
		height = 500,
		isMirrored = false
	} = $props();
</script>

<div
	class={className}
	class:-scale-x-100={isMirrored}
	style="
	position: {position};
	height: {height}px;
	top: {top}px;
	{left ? `left: ${left}px;` : ''}
	{right ? `right: ${right}px;` : ''}
	"
>
	<img src="/images/icons/bg-egg.png" alt="Egg" />
</div>
