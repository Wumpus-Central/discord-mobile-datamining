// === Module 8397: ? ===

// Module 8397
import _mod8395 from "module_8395" /* 8395 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8395.getStringValue(value);
  }
};

export default obj;