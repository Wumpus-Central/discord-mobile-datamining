// discord_app/modules/user_profile/utils/parseUserProfileCollectibles.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_profile/utils/parseUserProfileCollectibles.tsx");

export default function parseUserProfileCollectibles(collectibles) {
  let tmp;
  let tmp2;
  collectibles = undefined;
  if (collectibles != null) {
    collectibles = collectibles.collectibles;
  }
  if (null == collectibles) {
    return { collectibles: "Array", profileEffect: "call", profileFrame: "o" };
  } else {
    const items = [];
    collectibles = collectibles.collectibles;
    const iter = collectibles[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let obj = { skuId: null, type: null, expiresAt: null };
      ({ sku_id: obj.skuId, type: obj.type } = nextResult);
      let date;
      if (null != nextResult.expires_at) {
        let _Date = Date;
        let tmp10 = new.target;
        let tmp11 = new.target;
        date = new Date(tmp7.expires_at);
      }
      obj.expiresAt = date;
      let arr = items.push(obj);
      if (tmp7.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
        obj = { skuId: null, expiresAt: null };
        obj.skuId = tmp7.sku_id;
        let rounded;
        if (null != tmp7.expires_at) {
          let _Math = Math;
          let _Date3 = Date;
          let tmp23 = new.target;
          let tmp24 = new.target;
          let date1 = new Date(tmp7.expires_at);
          rounded = Math.floor(date1.getTime() / 1000);
        }
        obj.expiresAt = rounded;
        tmp = obj;
      } else if (tmp7.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
        obj = { skuId: null, type: null, expiresAt: null };
        obj.skuId = tmp7.sku_id;
        obj.type = CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
        let date2;
        if (null != tmp7.expires_at) {
          let _Date2 = Date;
          let tmp17 = new.target;
          let tmp18 = new.target;
          date2 = new Date(tmp7.expires_at);
        }
        obj.expiresAt = date2;
        tmp2 = obj;
      }
      continue;
    }
    const obj1 = { collectibles: items, profileEffect: tmp, profileFrame: tmp2 };
    return obj1;
  }
}
