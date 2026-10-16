// === Module 8076: ? ===

// Module 8076
import _mod8074 from "module_8074" /* 8074 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8074.getStringValue(value);
  }
};

export default obj;