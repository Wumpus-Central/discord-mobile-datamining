// _runtime/metro/08057__.js
import findOffsets from "../08054_findOffsets.js";

require = arg1;
const dependencyMap = arg6;

export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        let parseBoxResult = findOffsets.parseBox(getUint32, 0);
        if (parseBoxResult) {
          parseBoxResult = "avif" === parseBoxResult.majorBrand;
        }
        return parseBoxResult;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  },
  findAvifOffsets(byteLength) {
    return findOffsets.findOffsets(byteLength);
  },
};
