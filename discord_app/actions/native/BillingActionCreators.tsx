// === Module 7419: BillingActionCreators ===

// Module 7419 (BillingActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1241 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import BillingUtils from "BillingUtils" /* 4233 */;
import BillingError from "BillingError" /* 4240 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4461 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import ProductIds from "ProductIds" /* 7240 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7417 */;
import ACOMExperiments from "ACOMExperiments" /* 9365 */;
import showSpendingLimitReachedAlert from "showSpendingLimitReachedAlert" /* 10705 */;
import IAPUtils from "IAPUtils" /* 11047 */;
import _mod11048 from "module_11048" /* 11048 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11433 */;
import ErrorUtilsAll from "ErrorUtils" /* 13301 */;
import APBRequestOperations from "APBRequestOperations" /* 13303 */;
import ACRequestOperations from "ACRequestOperations" /* 13304 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GenericIAPStore from "GenericIAPStore" /* 7239 */;
import GiftPromotionStore from "GiftPromotionStore" /* 7420 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import IAPStore from "IAPStore" /* 7237 */;

const IAPUtilsDefault = IAPUtils;

require = fn;
function applyAppleReceipt(arg0) {
  ({ encodedReceipt, entitlementSkuId, giftInfoOptions, isGift, jwsRepresentation, jwsRepresentations, source } = arg0);
  ({ presentmentCurrency, presentmentAmount, appStoreRegion, retries, skipDupCheck, orderId } = arg0);
  if (null != jwsRepresentations) {
    if (null != jwsRepresentation) {
      const _Error = Error;
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
  obj = MurmurHashV3Default;
  const v3Result = obj.v3(first);
  const require = v3Result;
  let Storage = Storage2.Storage;
  if (!skipDupCheck) {
    if (Storage.get(localAppleReceiptHash) === v3Result) {
      let resolved = Promise.resolve(null);
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
    obj = { source, sku_id: entitlementSkuId };
    AnalyticsUtilsDefault.track(constants.GIFT_INFO_OPTIONS_MISSING, obj);
    const tmp2Result = AnalyticsUtilsDefault;
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants2.BILLING_APPLY_APPLE_RECEIPT, body: { encoded_receipt: encodedReceipt, entitlement_sku_id: entitlementSkuId, presentment_currency: presentmentCurrency, presentment_amount: presentmentAmount, app_store_region: appStoreRegion, gift_info_options: giftInfoOptions, is_gift: isGift, source, jws_representations: jwsRepresentations, order_id: orderId }, retries, oldFormErrors: true, rejectWithError: true };
  const postResult = HTTP.post(request);
  resolved = HTTP.post(request).then((result) => {
    const Storage = Storage2.Storage;
    result = Storage.set(localAppleReceiptHash, v3Result);
    return result;
  }).catch((error) => {
    v3Result(dependencyMap[17]);
    let tags = { tags: null };
    tags = { source };
    tags.tags = tags;
    const result = tags.captureBillingException(error, tags);
    throw error;
  });
  const nextPromise = HTTP.post(request).then((result) => {
    const Storage = Storage2.Storage;
    result = Storage.set(localAppleReceiptHash, v3Result);
    return result;
  });
}
let closure_25 = async function _getTrialOfferSignature() {
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    closure_4 = tmp3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.BILLING_GENERATE_APPLE_TRIAL_OFFER_SIGNATURE, body: { product_id, product_offer_id, app_account_token }, rejectWithError: false };
    await HTTP.post(request);
    closure_131_0 = closure_5;
    const result = closure_132_0(closure_132_3[17]).captureBillingException(closure_131_0);
    await "HermesInternal";
    return value.body;
  })();
};
function preCompletionFailureReason(code) {
  return set.has(code.code) ? obj.USER_CANCELLED : obj.PURCHASE_INCOMPLETE;
}
function handlePurchaseException(code, purchase_type) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (!set.has(code.code)) {
    obj = showSpendingLimitReachedAlert;
    let billingError = code;
    if (!(code instanceof V6OrEarlierAPIError.BillingError)) {
      billingError = new V6OrEarlierAPIError.BillingError(code);
    }
    if (obj.isSpendingLimitError(billingError)) {
      let tmpResult = showSpendingLimitReachedAlert;
      const result = tmpResult.showSpendingLimitReachedAlert();
    } else {
      const message = code.message;
      const _JSON = JSON;
      const json = JSON.stringify(code);
      let obj1 = ErrorUtilsAll;
      const underlyingIOSError = obj1.getUnderlyingIOSError(code);
      if (null != underlyingIOSError) {
        obj = { title: null, body: null };
        const intl2 = util.intl;
        obj.title = intl2.string(util.t.POsVOt);
        obj.body = underlyingIOSError;
        actions_AlertActionCreatorsDefault.show(obj);
        throw code;
      } else {
        const intl3 = util.intl;
        const stringResult = intl3.string(util.t.PjfUXe);
        let tmp12 = stringResult;
        if ("HTTPResponseError" !== code.name) {
          if (!("status" in code)) {
            tmp12 = code.message || stringResult;
            const tmp13 = code.message || stringResult;
          } else {
            tmp12 = stringResult;
          }
        }
        let message2 = tmp12;
        if (null != code.body) {
          const body = code.body;
          message2 = tmp12;
          if (null != body.apple_error_code) {
            const _HermesInternal = HermesInternal;
            message2 = "" + stringResult + " (code: " + body.apple_error_code + ")";
          }
        }
        let billingError1 = code;
        if (!(code instanceof V6OrEarlierAPIError.BillingError)) {
          billingError1 = new V6OrEarlierAPIError.BillingError(code);
        }
        let tmp19 = message2 === stringResult && flag;
        if (tmp19) {
          tmp19 = billingError1.code !== BillingError.ErrorCodes.UNKNOWN;
        }
        if (tmp19) {
          tmp19 = -1 !== billingError1.code;
        }
        if (tmp19) {
          tmp19 = null != billingError1.message;
        }
        if (tmp19) {
          message2 = billingError1.message;
        }
        let obj2 = actions_AlertActionCreatorsDefault;
        obj = { title: null, body: null, isDismissable: true, hideActionSheet: null };
        const intl = util.intl;
        obj.title = intl.string(util.t.zrhHH3);
        obj.body = message2;
        obj.hideActionSheet = flag;
        obj2.show(obj);
        tmpResult = BillingUtils;
        obj1 = { tags: null };
        obj2 = { source: BILLING, purchase_type };
        obj1.tags = obj2;
        const result1 = tmpResult.captureBillingException(code, obj1);
        if (flag) {
          throw code;
        }
      }
    }
  }
}
function canMakeIAPRequest() {
  const isBusyResult = IAPStore.isBusy();
  let tmp2 = !isBusyResult;
  if (!isBusyResult) {
    const isPaymentsBlocked = BlockedPaymentsCountryExperiment.getIsPaymentsBlocked();
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
  const self = this;
  const apply = closure_31.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_31 = async function _clearAndMakeIAPRequest() {
  closure_5 = tmp5;
  closure_4 = tmp2;
  closure_132_0 = closure_0;
  closure_132_1 = closure_1;
  closure_132_2 = closure_2;
  closure_132_3 = closure_3;
  await _mod11048.clearTransactionIOS();
  return closure_133_32(closure_132_0, closure_132_1, closure_132_2, closure_132_3);
};
function makeTrackedIAPRequest(arg0, arg1, arg2, arg3) {
  const self = this;
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_33 = async function _makeTrackedIAPRequest(arg0) {
  if (c11 === 2) {
    c11 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c11 = 2;
      if (0 === c10) {
        if (arg0 === 1) {
          c11 = 3;
          throw value;
        } else if (arg0 === 2) {
          c11 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_7 = tmp4;
          closure_6 = tmp8;
          closure_134_0 = closure_0;
          closure_134_3 = undefined;
          closure_134_4 = undefined;
          let transactionDate;
          let underlyingIOSError;
          closure_134_7 = undefined;
          closure_134_1 = false;
          closure_134_2 = null;
          c9 = 2;
          c10 = 3;
          c11 = 1;
          let obj1 = { value: IAPUtils.makeIAPRequest(closure_1, closure_2, closure_3), done: false };
          return obj1;
        }
      } else if (1 === tmp8) {
        c9 = 0;
        const obj2 = { request_identifier: closure_134_0, success: closure_134_1 };
        const merged = Object.assign(closure_134_2);
        closure_135_1(closure_135_3[15]).track(closure_135_17.APPLE_PARTNER_IAP_REQUEST_SENT, obj2);
        throw closure_8;
      } else if (2 === tmp8) {
        c9 = 1;
        closure_134_8 = closure_8;
        let obj7 = closure_135_2(closure_135_3[37]);
        underlyingIOSError = obj7.getUnderlyingIOSError(closure_134_8);
        if (null != underlyingIOSError) {
          if (underlyingIOSError.length > 0) {
            let str1 = underlyingIOSError;
          }
          closure_134_7 = str1;
          let str2 = closure_134_8.code;
          let str;
          if (str2 != null) {
            str = str2.toString();
          }
          const obj3 = { error_code: str, error_message: closure_134_7 };
          closure_134_2 = obj3;
          throw closure_134_8;
        }
        str = closure_134_8.message;
        if (str != null) {
          str1 = str.toString();
        }
      } else if (arg0 === 1) {
        c11 = 3;
        throw value;
      } else if (arg0 === 2) {
        c9 = 0;
        let obj4 = closure_135_1(closure_135_3[15]);
        obj4 = { request_identifier: closure_134_0, success: closure_134_1 };
        const merged1 = Object.assign(closure_134_2);
        obj4.track(closure_135_17.APPLE_PARTNER_IAP_REQUEST_SENT, obj4);
        c11 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_134_3 = value;
        closure_134_1 = true;
        closure_134_4 = closure_134_3.purchaseResponse.transactionIdentifier.toString();
        transactionDate = closure_134_3.purchaseResponse.transactionDate;
        str2 = undefined;
        if (closure_134_3.purchaseResponse.originalTransactionIdentifier != null) {
          str2 = str5.toString();
        }
        let original_transaction_id = str2;
        if (str2 == null) {
          original_transaction_id = closure_134_4;
        }
        obj = { original_transaction_id, original_transaction_date: null, transaction_id: null, transaction_date: null };
        const originalTransactionDate = closure_134_3.purchaseResponse.originalTransactionDate;
        let original_transaction_date = originalTransactionDate;
        if (originalTransactionDate == null) {
          original_transaction_date = transactionDate;
        }
        obj.original_transaction_date = original_transaction_date;
        obj.transaction_id = closure_134_4;
        obj.transaction_date = transactionDate;
        closure_134_2 = obj;
        c9 = 0;
        obj1 = closure_135_1(closure_135_3[15]);
        const obj6 = { request_identifier: closure_134_0, success: closure_134_1 };
        const merged2 = Object.assign(closure_134_2);
        obj1.track(closure_135_17.APPLE_PARTNER_IAP_REQUEST_SENT, obj6);
        c11 = 3;
        obj7 = { value: closure_134_3, done: true };
        return obj7;
      }
    } catch (tmp76) {
      closure_8 = tmp76;
      if (tmp5 === c9) {
        c11 = tmp3;
        throw tmp76;
      } else if (tmp2 === tmp78) {
        c10 = tmp2;
      } else {
        c10 = tmp;
      }
    }
  }
};
function getIAPJWTRequestData(arg0) {
  const self = this;
  const apply = closure_35.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_35 = async function _getIAPJWTRequestData() {
  c2 = 0;
  c3 = 0;
  return (async (arg0) => {
    closure_1 = tmp2;
    closure_129_0 = body;
    const request = {
      url: constants.BILLING_CREATE_APPLE_IAP_JWT_TOKEN,
      body,
      oldFormErrors: true,
      trackedActionData: {
        event: discord_common_AnalyticsUtils.NetworkActionNames.APPLE_JWT_TOKEN_CREATE,
        properties(body) {
          if (closure_1_0.operation !== closure_0(dependencyMap[41]).APBRequestOperations.CREATE) {
            if (closure_1_0.operation !== closure_0(dependencyMap[42]).ACRequestOperations.CREATE) {
              if (closure_1_0.operation === closure_0(dependencyMap[42]).ACRequestOperations.MODIFY) {
                obj = { subscription_items_json_string: null };
                const _JSON2 = JSON;
                obj.subscription_items_json_string = JSON.stringify(closure_1_0.subscription_items);
                const merged = Object.assign(closure_2_7(closure_1_0, closure_2_5));
                const tmp15 = closure_2_7(closure_1_0, closure_2_5);
              } else {
                if (closure_1_0.operation !== closure_0(dependencyMap[41]).APBRequestOperations.CHARGE) {
                  if (closure_1_0.operation !== closure_0(dependencyMap[42]).ACRequestOperations.CHARGE) {
                    obj = {};
                    const merged1 = Object.assign(closure_1_0);
                  }
                }
                ({ is_gift, gift_info_options } = closure_1_0);
                obj = { sku_id: null, request_country_code: null };
                ({ sku_id: obj2.sku_id, country_code: obj2.request_country_code } = closure_1_0);
                const merged2 = Object.assign(closure_2_7(closure_1_0, closure_2_6));
                if (null != gift_info_options) {
                  const _JSON = JSON;
                  obj.gift_info_options = JSON.stringify(gift_info_options);
                }
                if (is_gift) {
                  obj.is_gift = is_gift;
                }
              }
            }
            let str;
            if (body != null) {
              body = body.body;
              if (body != null) {
                str = body.request_data;
              }
            }
            if (str == null) {
              str = "";
            }
            const obj1 = { jwt_token_exists: str.length > 0 };
            const merged3 = Object.assign(obj);
            return closure_0(dependencyMap[43]).exact(obj1);
          }
          ({ items, country_code } = closure_1_0);
          const obj2 = { subscription_items_json_string: JSON.stringify(items), request_country_code: country_code };
          const merged4 = Object.assign(closure_2_7(closure_1_0, closure_2_4));
          obj = obj2;
          const tmp19 = closure_2_7(closure_1_0, closure_2_4);
        }
      },
      rejectWithError: true
    };
    await TrackedHTTPUtilsDefault.post(request);
    closure_129_1 = value;
    value = { requestJSONString: JSON.stringify(closure_129_1.body.request_data) };
    let _JSON = JSON;
    return value;
  })();
};
function updateAppleSubscription(arg0) {
  const self = this;
  const apply = closure_37.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_37 = async function _updateAppleSubscription() {
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            const request = { url: constants2.BILLING_APPLE_SUBSCRIPTION(body.subscription_id), body, oldFormErrors: true, trackedActionData: null, rejectWithError: false };
            const obj1 = {
              event: discord_common_AnalyticsUtils.NetworkActionNames.APPLE_JWT_TOKEN_CREATE,
              properties(body) {
                        obj = {};
                        const merged = Object.assign(closure_0);
                        let str;
                        if (body != null) {
                          body = body.body;
                          if (body != null) {
                            str = body.request_data;
                          }
                        }
                        if (str == null) {
                          str = "";
                        }
                        obj = { jwt_token_exists: str.length > 0 };
                        const merged1 = Object.assign(obj);
                        return closure_0(dependencyMap[43]).exact(obj);
                      }
            };
            request.trackedActionData = obj1;
            c2 = 1;
            c1 = 1;
            const obj2 = { value: TrackedHTTPUtilsDefault.patch(request), done: false };
            return obj2;
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        c1 = tmp;
        throw tmp5;
      }
    }
  })();
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
let closure_39 = async function _cancelGenericSubscription(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          if (canMakeIAPRequest()) {
            let tmp32 = require;
            let dispatchResult = dependencyMap;
            if (closure_2) {
              let CANCEL = tmp32(dispatchResult[42]).ACRequestOperations.CANCEL;
            } else {
              CANCEL = tmp32(dispatchResult[41]).APBRequestOperations.CANCEL;
            }
            closure_131_3 = CANCEL;
            tmp32 = determineProductId(CANCEL);
            closure_131_4 = tmp32;
            const obj1 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: tmp32 };
            dispatchResult = DispatcherDefault.dispatch(obj1);
            c7 = 1;
            c8 = 1;
          } else {
            c8 = 3;
            return { value: false, done: true };
          }
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c6 = 1;
          let obj3 = { operation: closure_131_3, request_identifier: closure_131_0, subscription_id: closure_131_1 };
          c7 = 3;
          c8 = 1;
          const obj4 = { value: closure_132_36(obj3), done: false };
          return obj4;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_5 = closure_5;
        obj3 = closure_132_1(closure_132_3[23]);
        const obj5 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: closure_131_4 };
        obj3.dispatch(obj5);
        let str = "partner_subscription";
        if (closure_131_2) {
          str = "advanced_commerce";
        }
        closure_132_28(closure_131_5, str);
        c8 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        obj = closure_132_1(closure_132_3[23]);
        const obj7 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: closure_131_4 };
        obj.dispatch(obj7);
        c6 = 0;
        c8 = 3;
        return { value: true, done: true };
      }
    } catch (tmp37) {
      closure_5 = tmp37;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp37;
      } else {
        c7 = tmp;
      }
    }
  }
};
function isValidCurrency(arg0) {
  const values = Object.values(collapsedCategories);
  return values.includes(arg0);
}
let closure_42 = async function _createGenericSubscription(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp6;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          ({ requestIdentifier: closure_129_0, items: closure_129_1, currency: closure_129_2, countryCode: closure_129_3, orderId: closure_129_4 } = closure_0);
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          let requestJSONString;
          closure_129_9 = undefined;
          let purchaseResponse;
          let originalPurchase;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else if (closure_130_29()) {
          if (closure_130_40(closure_129_2)) {
            closure_129_5 = closure_130_38(closure_130_0(closure_130_3[42]).ACRequestOperations.CREATE);
            let obj22 = closure_130_1(closure_130_3[23]);
            const obj2 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: closure_129_5 };
            c5 = 2;
            c6 = 1;
            const obj3 = { value: obj22.dispatch(obj2), done: false };
            return obj3;
          } else {
            const obj4 = { success: false, failureReason: closure_130_41.INVALID_CURRENCY };
            c6 = 3;
            let obj5 = { value: obj4, done: true };
            return obj5;
          }
        } else {
          const obj6 = { success: false, failureReason: closure_130_41.CANNOT_MAKE_REQUEST };
          c6 = 3;
          const obj7 = { value: obj6, done: true };
          return obj7;
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_129_6 = false;
          c4 = 1;
          const obj9 = { request_identifier: closure_129_0, items: closure_129_1.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity })), currency: closure_129_2, country_code: closure_129_3, order_id: closure_129_4 };
          closure_129_7 = obj9;
          const obj10 = { operation: closure_130_0(closure_130_3[42]).ACRequestOperations.CREATE };
          const merged = Object.assign(closure_129_7);
          c5 = 4;
          c6 = 1;
          const obj11 = { value: closure_130_34(obj10), done: false };
          return obj11;
        }
      } else if (3 === tmp6) {
        c4 = 0;
        closure_129_12 = closure_3;
        let obj13 = closure_130_1(closure_130_3[23]);
        const obj12 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: closure_129_5 };
        obj13.dispatch(obj12);
        let tmp36 = null == closure_129_4;
        if (!tmp36) {
          tmp36 = closure_129_6;
        }
        closure_130_28(closure_129_12, "advanced_commerce", tmp36);
        obj13 = closure_130_41;
        if (closure_129_6) {
          let PURCHASE_INCOMPLETE = obj13.POST_PURCHASE_FAILED;
        } else {
          PURCHASE_INCOMPLETE = obj13.PURCHASE_INCOMPLETE;
        }
        obj13 = { success: false, failureReason: PURCHASE_INCOMPLETE };
        c6 = 3;
      } else if (4 === tmp6) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          requestJSONString = value.requestJSONString;
          c5 = 5;
          c6 = 1;
          const obj15 = { value: closure_130_30(closure_129_0, requestJSONString, closure_129_5, true), done: false };
          return obj15;
        }
      } else if (5 === tmp6) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj16 = { value, done: true };
          return obj16;
        } else {
          closure_129_9 = value;
          purchaseResponse = closure_129_9.purchaseResponse;
          originalPurchase = closure_129_9.originalPurchase;
          closure_129_6 = true;
          const obj17 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, presentmentCurrency: closure_129_2, appStoreRegion: closure_129_3, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "createGenericSubscription", orderId: closure_129_4 };
          c5 = 6;
          c6 = 1;
          const obj18 = { value: closure_130_24(obj17), done: false };
          return obj18;
        }
      } else if (6 === tmp6) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj19 = { value, done: true };
          return obj19;
        } else {
          obj5 = closure_130_0(closure_130_3[22]);
          const obj20 = { purchase: originalPurchase };
          c5 = 7;
          c6 = 1;
          const obj21 = { value: obj5.finishTransaction(obj20), done: false };
          return obj21;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        obj22 = { value, done: true };
        return obj22;
      } else {
        obj = closure_130_1(closure_130_3[23]);
        const obj23 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: closure_129_5 };
        obj.dispatch(obj23);
        const obj24 = { success: true, failureReason: closure_130_41.NONE };
        c4 = 0;
        c6 = 3;
        const obj25 = { value: obj24, done: true };
        return obj25;
      }
    } catch (tmp58) {
      closure_3 = tmp58;
      if (tmp3 === c4) {
        c6 = tmp;
        throw tmp58;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_43 = async function _modifyGenericSubscription(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      switch (c5) {
        case 0:
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp8;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            closure_129_4 = undefined;
            ({ requestIdentifier: closure_129_0, subscriptionId: closure_129_1, items: closure_129_2, orderId: closure_129_3, onPurchaseComplete: closure_129_4 } = closure_0);
            let GENERIC_SUBSCRIPTION;
            closure_129_6 = undefined;
            let requestJSONString;
            closure_129_8 = undefined;
            value = undefined;
            let purchaseResponse;
            let originalPurchase;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        break;
        case 1:
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else if (closure_130_29()) {
            GENERIC_SUBSCRIPTION = closure_130_0(closure_130_3[25]).ProductIds.GENERIC_SUBSCRIPTION;
            const obj2 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: GENERIC_SUBSCRIPTION };
            c5 = 2;
            c6 = 1;
            const obj3 = { value: closure_130_1(closure_130_3[23]).dispatch(obj2), done: false };
            return obj3;
          } else {
            const obj4 = { success: false, failureReason: closure_130_41.CANNOT_MAKE_REQUEST };
            c6 = 3;
            let obj5 = { value: obj4, done: true };
            return obj5;
          }
        break;
        case 2:
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_129_6 = false;
            c4 = 1;
            const obj7 = { operation: closure_130_0(closure_130_3[42]).ACRequestOperations.MODIFY, request_identifier: closure_129_0, subscription_id: closure_129_1, subscription_items: closure_129_2.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity })), order_id: closure_129_3 };
            c5 = 4;
            c6 = 1;
            let obj8 = { value: closure_130_34(obj7), done: false };
            return obj8;
          }
        break;
        case 3:
          c4 = 0;
          closure_129_13 = closure_3;
          let obj24 = closure_130_1(closure_130_3[23]);
          const obj9 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: GENERIC_SUBSCRIPTION };
          obj24.dispatch(obj9);
          let tmp77 = null == closure_129_3;
          if (!tmp77) {
            tmp77 = closure_129_6;
          }
          closure_130_28(closure_129_13, "advanced_commerce", tmp77);
          let obj10 = closure_130_41;
          if (closure_129_6) {
            let PURCHASE_INCOMPLETE = obj10.POST_PURCHASE_FAILED;
          } else {
            PURCHASE_INCOMPLETE = obj10.PURCHASE_INCOMPLETE;
          }
          obj10 = { success: false, failureReason: PURCHASE_INCOMPLETE };
          c6 = 3;
        break;
        case 4:
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            requestJSONString = value.requestJSONString;
            let obj21 = closure_130_0(closure_130_3[22]);
            c5 = 5;
            c6 = 1;
            let obj12 = { value: obj21.clearTransactionIOS(), done: false };
            return obj12;
          }
        break;
        case 5:
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            let obj18 = closure_130_0(closure_130_3[44]);
            c5 = 6;
            c6 = 1;
            const obj14 = { value: obj18.retryACOMRequest(() => closure_2_32(closure_1_0, closure_1_7, closure_1_5, true)), done: false };
            return obj14;
          }
        break;
        case 6:
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            closure_129_8 = value;
            if ("already_applied" === closure_129_8.kind) {
              closure_129_6 = true;
              obj8 = closure_130_1(closure_130_3[23]);
              const obj16 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: GENERIC_SUBSCRIPTION };
              obj8.dispatch(obj16);
              obj10 = closure_130_1(closure_130_3[30]);
              const obj17 = { title: null, body: null, isDismissable: true, hideActionSheet: true };
              const intl = closure_130_0(closure_130_3[28]).intl;
              obj17.title = intl.string(closure_130_0(closure_130_3[28]).t.zrhHH3);
              const intl2 = closure_130_0(closure_130_3[28]).intl;
              obj17.body = intl2.string(closure_130_0(closure_130_3[28]).t.PjfUXe);
              obj10.show(obj17);
              obj12 = closure_130_0(closure_130_3[17]);
              obj18 = { tags: null };
              const obj19 = { source: closure_130_23, purchase_type: "advanced_commerce_already_applied" };
              obj18.tags = obj19;
              const result = obj12.captureBillingException(closure_129_8.error, obj18);
              const obj20 = { success: false, failureReason: closure_130_41.POST_PURCHASE_FAILED };
              c4 = 0;
              c6 = 3;
              obj21 = { value: obj20, done: true };
              return obj21;
            } else {
              value = closure_129_8.value;
              purchaseResponse = value.purchaseResponse;
              originalPurchase = value.originalPurchase;
              closure_129_6 = true;
              c4 = 2;
              let tmp34;
              if (closure_129_4 != null) {
                tmp34 = closure_129_4();
              }
              c5 = 9;
              c6 = 1;
              const obj22 = { value: tmp34, done: false };
              return obj22;
            }
          }
        break;
        case 7:
          c4 = 1;
          closure_129_12 = closure_3;
          obj5 = closure_130_0(closure_130_3[17]);
          const result1 = obj5.captureBillingException(closure_129_12);
          const obj23 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "modifyGenericSubscription", orderId: closure_129_3 };
          closure_130_24(obj23);
          c5 = 8;
          c6 = 1;
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        case 8:
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj24 = { value, done: true };
            return obj24;
          } else {
            obj1 = closure_130_0(closure_130_3[22]);
            const obj25 = { purchase: originalPurchase };
            c5 = 10;
            c6 = 1;
            const obj26 = { value: obj1.finishTransaction(obj25), done: false };
            return obj26;
          }
        break;
        case 9:
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c4 = 1;
          }
        break;
        default:
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj27 = { value, done: true };
            return obj27;
          } else {
            const obj28 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: GENERIC_SUBSCRIPTION };
            closure_130_1(closure_130_3[23]).dispatch(obj28);
            const obj29 = { success: true, failureReason: closure_130_41.NONE };
            c4 = 0;
            c6 = 3;
            const obj30 = { value: obj29, done: true };
            return obj30;
          }
      }
    } catch (tmp99) {
      closure_3 = tmp99;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp99;
      } else if (tmp === tmp101) {
        c5 = tmp2;
      } else {
        c5 = tmp5;
      }
    }
  }
};
let closure_44 = async function _resubscribeGenericSubscription(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp2;
          closure_2 = tmp6;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          ({ requestIdentifier: closure_130_0, subscriptionId: closure_130_1 } = closure_0);
          closure_130_2 = closure_1;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          let requestJSONString;
          closure_130_6 = undefined;
          let purchaseResponse;
          let originalPurchase;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else if (closure_131_29()) {
          const obj2 = { request_identifier: closure_130_0, subscription_id: closure_130_1 };
          closure_130_3 = obj2;
          let obj22 = closure_131_38;
          let tmp60 = closure_131_0;
          let obj3 = closure_131_3;
          if (closure_130_2) {
            let REACTIVATE = tmp60(obj3[42]).ACRequestOperations.REACTIVATE;
          } else {
            REACTIVATE = tmp60(obj3[41]).APBRequestOperations.REACTIVATE;
          }
          closure_130_4 = obj22(REACTIVATE);
          obj22 = closure_131_1(closure_131_3[23]);
          obj3 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: null };
          tmp60 = closure_130_4;
          obj3.productIdentifier = closure_130_4;
          obj22.dispatch(obj3);
          c6 = 2;
          c7 = 1;
        } else {
          c7 = 3;
          return { value: false, done: true };
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c5 = 1;
          if (closure_130_2) {
            const obj5 = { operation: closure_131_0(closure_131_3[42]).ACRequestOperations.REACTIVATE };
            const merged = Object.assign(closure_130_3);
            c6 = 4;
            c7 = 1;
            const obj6 = { value: closure_131_34(obj5), done: false };
            return obj6;
          } else {
            const obj7 = { operation: closure_131_0(closure_131_3[41]).APBRequestOperations.REACTIVATE };
            const merged1 = Object.assign(closure_130_3);
            c6 = 5;
            c7 = 1;
            let obj8 = { value: closure_131_36(obj7), done: false };
            return obj8;
          }
        }
      } else if (3 === tmp6) {
        c5 = 0;
        closure_130_9 = closure_4;
        let obj13 = closure_131_1(closure_131_3[23]);
        const obj9 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: closure_130_4 };
        obj13.dispatch(obj9);
        let str = "partner_subscription";
        if (closure_130_2) {
          str = "advanced_commerce";
        }
        closure_131_28(closure_130_9, str);
        c7 = 3;
        return { value: false, done: true };
      } else if (4 === tmp6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          requestJSONString = value.requestJSONString;
          c6 = 6;
          c7 = 1;
          const obj11 = { value: closure_131_30(closure_130_0, requestJSONString, closure_130_4, true), done: false };
          return obj11;
        }
      } else {
        if (5 === tmp6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj12 = { value, done: true };
            return obj12;
          }
        } else if (6 === tmp6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj13 = { value, done: true };
            return obj13;
          } else {
            closure_130_6 = value;
            purchaseResponse = closure_130_6.purchaseResponse;
            originalPurchase = closure_130_6.originalPurchase;
            const obj14 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "resubscribeGenericSubscription" };
            c6 = 7;
            c7 = 1;
            const obj15 = { value: closure_131_24(obj14), done: false };
            return obj15;
          }
        } else if (7 === tmp6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            obj1 = closure_131_0(closure_131_3[22]);
            const obj17 = { purchase: originalPurchase };
            c6 = 8;
            c7 = 1;
            const obj18 = { value: obj1.finishTransaction(obj17), done: false };
            return obj18;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
        obj8 = closure_131_1(closure_131_3[23]);
        const obj19 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: closure_130_4 };
        obj8.dispatch(obj19);
        c5 = 0;
        c7 = 3;
        return { value: true, done: true };
      }
    } catch (tmp68) {
      closure_4 = tmp68;
      if (tmp3 === c5) {
        c7 = tmp;
        throw tmp68;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_45 = async function _retryPendingPurchases(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    while (true) {
      c9 = 2;
      let tmp4 = c8;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp;
          closure_4 = tmp4;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          let purchaseResponse;
          let productIdentifier;
          closure_132_7 = undefined;
          closure_132_8 = undefined;
          let obj23 = IAPUtilsDefault;
          c8 = 1;
          c9 = 1;
          let obj1 = { value: obj23.restorePurchases({ fullRestore: false }), done: false };
          return obj1;
        }
      } else {
        if (1 === tmp4) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            closure_132_2 = value;
            closure_132_3 = [];
            if (0 === closure_132_2.length) {
              c9 = 3;
              return { value: true, done: true };
            } else {
              closure_3 = closure_132_2;
              importAll = closure_132_2[Symbol.iterator]();
            }
          }
        } else if (2 === tmp4) {
          c7 = 0;
          importAll.return();
          throw closure_1_6;
        } else {
          if (3 === tmp4) {
            c7 = 1;
            closure_132_9 = closure_1_6;
            let obj5 = closure_133_1(closure_133_3[15]);
            let obj3 = { product_id: null, transaction_id: null, error_code: null, error_message: null };
            obj3.product_id = productIdentifier;
            obj3.transaction_id = closure_132_7;
            let str;
            if (str != null) {
              str = str.toString();
            }
            obj3.error_code = str;
            obj3.error_message = closure_132_9.message;
            let trackResult = obj5.track(closure_133_17.APPLE_RETRY_PENDING_PURCHASE_FAILED, obj3);
            let arr = closure_132_3.push(closure_132_9);
          } else if (4 === tmp4) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              importAll.return();
              c9 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              let obj17 = closure_133_0(closure_133_3[22]);
              obj5 = { purchase: null };
              let obj6 = { productId: null, transactionId: null, transactionDate: null, transactionReceipt: null };
              obj6.productId = productIdentifier;
              obj6.transactionId = closure_132_7;
              obj6.transactionDate = purchaseResponse.transactionDate;
              obj6.transactionReceipt = purchaseResponse.transactionReceipt;
              obj5.purchase = obj6;
              c8 = 5;
              c9 = 1;
              let obj7 = { value: obj17.finishTransaction(obj5), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            importAll.return();
            c9 = 3;
            let obj8 = { value, done: true };
            return obj8;
          } else {
            obj = closure_133_1(closure_133_3[15]);
            let obj9 = { product_id: null, transaction_id: null };
            obj9.product_id = productIdentifier;
            obj9.transaction_id = closure_132_7;
            let trackResult1 = obj.track(closure_133_17.APPLE_RETRY_PENDING_PURCHASE_SUCCEEDED, obj9);
            c7 = 1;
          }
          c7 = 0;
        }
        if (importAll === undefined) {
          if (closure_132_3.length > 0) {
            let mapped = closure_132_3.map((message) => message.message);
            let _HermesInternal = HermesInternal;
            closure_132_8 = "Failed to retry pending purchases: " + mapped.join(", ");
            obj9 = closure_133_0(closure_133_3[17]);
            let _Error = Error;
            let tmp46 = new.target;
            let tmp47 = new.target;
            let error = new Error(closure_132_8);
            let obj10 = { tags: null };
            let obj11 = { pendingPurchaseFailures: null, totalPendingPurchases: null };
            let str2 = closure_132_3.length;
            obj11.pendingPurchaseFailures = str2.toString();
            let str3 = closure_132_2.length;
            obj11.totalPendingPurchases = str3.toString();
            obj10.tags = obj11;
            let result = obj9.captureBillingException(error, obj10);
            c9 = 3;
            return { value: false, done: true };
          } else {
            c9 = 3;
            return { value: true, done: true };
          }
        } else {
          closure_132_4 = tmp37;
          purchaseResponse = closure_132_4.purchaseResponse;
          productIdentifier = purchaseResponse.productIdentifier;
          let str7 = purchaseResponse.transactionIdentifier;
          closure_132_7 = str7.toString();
          c7 = 2;
          let obj20 = closure_133_1(closure_133_3[15]);
          let obj12 = { product_id: null, transaction_id: null };
          obj12.product_id = productIdentifier;
          obj12.transaction_id = closure_132_7;
          let trackResult2 = obj20.track(closure_133_17.APPLE_RETRY_PENDING_PURCHASE_STARTED, obj12);
          let obj13 = { encodedReceipt: null, retries: 3, presentmentCurrency: null, appStoreRegion: null, jwsRepresentation: null, source: "retryPendingPurchases" };
          obj13.encodedReceipt = purchaseResponse.transactionReceipt;
          obj13.presentmentCurrency = closure_132_0;
          obj13.appStoreRegion = closure_132_1;
          obj13.jwsRepresentation = purchaseResponse.jwsRepresentation;
          c8 = 4;
          c9 = 1;
          let obj14 = { value: closure_133_24(obj13), done: false };
          return obj14;
        }
      }
    }
  }
};
let closure_46 = async function _mobilePurchaseSKU(arg0, arg1) {
  let orderId = arg0;
  closure_1 = arg1;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  let iter = (async (arg0, value) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c9 = 2;
        switch (c8) {
          case 0:
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_5 = tmp3;
              closure_4 = tmp8;
              closure_132_0 = undefined;
              closure_132_1 = undefined;
              closure_132_2 = undefined;
              closure_132_3 = undefined;
              closure_132_4 = undefined;
              closure_132_5 = undefined;
              closure_132_6 = undefined;
              closure_132_7 = undefined;
              closure_132_8 = undefined;
              orderId = undefined;
              closure_132_10 = undefined;
              ({ requestIdentifier: closure_132_0, skuId: closure_132_1, currency: closure_132_2, countryCode: closure_132_3, analyticsLocations: closure_132_4, analyticsLoadId: closure_132_5, isGift: closure_132_6, giftInfoOptions: closure_132_7, isFreeForStaffSelfPurchase } = orderId);
              if (isFreeForStaffSelfPurchase === undefined) {
                isFreeForStaffSelfPurchase = true;
              }
              closure_132_8 = isFreeForStaffSelfPurchase;
              orderId = orderId.orderId;
              closure_132_10 = closure_1;
              closure_132_11 = undefined;
              closure_132_12 = undefined;
              closure_132_13 = undefined;
              let requestJSONString;
              closure_132_15 = undefined;
              let purchaseResponse;
              let originalPurchase;
              closure_132_18 = undefined;
              closure_132_19 = undefined;
              closure_132_20 = undefined;
              let currentUser;
              closure_132_22 = undefined;
              c8 = 1;
              c9 = 1;
              return { value: "PX_16", done: true };
            }
          break;
          case 1:
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj1 = { value, done: true };
              return obj1;
            } else if (closure_133_29()) {
              if (closure_133_40(closure_132_2)) {
                closure_132_11 = closure_133_38(closure_133_0(closure_133_3[42]).ACRequestOperations.CHARGE);
                let obj30 = closure_133_1(closure_133_3[23]);
                let obj2 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: closure_132_11 };
                c8 = 2;
                c9 = 1;
                const obj3 = { value: obj30.dispatch(obj2), done: false };
                return obj3;
              } else {
                let obj4 = { success: false, failureReason: closure_133_41.INVALID_CURRENCY };
                c9 = 3;
                const obj5 = { value: obj4, done: true };
                return obj5;
              }
            } else {
              const obj6 = { success: false, failureReason: closure_133_41.CANNOT_MAKE_REQUEST };
              c9 = 3;
              const obj7 = { value: obj6, done: true };
              return obj7;
            }
          break;
          case 2:
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              let obj8 = { value, done: true };
              return obj8;
            } else {
              let obj9 = { sku_id: closure_132_1, load_id: closure_132_5, location_stack: closure_132_4, payment_gateway: closure_133_20.APPLE_ADVANCED_COMMERCE };
              const result = closure_133_0(closure_133_3[45]).trackPaymentFlowStartedAnalyticsAndCTP(obj9);
              closure_132_12 = false;
              c7 = 1;
              c8 = 4;
              c9 = 1;
              const obj10 = {
                value: (function retryPendingPurchases(arg0, arg1) {
                            const self = this;
                            const apply = closure_1_45.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          })(closure_132_2, closure_132_3),
                done: false
              };
              return obj10;
            }
          break;
          case 3:
            c7 = 0;
            closure_132_23 = closure_6;
            let obj19 = closure_133_1(closure_133_3[23]);
            const obj11 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: closure_132_11 };
            obj19.dispatch(obj11);
            const billingError = new closure_133_0(closure_133_3[36]).BillingError(closure_132_23);
            closure_132_20 = billingError;
            currentUser = closure_133_13.getCurrentUser();
            if (null != currentUser) {
              if (currentUser.isStaff()) {
                if (closure_132_8) {
                  if (closure_132_20.code === closure_133_0(closure_133_3[38]).ErrorCodes.BILLING_CANNOT_CHARGE_ZERO_AMOUNT) {
                    purchaseSKU = closure_132_10;
                    if (closure_132_10 == null) {
                      purchaseSKU = closure_133_0(closure_133_3[46]).purchaseSKU;
                    }
                    closure_132_22 = purchaseSKU;
                    c7 = 2;
                    const obj12 = { countryCode: closure_132_3, expectedAmount: 0, expectedCurrency: closure_133_18.USD, loadId: null, isGift: null, giftInfoOptions: null };
                    let obj22 = closure_133_0(closure_133_3[47]);
                    obj12.loadId = obj22.v4();
                    obj12.isGift = closure_132_6;
                    obj12.giftInfoOptions = closure_132_7;
                    c8 = 10;
                    c9 = 1;
                    const obj13 = { value: closure_132_22("collectibles", closure_132_1, obj12), done: false };
                    return obj13;
                  }
                }
              }
            }
            let tmp90 = null == orderId;
            if (!tmp90) {
              tmp90 = closure_132_12;
            }
            closure_133_28(closure_132_23, "collectibles", tmp90);
            if (closure_132_12) {
              let POST_PURCHASE_FAILED = closure_133_41.POST_PURCHASE_FAILED;
            } else {
              POST_PURCHASE_FAILED = closure_133_27(closure_132_23);
            }
            { success: false, failureReason: null }[1] = POST_PURCHASE_FAILED;
            c9 = 3;
          break;
          case 4:
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              const obj15 = { sku_id: closure_132_1, request_identifier: closure_132_0, currency: closure_132_2, country_code: closure_132_3, is_gift: closure_132_6, gift_info_options: closure_132_7, order_id: orderId };
              closure_132_13 = obj15;
              const obj16 = { operation: closure_133_0(closure_133_3[42]).ACRequestOperations.CHARGE };
              const merged = Object.assign(closure_132_13);
              c8 = 5;
              c9 = 1;
              const obj17 = { value: closure_133_34(obj16), done: false };
              return obj17;
            }
          break;
          case 5:
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj18 = { value, done: true };
              return obj18;
            } else {
              requestJSONString = value.requestJSONString;
              c8 = 6;
              c9 = 1;
              obj19 = { value: closure_133_30(closure_132_0, requestJSONString, closure_132_11, true), done: false };
              return obj19;
            }
          break;
          case 6:
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj20 = { value, done: true };
              return obj20;
            } else {
              closure_132_15 = value;
              purchaseResponse = closure_132_15.purchaseResponse;
              originalPurchase = closure_132_15.originalPurchase;
              closure_132_12 = true;
              const jwsRepresentation = purchaseResponse.jwsRepresentation;
              transactionReceipt = jwsRepresentation;
              if (jwsRepresentation == null) {
                transactionReceipt = purchaseResponse.transactionReceipt;
              }
              closure_132_18 = transactionReceipt;
              obj8 = closure_133_1(closure_133_3[13]);
              closure_132_19 = obj8.v3(closure_132_18);
              if (closure_132_6) {
                obj9 = closure_133_1(closure_133_3[23]);
                const obj21 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key: closure_132_19, giftOptions: null };
                obj22 = {};
                const merged1 = Object.assign(closure_132_7);
                obj21.giftOptions = obj22;
                obj9.dispatch(obj21);
              }
              const obj23 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, presentmentCurrency: closure_132_2, appStoreRegion: closure_132_3, giftInfoOptions: closure_132_7, isGift: closure_132_6, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "mobilePurchaseSKU", orderId };
              c8 = 7;
              c9 = 1;
              const obj24 = { value: closure_133_24(obj23), done: false };
              return obj24;
            }
          break;
          case 7:
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj25 = { value, done: true };
              return obj25;
            } else {
              if (closure_132_6) {
                obj2 = closure_133_1(closure_133_3[23]);
                const obj26 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: closure_132_19 };
                obj2.dispatch(obj26);
              }
              obj4 = closure_133_0(closure_133_3[22]);
              const obj27 = { purchase: originalPurchase };
              c8 = 8;
              c9 = 1;
              const obj28 = { value: obj4.finishTransaction(obj27), done: false };
              return obj28;
            }
          break;
          case 8:
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj29 = { value, done: true };
              return obj29;
            } else {
              obj30 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: closure_132_11 };
              closure_133_1(closure_133_3[23]).dispatch(obj30);
              const obj41 = closure_133_1(closure_133_3[23]);
              const obj31 = { sku_id: closure_132_1, load_id: closure_132_5, location_stack: closure_132_4, payment_gateway: closure_133_20.APPLE_ADVANCED_COMMERCE, is_gift: closure_132_6 };
              closure_133_1(closure_133_3[15]).track(closure_133_17.PAYMENT_FLOW_COMPLETED, obj31);
              const obj32 = { success: true, failureReason: closure_133_41.NONE };
              c7 = 0;
              c9 = 3;
              obj = { value: obj32, done: true };
              return obj;
            }
          break;
          case 9:
            c7 = 0;
            closure_132_24 = closure_6;
            if (closure_132_24.code === closure_133_0(closure_133_3[38]).ErrorCodes.BILLING_PURCHASE_REQUEST_INVALID) {
              const result1 = closure_133_0(closure_133_3[17]).captureBillingException(closure_132_24, {});
              const obj40 = closure_133_0(closure_133_3[17]);
            }
          break;
          default:
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj33 = { value, done: true };
              return obj33;
            } else {
              const obj34 = { success: true, failureReason: closure_133_41.NONE };
              c7 = 0;
              c9 = 3;
              const obj35 = { value: obj34, done: true };
              return obj35;
            }
        }
      } catch (tmp136) {
        closure_6 = tmp136;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp136;
        } else if (tmp === tmp138) {
          c8 = tmp2;
        } else {
          c8 = tmp5;
        }
      }
    }
  })();
  iter.next();
  return iter;
};
let closure_47 = async function _migrateToACOM() {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else if (null == currentUser.getCurrentUser()) {
          c2 = 3;
          return { value: false, done: true };
        } else if (canMakeIAPRequest()) {
          let obj1 = activeGuildSubscriptions;
          activeGuildSubscriptions = activeGuildSubscriptions.getActiveGuildSubscriptions();
          _require = activeGuildSubscriptions;
          if (activeGuildSubscriptions == null) {
            _require = [];
          }
          const found = _require.filter((paymentGateway) => paymentGateway.paymentGateway === constants2.APPLE_PARTNER);
          const subscriptions = obj1.getSubscriptions();
          closure_1 = subscriptions;
          if (subscriptions == null) {
            closure_1 = [];
          }
          const values = Object.values(closure_1);
          const found1 = values.filter((paymentGateway) => {
            let tmp = paymentGateway.paymentGateway === constants2.APPLE;
            if (tmp) {
              tmp = paymentGateway.type === constants.PREMIUM;
            }
            return tmp;
          });
          const NitroACOMSubscriptionExperiment = ACOMExperiments.NitroACOMSubscriptionExperiment;
          let enabled = found1.length > 0;
          if (enabled) {
            enabled = NitroACOMSubscriptionExperiment.getConfig({ location: "migrateToACOM" }).enabled;
          }
          if (0 === found.length) {
            if (false === enabled) {
              c2 = 3;
              return { value: false, done: true };
            }
          }
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.BILLING_ACOM_SUBSCRIPTION_MIGRATION, rejectWithError: true, body: null };
          obj1 = { migrate_premium: enabled };
          request.body = obj1;
          c3 = 2;
          c2 = 1;
          const obj2 = { value: HTTP.post(request), done: false };
          return obj2;
        } else {
          c2 = 3;
          return { value: false, done: true };
        }
      } else if (1 === tmp6) {
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
    } catch (tmp14) {
      if (tmp3 === c4) {
        c2 = tmp2;
        throw tmp14;
      } else {
        c3 = tmp;
      }
    }
  }
};
let closure_4 = ["items", "country_code"];
let closure_5 = ["subscription_items"];
let closure_6 = ["sku_id", "country_code", "is_gift", "gift_info_options"];
const PremiumPlanPurchasedStore = fn(7421);
({ setPaymentSuccess: closure_11, showOldPaymentFlowSuccess: closure_12 } = PremiumPlanPurchasedStore);
const Constants = fn(1074);
({ SubscriptionTypes: closure_16, AnalyticEvents: closure_17, CurrencyCodes: closure_18, Endpoints: closure_19, StoreKitErrors } = Constants);
const PaymentGateways = fn(1085).PaymentGateways;
const jsx = fn(21).jsx;
const localAppleReceiptHash = "localAppleReceiptHash";
const BILLING = "BILLING";
new LoggerDefault("BillingActionCreators.tsx");
let SubscriptionPurchaseFailureReason = {
  applyAppleReceipt,
  fetchMostRecentSubscription: fn(4884).fetchMostRecentSubscription,
  fetchIpCountryCode: fn(4884).fetchIpCountryCode,
  init() {
    const self = this;
    return (async () => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              c4 = 1;
              closure_129_0 = null;
              if (obj13.isIOS()) {
                c4 = 2;
                c5 = 3;
                c6 = 1;
                const obj1 = { value: closure_1(tmp38[20]).fetchStoreFront(), done: false };
                return obj1;
              }
              obj13 = _undefined(tmp38[19]);
            }
          } else {
            if (1 === tmp8) {
              c4 = 0;
              c6 = 3;
            } else if (2 === tmp8) {
              c4 = 1;
              closure_129_0 = null;
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj2 = { value, done: true };
                return obj2;
              } else {
                closure_129_0 = value;
                c4 = 1;
              }
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c5 = 5;
                c6 = 1;
                let obj4 = { value: closure_130_0.restoreAndApplyPurchases(), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
          if (null != closure_129_0) {
            let obj5 = _undefined(tmp38[21]);
            let premiumSubscriptionPlans = obj5.fetchPremiumSubscriptionPlans(closure_129_0.country, undefined, undefined, constants.APPLE_ADVANCED_COMMERCE);
          } else {
            obj4 = _undefined(tmp38[21]);
            premiumSubscriptionPlans = obj4.fetchPremiumSubscriptionPlans();
          }
          const items = [premiumSubscriptionPlans, , ];
          _undefined = closure_129_0;
          if (closure_129_0 == null) {
            _undefined = undefined;
          }
          items[1] = closure_130_0.loadProducts(_undefined);
          items[2] = _undefined(tmp38[18]).fetchSubscriptions();
          c5 = 4;
          c6 = 1;
          obj5 = { value: Promise.all(items), done: false };
          return obj5;
        } catch (tmp38) {
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp38;
          } else if (tmp2 === tmp40) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  },
  connectGenericIap() {
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              closure_128_0 = genericIapConnected.isGenericIapConnected();
              if (closure_128_0) {
                c5 = 3;
                const obj1 = { value: closure_128_0, done: true };
                return obj1;
              } else {
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj2 = { value: _mod11048.initConnection(), done: false };
                return obj2;
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = closure_2;
            let obj4 = closure_129_0(closure_129_3[17]);
            const result = obj4.captureBillingException(closure_128_1);
            let obj5 = closure_129_1(closure_129_3[23]);
            obj5.dispatch({ type: "GENERIC_IAP_INIT_CONNECTION_FAILED" });
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = value;
            obj = closure_129_1(closure_129_3[23]);
            obj4 = { type: "GENERIC_IAP_INIT_CONNECTION", connected: closure_128_0 };
            obj.dispatch(obj4);
            c3 = 0;
            c5 = 3;
            obj5 = { value: closure_128_0, done: true };
            return obj5;
          }
        } catch (tmp27) {
          closure_2 = tmp27;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp27;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  disconnectGenericIap() {
    DispatcherDefault.dispatch({ type: "GENERIC_IAP_END_CONNECTION" });
  },
  loadProducts(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              c4 = 1;
              closure_1(tmp45[23]).dispatch({ type: "IAP_LOAD_PRODUCTS_START" });
              const obj16 = closure_1(tmp45[23]);
              c5 = 2;
              c6 = 1;
              let obj1 = { value: closure_1(tmp45[20]).loadProducts(), done: false };
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              closure_129_3 = tmp45;
              closure_1(tmp45[23]).dispatch({ type: "IAP_LOAD_PRODUCTS_FAILED" });
              const obj11 = closure_1(tmp45[23]);
              const result = closure_0(tmp45[17]).captureBillingException(closure_129_3);
              c6 = 3;
              const obj12 = closure_0(tmp45[17]);
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  closure_129_1 = value;
                  closure_129_2 = closure_1(tmp45[24]).filter(closure_129_1, (identifier) => {
                    const GenericProductIds = closure_1_0(closure_1_3[25]).GenericProductIds;
                    return GenericProductIds.includes(identifier.identifier);
                  });
                  if (null != closure_130_0) {
                    let tmp8 = closure_130_0;
                  }
                  const arr = closure_1(tmp45[24]);
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
                closure_0 = value;
                if (value == null) {
                  closure_0 = { country: "US", currency: "usd" };
                }
                tmp8 = closure_0;
              }
              closure_129_0 = tmp8;
              obj1 = closure_1(tmp45[23]);
              let obj3 = { type: "IAP_LOAD_PRODUCTS", products: closure_129_1 };
              obj1.dispatch(obj3);
              if (closure_129_2.length === closure_0(tmp45[25]).GenericProductIds.length) {
                let obj5 = closure_1(tmp45[23]);
                const obj4 = { type: "IAP_LOAD_GENERIC_PRODUCTS", products: closure_129_2, storeFront: closure_129_0 };
                obj5.dispatch(obj4);
              } else {
                obj3 = closure_1(tmp45[23]);
                obj5 = { type: "GENERIC_IAP_SET_STORE_FRONT", storeFront: closure_129_0 };
                obj3.dispatch(obj5);
              }
              c4 = 0;
            }
            c5 = 3;
            c6 = 1;
            const obj6 = { value: closure_1(tmp45[20]).fetchStoreFront(), done: false };
            return obj6;
          }
        } catch (tmp45) {
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp45;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  },
  createSubscription(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp9 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          switch (c5) {
            case 0:
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_2 = tmp4;
                closure_129_0 = undefined;
                closure_129_1 = undefined;
                closure_129_2 = undefined;
                closure_129_3 = undefined;
                closure_129_4 = undefined;
                closure_129_5 = undefined;
                closure_129_6 = undefined;
                closure_129_7 = undefined;
                closure_129_8 = undefined;
                let currentUser2;
                closure_129_10 = undefined;
                closure_129_11 = undefined;
                closure_129_12 = undefined;
                closure_129_13 = undefined;
                closure_129_14 = undefined;
                closure_129_15 = undefined;
                let product;
                closure_129_17 = undefined;
                closure_129_18 = undefined;
                let premiumTypeSubscription;
                const productId = transactionReceipt.productId;
                closure_129_0 = productId;
                ({ isGift: closure_129_1, giftInfoOptions: closure_129_2, baseAnalyticsData: closure_129_3, applicationId: closure_129_4, offerId: closure_129_5, onPurchaseComplete: closure_129_6, onPurchaseError: closure_129_7, orderId: closure_129_8 } = transactionReceipt);
                if (!IAPStore.isBusy()) {
                  if (obj29.getIsPaymentsBlocked()) {
                    tmp7(tmp134[27])();
                  } else {
                    const obj1 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: productId };
                    c5 = 1;
                    c6 = 1;
                    let obj2 = { value: tmp7(tmp134[23]).dispatch(obj1), done: false };
                    return obj2;
                  }
                  obj29 = transactionReceipt(tmp134[26]);
                }
                c6 = 3;
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  c4 = 1;
                  let obj25 = tmp7(tmp134[20]);
                  c5 = 3;
                  c6 = 1;
                  const obj4 = { value: obj25.canMakePayments(), done: false };
                  return obj4;
                }
              }
            break;
            case 1:
            break;
            case 2:
              c4 = 0;
              closure_129_21 = tmp134;
              let obj23 = tmp7(tmp134[23]);
              let obj5 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: closure_129_0 };
              obj23.dispatch(obj5);
              if (closure_129_7 != null) {
                tmp109(closure_129_21);
              }
              handlePurchaseException(closure_129_21, "subscription");
            break;
            case 3:
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else if (SubscriptionStore.hasFetchedSubscriptions()) {
                currentUser2 = currentUser.getCurrentUser();
                if (null == currentUser2) {
                  const _Error2 = Error;
                  const intl2 = transactionReceipt(tmp134[28]).intl;
                  const error = new Error(intl2.string(transactionReceipt(tmp134[28]).t.PjfUXe));
                  throw error;
                } else {
                  closure_129_10 = transactionReceipt(tmp134[20]).convertToUUID(currentUser2.id);
                  closure_129_11 = undefined;
                  if (null != closure_129_5) {
                    c5 = 5;
                    c6 = 1;
                    const obj7 = {
                      value: (function getTrialOfferSignature() {
                                      const self = this;
                                      const apply = closure_1_25.apply;
                                      if (typeof apply === "unknown") {
                                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                      } else {
                                        applyArgumentsResult = apply(self, arguments);
                                      }
                                      return applyArgumentsResult;
                                    })(closure_129_0, closure_129_5, closure_129_10),
                      done: false
                    };
                    return obj7;
                  } else {
                    let obj20 = tmp7(tmp134[20]);
                    obj20.purchaseProduct(closure_129_0, closure_129_11, closure_129_10);
                    c5 = 6;
                    c6 = 1;
                    c4 = 0;
                    c6 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
                  }
                  const obj42 = transactionReceipt(tmp134[20]);
                }
              } else {
                let obj18 = transactionReceipt(tmp134[18]);
                c5 = 4;
                c6 = 1;
                const obj9 = { value: obj18.fetchSubscriptions(), done: false };
                return obj9;
              }
            break;
            case 4:
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                let obj10 = { value, done: true };
                return obj10;
              } else {
                const _Error = Error;
                const intl = transactionReceipt(tmp134[28]).intl;
                const error1 = new Error(intl.string(transactionReceipt(tmp134[28]).t.PjfUXe));
                throw error1;
              }
            break;
            case 5:
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_129_12 = value;
                if (null != closure_129_12) {
                  let obj11 = { identifier: closure_129_5, keyIdentifier: closure_129_12.key_id, nonce: closure_129_12.nonce, signature: closure_129_12.signature, timestamp: null };
                  const _Number = Number;
                  obj11.timestamp = Number(closure_129_12.timestamp);
                  closure_129_11 = obj11;
                }
              }
            break;
            case 6:
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                closure_129_13 = value;
                const jwsRepresentation = closure_129_13.jwsRepresentation;
                transactionReceipt = jwsRepresentation;
                if (jwsRepresentation == null) {
                  transactionReceipt = closure_129_13.transactionReceipt;
                }
                closure_129_14 = transactionReceipt;
                obj10 = tmp7(tmp134[13]);
                closure_129_15 = obj10.v3(closure_129_14);
                obj11 = tmp7(tmp134[23]);
                const obj13 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key: closure_129_15, giftOptions: null };
                const obj14 = {};
                let merged = Object.assign(closure_129_2);
                obj13.giftOptions = obj14;
                obj11.dispatch(obj13);
                let tmp61;
                if (closure_129_6 != null) {
                  tmp61 = closure_129_6();
                }
                c5 = 7;
                c6 = 1;
                const obj15 = { value: tmp61, done: false };
                return obj15;
              }
            break;
            case 7:
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                product = IAPStore.getProduct(closure_129_0);
                let price;
                if (product != null) {
                  price = product.price;
                }
                closure_129_17 = price;
                let currencyCode;
                if (product != null) {
                  currencyCode = product.currencyCode;
                }
                closure_129_18 = currencyCode;
                const obj17 = { encodedReceipt: closure_129_13.transactionReceipt, retries: 3, presentmentCurrency: closure_129_18, presentmentAmount: closure_129_17, appStoreRegion: null, giftInfoOptions: null, jwsRepresentation: null, source: "createSubscription", orderId: null };
                let countryCode;
                if (product != null) {
                  countryCode = product.countryCode;
                }
                obj17.appStoreRegion = countryCode;
                obj17.giftInfoOptions = closure_129_2;
                obj17.jwsRepresentation = closure_129_13.jwsRepresentation;
                obj17.orderId = closure_129_8;
                c5 = 9;
                c6 = 1;
                obj18 = { value: applyAppleReceipt(obj17), done: false };
                return obj18;
              }
            break;
            case 8:
              c4 = 1;
              closure_129_20 = tmp134;
              obj5 = transactionReceipt(tmp134[17]);
              const obj19 = { tags: { source: "createSubscriptionFetchSubscriptions" } };
              const result = obj5.captureBillingException(closure_129_20, obj19);
              premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
              if (null != premiumTypeSubscription) {
                closure_1_12(() => {
                  closure_1(paths[30]);
                  obj = {
                    importer() {
                      return transactionReceipt(paths[32])(paths[31], paths.paths).then((result) => {
                        closure_0 = result.default;
                        return () => { ... };
                      });
                    }
                  };
                  obj.openLazy(obj);
                });
              }
              c4 = 0;
            break;
            case 9:
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                obj20 = { value, done: true };
                return obj20;
              } else {
                closure_1_11();
                const obj21 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: closure_129_15 };
                tmp7(tmp134[23]).dispatch(obj21);
                const obj36 = tmp7(tmp134[23]);
                const obj38 = tmp7(tmp134[15]);
                const obj22 = { subscription_plan_gateway_plan_id: closure_129_0, price: closure_129_17, regular_price: closure_129_17, currency: null, application_id: null };
                let formatted;
                if (closure_129_18 != null) {
                  formatted = str3.toLowerCase();
                }
                obj22.currency = formatted;
                obj22.application_id = closure_129_4;
                obj38.track(constants.PAYMENT_FLOW_COMPLETED, transactionReceipt(tmp134[29]).getPaymentFlowCompletedAnalyticsFields(closure_129_3, obj22));
                obj = tmp7(tmp134[23]);
                obj23 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: closure_129_0 };
                obj.dispatch(obj23);
                if (!closure_129_1) {
                  c4 = 2;
                  obj2 = transactionReceipt(tmp134[18]);
                  c5 = 10;
                  c6 = 1;
                  const obj24 = { value: obj2.fetchSubscriptions(), done: false };
                  return obj24;
                }
                const obj39 = transactionReceipt(tmp134[29]);
                str3 = closure_129_18;
              }
            break;
            default:
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                obj25 = { value, done: true };
                return obj25;
              } else {
                c4 = 1;
              }
          }
        } catch (tmp134) {
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp134;
          } else if (tmp2 === tmp136) {
            c5 = tmp;
          } else {
            c5 = tmp6;
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
    const self = this;
    return (async () => {
      if (c11 === 2) {
        c11 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp9 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c11 = 2;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_7 = tmp4;
              closure_6 = tmp10;
              closure_134_0 = undefined;
              closure_134_1 = undefined;
              closure_134_2 = undefined;
              closure_134_3 = undefined;
              closure_134_4 = undefined;
              closure_134_5 = undefined;
              if (busy.isBusy()) {
                c11 = 3;
                let obj1 = { value: [], done: true };
                return obj1;
              } else {
                _self(iter2[23]).dispatch({ type: "IAP_RESTORE_PURCHASES_START" });
                c8 = 2;
                c10 = 3;
                c11 = 1;
                let obj2 = { value: self.loadProducts(), done: false };
                return obj2;
              }
            }
          } else if (1 === tmp10) {
            c8 = 0;
            _self(iter2[23]).dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
            throw closure_9;
          } else if (2 === tmp10) {
            c8 = 1;
            closure_134_6 = closure_9;
            let result = closure_0(iter2[17]).captureBillingException(closure_134_6);
            throw closure_134_6;
          } else if (3 === tmp10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              _self(iter2[23]).dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
              c11 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              let obj4 = { fullRestore: closure_135_0 };
              c10 = 4;
              c11 = 1;
              let obj5 = { value: _self(iter2[20]).restorePurchases(obj4), done: false };
              return obj5;
            }
          } else {
            if (4 === tmp10) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 0;
                let obj11 = _self(iter2[23]);
                obj11.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                c11 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_134_0 = value;
                if (0 === closure_134_0.length) {
                  c8 = 0;
                  let obj9 = _self(iter2[23]);
                  obj9.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                  c11 = 3;
                  let obj7 = { value: [], done: true };
                  return obj7;
                } else {
                  const obj27 = _self(iter2[24])(closure_134_0);
                  closure_134_1 = _self(iter2[24])(closure_134_0).uniqBy((purchaseResponse) => {
                    let originalTransactionIdentifier = purchaseResponse.purchaseResponse.jwsRepresentation;
                    if (originalTransactionIdentifier == null) {
                      originalTransactionIdentifier = purchaseResponse.purchaseResponse.originalTransactionIdentifier;
                    }
                    return originalTransactionIdentifier;
                  }).value();
                  closure_134_2 = [];
                  closure_134_3 = [];
                  closure_134_4 = function _loop(skipDupCheck) {
                    c6 = 0;
                    c7 = 0;
                    c5 = 0;
                    return (function* _loop(arg0) {
                      closure_130_0 = skipDupCheck;
                      const purchaseResponse = skipDupCheck.purchaseResponse;
                      closure_130_1 = purchaseResponse;
                      product = product.getProduct(purchaseResponse.productIdentifier);
                      const jwsRepresentation = purchaseResponse.jwsRepresentation;
                      transactionReceipt = jwsRepresentation;
                      if (jwsRepresentation == null) {
                        transactionReceipt = purchaseResponse.transactionReceipt;
                      }
                      let obj1 = closure_2_1(1241);
                      const v3Result = obj1.v3(transactionReceipt);
                      closure_130_2 = v3Result;
                      giftOptionsForKey = giftOptionsForKey.getGiftOptionsForKey(v3Result);
                      obj1 = { jwsRepresentation: null, encodedReceipt: null, presentmentCurrency: null, presentmentAmount: null, appStoreRegion: null, giftInfoOptions: null, source: "restoreSubscription", skipDupCheck: null };
                      ({ jwsRepresentation: obj3.jwsRepresentation, transactionReceipt: obj3.encodedReceipt } = purchaseResponse);
                      if (product != null) {
                        const currencyCode = product.currencyCode;
                      }
                      obj1.presentmentCurrency = currencyCode;
                      if (product != null) {
                        const price = product.price;
                      }
                      obj1.presentmentAmount = price;
                      if (product != null) {
                        const countryCode = product.countryCode;
                      }
                      obj1.appStoreRegion = countryCode;
                      if (giftOptionsForKey != null) {
                        const gift_style = giftOptionsForKey.gift_style;
                      }
                      const obj2 = { gift_style, reward_sku_ids: null };
                      if (giftOptionsForKey != null) {
                        const reward_sku_ids = giftOptionsForKey.reward_sku_ids;
                      }
                      obj2.reward_sku_ids = reward_sku_ids;
                      obj1.giftInfoOptions = obj2;
                      obj1.skipDupCheck = skipDupCheck;
                      yield closure_2_24(obj1).then((result) => {
                        closure_0(dependencyMap[22]);
                        let purchase = { purchase: null };
                        purchase = { productId: closure_1_1.productIdentifier, transactionDate: closure_1_1.transactionDate, transactionReceipt: closure_1_1.transactionReceipt, transactionId: closure_1_1.transactionIdentifier.toString() };
                        purchase.purchase = purchase;
                        purchase.finishTransaction(purchase);
                        if (null != result) {
                          const obj1 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key };
                          transactionReceipt(dependencyMap[23]).dispatch(obj1);
                          const obj4 = transactionReceipt(dependencyMap[23]);
                        }
                        let tmp6 = null;
                        if (null != result) {
                          tmp6 = skipDupCheck;
                        }
                        return tmp6;
                      });
                      if (1 === tmp7) {
                        c5 = 0;
                        closure_130_3 = closure_4;
                        closure_131_3.push(closure_130_3);
                        c7 = 3;
                      } else if (arg0 === 1) {
                        c7 = 3;
                        throw value;
                      } else if (arg0 !== 2) {
                        if (null != value) {
                          closure_131_2.push(closure_130_1);
                        }
                        c5 = 0;
                      }
                      return value;
                    })();
                  };
                  _self = closure_134_1;
                  _self = closure_134_1;
                  closure_0 = closure_134_1[Symbol.iterator]();
                  if (closure_0 === undefined) {
                    if (closure_134_2.length > 0) {
                      obj7 = closure_0(iter2[18]);
                      c10 = 8;
                      c11 = 1;
                      const obj8 = { value: obj7.fetchSubscriptions(), done: false };
                      return obj8;
                    } else if (closure_134_3.length > 0) {
                      const item = closure_134_3.forEach((item) => {
                        const result = closure_1_0(4233).captureBillingException(item);
                      });
                      const _Error = Error;
                      const error = new Error("There were some errors while trying to restore");
                      throw error;
                    } else {
                      c8 = 0;
                      obj5 = _self(iter2[23]);
                      obj5.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                      c11 = 3;
                      obj9 = { value: closure_134_2, done: true };
                      return obj9;
                    }
                  } else {
                    c8 = 3;
                    closure_134_5 = tmp40;
                    const iter5 = closure_134_4(closure_134_5)[tmp109.iterator]();
                    HermesBuiltin.ensureObject("iterator is not an object");
                    const next = iter5.next;
                    closure_2 = undefined;
                    const tmp130 = closure_134_4(closure_134_5);
                  }
                  const iter4 = _self(iter2[24])(closure_134_0).uniqBy((purchaseResponse) => {
                    let originalTransactionIdentifier = purchaseResponse.purchaseResponse.jwsRepresentation;
                    if (originalTransactionIdentifier == null) {
                      originalTransactionIdentifier = purchaseResponse.purchaseResponse.originalTransactionIdentifier;
                    }
                    return originalTransactionIdentifier;
                  });
                }
              }
            } else if (5 === tmp10) {
              c8 = 2;
              closure_0.return();
              throw closure_9;
            } else if (6 === tmp10) {
              c8 = 4;
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else {
                closure_2 = value;
                if (arg0 === 2) {
                  closure_2 = value;
                  c8 = 3;
                  const method = HermesBuiltin.getMethod("return");
                  if (method === undefined) {
                    c8 = 2;
                    closure_0.return();
                    c8 = 0;
                    obj3 = _self(iter2[23]);
                    obj3.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                    c11 = 3;
                    const obj10 = { value, done: true };
                    return obj10;
                  } else {
                    const iter3 = method(closure_2);
                    HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    if (iter3.done) {
                      c8 = 2;
                      closure_0.return();
                      c8 = 0;
                      obj1 = _self(iter2[23]);
                      obj1.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                      c11 = 3;
                      obj11 = { value: iter3.value, done: true };
                      return obj11;
                    } else {
                      c10 = 6;
                      c11 = 1;
                      return iter3;
                    }
                  }
                } else {
                  c8 = 3;
                  const tmp22 = value;
                }
              }
            } else if (7 === tmp10) {
              c8 = 3;
              const method1 = HermesBuiltin.getMethod("throw");
              if (method1 === undefined) {
                const method2 = HermesBuiltin.getMethod("return");
                if (method2 !== undefined) {
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                }
                throw new TypeError("yield* delegate must have a .throw() method");
              } else {
                const iter = method1(tmp12);
                HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                if (iter.done) {
                  iter2 = iter;
                  value = iter2.value;
                  c8 = 2;
                } else {
                  c10 = 6;
                  c11 = 1;
                  return iter;
                }
              }
              tmp12 = closure_9;
            } else if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              _self(iter2[23]).dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
              c11 = 3;
              obj = { value, done: true };
              return obj;
            }
            iter2 = next(tmp22);
            HermesBuiltin.ensureObject("iterator.next() did not return an object");
            if (!iter2.done) {
              c10 = 6;
              c11 = 1;
              return iter2;
            }
          }
        } catch (tmp101) {
          closure_9 = tmp101;
          if (tmp5 === c8) {
            c11 = tmp3;
            throw tmp101;
          } else if (tmp2 === tmp103) {
            c10 = tmp2;
          } else if (tmp === tmp103) {
            c10 = tmp;
          } else if (tmp3 === tmp103) {
            c10 = tmp7;
          } else {
            c10 = tmp6;
          }
        }
      }
    })();
  }
};
let items = [fn(11048).ErrorCode.E_USER_CANCELLED, StoreKitErrors.PAYMENT_CANCELED];
const set = new Set(items);
SubscriptionPurchaseFailureReason = { NONE: "none", CANNOT_MAKE_REQUEST: "cannot_make_request", INVALID_CURRENCY: "invalid_currency", PURCHASE_INCOMPLETE: "purchase_incomplete", USER_CANCELLED: "user_cancelled", POST_PURCHASE_FAILED: "post_purchase_failed" };
const size = fn(2);
let result = size.fileFinishedImporting("actions/native/BillingActionCreators.tsx");

export default SubscriptionPurchaseFailureReason;
export { getIAPJWTRequestData };
export { updateAppleSubscription };
export const cancelGenericSubscription = function cancelGenericSubscription(requestIdentifier, subscriptionId, arg2) {
  const self = this;
  const apply = closure_39.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { isValidCurrency };
export { SubscriptionPurchaseFailureReason };
export const createGenericSubscription = function createGenericSubscription(arg0) {
  const self = this;
  const apply = closure_42.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const modifyGenericSubscription = function modifyGenericSubscription(arg0) {
  const self = this;
  const apply = closure_43.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resubscribeGenericSubscription = function resubscribeGenericSubscription(arg0, isACOM) {
  const self = this;
  const apply = closure_44.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const mobilePurchaseSKU = function mobilePurchaseSKU(arg0, arg1) {
  const self = this;
  const apply = closure_46.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const migrateToACOM = function migrateToACOM() {
  const self = this;
  const apply = closure_47.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};