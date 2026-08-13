// _runtime/13684_getOwnPropertyDescriptor.js

export default require("getOwnPropertyDescriptor") && require("module_13633")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);