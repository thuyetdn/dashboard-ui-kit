<script>
  import { Alert } from 'flowbite-svelte';
  import { Drawer, Button, CloseButton } from 'flowbite-svelte';
  import { InfoCircleSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';

  let hidden = $state(true);
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  };
</script>

<Alert>
  <span class="font-medium">Default alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="blue">
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="red">
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="green">
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="yellow">
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="dark">
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>

<div class="text-center">
  <Button on:click={() => (hidden = false)}>Show drawer</Button>
</div>

<Drawer
  backdrop={false}
  activateClickOutside={false}
  transitionType="fly"
  {transitionParams}
  bind:hidden
  id="sidebar1"
>
  <div class="flex items-center">
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
    >
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
    </h5>
    <CloseButton
      on:click={() => (hidden = true)}
      class="mb-4 dark:text-white"
    />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a
      href="/"
      class="text-primary-600 underline dark:text-primary-500 hover:no-underline"
    >
      limited-time sale
    </a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates
    and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4"
      >Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button
    >
  </div>
</Drawer>
