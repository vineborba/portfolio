<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { sidebar } from '../stores';

	type Route = { href: string; label: string; icon: string };

	export let routes: Route[];
	export let isSmallScreen: boolean;

	const inactiveBg = 'bg-slate-800 text-slate-400';
	const activeBg = 'bg-gradient-to-r from-rose-500 to-red-800 text-slate-100';

	function handleClick() {
		$sidebar.visible = true;
	}
</script>

{#if isSmallScreen}
	<button class="absolute top-4 left-4" on:click={handleClick}>
		<Icon icon="ri:menu-fill" class="text-white" height="32" width="32" />
	</button>
{:else}
	<header class="py-4 lg:py-8">
		<nav class="flex gap-4 justify-center">
			{#each routes as route}
				{@const isActive = $page.url.pathname === route.href}
				<a
					class="flex gap-2 items-center py-2 px-3 rounded-lg {isActive ? activeBg : inactiveBg}"
					href={route.href}
				>
					<Icon
						height="24"
						icon={route.icon}
						class={isActive ? 'text-slate-800' : 'text-slate-300'}
					/>
					{route.label}
				</a>
			{/each}
		</nav>
	</header>
{/if}
