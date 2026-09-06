// _runtime/metro/00258__.js
let closure_0 = [];
let global = { name: "default" };

export default {
  setActiveScene(arg0) {
    global = arg0;
    const item = closure_0.forEach((fn) => fn(global));
  },
  getActiveScene() {
    return global;
  },
  addActiveSceneChangedListener(arg0) {
    closure_0 = arg0;
    closure_0.push(arg0);
    return {
      remove() {
        closure_0 = closure_0.filter((item) => closure_1_0 !== item);
      },
    };
  },
};
