// _runtime/13894_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor from "13842_getOwnPropertyDescriptor.js";
import _mod13843 from "metro/13843__.js";


export default getOwnPropertyDescriptor && _mod13843(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);