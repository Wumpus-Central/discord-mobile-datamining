// === Module 14007: getOwnPropertyDescriptor ===

// Module 14007 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13955 */;
import _mod13956 from "module_13956" /* 13956 */;


export default getOwnPropertyDescriptor && _mod13956(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);