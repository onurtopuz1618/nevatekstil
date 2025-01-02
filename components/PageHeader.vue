<template>
  <!--Page Header Start-->
  <section class="page-header">
    <div class="container">
      <ul class="thm-breadcrumb list-unstyled">
        <li><nuxt-link to="/">Anasayfa</nuxt-link></li>
        <li class="color-thm-gray">/</li>
        <li>
          <span>{{ pageName }}</span>
        </li>
      </ul>
    </div>
  </section>
  <!--Page Header End-->
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
    },
    pageName: {
      type: String,
    },
  },
};
</script>
