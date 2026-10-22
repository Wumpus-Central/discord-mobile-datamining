// === Module 8226: ? ===

// Module 8226
import _mod8224 from "module_8224" /* 8224 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8224.getStringValue(value);
  }
};

export default obj;