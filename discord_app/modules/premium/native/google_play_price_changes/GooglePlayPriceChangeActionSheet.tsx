// === Module 19805: GooglePlayPriceChangeActionSheet ===

// Module 19805 (GooglePlayPriceChangeActionSheet)
import nativeDefault from "native" /* 575 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2188 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 2179 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 19806 */;

const require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const ContentDismissActionType = fn(5152).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { container: { padding: nativeDefault.space.PX_32, paddingTop: nativeDefault.space.PX_24 }, textContainer: null, header: null, body: null };
let obj3 = { padding: nativeDefault.space.PX_32, paddingTop: nativeDefault.space.PX_24 };
obj2.textContainer = { marginBottom: nativeDefault.space.PX_24 };
let obj4 = { marginBottom: nativeDefault.space.PX_24 };
obj2.header = { marginBottom: nativeDefault.space.PX_16, alignItems: "center", textAlign: "center" };
obj2.body = { textAlign: "center" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeActionSheet.tsx");

export default function GooglePlayPriceChangeActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  items = [GooglePlayPriceChangeStore];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => priceChangeRecord.priceChangeRecord);
  const obj = markAsDismissed(504);
  const items1 = [SubscriptionStore];
  const stateFromStores1 = markAsDismissed(504).useStateFromStores(items1, () => premiumSubscription.getPremiumSubscription(true));
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.premiumPlanIdFromItems;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = markAsDismissed(504);
  const tierDisplayNameByPlanId = markAsDismissed(2174).getTierDisplayNameByPlanId(str);
  const tmp2Result = markAsDismissed(2174);
  const tmp2Result5 = markAsDismissed(2174);
  const intervalStringAsNoun = markAsDismissed(2174).getIntervalStringAsNoun(tmp2Result5.getInterval(str).intervalType);
  const tmp2Result6 = markAsDismissed(2174);
  const tmp2Result7 = markAsDismissed(7253);
  const formatPriceResult = markAsDismissed(7253).formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
  const tmp2Result8 = markAsDismissed(7253);
  const obj3 = { children: null };
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.textContainer, children: null };
  const obj6 = { variant: "heading-xl/semibold", style: tmp.header, children: null };
  const intl = tmp2(1113).intl;
  obj6.children = intl.format(markAsDismissed(1113).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId });
  const items2 = [closure_8(markAsDismissed(5929).Text, obj6), ];
  const obj7 = { variant: "body-md/medium", style: tmp.body, children: null };
  const intl2 = tmp2(1113).intl;
  const obj8 = { subscriptionName: tierDisplayNameByPlanId, changeDate: null, interval: null, newPrice: null, oldPrice: null, hc_article_url: null };
  const formatPriceResult1 = markAsDismissed(7253).formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
  obj8.changeDate = new Date(stateFromStores.expectedChargeTime);
  obj8.interval = intervalStringAsNoun;
  obj8.newPrice = formatPriceResult1;
  obj8.oldPrice = formatPriceResult;
  const date = new Date(stateFromStores.expectedChargeTime);
  obj8.hc_article_url = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL);
  obj7.children = intl2.format(markAsDismissed(1113).t["n+Hrjb"], obj8);
  items2[1] = closure_8(markAsDismissed(5929).Text, obj7);
  obj5.children = items2;
  const items3 = [closure_9(View, obj5), ];
  const obj9 = { variant: "primary", text: null, onPress: null };
  const intl3 = tmp2(1113).intl;
  obj9.text = intl3.string(markAsDismissed(1113).t.BddRzS);
  obj9.onPress = function onPress() {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  };
  items3[1] = closure_8(markAsDismissed(5936).Button, obj9);
  obj4.children = items3;
  obj3.children = closure_9(View, obj4);
  return closure_8(markAsDismissed(5566).BottomSheet, obj3);
};