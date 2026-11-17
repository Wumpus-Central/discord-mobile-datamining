// === Module 15216: PremiumGiftBackgroundSelectTile ===

// Module 15216 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2767 from "module_2767" /* 2767 */;
import FastImageDefault from "FastImage" /* 6014 */;
import _modDef15218 from "module_15218" /* 15218 */;
import _modDef15219 from "module_15219" /* 15219 */;
import _modDef15220 from "module_15220" /* 15220 */;
import _modDef15221 from "module_15221" /* 15221 */;
import _modDef15222 from "module_15222" /* 15222 */;
import _modDef15223 from "module_15223" /* 15223 */;
import _modDef15224 from "module_15224" /* 15224 */;
import _modDef15225 from "module_15225" /* 15225 */;
import _modDef15226 from "module_15226" /* 15226 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1390).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(15217).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const GIFT_STYLE_IMG = { [STANDARD_BOX]: _modDef15218, [CAKE]: _modDef15219, [CHEST]: _modDef15220, [COFFEE]: _modDef15221 };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = { uri: _modDef15222 };
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj2 = { uri: _modDef15222 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = { uri: _modDef15223 };
let obj3 = { uri: _modDef15223 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef15224 };
let obj4 = { uri: _modDef15224 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef15225 };
const obj5 = { uri: _modDef15225 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef15226 };
const createStyles = fn(5310);
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
    obj["aria-label"] = intl.formatToPlainString(_modDef2767["+utqaz"], obj2);
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