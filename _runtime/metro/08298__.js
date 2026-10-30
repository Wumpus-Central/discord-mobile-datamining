// === Module 8298: ? ===

// Module 8298
import _mod8296 from "module_8296" /* 8296 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8296.getStringValue(value);
  }
};

export default obj;