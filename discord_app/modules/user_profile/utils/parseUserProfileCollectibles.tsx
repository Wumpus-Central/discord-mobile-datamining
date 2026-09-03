// === Module 7390: parseUserProfileCollectibles ===

// Module 7390 (parseUserProfileCollectibles)
import set from "set" /* 2 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;

const result = set.fileFinishedImporting("modules/user_profile/utils/parseUserProfileCollectibles.tsx");

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
        let tmp9 = nextResult;
        let tmp10 = new.target;
        let tmp11 = new.target;
        date = new Date(tmp7.expires_at);
      }
      obj[2] = date;
      let arr = items.push(obj);
      let tmp13 = nextResult;
      let tmp14 = require;
      let tmp15 = dependencyMap;
      if (tmp7.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
        obj = { skuId: null, expiresAt: null };
        let tmp20 = nextResult;
        obj[0] = tmp7.sku_id;
        let rounded;
        if (null != tmp7.expires_at) {
          let _Math = Math;
          let _Date3 = Date;
          let tmp22 = nextResult;
          let tmp23 = new.target;
          let tmp24 = new.target;
          let date1 = new Date(tmp7.expires_at);
          let tmp25 = date1;
          rounded = Math.floor(date1.getTime() / 1000);
        }
        obj[1] = rounded;
        tmp = obj;
      } else {
        let tmp28 = nextResult;
        if (tmp7.type === tmp14(1949).CollectiblesItemType.PROFILE_FRAME) {
          obj = { skuId: null, type: null, expiresAt: null };
          let tmp29 = nextResult;
          obj[0] = tmp7.sku_id;
          obj[1] = tmp14(1949).CollectiblesItemType.PROFILE_FRAME;
          let date2;
          if (null != tmp7.expires_at) {
            let _Date2 = Date;
            let tmp16 = nextResult;
            let tmp17 = new.target;
            let tmp18 = new.target;
            date2 = new Date(tmp7.expires_at);
          }
          obj[2] = date2;
          tmp2 = obj;
        }
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