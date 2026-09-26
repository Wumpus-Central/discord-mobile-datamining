// === Module 5553: ? ===

// Module 5553
import _mod5551 from "module_5551" /* 5551 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod5551.getStringValue(value);
  }
};

export default obj;