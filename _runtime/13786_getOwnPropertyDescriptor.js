// === Module 13786: getOwnPropertyDescriptor ===

// Module 13786 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13734 */;
import _mod13735 from "module_13735" /* 13735 */;


export default getOwnPropertyDescriptor && _mod13735(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);