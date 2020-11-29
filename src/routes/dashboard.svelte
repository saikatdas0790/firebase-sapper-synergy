<script lang="ts" context="module">
  export async function preload(page, session) {
    let { user } = session;
    if (!user) {
      return this.redirect(302, "/login");
    }
  }
</script>

<script lang="ts">
  import firebase from "../utils/firebase";
  import { goto } from "@sapper/app";

  const logout = async (): Promise<void> => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        goto("/login");
      });
  };
</script>

<h1>
  This is our protected dashboard! Only visible when you are logged in with
  Firebase
</h1>
<button on:click={logout}>Logout</button>
