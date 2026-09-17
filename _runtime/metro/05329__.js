// === Module 5329: ? ===

// Module 5329
import _mod5326 from "module_5326" /* 5326 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5326.getStringValue(value);
  }
};

export default obj;