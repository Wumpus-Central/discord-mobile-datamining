// === Module 13384: getOwnPropertyDescriptor ===

// Module 13384 (getOwnPropertyDescriptor)

export default !require("module_13385")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);