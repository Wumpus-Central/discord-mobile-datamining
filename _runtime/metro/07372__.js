// === Module 7372: ? ===

// Module 7372
import _mod7370 from "module_7370" /* 7370 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod7370.getStringValue(value);
  }
};

export default obj;