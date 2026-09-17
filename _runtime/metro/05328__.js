// === Module 5328: ? ===

// Module 5328
import _mod5326 from "module_5326" /* 5326 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod5326.getStringValue(value);
  }
};

export default obj;