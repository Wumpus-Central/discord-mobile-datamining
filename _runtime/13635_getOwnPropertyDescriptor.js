// _runtime/13635_getOwnPropertyDescriptor.js

export default require("getOwnPropertyDescriptor") && require("module_13584")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);