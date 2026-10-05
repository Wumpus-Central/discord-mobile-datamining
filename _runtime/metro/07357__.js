// _runtime/metro/07357__.js
import _mod7354 from "07354__.js";

export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7354;
        let parseBoxResult = obj.parseBox(getUint32, 0);
        const tmp4 = parseBoxResult;
        if (tmp4) {
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
    const obj = _mod7354;
    return obj.findOffsets(byteLength);
  },
};
