// === Module 7863: ? ===

// Module 7863
import _mod7860 from "module_7860" /* 7860 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod7860.getStringValue(value);
  }
};

export default obj;