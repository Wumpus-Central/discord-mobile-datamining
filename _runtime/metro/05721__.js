// === Module 5721: ? ===

// Module 5721
import _mod5718 from "module_5718" /* 5718 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5718.getStringValue(value);
  }
};

export default obj;