// === Module 7349: ? ===

// Module 7349
import _modDef7348 from "module_7348" /* 7348 */;
import _modDef7350 from "module_7350" /* 7350 */;

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
      tmp = byteLength.getUint16(2, uint16 === _modDef7350.LITTLE_ENDIAN) === 42;
    }
    return tmp;
  },
  findTiffOffsets() {
    if (_modDef7348.USE_EXIF) {
      return { hasAppMarkers: true, tiffHeaderOffset: 0 };
    } else {
      return {};
    }
  }
};