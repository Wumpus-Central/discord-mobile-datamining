// discord_app/actions/native/BillingActionCreators.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants2 from "../../../discord_common/js/shared/Constants.tsx";
import intl4 from "../../intl/index.native.tsx";
import _modDef1251 from "../../../_runtime/metro/01251__.js";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import BillingUtils from "../../utils/BillingUtils.tsx";
import BillingError from "../../errors/BillingError.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import V6OrEarlierAPIError from "../../errors/index.tsx";
import actions_BillingActionCreators from "../../modules/billing/actions/BillingActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "AlertActionCreators.tsx";
import ProductIds from "../../modules/premium/native/ProductIds.android.tsx";
import BlockedPaymentsCountryExperiment from "../../modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx";
import ACOMExperiments from "../../modules/billing/native/ACOMExperiments.tsx";
import showSpendingLimitReachedAlert from "../../modules/parent_tools/native/showSpendingLimitReachedAlert.tsx";
import IAPUtils from "../../utils/native/IAPUtils.tsx";
import _mod10785 from "../../../_runtime/metro/10785__.js";
import openBlockedPaymentsCountryActionSheetDefault from "../../modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx";
import ErrorUtilsAll from "../../utils/ErrorUtils.tsx";
import purchaseExceptionAlerts from "../../modules/billing/native/apple/purchaseExceptionAlerts.tsx";
import APBRequestOperations from "../../../discord_common/js/shared/shared-constants/APBRequestOperations.tsx";
import ACRequestOperations from "../../../discord_common/js/shared/shared-constants/ACRequestOperations.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../_runtime/00019_react.js";
import GiftPromotionStore from "../../modules/premium/gifting/GiftPromotionStore.tsx";
import PremiumPlanPurchasedStore from "../../modules/premium/native/PremiumPlanPurchasedStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import SubscriptionStore from "../../stores/billing/SubscriptionStore.tsx";
import IAPStore from "../../stores/native/IAPStore.android.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const IAPUtilsDefault = IAPUtils;
let activeGuildSubscriptions, body2, closure_12, giftOptionsForKey, length, original_transaction_date, product_id;

