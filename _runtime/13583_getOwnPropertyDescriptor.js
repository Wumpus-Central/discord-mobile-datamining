// _runtime/13583_getOwnPropertyDescriptor.js

export default !require("module_13584")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);