// _runtime/13452_getOwnPropertyDescriptor.js

export default !require("module_13453")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);