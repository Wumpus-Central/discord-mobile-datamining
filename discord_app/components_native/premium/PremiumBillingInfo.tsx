// discord_app/components_native/premium/PremiumBillingInfo.tsx
import _slicedToArray from "_slicedToArray";
import "noop";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { QUICK_SWITCHER } from "../../modules/app_analytics/AnalyticsLocation.tsx";
import { context } from "../../modules/app_analytics/useAnalyticsLocations.tsx";
import { createSubscriptionInvoicePreview } from "../../modules/premium/PremiumSubscriptionInvoice.tsx";

let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let c5;
let closure_6;
let error;
const require = arg1;
class GoogleManagementLink {
  constructor(arg0) {
    subscription = global.subscription;
    tmp = closure_0;
    tmp2 = closure_2;
    obj = require("isPremiumGiftingSupported");
    tmp3 = null;
    if (obj.isGooglePlayBillingSupported()) {
      tmp3 = null;
      if (subscription.isPurchasedViaGoogle) {
        tmp4 = jsx;
        obj = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
        items = [];
        items[0] = global.style;
        obj[0] = items;
        intl = require("getSystemLocale").intl;
        obj1 = { onClick: null };
        tmpResult = require("getPremiumPlanItem");
        str = "SUBSCRIPTION_MANAGEMENT";
        obj1[0] = tmpResult.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        obj[3] = intl.format(require("getSystemLocale").t["9NPc+O"], obj1);
        tmp3 = jsx(require("Text").Text, obj);
      }
    }
    return tmp3;
  }
}
({ SubscriptionStatusTypes: c5, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, externalSubtext: { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, billingContainer: null, billingRenewalInfo: null, billingManageGoogle: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, padding: 16, marginTop: 8 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { marginTop: 4 };
createCacheKey[4] = { marginTop: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/PremiumBillingInfo.tsx");

export default function PremiumBillingInfo(subscription) {
  subscription = subscription.subscription;
  const tmp = createCacheKey();
  let obj = createSubscriptionInvoicePreview;
  obj = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations: context(), analyticsLocation: QUICK_SWITCHER.PREMIUM_BILLING_INFO };
  const first = callback(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  createSubscriptionInvoicePreview;
  if (null == first) {
    return null;
  } else {
    let tmp2Result = tmp2(6907);
    const externalManagementMessage = tmp2Result.getExternalManagementMessage(subscription, { shouldAllowExternalManagement: true });
    obj = { style: null, children: null };
    obj[0] = subscription.style;
    const obj1 = { style: null, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    obj1[0] = tmp.title;
    const intl = tmp2(1236).intl;
    obj1[4] = intl.string(tmp2(1236).t.Sb6wI1);
    const items = [callback2(tmp2(4340).Text, obj1), , ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.billingContainer;
    const obj3 = { variant: "text-md/semibold", children: null };
    const intl2 = tmp2(1236).intl;
    obj3[1] = intl2.string(tmp2(1236).t.KXQjfc);
    const items1 = [callback2(tmp2(4340).Text, obj3), , ];
    const obj4 = { style: null, variant: "text-sm/medium", children: null };
    obj4[0] = tmp.billingRenewalInfo;
    tmp2Result = tmp2(7678);
    obj4[2] = tmp2Result.getBillingInformationStringNative(subscription, first, tmp6);
    items1[1] = callback2(tmp2(4340).Text, obj4);
    const obj5 = { style: null, subscription: null };
    obj5[0] = tmp.billingManageGoogle;
    obj5[1] = subscription;
    items1[2] = callback2(GoogleManagementLink, obj5);
    obj2[1] = items1;
    items[1] = callback3(View, obj2);
    let tmp11Result = null;
    if (null != externalManagementMessage) {
      const obj6 = { style: null, variant: "text-sm/medium", children: null };
      obj6[0] = tmp.externalSubtext;
      obj6[2] = externalManagementMessage;
      tmp11Result = callback2(tmp2(4340).Text, obj6);
    }
    items[2] = tmp11Result;
    obj[1] = items;
    return callback3(View, obj);
  }
};
export { GoogleManagementLink };