<template>
  <section class="description">
    <p v-scrollanimation>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
      accusamus assumenda! Consequuntur ut aspernatur excepturi quisquam
      laborum officia nulla quod aliquid neque tenetur.
      Earum, nobis vitae autem explicabo, aliquam, ut dignissimos quisquam
      tempore velit recusandae facilis? Debitis similique quam vitae molestias
      quae fugit eos? Accusamus voluptatum eaque natus saepe nemo?
    </p>
    <p v-scrollanimation>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
      accusamus assumenda! Consequuntur ut aspernatur excepturi quisquam
      laborum officia nulla quod aliquid neque tenetur.
      Earum, nobis vitae autem explicabo, aliquam, ut dignissimos quisquam
      tempore velit recusandae facilis? Debitis similique quam vitae molestias
      quae fugit eos? Accusamus voluptatum eaque natus saepe nemo?
    </p>
    <p v-scrollanimation>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
      accusamus assumenda! Consequuntur ut aspernatur excepturi quisquam
      laborum officia nulla quod aliquid neque tenetur.
      Earum, nobis vitae autem explicabo, aliquam, ut dignissimos quisquam
      tempore velit recusandae facilis? Debitis similique quam vitae molestias
      quae fugit eos? Accusamus voluptatum eaque natus saepe nemo?
    </p>
  </section>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .description {
    position: relative;
    width: 100%;
    min-height: 100vh;

    p {
      font-size: 1.2rem;
      padding: 10px 20px;
    }
  }

  /*
    This classes are for the directive. 
    For each element observed by our directive, the before-enter class is added.
  */
  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
  }

  /* 
    If the element intersects with the viewport, the before-enter class is added.
  */
  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
</style>
