// === Module 8428: ? ===

// Module 8428
import _modDef8427 from "module_8427" /* 8427 */;
import _modDef8429 from "module_8429" /* 8429 */;

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
      tmp = byteLength.getUint16(2, uint16 === _modDef8429.LITTLE_ENDIAN) === 42;
    }
    return tmp;
  },
  findTiffOffsets() {
    if (_modDef8427.USE_EXIF) {
      return { hasAppMarkers: true, tiffHeaderOffset: 0 };
    } else {
      return {};
    }
  }
};