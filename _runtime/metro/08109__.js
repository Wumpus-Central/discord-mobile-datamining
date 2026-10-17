// === Module 8109: ? ===

// Module 8109
import _mod8095 from "module_8095" /* 8095 */;

require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];

export default {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      hasItem = closure_3.includes(_mod8095.getStringFromDataView(dataView, 0, c2));
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};