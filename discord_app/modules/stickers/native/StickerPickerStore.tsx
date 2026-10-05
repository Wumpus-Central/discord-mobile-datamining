// === Module 10114: StickerPickerStore ===

// Module 10114 (StickerPickerStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

let obj = module_570.create((arg0) => {
  let closure_0 = arg0;
  let obj = {
    packToScrollTo: null,
    setPackToScrollTo(pack_id) {
      let obj = pack_id(dependencyMap[1]);
      return obj.batchUpdates(() => {
        let tmp = pack_id((packToScrollTo) => {
          let tmp = packToScrollTo;
          if (packToScrollTo.packToScrollTo !== pack_id) {
            tmp = { packToScrollTo: tmp2 };
            const obj = { packToScrollTo: tmp2 };
          }
          return tmp;
        });
      });
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerStore.tsx");

export const useStickerPickerStore = obj;