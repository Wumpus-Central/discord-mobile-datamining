// === Module 7172: GameIcon ===

// Module 7172 (GameIcon)
import nativeDefault from "native" /* 576 */;
import _modDef7173 from "module_7173" /* 7173 */;
import _modDef7174 from "module_7174" /* 7174 */;
import _modDef7175 from "module_7175" /* 7175 */;
import _modDef7176 from "module_7176" /* 7176 */;
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
            obj = { uri: null };
            obj.uri = iconURL;
            tmp12 = obj;
          }
        }
      }
      if (null == tmp12) {
        tmp15 = closure_0;
        tmp16 = closure_1;
        tmp12 = closure_0(closure_1[9]);
        arr = items.push(tmp2.placeholder);
      }
      tmp18 = jsx;
      tmp19 = View;
      obj1 = { style: null, children: null };
      items1 = [, ];
      items1[0] = items;
      items1[1] = tmp2.entityWrapper;
      obj1.style = items1;
      tmp20 = Image;
      obj2 = { style: null, source: null };
      obj2.style = obj[size];
      obj2.source = tmp12;
      obj1.children = jsx(Image, obj2);
      return jsx(View, obj1);
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
const PremiumSubscriptionSKUs = fn(1373).PremiumSubscriptionSKUs;
const jsx = fn(21).jsx;
let obj = { SIZE_24: "size_24", SMALL: "small", NORMAL: "normal", LARGE: "large" };
obj = { [obj.SIZE_24]: 24, [obj.SMALL]: 32, [obj.NORMAL]: 48, [obj.LARGE]: 80 };
fn(4560);
obj = { gameIcon: { justifyContent: "center", alignItems: "center" }, size24: null, small: null, normal: null, large: null, placeholder: null, entityWrapper: null };
let size = { width: obj.size_24, height: obj.size_24, borderRadius: nativeDefault.radii.sm };
obj.size24 = size;
const size1 = { width: obj.small, height: obj.small, borderRadius: nativeDefault.radii.sm };
obj.small = size1;
const size2 = { width: obj.normal, height: obj.normal, borderRadius: nativeDefault.radii.lg };
obj.normal = size2;
const size3 = { width: obj.large, height: obj.large, borderRadius: nativeDefault.radii.sm };
obj.large = size3;
obj.placeholder = { borderRadius: nativeDefault.radii.none, tintColor: nativeDefault.colors.ICON_MUTED };
const createStyles = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
obj.entityWrapper = createStyles;
const React6 = createStyles.createStyles(obj);
GameIcon.Sizes = obj;
size = fn(2);
const result = size.fileFinishedImporting("modules/game_detection/native/GameIcon.tsx");

export default GameIcon;
export const GameIconSizes = obj;
export const GameIconImageSize = obj;