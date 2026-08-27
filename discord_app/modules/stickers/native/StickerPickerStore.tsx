// === Module 10301: useStickerPickerStore ===

// Module 10301 (useStickerPickerStore)
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;

let obj = keys.create((arg0) => {
  closure_0 = arg0;
  return {
    packToScrollTo: null,
    setPackToScrollTo(pack_id) {
      const callback = pack_id;
      return callback(closure_1_1[1]).batchUpdates(() => {
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
const result = set.fileFinishedImporting("modules/stickers/native/StickerPickerStore.tsx");

export const useStickerPickerStore = obj;