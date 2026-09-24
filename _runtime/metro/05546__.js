// === Module 5546: ? ===

// Module 5546
import _mod5543 from "module_5543" /* 5543 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5543.getStringValue(value);
  }
};

export default obj;