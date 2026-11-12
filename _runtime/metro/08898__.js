// === Module 8898: ? ===

// Module 8898
import _mod8896 from "module_8896" /* 8896 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8896.getStringValue(value);
  }
};

export default obj;