// === Module 13940: getOwnPropertyDescriptor ===

// Module 13940 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13888 */;
import _mod13889 from "module_13889" /* 13889 */;


export default getOwnPropertyDescriptor && _mod13889(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);