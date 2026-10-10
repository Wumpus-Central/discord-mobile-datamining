// === Module 7854: ? ===

// Module 7854
import _mod7852 from "module_7852" /* 7852 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod7852.getStringValue(value);
  }
};

export default obj;