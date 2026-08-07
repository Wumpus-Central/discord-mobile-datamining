// _runtime/13503_getOwnPropertyDescriptor.js

export default !require("module_13504")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);