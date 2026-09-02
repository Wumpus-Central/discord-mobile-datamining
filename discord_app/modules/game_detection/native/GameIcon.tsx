// === Module 5971: GameIcon ===

// Module 5971 (GameIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import registerAssetDefault from "registerAsset" /* 5972 */;
import registerAssetDefault2 from "registerAsset" /* 5973 */;
import registerAssetDefault3 from "registerAsset" /* 5974 */;
import registerAssetDefault4 from "registerAsset" /* 5975 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { PremiumSubscriptionSKUs } from "GuildFeatures" /* 1923 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

class GameIcon {
  constructor(arg0) {
    ({ game, skuId, size } = global);
    if (size === undefined) {
      tmp = closure_6;
      size = closure_6.NORMAL;
    }
    tmp2 = closure_8();
    obj = { [closure_6.NORMAL]: tmp2.normal, [closure_6.SMALL]: tmp2.small, [closure_6.SIZE_24]: tmp2.size24, [closure_6.LARGE]: tmp2.large };
    items = [, , ];
    items[0] = tmp2.gameIcon;
    items[1] = obj[size];
    items[2] = global.style;
    if (null == skuId) {
      tmp12 = undefined;
      if (null != game) {
        if (null == undefined) {
          tmp13 = closure_7;
          iconURL = game.getIconURL(closure_7[size]);
          if (null != iconURL) {
            obj = { uri: null };
            obj[0] = iconURL;
            tmp12 = obj;
          }
        }
      }
      if (null == tmp12) {
        tmp15 = closure_0;
        tmp16 = closure_1;
        tmp12 = require("registerAsset");
        arr = items.push(tmp2.placeholder);
      }
      tmp18 = jsx;
      tmp19 = View;
      obj1 = { style: null, children: null };
      items1 = [, ];
      items1[0] = items;
      items1[1] = tmp2.entityWrapper;
      obj1[0] = items1;
      tmp20 = Image;
      obj2 = { style: null, source: null };
      obj2[0] = obj[size];
      obj2[1] = tmp12;
      obj1[1] = jsx(Image, obj2);
      return jsx(View, obj1);
    } else {
      tmp3 = PremiumSubscriptionSKUs;
      if (PremiumSubscriptionSKUs.TIER_0 === skuId) {
        tmp9 = closure_0;
        tmp10 = closure_1;
        tmp4 = require("registerAsset");
        tmp11 = tmp4;
      } else if (tmp3.TIER_1 !== skuId) {
        if (tmp3.TIER_2 === skuId) {
          tmp5 = closure_0;
          tmp6 = closure_1;
          tmp4 = require("registerAsset");
        } else {
          tmp4 = null;
        }
      }
      tmp7 = closure_0;
      tmp8 = closure_1;
      tmp4 = require("registerAsset");
    }
    return;
  }
}
noopAll;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
let obj = { SIZE_24: "size_24", SMALL: "small", NORMAL: "normal", LARGE: "large" };
obj = { [obj.SIZE_24]: 24, [obj.SMALL]: 32, [obj.NORMAL]: 48, [obj.LARGE]: 80 };
obj = { gameIcon: { justifyContent: "center", alignItems: "center" }, size24: { width: obj.size_24, height: obj.size_24, borderRadius: ThemesDefault.radii.sm }, small: null, normal: null, large: null, placeholder: null, entityWrapper: null };
createCacheKey = { width: obj.small, height: obj.small, borderRadius: ThemesDefault.radii.sm };
obj[2] = createCacheKey;
obj1 = { width: obj.size_24, height: obj.size_24, borderRadius: ThemesDefault.radii.sm };
obj[3] = { width: obj.normal, height: obj.normal, borderRadius: ThemesDefault.radii.lg };
const obj3 = { width: obj.normal, height: obj.normal, borderRadius: ThemesDefault.radii.lg };
obj[4] = { width: obj.large, height: obj.large, borderRadius: ThemesDefault.radii.sm };
const obj4 = { width: obj.large, height: obj.large, borderRadius: ThemesDefault.radii.sm };
obj[5] = { borderRadius: ThemesDefault.radii.none, tintColor: ThemesDefault.colors.ICON_MUTED };
const obj5 = { borderRadius: ThemesDefault.radii.none, tintColor: ThemesDefault.colors.ICON_MUTED };
obj[6] = { borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
let closure_8 = createCacheKey.createStyles(obj);
GameIcon.Sizes = obj;
const obj6 = { borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
const result = require("set").fileFinishedImporting("modules/game_detection/native/GameIcon.tsx");

export default GameIcon;
export const GameIconSizes = obj;
export const GameIconImageSize = obj;