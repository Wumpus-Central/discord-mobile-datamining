// discord_app/modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2601 from "../../gifting/PremiumGifting.messages.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef14386 from "../../../../../_runtime/metro/14386__.js";
import _modDef14387 from "../../../../../_runtime/metro/14387__.js";
import _modDef14388 from "../../../../../_runtime/metro/14388__.js";
import _modDef14389 from "../../../../../_runtime/metro/14389__.js";
import _modDef14390 from "../../../../../discord_assets/assets/premium/gifting/halloween-card-small.png.js";
import _modDef14391 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_cake.png.js";
import _modDef14392 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_chest.png.js";
import _modDef14393 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_coffee.png.js";
import _modDef14394 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_box.png.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1386).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(14385).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const GIFT_STYLE_IMG = {
  [STANDARD_BOX]: _modDef14386,
  [CAKE]: _modDef14387,
  [CHEST]: _modDef14388,
  [COFFEE]: _modDef14389,
};
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = { uri: _modDef14390 };
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj2 = { uri: _modDef14390 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = { uri: _modDef14391 };
let obj3 = { uri: _modDef14391 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef14392 };
let obj4 = { uri: _modDef14392 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef14393 };
const obj5 = { uri: _modDef14393 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef14394 };
const createStyles = fn(5009);
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
    obj["aria-label"] = intl.formatToPlainString(_modDef2601["+utqaz"], obj2);
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
