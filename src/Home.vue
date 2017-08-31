<template>
</template>

<script>
  export default {
    data() {
      return {
        spaces: []
      };
    },
    mounted() {
      var self = this;
      this.$wamp.call('db.space.get_all').then(
        function(res) {
          self.spaces = res;
        }
      );
    }
  }
</script>
