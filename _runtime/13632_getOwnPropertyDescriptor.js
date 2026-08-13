// _runtime/13632_getOwnPropertyDescriptor.js

export default !require("module_13633")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);