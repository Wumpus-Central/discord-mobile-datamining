// === Module 5547: ? ===

// Module 5547
import _mod5545 from "module_5545" /* 5545 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod5545.getStringValue(value);
  }
};

export default obj;