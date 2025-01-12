<script lang="ts">
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import NavBar from './components/NavBar.svelte';
</script>

<main>
  <div class="flex">
    <NavBar />
    <div>
      <Header />
      <slot></slot>
      <Footer />
    </div>
  </div>
</main>
