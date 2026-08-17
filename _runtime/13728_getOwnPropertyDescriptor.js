// _runtime/13728_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor from "13676_getOwnPropertyDescriptor.js";
import _mod13677 from "metro/13677__.js";


export default getOwnPropertyDescriptor && _mod13677(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);