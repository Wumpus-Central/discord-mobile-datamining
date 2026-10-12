// === Module 7855: ? ===

// Module 7855
import _mod7853 from "module_7853" /* 7853 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod7853.getStringValue(value);
  }
};

export default obj;