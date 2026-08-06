// _runtime/13489_getOwnPropertyDescriptor.js

export default !require("module_13490")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);