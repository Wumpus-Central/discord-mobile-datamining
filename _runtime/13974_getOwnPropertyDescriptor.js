// _runtime/13974_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor from "13922_getOwnPropertyDescriptor.js";
import _mod13923 from "metro/13923__.js";


export default getOwnPropertyDescriptor && _mod13923(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);