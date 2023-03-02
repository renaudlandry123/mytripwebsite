<template>
  <div class="accueil">
    <img id="ImageAccueil" src="../assets/imageAccueil.jpg" />
    <h1 style="font-family: 'Courier New', Courier, monospace">
      Les offres de la semaine !!!
    </h1>
    <div class="image-grid">
      <img src="../assets/image1.jpg" />
      <img src="../assets/image2.jpg" />
      <img src="../assets/image3.jpg" />
      <img src="../assets/image4.jpg" />
      <img src="../assets/image5.jpg" />
      <img src="../assets/image6.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped>
#ImageAccueil {
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
}

.image-grid img {
  width: 25%;
  height: 200px;
  width: 350px;
  margin: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>
