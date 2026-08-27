// === Module 13921: getOwnPropertyDescriptor ===

// Module 13921 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13869 */;
import _mod13870 from "module_13870" /* 13870 */;


export default getOwnPropertyDescriptor && _mod13870(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);