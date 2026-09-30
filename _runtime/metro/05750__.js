// === Module 5750: ? ===

// Module 5750
import _mod5748 from "module_5748" /* 5748 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod5748.getStringValue(value);
  }
};

export default obj;