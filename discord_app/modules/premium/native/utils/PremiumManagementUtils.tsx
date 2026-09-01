// discord_app/modules/premium/native/utils/PremiumManagementUtils.tsx
import set from "../../../../../_runtime/00002_set.js";
import timestampDefault from "../../../debug/Logger.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import sum from "../../../../../discord_common/js/shared/Constants.tsx";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import _modDef4858 from "../../../../actions/native/AlertActionCreators.tsx";
import { set } from "../../../../utils/PlatformUtils.tsx";

function defaultMobileWebNitroManagementSuccessCallback() {
  return logger.log("Successfully opened mobile web Nitro Management page");
}
function defaultMobileWebNitroManagementFailureCallback(arg0) {
  logger.error("Failed to open mobile web Nitro Management page, error response: ", arg0);
  obj = _modDef4858;
  obj = { title: null, body: null, hideActionSheet: true };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.NrBVjw);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["gD+grx"]);
  obj.show(obj);
}
const SubscriptionStatusTypes = ME.SubscriptionStatusTypes;
let closure_4 = sum.PaymentGatewayToFriendlyName;
const jsx = jsxProd.jsx;
let closure_6 = new timestampDefault("PremiumManagementUtils");
let obj = { IN_APP: "manage_in_app", IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY: "manage_in_external_mobile_payment_gateway", IN_WEB: "manage_in_web" };
const tmp2 = new timestampDefault("PremiumManagementUtils");
let result = set.fileFinishedImporting("modules/premium/native/utils/PremiumManagementUtils.tsx");

export const MobileWebDestinationTypes = { PREMIUM_MANAGEMENT: "premium_management" };
export const PremiumManagementMethod = obj;
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
  const _require = tmp;
  if (null == subscription) {
    if (null != null) {
      if (null !== obj.IN_APP) {
        let str2 = "iOS";
        if (!obj7.isIOS()) {
          let tmp13Result = tmp13(1624);
          let str = "Android";
          if (tmp13Result.isMetaQuest()) {
            str = "Meta Quest";
          }
          str2 = str;
        }
        if (null === tmp12.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY) {
          if (null != subscription) {
            if (null != subscription.paymentGateway) {
              const intl4 = tmp13(1236).intl;
              obj = { mobilePlatform: null, externalPaymentGateway: null };
              obj[0] = str2;
              obj[1] = table[subscription.paymentGateway];
              return intl4.formatToPlainString(tmp13(1236).t.cFZnqX, obj);
            }
          }
        }
        if (null === tmp12.IN_WEB) {
          if (null != tmp) {
            if (tmp.shouldAllowExternalManagement) {
              if ("iOS" !== str2) {
                tmp13Result = tmp13(1624);
              }
              let status;
              if (subscription != null) {
                status = subscription.status;
              }
              if (tmp.returnCtaAsComponent) {
                obj = { containerStyle: null, onPress: null, text: null, variant: "text-sm/semibold" };
                obj[0] = { justifyContent: "flex-start" };
                obj[1] = function onPress() {
                  if (null != _null) {
                    obj = _null(closure_1_2[8]);
                    obj = { loadId: null };
                    obj[0] = tmp.loadId;
                    const tmp4 = null != tmp.onSuccessCallback ? tmp.onSuccessCallback : closure_1_8;
                    const tmp5 = null != tmp.onFailureCallback ? tmp.onFailureCallback : closure_1_9;
                    const result = obj.goToStandaloneNitroManagementFromMobileApp("premium_external_management", obj, tmp4, tmp5);
                  }
                };
                const intl3 = tmp13(1236).intl;
                const t = tmp13(1236).t;
                obj[2] = intl3.string(tmp8 ? t.tqSSSA : t["olSp/D"]);
                jsx(tmp13(7151).LinkButton, { containerStyle: null, onPress: null, text: null, variant: "text-sm/semibold" });
                const tmp9 = jsx;
              } else {
                function manageExternalNitroSubscription() {
                  if (null != _null) {
                    obj = _null(closure_1_2[8]);
                    obj = { loadId: null };
                    obj[0] = tmp.loadId;
                    const tmp4 = null != tmp.onSuccessCallback ? tmp.onSuccessCallback : closure_1_8;
                    const tmp5 = null != tmp.onFailureCallback ? tmp.onFailureCallback : closure_1_9;
                    return obj.goToStandaloneNitroManagementFromMobileApp("premium_external_management", obj, tmp4, tmp5);
                  }
                }
                const intl2 = tmp13(1236).intl;
                obj1 = { manageExternalNitroSubscription: null };
                obj1[0] = manageExternalNitroSubscription;
                return intl2.format(tmp13(1236).t.IERwUb, obj1);
              }
              tmp8 = status === SubscriptionStatusTypes.CANCELED || status === SubscriptionStatusTypes.PAUSE_PENDING || status === SubscriptionStatusTypes.PAST_DUE;
            }
          }
          const intl = tmp13(1236).intl;
          const obj2 = { mobilePlatform: null };
          obj2[0] = str2;
          return intl.formatToPlainString(tmp13(1236).t.CnoyAN, obj2);
        } else {
          return null;
        }
        obj7 = set;
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