// _runtime/13821_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor from "13769_getOwnPropertyDescriptor.js";
import _mod13770 from "metro/13770__.js";


export default getOwnPropertyDescriptor && _mod13770(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);