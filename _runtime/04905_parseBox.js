// _runtime/04905_parseBox.js
import { parseBox } from "04906_parseBox.js";
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        let parseBoxResult = parseBox /* parseBox */.parseBox(getUint32, 0);
        if (parseBoxResult) {
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
    return parseBox /* parseBox */.findOffsets(byteLength);
  }
};