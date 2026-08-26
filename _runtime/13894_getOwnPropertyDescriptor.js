// === Module 13894: getOwnPropertyDescriptor ===

// Module 13894 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13842 */;
import _mod13843 from "module_13843" /* 13843 */;


export default getOwnPropertyDescriptor && _mod13843(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);