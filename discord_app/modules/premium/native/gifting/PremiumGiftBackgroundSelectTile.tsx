// === Module 11177: PremiumGiftBackgroundSelectTile ===

// Module 11177 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2461 from "module_2461" /* 2461 */;
import FastImageDefault from "FastImage" /* 5675 */;
import _modDef11179 from "module_11179" /* 11179 */;
import _modDef11180 from "module_11180" /* 11180 */;
import _modDef11181 from "module_11181" /* 11181 */;
import _modDef11182 from "module_11182" /* 11182 */;
import _modDef11183 from "module_11183" /* 11183 */;
import _modDef11184 from "module_11184" /* 11184 */;
import _modDef11185 from "module_11185" /* 11185 */;
import _modDef11186 from "module_11186" /* 11186 */;
import _modDef11187 from "module_11187" /* 11187 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1374).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(11178).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const GIFT_STYLE_IMG = { [STANDARD_BOX]: _modDef11179, [CAKE]: _modDef11180, [CHEST]: _modDef11181, [COFFEE]: _modDef11182 };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = { uri: _modDef11183 };
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj2 = { uri: _modDef11183 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = { uri: _modDef11184 };
let obj3 = { uri: _modDef11184 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef11185 };
let obj4 = { uri: _modDef11185 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef11186 };
const obj5 = { uri: _modDef11186 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef11187 };
const createStyles = fn(4640);
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
    obj["aria-label"] = intl.formatToPlainString(_modDef2461["+utqaz"], obj2);
    obj["aria-selected"] = selected;
    obj.style = tmp.container;
    obj.onPress = index.onPress;
    if (selected) {
      const obj3 = { style: tmp.selected };
      selected = timestampProducer(React3, obj3);
    }
    const items = [selected, ];
    const obj4 = { resizeMode: "contain", style: tmp.image, source: tmp2 };
    items[1] = timestampProducer(FastImageDefault, obj4);
    obj.children = items;
    tmp4Result = React5(React4, obj);
  }
  return tmp4Result;
};
export { GIFT_STYLE_IMG };