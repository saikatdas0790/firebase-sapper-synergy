<script lang="ts" context="module">
  export async function preload(page, session) {
    let { user } = session;
    if (!user) {
      return this.redirect(302, "/login");
    }
  }
</script>
