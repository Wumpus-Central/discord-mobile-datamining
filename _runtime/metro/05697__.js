// _runtime/metro/05697__.js
import _modDef5696 from "05696__.js";
import _modDef5698 from "05698__.js";

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
      tmp = byteLength.getUint16(2, uint16 === _modDef5698.LITTLE_ENDIAN) === 42;
    }
    return tmp;
  },
  findTiffOffsets() {
    if (_modDef5696.USE_EXIF) {
      return { hasAppMarkers: true, tiffHeaderOffset: 0 };
    } else {
      return {};
    }
  },
};
