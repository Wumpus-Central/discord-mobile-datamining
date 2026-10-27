// === Module 8239: ? ===

// Module 8239
import _mod8237 from "module_8237" /* 8237 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8237.getStringValue(value);
  }
};

export default obj;