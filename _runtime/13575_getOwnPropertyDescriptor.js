// _runtime/13575_getOwnPropertyDescriptor.js

export default !require("module_13576")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);