<template>
  <q-layout view="hHh lpr lFf">
    <q-header elevated>
      <div>
        <q-img src="statics/hp-banner.jpg" class="header-image absolute-top" />
        <q-img src="statics/girl-h.png" class="header-deco absolute-top-right" />
      </div>
      <q-toolbar>
        <div class="q-px-sm q-pt-lg">
          <div class="text-h4">PLAYONE</div>
          <div class="text-subtitle1">APP/H5遊戲外包接案</div>
        </div>
      </q-toolbar>

      <!-- <q-toolbar>
        <div class="window-width row justify-end q-pa-md q-gutter-y-sm">
        </div>
      </q-toolbar> -->

      <q-toolbar style="background-image: linear-gradient(#1D1D1D5E, #1D1D1DA2);">
        <q-btn flat dense round icon="info_outline" aria-label="Info" @click="drawer = !drawer" />
        <div class="text-subtitle1">{{ curTime }}</div>
        <q-space />
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="開發案例" icon="stars" />
          <q-breadcrumbs-el label="估價說明" icon="help" />
          <!-- <q-breadcrumbs-el label="關於我們" icon="gamepad" /> -->
        </q-breadcrumbs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="540">
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 220px; border-right: 1px solid #ddd;"
      >
        <q-list padding>
          <q-item exact to="/" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              todo
            </q-item-section>
          </q-item>

          <q-item exact to="/help" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>
              help
            </q-item-section>
          </q-item>

          <q-item exact to="/phaser" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="game" />
            </q-item-section>

            <q-item-section>
              phaser
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 220px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="statics/logo512.png" />
          </q-avatar>
          <div class="text-weight-bold">虹龍數位文創有限公司</div>
          <p></p>
          <div>統一編號：</div>
          <a href="https://findbiz.nat.gov.tw/fts/query/QueryBar/queryInit.do">53773659</a>
          <div>電子信箱：</div>
          <a href="mailto:playoneapps@gmail.com.tw">playoneapps@gmail.com</a>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'
// import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      drawer: false,
      essentialLinks: linksData
    }
  },
  computed: {
    curTime: function () {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'YYYY.MM.DD')
    }
  }
}
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
}
.header-deco {
  height: 100%;
  max-width: 237px;
  z-index: -1;
}
@media only screen and (max-width: 370px) {
  .header-deco {
    opacity: 0;
  }
}
</style>
