// _runtime/13436_getOwnPropertyDescriptor.js

export default require("getOwnPropertyDescriptor") && require("module_13385")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);