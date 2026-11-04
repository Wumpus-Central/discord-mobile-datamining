// === Module 8446: ? ===

// Module 8446
import _mod8444 from "module_8444" /* 8444 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8444.getStringValue(value);
  }
};

export default obj;