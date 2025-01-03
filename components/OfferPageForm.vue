<template>
  <!--Contact page Start-->
  <section class="contact-page">
    <div class="container">
      <div class="section-title text-center">
        <span class="section-title__tagline">Kolay Teklif Al!</span>
        <h2 class="section-title__title">
          Aşağıda ki formu doldurun size hızlıca dönüş yapalım.
        </h2>
      </div>
      <div class="row">
        <div class="col-xl-12 col-lg-12">
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