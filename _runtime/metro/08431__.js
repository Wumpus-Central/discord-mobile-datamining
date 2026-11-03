// === Module 8431: ? ===

// Module 8431
import _mod8428 from "module_8428" /* 8428 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod8428.getStringValue(value);
  }
};

export default obj;