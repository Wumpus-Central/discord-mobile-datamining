// === Module 13728: getOwnPropertyDescriptor ===

// Module 13728 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13676 */;
import _mod13677 from "module_13677" /* 13677 */;


export default getOwnPropertyDescriptor && _mod13677(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);