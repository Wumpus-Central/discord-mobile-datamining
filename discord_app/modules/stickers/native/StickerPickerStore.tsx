// === Module 9635: useStickerPickerStore ===

// Module 9635 (useStickerPickerStore)
import keys from "keys";

let obj = keys.create((arg0) => {
  let closure_0 = arg0;
  return {
    packToScrollTo: null,
    setPackToScrollTo(pack_id) {
      const callback = pack_id;
      return callback(outer1_1[1]).batchUpdates(() => {
        pack_id((packToScrollTo) => {
          let tmp = packToScrollTo;
          if (packToScrollTo.packToScrollTo !== closure_0) {
            const obj = { packToScrollTo: null };
            obj[0] = tmp2;
            tmp = obj;
          }
          return tmp;
        });
      });
    }
  };
});
const result = require("set").fileFinishedImporting("modules/stickers/native/StickerPickerStore.tsx");

export const useStickerPickerStore = obj;