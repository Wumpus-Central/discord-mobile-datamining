// === Module 5410: ? ===

// Module 5410
import _mod5408 from "module_5408" /* 5408 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod5408.getStringValue(value);
  }
};

export default obj;