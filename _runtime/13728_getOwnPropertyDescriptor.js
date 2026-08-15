// _runtime/13728_getOwnPropertyDescriptor.js

export default require("getOwnPropertyDescriptor") && require("module_13677")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);