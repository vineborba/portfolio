<script lang="ts">
  import Icon from '@iconify/svelte';

  type SocialMedia = { href: string; icon: string; label: string };

  const socialMedias: SocialMedia[] = [
    { label: 'GitHub', href: 'https://github.com/vineborba', icon: 'ri:github-line' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vinicius-de-borba-7273191b1/',
      icon: 'ri:linkedin-line',
    },
  ];
</script>

<section class="flex flex-col">
  <img src="profile.jpg" alt="profile" class="my-8 h-80 w-80 self-center rounded-full" />
  <h1 class="text-center text-4xl text-slate-300">Vinicius de Borba</h1>
  <p
    class="mx-auto mt-2 grid w-fit place-items-center rounded-lg bg-slate-800 px-4 py-1 text-center text-lg text-slate-400"
  >
    Fullstack Developer
  </p>
</section>

<section class="mt-8 flex justify-center gap-5">
  {#each socialMedias as sm}
    <a
      href={sm.href}
      class="grid h-10 w-10 place-items-center rounded-lg bg-slate-800"
      rel="noreferrer noopener"
      target="_blank"
    >
      <Icon icon={sm.icon} width="32" class="text-rose-600" />
    </a>
  {/each}
</section>

<article class="mt-8 grid place-items-center">
  <button
    class="flex w-fit gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 px-6 py-2 text-slate-100"
  >
    <Icon icon="ri:download-2-fill" width="24" class="" />
    Download my CV
  </button>
</article>
