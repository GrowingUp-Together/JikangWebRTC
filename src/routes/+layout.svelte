<script lang="ts">
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-size: cover;
		background-image: linear-gradient(rgba(255, 255, 255, 0.447), rgba(255,255,255,0.1)), url('../lib/images/global/palmhanni.jpg');
		opacity: 0.7;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
