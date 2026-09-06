// === Module 11016: PremiumGiftStyles ===

// Module 11016 (PremiumGiftStyles)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 2460 */;
import preloadDefault from "preload" /* 5587 */;
import registerAssetDefault from "registerAsset" /* 11018 */;
import registerAssetDefault2 from "registerAsset" /* 11019 */;
import registerAssetDefault3 from "registerAsset" /* 11020 */;
import registerAssetDefault4 from "registerAsset" /* 11021 */;
import metadataDefault from "metadata" /* 11022 */;
import metadataDefault2 from "metadata" /* 11023 */;
import metadataDefault3 from "metadata" /* 11024 */;
import metadataDefault4 from "metadata" /* 11025 */;
import metadataDefault5 from "metadata" /* 11026 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { PremiumGiftStyles } from "GuildFeatures" /* 1373 */;
import { GIFT_STYLE_DESCRIPTIONS } from "GIFT_STYLE_DESCRIPTIONS" /* 11017 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

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
  obj = { position: "absolute", borderColor: tmp(576).colors.TEXT_BRAND, borderRadius: tmp(576).radii.sm, borderWidth: 2, flex: 1, width: 78, height: 44 };
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