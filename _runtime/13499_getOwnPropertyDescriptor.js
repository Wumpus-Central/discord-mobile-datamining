// === Module 13499: getOwnPropertyDescriptor ===

// Module 13499 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13448")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);