// discord_app/modules/stickers/native/StickerPickerStore.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import keys from "../../../../_runtime/00644_keys.js";

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