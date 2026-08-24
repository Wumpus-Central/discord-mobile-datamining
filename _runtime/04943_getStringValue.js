// === Module 4943: getStringValue ===

// Module 4943 (getStringValue)
import getStringValue from "getStringValue" /* 4940 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return getStringValue.getStringValue(value);
  }
};
arg5.default = obj;