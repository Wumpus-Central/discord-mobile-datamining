// discord_app/modules/user_profile/utils/parseUserProfileCollectibles.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";

const result = obj132.fileFinishedImporting("modules/user_profile/utils/parseUserProfileCollectibles.tsx");

export default function parseUserProfileCollectibles(collectibles) {
  let tmp;
  let tmp2;
  collectibles = undefined;
  if (collectibles != null) {
    collectibles = collectibles.collectibles;
  }
  if (null == collectibles) {
    return { collectibles: "Array", profileEffect: "HermesInternal", profileFrame: "r" };
  } else {
    const items = [];
    collectibles = collectibles.collectibles;
    const iter = collectibles[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let obj = { skuId: null, type: null, expiresAt: null };
      ({ sku_id: obj[0], type: obj[1] } = nextResult);
      let date;
      if (null != nextResult.expires_at) {
        let _Date = Date;
        date = new Date(tmp7.expires_at);
      }
      obj[2] = date;
      let arr = items.push(obj);
      if (tmp7.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
        obj = { skuId: null, expiresAt: null };
        obj[0] = tmp7.sku_id;
        let rounded;
        if (null != tmp7.expires_at) {
          let _Math = Math;
          let _Date3 = Date;
          let date1 = new Date(tmp7.expires_at);
          rounded = Math.floor(date1.getTime() / 1000);
        }
        obj[1] = rounded;
        tmp = obj;
      } else if (tmp7.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
        obj = { skuId: null, type: null, expiresAt: null };
        obj[0] = tmp7.sku_id;
        obj[1] = CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
        let date2;
        if (null != tmp7.expires_at) {
          let _Date2 = Date;
          date2 = new Date(tmp7.expires_at);
        }
        obj[2] = date2;
        tmp2 = obj;
      }
      continue;
    }
    obj1 = { collectibles: null, profileEffect: null, profileFrame: null };
    obj1[0] = items;
    obj1[1] = tmp;
    obj1[2] = tmp2;
    return obj1;
  }
};