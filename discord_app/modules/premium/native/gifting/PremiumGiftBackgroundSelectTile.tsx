// discord_app/modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2544 from "../../gifting/PremiumGifting.messages.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef11272 from "../../../../../_runtime/metro/11272__.js";
import _modDef11273 from "../../../../../_runtime/metro/11273__.js";
import _modDef11274 from "../../../../../_runtime/metro/11274__.js";
import _modDef11275 from "../../../../../_runtime/metro/11275__.js";
import _modDef11276 from "../../../../../discord_assets/assets/premium/gifting/halloween-card-small.png.js";
import _modDef11277 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_cake.png.js";
import _modDef11278 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_chest.png.js";
import _modDef11279 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_coffee.png.js";
import _modDef11280 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_box.png.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1374).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(11271).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const GIFT_STYLE_IMG = {
  [STANDARD_BOX]: _modDef11272,
  [CAKE]: _modDef11273,
  [CHEST]: _modDef11274,
  [COFFEE]: _modDef11275,
};
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = { uri: _modDef11276 };
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj2 = { uri: _modDef11276 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = { uri: _modDef11277 };
let obj3 = { uri: _modDef11277 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef11278 };
let obj4 = { uri: _modDef11278 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef11279 };
const obj5 = { uri: _modDef11279 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef11280 };
const createStyles = fn(4722);
let closure_9 = createStyles.createStyles((arg0) => {
  const size = {
    width: 78,
    height: 44,
    justifyContent: "center",
    marginEnd: nativeDefault.space.PX_8,
    marginStart: null,
  };
  let num = 0;
  if (0 === arg0) {
    num = 20;
  }
  const obj = { container: size, selected: null, image: null };
  size.marginStart = num;
  const size1 = {
    position: "absolute",
    borderColor: nativeDefault.colors.TEXT_BRAND,
    borderRadius: nativeDefault.radii.sm,
    borderWidth: 2,
    flex: 1,
    width: 78,
    height: 44,
  };
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
    obj["aria-label"] = intl.formatToPlainString(_modDef2544["+utqaz"], obj2);
    obj["aria-selected"] = selected;
    obj.style = tmp.container;
    obj.onPress = index.onPress;
    if (selected) {
      const obj3 = { style: tmp.selected };
      selected = timestampProducer(React3, obj3);
    }
    const items = [selected];
    const obj4 = { resizeMode: "contain", style: tmp.image, source: tmp2 };
    items[1] = timestampProducer(FastImageDefault, obj4);
    obj.children = items;
    tmp4Result = React5(React4, obj);
  }
  return tmp4Result;
}
export { GIFT_STYLE_IMG };
