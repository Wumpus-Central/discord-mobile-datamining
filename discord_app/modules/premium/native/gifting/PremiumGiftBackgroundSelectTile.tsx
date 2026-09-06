// === Module 11016: PremiumGiftBackgroundSelectTile ===

// Module 11016 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2460 from "module_2460" /* 2460 */;
import FastImageDefault from "FastImage" /* 5587 */;
import _modDef11018 from "module_11018" /* 11018 */;
import _modDef11019 from "module_11019" /* 11019 */;
import _modDef11020 from "module_11020" /* 11020 */;
import _modDef11021 from "module_11021" /* 11021 */;
import _modDef11022 from "module_11022" /* 11022 */;
import _modDef11023 from "module_11023" /* 11023 */;
import _modDef11024 from "module_11024" /* 11024 */;
import _modDef11025 from "module_11025" /* 11025 */;
import _modDef11026 from "module_11026" /* 11026 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1373).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(11017).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let GIFT_STYLE_IMG = { [STANDARD_BOX]: _modDef11018, [CAKE]: _modDef11019, [CHEST]: _modDef11020, [COFFEE]: _modDef11021 };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG = { uri: _modDef11022 };
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = GIFT_STYLE_IMG;
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
GIFT_STYLE_IMG = { uri: _modDef11023 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = GIFT_STYLE_IMG;
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef11024 };
let obj1 = { uri: _modDef11024 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef11025 };
const obj2 = { uri: _modDef11025 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef11026 };
const createStyles = fn(4560);
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