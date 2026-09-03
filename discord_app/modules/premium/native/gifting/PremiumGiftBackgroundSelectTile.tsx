// === Module 10984: PremiumGiftStyles ===

// Module 10984 (PremiumGiftStyles)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2432 */;
import preloadDefault from "preload" /* 5502 */;
import registerAssetDefault from "registerAsset" /* 10986 */;
import registerAssetDefault2 from "registerAsset" /* 10987 */;
import registerAssetDefault3 from "registerAsset" /* 10988 */;
import registerAssetDefault4 from "registerAsset" /* 10989 */;
import metadataDefault from "metadata" /* 10990 */;
import metadataDefault2 from "metadata" /* 10991 */;
import metadataDefault3 from "metadata" /* 10992 */;
import metadataDefault4 from "metadata" /* 10993 */;
import metadataDefault5 from "metadata" /* 10994 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { PremiumGiftStyles } from "GuildFeatures" /* 1923 */;
import { GIFT_STYLE_DESCRIPTIONS } from "GIFT_STYLE_DESCRIPTIONS" /* 10985 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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
  obj = { position: "absolute", borderColor: tmp(709).colors.TEXT_BRAND, borderRadius: tmp(709).radii.sm, borderWidth: 2, flex: 1, width: 78, height: 44 };
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