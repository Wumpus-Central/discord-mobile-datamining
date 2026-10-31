// === Module 8307: ? ===

// Module 8307
import _mod8304 from "module_8304" /* 8304 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod8304.getStringValue(value);
  }
};

export default obj;