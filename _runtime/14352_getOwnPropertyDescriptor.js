// === Module 14352: getOwnPropertyDescriptor ===

// Module 14352 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14300 */;
import _mod14301 from "module_14301" /* 14301 */;


export default getOwnPropertyDescriptor && _mod14301(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);