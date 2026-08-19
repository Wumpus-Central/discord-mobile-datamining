// === Module 10220: useStickerPickerStore ===

// Module 10220 (useStickerPickerStore)
import obj132 from "obj132" /* 2 */;
import keys from "keys" /* 644 */;

let obj = keys.create((arg0) => {
  closure_0 = arg0;
  return {
    packToScrollTo: null,
    setPackToScrollTo(pack_id) {
      const callback = pack_id;
      return callback(dependencyMap[1]).batchUpdates(() => {
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
const result = obj132.fileFinishedImporting("modules/stickers/native/StickerPickerStore.tsx");

export const useStickerPickerStore = obj;