// === Module 8963: ? ===

// Module 8963
import _mod8949 from "module_8949" /* 8949 */;

require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];

export default {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      hasItem = closure_3.includes(_mod8949.getStringFromDataView(dataView, 0, c2));
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};