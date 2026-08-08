// _runtime/13573_getOwnPropertyDescriptor.js

export default !require("module_13574")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);