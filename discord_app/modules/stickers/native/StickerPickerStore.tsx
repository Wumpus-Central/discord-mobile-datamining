// === Module 9760: StickerPickerStore ===

// Module 9760 (StickerPickerStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerStore.tsx");

export const useStickerPickerStore = module_570.create((arg0) => {
  closure_0 = arg0;
  return {
    packToScrollTo: null,
    setPackToScrollTo(dependencyMap) {
      return dependencyMap(closure_1_1[1]).batchUpdates(() => {
        dependencyMap((packToScrollTo) => {
          let tmp = packToScrollTo;
          if (packToScrollTo.packToScrollTo !== dependencyMap) {
            const obj = { packToScrollTo: tmp2 };
            tmp = obj;
          }
          return tmp;
        });
      });
    }
  };
});