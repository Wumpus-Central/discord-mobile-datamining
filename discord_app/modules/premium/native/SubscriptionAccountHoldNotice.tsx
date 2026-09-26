// === Module 12931: SubscriptionAccountHoldNotice ===

// Module 12931 (SubscriptionAccountHoldNotice)
import nativeDefault from "native" /* 576 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import _modDef12285 from "module_12285" /* 12285 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Linking: c3, View: closure_4 } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { padding: 8, margin: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, textContainer: { flexDirection: "row" }, icon: { marginRight: 4 }, text: { marginBottom: 8, flex: 1 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/SubscriptionAccountHoldNotice.tsx");

export default function SubscriptionAccountHoldNotice(subscription) {
  subscription = subscription.subscription;
  const tmp = closure_8();
  let tmp2 = null;
  if (subscription.status === SubscriptionStatusTypes.ACCOUNT_HOLD) {
    const obj = { style: tmp.container, children: null };
    const obj2 = { style: tmp.textContainer, children: null };
    const obj3 = { size: subscription(1177).IconSizes.MEDIUM, style: tmp.icon, source: _modDef12285 };
    const items = [closure_6(subscription(1177).Icon, obj3), ];
    const obj4 = { style: tmp.text, variant: "text-sm/medium", children: null };
    const intl = subscription(1115).intl;
    const obj5 = { endDate: subscription.currentPeriodEnd, planDescription: subscription(4488).getDisplayName(subscription.planId) };
    obj4.children = intl.format(subscription(1115).t["7I21Iz"], obj5);
    items[1] = closure_6(subscription(4832).Text, obj4);
    obj2.children = items;
    const items1 = [closure_7(closure_4, obj2), ];
    const obj7 = { size: "sm", text: null, onPress: null };
    const intl2 = subscription(1115).intl;
    obj7.text = intl2.string(subscription(1115).t.VJmUNy);
    obj7.onPress = function onPress() {
      return React3.openURL(PremiumUtils.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
    };
    items1[1] = closure_6(subscription(5281).Button, obj7);
    obj.children = items1;
    tmp2 = closure_7(closure_4, obj);
    const obj6 = subscription(4488);
  }
  return tmp2;
};