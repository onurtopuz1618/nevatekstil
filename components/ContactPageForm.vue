<template>
  <!--Contact page Start-->
  <section class="contact-page">
    <div class="container">
      <div class="section-title text-center">
        <span class="section-title__tagline">Bizimle İletişime Geç</span>
        <h2 class="section-title__title">
          Her ihtiyacınıza uygun kaliteli üretimle yanınızdayız.
        </h2>
      </div>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="contact-page__left">
            <p class="contact-page__text">
              Her ihtiyacınıza uygun kaliteli üretimle yanınızdayız. Güvenilir
              hizmet anlayışımız ve geniş ürün yelpazemizle size en iyi
              çözümleri sunmak için çalışıyoruz.
            </p>
            <div class="contact-page__contact-info">
              <ul class="contact-page__contact-list list-unstyled">
                <li>
                  <div class="icon">
                    <span class="icon-chat"></span>
                  </div>
                  <div class="text">
                    <p>Telefon</p>
                    <a href="tel:92 666 888 0000">92 666 888 0000</a>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <span class="icon-message"></span>
                  </div>
                  <div class="text">
                    <p>E-Posta</p>
                    <a href="mailto:info@nevatekstil.com"
                      >info@nevatekstil.com</a
                    >
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <span class="icon-address"></span>
                  </div>
                  <div class="text">
                    <p>Adres</p>
                    <h5>Kızılpınar Mh. Yıldız Sk.</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="contact-page__form">
            <form @submit.prevent="submitForm" class="contact-page__main-form contact-form-validated">
              <div class="row">
                <div class="col-xl-12">
                  <div class="contact-page__input-box">
                    <input type="text" v-model="name" placeholder="İsminiz"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12">
                  <div class="contact-page__input-box">
                    <input type="text" v-model="phone" placeholder="Telefon Numaranız" name="phone"/>
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="contact-page__input-box">
                    <textarea v-model="message" placeholder="Talebiniz"></textarea>
                  </div>
                  <button type="submit" class="thm-btn contact-page__btn"><i class="fas fa-arrow-circle-right"></i>Gönder</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Contact page End-->
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.$post("/api/contact", {
          name: this.name,
          phone: this.phone,
          message: this.message,
        });
        alert("İletişim Talebiniz Gönderildi. En Kısa Sürede Size Döneceğiz.");
        this.name = "";
        this.phone = "";
        this.message = "";
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form.");
      }
    },
  },
};
</script>