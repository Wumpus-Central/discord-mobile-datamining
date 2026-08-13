// _runtime/13641_getOwnPropertyDescriptor.js

export default !require("module_13642")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);