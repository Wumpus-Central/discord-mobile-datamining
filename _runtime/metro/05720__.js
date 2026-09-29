// === Module 5720: ? ===

// Module 5720
import _mod5718 from "module_5718" /* 5718 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod5718.getStringValue(value);
  }
};

export default obj;