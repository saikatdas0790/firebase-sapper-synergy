<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";
  import firebase from "../utils/firebase";
  import Cookies from "js-cookie";

  const { session } = stores();

  export let segment: string;

  onMount(async () => {
    firebase.auth().onIdTokenChanged(async (user) => {
      try {
        if (!user) {
          console.log(`User does not exist`);
          Cookies.set("token", false);
          $session.user = false;
          return;
        }
        console.log(user);
        const token = await user.getIdToken();
        console.log(token);
        Cookies.set("token", token);
        $session.user = token;
        console.log(`User found and session set!`);
      } catch (e) {
        console.log(`Something went wrong`);
        Cookies.set("token", false);
        $session.user = false;
        return;
      }
    });
  });
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
