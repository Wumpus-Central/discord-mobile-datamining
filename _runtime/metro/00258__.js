// === Module 258: ? ===

// Module 258
let closure_0 = [];
let closure_1 = { name: "default" };

export default {
  setActiveScene(arg0) {
    closure_1 = arg0;
    const item = closure_0.forEach((fn) => fn(closure_1_1));
  },
  getActiveScene() {
    return closure_1;
  },
  addActiveSceneChangedListener(arg0) {
    closure_0 = arg0;
    closure_0.push(arg0);
    return {
      remove() {
        closure_0 = closure_0.filter((item) => closure_1_0 !== item);
      }
    };
  }
};