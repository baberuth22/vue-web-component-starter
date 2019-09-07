You must have Vue CLI 3 and Vue CLI service.

```
npm uninstall -g @vue/cli
npm install -g @vue/cli
npm install -g @vue/cli-service-global
```

This project creates a web component using Vue by running the following command:

```
vue build --target wc --name my-custom-element ./src/main.js
```

Before building, comment out these lines in main js:
```
/*
import App from "./App.vue";
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
*/
```

Testing the component at localhost:[port]/testing.html by copying min and map js files.

# vue-web-component-starter

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
