// discord_app/modules/premium/native/utils/PremiumManagementUtils.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import Constants from "../../../../Constants.tsx";
import Constants2 from "../../../../../discord_common/js/shared/Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import BillingStandaloneNativeUtils from "../../../payments/native/utils/BillingStandaloneNativeUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function defaultMobileWebNitroManagementSuccessCallback() {
  return logger.log("Successfully opened mobile web Nitro Management page");
}
function defaultMobileWebNitroManagementFailureCallback(arg0) {
  logger.error("Failed to open mobile web Nitro Management page, error response: ", arg0);
  const obj = { title: null, body: null, hideActionSheet: true };
  const intl = util.intl;
  obj.title = intl.string(util.t.NrBVjw);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t["gD+grx"]);
  obj.show(obj);
}
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
let closure_4 = Constants2.PaymentGatewayToFriendlyName;
const jsx = jsxProd.jsx;
const logger = new LoggerDefault("PremiumManagementUtils");
const PremiumManagementMethod = {
  IN_APP: "manage_in_app",
  IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY: "manage_in_external_mobile_payment_gateway",
  IN_WEB: "manage_in_web",
};
let result = size.fileFinishedImporting("modules/premium/native/utils/PremiumManagementUtils.tsx");

export const MobileWebDestinationTypes = { PREMIUM_MANAGEMENT: "premium_management" };
export { PremiumManagementMethod };
export const getPremiumManagementMethod = function getPremiumManagementMethod(
  isOnPlatformMatchingExternalPaymentGateway,
) {
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
          let tmp13Result = tmp13(1608);
          let str = "Android";
          if (tmp13Result.isMetaQuest()) {
            str = "Meta Quest";
          }
          str2 = str;
        }
        if (null === tmp12.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY) {
          if (null != subscription) {
            if (null != subscription.paymentGateway) {
              const intl4 = tmp13(1114).intl;
              obj = { mobilePlatform: str2, externalPaymentGateway: closure_4[subscription.paymentGateway] };
              return intl4.formatToPlainString(tmp13(1114).t.cFZnqX, obj);
            }
          }
        }
        if (null === tmp12.IN_WEB) {
          if (null != tmp) {
            if (tmp.shouldAllowExternalManagement) {
              if ("iOS" !== str2) {
                tmp13Result = tmp13(1608);
              }
              let status;
              if (subscription != null) {
                status = subscription.status;
              }
              if (tmp.returnCtaAsComponent) {
                obj = {
                  containerStyle: { justifyContent: "flex-start" },
                  onPress() {
                    if (null != c0) {
                      const obj = { loadId: tmp.loadId };
                      const tmp4 =
                        null != tmp.onSuccessCallback
                          ? tmp.onSuccessCallback
                          : defaultMobileWebNitroManagementSuccessCallback;
                      const tmp5 =
                        null != tmp.onFailureCallback
                          ? tmp.onFailureCallback
                          : defaultMobileWebNitroManagementFailureCallback;
                      const result = obj.goToStandaloneNitroManagementFromMobileApp(
                        "premium_external_management",
                        obj,
                        tmp4,
                        tmp5,
                      );
                    }
                  },
                  text: null,
                  variant: "text-sm/semibold",
                };
                const intl3 = tmp13(1114).intl;
                const t = tmp13(1114).t;
                obj.text = intl3.string(tmp8 ? t.tqSSSA : t["olSp/D"]);
                jsx(tmp13(7408).LinkButton, {
                  containerStyle: { justifyContent: "flex-start" },
                  onPress() {
                    if (null != c0) {
                      const obj = { loadId: tmp.loadId };
                      const tmp4 =
                        null != tmp.onSuccessCallback
                          ? tmp.onSuccessCallback
                          : defaultMobileWebNitroManagementSuccessCallback;
                      const tmp5 =
                        null != tmp.onFailureCallback
                          ? tmp.onFailureCallback
                          : defaultMobileWebNitroManagementFailureCallback;
                      const result = obj.goToStandaloneNitroManagementFromMobileApp(
                        "premium_external_management",
                        obj,
                        tmp4,
                        tmp5,
                      );
                    }
                  },
                  text: null,
                  variant: "text-sm/semibold",
                });
              } else {
                function manageExternalNitroSubscription() {
                  if (null != c0) {
                    const obj = { loadId: tmp.loadId };
                    const tmp4 =
                      null != tmp.onSuccessCallback
                        ? tmp.onSuccessCallback
                        : defaultMobileWebNitroManagementSuccessCallback;
                    const tmp5 =
                      null != tmp.onFailureCallback
                        ? tmp.onFailureCallback
                        : defaultMobileWebNitroManagementFailureCallback;
                    return obj.goToStandaloneNitroManagementFromMobileApp(
                      "premium_external_management",
                      obj,
                      tmp4,
                      tmp5,
                    );
                  }
                }
                const intl2 = tmp13(1114).intl;
                const obj1 = { manageExternalNitroSubscription };
                return intl2.format(tmp13(1114).t.IERwUb, obj1);
              }
              tmp8 =
                status === SubscriptionStatusTypes.CANCELED ||
                status === SubscriptionStatusTypes.PAUSE_PENDING ||
                status === SubscriptionStatusTypes.PAST_DUE;
            }
          }
          const intl = tmp13(1114).intl;
          const obj2 = { mobilePlatform: str2 };
          return intl.formatToPlainString(tmp13(1114).t.CnoyAN, obj2);
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
