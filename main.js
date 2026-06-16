new Vue({
  el: '#app',
  vuetify: new Vuetify({
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#6a4c7a',
          secondary: '#2d2233',
          accent: '#b8a0c4',
          background: '#0a080c',
        }
      }
    },
    icons: {
      iconfont: 'mdi',
    },
  }),
  data: () => ({
    drawer: false,
    dialog: false,
    snackbar: true, // Показываем приветствие при загрузке
    menuItems: [
      { title: 'О проекте', link: 'about' },
      { title: 'Коллекция', link: 'lookbook' },
      { title: 'Контакты', link: 'contact' },
    ],
    footerLinks: ['Эстетика', 'Мистика', 'Викторианство', 'Тени'],
    lookbookItems: [
      {
        title: 'Корсет «Полночь»',
        subtitle: 'Атлас, кружево, шнуровка',
        image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'Плащ «Ворон»',
        subtitle: 'Бархат, перья, капюшон',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'Аксессуар «Луна»',
        subtitle: 'Серебро, опал, филигрань',
        image: 'https://images.unsplash.com/photo-1531586112822-9af83b0a4228?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      },
    ],
  }),
  methods: {
    scrollTo(linkId) {
      const element = document.getElementById(linkId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.drawer = false; // Закрываем меню на мобильных
      }
    },
  },
});