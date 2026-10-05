// discord_app/modules/stickers/native/StickerPickerStore.tsx
import 00570__ from "../../../../_runtime/metro/00570__.js";
import size from "../../../../_runtime/metro/00002__.js";

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