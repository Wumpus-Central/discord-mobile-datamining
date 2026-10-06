// discord_app/modules/premium/native/utils/PremiumManagementUtils.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import Constants2 from "../../../../../discord_common/js/shared/Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import BillingStandaloneNativeUtils from "../../../payments/native/utils/BillingStandaloneNativeUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function defaultMobileWebNitroManagementSuccessCallback() {
  return logger.log("Successfully opened mobile web Nitro Management page");
}
function defaultMobileWebNitroManagementFailureCallback(arg0) {
  let intl;
  let intl2;
  logger.error("Failed to open mobile web Nitro Management page, error response: ", arg0);
  const obj = { title: intl.string(intl5.t.NrBVjw), body: intl2.string(intl5.t["gD+grx"]), hideActionSheet: true };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl5.intl;
  intl2 = intl5.intl;
  show(obj);
}
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
let closure_4 = Constants2.PaymentGatewayToFriendlyName;
const jsx = Fragment.jsx;
let tmp2 = new LoggerDefault("PremiumManagementUtils");
const logger = tmp2;
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
  let tmp = null;
  if (null != isOnPlatformMatchingExternalPaymentGateway) {
    let IN_WEB;
    if (isOnPlatformMatchingExternalPaymentGateway.isOnPlatformMatchingExternalPaymentGateway) {
      IN_WEB = obj.IN_APP;
    } else {
      if (isOnPlatformMatchingExternalPaymentGateway.isPurchasedExternally) {
        if (null != isOnPlatformMatchingExternalPaymentGateway.paymentGateway) {
          IN_WEB = obj.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY;
        }
      }
      IN_WEB = obj.IN_WEB;
    }
    tmp = IN_WEB;
  }
  return tmp;
};
export const getExternalManagementMessage = function getExternalManagementMessage(subscription, arg1) {
  let _null;
  let obj;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  _require = tmp;
  let tmp2 = null;
  if (null != subscription) {
    let IN_WEB;
    if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
      let tmp5 = obj;
      IN_WEB = obj.IN_APP;
    } else {
      if (subscription.isPurchasedExternally) {
        if (null != subscription.paymentGateway) {
          let tmp4 = obj;
          IN_WEB = obj.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY;
        }
      }
      IN_WEB = obj.IN_WEB;
    }
    tmp2 = IN_WEB;
  }
  if (null != tmp2) {
    if (tmp2 !== obj.IN_APP) {
      let str2 = "iOS";
      const obj7 = require("PlatformUtils");
      if (!obj7.isIOS()) {
        let str = "Android";
        const tmp13Result = require("MetaQuestUtils");
        if (tmp13Result.isMetaQuest()) {
          str = "Meta Quest";
        }
        str2 = str;
      }
      if (tmp2 === obj.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY) {
        if (null != subscription) {
          if (null != subscription.paymentGateway) {
            const intl4 = tmp13(1126).intl;
            obj = { mobilePlatform: str2, externalPaymentGateway: closure_4[subscription.paymentGateway] };
            return intl4.formatToPlainString(require("intl").t.cFZnqX, obj);
          }
        }
      }
      if (tmp2 === obj.IN_WEB) {
        if (null != tmp) {
          if (tmp.shouldAllowExternalManagement) {
            let formatResult;
            if ("iOS" !== str2) {
              require("MetaQuestUtils");
            }
            let status;
            if (subscription != null) {
              status = subscription.status;
            }
            const tmp8 =
              status === SubscriptionStatusTypes.CANCELED ||
              status === SubscriptionStatusTypes.PAUSE_PENDING ||
              status === SubscriptionStatusTypes.PAST_DUE;
            if (tmp.returnCtaAsComponent) {
              const LinkButton = tmp13(6924).LinkButton;
              const intl3 = tmp13(1126).intl;
              const string = intl3.string;
              const t = tmp13(1126).t;
              formatResult = (
                <LinkButton
                  containerStyle={{ justifyContent: "flex-start" }}
                  onPress={function onPress() {
                    let result;
                    if (null != _null) {
                      const obj = BillingStandaloneNativeUtils;
                      const obj2 = { loadId: _null.loadId };
                      const tmp5 =
                        null != _null.onSuccessCallback
                          ? _null.onSuccessCallback
                          : defaultMobileWebNitroManagementSuccessCallback;
                      const tmp6 =
                        null != _null.onFailureCallback
                          ? _null.onFailureCallback
                          : defaultMobileWebNitroManagementFailureCallback;
                      result = obj.goToStandaloneNitroManagementFromMobileApp(
                        "premium_external_management",
                        obj2,
                        tmp5,
                        tmp6,
                      );
                    }
                    return result;
                  }}
                  text={string(tmp8 ? t.tqSSSA : t["olSp/D"])}
                  variant="text-sm/semibold"
                />
              );
            } else {
              function manageExternalNitroSubscription() {
                if (null != _null) {
                  const obj = BillingStandaloneNativeUtils;
                  const obj2 = { loadId: _null.loadId };
                  const tmp4 =
                    null != _null.onSuccessCallback
                      ? _null.onSuccessCallback
                      : defaultMobileWebNitroManagementSuccessCallback;
                  const tmp5 =
                    null != _null.onFailureCallback
                      ? _null.onFailureCallback
                      : defaultMobileWebNitroManagementFailureCallback;
                  return obj.goToStandaloneNitroManagementFromMobileApp(
                    "premium_external_management",
                    obj2,
                    tmp4,
                    tmp5,
                  );
                }
              }
              const intl2 = tmp13(1126).intl;
              const obj3 = { manageExternalNitroSubscription };
              formatResult = intl2.format(tmp13(1126).t.IERwUb, obj3);
            }
            return formatResult;
          }
        }
        const intl = tmp13(1126).intl;
        const obj4 = { mobilePlatform: str2 };
        return intl.formatToPlainString(require("intl").t.CnoyAN, obj4);
      } else {
        return null;
      }
    }
  }
  return null;
};
