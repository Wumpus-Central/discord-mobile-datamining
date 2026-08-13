// _runtime/13693_getOwnPropertyDescriptor.js

export default require("getOwnPropertyDescriptor") && require("module_13642")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);