// === Module 7827: ? ===

// Module 7827
import _mod7825 from "module_7825" /* 7825 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod7825.getStringValue(value);
  }
};

export default obj;