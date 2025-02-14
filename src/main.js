import { createApp } from "vue";
import './assets/main.css'
import App from "./App.vue";
import Button from "./components/Button.vue";

let app = createApp(App);

app.component("Button", Button);

app.mount("#app");
