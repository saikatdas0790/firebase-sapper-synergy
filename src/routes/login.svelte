<script lang="ts">
  import { goto } from "@sapper/app";
  import firebase from "../utils/firebase";

  const login = async (): Promise<void> => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          console.log(result);
          goto("/dashboard");
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch {}
  };
</script>

<h1>Login page</h1>
<button on:click={login}>Sign in with Google</button>
