// _runtime/13921_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor from "13869_getOwnPropertyDescriptor.js";
import _mod13870 from "metro/13870__.js";


export default getOwnPropertyDescriptor && _mod13870(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);