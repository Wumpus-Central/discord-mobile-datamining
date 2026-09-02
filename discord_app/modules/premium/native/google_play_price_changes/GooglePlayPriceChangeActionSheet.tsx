// === Module 16746: GooglePlayPriceChangeActionSheet ===

// Module 16746 (GooglePlayPriceChangeActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import combinedDefault from "combined" /* 1994 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "reset" /* 4145 */;
import closure_5 from "onInitializeSync" /* 16747 */;
import { HelpdeskArticles } from "ME" /* 673 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, textContainer: null, header: null, body: null };
createCacheKey = { padding: ThemesDefault.space.PX_32, paddingTop: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: ThemesDefault.space.PX_24 };
let obj1 = { marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_16, alignItems: "center", textAlign: "center" };
createCacheKey[3] = { textAlign: "center" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginBottom: ThemesDefault.space.PX_16, alignItems: "center", textAlign: "center" };
const result = require("set").fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeActionSheet.tsx");

export default function GooglePlayPriceChangeActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = callback3();
  let obj = markAsDismissed(586);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => priceChangeRecord.priceChangeRecord);
  obj1 = markAsDismissed(586);
  const items1 = [closure_4];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => premiumSubscription.getPremiumSubscription(true));
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.premiumPlanIdFromItems;
  }
  if (str == null) {
    str = "";
  }
  let tmp2Result = tmp2(4139);
  const tierDisplayNameByPlanId = tmp2Result.getTierDisplayNameByPlanId(str);
  tmp2Result = tmp2(4139);
  const intervalStringAsNoun = markAsDismissed(4139).getIntervalStringAsNoun(tmp2Result.getInterval(str).intervalType);
  const tmp2Result1 = markAsDismissed(4139);
  const tmp2Result2 = markAsDismissed(6089);
  const formatPriceResult = markAsDismissed(6089).formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
  const tmp2Result3 = markAsDismissed(6089);
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.textContainer, children: null };
  const obj2 = { variant: "heading-xl/bold", style: tmp.header, children: null };
  const intl = tmp2(1233).intl;
  obj2[2] = intl.format(markAsDismissed(1233).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId });
  const items2 = [callback(markAsDismissed(4474).Text, obj2), ];
  const obj3 = { variant: "text-md/medium", style: tmp.body, children: null };
  const intl2 = tmp2(1233).intl;
  const obj4 = { subscriptionName: tierDisplayNameByPlanId, changeDate: null, interval: null, newPrice: null, oldPrice: null, hc_article_url: null };
  const formatPriceResult1 = markAsDismissed(6089).formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
  obj4[1] = new Date(stateFromStores.expectedChargeTime);
  obj4[2] = intervalStringAsNoun;
  obj4[3] = formatPriceResult1;
  obj4[4] = formatPriceResult;
  const date = new Date(stateFromStores.expectedChargeTime);
  obj4[5] = combinedDefault.getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL);
  obj3[2] = intl2.format(markAsDismissed(1233).t["n+Hrjb"], obj4);
  items2[1] = callback(markAsDismissed(4474).Text, obj3);
  obj1[1] = items2;
  const items3 = [callback2(View, obj1), ];
  const obj5 = { variant: "primary", text: null, onPress: null };
  const intl3 = tmp2(1233).intl;
  obj5[1] = intl3.string(markAsDismissed(1233).t.BddRzS);
  obj5[2] = function onPress() {
    markAsDismissed(closure_1_7.USER_DISMISS);
  };
  items3[1] = callback(markAsDismissed(4928).Button, obj5);
  obj[1] = items3;
  obj[0] = callback2(View, obj);
  return callback(markAsDismissed(5630).BottomSheet, obj);
};