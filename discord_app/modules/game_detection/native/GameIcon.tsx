// === Module 7334: GameIcon ===

// Module 7334 (GameIcon)
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5717 */;
import _modDef7335 from "module_7335" /* 7335 */;
import _modDef7336 from "module_7336" /* 7336 */;
import _modDef7337 from "module_7337" /* 7337 */;
import _modDef7338 from "module_7338" /* 7338 */;
import noop from "module_19" /* 19 */;

class GameIcon {
  constructor(arg0) {
    ({ game, skuId, size } = global);
    if (size === undefined) {
      tmp = closure_5;
      size = closure_5.NORMAL;
    }
    tmp2 = closure_7();
    obj = { [closure_1_5.NORMAL]: tmp2.normal, [closure_1_5.SMALL]: tmp2.small, [closure_1_5.SIZE_24]: tmp2.size24, [closure_1_5.LARGE]: tmp2.large };
    items = [, , ];
    items[0] = tmp2.gameIcon;
    items[1] = obj[size];
    items[2] = global.style;
    if (null == skuId) {
      tmp12 = undefined;
      if (null != game) {
        if (null == undefined) {
          tmp13 = closure_6;
          iconURL = game.getIconURL(closure_6[size]);
          if (null != iconURL) {
            obj1 = { uri: null };
            obj1.uri = iconURL;
            tmp12 = obj1;
          }
        }
      }
      if (null == tmp12) {
        tmp15 = closure_0;
        tmp16 = closure_1;
        tmp12 = closure_0(closure_1[9]);
        arr1 = items.push(tmp2.placeholder);
      }
      tmp18 = jsx;
      tmp19 = View;
      obj5 = { style: null, children: null };
      items1 = [, ];
      items1[0] = items;
      items1[1] = tmp2.entityWrapper;
      obj5.style = items1;
      tmp20 = closure_0;
      tmp21 = closure_1;
      obj6 = { style: null, source: null };
      obj6.style = obj[size];
      obj6.source = tmp12;
      obj5.children = jsx(closure_0(closure_1[10]), obj6);
      return jsx(View, obj5);
    } else {
      tmp3 = PremiumSubscriptionSKUs;
      if (PremiumSubscriptionSKUs.TIER_0 === skuId) {
        tmp9 = closure_0;
        tmp10 = closure_1;
        tmp4 = closure_0(closure_1[6]);
        tmp11 = tmp4;
      } else if (tmp3.TIER_1 !== skuId) {
        if (tmp3.TIER_2 === skuId) {
          tmp5 = closure_0;
          tmp6 = closure_1;
          tmp4 = closure_0(closure_1[8]);
        } else {
          tmp4 = null;
        }
      }
      tmp7 = closure_0;
      tmp8 = closure_1;
      tmp4 = closure_0(closure_1[7]);
    }
    return;
  }
}
const View = fn(17).View;
const PremiumSubscriptionSKUs = fn(1385).PremiumSubscriptionSKUs;
const jsx = fn(21).jsx;
const GameIconSizes = { SIZE_24: "size_24", SMALL: "small", NORMAL: "normal", LARGE: "large" };
let obj2 = { [GameIconSizes.SIZE_24]: 24, [GameIconSizes.SMALL]: 32, [GameIconSizes.NORMAL]: 48, [GameIconSizes.LARGE]: 80 };
const createStyles = fn(5014);
let obj4 = { gameIcon: { justifyContent: "center", alignItems: "center" }, size24: null, small: null, normal: null, large: null, placeholder: null, entityWrapper: null };
let size = { width: obj2.size_24, height: obj2.size_24, borderRadius: nativeDefault.radii.sm };
obj4.size24 = size;
const size1 = { width: obj2.small, height: obj2.small, borderRadius: nativeDefault.radii.sm };
obj4.small = size1;
const size2 = { width: obj2.normal, height: obj2.normal, borderRadius: nativeDefault.radii.lg };
obj4.normal = size2;
const size3 = { width: obj2.large, height: obj2.large, borderRadius: nativeDefault.radii.sm };
obj4.large = size3;
obj4.placeholder = { borderRadius: nativeDefault.radii.none, tintColor: nativeDefault.colors.ICON_MUTED };
const obj5 = { borderRadius: nativeDefault.radii.none, tintColor: nativeDefault.colors.ICON_MUTED };
obj4.entityWrapper = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
const React5 = createStyles.createStyles(obj4);
GameIcon.Sizes = GameIconSizes;
size = fn(2);
const result = size.fileFinishedImporting("modules/game_detection/native/GameIcon.tsx");

export default GameIcon;
export { GameIconSizes };
export const GameIconImageSize = obj2;