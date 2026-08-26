// discord_app/modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../gifting/PremiumGifting.messages.js";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import registerAssetDefault from "../../../../../_runtime/12421_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/12422_registerAsset.js";
import registerAssetDefault3 from "../../../../../_runtime/12423_registerAsset.js";
import registerAssetDefault4 from "../../../../../_runtime/12424_registerAsset.js";
import metadataDefault from "../../../../../discord_assets/assets/premium/gifting/halloween-card-small.png.js";
import metadataDefault2 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_cake.png.js";
import metadataDefault3 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_chest.png.js";
import metadataDefault4 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_coffee.png.js";
import metadataDefault5 from "../../../../../discord_assets/assets/premium/gifting/seasonal/gift_box.png.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { PremiumGiftStyles } from "../../PremiumConstants.tsx";
import { GIFT_STYLE_DESCRIPTIONS } from "../../gifting/PremiumGiftingConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ View: c3, Pressable: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { [STANDARD_BOX]: registerAssetDefault, [CAKE]: registerAssetDefault2, [CHEST]: registerAssetDefault3, [COFFEE]: registerAssetDefault4 };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
obj = { uri: metadataDefault };
obj[PremiumGiftStyles.NITROWEEN_STANDARD] = obj;
obj[PremiumGiftStyles.SNOWGLOBE] = null;
obj[PremiumGiftStyles.BOX] = null;
obj[PremiumGiftStyles.CUP] = null;
obj = { uri: metadataDefault2 };
obj[PremiumGiftStyles.SEASONAL_CAKE] = obj;
obj[PremiumGiftStyles.SEASONAL_CHEST] = { uri: metadataDefault3 };
let obj1 = { uri: metadataDefault3 };
obj[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: metadataDefault4 };
const obj2 = { uri: metadataDefault4 };
obj[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: metadataDefault5 };
let closure_9 = createCacheKey.createStyles((arg0) => {
  obj = { width: 78, height: 44, justifyContent: "center", marginEnd: ThemesDefault.space.PX_8, marginStart: null };
  let num = 0;
  if (0 === arg0) {
    num = 20;
  }
  obj = { container: obj, selected: null, image: null };
  obj[4] = num;
  obj = { position: "absolute", borderColor: tmp(712).colors.TEXT_BRAND, borderRadius: tmp(712).radii.sm, borderWidth: 2, flex: 1, width: 78, height: 44 };
  obj[1] = obj;
  obj[2] = { width: 72, height: 38, alignSelf: "center" };
  return obj;
});
const obj3 = { uri: metadataDefault5 };
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx");

export default function GiftBackgroundSelectTile(index) {
  ({ selected, giftStyle } = index);
  const tmp = callback2(index.index);
  let tmp4Result = null;
  if (null != obj[giftStyle]) {
    obj = { "aria-label": null, "aria-selected": null, style: null, onPress: null, children: null };
    const intl = getSystemLocale.intl;
    obj = { giftStyle: null };
    const intl2 = getSystemLocale.intl;
    obj[0] = intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]);
    obj[0] = intl.formatToPlainString(messagesProxyDefault["+utqaz"], obj);
    obj[1] = selected;
    obj[2] = tmp.container;
    obj[3] = index.onPress;
    if (selected) {
      obj = { style: null };
      obj[0] = tmp.selected;
      selected = callback(closure_3, obj);
    }
    const items = [selected, ];
    obj1 = { resizeMode: "contain", style: null, source: null };
    obj1[1] = tmp.image;
    obj1[2] = tmp2;
    items[1] = callback(preloadDefault, obj1);
    obj[4] = items;
    tmp4Result = closure_7(closure_4, obj);
    const tmp4 = closure_7;
    const tmp5 = closure_4;
    const tmp8 = importDefault;
  }
  return tmp4Result;
};
export const GIFT_STYLE_IMG = obj;