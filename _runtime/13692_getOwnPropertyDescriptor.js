// _runtime/13692_getOwnPropertyDescriptor.js

export default require("getOwnPropertyDescriptor") && require("module_13641")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);