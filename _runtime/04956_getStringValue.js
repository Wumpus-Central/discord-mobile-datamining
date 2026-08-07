// _runtime/04956_getStringValue.js
import { getStringValue } from "04954_getStringValue.js";
const require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return getStringValue.getStringValue(value);
  }
};
arg5.default = obj;