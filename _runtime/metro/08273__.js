// === Module 8273: ? ===

// Module 8273
import _mod8271 from "module_8271" /* 8271 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8271.getStringValue(value);
  }
};

export default obj;