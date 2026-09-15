// === Module 5326: ? ===

// Module 5326
import _mod5323 from "module_5323" /* 5323 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5323.getStringValue(value);
  }
};

export default obj;