// === Module 8306: ? ===

// Module 8306
import _mod8304 from "module_8304" /* 8304 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8304.getStringValue(value);
  }
};

export default obj;