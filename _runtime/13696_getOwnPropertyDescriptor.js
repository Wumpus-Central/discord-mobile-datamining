// _runtime/13696_getOwnPropertyDescriptor.js

export default require("getOwnPropertyDescriptor") && require("module_13645")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);