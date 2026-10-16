// === Module 8075: ? ===

// Module 8075
import _mod8073 from "module_8073" /* 8073 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8073.getStringValue(value);
  }
};

export default obj;