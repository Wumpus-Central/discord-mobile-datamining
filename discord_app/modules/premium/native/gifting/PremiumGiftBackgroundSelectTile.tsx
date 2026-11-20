// === Module 13795: PremiumGiftBackgroundSelectTile ===

// Module 13795 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef2789 from "module_2789" /* 2789 */;
import FastImageDefault from "FastImage" /* 5481 */;
import _modDef13797 from "module_13797" /* 13797 */;
import _modDef13798 from "module_13798" /* 13798 */;
import _modDef13799 from "module_13799" /* 13799 */;
import _modDef13800 from "module_13800" /* 13800 */;
import _modDef13801 from "module_13801" /* 13801 */;
import _modDef13802 from "module_13802" /* 13802 */;
import _modDef13803 from "module_13803" /* 13803 */;
import _modDef13804 from "module_13804" /* 13804 */;
import _modDef13805 from "module_13805" /* 13805 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1388).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(13796).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const GIFT_STYLE_IMG = { [STANDARD_BOX]: _modDef13797, [CAKE]: _modDef13798, [CHEST]: _modDef13799, [COFFEE]: _modDef13800 };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = { uri: _modDef13801 };
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj2 = { uri: _modDef13801 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = { uri: _modDef13802 };
let obj3 = { uri: _modDef13802 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef13803 };
let obj4 = { uri: _modDef13803 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef13804 };
const obj5 = { uri: _modDef13804 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef13805 };
const createStyles = fn(4794);
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
    const obj2 = { giftStyle: null };
    const intl2 = util.intl;
    obj2.giftStyle = intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]);
    obj["aria-label"] = intl.formatToPlainString(_modDef2789["+utqaz"], obj2);
    obj["aria-selected"] = selected;
    obj.style = tmp.container;
    obj.onPress = index.onPress;
    if (selected) {
      const obj3 = { style: tmp.selected };
      selected = timestampProducer(React3, obj3);
    }
    items = [selected, ];
    const obj4 = { resizeMode: "contain", style: tmp.image, source: tmp2 };
    items[1] = timestampProducer(FastImageDefault, obj4);
    obj.children = items;
    tmp4Result = metroImportDefault(React4, obj);
  }
  return tmp4Result;
};
export { GIFT_STYLE_IMG };