// === Module 11111: PremiumGiftBackgroundSelectTile ===

// Module 11111 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2460 from "module_2460" /* 2460 */;
import FastImageDefault from "FastImage" /* 5638 */;
import _modDef11113 from "module_11113" /* 11113 */;
import _modDef11114 from "module_11114" /* 11114 */;
import _modDef11115 from "module_11115" /* 11115 */;
import _modDef11116 from "module_11116" /* 11116 */;
import _modDef11117 from "module_11117" /* 11117 */;
import _modDef11118 from "module_11118" /* 11118 */;
import _modDef11119 from "module_11119" /* 11119 */;
import _modDef11120 from "module_11120" /* 11120 */;
import _modDef11121 from "module_11121" /* 11121 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1373).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(11112).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let GIFT_STYLE_IMG = { [STANDARD_BOX]: _modDef11113, [CAKE]: _modDef11114, [CHEST]: _modDef11115, [COFFEE]: _modDef11116 };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG = { uri: _modDef11117 };
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = GIFT_STYLE_IMG;
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
GIFT_STYLE_IMG = { uri: _modDef11118 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = GIFT_STYLE_IMG;
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef11119 };
let obj1 = { uri: _modDef11119 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef11120 };
const obj2 = { uri: _modDef11120 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef11121 };
const createStyles = fn(4606);
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