// === Module 8189: ? ===

// Module 8189
import _mod8187 from "module_8187" /* 8187 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8187.getStringValue(value);
  }
};

export default obj;