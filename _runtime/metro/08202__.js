// === Module 8202: ? ===

// Module 8202
import findOffsets from "findOffsets" /* 8199 */;

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
  }
};