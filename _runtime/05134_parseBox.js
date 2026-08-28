// === Module 5134: parseBox ===

// Module 5134 (parseBox)
import parseBox from "parseBox" /* 5131 */;

require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        let parseBoxResult = parseBox.parseBox(getUint32, 0);
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
    return parseBox.findOffsets(byteLength);
  }
};