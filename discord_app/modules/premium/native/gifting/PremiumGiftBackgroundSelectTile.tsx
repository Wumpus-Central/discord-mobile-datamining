// discord_app/modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2548 from "../../gifting/PremiumGifting.messages.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef11369 from "../../../../../_runtime/metro/11369__.js";
import _modDef11370 from "../../../../../_runtime/metro/11370__.js";
import _modDef11371 from "../../../../../_runtime/metro/11371__.js";
import _modDef11372 from "../../../../../_runtime/metro/11372__.js";
import _modDef11373 from "../../../../../discord_assets/assets/premium/gifting/halloween-card-small.png.js";
import _modDef11374 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_cake.png.js";
import _modDef11375 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_chest.png.js";
import _modDef11376 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_coffee.png.js";
import _modDef11377 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_box.png.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Pressable: closure_4 } = get_ActivityIndicator);
const PremiumGiftStyles = fn(1374).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = fn(11368).GIFT_STYLE_DESCRIPTIONS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const GIFT_STYLE_IMG = {
  [STANDARD_BOX]: _modDef11369,
  [CAKE]: _modDef11370,
  [CHEST]: _modDef11371,
  [COFFEE]: _modDef11372,
};
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = { uri: _modDef11373 };
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj2 = { uri: _modDef11373 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = { uri: _modDef11374 };
let obj3 = { uri: _modDef11374 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = { uri: _modDef11375 };
let obj4 = { uri: _modDef11375 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef11376 };
const obj5 = { uri: _modDef11376 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef11377 };
const createStyles = fn(4827);
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
    obj["aria-label"] = intl.formatToPlainString(_modDef2548["+utqaz"], obj2);
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
