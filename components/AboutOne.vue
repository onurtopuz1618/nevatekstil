<template>
  <!--About Page Start-->
  <section class="about-page">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="about-page__left">
            <div class="about-page__img">
              <img src="~/assets/images/resources/about-page-img.png" alt="" />
              <div class="about-page__trusted">
                <h3>Aylık <span>8.750</span>'den fazla üretim</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="about-page__right">
            <div class="section-title text-left">
              <span class="section-title__tagline">Hakkımızda</span>
              <h2 class="section-title__title">
                Yüksek kalite boxer üretimi, güvenilir toptan tedarikçi çözümü
              </h2>
            </div>
            <p class="about-page__right-text">
              Neva Tekstil olarak, yılların deneyimi ve birikimiyle tekstil sektöründe güçlü bir yer edinmiş
              bulunmaktayız. Özel olarak boxer üretimine odaklanan firmamız, kaliteli ürünleri ve müşteri memnuniyetini
              temel alarak sektörde fark yaratmaktadır. Başladığımız günden bu yana inovasyon ve kaliteyi ön planda
              tutarak, müşterilerimize en iyi hizmeti sunmayı amaçlıyoruz.
            </p>
            <p class="about-page__right-text">
              Firmamızın temel prensibi, yüksek kaliteli ürünler ve güvenilir iş ortaklıkları oluşturmaktır. Modern
              üretim tesislerimizde, son teknoloji ekipmanlarımızla, uluslararası standartlara uygun şekilde üretim
              yapıyoruz. Bunun yanında, tasarım aşamasından paketlemeye kadar her süreci büyük bir titizlikle takip
              ediyoruz.
            </p>
            <p class="about-page__right-text">
              Ekibimiz, alanında uzman ve işine tutkuyla bağlı profesyonellerden oluşmaktadır. Bu sayede, her geçen gün
              büyüyen müşteri ağımızla birlikte sektördeki varlığımızı daha da güçlendiriyoruz. Amacımız, yalnızca ürün
              değil, aynı zamanda güven ve değer sunmaktır.
            </p>
            <h3 class="about-page__right-title">
              Daha fazla bilgi almak veya iş birliği yapmak için bizimle iletişime geçebilirsiniz.
            </h3>
            <button @click="goToContact" class="thm-btn">
              <i class="fas fa-arrow-circle-right"></i>
              {{ buttonLabel }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--About Page Start-->
</template>
<script>
export default {
  data() {
    return {
      buttonLabel: 'İletişime Geç', // Buton etiketini burada tanımlayabilirsiniz
    };
  },
  methods: {
    goToContact() {
      this.$router.push('/contact'); // '/contact' sayfasına yönlendirir
    },
  },
};
</script>