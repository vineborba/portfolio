<script lang="ts">
  import '../app.css';

  import Header from '$lib/Header.svelte';
  import SideBar from '$lib/SideBar.svelte';

  type Route = { href: string; label: string; icon: string };

  const routes: Route[] = [
    { href: '/', label: 'Home', icon: 'ri:home-3-line' },
    { href: '/about', label: 'About me', icon: 'ri:user-3-line' },
    { href: '/skills', label: 'Skills', icon: 'ri:code-s-slash-line' },
    // { href: '/works', label: 'Works', icon: 'ri:tools-line' }
  ];

  let innerWidth = 0;

  $: isSmallScreen = innerWidth <= 540;
</script>

<svelte:window bind:innerWidth />

<Header {routes} {isSmallScreen} />

{#if isSmallScreen}
  <SideBar {routes} />
{/if}

<main class="w-full max-w-screen-lg self-center p-8 lg:p-0">
  <slot />
</main>
