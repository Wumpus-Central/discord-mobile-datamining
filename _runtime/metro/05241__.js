// === Module 5241: ? ===

// Module 5241
import _mod5238 from "module_5238" /* 5238 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5238.getStringValue(value);
  }
};

export default obj;