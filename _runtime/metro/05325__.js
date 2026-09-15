// === Module 5325: ? ===

// Module 5325
import _mod5323 from "module_5323" /* 5323 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod5323.getStringValue(value);
  }
};

export default obj;