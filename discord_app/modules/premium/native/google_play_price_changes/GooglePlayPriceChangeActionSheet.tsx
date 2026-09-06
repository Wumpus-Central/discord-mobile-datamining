// discord_app/modules/premium/native/google_play_price_changes/GooglePlayPriceChangeActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore.tsx";

const require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, textContainer: null, header: null, body: null };
createStyles = { padding: nativeDefault.space.PX_32, paddingTop: nativeDefault.space.PX_24 };
createStyles.container = createStyles;
createStyles.textContainer = { marginBottom: nativeDefault.space.PX_24 };
let obj1 = { marginBottom: nativeDefault.space.PX_24 };
createStyles.header = { marginBottom: nativeDefault.space.PX_16, alignItems: "center", textAlign: "center" };
createStyles.body = { textAlign: "center" };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/native/google_play_price_changes/GooglePlayPriceChangeActionSheet.tsx",
);

export default function GooglePlayPriceChangeActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  let obj = markAsDismissed(504);
  const items = [GooglePlayPriceChangeStore];
  const stateFromStores = obj.useStateFromStores(items, () => priceChangeRecord.priceChangeRecord);
  let obj1 = markAsDismissed(504);
  const items1 = [SubscriptionStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => premiumSubscription.getPremiumSubscription(true));
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.premiumPlanIdFromItems;
  }
  if (str == null) {
    str = "";
  }
  let tmp2Result = tmp2(4218);
  const tierDisplayNameByPlanId = tmp2Result.getTierDisplayNameByPlanId(str);
  tmp2Result = tmp2(4218);
  const intervalStringAsNoun = markAsDismissed(4218).getIntervalStringAsNoun(tmp2Result.getInterval(str).intervalType);
  const tmp2Result1 = markAsDismissed(4218);
  const tmp2Result2 = markAsDismissed(7234);
  const formatPriceResult = markAsDismissed(7234).formatPrice(stateFromStores.oldPrice, stateFromStores.oldCurrency);
  const tmp2Result3 = markAsDismissed(7234);
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.textContainer, children: null };
  const obj2 = { variant: "heading-xl/bold", style: tmp.header, children: null };
  const intl = tmp2(1114).intl;
  obj2.children = intl.format(markAsDismissed(1114).t.x0bFvn, { subscriptionName: tierDisplayNameByPlanId });
  const items2 = [closure_8(markAsDismissed(4556).Text, obj2)];
  const obj3 = { variant: "text-md/medium", style: tmp.body, children: null };
  const intl2 = tmp2(1114).intl;
  const obj4 = {
    subscriptionName: tierDisplayNameByPlanId,
    changeDate: null,
    interval: null,
    newPrice: null,
    oldPrice: null,
    hc_article_url: null,
  };
  const formatPriceResult1 = markAsDismissed(7234).formatPrice(stateFromStores.newPrice, stateFromStores.newCurrency);
  obj4.changeDate = new Date(stateFromStores.expectedChargeTime);
  obj4.interval = intervalStringAsNoun;
  obj4.newPrice = formatPriceResult1;
  obj4.oldPrice = formatPriceResult;
  const date = new Date(stateFromStores.expectedChargeTime);
  obj4.hc_article_url = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SUBSCRIPTION_CANCEL);
  obj3.children = intl2.format(markAsDismissed(1114).t["n+Hrjb"], obj4);
  items2[1] = closure_8(markAsDismissed(4556).Text, obj3);
  obj1.children = items2;
  const items3 = [closure_9(View, obj1)];
  const obj5 = { variant: "primary", text: null, onPress: null };
  const intl3 = tmp2(1114).intl;
  obj5.text = intl3.string(markAsDismissed(1114).t.BddRzS);
  obj5.onPress = function onPress() {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  };
  items3[1] = closure_8(markAsDismissed(4975).Button, obj5);
  obj.children = items3;
  obj.children = closure_9(View, obj);
  return closure_8(markAsDismissed(7150).BottomSheet, obj);
}
