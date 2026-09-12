// === Module 5322: ? ===

// Module 5322
import _mod5319 from "module_5319" /* 5319 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5319.getStringValue(value);
  }
};

export default obj;