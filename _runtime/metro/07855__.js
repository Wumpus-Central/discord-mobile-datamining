// === Module 7855: ? ===

// Module 7855
import _mod7852 from "module_7852" /* 7852 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod7852.getStringValue(value);
  }
};

export default obj;