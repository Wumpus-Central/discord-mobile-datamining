// === Module 11150: PremiumGiftBackgroundSelectTile ===

// Module 11150 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2460 from "module_2460" /* 2460 */;
import FastImageDefault from "FastImage" /* 5668 */;
import _modDef11152 from "module_11152" /* 11152 */;
import _modDef11153 from "module_11153" /* 11153 */;
import _modDef11154 from "module_11154" /* 11154 */;
import _modDef11155 from "module_11155" /* 11155 */;
import _modDef11156 from "module_11156" /* 11156 */;
import _modDef11157 from "module_11157" /* 11157 */;
import _modDef11158 from "module_11158" /* 11158 */;
import _modDef11159 from "module_11159" /* 11159 */;
import _modDef11160 from "module_11160" /* 11160 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1373).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(11151).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let GIFT_STYLE_IMG = { [STANDARD_BOX]: _modDef11152, [CAKE]: _modDef11153, [CHEST]: _modDef11154, [COFFEE]: _modDef11155 };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG = { uri: _modDef11156 };
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = GIFT_STYLE_IMG;
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
GIFT_STYLE_IMG = { uri: _modDef11157 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = GIFT_STYLE_IMG;
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef11158 };
let obj1 = { uri: _modDef11158 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef11159 };
const obj2 = { uri: _modDef11159 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef11160 };
const createStyles = fn(4636);
let closure_9 = createStyles.createStyles((arg0) => {
  const size = { width: 78, height: 44, justifyContent: "center", marginEnd: nativeDefault.space.PX_8, marginStart: null };
  let num = 0;
  if (0 === arg0) {
    num = 20;
  }
  const obj = { container: size, selected: null, image: null };
  size.marginStart = num;
  const size1 = { position: "absolute", borderColor: nativeDefault.colors.TEXT_BRAND, borderRadius: nativeDefault.radii.sm, borderWidth: 2, flex: 1, width: 78, height: 44 };
  obj.selected = size1;
  obj.image = { width: 72, height: 38, alignSelf: "center" };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx");

export default function GiftBackgroundSelectTile(index) {
  ({ selected, giftStyle } = index);
  const tmp = closure_9(index.index);
  let tmp4Result = null;
  if (null != obj[giftStyle]) {
    obj = { "aria-label": null, "aria-selected": null, style: null, onPress: null, children: null };
    const intl = util.intl;
    obj = { giftStyle: null };
    const intl2 = util.intl;
    obj.giftStyle = intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]);
    obj["aria-label"] = intl.formatToPlainString(_modDef2460["+utqaz"], obj);
    obj["aria-selected"] = selected;
    obj.style = tmp.container;
    obj.onPress = index.onPress;
    if (selected) {
      obj = { style: tmp.selected };
      selected = timestampProducer(React3, obj);
    }
    const items = [selected, ];
    const obj1 = { resizeMode: "contain", style: tmp.image, source: tmp2 };
    items[1] = timestampProducer(FastImageDefault, obj1);
    obj.children = items;
    tmp4Result = React5(React4, obj);
  }
  return tmp4Result;
};
export { GIFT_STYLE_IMG };