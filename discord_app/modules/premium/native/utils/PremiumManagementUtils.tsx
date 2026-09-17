// === Module 7518: PremiumManagementUtils ===

// Module 7518 (PremiumManagementUtils)
import LoggerDefault from "Logger" /* 3 */;
import jsxProd from "jsxProd" /* 21 */;
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 1085 */;
import util from "util" /* 1115 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4985 */;
import BillingStandaloneNativeUtils from "BillingStandaloneNativeUtils" /* 7519 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function defaultMobileWebNitroManagementSuccessCallback() {
  return logger.log("Successfully opened mobile web Nitro Management page");
}
function defaultMobileWebNitroManagementFailureCallback(arg0) {
  logger.error("Failed to open mobile web Nitro Management page, error response: ", arg0);
  const obj2 = { title: null, body: null, hideActionSheet: true };
  const intl = util.intl;
  obj2.title = intl.string(util.t.NrBVjw);
  const intl2 = util.intl;
  obj2.body = intl2.string(util.t["gD+grx"]);
  actions_AlertActionCreatorsDefault.show(obj2);
}
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
let closure_4 = Constants2.PaymentGatewayToFriendlyName;
const jsx = jsxProd.jsx;
const logger = new LoggerDefault("PremiumManagementUtils");
const PremiumManagementMethod = { IN_APP: "manage_in_app", IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY: "manage_in_external_mobile_payment_gateway", IN_WEB: "manage_in_web" };
let result = size.fileFinishedImporting("modules/premium/native/utils/PremiumManagementUtils.tsx");

export const MobileWebDestinationTypes = { PREMIUM_MANAGEMENT: "premium_management" };
export { PremiumManagementMethod };
export const getPremiumManagementMethod = function getPremiumManagementMethod(isOnPlatformMatchingExternalPaymentGateway) {
  if (null == isOnPlatformMatchingExternalPaymentGateway) {
    return null;
  } else if (isOnPlatformMatchingExternalPaymentGateway.isOnPlatformMatchingExternalPaymentGateway) {
    let IN_WEB = obj.IN_APP;
  } else {
    if (isOnPlatformMatchingExternalPaymentGateway.isPurchasedExternally) {
      if (null != isOnPlatformMatchingExternalPaymentGateway.paymentGateway) {
        IN_WEB = obj.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY;
      }
    }
    IN_WEB = obj.IN_WEB;
  }
};
export const getExternalManagementMessage = function getExternalManagementMessage(subscription, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  _require = tmp;
  if (null == subscription) {
    if (null != null) {
      if (null !== obj.IN_APP) {
        let str2 = "iOS";
        if (!obj7.isIOS()) {
          let str = "Android";
          if (tmp13Result.isMetaQuest()) {
            str = "Meta Quest";
          }
          str2 = str;
          tmp13Result = tmp13(1609);
        }
        if (null === tmp12.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY) {
          if (null != subscription) {
            if (null != subscription.paymentGateway) {
              const intl4 = tmp13(1115).intl;
              obj = { mobilePlatform: str2, externalPaymentGateway: closure_4[subscription.paymentGateway] };
              return intl4.formatToPlainString(tmp13(1115).t.cFZnqX, obj);
            }
          }
        }
        if (null === tmp12.IN_WEB) {
          if (null != tmp) {
            if (tmp.shouldAllowExternalManagement) {
              if ("iOS" !== str2) {
                tmp13(1609);
              }
              let status;
              if (subscription != null) {
                status = subscription.status;
              }
              if (tmp.returnCtaAsComponent) {
                let obj2 = {
                  containerStyle: { justifyContent: "flex-start" },
                  onPress() {
                                  if (null != _null) {
                                    const obj = BillingStandaloneNativeUtils;
                                    const obj2 = { loadId: _null.loadId };
                                    const tmp4 = null != _null.onSuccessCallback ? _null.onSuccessCallback : defaultMobileWebNitroManagementSuccessCallback;
                                    const tmp5 = null != _null.onFailureCallback ? _null.onFailureCallback : defaultMobileWebNitroManagementFailureCallback;
                                    const result = obj.goToStandaloneNitroManagementFromMobileApp("premium_external_management", obj2, tmp4, tmp5);
                                  }
                                },
                  text: null,
                  variant: "text-sm/semibold"
                };
                const intl3 = tmp13(1115).intl;
                const t = tmp13(1115).t;
                obj2.text = intl3.string(tmp8 ? t.tqSSSA : t["olSp/D"]);
                jsx(tmp13(7522).LinkButton, {
                  containerStyle: { justifyContent: "flex-start" },
                  onPress() {
                                  if (null != _null) {
                                    const obj = BillingStandaloneNativeUtils;
                                    const obj2 = { loadId: _null.loadId };
                                    const tmp4 = null != _null.onSuccessCallback ? _null.onSuccessCallback : defaultMobileWebNitroManagementSuccessCallback;
                                    const tmp5 = null != _null.onFailureCallback ? _null.onFailureCallback : defaultMobileWebNitroManagementFailureCallback;
                                    const result = obj.goToStandaloneNitroManagementFromMobileApp("premium_external_management", obj2, tmp4, tmp5);
                                  }
                                },
                  text: null,
                  variant: "text-sm/semibold"
                });
              } else {
                function manageExternalNitroSubscription() {
                  if (null != _null) {
                    const obj = BillingStandaloneNativeUtils;
                    const obj2 = { loadId: _null.loadId };
                    const tmp4 = null != _null.onSuccessCallback ? _null.onSuccessCallback : defaultMobileWebNitroManagementSuccessCallback;
                    const tmp5 = null != _null.onFailureCallback ? _null.onFailureCallback : defaultMobileWebNitroManagementFailureCallback;
                    return obj.goToStandaloneNitroManagementFromMobileApp("premium_external_management", obj2, tmp4, tmp5);
                  }
                }
                const intl2 = tmp13(1115).intl;
                const obj3 = { manageExternalNitroSubscription };
                return intl2.format(tmp13(1115).t.IERwUb, obj3);
              }
              tmp8 = status === SubscriptionStatusTypes.CANCELED || status === SubscriptionStatusTypes.PAUSE_PENDING || status === SubscriptionStatusTypes.PAST_DUE;
            }
          }
          const intl = tmp13(1115).intl;
          const obj4 = { mobilePlatform: str2 };
          return intl.formatToPlainString(tmp13(1115).t.CnoyAN, obj4);
        } else {
          return null;
        }
        obj7 = require("PlatformUtils");
      }
    }
    return null;
  } else if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
    let IN_WEB = obj.IN_APP;
  } else {
    if (subscription.isPurchasedExternally) {
      if (null != subscription.paymentGateway) {
        IN_WEB = obj.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY;
      }
    }
    IN_WEB = obj.IN_WEB;
  }
};