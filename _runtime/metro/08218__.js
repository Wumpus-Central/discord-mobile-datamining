// === Module 8218: ? ===

// Module 8218
import _mod8215 from "module_8215" /* 8215 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod8215.getStringValue(value);
  }
};

export default obj;