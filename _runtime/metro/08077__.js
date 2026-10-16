// === Module 8077: ? ===

// Module 8077
import _mod8074 from "module_8074" /* 8074 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod8074.getStringValue(value);
  }
};

export default obj;