// === Module 13974: getOwnPropertyDescriptor ===

// Module 13974 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13922 */;
import _mod13923 from "module_13923" /* 13923 */;


export default getOwnPropertyDescriptor && _mod13923(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);