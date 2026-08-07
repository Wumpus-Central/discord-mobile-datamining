// _runtime/13555_getOwnPropertyDescriptor.js

export default require("getOwnPropertyDescriptor") && require("module_13504")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);