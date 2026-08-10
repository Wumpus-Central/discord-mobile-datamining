// _runtime/13627_getOwnPropertyDescriptor.js

export default require("getOwnPropertyDescriptor") && require("module_13576")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);