// _runtime/13676_getOwnPropertyDescriptor.js

export default !require("module_13677")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);