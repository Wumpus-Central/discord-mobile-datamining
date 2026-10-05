// _runtime/07353_ITEM_INFO_TYPE_EXIF.js
import _mod7354 from "metro/07354__.js";

export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7354;
        let parseBoxResult = obj.parseBox(getUint32, 0);
        const tmp4 = parseBoxResult;
        if (tmp4) {
          const items = ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1"];
          parseBoxResult = -1 !== items.indexOf(parseBoxResult.majorBrand);
        }
        return parseBoxResult;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  },
  findHeicOffsets(byteLength) {
    const obj = _mod7354;
    return obj.findOffsets(byteLength);
  },
};
