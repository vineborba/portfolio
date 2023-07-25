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
  <button class="absolute left-4 top-4" on:click={handleClick}>
    <Icon icon="ri:menu-fill" class="text-white" height="32" width="32" />
  </button>
{:else}
  <header class="py-4 lg:py-8">
    <nav class="flex justify-center gap-4">
      {#each routes as route}
        {@const isActive = $page.url.pathname === route.href}
        <a
          class="flex items-center gap-2 rounded-lg px-3 py-2 {isActive ? activeBg : inactiveBg}"
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
