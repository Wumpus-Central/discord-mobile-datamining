// _runtime/05179_getDataView.js
import getDataView from "05165_getDataView.js";

require = arg1;
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
  },
};
