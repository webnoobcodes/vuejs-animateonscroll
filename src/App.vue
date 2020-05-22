<template>
  <div id="app">
    <section class="header">
      <div class="header-box">
        <h1 v-scrollanimation>Ulun Danu Bratan Temple</h1>
        <div v-scrollanimation>Bali, Indonesia</div>
        <p v-scrollanimation>
          Built in 1633, this temple is used for offerings ceremony to the Balinese water,
          lake and river goddess Dewi Danu, due to the importance of Lake Bratan
          as a main source of irrigation in central Bali.
        </p>
      </div>
    </section>
    <Description />
    <Images />
  </div>
</template>

<script>
  import Description from "./components/Description";
  import Images from "./components/Images";

  export default {
    components: {
      Description,
      Images
    }
  };
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI";
  }

  #app {
    position: relative;
    min-height: 100vh;
    width: 100%;

    .header {
      position: relative;
      width: 100%;
      min-height: 100vh; 
      background-image: url("./assets/Temple.jpg");
      background-position: center;
      background-size: cover;
      overflow: hidden;

      .header-box {
        position: absolute;
        width: 100%;
        height: 250px;
        padding: 20px;
        bottom: 0;
        color: #efefef;
        background: linear-gradient(
          to bottom,
          rgba($color: #000, $alpha: 0),
          rgba($color: #000, $alpha: 0.7),
          rgba($color: #000, $alpha: 0.9)
        );
        overflow: hidden;
      }

      h1 {
        font-size: 2rem;
        padding: 10px 0;
      }

      div {
        font-size: 1.2rem;
        transition-delay: .1s;
      }

      p {
        padding: 10px 0;
        font-size: 1rem;
        transition-delay: .2s;
      }
    }
  }

  /*
    This classes are for the directive. 
    For each element observed by our directive, the before-enter class is added.
  */
  .before-enter {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s cubic-bezier(.41,.01,.57,1.61);
  }

  /* 
    If the element intersects with the viewport, the before-enter class is added.
  */
  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
</style>
