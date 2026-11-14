// === Module 8965: ? ===

// Module 8965
import _mod8963 from "module_8963" /* 8963 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8963.getStringValue(value);
  }
};

export default obj;