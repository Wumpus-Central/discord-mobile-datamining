// === Module 13346: PremiumBillingInfo ===

// Module 13346 (PremiumBillingInfo)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4231 */;
import Text_Text from "Text/Text" /* 4556 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import PremiumManagementUtils from "PremiumManagementUtils" /* 7404 */;
import PremiumSubscriptionInvoice from "PremiumSubscriptionInvoice" /* 13343 */;
import BillingInformation from "BillingInformation" /* 13347 */;
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
        obj = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
        items = [];
        items[0] = global.style;
        obj.style = items;
        intl = tmp(tmp2[9]).intl;
        obj1 = { onClick: null };
        tmpResult = tmp(tmp2[10]);
        str = "SUBSCRIPTION_MANAGEMENT";
        obj1.onClick = tmpResult.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        obj.children = intl.format(tmp(tmp2[9]).t["9NPc+O"], obj1);
        tmp3 = jsx(tmp(tmp2[8]).Text, obj);
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
fn(4560);
let createStyles = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, externalSubtext: { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, billingContainer: null, billingRenewalInfo: null, billingManageGoogle: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, marginTop: 8 };
createStyles.billingContainer = createStyles;
createStyles.billingRenewalInfo = { marginTop: 4 };
createStyles.billingManageGoogle = { marginTop: 8 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumBillingInfo.tsx");

export default function PremiumBillingInfo(subscription) {
  subscription = subscription.subscription;
  const tmp = closure_8();
  let obj = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations: useAnalyticsLocationsDefault(), analyticsLocation: AnalyticsLocationDefault.PREMIUM_BILLING_INFO };
  const first = _slicedToArray(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  PremiumSubscriptionInvoice;
  if (null == first) {
    return null;
  } else {
    let tmp2Result = PremiumManagementUtils;
    const externalManagementMessage = tmp2Result.getExternalManagementMessage(subscription, { shouldAllowExternalManagement: true });
    obj = { style: subscription.style, children: null };
    const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    const intl = util.intl;
    obj1.children = intl.string(util.t.Sb6wI1);
    const items = [timestampProducer(Text_Text.Text, obj1), , ];
    const obj2 = { style: tmp.billingContainer, children: null };
    const obj3 = { variant: "text-md/semibold", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(util.t.KXQjfc);
    const items1 = [timestampProducer(Text_Text.Text, obj3), , ];
    const obj4 = { style: tmp.billingRenewalInfo, variant: "text-sm/medium", children: null };
    tmp2Result = BillingInformation;
    obj4.children = tmp2Result.getBillingInformationStringNative(subscription, first, tmp6);
    items1[1] = timestampProducer(Text_Text.Text, obj4);
    const obj5 = { style: tmp.billingManageGoogle, subscription };
    items1[2] = timestampProducer(GoogleManagementLink, obj5);
    obj2.children = items1;
    items[1] = React5(View, obj2);
    let tmp11Result = null;
    if (null != externalManagementMessage) {
      const obj6 = { style: tmp.externalSubtext, variant: "text-sm/medium", children: externalManagementMessage };
      tmp11Result = timestampProducer(Text_Text.Text, obj6);
    }
    items[2] = tmp11Result;
    obj.children = items;
    return React5(View, obj);
  }
};
export { GoogleManagementLink };