// === Module 14671: PremiumGiftBackgroundSelectTile ===

// Module 14671 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2728 from "module_2728" /* 2728 */;
import FastImageDefault from "FastImage" /* 5842 */;
import _modDef14673 from "module_14673" /* 14673 */;
import _modDef14674 from "module_14674" /* 14674 */;
import _modDef14675 from "module_14675" /* 14675 */;
import _modDef14676 from "module_14676" /* 14676 */;
import _modDef14677 from "module_14677" /* 14677 */;
import _modDef14678 from "module_14678" /* 14678 */;
import _modDef14679 from "module_14679" /* 14679 */;
import _modDef14680 from "module_14680" /* 14680 */;
import _modDef14681 from "module_14681" /* 14681 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1387).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(14672).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const GIFT_STYLE_IMG = { [STANDARD_BOX]: _modDef14673, [CAKE]: _modDef14674, [CHEST]: _modDef14675, [COFFEE]: _modDef14676 };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = { uri: _modDef14677 };
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj2 = { uri: _modDef14677 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = { uri: _modDef14678 };
let obj3 = { uri: _modDef14678 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef14679 };
let obj4 = { uri: _modDef14679 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef14680 };
const obj5 = { uri: _modDef14680 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef14681 };
const createStyles = fn(5140);
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
    obj["aria-label"] = intl.formatToPlainString(_modDef2728["+utqaz"], obj2);
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