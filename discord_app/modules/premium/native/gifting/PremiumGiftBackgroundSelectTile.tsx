// === Module 11580: PremiumGiftBackgroundSelectTile ===

// Module 11580 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef2911 from "module_2911" /* 2911 */;
import FastImageDefault from "FastImage" /* 5730 */;
import _modDef11582 from "module_11582" /* 11582 */;
import _modDef11583 from "module_11583" /* 11583 */;
import _modDef11584 from "module_11584" /* 11584 */;
import _modDef11585 from "module_11585" /* 11585 */;
import _modDef11586 from "module_11586" /* 11586 */;
import _modDef11587 from "module_11587" /* 11587 */;
import _modDef11588 from "module_11588" /* 11588 */;
import _modDef11589 from "module_11589" /* 11589 */;
import _modDef11590 from "module_11590" /* 11590 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1389).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(11581).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const GIFT_STYLE_IMG = { [STANDARD_BOX]: _modDef11582, [CAKE]: _modDef11583, [CHEST]: _modDef11584, [COFFEE]: _modDef11585 };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = { uri: _modDef11586 };
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj2 = { uri: _modDef11586 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = { uri: _modDef11587 };
let obj3 = { uri: _modDef11587 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef11588 };
let obj4 = { uri: _modDef11588 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef11589 };
const obj5 = { uri: _modDef11589 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef11590 };
const createStyles = fn(5043);
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
    obj["aria-label"] = intl.formatToPlainString(_modDef2911["+utqaz"], obj2);
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