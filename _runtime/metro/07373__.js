// _runtime/metro/07373__.js
import _mod7370 from "07370__.js";

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod7370.getStringValue(value);
  },
};

export default obj;
