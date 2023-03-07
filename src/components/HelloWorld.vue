<template>
  <div class="accueil">
    <div class="fade-container">
      <img class="fade-img" src="../assets/imageAccueil.jpg" />
      <img class="fade-img" src="../assets/image3.jpg" />
      <img class="fade-img" src="../assets/image4.jpg" />
    </div>
    <h1
      style="
        font-family: 'Arial, sans-serif', Courier, monospace;
        font-size: 36px;
        font-weight: bold;
        color: #333;
      "
    >
      Les offres de la semaine !!!
    </h1>
    <div class="image-grid">
      <div class="image-container">
        <img src="../assets/image1.jpg" />
        <div class="image-overlay">
          <div class="image-overlay">
            <p class="price">$2'500'000</p>
            <p class="location">Costa Rica</p>
          </div>
        </div>
      </div>
      <div class="image-container">
        <img src="../assets/image2.jpg" />
        <div class="image-overlay">
          <div class="image-overlay">
            <p class="price">$2'200'000</p>
            <p class="location">Thaïlande</p>
          </div>
        </div>
      </div>
      <div class="image-container">
        <img src="../assets/image3.jpg" />
        <div class="image-overlay">
          <div class="image-overlay">
            <p class="price">$3'400'000</p>
            <p class="location">Panama</p>
          </div>
        </div>
      </div>
      <div class="image-container">
        <img src="../assets/image4.jpg" />
        <div class="image-overlay">
          <div class="image-overlay">
            <p class="price">$1'900'000$</p>
            <p class="location">Mexique</p>
          </div>
        </div>
      </div>
      <div class="image-container">
        <img src="../assets/image5.jpg" />
        <div class="image-overlay">
          <div class="image-overlay">
            <p class="price">$3'200'000$</p>
            <p class="location">Cuba</p>
          </div>
        </div>
      </div>
      <div class="image-container">
        <img src="../assets/image6.jpg" />
        <div class="image-overlay">
          <div class="image-overlay">
            <p class="price">$2'000'000</p>
            <p class="location">Bahamas</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccueilComponent",
  mounted() {
    const images = document.querySelectorAll(".fade-img");
    const duration = 7000;
    let currentImageIndex = 0;

    function fadeOutImage() {
      images[currentImageIndex].classList.add("fade-out");
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.remove("fade-out");
      setTimeout(fadeOutImage, duration);
    }
    fadeOutImage();
  },
};
</script>

<style scoped>
#ImageAccueil {
  position: relative;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
  clear: both;
}
.image-container {
  position: relative;
  margin: 20px;
  width: 350px;
  height: 200px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}

.fade-container {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
}

.image-overlay {
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 20px;
  cursor: pointer;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.image-overlay p {
  color: #fff;
  font-size: 16px;
}

.price {
  color: #fff;
  font-size: 16px;
  text-align: left;
  padding-right: 10px;
  margin: 0;
}

.location {
  color: #fff;
  font-size: 16px;
  text-align: right;
  margin: 90px;
}

.fade-img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 2s;
}

.fade-img.fade-out {
  opacity: 0;
}
</style>
