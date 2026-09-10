// === Module 5291: ? ===

// Module 5291
import _mod5288 from "module_5288" /* 5288 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5288.getStringValue(value);
  }
};

export default obj;