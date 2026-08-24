// _runtime/13786_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor from "13734_getOwnPropertyDescriptor.js";
import _mod13735 from "metro/13735__.js";


export default getOwnPropertyDescriptor && _mod13735(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);