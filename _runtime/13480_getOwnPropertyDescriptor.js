// _runtime/13480_getOwnPropertyDescriptor.js

export default !require("module_13481")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);