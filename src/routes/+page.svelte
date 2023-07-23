<script lang="ts">
	import Icon from '@iconify/svelte';

	type SocialMedia = { href: string; icon: string; label: string };

	const socialMedias: SocialMedia[] = [
		{ label: 'GitHub', href: 'https://github.com/vineborba', icon: 'ri:github-line' },
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/vinicius-de-borba-7273191b1/',
			icon: 'ri:linkedin-line'
		}
	];
</script>

<section class="flex flex-col">
	<img src="profile.jpg" alt="profile" class="self-center w-80 h-80 rounded-full my-8" />
	<h1 class="text-center text-4xl text-slate-300">Vinicius de Borba</h1>
	<p
		class="w-fit mx-auto py-1 px-4 mt-2 text-center text-lg rounded-lg bg-slate-800 grid place-items-center text-slate-400"
	>
		Full-stack Developer
	</p>
</section>

<section class="flex justify-center gap-5 mt-8">
	{#each socialMedias as sm}
		<a
			href={sm.href}
			class="h-10 w-10 rounded-lg bg-slate-800 grid place-items-center"
			rel="noreferrer noopener"
			target="_blank"
		>
			<Icon icon={sm.icon} width="32" class="text-rose-600" />
		</a>
	{/each}
</section>

<article class="mt-8 grid place-items-center">
  <button
    class="flex gap-2 w-fit px-6 py-2 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 text-slate-100"
  >
    <Icon icon="ri:download-2-fill" width="24" class="" />
    Download my CV
  </button>
</article>