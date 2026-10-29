// === Module 8295: ? ===

// Module 8295
import _mod8293 from "module_8293" /* 8293 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8293.getStringValue(value);
  }
};

export default obj;