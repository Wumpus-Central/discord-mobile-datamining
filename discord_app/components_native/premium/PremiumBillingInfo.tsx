// discord_app/components_native/premium/PremiumBillingInfo.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import useAnalyticsLocationsDefault from "../../modules/app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../modules/app_analytics/AnalyticsLocation.tsx";
import PremiumManagementUtils from "../../modules/premium/native/utils/PremiumManagementUtils.tsx";
import PremiumSubscriptionInvoice from "../../modules/premium/PremiumSubscriptionInvoice.tsx";
import BillingInformation from "../../modules/billing/native/subscription/BillingInformation.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

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
        obj5.onClick = tmpResult.getExternalSubscriptionMethodUrl(
          subscription.paymentGateway,
          "SUBSCRIPTION_MANAGEMENT",
        );
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
const createStyles = fn(4638);
let obj2 = {
  title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING },
  externalSubtext: { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING },
  billingContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, marginTop: 8 },
  billingRenewalInfo: { marginTop: 4 },
  billingManageGoogle: { marginTop: 8 },
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumBillingInfo.tsx");

export default function PremiumBillingInfo(subscription) {
  subscription = subscription.subscription;
  const tmp = closure_8();
  const obj = PremiumSubscriptionInvoice;
  const first = _slicedToArray(
    obj.useFetchSubscriptionInvoicePreview({
      subscriptionId: subscription.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: useAnalyticsLocationsDefault(),
      analyticsLocation: AnalyticsLocationDefault.PREMIUM_BILLING_INFO,
    }),
    1,
  )[0];
  PremiumSubscriptionInvoice;
  if (null == first) {
    return null;
  } else {
    const externalManagementMessage = PremiumManagementUtils.getExternalManagementMessage(subscription, {
      shouldAllowExternalManagement: true,
    });
    const obj3 = { style: subscription.style, children: null };
    const obj4 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "eyebrow",
      color: "text-default",
      children: null,
    };
    const intl = util.intl;
    obj4.children = intl.string(util.t.Sb6wI1);
    const items = [timestampProducer(Text_Text.Text, obj4), ,];
    const obj5 = { style: tmp.billingContainer, children: null };
    const obj6 = { variant: "text-md/semibold", children: null };
    const intl2 = util.intl;
    obj6.children = intl2.string(util.t.KXQjfc);
    const items1 = [timestampProducer(Text_Text.Text, obj6), ,];
    const obj7 = { style: tmp.billingRenewalInfo, variant: "text-sm/medium", children: null };
    const tmp2Result = PremiumManagementUtils;
    obj7.children = BillingInformation.getBillingInformationStringNative(subscription, first, tmp6);
    items1[1] = timestampProducer(Text_Text.Text, obj7);
    const obj8 = { style: tmp.billingManageGoogle, subscription };
    items1[2] = timestampProducer(GoogleManagementLink, obj8);
    obj5.children = items1;
    items[1] = React5(View, obj5);
    let tmp11Result = null;
    if (null != externalManagementMessage) {
      const obj9 = { style: tmp.externalSubtext, variant: "text-sm/medium", children: externalManagementMessage };
      tmp11Result = timestampProducer(Text_Text.Text, obj9);
    }
    items[2] = tmp11Result;
    obj3.children = items;
    return React5(View, obj3);
  }
  const obj2 = {
    subscriptionId: subscription.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: useAnalyticsLocationsDefault(),
    analyticsLocation: AnalyticsLocationDefault.PREMIUM_BILLING_INFO,
  };
}
export { GoogleManagementLink };
