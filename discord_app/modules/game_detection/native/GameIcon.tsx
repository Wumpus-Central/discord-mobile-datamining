// === Module 6593: GameIcon ===

// Module 6593 (GameIcon)
import nativeDefault from "native" /* 576 */;
import _modDef6594 from "module_6594" /* 6594 */;
import _modDef6595 from "module_6595" /* 6595 */;
import _modDef6596 from "module_6596" /* 6596 */;
import _modDef6597 from "module_6597" /* 6597 */;
import noop from "module_19" /* 19 */;

class GameIcon {
  constructor(arg0) {
    ({ game, skuId, size } = global);
    if (size === undefined) {
      tmp = closure_6;
      size = closure_6.NORMAL;
    }
    tmp2 = closure_8();
    obj = { [closure_1_6.NORMAL]: tmp2.normal, [closure_1_6.SMALL]: tmp2.small, [closure_1_6.SIZE_24]: tmp2.size24, [closure_1_6.LARGE]: tmp2.large };
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
      tmp20 = Image;
      obj6 = { style: null, source: null };
      obj6.style = obj[size];
      obj6.source = tmp12;
      obj5.children = jsx(Image, obj6);
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
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const PremiumSubscriptionSKUs = fn(1374).PremiumSubscriptionSKUs;
const jsx = fn(21).jsx;
const GameIconSizes = { SIZE_24: "size_24", SMALL: "small", NORMAL: "normal", LARGE: "large" };
let obj2 = { [GameIconSizes.SIZE_24]: 24, [GameIconSizes.SMALL]: 32, [GameIconSizes.NORMAL]: 48, [GameIconSizes.LARGE]: 80 };
const createStyles = fn(4836);
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
const React6 = createStyles.createStyles(obj4);
GameIcon.Sizes = GameIconSizes;
size = fn(2);
const result = size.fileFinishedImporting("modules/game_detection/native/GameIcon.tsx");

export default GameIcon;
export { GameIconSizes };
export const GameIconImageSize = obj2;