// === Module 13345: SubscriptionAccountHoldNotice ===

// Module 13345 (SubscriptionAccountHoldNotice)
import nativeDefault from "native" /* 576 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import _modDef12769 from "module_12769" /* 12769 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Linking: c3, View: closure_4 } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, textContainer: null, icon: null, text: null };
createStyles = { padding: 8, margin: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.container = createStyles;
createStyles.textContainer = { flexDirection: "row" };
createStyles.icon = { marginRight: 4 };
createStyles.text = { marginBottom: 8, flex: 1 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/SubscriptionAccountHoldNotice.tsx");

export default function SubscriptionAccountHoldNotice(subscription) {
  subscription = subscription.subscription;
  const tmp = closure_8();
  let tmp2 = null;
  if (subscription.status === SubscriptionStatusTypes.ACCOUNT_HOLD) {
    let obj = { style: tmp.container, children: null };
    obj = { style: tmp.textContainer, children: null };
    obj = { size: subscription(1178).IconSizes.MEDIUM, style: tmp.icon, source: _modDef12769 };
    const items = [closure_6(subscription(1178).Icon, obj), ];
    const obj1 = { style: tmp.text, variant: "text-sm/medium", children: null };
    const intl = subscription(1114).intl;
    const obj2 = { endDate: subscription.currentPeriodEnd, planDescription: subscription(4218).getDisplayName(subscription.planId) };
    obj1.children = intl.format(subscription(1114).t["7I21Iz"], obj2);
    items[1] = closure_6(subscription(4556).Text, obj1);
    obj.children = items;
    const items1 = [closure_7(closure_4, obj), ];
    const obj3 = { size: "sm", text: null, onPress: null };
    const intl2 = subscription(1114).intl;
    obj3.text = intl2.string(subscription(1114).t.VJmUNy);
    obj3.onPress = function onPress() {
      return React3.openURL(PremiumUtils.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
    };
    items1[1] = closure_6(subscription(4975).Button, obj3);
    obj.children = items1;
    tmp2 = closure_7(closure_4, obj);
    const obj6 = subscription(4218);
  }
  return tmp2;
};