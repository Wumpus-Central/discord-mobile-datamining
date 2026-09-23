// === Module 5543: ? ===

// Module 5543
import _mod5541 from "module_5541" /* 5541 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod5541.getStringValue(value);
  }
};

export default obj;