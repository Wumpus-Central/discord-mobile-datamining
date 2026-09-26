// discord_app/modules/user_profile/utils/parseUserProfileCollectibles.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_profile/utils/parseUserProfileCollectibles.tsx");

export default function parseUserProfileCollectibles(collectibles) {
  let tmp;
  let tmp2;
  let collectibles1;
  if (collectibles != null) {
    collectibles1 = collectibles.collectibles;
  }
  if (null == collectibles1) {
    return { collectibles: "Array", profileEffect: "channel", profileFrame: "hd" };
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
        let obj2 = { skuId: null, expiresAt: null };
        obj2.skuId = tmp7.sku_id;
        let rounded;
        if (null != tmp7.expires_at) {
          let _Math = Math;
          let _Date3 = Date;
          let tmp23 = new.target;
          let tmp24 = new.target;
          let date1 = new Date(tmp7.expires_at);
          rounded = Math.floor(date1.getTime() / 1000);
        }
        obj2.expiresAt = rounded;
        tmp = obj2;
      } else if (tmp7.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
        let obj3 = { skuId: null, type: null, expiresAt: null };
        obj3.skuId = tmp7.sku_id;
        obj3.type = CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
        let date2;
        if (null != tmp7.expires_at) {
          let _Date2 = Date;
          let tmp17 = new.target;
          let tmp18 = new.target;
          date2 = new Date(tmp7.expires_at);
        }
        obj3.expiresAt = date2;
        tmp2 = obj3;
      }
      continue;
    }
    const obj4 = { collectibles: items, profileEffect: tmp, profileFrame: tmp2 };
    return obj4;
  }
}
