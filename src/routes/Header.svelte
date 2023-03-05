<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul class="flex justify-around">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class="font-mono text-3xl" href="/testbed1">Test Bed 1</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a class="font-mono text-3xl" href="/testbed2">Test Bed 2</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a class="font-mono text-3xl" href="/testbed3">Test Bed 3</a>
			</li>
		</ul>
	</nav>
</header>