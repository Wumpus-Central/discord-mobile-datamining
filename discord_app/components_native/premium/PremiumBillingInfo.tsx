// === Module 13752: PremiumBillingInfo ===

// Module 13752 (PremiumBillingInfo)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import PremiumUtils from "PremiumUtils" /* 4481 */;
import Text_Text from "Text/Text" /* 4823 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7493 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7513 */;
import PremiumManagementUtils from "PremiumManagementUtils" /* 7732 */;
import PremiumSubscriptionInvoice from "PremiumSubscriptionInvoice" /* 13749 */;
import BillingInformation from "BillingInformation" /* 13753 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
class GoogleManagementLink {
  constructor(arg0) {
    subscription = global.subscription;
    tmp = closure_0;
    tmp2 = closure_2;
    obj = closure_0(closure_2[7]);
    tmp3 = null;
    if (obj.isGooglePlayBillingSupported()) {
      tmp3 = null;
      if (subscription.isPurchasedViaGoogle) {
        tmp4 = jsx;
        obj1 = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
        items = [];
        items[0] = global.style;
        obj1.style = items;
        intl = tmp(tmp2[9]).intl;
        obj5 = { onClick: null };
        tmpResult = tmp(tmp2[10]);
        str = "SUBSCRIPTION_MANAGEMENT";
        obj5.onClick = tmpResult.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        obj1.children = intl.format(tmp(tmp2[9]).t["9NPc+O"], obj5);
        tmp3 = jsx(tmp(tmp2[8]).Text, obj1);
      }
    }
    return tmp3;
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({ SubscriptionStatusTypes: hasOwnProperty, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, externalSubtext: { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, billingContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, marginTop: 8 }, billingRenewalInfo: { marginTop: 4 }, billingManageGoogle: { marginTop: 8 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumBillingInfo.tsx");

export default function PremiumBillingInfo(subscription) {
  subscription = subscription.subscription;
  const tmp = closure_8();
  const obj = PremiumSubscriptionInvoice;
  const obj2 = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations: useAnalyticsLocationsDefault(), analyticsLocation: AnalyticsLocationDefault.PREMIUM_BILLING_INFO };
  const first = _slicedToArray(PremiumSubscriptionInvoice.useGetSubscriptionInvoice({ subscriptionId: subscription.id, preventFetch: subscription.status !== constants.PAST_DUE }), 1)[0];
  BillingInformation;
  if (null == _slicedToArray(obj.useFetchSubscriptionInvoicePreview(obj2), 1)[0]) {
    return null;
  } else {
    const externalManagementMessage = PremiumManagementUtils.getExternalManagementMessage(subscription, { shouldAllowExternalManagement: true });
    const obj5 = { style: subscription.style, children: null };
    const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    const intl = util.intl;
    obj6.children = intl.string(util.t.Sb6wI1);
    const items = [timestampProducer(Text_Text.Text, obj6), , ];
    const obj7 = { style: tmp.billingContainer, children: null };
    const obj8 = { variant: "text-md/semibold", children: null };
    const intl2 = util.intl;
    obj8.children = intl2.string(util.t.KXQjfc);
    const items1 = [timestampProducer(Text_Text.Text, obj8), , ];
    const obj9 = { style: tmp.billingRenewalInfo, variant: "text-sm/medium", children: tmp6 };
    items1[1] = timestampProducer(Text_Text.Text, obj9);
    const obj10 = { style: tmp.billingManageGoogle, subscription };
    items1[2] = timestampProducer(GoogleManagementLink, obj10);
    obj7.children = items1;
    items[1] = React5(View, obj7);
    let tmp11Result = null;
    if (null != externalManagementMessage) {
      const obj11 = { style: tmp.externalSubtext, variant: "text-sm/medium", children: externalManagementMessage };
      tmp11Result = timestampProducer(Text_Text.Text, obj11);
    }
    items[2] = tmp11Result;
    obj5.children = items;
    return React5(View, obj5);
  }
  const obj4 = { subscriptionId: subscription.id, preventFetch: subscription.status !== constants.PAST_DUE };
};
export { GoogleManagementLink };