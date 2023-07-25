<script lang="ts">
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';
  import { sidebar } from '../stores';

  type Route = { href: string; label: string; icon: string };

  export let routes: Route[];

  const inactiveClass = 'bg-slate-800 text-slate-400';
  const activeClass = 'bg-gradient-to-r from-rose-500 to-red-800 text-slate-100';

  function handleClick() {
    $sidebar.visible = false;
  }
</script>

<aside
  class="absolute z-10 flex h-full w-3/4 flex-col gap-4 bg-slate-300
	pt-4
	{$sidebar.visible ? 'translate-x-0' : '-translate-x-full'}
	transition-transform duration-300
	"
>
  <button on:click={handleClick} class="self-end">
    <Icon icon="ri:close-fill" height="32" width="32" />
  </button>
  <nav class="flex w-full flex-col gap-5 pr-2">
    {#each routes as route}
      {@const isActive = $page.url.pathname === route.href}
      <a
        class="flex gap-2 rounded-r-lg p-2 {isActive ? activeClass : inactiveClass}"
        href={route.href}
        on:click={handleClick}
      >
        <Icon icon={route.icon} class="h-6 w-6 {isActive ? 'text-slate-800' : 'text-slate-300'}" />
        {route.label}
      </a>
    {/each}
  </nav>
</aside>
