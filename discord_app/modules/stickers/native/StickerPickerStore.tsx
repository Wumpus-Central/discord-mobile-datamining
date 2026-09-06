// discord_app/modules/stickers/native/StickerPickerStore.tsx
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

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