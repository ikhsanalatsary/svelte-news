// import "semantic-ui/dist/semantic.css";
import HelloWorld from "./HelloWorld.html";
// import "semantic-ui-less/semantic.less";

let window_updating = false;
const app = new HelloWorld({
  target: document.getElementById("root"),
  data: {
    name: "Svelte",
    articles: undefined,
    search: undefined,
    count: 0,
    currentPage: 1,
    fetching: false,
    y: 0,
    isSearch: false
  }
});

export default app;
