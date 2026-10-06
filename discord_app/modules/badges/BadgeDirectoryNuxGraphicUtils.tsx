// === Module 12906: BadgeDirectoryNuxGraphicUtils ===

// Module 12906 (BadgeDirectoryNuxGraphicUtils)
import BadgeId from "BadgeId" /* 7866 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let map;

let items = [BadgeId.BadgeId.STREAMING, BadgeId.BadgeId.GAME_VARIETY, BadgeId.BadgeId.GAME_TIME, BadgeId.BadgeId.ACCOUNT_AGE];
const result = size.fileFinishedImporting("modules/badges/BadgeDirectoryNuxGraphicUtils.tsx");

export const getBadgeDirectoryNuxGraphicIconUrls = function getBadgeDirectoryNuxGraphicIconUrls(badges) {
  map = new Map(badges.map((badge_id) => {
    items = [badge_id.badge_id, badge_id];
    return items;
  }));
  items = [];
  function _loop() {
    const value = map.get(closure_2);
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
            if (value.tiers[findIndexResult] != null) {
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
    let closure_2 = iter.next();
    let _loopResult = _loop();
    continue;
  }
  const sorted = items.sort((tierIndex, tierIndex2) => tierIndex2.tierIndex - tierIndex.tierIndex);
  const substr = sorted.slice(0, 3);
  return substr.map((iconUrl) => iconUrl.iconUrl);
};
export const getBadgeDirectoryNuxGraphicLayout = function getBadgeDirectoryNuxGraphicLayout(badgeIconUrls) {
  let items1;
  let items2;
  let obj;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp2, tmp3, tmp4] = badgeIconUrls;
  _slicedToArray(badgeIconUrls, 3);
  if (null == tmp2) {
    obj = { type: "fallback" };
  } else if (null == tmp3) {
    const obj2 = { type: "single", iconUrls: items };
    items = [tmp2];
    obj = obj2;
  } else if (null == tmp4) {
    const obj3 = { type: "pair", iconUrls: items1 };
    items1 = [tmp3, tmp2];
    obj = obj3;
  } else {
    obj = { type: "trio", iconUrls: items2 };
    items2 = [tmp3, tmp2, tmp4];
  }
  return obj;
};