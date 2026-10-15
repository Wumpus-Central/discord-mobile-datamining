// === Module 8072: ? ===

// Module 8072
import _mod8070 from "module_8070" /* 8070 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8070.getStringValue(value);
  }
};

export default obj;