let StoreKitErrors;
let c10;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let tmp5;
let unpackModuleId;
const HTTPUtils = tmp5(1282);
function applyAppleReceipt(arg0) {
  let appStoreRegion;
  let encodedReceipt;
  let entitlementSkuId;
  let giftInfoOptions;
  let isGift;
  let jwsRepresentation;
  let jwsRepresentations;
  let orderId;
  let presentmentAmount;
  let presentmentCurrency;
  let retries;
  let skipDupCheck;
  let source;
  ({ encodedReceipt, entitlementSkuId, giftInfoOptions, isGift, jwsRepresentation, jwsRepresentations, source } = arg0);
  ({ presentmentCurrency, presentmentAmount, appStoreRegion, retries, skipDupCheck, orderId } = arg0);
  if (null != jwsRepresentations) {
    if (null != jwsRepresentation) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Can pass either 'jwsRepresentation' or 'jwsRepresentations'.  Not both");
      throw error;
    }
  }
  if (null != jwsRepresentation) {
    const items = [jwsRepresentation];
    jwsRepresentations = items;
  }
  let first = encodedReceipt;
  if (null != jwsRepresentations) {
    first = jwsRepresentations[0];
  }
  obj = _modDef1251;
  const v3Result = obj.v3(first);
  require = v3Result;
  let Storage = Storage2.Storage;
  if (!skipDupCheck) {
    let resolved;
    if (Storage.get(localAppleReceiptHash) === v3Result) {
      resolved = Promise.resolve(null);
    }
    return resolved;
  }
  let tmp8 = true !== isGift;
  if (!tmp8) {
    let tmp9 = null != giftInfoOptions;
    if (tmp9) {
      let gift_style;
      if (giftInfoOptions != null) {
        gift_style = giftInfoOptions.gift_style;
      }
      tmp9 = null != gift_style;
    }
    tmp8 = tmp9;
  }
  if (!tmp8) {
    obj2 = { source, sku_id: entitlementSkuId };
    const tmp2Result = AnalyticsUtilsDefault;
    tmp2Result.track(constants.GIFT_INFO_OPTIONS_MISSING, obj2);
  }
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: constants2.BILLING_APPLY_APPLE_RECEIPT,
    body: {
      encoded_receipt: encodedReceipt,
      entitlement_sku_id: entitlementSkuId,
      presentment_currency: presentmentCurrency,
      presentment_amount: presentmentAmount,
      app_store_region: appStoreRegion,
      gift_info_options: giftInfoOptions,
      is_gift: isGift,
      source,
      jws_representations: jwsRepresentations,
      order_id: orderId,
    },
    retries,
    oldFormErrors: true,
    rejectWithError: true,
  };
  const postResult = HTTP.post(request);
  const nextPromise = postResult.then((result) => {
    const Storage = Storage2.Storage;
    result = Storage.set(localAppleReceiptHash, require);
    return result;
  });
  resolved = nextPromise.catch((error) => {
    let obj3;
    obj2 = { tags: obj3 };
    obj3 = { source };
    obj = BillingUtils;
    const result = obj.captureBillingException(error, obj2);
    throw error;
  });
}
let obj = function _getTrialOfferSignature() {
  obj = _asyncToGenerator(async (product_id, product_offer_id, app_account_token) => {
    let closure_3;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj5;
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: constants.BILLING_GENERATE_APPLE_TRIAL_OFFER_SIGNATURE,
        body: obj5,
        rejectWithError: false,
      };
      obj5 = { product_id, product_offer_id, app_account_token };
      await HTTP.post(request);
      product_id = closure_5;
      const obj3 = closure_132_0(closure_132_3[16]);
      const result = obj3.captureBillingException(product_id);
      await "IconComponent";
      return value.body;
    })();
  });
  return obj(...arguments);
};
function preCompletionFailureReason(code) {
  return set.has(code.code) ? obj2.USER_CANCELLED : obj2.PURCHASE_INCOMPLETE;
}
function handlePurchaseException(code, purchase_type) {
  let intl2;
  let message1;
  let name;
  let obj7;
  let stack;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (!set.has(code.code)) {
    const isSpendingLimitError = showSpendingLimitReachedAlert.isSpendingLimitError;
    let billingError = code;
    showSpendingLimitReachedAlert;
    if (!(code instanceof V6OrEarlierAPIError.BillingError)) {
      const self = this;
      const self2 = this;
      billingError = new V6OrEarlierAPIError.BillingError(code);
    }
    if (isSpendingLimitError(billingError)) {
      const tmpResult = showSpendingLimitReachedAlert;
      const result = tmpResult.showSpendingLimitReachedAlert();
    } else {
      const message = code.message;
      const _JSON = JSON;
      obj = { name, message: message1, stack };
      const merged = Object.assign(code);
      name = undefined;
      if (code != null) {
        name = code.name;
      }
      message1 = undefined;
      if (code != null) {
        message1 = code.message;
      }
      stack = undefined;
      if (code != null) {
        stack = code.stack;
      }
      const json = stringify(obj);
      obj2 = ErrorUtilsAll;
      const underlyingIOSError = obj2.getUnderlyingIOSError(code);
      const tmpResult3 = purchaseExceptionAlerts;
      const purchaseExceptionAlert = tmpResult3.getPurchaseExceptionAlert(code.message);
      if (null == purchaseExceptionAlert) {
        if (null != underlyingIOSError) {
          const obj3 = { title: intl2.string(intl4.t.POsVOt), body: underlyingIOSError };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl2 = intl4.intl;
          show(obj3);
          throw code;
        }
      }
      let title;
      if (purchaseExceptionAlert != null) {
        title = purchaseExceptionAlert.title;
      }
      if (title == null) {
        const intl = intl4.intl;
        title = intl.string(intl4.t.zrhHH3);
      }
      let body1;
      if (purchaseExceptionAlert != null) {
        body1 = purchaseExceptionAlert.body;
      }
      if (body1 == null) {
        const intl3 = intl4.intl;
        const stringResult = intl3.string(intl4.t.PjfUXe);
        let tmp21 = "HTTPResponseError" === code.name;
        if (!tmp21) {
          tmp21 = "status" in code && "method" in code;
          const tmp20 = "status" in code && "method" in code;
        }
        let tmp22 = stringResult;
        if (!tmp21) {
          tmp22 = code.message || stringResult;
        }
        let message2 = tmp22;
        if (null != code.body) {
          const body = code.body;
          message2 = tmp22;
          if (null != body.apple_error_code) {
            const _HermesInternal = HermesInternal;
            message2 = "" + stringResult + " (code: " + body.apple_error_code + ")";
          }
        }
        let billingError1 = code;
        if (!(code instanceof V6OrEarlierAPIError.BillingError)) {
          const self3 = this;
          const self4 = this;
          billingError1 = new V6OrEarlierAPIError.BillingError(code);
        }
        const tmp27 =
          message2 === stringResult &&
          flag &&
          billingError1.code !== BillingError.ErrorCodes.UNKNOWN &&
          -1 !== billingError1.code &&
          null != billingError1.message;
        if (tmp27) {
          message2 = billingError1.message;
        }
        body1 = message2;
      }
      const obj5 = { title, body: body1, isDismissable: true, hideActionSheet: flag };
      const obj4 = actions_AlertActionCreatorsDefault;
      obj4.show(obj5);
      if (!set1.has(code.code)) {
        const obj6 = { tags: obj7 };
        obj7 = { source: BILLING, purchase_type };
        const tmpResult4 = BillingUtils;
        const result1 = tmpResult4.captureBillingException(code, obj6);
      }
      if (flag) {
        throw code;
      }
    }
  }
}
function canMakeIAPRequest() {
  let tmp2 = !IAPStore.isBusy();
  IAPStore.isBusy();
  if (tmp2) {
    obj = BlockedPaymentsCountryExperiment;
    const isPaymentsBlocked = obj.getIsPaymentsBlocked();
    let flag = !isPaymentsBlocked;
    if (isPaymentsBlocked) {
      openBlockedPaymentsCountryActionSheetDefault();
      flag = false;
    }
    tmp2 = flag;
  }
  return tmp2;
}
function clearAndMakeIAPRequest(arg0, arg1, arg2, arg3) {
  return obj(...arguments);
}
obj = function _clearAndMakeIAPRequest() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let obj3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_5 = tmp4;
            closure_4 = tmp;
            c6 = 1;
            c7 = 1;
            const obj5 = { value: obj3.clearTransactionIOS(), done: false };
            obj3 = _mod10785;
            return obj5;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c7 = 3;
          obj = { value: closure_133_32(closure_0, closure_1, closure_2, closure_3), done: true };
          return obj;
        }
      } catch (tmp18) {
        c7 = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
function makeTrackedIAPRequest(arg0, arg1, arg2, arg3) {
  return obj(...arguments);
}
obj = function _makeTrackedIAPRequest() {
  obj = _asyncToGenerator(async (request_identifier, success, arg2, value) => {
    let closure_8;
    let closure_2 = arg2;
    let c10 = 0;
    let c11 = 0;
    let c9 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj12;
      if (c11 === 2) {
        c11 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let transaction_id;
          let transactionDate;
          let str6;
          c11 = 2;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              return { value, done: true };
            } else {
              closure_7 = tmp;
              value = undefined;
              transaction_id = undefined;
              transactionDate = undefined;
              length = undefined;
              str6 = undefined;
              success = false;
              obj = null;
              c9 = 2;
              c10 = 3;
              c11 = 1;
              const obj4 = { value: obj12.makeIAPRequest(closure_1, closure_2, value), done: false };
              obj12 = IAPUtils;
              return obj4;
            }
          } else if (1 === c10) {
            c9 = 0;
            const obj5 = { request_identifier, success };
            const track3 = closure_135_1(closure_135_3[14]).track;
            const APPLE_PARTNER_IAP_REQUEST_SENT3 = closure_135_16.APPLE_PARTNER_IAP_REQUEST_SENT;
            closure_135_1(closure_135_3[14]);
            const merged = Object.assign(obj);
            track3(APPLE_PARTNER_IAP_REQUEST_SENT3, obj5);
            throw tmp75;
          } else if (2 === c10) {
            c9 = 1;
            const obj6 = closure_135_2(closure_135_3[36]);
            length = obj6.getUnderlyingIOSError(tmp75);
            if (null != length) {
              if (length.length > 0) {
                str6 = length;
              }
              let str1;
              if (tmp75.code != null) {
                str1 = str2.toString();
              }
              obj = { error_code: str1, error_message: str6 };
              throw tmp75;
            }
            if (tmp75.message != null) {
              str6 = str.toString();
            }
          } else if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 0;
            const obj8 = { request_identifier, success };
            const track2 = closure_135_1(closure_135_3[14]).track;
            const APPLE_PARTNER_IAP_REQUEST_SENT2 = closure_135_16.APPLE_PARTNER_IAP_REQUEST_SENT;
            closure_135_1(closure_135_3[14]);
            const merged1 = Object.assign(obj);
            track2(APPLE_PARTNER_IAP_REQUEST_SENT2, obj8);
            c11 = 3;
            return { value, done: true };
          } else {
            success = true;
            const str4 = value.purchaseResponse.transactionIdentifier;
            transaction_id = str4.toString();
            transactionDate = value.purchaseResponse.transactionDate;
            let str7;
            if (value.purchaseResponse.originalTransactionIdentifier != null) {
              str7 = str5.toString();
            }
            transaction_id = str7;
            obj = {
              original_transaction_id: transaction_id,
              original_transaction_date,
              transaction_id,
              transaction_date: transactionDate,
            };
            const originalTransactionDate = value.purchaseResponse.originalTransactionDate;
            original_transaction_date = originalTransactionDate;
            if (originalTransactionDate == null) {
              original_transaction_date = transactionDate;
            }
            c9 = 0;
            const obj10 = { request_identifier, success };
            const track = closure_135_1(closure_135_3[14]).track;
            const APPLE_PARTNER_IAP_REQUEST_SENT = closure_135_16.APPLE_PARTNER_IAP_REQUEST_SENT;
            closure_135_1(closure_135_3[14]);
            const merged2 = Object.assign(obj);
            track(APPLE_PARTNER_IAP_REQUEST_SENT, obj10);
            c11 = 3;
            return { value, done: true };
          }
        } catch (tmp75) {
          if (0 === c9) {
            c11 = 3;
            throw tmp75;
          } else if (1 === tmp77) {
            c10 = 1;
          } else {
            c10 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function getIAPJWTRequestData(arg0) {
  return obj(...arguments);
}
obj = function _getIAPJWTRequestData() {
  obj = _asyncToGenerator(async (body) => {
    let c2 = 0;
    let c3 = 0;
    return (async (arg0) => {
      let obj4;
      let tmp15 = TrackedHTTPUtilsDefault;
      const request = {
        url: constants.BILLING_CREATE_APPLE_IAP_JWT_TOKEN,
        body,
        oldFormErrors: true,
        trackedActionData: obj4,
        rejectWithError: true,
      };
      obj4 = {
        event: discord_common_AnalyticsUtils.NetworkActionNames.APPLE_JWT_TOKEN_CREATE,
        properties(body) {
          let country_code;
          let gift_info_options;
          let is_gift;
          let items;
          if (operation.operation !== closure_2_0(closure_2_3[41]).APBRequestOperations.CREATE) {
            if (operation.operation !== closure_2_0(closure_2_3[42]).ACRequestOperations.CREATE) {
              if (operation.operation === closure_2_0(closure_2_3[42]).ACRequestOperations.MODIFY) {
                const subscription_items = operation.subscription_items;
                const _JSON2 = JSON;
                const obj3 = { subscription_items_json_string: JSON.stringify(subscription_items) };
                const tmp15 = closure_2_7(operation, closure_2_5);
                const merged = Object.assign(tmp15);
                obj = obj3;
              } else {
                if (operation.operation !== closure_2_0(closure_2_3[41]).APBRequestOperations.CHARGE) {
                  if (operation.operation !== closure_2_0(closure_2_3[42]).ACRequestOperations.CHARGE) {
                    obj = {};
                    const merged1 = Object.assign(operation);
                  }
                }
                ({ is_gift, gift_info_options } = operation);
                const obj4 = { sku_id: null, request_country_code: null };
                ({ sku_id: obj2.sku_id, country_code: obj2.request_country_code } = operation);
                const merged2 = Object.assign(closure_2_7(operation, closure_2_6));
                if (null != gift_info_options) {
                  const _JSON = JSON;
                  obj4.gift_info_options = JSON.stringify(gift_info_options);
                }
                obj = obj4;
                if (is_gift) {
                  obj4.is_gift = is_gift;
                  obj = obj4;
                }
              }
            }
            let str;
            const exact = closure_2_0(closure_2_3[43]).exact;
            closure_2_0(closure_2_3[43]);
            if (body != null) {
              body = body.body;
              if (body != null) {
                str = body.request_data;
              }
            }
            if (str == null) {
              str = "";
            }
            const obj5 = { jwt_token_exists: str.length > 0 };
            const merged3 = Object.assign(obj);
            return exact(obj5);
          }
          ({ items, country_code } = operation);
          const obj9 = { subscription_items_json_string: JSON.stringify(items), request_country_code: country_code };
          const tmp19 = closure_2_7(operation, closure_2_4);
          const merged4 = Object.assign(tmp19);
          obj = obj9;
        },
      };
      const post = tmp15.post;
      await post(request);
      body2 = value;
      obj = { requestJSONString: JSON.stringify(body2.body.request_data) };
      let _JSON = JSON;
      return obj;
    })();
  });
  return obj(...arguments);
};
function updateAppleSubscription(arg0) {
  return obj(...arguments);
}
obj = function _updateAppleSubscription() {
  obj = _asyncToGenerator(async (body) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let obj4;
      if (c1 === 2) {
        c1 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              const request = {
                url: constants2.BILLING_APPLE_SUBSCRIPTION(body.subscription_id),
                body,
                oldFormErrors: true,
                trackedActionData: obj4,
                rejectWithError: false,
              };
              const patch = TrackedHTTPUtilsDefault.patch;
              TrackedHTTPUtilsDefault;
              c2 = 1;
              c1 = 1;
              obj4 = {
                event: discord_common_AnalyticsUtils.NetworkActionNames.APPLE_JWT_TOKEN_CREATE,
                properties(body) {
                  obj = {};
                  const merged = Object.assign(closure_0);
                  let str;
                  const exact = closure_2_0(closure_2_3[43]).exact;
                  closure_2_0(closure_2_3[43]);
                  if (body != null) {
                    body = body.body;
                    if (body != null) {
                      str = body.request_data;
                    }
                  }
                  if (str == null) {
                    str = "";
                  }
                  obj2 = { jwt_token_exists: str.length > 0 };
                  const merged1 = Object.assign(obj);
                  return exact(obj2);
                },
              };
              const obj5 = { value: patch(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          c1 = 3;
          throw tmp4;
        }
      }
    })();
  });
  return obj(...arguments);
};
function determineProductId(CANCEL) {
  if (APBRequestOperations.APBRequestOperations.CREATE !== CANCEL) {
    if (APBRequestOperations.APBRequestOperations.CANCEL !== CANCEL) {
      if (APBRequestOperations.APBRequestOperations.RESUBSCRIBE !== CANCEL) {
        if (APBRequestOperations.APBRequestOperations.REACTIVATE !== CANCEL) {
          if (APBRequestOperations.APBRequestOperations.CHARGE === CANCEL) {
            return ProductIds.ProductIds.GENERIC_CONSUMABLE;
          } else {
            if (ACRequestOperations.ACRequestOperations.CREATE !== CANCEL) {
              if (ACRequestOperations.ACRequestOperations.CANCEL !== CANCEL) {
                if (ACRequestOperations.ACRequestOperations.REACTIVATE !== CANCEL) {
                  if (ACRequestOperations.ACRequestOperations.MODIFY !== CANCEL) {
                    if (ACRequestOperations.ACRequestOperations.CHARGE === CANCEL) {
                      return ProductIds.ProductIds.GENERIC_CONSUMABLE;
                    } else {
                      const _Error = Error;
                      const self = this;
                      const self2 = this;
                      const error = new Error("Invalid operation");
                      throw error;
                    }
                  }
                }
              }
            }
            return ProductIds.ProductIds.GENERIC_SUBSCRIPTION;
          }
        }
      }
    }
  }
  return ProductIds.ProductIds.GENERIC_SUBSCRIPTION;
}
obj = function _cancelGenericSubscription() {
  obj = _asyncToGenerator(async (request_identifier, subscription_id, arg2) => {
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj9;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let CANCEL;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              CANCEL = undefined;
              productIdentifier = undefined;
              if (canMakeIAPRequest()) {
                if (closure_2) {
                  CANCEL = ACRequestOperations.ACRequestOperations.CANCEL;
                } else {
                  CANCEL = APBRequestOperations.APBRequestOperations.CANCEL;
                }
                const tmp32 = determineProductId(CANCEL);
                productIdentifier = tmp32;
                c7 = 1;
                c8 = 1;
                const obj5 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: tmp32 };
                const obj6 = { value: obj9.dispatch(obj5), done: false };
                obj9 = DispatcherDefault;
                return obj6;
              } else {
                c8 = 3;
                return { value: false, done: true };
              }
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              c6 = 1;
              c7 = 3;
              c8 = 1;
              const obj8 = { operation: CANCEL, request_identifier, subscription_id };
              const obj10 = { value: closure_132_36(obj8), done: false };
              return obj10;
            }
          } else if (2 === c7) {
            c6 = 0;
            const obj11 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier };
            const obj4 = closure_132_1(closure_132_3[22]);
            obj4.dispatch(obj11);
            let str = "partner_subscription";
            const tmp20 = closure_5;
            if (closure_2) {
              str = "advanced_commerce";
            }
            closure_132_28(tmp20, str);
            c8 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            const obj13 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier };
            obj = closure_132_1(closure_132_3[22]);
            obj.dispatch(obj13);
            c6 = 0;
            c8 = 3;
            return { value: true, done: true };
          }
        } catch (tmp35) {
          closure_5 = tmp35;
          if (0 === c6) {
            c8 = 3;
            throw tmp35;
          } else {
            c7 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function isValidCurrency(arg0) {
  const values = Object.values(closure_17);
  return values.includes(arg0);
}
obj = function _createGenericSubscription() {
  obj = _asyncToGenerator(async (request_identifier) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let obj24;
    let obj6;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (request_identifier === 1) {
        throw value;
      } else if (request_identifier === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let orderId;
      try {
        let productIdentifier;
        let obj13;
        let requestJSONString;
        let closure_9;
        let purchaseResponse;
        let originalPurchase;
        c6 = 2;
        if (0 === c5) {
          if (request_identifier === 1) {
            c6 = 3;
            throw value;
          } else if (request_identifier === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            request_identifier = undefined;
            c1 = undefined;
            orderId = undefined;
            ({ requestIdentifier: c0, items: c1, currency: c2, countryCode: c3, orderId: c4 } = closure_0);
            productIdentifier = undefined;
            obj13 = undefined;
            requestJSONString = undefined;
            closure_9 = undefined;
            purchaseResponse = undefined;
            originalPurchase = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (request_identifier === 1) {
            c6 = 3;
            throw value;
          } else if (request_identifier === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (closure_130_29()) {
            if (closure_130_40(tmp)) {
              productIdentifier = closure_130_38(closure_130_0(closure_130_3[42]).ACRequestOperations.CREATE);
              const obj5 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier };
              c5 = 2;
              c6 = 1;
              const obj7 = { value: obj24.dispatch(obj5), done: false };
              obj24 = closure_130_1(closure_130_3[22]);
              return obj7;
            } else {
              const obj8 = { success: false, failureReason: closure_130_41.INVALID_CURRENCY };
              c6 = 3;
              const obj9 = { value: obj8, done: true };
              return obj9;
            }
          } else {
            const obj10 = { success: false, failureReason: closure_130_41.CANNOT_MAKE_REQUEST };
            c6 = 3;
            const obj11 = { value: obj10, done: true };
            return obj11;
          }
        } else if (2 === c5) {
          if (request_identifier === 1) {
            c6 = 3;
            throw value;
          } else if (request_identifier === 2) {
            c6 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            orderId = 1;
            obj13 = {
              request_identifier,
              items: c1.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity })),
              currency: tmp,
              country_code: tmp57,
              order_id: orderId,
            };
            const obj15 = { operation: closure_130_0(closure_130_3[42]).ACRequestOperations.CREATE };
            const merged = Object.assign(obj13);
            c5 = 4;
            c6 = 1;
            const obj16 = { value: closure_130_34(obj15), done: false };
            return obj16;
          }
        } else if (3 === c5) {
          let PURCHASE_INCOMPLETE;
          orderId = 0;
          closure_12 = closure_3;
          const obj17 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier };
          const obj14 = closure_130_1(closure_130_3[22]);
          obj14.dispatch(obj17);
          let tmp34 = null == orderId;
          const tmp32 = closure_12;
          if (!tmp34) {
            tmp34 = c6;
          }
          closure_130_28(tmp32, "advanced_commerce", tmp34);
          if (c6) {
            PURCHASE_INCOMPLETE = closure_130_41.POST_PURCHASE_FAILED;
          } else {
            PURCHASE_INCOMPLETE = closure_130_41.PURCHASE_INCOMPLETE;
          }
          const obj18 = { success: false, failureReason: PURCHASE_INCOMPLETE };
          c6 = 3;
          const obj19 = { value: obj18, done: true };
          return obj19;
        } else if (4 === c5) {
          if (request_identifier === 1) {
            c6 = 3;
            throw value;
          } else if (request_identifier === 2) {
            orderId = 0;
            c6 = 3;
            const obj20 = { value, done: true };
            return obj20;
          } else {
            requestJSONString = value.requestJSONString;
            c5 = 5;
            c6 = 1;
            const obj21 = {
              value: closure_130_30(request_identifier, requestJSONString, productIdentifier, true),
              done: false,
            };
            return obj21;
          }
        } else if (5 === c5) {
          if (request_identifier === 1) {
            c6 = 3;
            throw value;
          } else if (request_identifier === 2) {
            orderId = 0;
            c6 = 3;
            const obj22 = { value, done: true };
            return obj22;
          } else {
            closure_9 = value;
            purchaseResponse = closure_9.purchaseResponse;
            originalPurchase = closure_9.originalPurchase;
            const obj23 = {
              encodedReceipt: purchaseResponse.transactionReceipt,
              retries: 3,
              presentmentCurrency: tmp,
              appStoreRegion: tmp57,
              jwsRepresentation: purchaseResponse.jwsRepresentation,
              source: "createGenericSubscription",
              orderId,
            };
            c5 = 6;
            c6 = 1;
            const obj25 = { value: closure_130_23(obj23), done: false };
            return obj25;
          }
        } else if (6 === c5) {
          if (request_identifier === 1) {
            c6 = 3;
            throw value;
          } else if (request_identifier === 2) {
            orderId = 0;
            c6 = 3;
            const obj26 = { value, done: true };
            return obj26;
          } else {
            const obj27 = { purchase: originalPurchase };
            c5 = 7;
            c6 = 1;
            const obj28 = { value: obj6.finishTransaction(obj27), done: false };
            obj6 = closure_130_0(closure_130_3[21]);
            return obj28;
          }
        } else if (request_identifier === 1) {
          c6 = 3;
          throw value;
        } else if (request_identifier === 2) {
          orderId = 0;
          c6 = 3;
          const obj29 = { value, done: true };
          return obj29;
        } else {
          obj = closure_130_1(closure_130_3[22]);
          const obj30 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier };
          obj.dispatch(obj30);
          const obj31 = { success: true, failureReason: closure_130_41.NONE };
          orderId = 0;
          c6 = 3;
          const obj32 = { value: obj31, done: true };
          return obj32;
        }
      } catch (tmp57) {
        closure_3 = tmp57;
        if (0 === orderId) {
          c6 = 3;
          throw tmp57;
        } else {
          c5 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _modifyGenericSubscription() {
  obj = _asyncToGenerator(async (request_identifier) => {
    let intl;
    let intl2;
    let obj19;
    let obj22;
    let obj30;
    let obj33;
    let value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (request_identifier === 1) {
        throw value;
      } else if (request_identifier === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let v0;
      try {
        let subscription_id;
        let GENERIC_SUBSCRIPTION;
        let closure_8;
        let purchaseResponse;
        let originalPurchase;
        c6 = 2;
        switch (c5) {
          case 0: {
            let c0;
            let c1;
            let c2;
            let c3;
            let c4;
            if (request_identifier === 1) {
              c6 = 3;
              throw value;
            } else if (request_identifier === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_2 = tmp;
              let closure_1 = tmp4;
              request_identifier = undefined;
              subscription_id = undefined;
              v0 = undefined;
              ({
                requestIdentifier: c0,
                subscriptionId: c1,
                items: c2,
                orderId: c3,
                onPurchaseComplete: c4,
              } = closure_0);
              GENERIC_SUBSCRIPTION = undefined;
              let requestJSONString;
              closure_8 = undefined;
              value = undefined;
              purchaseResponse = undefined;
              originalPurchase = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Set", done: true };
            }
            break;
          }
          case 1: {
            if (request_identifier === 1) {
              c6 = 3;
              throw value;
            } else if (request_identifier === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else if (closure_130_29()) {
              GENERIC_SUBSCRIPTION = closure_130_0(closure_130_3[24]).ProductIds.GENERIC_SUBSCRIPTION;
              const obj7 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: GENERIC_SUBSCRIPTION };
              c5 = 2;
              c6 = 1;
              const obj8 = { value: obj33.dispatch(obj7), done: false };
              obj33 = closure_130_1(closure_130_3[22]);
              return obj8;
            } else {
              const obj9 = { success: false, failureReason: closure_130_41.CANNOT_MAKE_REQUEST };
              c6 = 3;
              const obj11 = { value: obj9, done: true };
              return obj11;
            }
            break;
          }
          case 2: {
            if (request_identifier === 1) {
              c6 = 3;
              throw value;
            } else if (request_identifier === 2) {
              c6 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              v0 = 1;
              const obj14 = {
                operation: closure_130_0(closure_130_3[42]).ACRequestOperations.MODIFY,
                request_identifier,
                subscription_id,
                subscription_items: tmp.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity })),
                order_id: tmp96,
              };
              c5 = 4;
              c6 = 1;
              const obj15 = { value: closure_130_34(obj14), done: false };
              return obj15;
            }
            break;
          }
          case 3: {
            let PURCHASE_INCOMPLETE;
            v0 = 0;
            let closure_13 = closure_3;
            const obj16 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: GENERIC_SUBSCRIPTION };
            const obj25 = closure_130_1(closure_130_3[22]);
            obj25.dispatch(obj16);
            let tmp73 = null == tmp96;
            const tmp71 = closure_13;
            if (!tmp73) {
              tmp73 = c6;
            }
            closure_130_28(tmp71, "advanced_commerce", tmp73);
            if (c6) {
              PURCHASE_INCOMPLETE = closure_130_41.POST_PURCHASE_FAILED;
            } else {
              PURCHASE_INCOMPLETE = closure_130_41.PURCHASE_INCOMPLETE;
            }
            const obj17 = { success: false, failureReason: PURCHASE_INCOMPLETE };
            c6 = 3;
            const obj18 = { value: obj17, done: true };
            return obj18;
          }
          case 4: {
            if (request_identifier === 1) {
              c6 = 3;
              throw value;
            } else if (request_identifier === 2) {
              v0 = 0;
              c6 = 3;
              const obj20 = { value, done: true };
              return obj20;
            } else {
              let requestJSONString = value.requestJSONString;
              c5 = 5;
              c6 = 1;
              const obj21 = { value: obj22.clearTransactionIOS(), done: false };
              obj22 = closure_130_0(closure_130_3[21]);
              return obj21;
            }
            break;
          }
          case 5: {
            if (request_identifier === 1) {
              c6 = 3;
              throw value;
            } else if (request_identifier === 2) {
              v0 = 0;
              c6 = 3;
              const obj23 = { value, done: true };
              return obj23;
            } else {
              c5 = 6;
              c6 = 1;
              const obj24 = {
                value: obj19.retryACOMRequest(() => closure_2_32(request_identifier, closure_1_7, closure_1_5, true)),
                done: false,
              };
              obj19 = closure_130_0(closure_130_3[44]);
              return obj24;
            }
            break;
          }
          case 6: {
            if (request_identifier === 1) {
              c6 = 3;
              throw value;
            } else if (request_identifier === 2) {
              v0 = 0;
              c6 = 3;
              const obj26 = { value, done: true };
              return obj26;
            } else {
              closure_8 = value;
              if ("already_applied" === closure_8.kind) {
                const obj27 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: GENERIC_SUBSCRIPTION };
                const obj10 = closure_130_1(closure_130_3[22]);
                obj10.dispatch(obj27);
                const obj28 = {
                  title: intl.string(closure_130_0(closure_130_3[27]).t.zrhHH3),
                  body: intl2.string(closure_130_0(closure_130_3[27]).t.PjfUXe),
                  isDismissable: true,
                  hideActionSheet: true,
                };
                const show = closure_130_1(closure_130_3[29]).show;
                const tmp38 = closure_130_1(closure_130_3[29]);
                intl = closure_130_0(closure_130_3[27]).intl;
                intl2 = closure_130_0(closure_130_3[27]).intl;
                show(obj28);
                const obj29 = { tags: obj30 };
                obj30 = { source: closure_130_22, purchase_type: "advanced_commerce_already_applied" };
                const obj13 = closure_130_0(closure_130_3[16]);
                const result = obj13.captureBillingException(closure_8.error, obj29);
                const obj31 = { success: false, failureReason: closure_130_41.POST_PURCHASE_FAILED };
                v0 = 0;
                c6 = 3;
                const obj32 = { value: obj31, done: true };
                return obj32;
              } else {
                value = closure_8.value;
                purchaseResponse = value.purchaseResponse;
                originalPurchase = value.originalPurchase;
                c6 = true;
                v0 = 2;
                let tmp29;
                if (v0 != null) {
                  tmp29 = v0();
                }
                c5 = 9;
                c6 = 1;
                const obj34 = { value: tmp29, done: false };
                return obj34;
              }
            }
            break;
          }
          case 7: {
            v0 = 1;
            closure_12 = closure_3;
            const obj6 = closure_130_0(closure_130_3[16]);
            const result1 = obj6.captureBillingException(closure_12);
            const obj35 = {
              encodedReceipt: purchaseResponse.transactionReceipt,
              retries: 3,
              jwsRepresentation: purchaseResponse.jwsRepresentation,
              source: "modifyGenericSubscription",
              orderId: tmp96,
            };
            c5 = 8;
            c6 = 1;
            const obj36 = { value: closure_130_23(obj35), done: false };
            return obj36;
          }
          case 8: {
            if (request_identifier === 1) {
              c6 = 3;
              throw value;
            } else if (request_identifier === 2) {
              v0 = 0;
              c6 = 3;
              const obj37 = { value, done: true };
              return obj37;
            } else {
              const obj39 = { purchase: originalPurchase };
              c5 = 10;
              c6 = 1;
              const obj40 = { value: obj2.finishTransaction(obj39), done: false };
              obj2 = closure_130_0(closure_130_3[21]);
              return obj40;
            }
            break;
          }
          case 9: {
            if (request_identifier === 1) {
              c6 = 3;
              throw value;
            } else if (request_identifier === 2) {
              v0 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              v0 = 1;
            }
            break;
          }
          default: {
            if (request_identifier === 1) {
              c6 = 3;
              throw value;
            } else if (request_identifier === 2) {
              v0 = 0;
              c6 = 3;
              const obj41 = { value, done: true };
              return obj41;
            } else {
              const obj42 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: GENERIC_SUBSCRIPTION };
              const obj38 = closure_130_1(closure_130_3[22]);
              obj38.dispatch(obj42);
              const obj43 = { success: true, failureReason: closure_130_41.NONE };
              v0 = 0;
              c6 = 3;
              const obj44 = { value: obj43, done: true };
              return obj44;
            }
            break;
          }
        }
      } catch (tmp96) {
        closure_3 = tmp96;
        if (0 === v0) {
          c6 = 3;
          throw tmp96;
        } else if (1 === tmp98) {
          c5 = 3;
        } else {
          c5 = 7;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _resubscribeGenericSubscription() {
  obj = _asyncToGenerator(async (request_identifier, subscription_id) => {
    let c0;
    let c1;
    let obj22;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (request_identifier === 1) {
        throw value;
      } else if (request_identifier === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      let productIdentifier;
      try {
        let closure_2;
        let obj6;
        let requestJSONString;
        let purchaseResponse;
        let originalPurchase;
        c7 = 2;
        if (0 === c6) {
          if (request_identifier === 1) {
            c7 = 3;
            throw value;
          } else if (request_identifier === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            request_identifier = undefined;
            subscription_id = undefined;
            ({ requestIdentifier: c0, subscriptionId: c1 } = closure_0);
            closure_2 = closure_1;
            obj6 = undefined;
            productIdentifier = undefined;
            requestJSONString = undefined;
            closure_6 = undefined;
            purchaseResponse = undefined;
            originalPurchase = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c6) {
          if (request_identifier === 1) {
            c7 = 3;
            throw value;
          } else if (request_identifier === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (closure_131_29()) {
            let REACTIVATE;
            obj6 = { request_identifier, subscription_id };
            if (closure_2) {
              REACTIVATE = closure_131_0(closure_131_3[42]).ACRequestOperations.REACTIVATE;
            } else {
              REACTIVATE = closure_131_0(closure_131_3[41]).APBRequestOperations.REACTIVATE;
            }
            productIdentifier = closure_131_38(REACTIVATE);
            const obj7 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier };
            c6 = 2;
            c7 = 1;
            const obj8 = { value: obj22.dispatch(obj7), done: false };
            obj22 = closure_131_1(closure_131_3[22]);
            return obj8;
          } else {
            c7 = 3;
            return { value: false, done: true };
          }
        } else if (2 === c6) {
          if (request_identifier === 1) {
            c7 = 3;
            throw value;
          } else if (request_identifier === 2) {
            c7 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c5 = 1;
            if (closure_2) {
              const obj11 = { operation: closure_131_0(closure_131_3[42]).ACRequestOperations.REACTIVATE };
              const merged = Object.assign(obj6);
              c6 = 4;
              c7 = 1;
              const obj12 = { value: closure_131_34(obj11), done: false };
              return obj12;
            } else {
              const obj13 = { operation: closure_131_0(closure_131_3[41]).APBRequestOperations.REACTIVATE };
              const merged1 = Object.assign(obj6);
              c6 = 5;
              c7 = 1;
              const obj15 = { value: closure_131_36(obj13), done: false };
              return obj15;
            }
          }
        } else if (3 === c6) {
          c5 = 0;
          let closure_9 = productIdentifier;
          const obj16 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier };
          const obj14 = closure_131_1(closure_131_3[22]);
          obj14.dispatch(obj16);
          let str = "partner_subscription";
          const tmp38 = closure_9;
          if (closure_2) {
            str = "advanced_commerce";
          }
          closure_131_28(tmp38, str);
          c7 = 3;
          return { value: false, done: true };
        } else if (4 === c6) {
          if (request_identifier === 1) {
            c7 = 3;
            throw value;
          } else if (request_identifier === 2) {
            c5 = 0;
            c7 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            requestJSONString = value.requestJSONString;
            c6 = 6;
            c7 = 1;
            const obj18 = {
              value: closure_131_30(request_identifier, requestJSONString, productIdentifier, true),
              done: false,
            };
            return obj18;
          }
        } else {
          if (5 === c6) {
            if (request_identifier === 1) {
              c7 = 3;
              throw value;
            } else if (request_identifier === 2) {
              c5 = 0;
              c7 = 3;
              const obj19 = { value, done: true };
              return obj19;
            }
          } else if (6 === c6) {
            if (request_identifier === 1) {
              c7 = 3;
              throw value;
            } else if (request_identifier === 2) {
              c5 = 0;
              c7 = 3;
              const obj20 = { value, done: true };
              return obj20;
            } else {
              closure_6 = value;
              purchaseResponse = closure_6.purchaseResponse;
              originalPurchase = closure_6.originalPurchase;
              const obj21 = {
                encodedReceipt: purchaseResponse.transactionReceipt,
                retries: 3,
                jwsRepresentation: purchaseResponse.jwsRepresentation,
                source: "resubscribeGenericSubscription",
              };
              c6 = 7;
              c7 = 1;
              const obj23 = { value: closure_131_23(obj21), done: false };
              return obj23;
            }
          } else if (7 === c6) {
            if (request_identifier === 1) {
              c7 = 3;
              throw value;
            } else if (request_identifier === 2) {
              c5 = 0;
              c7 = 3;
              const obj24 = { value, done: true };
              return obj24;
            } else {
              const obj25 = { purchase: originalPurchase };
              c6 = 8;
              c7 = 1;
              const obj26 = { value: obj2.finishTransaction(obj25), done: false };
              obj2 = closure_131_0(closure_131_3[21]);
              return obj26;
            }
          } else if (request_identifier === 1) {
            c7 = 3;
            throw value;
          } else if (request_identifier === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          }
          const obj27 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier };
          const obj9 = closure_131_1(closure_131_3[22]);
          obj9.dispatch(obj27);
          c5 = 0;
          c7 = 3;
          return { value: true, done: true };
        }
      } catch (tmp68) {
        productIdentifier = tmp68;
        if (0 === c5) {
          c7 = 3;
          throw tmp68;
        } else {
          c6 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _retryPendingPurchases() {
  obj = _asyncToGenerator(async (presentmentCurrency, appStoreRegion) => {
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function (arg0, value) {
      let obj14;
      let obj9;
      let str1;
      let str2;
      let str3;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        while (true) {
          let productIdentifier;
          let transaction_id;
          let closure_8;
          c9 = 2;
          let tmp4 = c8;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              closure_2 = undefined;
              closure_3 = undefined;
              purchaseResponse = undefined;
              productIdentifier = undefined;
              transaction_id = undefined;
              closure_8 = undefined;
              let obj21 = IAPUtilsDefault;
              c8 = 1;
              c9 = 1;
              let obj4 = { value: obj21.restorePurchases({ fullRestore: false }), done: false };
              return obj4;
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                let obj5 = { value, done: true };
                return obj5;
              } else {
                closure_2 = value;
                closure_3 = [];
                if (0 === closure_2.length) {
                  c9 = 3;
                  return { value: true, done: true };
                } else {
                  closure_3 = closure_2;
                  closure_2 = closure_2[Symbol.iterator]();
                }
              }
            } else if (2 === tmp4) {
              c7 = 0;
              closure_2.return();
              throw closure_1_6;
            } else {
              if (3 === tmp4) {
                c7 = 1;
                let closure_9 = closure_1_6;
                let tmp21 = closure_133_1(closure_133_3[14]);
                let obj6 = {
                  product_id: productIdentifier,
                  transaction_id,
                  error_code: str1,
                  error_message: closure_9.message,
                };
                let str = closure_9.code;
                str1 = undefined;
                let track = tmp21.track;
                let APPLE_RETRY_PENDING_PURCHASE_FAILED = closure_133_16.APPLE_RETRY_PENDING_PURCHASE_FAILED;
                if (str != null) {
                  str1 = str.toString();
                }
                let trackResult = track(APPLE_RETRY_PENDING_PURCHASE_FAILED, obj6);
                let arr = closure_3.push(closure_9);
              } else if (4 === tmp4) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 0;
                  closure_2.return();
                  c9 = 3;
                  let obj7 = { value, done: true };
                  return obj7;
                } else {
                  let obj15 = closure_133_0(closure_133_3[21]);
                  let obj8 = { purchase: obj9 };
                  obj9 = {
                    productId: productIdentifier,
                    transactionId: transaction_id,
                    transactionDate: purchaseResponse.transactionDate,
                    transactionReceipt: purchaseResponse.transactionReceipt,
                  };
                  c8 = 5;
                  c9 = 1;
                  let obj10 = { value: obj15.finishTransaction(obj8), done: false };
                  return obj10;
                }
              } else if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 0;
                closure_2.return();
                c9 = 3;
                let obj11 = { value, done: true };
                return obj11;
              } else {
                obj = closure_133_1(closure_133_3[14]);
                let obj12 = { product_id: productIdentifier, transaction_id };
                let trackResult1 = obj.track(closure_133_16.APPLE_RETRY_PENDING_PURCHASE_SUCCEEDED, obj12);
                c7 = 1;
              }
              c7 = 0;
            }
            if (closure_2 === undefined) {
              if (closure_3.length > 0) {
                let mapped = closure_3.map((message) => message.message);
                let _HermesInternal = HermesInternal;
                closure_8 = "Failed to retry pending purchases: " + mapped.join(", ");
                let tmp46 = closure_133_0(closure_133_3[16]);
                let _Error = Error;
                let self = this;
                let self2 = this;
                let captureBillingException = tmp46.captureBillingException;
                let error = new Error(closure_8);
                let obj13 = { tags: obj14 };
                obj14 = { pendingPurchaseFailures: str2.toString(), totalPendingPurchases: str3.toString() };
                str2 = closure_3.length;
                str3 = closure_2.length;
                let result = captureBillingException(error, obj13);
                c9 = 3;
                return { value: false, done: true };
              } else {
                c9 = 3;
                return { value: true, done: true };
              }
            } else {
              purchaseResponse = tmp38;
              purchaseResponse = purchaseResponse.purchaseResponse;
              productIdentifier = purchaseResponse.productIdentifier;
              let str7 = purchaseResponse.transactionIdentifier;
              transaction_id = str7.toString();
              c7 = 2;
              let obj18 = closure_133_1(closure_133_3[14]);
              let obj16 = { product_id: productIdentifier, transaction_id };
              let trackResult2 = obj18.track(closure_133_16.APPLE_RETRY_PENDING_PURCHASE_STARTED, obj16);
              let obj17 = {
                encodedReceipt: purchaseResponse.transactionReceipt,
                retries: 3,
                presentmentCurrency,
                appStoreRegion,
                jwsRepresentation: purchaseResponse.jwsRepresentation,
                source: "retryPendingPurchases",
              };
              c8 = 4;
              c9 = 1;
              let obj19 = { value: closure_133_23(obj17), done: false };
              return obj19;
            }
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _mobilePurchaseSKU() {
  obj = _asyncToGenerator(async function (request_identifier, sku_id) {
    let c7;
    let obj24;
    let obj32;
    let obj33;
    let obj5;
    function retryPendingPurchases(c2, c3) {
      return closure_1_45(...arguments);
    }
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (request_identifier === 1) {
        throw value;
      } else if (request_identifier === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let giftInfoOptions;
      try {
        let transactionReceipt;
        let purchaseSKU;
        let location_stack;
        let load_id;
        let isFreeForStaffSelfPurchase;
        let orderId;
        let closure_10;
        let productIdentifier;
        let c12;
        let obj25;
        let requestJSONString;
        let closure_15;
        let purchaseResponse;
        let originalPurchase;
        let closure_18;
        let key;
        let billingError;
        let staff;
        let closure_22;
        c9 = 2;
        switch (c8) {
          case 0: {
            let c0;
            let c1;
            let c2;
            let c3;
            let c4;
            let c5;
            let c6;
            if (request_identifier === 1) {
              c9 = 3;
              throw value;
            } else if (request_identifier === 2) {
              c9 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              request_identifier = undefined;
              sku_id = undefined;
              transactionReceipt = undefined;
              purchaseSKU = undefined;
              location_stack = undefined;
              load_id = undefined;
              giftInfoOptions = undefined;
              isFreeForStaffSelfPurchase = undefined;
              orderId = undefined;
              closure_10 = undefined;
              ({
                requestIdentifier: c0,
                skuId: c1,
                currency: c2,
                countryCode: c3,
                analyticsLocations: c4,
                analyticsLoadId: c5,
                isGift: c6,
                giftInfoOptions: c7,
                isFreeForStaffSelfPurchase,
              } = request_identifier);
              if (isFreeForStaffSelfPurchase === undefined) {
                isFreeForStaffSelfPurchase = true;
              }
              orderId = request_identifier.orderId;
              closure_10 = closure_1;
              productIdentifier = undefined;
              c12 = undefined;
              obj25 = undefined;
              requestJSONString = undefined;
              closure_15 = undefined;
              purchaseResponse = undefined;
              originalPurchase = undefined;
              closure_18 = undefined;
              key = undefined;
              billingError = undefined;
              staff = undefined;
              closure_22 = undefined;
              c8 = 1;
              c9 = 1;
              return { value: "Set", done: true };
            }
            break;
          }
          case 1: {
            if (request_identifier === 1) {
              c9 = 3;
              throw value;
            } else if (request_identifier === 2) {
              c9 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (closure_133_29()) {
              if (closure_133_40(transactionReceipt)) {
                productIdentifier = closure_133_38(closure_133_0(closure_133_3[42]).ACRequestOperations.CHARGE);
                const obj7 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier };
                c8 = 2;
                c9 = 1;
                const obj8 = { value: obj32.dispatch(obj7), done: false };
                obj32 = closure_133_1(closure_133_3[22]);
                return obj8;
              } else {
                const obj10 = { success: false, failureReason: closure_133_41.INVALID_CURRENCY };
                c9 = 3;
                const obj11 = { value: obj10, done: true };
                return obj11;
              }
            } else {
              const obj12 = { success: false, failureReason: closure_133_41.CANNOT_MAKE_REQUEST };
              c9 = 3;
              const obj13 = { value: obj12, done: true };
              return obj13;
            }
            break;
          }
          case 2: {
            if (request_identifier === 1) {
              c9 = 3;
              throw value;
            } else if (request_identifier === 2) {
              c9 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              const obj15 = {
                sku_id,
                load_id,
                location_stack,
                payment_gateway: closure_133_19.APPLE_ADVANCED_COMMERCE,
              };
              const obj49 = closure_133_0(closure_133_3[45]);
              const result = obj49.trackPaymentFlowStartedAnalyticsAndCTP(obj15);
              c12 = false;
              giftInfoOptions = 1;
              c8 = 4;
              c9 = 1;
              const obj16 = { value: retryPendingPurchases(transactionReceipt, purchaseSKU), done: false };
              return obj16;
            }
            break;
          }
          case 3: {
            let POST_PURCHASE_FAILED;
            giftInfoOptions = 0;
            let closure_23 = closure_6;
            const obj17 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier };
            const obj19 = closure_133_1(closure_133_3[22]);
            obj19.dispatch(obj17);
            const self = this;
            const self2 = this;
            billingError = new closure_133_0(closure_133_3[35]).BillingError(closure_23);
            staff = closure_133_12.getCurrentUser();
            if (null != staff) {
              if (staff.isStaff()) {
                const tmp75 = isFreeForStaffSelfPurchase;
                if (tmp75) {
                  if (
                    billingError.code === closure_133_0(closure_133_3[38]).ErrorCodes.BILLING_CANNOT_CHARGE_ZERO_AMOUNT
                  ) {
                    purchaseSKU = closure_10;
                    if (closure_10 == null) {
                      purchaseSKU = closure_133_0(closure_133_3[46]).purchaseSKU;
                    }
                    closure_22 = purchaseSKU;
                    giftInfoOptions = 2;
                    const obj18 = {
                      countryCode: purchaseSKU,
                      expectedAmount: 0,
                      expectedCurrency: closure_133_17.USD,
                      loadId: obj24.v4(),
                      isGift: tmp131,
                      giftInfoOptions,
                    };
                    obj24 = closure_133_0(closure_133_3[47]);
                    c8 = 10;
                    c9 = 1;
                    const obj20 = { value: closure_22("collectibles", sku_id, obj18), done: false };
                    return obj20;
                  }
                }
              }
            }
            let tmp85 = null == orderId;
            const tmp83 = closure_23;
            if (!tmp85) {
              tmp85 = c12;
            }
            closure_133_28(tmp83, "collectibles", tmp85);
            const tmp89 = c12;
            if (tmp89) {
              POST_PURCHASE_FAILED = closure_133_41.POST_PURCHASE_FAILED;
            } else {
              POST_PURCHASE_FAILED = closure_133_27(closure_23);
            }
            const obj21 = { success: false, failureReason: POST_PURCHASE_FAILED };
            c9 = 3;
            const obj22 = { value: obj21, done: true };
            return obj22;
          }
          case 4: {
            if (request_identifier === 1) {
              c9 = 3;
              throw value;
            } else if (request_identifier === 2) {
              giftInfoOptions = 0;
              c9 = 3;
              const obj23 = { value, done: true };
              return obj23;
            } else {
              obj25 = {
                sku_id,
                request_identifier,
                currency: transactionReceipt,
                country_code: purchaseSKU,
                is_gift: tmp131,
                gift_info_options: giftInfoOptions,
                order_id: orderId,
              };
              const obj26 = { operation: closure_133_0(closure_133_3[42]).ACRequestOperations.CHARGE };
              const merged = Object.assign(obj25);
              c8 = 5;
              c9 = 1;
              const obj27 = { value: closure_133_34(obj26), done: false };
              return obj27;
            }
            break;
          }
          case 5: {
            if (request_identifier === 1) {
              c9 = 3;
              throw value;
            } else if (request_identifier === 2) {
              giftInfoOptions = 0;
              c9 = 3;
              const obj28 = { value, done: true };
              return obj28;
            } else {
              requestJSONString = value.requestJSONString;
              c8 = 6;
              c9 = 1;
              const obj29 = {
                value: closure_133_30(request_identifier, requestJSONString, productIdentifier, true),
                done: false,
              };
              return obj29;
            }
            break;
          }
          case 6: {
            if (request_identifier === 1) {
              c9 = 3;
              throw value;
            } else if (request_identifier === 2) {
              giftInfoOptions = 0;
              c9 = 3;
              const obj30 = { value, done: true };
              return obj30;
            } else {
              closure_15 = value;
              purchaseResponse = closure_15.purchaseResponse;
              originalPurchase = closure_15.originalPurchase;
              c12 = true;
              const jwsRepresentation = purchaseResponse.jwsRepresentation;
              transactionReceipt = jwsRepresentation;
              if (jwsRepresentation == null) {
                transactionReceipt = purchaseResponse.transactionReceipt;
              }
              closure_18 = transactionReceipt;
              const obj9 = closure_133_1(closure_133_3[12]);
              key = obj9.v3(closure_18);
              const tmp30 = tmp131;
              if (tmp30) {
                const obj31 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key, giftOptions: obj33 };
                obj33 = {};
                const dispatch = closure_133_1(closure_133_3[22]).dispatch;
                const tmp35 = closure_133_1(closure_133_3[22]);
                const merged1 = Object.assign(giftInfoOptions);
                dispatch(obj31);
              }
              const obj34 = {
                encodedReceipt: purchaseResponse.transactionReceipt,
                retries: 3,
                presentmentCurrency: transactionReceipt,
                appStoreRegion: purchaseSKU,
                giftInfoOptions,
                isGift: tmp131,
                jwsRepresentation: purchaseResponse.jwsRepresentation,
                source: "mobilePurchaseSKU",
                orderId,
              };
              c8 = 7;
              c9 = 1;
              const obj35 = { value: closure_133_23(obj34), done: false };
              return obj35;
            }
            break;
          }
          case 7: {
            if (request_identifier === 1) {
              c9 = 3;
              throw value;
            } else if (request_identifier === 2) {
              giftInfoOptions = 0;
              c9 = 3;
              const obj36 = { value, done: true };
              return obj36;
            } else {
              const tmp161 = tmp131;
              if (tmp161) {
                const obj37 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key };
                const obj3 = closure_133_1(closure_133_3[22]);
                obj3.dispatch(obj37);
              }
              const obj38 = { purchase: originalPurchase };
              c8 = 8;
              c9 = 1;
              const obj39 = { value: obj5.finishTransaction(obj38), done: false };
              obj5 = closure_133_0(closure_133_3[21]);
              return obj39;
            }
            break;
          }
          case 8: {
            if (request_identifier === 1) {
              c9 = 3;
              throw value;
            } else if (request_identifier === 2) {
              giftInfoOptions = 0;
              c9 = 3;
              const obj40 = { value, done: true };
              return obj40;
            } else {
              const obj43 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier };
              const obj42 = closure_133_1(closure_133_3[22]);
              obj42.dispatch(obj43);
              const obj45 = {
                sku_id,
                load_id,
                location_stack,
                payment_gateway: closure_133_19.APPLE_ADVANCED_COMMERCE,
                is_gift: tmp131,
              };
              const obj44 = closure_133_1(closure_133_3[14]);
              obj44.track(closure_133_16.PAYMENT_FLOW_COMPLETED, obj45);
              const obj46 = { success: true, failureReason: closure_133_41.NONE };
              giftInfoOptions = 0;
              c9 = 3;
              obj = { value: obj46, done: true };
              return obj;
            }
            break;
          }
          case 9: {
            giftInfoOptions = 0;
            const code = closure_6;
            if (code.code === closure_133_0(closure_133_3[38]).ErrorCodes.BILLING_PURCHASE_REQUEST_INVALID) {
              const obj41 = closure_133_0(closure_133_3[16]);
              const result1 = obj41.captureBillingException(code, {});
            }
            break;
          }
          default: {
            if (request_identifier === 1) {
              c9 = 3;
              throw value;
            } else if (request_identifier === 2) {
              giftInfoOptions = 0;
              c9 = 3;
              const obj47 = { value, done: true };
              return obj47;
            } else {
              const obj48 = { success: true, failureReason: closure_133_41.NONE };
              giftInfoOptions = 0;
              c9 = 3;
              const obj50 = { value: obj48, done: true };
              return obj50;
            }
            break;
          }
        }
      } catch (tmp131) {
        closure_6 = tmp131;
        if (0 === giftInfoOptions) {
          c9 = 3;
          throw tmp131;
        } else if (1 === tmp133) {
          c8 = 3;
        } else {
          c8 = 9;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _migrateToACOM() {
  let currentUser;
  obj = _asyncToGenerator(async () => {
    let obj5;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null == currentUser.getCurrentUser()) {
            c2 = 3;
            return { value: false, done: true };
          } else if (canMakeIAPRequest()) {
            obj2 = activeGuildSubscriptions;
            activeGuildSubscriptions = activeGuildSubscriptions.getActiveGuildSubscriptions();
            let closure_0 = activeGuildSubscriptions;
            if (activeGuildSubscriptions == null) {
              closure_0 = [];
            }
            const found = closure_0.filter(
              (paymentGateway) => paymentGateway.paymentGateway === constants2.APPLE_PARTNER,
            );
            const _Object = Object;
            const subscriptions = obj2.getSubscriptions();
            let closure_1 = subscriptions;
            if (subscriptions == null) {
              closure_1 = [];
            }
            const values2 = values(closure_1);
            const found1 = values2.filter(
              (paymentGateway) =>
                paymentGateway.paymentGateway === constants2.APPLE && paymentGateway.type === constants.PREMIUM,
            );
            const NitroACOMSubscriptionExperiment = ACOMExperiments.NitroACOMSubscriptionExperiment;
            const enabled =
              found1.length > 0 && NitroACOMSubscriptionExperiment.getConfig({ location: "migrateToACOM" }).enabled;
            if (0 === found.length) {
              if (false === enabled) {
                c2 = 3;
                return { value: false, done: true };
              }
            }
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.BILLING_ACOM_SUBSCRIPTION_MIGRATION, rejectWithError: true, body: obj5 };
            obj5 = { migrate_premium: enabled };
            c3 = 2;
            c2 = 1;
            const obj6 = { value: HTTP.post(request), done: false };
            return obj6;
          } else {
            c2 = 3;
            return { value: false, done: true };
          }
        } else if (1 === tmp3) {
          c4 = 0;
          c2 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          c2 = 3;
          return { value: true, done: true };
        }
      } catch (tmp11) {
        if (0 === c4) {
          c2 = 3;
          throw tmp11;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_4 = ["items", "country_code"];
let closure_5 = ["subscription_items"];
let closure_6 = ["sku_id", "country_code", "is_gift", "gift_info_options"];
({ setPaymentSuccess: c10, showOldPaymentFlowSuccess: unpackModuleId } = PremiumPlanPurchasedStore);
({
  SubscriptionTypes: closure_15,
  AnalyticEvents: closure_16,
  CurrencyCodes: closure_17,
  Endpoints: closure_18,
  StoreKitErrors,
} = Constants);
const PaymentGateways = Constants2.PaymentGateways;
const jsx = Fragment.jsx;
const localAppleReceiptHash = "localAppleReceiptHash";
const BILLING = "BILLING";
tmp5 = new LoggerDefault("BillingActionCreators.tsx");
obj = {
  applyAppleReceipt,
  fetchMostRecentSubscription: actions_BillingActionCreators.fetchMostRecentSubscription,
  fetchIpCountryCode: actions_BillingActionCreators.fetchIpCountryCode,
  init() {
    const self = this;
    return (async () => {
      let obj9;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let _undefined;
          let premiumSubscriptionPlans;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              let closure_1 = tmp4;
              c4 = 1;
              _undefined = null;
              const obj13 = _undefined(closure_3[18]);
              if (obj13.isIOS()) {
                c4 = 2;
                c5 = 3;
                c6 = 1;
                const obj4 = { value: obj9.fetchStoreFront(), done: false };
                obj9 = closure_1(closure_3[19]);
                return obj4;
              }
            }
          } else {
            if (1 === c5) {
              c4 = 0;
            } else if (2 === c5) {
              c4 = 1;
              _undefined = null;
            } else if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                _undefined = value;
                c4 = 1;
              }
            } else if (4 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else {
                c5 = 5;
                c6 = 1;
                const obj11 = { value: closure_130_0.restoreAndApplyPurchases(), done: false };
                return obj11;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
          if (null != _undefined) {
            const obj6 = _undefined(closure_3[20]);
            premiumSubscriptionPlans = obj6.fetchPremiumSubscriptionPlans(
              _undefined.country,
              undefined,
              undefined,
              constants.APPLE_ADVANCED_COMMERCE,
            );
          } else {
            const obj5 = _undefined(closure_3[20]);
            premiumSubscriptionPlans = obj5.fetchPremiumSubscriptionPlans();
          }
          const items = [premiumSubscriptionPlans, ,];
          const loadProducts = closure_130_0.loadProducts;
          if (_undefined == null) {
            _undefined = undefined;
          }
          items[1] = loadProducts(_undefined);
          const obj7 = _undefined(closure_3[17]);
          items[2] = obj7.fetchSubscriptions();
          c5 = 4;
          c6 = 1;
          const obj12 = { value: all(items), done: false };
          return obj12;
        } catch (tmp34) {
          closure_3 = tmp34;
          if (0 === c4) {
            c6 = 3;
            throw tmp34;
          } else if (1 === tmp36) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    })();
  },
  canStorekitMakePayments() {
    return (async () => {
      let closure_0;
      let obj7;
      let value;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let closure_1;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp;
              value = undefined;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: obj7.initConnection(), done: false };
              obj7 = _mod10785;
              return obj4;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_1 = closure_2;
            const obj5 = closure_129_0(closure_129_3[16]);
            const result = obj5.captureBillingException(closure_1);
            const obj6 = closure_129_1(closure_129_3[22]);
            obj6.dispatch({ type: "GENERIC_IAP_INIT_CONNECTION", canMakePayments: false });
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj9 = { type: "GENERIC_IAP_INIT_CONNECTION", canMakePayments: value };
            obj = closure_129_1(closure_129_3[22]);
            obj.dispatch(obj9);
            c3 = 0;
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          }
        } catch (tmp24) {
          closure_2 = tmp24;
          if (0 === c3) {
            c5 = 3;
            throw tmp24;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  loadProducts(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let obj18;
      let obj8;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let storeFront;
          let products;
          let products2;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              storeFront = undefined;
              products = undefined;
              products2 = undefined;
              c4 = 1;
              const obj17 = products(closure_3[22]);
              obj17.dispatch({ type: "IAP_LOAD_PRODUCTS_START" });
              c5 = 2;
              c6 = 1;
              const obj7 = { value: obj18.loadProducts(), done: false };
              obj18 = products(closure_3[19]);
              return obj7;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj11 = products(closure_3[22]);
              obj11.dispatch({ type: "IAP_LOAD_PRODUCTS_FAILED" });
              const obj9 = { fingerprint: ["iap-load-products-failed"] };
              const obj12 = storeFront(closure_3[16]);
              const result = obj12.captureBillingException(closure_3, obj9);
            } else {
              let tmp5;
              if (2 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  products = value;
                  const arr = products(closure_3[23]);
                  products2 = arr.filter(products, (identifier) => {
                    const GenericProductIds = storeFront(closure_1_3[24]).GenericProductIds;
                    return GenericProductIds.includes(identifier.identifier);
                  });
                  if (null == closure_130_0) {
                    c5 = 3;
                    c6 = 1;
                    const obj13 = { value: obj8.fetchStoreFront(), done: false };
                    obj8 = products(closure_3[19]);
                    return obj13;
                  } else {
                    tmp5 = closure_130_0;
                  }
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                storeFront = value;
                if (value == null) {
                  storeFront = { country: "US", currency: "usd" };
                }
                tmp5 = storeFront;
              }
              storeFront = tmp5;
              const obj14 = { type: "IAP_LOAD_PRODUCTS", products };
              obj2 = products(closure_3[22]);
              obj2.dispatch(obj14);
              if (products2.length === storeFront(closure_3[24]).GenericProductIds.length) {
                const obj15 = { type: "IAP_LOAD_GENERIC_PRODUCTS", products: products2, storeFront };
                const obj6 = products(closure_3[22]);
                obj6.dispatch(obj15);
              } else {
                const obj16 = { type: "GENERIC_IAP_SET_STORE_FRONT", storeFront };
                const obj4 = products(closure_3[22]);
                obj4.dispatch(obj16);
              }
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp42) {
          closure_3 = tmp42;
          if (0 === c4) {
            c6 = 3;
            throw tmp42;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  },
  createSubscription(arg0) {
    let closure_0 = arg0;
    return (async function () {
      let closure_3;
      let countryCode;
      let formatted;
      let identifier;
      let obj23;
      let paths;
      let transactionReceipt;
      let v3;
      function getTrialOfferSignature() {
        return closure_1_24(...arguments);
      }
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let application_id;
        try {
          let c1;
          let giftInfoOptions;
          let c3;
          let c7;
          let orderId;
          let id;
          let c10;
          let obj19;
          let currentUser;
          let closure_13;
          let closure_14;
          let key;
          let product;
          let regular_price;
          let presentmentCurrency;
          let c19;
          let productId;
          let canMakePaymentsResult;
          v3 = 2;
          switch (identifier) {
            case 0: {
              let c2;
              let c4;
              let c5;
              let c6;
              let c8;
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_2 = tmp;
                c1 = undefined;
                giftInfoOptions = undefined;
                c3 = undefined;
                application_id = undefined;
                identifier = undefined;
                v3 = undefined;
                c7 = undefined;
                orderId = undefined;
                id = undefined;
                c10 = undefined;
                obj19 = undefined;
                currentUser = undefined;
                closure_13 = undefined;
                closure_14 = undefined;
                key = undefined;
                product = undefined;
                regular_price = undefined;
                presentmentCurrency = undefined;
                c19 = undefined;
                productId = transactionReceipt.productId;
                ({
                  isGift: c1,
                  giftInfoOptions: c2,
                  baseAnalyticsData: c3,
                  applicationId: c4,
                  offerId: c5,
                  onPurchaseComplete: c6,
                  onPurchaseError: c7,
                  orderId: c8,
                } = transactionReceipt);
                canMakePaymentsResult = IAPStore;
                if (!IAPStore.isBusy()) {
                  const obj29 = transactionReceipt(paths[25]);
                  if (obj29.getIsPaymentsBlocked()) {
                    canMakePaymentsResult(paths[26])();
                  } else {
                    const result1 = canMakePaymentsResult(tmp106[22]);
                    const obj5 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: productId };
                    identifier = 1;
                    v3 = 1;
                    const obj7 = { value: result1.dispatch(obj5), done: false };
                    return obj7;
                  }
                }
                v3 = 3;
                return { value: "IconComponent", done: null };
              }
              break;
            }
            case 1: {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                application_id = 1;
                const obj26 = canMakePaymentsResult(paths[19]);
                canMakePaymentsResult = obj26.canMakePayments();
                identifier = 3;
                v3 = 1;
                const obj9 = { value: canMakePaymentsResult, done: false };
                return obj9;
              }
              break;
            }
            case 2: {
              application_id = 0;
              let closure_21 = paths;
              const obj10 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: productId };
              const obj24 = canMakePaymentsResult(paths[22]);
              obj24.dispatch(obj10);
              canMakePaymentsResult = c7;
              if (c7 != null) {
                const result2 = canMakePaymentsResult(closure_21);
              }
              canMakePaymentsResult = handlePurchaseException;
              handlePurchaseException(closure_21, "subscription");
              break;
            }
            case 3: {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                canMakePaymentsResult = SubscriptionStore;
                if (SubscriptionStore.hasFetchedSubscriptions()) {
                  canMakePaymentsResult = currentUser.getCurrentUser();
                  id = canMakePaymentsResult;
                  if (null == id) {
                    const _Error2 = Error;
                    const intl2 = transactionReceipt(paths[27]).intl;
                    canMakePaymentsResult = this;
                    const self2 = this;
                    const error = new Error(intl2.string(transactionReceipt(paths[27]).t.PjfUXe));
                    throw error;
                  } else {
                    const obj40 = transactionReceipt(paths[19]);
                    canMakePaymentsResult = obj40.convertToUUID(id.id);
                    c10 = canMakePaymentsResult;
                    obj19 = undefined;
                    if (null != identifier) {
                      canMakePaymentsResult = getTrialOfferSignature(productId, identifier, c10);
                      identifier = 5;
                      v3 = 1;
                      const obj13 = { value: canMakePaymentsResult, done: false };
                      return obj13;
                    } else {
                      const obj20 = canMakePaymentsResult(paths[19]);
                      canMakePaymentsResult = obj20.purchaseProduct(productId, obj19, c10);
                      identifier = 6;
                      v3 = 1;
                      const obj14 = { value: canMakePaymentsResult, done: false };
                      return obj14;
                    }
                  }
                } else {
                  const obj18 = transactionReceipt(paths[17]);
                  canMakePaymentsResult = obj18.fetchSubscriptions();
                  identifier = 4;
                  v3 = 1;
                  const obj15 = { value: canMakePaymentsResult, done: false };
                  return obj15;
                }
              }
              break;
            }
            case 4: {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                const _Error = Error;
                const intl = transactionReceipt(paths[27]).intl;
                canMakePaymentsResult = this;
                const self = this;
                const error1 = new Error(intl.string(transactionReceipt(paths[27]).t.PjfUXe));
                throw error1;
              }
              break;
            }
            case 5: {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj17 = { value, done: true };
                return obj17;
              } else {
                currentUser = value;
                if (null != currentUser) {
                  obj19 = {
                    identifier,
                    keyIdentifier: currentUser.key_id,
                    nonce: currentUser.nonce,
                    signature: currentUser.signature,
                    timestamp: Number(currentUser.timestamp),
                  };
                  const _Number = Number;
                }
              }
              break;
            }
            case 6: {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj21 = { value, done: true };
                return obj21;
              } else {
                closure_13 = value;
                const jwsRepresentation = closure_13.jwsRepresentation;
                transactionReceipt = jwsRepresentation;
                if (jwsRepresentation == null) {
                  transactionReceipt = closure_13.transactionReceipt;
                }
                closure_14 = transactionReceipt;
                const obj11 = canMakePaymentsResult(paths[12]);
                key = obj11.v3(closure_14);
                const obj22 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key, giftOptions: obj23 };
                obj23 = {};
                const dispatch = canMakePaymentsResult(paths[22]).dispatch;
                const tmp46 = canMakePaymentsResult(paths[22]);
                let merged = Object.assign(giftInfoOptions);
                dispatch(obj22);
                canMakePaymentsResult = undefined;
                if (v3 != null) {
                  canMakePaymentsResult = v3();
                }
                identifier = 7;
                v3 = 1;
                const obj25 = { value: canMakePaymentsResult, done: false };
                return obj25;
              }
              break;
            }
            case 7: {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj27 = { value, done: true };
                return obj27;
              } else {
                product = IAPStore.getProduct(productId);
                canMakePaymentsResult = undefined;
                if (product != null) {
                  canMakePaymentsResult = product.price;
                }
                regular_price = canMakePaymentsResult;
                canMakePaymentsResult = undefined;
                if (product != null) {
                  canMakePaymentsResult = product.currencyCode;
                }
                presentmentCurrency = canMakePaymentsResult;
                canMakePaymentsResult = applyAppleReceipt;
                const obj28 = {
                  encodedReceipt: closure_13.transactionReceipt,
                  retries: 3,
                  presentmentCurrency,
                  presentmentAmount: regular_price,
                  appStoreRegion: countryCode,
                  giftInfoOptions,
                  jwsRepresentation: closure_13.jwsRepresentation,
                  source: "createSubscription",
                  orderId,
                };
                countryCode = undefined;
                if (product != null) {
                  countryCode = product.countryCode;
                }
                canMakePaymentsResult = canMakePaymentsResult(obj28);
                identifier = 9;
                v3 = 1;
                const obj30 = { value: canMakePaymentsResult, done: false };
                return obj30;
              }
              break;
            }
            case 8: {
              application_id = 1;
              let closure_20 = paths;
              const obj31 = { tags: { source: "createSubscriptionFetchSubscriptions" } };
              const obj6 = transactionReceipt(paths[16]);
              const result = obj6.captureBillingException(closure_20, obj31);
              canMakePaymentsResult = SubscriptionStore.getPremiumTypeSubscription();
              c19 = canMakePaymentsResult;
              if (null != c19) {
                canMakePaymentsResult = closure_1_11;
                closure_1_11(() => {
                  obj = canMakePaymentsResult(paths[29]);
                  obj2 = {
                    importer() {
                      let subscription;
                      const promise = transactionReceipt(paths[31])(paths[30], paths.paths);
                      return promise.then((result) => {
                        closure_0 = result.default;
                        return (arg0) => {
                          closure_0 = arg0;
                          obj = {
                            subscription,
                            onClose() {
                              closure_0.onClose();
                              obj = closure_2_1(closure_2_3[32]);
                              obj.popWithKey(closure_2_0(closure_2_3[33]).PREMIUM_KEY);
                            },
                          };
                          const merged = Object.assign(arg0);
                          return closure_3_20(closure_0, obj);
                        };
                      });
                    },
                    isDismissable: false,
                  };
                  obj.openLazy(obj2);
                });
              }
              application_id = 0;
              break;
            }
            case 9: {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj32 = { value, done: true };
                return obj32;
              } else {
                closure_1_10();
                const obj33 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key };
                const obj36 = canMakePaymentsResult(paths[22]);
                obj36.dispatch(obj33);
                const track = canMakePaymentsResult(paths[14]).track;
                const PAYMENT_FLOW_COMPLETED = constants.PAYMENT_FLOW_COMPLETED;
                const tmp133 = canMakePaymentsResult(paths[14]);
                const obj34 = {
                  subscription_plan_gateway_plan_id: productId,
                  price: regular_price,
                  regular_price,
                  currency: formatted,
                  application_id,
                };
                canMakePaymentsResult = presentmentCurrency;
                formatted = undefined;
                const getPaymentFlowCompletedAnalyticsFields = transactionReceipt(
                  paths[28],
                ).getPaymentFlowCompletedAnalyticsFields;
                const tmp137 = transactionReceipt(paths[28]);
                const tmp138 = c3;
                if (presentmentCurrency != null) {
                  formatted = canMakePaymentsResult.toLowerCase();
                }
                track(PAYMENT_FLOW_COMPLETED, getPaymentFlowCompletedAnalyticsFields(tmp138, obj34));
                obj = canMakePaymentsResult(paths[22]);
                const obj35 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: productId };
                canMakePaymentsResult = obj.dispatch(obj35);
                const tmp14 = c1;
                if (!tmp14) {
                  application_id = 2;
                  const obj3 = transactionReceipt(paths[17]);
                  canMakePaymentsResult = obj3.fetchSubscriptions();
                  identifier = 10;
                  v3 = 1;
                  const obj37 = { value: canMakePaymentsResult, done: false };
                  return obj37;
                }
              }
              break;
            }
            default: {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj38 = { value, done: true };
                return obj38;
              } else {
                application_id = 1;
              }
              break;
            }
          }
        } catch (tmp115) {
          paths = tmp115;
          if (0 === application_id) {
            v3 = 3;
            throw tmp115;
          } else if (1 === tmp117) {
            identifier = 2;
          } else {
            identifier = 8;
          }
        }
      }
    })();
  },
  restoreAndApplyPurchases(arg0) {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    let self = this;
    return (async function () {
      let obj14;
      let obj8;
      let value;
      if (c11 === 2) {
        c11 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c8;
        try {
          let code;
          let closure_0;
          let closure_1;
          let _undefined;
          let iter2;
          let _loop;
          let c5;
          c11 = 2;
          const tmp4 = c10;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_7 = tmp;
              code = tmp4;
              closure_0 = undefined;
              closure_1 = undefined;
              _undefined = undefined;
              iter2 = undefined;
              _loop = undefined;
              c5 = undefined;
              if (busy.isBusy()) {
                c11 = 3;
                let obj7 = { value: [], done: true };
                return obj7;
              } else {
                const obj21 = closure_1(iter2[22]);
                const dispatchResult = obj21.dispatch({ type: "IAP_RESTORE_PURCHASES_START" });
                c8 = 2;
                c10 = 3;
                c11 = 1;
                const obj9 = { value: self.loadProducts(), done: false };
                return obj9;
              }
            }
          } else if (1 === tmp4) {
            c8 = 0;
            const obj20 = closure_1(iter2[22]);
            obj20.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
            throw closure_9;
          } else if (2 === tmp4) {
            c8 = 1;
            code = closure_9;
            if (!set.has(code.code)) {
              const obj19 = closure_0(iter2[16]);
              let result = obj19.captureBillingException(code);
            }
            throw code;
          } else if (3 === tmp4) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              const obj17 = closure_1(iter2[22]);
              obj17.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
              c11 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              const obj13 = { fullRestore: closure_135_0 };
              c10 = 4;
              c11 = 1;
              const obj15 = { value: obj14.restorePurchases(obj13), done: false };
              obj14 = closure_1(iter2[19]);
              return obj15;
            }
          } else {
            let next;
            let c2;
            let tmp16;
            if (4 === tmp4) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 0;
                let obj12 = closure_1(iter2[22]);
                obj12.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                c11 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                closure_0 = value;
                if (0 === closure_0.length) {
                  c8 = 0;
                  const obj10 = closure_1(iter2[22]);
                  obj10.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                  c11 = 3;
                  const obj18 = { value: [], done: true };
                  return obj18;
                } else {
                  const obj27 = closure_1(iter2[23])(closure_0);
                  const iter4 = obj27.uniqBy((purchaseResponse) => {
                    let originalTransactionIdentifier = purchaseResponse.purchaseResponse.jwsRepresentation;
                    if (originalTransactionIdentifier == null) {
                      originalTransactionIdentifier = purchaseResponse.purchaseResponse.originalTransactionIdentifier;
                    }
                    return originalTransactionIdentifier;
                  });
                  closure_1 = iter4.value();
                  _undefined = [];
                  iter2 = [];
                  _loop = function _loop(c5) {
                    const skipDupCheck = c5;
                    let c6 = 0;
                    let c7 = 0;
                    c5 = 0;
                    return (function* _loop(arg0) {
                      let countryCode;
                      let currencyCode;
                      let obj7;
                      let price;
                      let reward_sku_ids;
                      let tmp23Result;
                      if (c7 === 2) {
                        c7 = 3;
                        let str = "Generator functions may not be called on executing generators";
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp3 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          let obj4 = { value, done: true };
                          return obj4;
                        } else {
                          return { value: "IconComponent", done: null };
                        }
                      } else {
                        try {
                          let purchaseResponse;
                          c7 = 2;
                          if (0 === c6) {
                            if (arg0 === 1) {
                              c7 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c7 = 3;
                              return { value, done: true };
                            } else {
                              closure_3 = tmp;
                              closure_2 = tmp4;
                              let c2;
                              purchaseResponse = skipDupCheck.purchaseResponse;
                              product = product.getProduct(purchaseResponse.productIdentifier);
                              const jwsRepresentation = purchaseResponse.jwsRepresentation;
                              transactionReceipt = jwsRepresentation;
                              if (jwsRepresentation == null) {
                                transactionReceipt = purchaseResponse.transactionReceipt;
                              }
                              obj2 = transactionReceipt(closure_3[12]);
                              const v3Result = obj2.v3(transactionReceipt);
                              c2 = v3Result;
                              giftOptionsForKey = giftOptionsForKey.getGiftOptionsForKey(v3Result);
                              c5 = 1;
                              const obj6 = {
                                jwsRepresentation: null,
                                encodedReceipt: null,
                                presentmentCurrency: currencyCode,
                                presentmentAmount: price,
                                appStoreRegion: countryCode,
                                giftInfoOptions: obj7,
                                source: "restoreSubscription",
                                skipDupCheck,
                              };
                              ({ jwsRepresentation: obj3.jwsRepresentation, transactionReceipt: obj3.encodedReceipt } =
                                purchaseResponse);
                              currencyCode = undefined;
                              if (product != null) {
                                currencyCode = product.currencyCode;
                              }
                              price = undefined;
                              if (product != null) {
                                price = product.price;
                              }
                              countryCode = undefined;
                              if (product != null) {
                                countryCode = product.countryCode;
                              }
                              let gift_style;
                              if (giftOptionsForKey != null) {
                                gift_style = giftOptionsForKey.gift_style;
                              }
                              obj7 = { gift_style, reward_sku_ids };
                              reward_sku_ids = undefined;
                              if (giftOptionsForKey != null) {
                                reward_sku_ids = giftOptionsForKey.reward_sku_ids;
                              }
                              c6 = 2;
                              c7 = 1;
                              const obj12 = {
                                value: tmp23Result.then((result) => {
                                  let str;
                                  obj = { purchase: obj2 };
                                  obj2 = {
                                    productId: closure_1_1.productIdentifier,
                                    transactionDate: closure_1_1.transactionDate,
                                    transactionReceipt: closure_1_1.transactionReceipt,
                                    transactionId: str.toString(),
                                  };
                                  const finishTransaction = skipDupCheck(closure_2_3[21]).finishTransaction;
                                  str = closure_1_1.transactionIdentifier;
                                  skipDupCheck(closure_2_3[21]);
                                  finishTransaction(obj);
                                  if (null != result) {
                                    const obj4 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key };
                                    const obj3 = transactionReceipt(closure_2_3[22]);
                                    obj3.dispatch(obj4);
                                  }
                                  let tmp7 = null;
                                  if (null != result) {
                                    tmp7 = closure_1_0;
                                  }
                                  return tmp7;
                                }),
                                done: false,
                              };
                              tmp23Result = closure_2_23(obj6);
                              return obj12;
                            }
                          } else {
                            if (1 === c6) {
                              c5 = 0;
                              closure_3 = closure_4;
                              closure_131_3.push(closure_3);
                            } else if (arg0 === 1) {
                              c7 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c5 = 0;
                              c7 = 3;
                              obj = { value, done: true };
                              return obj;
                            } else {
                              if (null != value) {
                                closure_131_2.push(purchaseResponse);
                              }
                              c5 = 0;
                            }
                            c7 = 3;
                            return { value: "IconComponent", done: null };
                          }
                        } catch (tmp30) {
                          closure_4 = tmp30;
                          if (0 === c5) {
                            c7 = 3;
                            throw tmp30;
                          } else {
                            c6 = 1;
                          }
                        }
                      }
                    })();
                  };
                  closure_0 = closure_1[Symbol.iterator]();
                  if (closure_0 === undefined) {
                    if (_undefined.length > 0) {
                      c10 = 8;
                      c11 = 1;
                      const obj22 = { value: obj8.fetchSubscriptions(), done: false };
                      obj8 = closure_0(iter2[17]);
                      return obj22;
                    } else if (iter2.length > 0) {
                      const item = iter2.forEach((code) => {
                        if (!set.has(code.code)) {
                          obj = closure_1_0(iter2[16]);
                          const result = obj.captureBillingException(code);
                        }
                      });
                      const _Error = Error;
                      self = this;
                      const self2 = this;
                      const error = new Error("There were some errors while trying to restore");
                      throw error;
                    } else {
                      c8 = 0;
                      let obj6 = closure_1(iter2[22]);
                      obj6.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                      c11 = 3;
                      const obj23 = { value: _undefined, done: true };
                      return obj23;
                    }
                  } else {
                    c8 = 3;
                    c5 = tmp34;
                    const tmp126 = _loop(c5);
                    const iter5 = tmp126[tmp105.iterator]();
                    HermesBuiltin.ensureObject("iterator is not an object");
                    next = iter5.next;
                    c2 = undefined;
                  }
                }
              }
            } else if (5 === tmp4) {
              const tmp30 = closure_9;
              c8 = 2;
              closure_0.return();
              throw closure_9;
            } else if (6 === tmp4) {
              c8 = 4;
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else {
                c2 = value;
                if (arg0 === 2) {
                  c2 = value;
                  c8 = 3;
                  const method = HermesBuiltin.getMethod("return");
                  if (method === undefined) {
                    closure_0.return();
                    c8 = 0;
                    let obj4 = closure_1(iter2[22]);
                    obj4.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                    c11 = 3;
                    const obj24 = { value, done: true };
                    return obj24;
                  } else {
                    const iter3 = method(c2);
                    HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    if (iter3.done) {
                      value = iter3.value;
                      closure_0.return();
                      c8 = 0;
                      obj2 = closure_1(iter2[22]);
                      obj2.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                      c11 = 3;
                      const obj25 = { value, done: true };
                      return obj25;
                    } else {
                      c10 = 6;
                      c11 = 1;
                      return iter3;
                    }
                  }
                } else {
                  c8 = 3;
                  tmp16 = value;
                }
              }
            } else if (7 === tmp4) {
              let tmp7 = closure_9;
              c8 = 3;
              let str = "throw";
              const tmp6 = closure_9;
              const method1 = HermesBuiltin.getMethod("throw");
              if (method1 === undefined) {
                const method2 = HermesBuiltin.getMethod("return");
                if (method2 !== undefined) {
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                }
                throw new TypeError("yield* delegate must have a .throw() method");
              } else {
                const iter = method1(tmp6);
                HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                if (iter.done) {
                  iter2 = iter;
                  const value2 = iter2.value;
                  c8 = 2;
                } else {
                  c10 = 6;
                  c11 = 1;
                  return iter;
                }
              }
            } else if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              const obj26 = closure_1(iter2[22]);
              obj26.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
              c11 = 3;
              obj = { value, done: true };
              return obj;
            }
            iter2 = next(tmp16);
            HermesBuiltin.ensureObject("iterator.next() did not return an object");
            if (!iter2.done) {
              c10 = 6;
              c11 = 1;
              return iter2;
            }
          }
        } catch (tmp98) {
          closure_9 = tmp98;
          if (0 === c8) {
            c11 = 3;
            throw tmp98;
          } else if (1 === c8) {
            c10 = 1;
          } else if (2 === c8) {
            c10 = 2;
          } else if (3 === c8) {
            c10 = 5;
          } else {
            c10 = 7;
          }
        }
      }
    })();
  },
};
let items = [_mod10785.ErrorCode.E_USER_CANCELLED, StoreKitErrors.PAYMENT_CANCELED];
const set = new Set(items);
const items1 = [_mod10785.ErrorCode.E_UNKNOWN, _mod10785.ErrorCode.E_DEFERRED_PAYMENT];
const set1 = new Set(items1);
let obj2 = {
  NONE: "none",
  CANNOT_MAKE_REQUEST: "cannot_make_request",
  INVALID_CURRENCY: "invalid_currency",
  PURCHASE_INCOMPLETE: "purchase_incomplete",
  USER_CANCELLED: "user_cancelled",
  POST_PURCHASE_FAILED: "post_purchase_failed",
};
let result = size.fileFinishedImporting("actions/native/BillingActionCreators.tsx");

export default obj;
export { getIAPJWTRequestData };
export { updateAppleSubscription };
export const cancelGenericSubscription = function cancelGenericSubscription(arg0, arg1, arg2) {
  return obj(...arguments);
};
export { isValidCurrency };
export const SubscriptionPurchaseFailureReason = obj2;
export const createGenericSubscription = function createGenericSubscription(arg0) {
  return obj(...arguments);
};
export const modifyGenericSubscription = function modifyGenericSubscription(arg0) {
  return obj(...arguments);
};
export const resubscribeGenericSubscription = function resubscribeGenericSubscription(arg0, arg1) {
  return obj(...arguments);
};
export const mobilePurchaseSKU = function mobilePurchaseSKU(arg0, arg1) {
  return obj(...arguments);
};
export const migrateToACOM = function migrateToACOM() {
  return obj(...arguments);
};
