// import "semantic-ui/dist/semantic.css";
import HelloWorld from "./HelloWorld.html";
// import "semantic-ui-less/semantic.less";

const app = new HelloWorld({
  target: document.getElementById("root"),
  data: {
    name: "Svelte",
    articles: undefined,
    search: false
  }
});

export default app;
