// _runtime/13504_getOwnPropertyDescriptor.js

export default require("getOwnPropertyDescriptor") && require("module_13453")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);