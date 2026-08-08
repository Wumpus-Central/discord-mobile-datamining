// _runtime/13625_getOwnPropertyDescriptor.js

export default require("getOwnPropertyDescriptor") && require("module_13574")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);