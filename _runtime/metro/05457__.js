// === Module 5457: ? ===

// Module 5457
import _mod5455 from "module_5455" /* 5455 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod5455.getStringValue(value);
  }
};

export default obj;