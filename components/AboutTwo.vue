<template>
  <!--Welcome One Start-->
  <section class="welcome-one">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="welcome-one__left">
            <div class="welcome-one__img-box">
              <img src="~/assets/images/resources/about-page-img.png" alt="" />
              <h2 class="welcome-one__bottom-text">Neva Teksil</h2>
              <div class="welcome-one__heart-icon">
                <img src="~images/resources/neva.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="welcome-one__right">
            <div class="section-title text-left">
              <span class="section-title__tagline">Neva Tekstile Hoşgeldiniz</span>
              <h2 class="section-title__title">
                Yüksek kalite boxer üretimi, güvenilir toptan tedarikçi çözümü
              </h2>
            </div>
            <p class="welcome-one__right-text">
              Neva Tekstil olarak, yılların deneyimi ve birikimiyle tekstil sektöründe güçlü bir yer edinmiş
              bulunmaktayız. Özel olarak <strong>toptan boxer</strong> üretimine odaklanan firmamız, kaliteli ürünleri ve müşteri memnuniyetini
              temel alarak sektörde fark yaratmaktadır. Başladığımız günden bu yana inovasyon ve kaliteyi ön planda
              tutarak, müşterilerimize en iyi hizmeti sunmayı amaçlıyoruz.
            </p>
            <div class="welcome-one__our-mission-and-story">
              <div class="welcome-one__mission-and-story-single">
                <h3><i class="fas fa-arrow-circle-right"></i>Misyonumuz</h3>
                <p class="welcome-one__our-mission-and-story-text">
                  Lorem ipsum dolor sit amet not is consectetur notted.
                </p>
              </div>
              <div class="welcome-one__mission-and-story-single">
                <h3><i class="fas fa-arrow-circle-right"></i>Vizyonumuz</h3>
                <p class="welcome-one__our-mission-and-story-text">
                  Lorem ipsum dolor sit amet not is consectetur notted.
                </p>
              </div>
            </div>
            <nuxt-link to="/about" class="welcome-one__btn thm-btn">
              <i class="fas fa-arrow-circle-right"></i>Daha Fazla
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Welcome One End-->
</template>

<script>
import countTo from "vue-count-to";
import { ObserveVisibility } from "vue-observe-visibility";
export default {
  components: { countTo },
  directives: {
    ObserveVisibility,
  },
  data() {
    return {
      startBar: false,
      startCounter: false,
    };
  },
  methods: {
    onVisibilityChange(isVisible) {
      if (isVisible) {
        this.startBar = true;
      }
    },
    onVisibilityCountChange(isVisible) {
      if (isVisible) {
        this.startCounter = true;
      }
    },
  },
};
</script>
