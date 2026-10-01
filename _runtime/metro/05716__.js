// === Module 5716: ? ===

// Module 5716
import _modDef5715 from "module_5715" /* 5715 */;
import _modDef5717 from "module_5717" /* 5717 */;

importDefault = arg2;
const dependencyMap = arg6;

export default {
  isTiffFile(byteLength) {
    let tmp = byteLength;
    if (tmp) {
      tmp = byteLength.byteLength >= 4;
    }
    if (tmp) {
      const uint16 = byteLength.getUint16(0);
      tmp = byteLength.getUint16(2, uint16 === _modDef5717.LITTLE_ENDIAN) === 42;
    }
    return tmp;
  },
  findTiffOffsets() {
    if (_modDef5715.USE_EXIF) {
      return { hasAppMarkers: true, tiffHeaderOffset: 0 };
    } else {
      return {};
    }
  }
};