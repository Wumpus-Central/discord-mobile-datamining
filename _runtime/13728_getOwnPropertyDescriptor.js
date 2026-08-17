// _runtime/13728_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13676 */;
import _mod13677 from "module_13677" /* 13677 */;


export default getOwnPropertyDescriptor && _mod13677(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);