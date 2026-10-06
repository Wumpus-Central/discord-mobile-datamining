// === Module 7383: ? ===

// Module 7383
import _mod7381 from "module_7381" /* 7381 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod7381;
    return obj.getStringValue(value);
  }
};

export default obj;