// === Module 7920: GoogleManagementLink ===

// Module 7920 (GoogleManagementLink)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4039 */;
import isPremiumGiftingSupported from "isPremiumGiftingSupported" /* 4052 */;
import Text from "Text" /* 4734 */;
import contextDefault from "context" /* 7139 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import defaultMobileWebNitroManagementSuccessCallback from "defaultMobileWebNitroManagementSuccessCallback" /* 7374 */;
import createSubscriptionInvoicePreview from "createSubscriptionInvoicePreview" /* 7916 */;
import getBillingInformationStringNative from "getBillingInformationStringNative" /* 7921 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
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
noopAll;
({ SubscriptionStatusTypes: c5, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, marginTop: 8 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { marginTop: 4 };
createCacheKey[4] = { marginTop: 8 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("components_native/premium/PremiumBillingInfo.tsx");

export default function PremiumBillingInfo(subscription) {
  subscription = subscription.subscription;
  const tmp = callback4();
  let obj = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations: contextDefault(), analyticsLocation: QUICK_SWITCHERDefault.PREMIUM_BILLING_INFO };
  const first = callback(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  createSubscriptionInvoicePreview;
  if (null == first) {
    return null;
  } else {
    let tmp2Result = defaultMobileWebNitroManagementSuccessCallback;
    const externalManagementMessage = tmp2Result.getExternalManagementMessage(subscription, { shouldAllowExternalManagement: true });
    obj = { style: null, children: null };
    obj[0] = subscription.style;
    obj1 = { style: null, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    obj1[0] = tmp.title;
    const intl = getSystemLocale.intl;
    obj1[4] = intl.string(getSystemLocale.t.Sb6wI1);
    const items = [callback2(Text.Text, obj1), , ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.billingContainer;
    const obj3 = { variant: "text-md/semibold", children: null };
    const intl2 = getSystemLocale.intl;
    obj3[1] = intl2.string(getSystemLocale.t.KXQjfc);
    const items1 = [callback2(Text.Text, obj3), , ];
    const obj4 = { style: null, variant: "text-sm/medium", children: null };
    obj4[0] = tmp.billingRenewalInfo;
    tmp2Result = getBillingInformationStringNative;
    obj4[2] = tmp2Result.getBillingInformationStringNative(subscription, first, tmp6);
    items1[1] = callback2(Text.Text, obj4);
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
      tmp11Result = callback2(Text.Text, obj6);
    }
    items[2] = tmp11Result;
    obj[1] = items;
    return callback3(View, obj);
  }
};
export { GoogleManagementLink };