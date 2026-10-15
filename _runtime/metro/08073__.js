// _runtime/metro/08073__.js
import _mod8070 from "08070__.js";

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod8070.getStringValue(value);
  },
};

export default obj;
