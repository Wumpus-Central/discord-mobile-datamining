// _runtime/13541_getOwnPropertyDescriptor.js

export default require("getOwnPropertyDescriptor") && require("module_13490")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);