// === Module 8123: ? ===

// Module 8123
import _mod8120 from "module_8120" /* 8120 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod8120.getStringValue(value);
  }
};

export default obj;