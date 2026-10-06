// _runtime/metro/07368__.js
import _mod7365 from "07365__.js";

export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7365;
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
    const obj = _mod7365;
    return obj.findOffsets(byteLength);
  },
};
