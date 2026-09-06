// === Module 10390: StickerPickerStore ===

// Module 10390 (StickerPickerStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerStore.tsx");

export const useStickerPickerStore = module_560.create((arg0) => {
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