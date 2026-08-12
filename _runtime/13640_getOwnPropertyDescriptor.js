// _runtime/13640_getOwnPropertyDescriptor.js

export default !require("module_13641")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);