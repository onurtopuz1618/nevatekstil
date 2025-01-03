<template>
  <div>
    <header class="main-header-two clearfix">
      <div class="main-header-two__inner">
        <div class="container">
          <div class="main-header-two__top clearfix">
            <div class="main-header-two__logo">
              <nuxt-link to="/">
                <img :src="require(`~/assets/images${logo.lightColored}`)" alt="" class="logo" />
              </nuxt-link>
            </div>
            <div class="main-header-two__contact-info">
              <ul class="main-header-two__contact-list list-unstyled">
                <li>
                  <div class="main-header-two__contact-icon">
                    <span class="icon-chat"></span>
                  </div>
                  <div class="main-header-two__contact-text">
                    <p>Telefon</p>
                    <a href="tel:05437234851">+90 543 723 48 51</a>
                  </div>
                </li>
                <li>
                  <div class="main-header-two__contact-icon">
                    <span class="icon-message"></span>
                  </div>
                  <div class="main-header-two__contact-text">
                    <p>E-Posta</p>
                    <a href="mailto:info@nevatekstil.com">info@nevatekstil.com</a>
                  </div>
                </li>
                <li>
                  <div class="main-header-two__contact-icon">
                    <span class="icon-address"></span>
                  </div>
                  <div class="main-header-two__contact-text">
                    <p>Adres</p>
                    <h5>Kızılpınar Mh. Yıldız Sk.</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="main-header-two__bottom">
        <nav class="main-menu main-menu__two">
          <div class="container">
            <div class="main-menu__inner clearfix">
              <a href="#" class="mobile-nav__toggler" @click="mobileDrawerStatusChange">
                <i class="fa fa-bars"></i>
              </a>
              <ul class="main-menu__list">
                <li v-for="item in navMenus" :key="item.name"
                  :class="`${undefined !== item.subItems ? 'dropdown ' : ' '}`">
                  <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
                  <ul class="sub-menu" v-if="undefined !== item.subItems">
                    <li v-for="subitem in item.subItems" :key="subitem.name">
                      <nuxt-link :to="subitem.url">{{ subitem.name }}</nuxt-link>
                      <ul class="sub-menu" v-if="undefined !== subitem.subItems">
                        <li v-for="subitem in subitem.subItems" :key="subitem.name">
                          <nuxt-link :to="subitem.url">{{ subitem.name }}</nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <!-- <div class="main-menu__right">
                <div class="main-menu__right-social">
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-facebook-square"></i></a>
                  <a href="#"><i class="fab fa-dribbble"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
                <a href="#" class="main-menu__search search-toggler icon-magnifying-glass"
                  @click="searchPopupStatusChange"></a>
                <a href="#" class="main-menu__cart icon-shopping-cart"></a>
              </div> -->
            </div>
          </div>
        </nav>
      </div>
    </header>

    <div :class="`stricky-header stricked-menu main-menu main-menu__two ${sticky ? 'stricky-fixed' : ''
      }`">
      <div class="sticky-header__content">
        <div class="container">
          <div class="main-menu__inner clearfix">
            <a href="#" class="mobile-nav__toggler" @click="mobileDrawerStatusChange">
              <i class="fa fa-bars"></i>
            </a>
            <ul class="main-menu__list">
              <li v-for="item in navMenus" :key="item.name"
                :class="`${undefined !== item.subItems ? 'dropdown ' : ' '}`">
                <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
                <ul class="sub-menu" v-if="undefined !== item.subItems">
                  <li v-for="subitem in item.subItems" :key="subitem.name">
                    <nuxt-link :to="subitem.url">{{ subitem.name }}</nuxt-link>
                    <ul class="sub-menu" v-if="undefined !== subitem.subItems">
                      <li v-for="subitem in subitem.subItems" :key="subitem.name">
                        <nuxt-link :to="subitem.url">{{
                          subitem.name
                        }}</nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="main-menu__right">
              <div class="main-menu__right-social">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook-square"></i></a>
                <a href="#"><i class="fab fa-dribbble"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </div>
              <a href="#" class="main-menu__search search-toggler icon-magnifying-glass"
                @click="searchPopupStatusChange"></a>
              <a href="#" class="main-menu__cart icon-shopping-cart"></a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.sticky-header__content -->
    </div>
    <!-- /.stricky-header -->
  </div>
</template>
<style>
.logo {
  width: 100%;
}
</style>
<script>
import data from "~/data/data.json";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      currentPageURL: this.$route.path,
      logo: data.logo,
      navMenus: data.navMenus,
      sticky: false,
    };
  },
  computed: {
    mobileDrawer() {
      return this.$store.state.mobileDrawerStatus;
    },
    searchPopup() {
      return this.$store.state.searchPopupStatus;
    },
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
    ...mapMutations({
      mobileDrawerStatusChange: "changeMobileDrawerStatus",
      searchPopupStatusChange: "changeSearchPopupStatus",
    }),
  },
};
</script>
