// === Module 14230: getOwnPropertyDescriptor ===

// Module 14230 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14178 */;
import _mod14179 from "module_14179" /* 14179 */;


export default getOwnPropertyDescriptor && _mod14179(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);