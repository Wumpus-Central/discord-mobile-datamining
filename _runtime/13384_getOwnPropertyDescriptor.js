// _runtime/13384_getOwnPropertyDescriptor.js

export default !require("module_13385")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);