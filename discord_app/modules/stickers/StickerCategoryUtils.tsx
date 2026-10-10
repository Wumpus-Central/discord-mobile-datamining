// discord_app/modules/stickers/StickerCategoryUtils.tsx
import StickersTypes from "StickersTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/stickers/StickerCategoryUtils.tsx");

export const isStickerCategoryNitroLocked = function isStickerCategoryNitroLocked(type, stateFromStores, arg2) {
  _require = stateFromStores;
  dependencyMap = arg2;
  let everyResult = type.type === require("StickersTypes").StickerCategoryTypes.GUILD;
  if (everyResult) {
    everyResult = 0 !== type.stickers.length;
  }
  if (everyResult) {
    const stickers = type.stickers;
    everyResult = stickers.every((item) => {
      const stickerSendability = closure_0(7046).getStickerSendability(item, closure_0, dependencyMap);
      return stickerSendability === closure_0(7046).StickerSendability.SENDABLE_WITH_PREMIUM;
    });
  }
  return everyResult;
};
export const getStickerCategoriesWithNitroLockState = function getStickerCategoriesWithNitroLockState(arr, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  return arr.flatMap((type) => {
    type = type.type;
    if (StickersTypes.StickerCategoryTypes.FAVORITE !== type) {
      if (StickersTypes.StickerCategoryTypes.RECENT !== type) {
        if (StickersTypes.StickerCategoryTypes.GUILD === type) {
          closure_0 = tmp;
          dependencyMap = tmp2;
          const stickers1 = type.stickers;
          const found = stickers1.filter((item) => {
            const stickerSendability = closure_0(7046).getStickerSendability(item, closure_0, dependencyMap);
            return stickerSendability !== closure_0(7046).StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
          });
          if (found.length > 0) {
            const obj2 = {};
            const merged = Object.assign(type);
            obj2.stickers = found;
            closure_0 = tmp;
            dependencyMap = tmp2;
            let everyResult = obj2.type === StickersTypes.StickerCategoryTypes.GUILD && 0 !== obj2.stickers.length;
            if (everyResult) {
              const stickers = obj2.stickers;
              everyResult = stickers.every((item) => {
                const stickerSendability = closure_0(7046).getStickerSendability(item, closure_0, dependencyMap);
                return stickerSendability === closure_0(7046).StickerSendability.SENDABLE_WITH_PREMIUM;
              });
            }
            if (everyResult) {
              const obj3 = {};
              const merged1 = Object.assign(type);
              obj3.stickers = found;
              obj3.isNitroLocked = true;
              let obj4 = obj3;
            }
            let obj = obj4;
          }
          obj4 = {};
          const merged2 = Object.assign(type);
          obj4.isNitroLocked = false;
        } else {
          obj = {};
          const merged3 = Object.assign(type);
          obj.isNitroLocked = false;
        }
      }
      if (null != obj) {
        const items = [obj];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }
    closure_0 = tmp;
    dependencyMap = tmp2;
    const stickers2 = type.stickers;
    const found1 = stickers2.filter((item) => {
      const stickerSendability = closure_0(7046).getStickerSendability(item, closure_0, dependencyMap);
      return stickerSendability !== closure_0(7046).StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
    });
    let tmp18 = null;
    if (0 !== found1.length) {
      const obj5 = {};
      const merged4 = Object.assign(type);
      obj5.stickers = found1;
      obj5.isNitroLocked = false;
      tmp18 = obj5;
    }
    obj = tmp18;
  });
};
