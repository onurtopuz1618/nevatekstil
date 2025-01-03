<template>
  <div>
    <!--Site Footer One Start-->
    <footer class="site-footer">
      <div class="container">
        <div class="site-footer__top">
          <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="footer-widget__column footer-widget__logo">
                <nuxt-link to="/">
                  <img :src="require(`~/assets/images${logo.footer}`)" style="width:100%" alt="" />
                </nuxt-link>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div
                class="footer-widget__column footer-widget__explore clearfix"
              >
                <h3 class="footer-widget__title">Hızlı Erişim</h3>
                <ul class="footer-widget__explore-list list-unstyled">
                  <li><a href="contact">İletişim</a></li>
                  <li><a href="offer">Teklif Al!</a></li>
                  <li><a href="services">Hizmetlerimiz</a></li>
                </ul>
                <ul class="footer-widget__explore-list footer-widget__explore-list-two list-unstyled" >
                  <li><a href="about">Hakkımızda</a></li>
                  <li><a href="our-mission">Misyonumuz</a></li>
                  <li><a href="our-vision">Vizyonumuz</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="footer-widget__column footer-widget__contact">
                <h3 class="footer-widget__title">İletişim</h3>
                <ul class="list-unstyled footer-widget__contact-list">
                  <li>
                    <div class="icon">
                      <i class="icon-chat"></i>
                    </div>
                    <div class="text">
                      <p>
                        <span>Telefon</span>
                        <a href="tel:05437234851">+90 543 723 48 51</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="icon-message"></i>
                    </div>
                    <div class="text">
                      <p>
                        <span>E-Posta</span>
                        <a href="mailto:info@nevatekstil.com">info@nevatekstil.com</a
                        >
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="icon-address"></i>
                    </div>
                    <div class="text">
                      <p>
                        <span>Adres</span>
                        <a>Kızılpınar Mh. Yıldız Sk</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--Site Footer One End-->
    <div v-if="sticky === true">
      <a
        @click="scrollTop"
        class="scroll-to-target scroll-to-top animated fadeInUp"
        ><i class="fa fa-angle-up"></i
      ></a>
    </div>
  </div>
</template>

<script>
import data from "~/data/data.json";
export default {
  data() {
    return {
      logo: data.logo,
      sticky: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
