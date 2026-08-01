// === Module 13436: getOwnPropertyDescriptor ===

// Module 13436 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13385")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);