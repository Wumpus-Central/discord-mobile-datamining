// discord_app/modules/user_profile/utils/parseUserProfileCollectibles.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_profile/utils/parseUserProfileCollectibles.tsx");

export default function parseUserProfileCollectibles(collectibles) {
  let date;
  let date2;
  let floorResult;
  let tmp;
  let tmp2;
  let collectibles1;
  if (collectibles != null) {
    collectibles1 = collectibles.collectibles;
  }
  if (null == collectibles1) {
    return { collectibles: "duration", profileEffect: "toCharArray$esjava$1", profileFrame: "toCharArray$esjava$1" };
  } else {
    const items = [];
    collectibles = collectibles.collectibles;
    const iter = collectibles[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let obj = { skuId: null, type: null, expiresAt: date };
      ({ sku_id: obj.skuId, type: obj.type } = nextResult);
      date = undefined;
      let push = items.push;
      if (null != nextResult.expires_at) {
        let _Date = Date;
        let self = this;
        let self2 = this;
        date = new Date(tmp7.expires_at);
      }
      let arr = push(obj);
      if (tmp7.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
        let obj2 = { skuId: tmp7.sku_id, expiresAt: floorResult };
        floorResult = undefined;
        if (null != tmp7.expires_at) {
          let _Math = Math;
          let _Date3 = Date;
          let self5 = this;
          let self6 = this;
          let date1 = new Date(tmp7.expires_at);
          floorResult = floor(date1.getTime() / 1000);
        }
        tmp = obj2;
      } else if (tmp7.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
        let obj3 = {
          skuId: tmp7.sku_id,
          type: CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME,
          expiresAt: date2,
        };
        date2 = undefined;
        if (null != tmp7.expires_at) {
          let _Date2 = Date;
          let self3 = this;
          let self4 = this;
          date2 = new Date(tmp7.expires_at);
        }
        tmp2 = obj3;
      }
      continue;
    }
    return { collectibles: items, profileEffect: tmp, profileFrame: tmp2 };
  }
}
