// === Module 8076: ? ===

// Module 8076
import _mod8073 from "module_8073" /* 8073 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod8073.getStringValue(value);
  }
};

export default obj;