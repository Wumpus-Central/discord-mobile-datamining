// === Module 13195: PremiumBillingInfo ===

// Module 13195 (PremiumBillingInfo)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import PremiumManagementUtils from "PremiumManagementUtils" /* 6910 */;
import PremiumSubscriptionInvoice from "PremiumSubscriptionInvoice" /* 13192 */;
import BillingInformation from "BillingInformation" /* 13196 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const util = Text(1126);
const PremiumUtils = Text(4528);
const Text_Text = Text(4886);
require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ SubscriptionStatusTypes: hasOwnProperty, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, externalSubtext: { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, billingContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, marginTop: 8 }, billingRenewalInfo: { marginTop: 4 }, billingManageGoogle: { marginTop: 8 } };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Text = require;
  let tmp = dependencyMap;
  const cResult = c.c(7);
  ({ style, subscription } = arg0);
  let tmp3 = null;
  if (obj2.isGooglePlayBillingSupported()) {
    tmp3 = null;
    if (subscription.isPurchasedViaGoogle) {
      if (cResult[0] !== style) {
        const items = [style];
        cResult[0] = style;
        cResult[1] = items;
        let tmp4 = items;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== subscription.paymentGateway) {
        const intl = util.intl;
        const obj3 = { onClick: PremiumUtils.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT") };
        const formatResult = intl.format(util.t["9NPc+O"], obj3);
        cResult[2] = subscription.paymentGateway;
        cResult[3] = formatResult;
        let tmp5 = formatResult;
        const TextResult = PremiumUtils;
      } else {
        tmp5 = cResult[3];
      }
      if (cResult[4] === tmp4) {
      }
      Text = Text_Text.Text;
      const obj4 = { style: tmp4, variant: "text-sm/medium", color: "text-link", children: tmp5 };
      tmp = timestampProducer(Text, obj4);
      cResult[4] = tmp4;
      cResult[5] = tmp5;
      cResult[6] = tmp;
    }
  }
  return tmp3;
}) : ((subscription) => {
  subscription = subscription.subscription;
  let tmp3 = null;
  if (obj.isGooglePlayBillingSupported()) {
    tmp3 = null;
    if (subscription.isPurchasedViaGoogle) {
      const obj2 = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
      const items = [subscription.style];
      obj2.style = items;
      const intl = util.intl;
      const obj3 = { onClick: PremiumUtils.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT") };
      obj2.children = intl.format(util.t["9NPc+O"], obj3);
      tmp3 = timestampProducer(Text_Text.Text, obj2);
      const tmpResult = PremiumUtils;
    }
  }
  return tmp3;
});
let closure_9 = tmp5;
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, marginTop: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumBillingInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(30);
  ({ style, subscription } = arg0);
  const tmp4 = closure_8();
  const tmp6 = useAnalyticsLocationsDefault();
  if (cResult[0] === subscription.id) {
    if (cResult[1] === tmp6) {
      let tmp7 = cResult[2];
    }
    const first = _slicedToArray(PremiumSubscriptionInvoice.useFetchSubscriptionInvoicePreview(tmp7), 1)[0];
    if (cResult[3] === subscription.id) {
      if (cResult[4] === tmp11) {
        let tmp12 = cResult[5];
      }
      const tmpResult4 = PremiumSubscriptionInvoice;
      const billingInformationNative = BillingInformation.useBillingInformationNative(subscription, first, _slicedToArray(tmpResult4.useGetSubscriptionInvoice(tmp12), 1)[0]);
      if (null == first) {
        return null;
      } else {
        if (cResult[6] !== subscription) {
          const externalManagementMessage = PremiumManagementUtils.getExternalManagementMessage(subscription, { shouldAllowExternalManagement: true });
          cResult[6] = subscription;
          cResult[7] = externalManagementMessage;
          let tmp15 = externalManagementMessage;
          const tmpResult6 = PremiumManagementUtils;
        } else {
          tmp15 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.Sb6wI1);
          cResult[8] = stringResult;
          let tmp18 = stringResult;
        } else {
          tmp18 = cResult[8];
        }
        if (cResult[9] !== tmp4.title) {
          const obj2 = { style: tmp4.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: tmp18 };
          const tmp22 = timestampProducer(Text_Text.Text, obj2);
          cResult[9] = tmp4.title;
          cResult[10] = tmp22;
          let tmp20 = tmp22;
        } else {
          tmp20 = cResult[10];
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-md/semibold", children: null };
          const intl2 = util.intl;
          obj3.children = intl2.string(util.t.KXQjfc);
          const tmp25 = timestampProducer(Text_Text.Text, obj3);
          cResult[11] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[11];
        }
        if (cResult[12] === billingInformationNative) {
          if (cResult[13] === tmp4.billingRenewalInfo) {
            let tmp26 = cResult[14];
          }
          if (cResult[15] === tmp4.billingManageGoogle) {
            if (cResult[16] === subscription) {
              let tmp29 = cResult[17];
            }
            if (cResult[18] === tmp4.billingContainer) {
              if (cResult[19] === tmp26) {
                if (cResult[20] === tmp29) {
                  let tmp33 = cResult[21];
                }
                if (cResult[22] === tmp15) {
                  if (cResult[23] === tmp4.externalSubtext) {
                    let tmp37 = cResult[24];
                  }
                  if (cResult[25] === style) {
                    if (cResult[26] === tmp33) {
                      if (cResult[27] === tmp37) {
                        if (cResult[28] === tmp20) {
                          let tmp40 = cResult[29];
                        }
                        return tmp40;
                      }
                    }
                  }
                  const obj4 = { style, children: null };
                  const items = [tmp20, tmp33, tmp37];
                  obj4.children = items;
                  const tmp43 = React5(View, obj4);
                  cResult[25] = style;
                  cResult[26] = tmp33;
                  cResult[27] = tmp37;
                  cResult[28] = tmp20;
                  cResult[29] = tmp43;
                  tmp40 = tmp43;
                }
                let tmp38 = null;
                if (null != tmp15) {
                  const obj5 = { style: tmp4.externalSubtext, variant: "text-sm/medium", children: tmp15 };
                  tmp38 = timestampProducer(Text_Text.Text, obj5);
                }
                cResult[22] = tmp15;
                cResult[23] = tmp4.externalSubtext;
                cResult[24] = tmp38;
                tmp37 = tmp38;
              }
            }
            const obj6 = { style: tmp4.billingContainer, children: null };
            const items1 = [tmp23, tmp26, tmp29];
            obj6.children = items1;
            const tmp36 = React5(View, obj6);
            cResult[18] = tmp4.billingContainer;
            cResult[19] = tmp26;
            cResult[20] = tmp29;
            cResult[21] = tmp36;
            tmp33 = tmp36;
          }
          const obj7 = { style: tmp4.billingManageGoogle, subscription };
          const tmp32 = timestampProducer(closure_9, obj7);
          cResult[15] = tmp4.billingManageGoogle;
          cResult[16] = subscription;
          cResult[17] = tmp32;
          tmp29 = tmp32;
        }
        const obj8 = { style: tmp4.billingRenewalInfo, variant: "text-sm/medium", children: billingInformationNative };
        const tmp28 = timestampProducer(Text_Text.Text, obj8);
        cResult[12] = billingInformationNative;
        cResult[13] = tmp4.billingRenewalInfo;
        cResult[14] = tmp28;
        tmp26 = tmp28;
      }
      const tmpResult5 = BillingInformation;
    }
    const obj9 = { subscriptionId: subscription.id, preventFetch: subscription.status !== constants.PAST_DUE };
    cResult[3] = subscription.id;
    cResult[4] = subscription.status !== constants.PAST_DUE;
    cResult[5] = obj9;
    tmp12 = obj9;
    const tmpResult = PremiumSubscriptionInvoice;
  }
  const obj10 = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations: tmp6, analyticsLocation: AnalyticsLocationDefault.PREMIUM_BILLING_INFO };
  cResult[0] = subscription.id;
  cResult[1] = tmp6;
  cResult[2] = obj10;
  tmp7 = obj10;
}) : ((subscription) => {
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
    items1[2] = timestampProducer(closure_9, obj10);
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
});
export const GoogleManagementLink = tmp5;