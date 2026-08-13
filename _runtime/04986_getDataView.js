// _runtime/04986_getDataView.js
import { getDataView } from "04972_getDataView.js";
const require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];
arg5.default = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      hasItem = closure_3.includes(getDataView.getStringFromDataView(dataView, 0, c2));
      const obj = getDataView;
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};