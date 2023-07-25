<script lang="ts">
  import Icon from '@iconify/svelte';

  type Skill = { name: string; description: string; icon: string };

  const skills: Skill[] = [
    {
      name: 'Backend Development',
      description:
        "My experience in backend development is mainly in NodeJS. Most recently, I've been studying Rust for this pourpose.",
      icon: 'ri:server-line',
    },
    {
      name: 'Frontend Development',
      description:
        "My experience in frontend development is mainly in ReactJS. Most recently, I've been studying SolidJS and SvelteKit",
      icon: 'ri:html5-fill',
    },
    {
      name: 'Mobile Development',
      description: 'My experience in frontend development is mainly in React Native.',
      icon: 'ri:smartphone-line',
    },
    {
      name: 'DevOps',
      description:
        'I have a varied experience in DevOps. I have used tools like Jenkins, GitHub Actions and Azure DevOps on a daily basis. Also, I have knowledge on tools like Docker aand Kubernetes.',
      icon: 'ri:settings-4-line',
    },
  ];
</script>

<section
  class="mt-8 flex flex-col gap-4 rounded-3xl bg-slate-800 px-8 py-2 sm:mt-0 sm:gap-8 sm:py-8 lg:px-20 lg:py-16"
>
  <div class="flex items-center">
    <h1 class="text-3xl text-slate-300">What I do</h1>
    <div
      class="ml-4 h-[1px] w-1/3 rounded-lg bg-gradient-to-r from-rose-500 to-red-800 text-slate-100"
    />
  </div>
  <div class="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
    {#each skills as skill}
      <div class="flex gap-2">
        <div class="h-fit rounded-xl bg-slate-950 p-2">
          <Icon icon={skill.icon} height="24" class="text-rose-600" />
        </div>
        <div class="flex flex-col">
          <span class="text-sm text-slate-200">{skill.name}</span>
          <span class="text-sm text-slate-500">{skill.description}</span>
        </div>
      </div>
    {/each}
  </div>
</section>
