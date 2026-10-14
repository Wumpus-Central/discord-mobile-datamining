// === Module 7862: ? ===

// Module 7862
import _mod7860 from "module_7860" /* 7860 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod7860.getStringValue(value);
  }
};

export default obj;