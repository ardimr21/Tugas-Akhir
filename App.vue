<template>
  <v-app>
    <v-navigation-drawer app left permanent="true"> 
      <v-list flat nav class="py-10">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            exact
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      drawer : true,
      item: 1,
      items: [
        { title: 'Beranda', icon: 'mdi-view-dashboard', link :'/' },
        { title: 'Data Latih', icon: 'mdi-database', link :'/DataLatih' },
        { title: 'Identifikasi', icon: 'mdi-check-bold', link :'/Identifikasi'},
        { title: 'Bantuan', icon: 'mdi-help-box', link :'/Bantuan'},
      ],
    }
  }
}
</script>

