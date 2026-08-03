import "set";
import get_ActivityIndicator from "messagesProxy";
import { PremiumGiftStyles } from "GuildFeatures";
import { GIFT_STYLE_DESCRIPTIONS } from "GIFT_STYLE_DESCRIPTIONS";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let CAKE;
let CHEST;
let COFFEE;
let STANDARD_BOX;
let c3;
let c4;
let closure_6;
let error;
const require = arg1;
({ View: c3, Pressable: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { [STANDARD_BOX]: require("registerAsset"), [CAKE]: require("registerAsset"), [CHEST]: require("registerAsset"), [COFFEE]: require("registerAsset") };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
obj = { uri: require("metadata") };
obj[PremiumGiftStyles.NITROWEEN_STANDARD] = obj;
obj[PremiumGiftStyles.SNOWGLOBE] = null;
obj[PremiumGiftStyles.BOX] = null;
obj[PremiumGiftStyles.CUP] = null;
obj = { uri: require("metadata") };
obj[PremiumGiftStyles.SEASONAL_CAKE] = obj;
obj[PremiumGiftStyles.SEASONAL_CHEST] = { uri: require("metadata") };
let obj1 = { uri: require("metadata") };
obj[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: require("metadata") };
const obj2 = { uri: require("metadata") };
obj[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: require("metadata") };
let closure_9 = createCacheKey.createStyles((arg0) => {
  let obj = { width: 78, height: 44, justifyContent: "center", marginEnd: importDefault(712).space.PX_8, marginStart: null };
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
const obj3 = { uri: require("metadata") };
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx");

export default function GiftBackgroundSelectTile(index) {
  let giftStyle;
  let selected;
  ({ selected, giftStyle } = index);
  const tmp = callback2(index.index);
  let tmp4Result = null;
  if (null != obj[giftStyle]) {
    obj = { "aria-label": null, "aria-selected": null, style: null, onPress: null, children: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj = { giftStyle: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]);
    obj[0] = intl.formatToPlainString(importDefault(2319)["+utqaz"], obj);
    obj[1] = selected;
    obj[2] = tmp.container;
    obj[3] = index.onPress;
    if (selected) {
      obj = { style: null };
      obj[0] = tmp.selected;
      selected = callback(closure_3, obj);
    }
    const items = [selected, ];
    const obj1 = { resizeMode: "contain", style: null, source: null };
    obj1[1] = tmp.image;
    obj1[2] = tmp2;
    items[1] = callback(importDefault(5207), obj1);
    obj[4] = items;
    tmp4Result = closure_7(closure_4, obj);
    const tmp4 = closure_7;
    const tmp5 = closure_4;
    const tmp8 = importDefault;
  }
  return tmp4Result;
};
export const GIFT_STYLE_IMG = obj;