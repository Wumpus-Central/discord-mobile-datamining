// _runtime/metro/05707__.js
import _mod5693 from "05693__.js";

require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];

export default {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      hasItem = closure_3.includes(_mod5693.getStringFromDataView(dataView, 0, c2));
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  },
};
