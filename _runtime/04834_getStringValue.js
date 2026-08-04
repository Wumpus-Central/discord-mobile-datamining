// _runtime/04834_getStringValue.js
const require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return require(4831) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;