// === Module 13447: getOwnPropertyDescriptor ===

// Module 13447 (getOwnPropertyDescriptor)

export default !require("module_13448")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);