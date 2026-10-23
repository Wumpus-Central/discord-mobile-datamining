// === Module 8227: ? ===

// Module 8227
import _mod8225 from "module_8225" /* 8225 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8225.getStringValue(value);
  }
};

export default obj;