// === Module 8380: ? ===

// Module 8380
import _mod8378 from "module_8378" /* 8378 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8378.getStringValue(value);
  }
};

export default obj;