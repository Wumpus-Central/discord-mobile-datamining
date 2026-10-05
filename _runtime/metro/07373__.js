// === Module 7373: ? ===

// Module 7373
import _mod7370 from "module_7370" /* 7370 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod7370;
    return obj.getStringValue(value);
  }
};

export default obj;