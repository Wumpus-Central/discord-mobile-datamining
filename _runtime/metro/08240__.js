// === Module 8240: ? ===

// Module 8240
import _mod8237 from "module_8237" /* 8237 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod8237.getStringValue(value);
  }
};

export default obj;