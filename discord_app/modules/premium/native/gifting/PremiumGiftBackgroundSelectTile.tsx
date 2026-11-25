// === Module 11532: PremiumGiftBackgroundSelectTile ===

// Module 11532 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef2910 from "module_2910" /* 2910 */;
import FastImageDefault from "FastImage" /* 5699 */;
import _modDef11534 from "module_11534" /* 11534 */;
import _modDef11535 from "module_11535" /* 11535 */;
import _modDef11536 from "module_11536" /* 11536 */;
import _modDef11537 from "module_11537" /* 11537 */;
import _modDef11538 from "module_11538" /* 11538 */;
import _modDef11539 from "module_11539" /* 11539 */;
import _modDef11540 from "module_11540" /* 11540 */;
import _modDef11541 from "module_11541" /* 11541 */;
import _modDef11542 from "module_11542" /* 11542 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1388).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(11533).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const GIFT_STYLE_IMG = { [STANDARD_BOX]: _modDef11534, [CAKE]: _modDef11535, [CHEST]: _modDef11536, [COFFEE]: _modDef11537 };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = { uri: _modDef11538 };
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj2 = { uri: _modDef11538 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = { uri: _modDef11539 };
let obj3 = { uri: _modDef11539 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef11540 };
let obj4 = { uri: _modDef11540 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef11541 };
const obj5 = { uri: _modDef11541 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef11542 };
const createStyles = fn(5012);
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
    obj["aria-label"] = intl.formatToPlainString(_modDef2910["+utqaz"], obj2);
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