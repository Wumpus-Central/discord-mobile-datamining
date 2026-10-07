// === Module 10127: StickerPickerStore ===

// Module 10127 (StickerPickerStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerStore.tsx");

export const useStickerPickerStore = module_570.create((arg0) => {
  closure_0 = arg0;
  return {
    packToScrollTo: null,
    setPackToScrollTo(pack_id) {
      return pack_id(dependencyMap[1]).batchUpdates(() => {
        pack_id((packToScrollTo) => {
          let tmp = packToScrollTo;
          if (packToScrollTo.packToScrollTo !== pack_id) {
            const obj = { packToScrollTo: tmp2 };
            tmp = obj;
          }
          return tmp;
        });
      });
    }
  };
});