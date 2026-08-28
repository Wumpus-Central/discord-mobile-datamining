// _runtime/13940_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor from "13888_getOwnPropertyDescriptor.js";
import _mod13889 from "metro/13889__.js";


export default getOwnPropertyDescriptor && _mod13889(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);