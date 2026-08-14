// _runtime/13644_getOwnPropertyDescriptor.js

export default !require("module_13645")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);