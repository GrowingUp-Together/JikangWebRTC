<script>
	import Header from '../Header.svelte';
</script>

<Header />
<section class="py-24">
	<header class="flex font-mono justify-center text-5xl">TEST BED 2</header>
	<section class="py-16">
		<form class="flex py-12">
			<div
				class="w-1/3 h-48 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
			>
				<div class="px-4 h-32 py-2 bg-white rounded-t-lg dark:bg-gray-800">
					<textarea
						id="comment"
						rows="4"
						class="w-full h-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
						placeholder="Write a comment and send a message"
						required
					/>
				</div>
				<div class="h-16 flex items-center justify-between px-3 border-t dark:border-gray-600">
					<button
						type="submit"
						class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
					>
						Start
					</button>
					<button
						type="submit"
						class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
					>
						Send
					</button>
					<button
						type="submit"
						class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
					>
						Stop
					</button>
				</div>
			</div>
			<div class="flex justify-center w-1/3 items-center">
				<span class="text-7xl">To</span>
			</div>
			<div
				class="w-1/3 h-48 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
			>
				<div class="px-4 h-44 py-2 bg-white rounded-t-lg dark:bg-gray-800">
					<textarea
						id="comment"
						rows="4"
						class="w-full h-36 px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
						placeholder="Received message is here"
						readonly
					/>
				</div>
			</div>
		</form>
	</section>
</section>
