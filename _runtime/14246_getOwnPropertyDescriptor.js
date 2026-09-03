// === Module 14246: getOwnPropertyDescriptor ===

// Module 14246 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14194 */;
import _mod14195 from "module_14195" /* 14195 */;


export default getOwnPropertyDescriptor && _mod14195(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);