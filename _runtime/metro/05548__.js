// === Module 5548: ? ===

// Module 5548
import _mod5545 from "module_5545" /* 5545 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5545.getStringValue(value);
  }
};

export default obj;