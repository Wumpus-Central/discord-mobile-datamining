// === Module 8976: ? ===

// Module 8976
import _mod8974 from "module_8974" /* 8974 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8974.getStringValue(value);
  }
};

export default obj;