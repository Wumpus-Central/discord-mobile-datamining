// === Module 8451: ? ===

// Module 8451
import _mod8449 from "module_8449" /* 8449 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8449.getStringValue(value);
  }
};

export default obj;