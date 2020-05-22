<template>
  <section class="images">
    <img v-scrollanimation src="../assets/Temple01.jpg" alt />
    <img v-scrollanimation src="../assets/Temple02.jpg" alt />
    <img v-scrollanimation src="../assets/Temple03.jpg" alt />
    <img v-scrollanimation src="../assets/Temple04.jpg" alt />
  </section>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .images {
    position: relative;
    width: 100%;

    img {
      float: left;
      width: 50%;
      height: auto;
    }
  }

  /*
    This classes are for the directive. 
    For each element observed by our directive, the before-enter class is added.
  */
  .before-enter {
    opacity: 0;
    transform: scale(.5) rotateZ(-25deg);
    transition: all 1s ease-out;
  }

  /* 
    If the element intersects with the viewport, the before-enter class is added.
  */
  .enter {
    opacity: 1;
    transform: scale(1) rotateZ(0deg);
  }
</style>
