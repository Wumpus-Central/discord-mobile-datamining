// === Module 5255: ? ===

// Module 5255
import _mod5252 from "module_5252" /* 5252 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5252.getStringValue(value);
  }
};

export default obj;