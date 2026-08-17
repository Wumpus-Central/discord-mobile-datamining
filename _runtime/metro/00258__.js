// _runtime/metro/00258__.js
let closure_0 = [];
let closure_1 = { name: "default" };
arg5.default = {
  setActiveScene(arg0) {
    closure_1 = arg0;
    const item = arr.forEach((arg0) => arg0(closure_1));
  },
  getActiveScene() {
    return closure_1;
  },
  addActiveSceneChangedListener(arg0) {
    let arr = arg0;
    arr = arr.push(arg0);
    return {
      remove() {
        closure_0 = closure_0.filter((arg0) => closure_0 !== arg0);
      }
    };
  }
};