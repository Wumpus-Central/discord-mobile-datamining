// === Module 5544: ? ===

// Module 5544
import _mod5541 from "module_5541" /* 5541 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5541.getStringValue(value);
  }
};

export default obj;