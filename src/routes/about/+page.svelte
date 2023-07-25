<script lang="ts">
  import Icon from '@iconify/svelte';

  type Info = { label: string; text: string; icon: string };

  const birthday = new Date('03/09/1998');
  const infos: Info[] = [
    { label: 'Email', text: 'vinicis.borba@proton.me', icon: 'ri:mail-line' },
    { label: 'Location', text: 'Porto Alegre, Brazil', icon: 'ri:map-pin-2-line' },
    { label: 'Birthday', text: birthday.toLocaleDateString(), icon: 'ri:calendar-line' },
  ];
</script>

<section
  class="mt-8 flex flex-col gap-4 rounded-3xl bg-slate-800 px-8 py-2 sm:mt-0 sm:gap-8 sm:py-8 lg:px-20 lg:py-16"
>
  <div class="flex items-center">
    <h1 class="text-3xl text-slate-300">About me</h1>
    <div
      class="ml-4 h-[1px] w-1/3 rounded-lg bg-gradient-to-r from-rose-500 to-red-800 text-slate-100"
    />
  </div>
  <div class="flex flex-col gap-4 sm:flex-row">
    <img src="/perfil.jpg" alt="Me" class="h-60 w-60 rounded-3xl" />
    <div class="flex flex-col gap-6">
      <div>
        <h3 class="text-xl text-slate-300">Who am I</h3>
        <p class="mt-2 text-slate-400">
          I'm a Fullstack developer from Encantado, Brazil, currently working at a software house,
          developing digital products of all sorts. I enjoy solving problems and building useful
          things to help people in their lives.
        </p>
      </div>
      <div>
        <h3 class="text-xl text-slate-300">Personal Info</h3>
        <div class="mt-2 grid grid-cols-1 gap-y-4 lg:grid-cols-2">
          {#each infos as info}
            <div class="flex gap-2">
              <div class="h-fit rounded-xl bg-slate-950 p-2">
                <Icon icon={info.icon} height="24" class="text-rose-600" />
              </div>
              <div class="flex flex-col">
                <span class="text-sm text-slate-600">{info.label}</span>
                <span class="text-sm text-slate-200">{info.text}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
