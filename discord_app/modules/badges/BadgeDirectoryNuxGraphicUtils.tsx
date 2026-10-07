// === Module 12906: BadgeDirectoryNuxGraphicUtils ===

// Module 12906 (BadgeDirectoryNuxGraphicUtils)
import _slicedToArray from "module_32" /* 32 */;

let items = [fn(7866).BadgeId.STREAMING, fn(7866).BadgeId.GAME_VARIETY, fn(7866).BadgeId.GAME_TIME, fn(7866).BadgeId.ACCOUNT_AGE];
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/BadgeDirectoryNuxGraphicUtils.tsx");

export const getBadgeDirectoryNuxGraphicIconUrls = function getBadgeDirectoryNuxGraphicIconUrls(badges) {
  const map = new Map(badges.map((badge_id) => {
    items = [badge_id.badge_id, badge_id];
    return items;
  }));
  items = [];
  function _loop() {
    value = value.get(closure_2);
    let owned;
    if (value != null) {
      owned = value.owned;
    }
    if (true === owned) {
      if (null != value.current_tier) {
        const tiers = value.tiers;
        const findIndexResult = tiers.findIndex((key) => key.key === value.current_tier);
        if (-1 === findIndexResult) {
          return 0;
        } else {
          let prop;
          if (value.tiers[findIndexResult] != null) {
            prop = tmp3.complex_icon_static_url;
          }
          if (prop == null) {
            let simple_icon_url;
            if (tmp3 != null) {
              simple_icon_url = tmp3.simple_icon_url;
            }
            prop = simple_icon_url;
          }
          if (null == prop) {
            return 0;
          } else {
            const obj = { iconUrl: prop, tierIndex: findIndexResult };
            items.push(obj);
          }
        }
      }
    }
    return 0;
  }
  const iter = items[Symbol.iterator]();
  while (iter !== undefined) {
    closure_2 = iter.next();
    let _loopResult = _loop();
    continue;
  }
  const sorted = items.sort((tierIndex, tierIndex2) => tierIndex2.tierIndex - tierIndex.tierIndex);
  const substr = sorted.slice(0, 3);
  return substr.map((iconUrl) => iconUrl.iconUrl);
};
export const getBadgeDirectoryNuxGraphicLayout = function getBadgeDirectoryNuxGraphicLayout(badgeIconUrls) {
  [tmp2, tmp3, tmp4] = badgeIconUrls;
  if (null == tmp2) {
    let obj = { type: "fallback" };
  } else if (null == tmp3) {
    const obj2 = { type: "single", iconUrls: null };
    items = [tmp2];
    obj2.iconUrls = items;
    obj = obj2;
  } else if (null == tmp4) {
    const obj3 = { type: "pair", iconUrls: null };
    const items1 = [tmp3, tmp2];
    obj3.iconUrls = items1;
    obj = obj3;
  } else {
    obj = { type: "trio", iconUrls: null };
    const items2 = [tmp3, tmp2, tmp4];
    obj.iconUrls = items2;
  }
  return obj;
};