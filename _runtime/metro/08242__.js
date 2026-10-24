// === Module 8242: ? ===

// Module 8242
import _mod8239 from "module_8239" /* 8239 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod8239.getStringValue(value);
  }
};

export default obj;