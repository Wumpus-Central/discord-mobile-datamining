// === Module 7173: applyAppleReceipt ===

// Module 7173 (applyAppleReceipt)
import timestampDefault from "timestamp" /* 3 */;
import noopAll from "noop" /* 19 */;
import sendRequest from "sendRequest" /* 527 */;
import Storage2 from "Storage" /* 592 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1214 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4376 */;
import _modDef4858 from "module_4858" /* 4858 */;
import SubscriptionPlans from "SubscriptionPlans" /* 6095 */;
import useBlockedPaymentsConfig from "useBlockedPaymentsConfig" /* 7171 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 8493 */;
import isSpendingLimitError from "isSpendingLimitError" /* 10703 */;
import getUnderlyingIOSExceptionRecursivelyAll from "getUnderlyingIOSExceptionRecursively" /* 13184 */;
import APBRequestOperations from "APBRequestOperations" /* 13186 */;
import closure_7 from "_objectWithoutProperties" /* 109 */;
import closure_8 from "asyncGeneratorStep" /* 5 */;
import closure_9 from "isGenericIapConnected" /* 6094 */;
import closure_10 from "initialize" /* 7174 */;
import usePremiumPlanPurchasedStore from "usePremiumPlanPurchasedStore" /* 7175 */;
import closure_13 from "mergeGuildAvatar" /* 1921 */;
import closure_14 from "reset" /* 4145 */;
import closure_15 from "updateProduct" /* 6092 */;
import ME from "ME" /* 673 */;
import { PaymentGateways } from "sum" /* 502 */;
import { jsx } from "jsxProd" /* 21 */;
import set from "set" /* 2 */;

require = arg1;
function applyAppleReceipt(arg0) {
  ({ encodedReceipt, entitlementSkuId, giftInfoOptions, isGift, jwsRepresentation, jwsRepresentations, source } = arg0);
  ({ presentmentCurrency, presentmentAmount, appStoreRegion, retries, skipDupCheck, orderId } = arg0);
  if (null != jwsRepresentations) {
    if (null != jwsRepresentation) {
      const _Error = Error;
      error = new Error("Can pass either 'jwsRepresentation' or 'jwsRepresentations'.  Not both");
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
  require = v3Result;
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
    obj = { source: null, sku_id: null };
    obj[0] = source;
    obj[1] = entitlementSkuId;
    expandEventPropertiesDefault.track(constants.GIFT_INFO_OPTIONS_MISSING, obj);
    const tmp2Result = expandEventPropertiesDefault;
  }
  const HTTP = sendRequest.HTTP;
  obj = { url: constants2.BILLING_APPLY_APPLE_RECEIPT, body: { encoded_receipt: encodedReceipt, entitlement_sku_id: entitlementSkuId, presentment_currency: presentmentCurrency, presentment_amount: presentmentAmount, app_store_region: appStoreRegion, gift_info_options: giftInfoOptions, is_gift: isGift, source, jws_representations: jwsRepresentations, order_id: orderId }, retries, oldFormErrors: true, rejectWithError: true };
  const postResult = HTTP.post(obj);
  const tmp2 = importDefault;
  const tmp5 = require;
  resolved = HTTP.post(obj).then((arg0) => {
    const Storage = v3Result(closure_1_3[14]).Storage;
    const result = Storage.set(closure_1_22, closure_0);
    return arg0;
  }).catch((error) => {
    obj = v3Result(table[17]);
    obj = { source: closure_23 };
    const result = obj.captureBillingException(error, { tags: obj });
    throw error;
  });
}
function _getTrialOfferSignature() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, body) {
      closure_4 = tmp3;
      c6 = 1;
      const HTTP = callback(closure_1_3[16]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: false };
      obj1[0] = closure_1_19.BILLING_GENERATE_APPLE_TRIAL_OFFER_SIGNATURE;
      let obj2 = { product_id: null, product_offer_id: null, app_account_token: null };
      obj2[0] = callback;
      obj2[1] = closure_1;
      obj2[2] = closure_2;
      obj1[1] = obj2;
      yield HTTP.post(obj1);
      c6 = 0;
      callback = closure_5;
      obj2 = callback(table[17]);
      const result = obj2.captureBillingException(callback);
      yield "HermesInternal";
      c6 = 0;
      return body.body;
    })();
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function preCompletionFailureReason(code) {
  return set.has(code.code) ? obj.USER_CANCELLED : obj.PURCHASE_INCOMPLETE;
}
function handlePurchaseException(code) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (!set.has(code.code)) {
    obj = isSpendingLimitError;
    let billingError = code;
    if (!(code instanceof V6OrEarlierAPIError.BillingError)) {
      billingError = new tmp(4376).BillingError(code);
    }
    if (obj.isSpendingLimitError(billingError)) {
      let tmpResult = tmp(10703);
      const result = tmpResult.showSpendingLimitReachedAlert();
    } else {
      const message = code.message;
      const _JSON = JSON;
      const json = JSON.stringify(code);
      obj1 = getUnderlyingIOSExceptionRecursivelyAll;
      const underlyingIOSError = obj1.getUnderlyingIOSError(code);
      if (null != underlyingIOSError) {
        obj = { title: null, body: null };
        const intl2 = tmp(1233).intl;
        obj[0] = intl2.string(tmp(1233).t.POsVOt);
        obj[1] = underlyingIOSError;
        _modDef4858.show(obj);
        throw code;
      } else {
        const intl3 = tmp(1233).intl;
        const stringResult = intl3.string(tmp(1233).t.PjfUXe);
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
        if (!(code instanceof tmp(4376).BillingError)) {
          billingError1 = new tmp(4376).BillingError(code);
        }
        let tmp19 = message2 === stringResult && flag;
        if (tmp19) {
          tmp19 = billingError1.code !== tmp(4161).ErrorCodes.UNKNOWN;
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
        let obj2 = _modDef4858;
        obj = { title: null, body: null, isDismissable: true, hideActionSheet: null };
        const intl = tmp(1233).intl;
        obj[0] = intl.string(tmp(1233).t.zrhHH3);
        obj[1] = message2;
        obj[3] = flag;
        obj2.show(obj);
        tmpResult = tmp(4154);
        obj1 = { tags: null };
        obj2 = { source: null, purchase_type: null };
        obj2[0] = BILLING;
        obj2[1] = arg1;
        obj1[0] = obj2;
        const result1 = tmpResult.captureBillingException(code, obj1);
        if (flag) {
          throw code;
        }
      }
    }
  }
}
function canMakeIAPRequest() {
  const isBusyResult = busy.isBusy();
  let tmp2 = !isBusyResult;
  if (!isBusyResult) {
    const isPaymentsBlocked = useBlockedPaymentsConfig.getIsPaymentsBlocked();
    let flag = !isPaymentsBlocked;
    if (isPaymentsBlocked) {
      openBlockedPaymentsCountryActionSheetDefault();
      flag = false;
    }
    tmp2 = flag;
    obj = useBlockedPaymentsConfig;
  }
  return tmp2;
}
function clearAndMakeIAPRequest(arg0, arg1, arg2, arg3) {
  const self = this;
  const apply = _clearAndMakeIAPRequest.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _clearAndMakeIAPRequest() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      closure_5 = tmp5;
      closure_4 = tmp2;
      const obj2 = callback(table[22]);
      yield obj2.clearTransactionIOS();
      return callback2(callback, closure_1, closure_2, table);
    })();
  });
  closure_31 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function makeTrackedIAPRequest(arg0, arg1, arg2, arg3) {
  const self = this;
  const apply = _makeTrackedIAPRequest.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _makeTrackedIAPRequest() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c10 = 0;
    c11 = 0;
    c9 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c11 === 2) {
        c11 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c11 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let str1 = tmp4;
              let length = tmp8;
              closure_3 = undefined;
              closure_4 = undefined;
              let transactionDate;
              length = undefined;
              str1 = undefined;
              let callback2 = false;
              obj = null;
              c9 = 2;
              c10 = 3;
              c11 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(closure_3[20]).makeIAPRequest(callback2, obj, closure_3);
              return obj1;
            }
          } else if (1 === tmp8) {
            c9 = 0;
            const obj2 = { request_identifier: null, success: null };
            obj2[0] = callback;
            obj2[1] = callback2;
            const merged = Object.assign(obj);
            callback2(closure_3[15]).track(constants.APPLE_PARTNER_IAP_REQUEST_SENT, obj2);
            throw closure_8;
          } else if (2 === tmp8) {
            c9 = 1;
            let obj7 = obj(closure_3[37]);
            length = obj7.getUnderlyingIOSError(closure_8);
            if (null != length) {
              if (length.length > 0) {
                str1 = length;
              }
              let str2 = closure_8.code;
              let str;
              if (str2 != null) {
                str = str2.toString();
              }
              const obj3 = { error_code: null, error_message: null };
              obj3[0] = str;
              obj3[1] = str1;
              obj = obj3;
              throw closure_8;
            }
            str = closure_8.message;
            if (str != null) {
              str1 = str.toString();
            }
          } else if (arg0 === 1) {
            c11 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c9 = 0;
            let obj4 = callback2(closure_3[15]);
            obj4 = { request_identifier: null, success: null };
            obj4[0] = callback;
            obj4[1] = callback2;
            const merged1 = Object.assign(obj);
            obj4.track(constants.APPLE_PARTNER_IAP_REQUEST_SENT, obj4);
            c11 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_3 = arg1;
            callback2 = true;
            closure_4 = closure_3.purchaseResponse.transactionIdentifier.toString();
            transactionDate = closure_3.purchaseResponse.transactionDate;
            str2 = undefined;
            if (closure_3.purchaseResponse.originalTransactionIdentifier != null) {
              str2 = str5.toString();
            }
            closure_4 = str2;
            obj = { original_transaction_id: null, original_transaction_date: null, transaction_id: null, transaction_date: null };
            obj[0] = closure_4;
            const originalTransactionDate = closure_3.purchaseResponse.originalTransactionDate;
            transactionDate = originalTransactionDate;
            obj[1] = transactionDate;
            obj[2] = closure_4;
            obj[3] = transactionDate;
            c9 = 0;
            obj1 = callback2(closure_3[15]);
            const obj6 = { request_identifier: null, success: null };
            obj6[0] = callback;
            obj6[1] = callback2;
            const merged2 = Object.assign(obj);
            obj1.track(constants.APPLE_PARTNER_IAP_REQUEST_SENT, obj6);
            c11 = 3;
            obj7 = { value: null, done: true };
            obj7[0] = closure_3;
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
    })();
  });
  closure_33 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getIAPJWTRequestData(arg0) {
  const self = this;
  const apply = _getIAPJWTRequestData.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getIAPJWTRequestData() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      let body = tmp2;
      obj1 = { url: null, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: true };
      obj1[0] = closure_1_19.BILLING_CREATE_APPLE_IAP_JWT_TOKEN;
      obj1[1] = callback;
      let obj2 = { event: null, properties: null };
      obj2[0] = callback(500).NetworkActionNames.APPLE_JWT_TOKEN_CREATE;
      obj2[1] = function properties(body) {
        if (lib.operation !== lib(table[41]).APBRequestOperations.CREATE) {
          if (tmp.operation !== tmp2(tmp3[42]).ACRequestOperations.CREATE) {
            if (tmp.operation === tmp2(tmp3[42]).ACRequestOperations.MODIFY) {
              obj = { subscription_items_json_string: null };
              const _JSON2 = JSON;
              obj[0] = JSON.stringify(tmp.subscription_items);
              const merged = Object.assign(closure_1_7(tmp, closure_1_5));
              const tmp15 = closure_1_7(tmp, closure_1_5);
            } else {
              if (tmp.operation !== tmp2(tmp3[41]).APBRequestOperations.CHARGE) {
                if (tmp.operation !== tmp2(tmp3[42]).ACRequestOperations.CHARGE) {
                  obj = {};
                  const merged1 = Object.assign(tmp);
                }
              }
              ({ is_gift, gift_info_options } = tmp);
              obj = { sku_id: null, request_country_code: null };
              ({ sku_id: obj2[0], country_code: obj2[1] } = tmp);
              const merged2 = Object.assign(closure_1_7(tmp, closure_1_6));
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
          obj1 = { jwt_token_exists: null };
          obj1[0] = str.length > 0;
          const merged3 = Object.assign(obj);
          return tmp2(tmp3[43]).exact(obj1);
        }
        ({ items, country_code } = lib);
        const obj2 = { subscription_items_json_string: JSON.stringify(items), request_country_code: country_code };
        const merged4 = Object.assign(closure_1_7(lib, closure_1_4));
        obj = obj2;
      };
      obj1[3] = obj2;
      body = yield closure_1_1(4713).post(obj1);
      obj = { requestJSONString: null };
      let _JSON = JSON;
      obj[0] = JSON.stringify(body.body.request_data);
      return obj;
    })();
  });
  closure_35 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function updateAppleSubscription(arg0) {
  const self = this;
  const apply = _updateAppleSubscription.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateAppleSubscription() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = { url: null, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: false };
              obj1[0] = closure_1_19.BILLING_APPLE_SUBSCRIPTION(lib.subscription_id);
              obj1[1] = lib;
              const obj2 = { event: null, properties: null };
              obj2[0] = lib(closure_1_3[40]).NetworkActionNames.APPLE_JWT_TOKEN_CREATE;
              obj2[1] = function properties(body) {
                obj = {};
                const merged = Object.assign(callback);
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
                return callback(closure_1_3[43]).exact(obj);
              };
              obj1[3] = obj2;
              c2 = 1;
              v0 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = v0(closure_1_3[39]).patch(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          v0 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  closure_37 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function determineProductId(arg0) {
  if (APBRequestOperations.APBRequestOperations.CREATE !== arg0) {
    if (tmp(13186).APBRequestOperations.CANCEL !== arg0) {
      if (tmp(13186).APBRequestOperations.RESUBSCRIBE !== arg0) {
        if (tmp(13186).APBRequestOperations.REACTIVATE !== arg0) {
          if (tmp(13186).APBRequestOperations.CHARGE === arg0) {
            return tmp(6095).ProductIds.GENERIC_CONSUMABLE;
          } else {
            if (tmp(13187).ACRequestOperations.CREATE !== arg0) {
              if (tmp(13187).ACRequestOperations.CANCEL !== arg0) {
                if (tmp(13187).ACRequestOperations.REACTIVATE !== arg0) {
                  if (tmp(13187).ACRequestOperations.MODIFY !== arg0) {
                    if (tmp(13187).ACRequestOperations.CHARGE === arg0) {
                      return tmp(6095).ProductIds.GENERIC_CONSUMABLE;
                    } else {
                      const _Error = Error;
                      error = new Error("Invalid operation");
                      throw error;
                    }
                  }
                }
              }
            }
            return tmp(6095).ProductIds.GENERIC_SUBSCRIPTION;
          }
        }
      }
    }
  }
  return SubscriptionPlans.ProductIds.GENERIC_SUBSCRIPTION;
}
function _cancelGenericSubscription() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              let CANCEL = tmp7;
              CANCEL = undefined;
              closure_4 = undefined;
              if (closure_1_29()) {
                let tmp32 = closure_0;
                let dispatchResult = closure_1_3;
                if (tmp47) {
                  CANCEL = tmp32(dispatchResult[42]).ACRequestOperations.CANCEL;
                } else {
                  CANCEL = tmp32(dispatchResult[41]).APBRequestOperations.CANCEL;
                }
                tmp32 = closure_1_38(CANCEL);
                closure_4 = tmp32;
                obj1 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: null };
                obj1[1] = tmp32;
                dispatchResult = callback(closure_1_3[23]).dispatch(obj1);
                c7 = 1;
                c8 = 1;
                const obj9 = callback(closure_1_3[23]);
              } else {
                c8 = 3;
                return { value: false, done: true };
              }
              tmp47 = closure_2;
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              c6 = 1;
              let obj3 = { operation: null, request_identifier: null, subscription_id: null };
              obj3[0] = CANCEL;
              obj3[1] = closure_0;
              obj3[2] = callback;
              c7 = 3;
              c8 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = callback2(obj3);
              return obj4;
            }
          } else if (2 === tmp7) {
            c6 = 0;
            obj3 = callback(CANCEL[23]);
            const obj5 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: null };
            obj5[1] = closure_4;
            obj3.dispatch(obj5);
            let str = "partner_subscription";
            if (closure_2) {
              str = "advanced_commerce";
            }
            closure_28(closure_5, str);
            c8 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            obj = callback(CANCEL[23]);
            const obj7 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: null };
            obj7[1] = closure_4;
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
    })();
  });
  closure_39 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function isValidCurrency(arg0) {
  const values = Object.values(closure_18);
  return values.includes(arg0);
}
function _createGenericSubscription() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0, requestJSONString) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw requestJSONString;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = requestJSONString;
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
              throw requestJSONString;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = requestJSONString;
              return obj;
            } else {
              c2 = tmp2;
              let lib = tmp6;
              let callback;
              lib = undefined;
              c2 = undefined;
              dependencyMap = undefined;
              c4 = undefined;
              ({ requestIdentifier: c0, items: c1, currency: c2, countryCode: c3, orderId: c4 } = callback);
              c5 = undefined;
              c6 = undefined;
              let obj9;
              requestJSONString = undefined;
              closure_9 = undefined;
              let purchaseResponse;
              let originalPurchase;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c6 = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = requestJSONString;
              return obj1;
            } else if (callback3()) {
              if (callback7(c2)) {
                c5 = callback6(callback(13187).ACRequestOperations.CREATE);
                let obj22 = lib(706);
                const obj2 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: null };
                obj2[1] = c5;
                c5 = 2;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj22.dispatch(obj2);
                return obj3;
              } else {
                const obj4 = { success: false, failureReason: null };
                obj4[1] = constants.INVALID_CURRENCY;
                c6 = 3;
                let obj5 = { value: null, done: true };
                obj5[0] = obj4;
                return obj5;
              }
            } else {
              const obj6 = { success: false, failureReason: null };
              obj6[1] = constants.CANNOT_MAKE_REQUEST;
              c6 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = obj6;
              return obj7;
            }
          } else if (2 === tmp6) {
            if (arg0 === 1) {
              c6 = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = requestJSONString;
              return obj8;
            } else {
              c6 = false;
              c4 = 1;
              obj9 = { request_identifier: null, items: null, currency: null, country_code: null, order_id: null };
              obj9[0] = callback;
              obj9[1] = lib.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity }));
              obj9[2] = c2;
              obj9[3] = dependencyMap;
              obj9[4] = c4;
              const obj10 = { operation: null };
              obj10[0] = callback(13187).ACRequestOperations.CREATE;
              const merged = Object.assign(obj9);
              c5 = 4;
              c6 = 1;
              const obj11 = { value: null, done: false };
              obj11[0] = callback5(obj10);
              return obj11;
            }
          } else if (3 === tmp6) {
            c4 = 0;
            closure_12 = dependencyMap;
            let obj13 = lib(706);
            const obj12 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: null };
            obj12[1] = c5;
            obj13.dispatch(obj12);
            let tmp36 = null == c4;
            if (!tmp36) {
              tmp36 = c6;
            }
            closure_28(closure_12, "advanced_commerce", tmp36);
            obj13 = constants;
            if (c6) {
              let PURCHASE_INCOMPLETE = obj13.POST_PURCHASE_FAILED;
            } else {
              PURCHASE_INCOMPLETE = obj13.PURCHASE_INCOMPLETE;
            }
            obj13 = { success: false, failureReason: null };
            obj13[1] = PURCHASE_INCOMPLETE;
            c6 = 3;
            const tmp33 = closure_28;
            const tmp34 = closure_12;
          } else if (4 === tmp6) {
            if (arg0 === 1) {
              c6 = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj14 = { value: null, done: true };
              obj14[0] = requestJSONString;
              return obj14;
            } else {
              requestJSONString = requestJSONString.requestJSONString;
              c5 = 5;
              c6 = 1;
              const obj15 = { value: null, done: false };
              obj15[0] = callback4(callback, requestJSONString, c5, true);
              return obj15;
            }
          } else if (5 === tmp6) {
            if (arg0 === 1) {
              c6 = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj16 = { value: null, done: true };
              obj16[0] = requestJSONString;
              return obj16;
            } else {
              closure_9 = requestJSONString;
              purchaseResponse = closure_9.purchaseResponse;
              originalPurchase = closure_9.originalPurchase;
              c6 = true;
              const obj17 = { encodedReceipt: null, retries: 3, presentmentCurrency: null, appStoreRegion: null, jwsRepresentation: null, source: "createGenericSubscription", orderId: null };
              obj17[0] = purchaseResponse.transactionReceipt;
              obj17[2] = c2;
              obj17[3] = dependencyMap;
              obj17[4] = purchaseResponse.jwsRepresentation;
              obj17[6] = c4;
              c5 = 6;
              c6 = 1;
              const obj18 = { value: null, done: false };
              obj18[0] = callback2(obj17);
              return obj18;
            }
          } else if (6 === tmp6) {
            if (arg0 === 1) {
              c6 = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj19 = { value: null, done: true };
              obj19[0] = requestJSONString;
              return obj19;
            } else {
              obj5 = callback(11015);
              const obj20 = { purchase: null };
              obj20[0] = originalPurchase;
              c5 = 7;
              c6 = 1;
              const obj21 = { value: null, done: false };
              obj21[0] = obj5.finishTransaction(obj20);
              return obj21;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw requestJSONString;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj22 = { value: null, done: true };
            obj22[0] = requestJSONString;
            return obj22;
          } else {
            obj = lib(706);
            const obj23 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: null };
            obj23[1] = c5;
            obj.dispatch(obj23);
            const obj24 = { success: true, failureReason: null };
            obj24[1] = constants.NONE;
            c4 = 0;
            c6 = 3;
            const obj25 = { value: null, done: true };
            obj25[0] = obj24;
            return obj25;
          }
        } catch (tmp58) {
          dependencyMap = tmp58;
          if (tmp3 === c4) {
            c6 = tmp;
            throw tmp58;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_42 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _modifyGenericSubscription() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else {
            if (arg0 !== 2) {
              c4 = 1;
              obj = { encodedReceipt: null, retries: 3, jwsRepresentation: null, source: "modifyGenericSubscription", orderId: null };
              obj[0] = closure_10.transactionReceipt;
              obj[2] = closure_10.jwsRepresentation;
              obj[4] = closure_3;
              callback(obj);
              c5 = 8;
              c6 = 1;
            }
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp14) {
          closure_3 = tmp14;
          if (tmp3 === c4) {
            c6 = tmp2;
            throw tmp14;
          } else if (tmp === tmp16) {
            c5 = tmp2;
          } else {
            c5 = tmp4;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_43 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _resubscribeGenericSubscription() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0, requestJSONString) {
      if (purchaseResponse === 2) {
        purchaseResponse = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw requestJSONString;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = requestJSONString;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          purchaseResponse = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              purchaseResponse = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              purchaseResponse = 3;
              obj = { value: null, done: true };
              obj[0] = requestJSONString;
              return obj;
            } else {
              let obj2 = tmp2;
              closure_2 = tmp6;
              let callback;
              let callback2;
              closure_2 = undefined;
              ({ requestIdentifier: c0, subscriptionId: c1 } = callback);
              closure_2 = callback2;
              obj2 = undefined;
              closure_4 = undefined;
              requestJSONString = undefined;
              c6 = undefined;
              purchaseResponse = undefined;
              let originalPurchase;
              c6 = 1;
              purchaseResponse = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              purchaseResponse = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              purchaseResponse = 3;
              obj1 = { value: null, done: true };
              obj1[0] = requestJSONString;
              return obj1;
            } else if (callback4()) {
              obj2 = { request_identifier: null, subscription_id: null };
              obj2[0] = callback;
              obj2[1] = callback2;
              let obj22 = closure_38;
              let tmp60 = callback;
              let obj3 = obj2;
              if (closure_2) {
                let REACTIVATE = tmp60(obj3[42]).ACRequestOperations.REACTIVATE;
              } else {
                REACTIVATE = tmp60(obj3[41]).APBRequestOperations.REACTIVATE;
              }
              closure_4 = obj22(REACTIVATE);
              obj22 = callback2(obj2[23]);
              obj3 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: null };
              tmp60 = closure_4;
              obj3[1] = closure_4;
              obj22.dispatch(obj3);
              c6 = 2;
              purchaseResponse = 1;
            } else {
              purchaseResponse = 3;
              return { value: false, done: true };
            }
          } else if (2 === tmp6) {
            if (arg0 === 1) {
              purchaseResponse = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              purchaseResponse = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = requestJSONString;
              return obj4;
            } else {
              requestJSONString = 1;
              if (closure_2) {
                const obj5 = { operation: null };
                obj5[0] = callback(obj2[42]).ACRequestOperations.REACTIVATE;
                const merged = Object.assign(obj2);
                c6 = 4;
                purchaseResponse = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = callback6(obj5);
                return obj6;
              } else {
                const obj7 = { operation: null };
                obj7[0] = callback(obj2[41]).APBRequestOperations.REACTIVATE;
                const merged1 = Object.assign(obj2);
                c6 = 5;
                purchaseResponse = 1;
                let obj8 = { value: null, done: false };
                obj8[0] = callback7(obj7);
                return obj8;
              }
            }
          } else if (3 === tmp6) {
            requestJSONString = 0;
            closure_9 = closure_4;
            let obj13 = callback2(obj2[23]);
            const obj9 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: null };
            obj9[1] = closure_4;
            obj13.dispatch(obj9);
            let str = "partner_subscription";
            if (closure_2) {
              str = "advanced_commerce";
            }
            closure_28(closure_9, str);
            purchaseResponse = 3;
            return { value: false, done: true };
          } else if (4 === tmp6) {
            if (arg0 === 1) {
              purchaseResponse = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              requestJSONString = 0;
              purchaseResponse = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = requestJSONString;
              return obj10;
            } else {
              requestJSONString = requestJSONString.requestJSONString;
              c6 = 6;
              purchaseResponse = 1;
              const obj11 = { value: null, done: false };
              obj11[0] = callback5(callback, requestJSONString, closure_4, true);
              return obj11;
            }
          } else {
            if (5 === tmp6) {
              if (arg0 === 1) {
                purchaseResponse = 3;
                throw requestJSONString;
              } else if (arg0 === 2) {
                requestJSONString = 0;
                purchaseResponse = 3;
                const obj12 = { value: null, done: true };
                obj12[0] = requestJSONString;
                return obj12;
              }
            } else if (6 === tmp6) {
              if (arg0 === 1) {
                purchaseResponse = 3;
                throw requestJSONString;
              } else if (arg0 === 2) {
                requestJSONString = 0;
                purchaseResponse = 3;
                obj13 = { value: null, done: true };
                obj13[0] = requestJSONString;
                return obj13;
              } else {
                c6 = requestJSONString;
                purchaseResponse = c6.purchaseResponse;
                originalPurchase = c6.originalPurchase;
                const obj14 = { encodedReceipt: null, retries: 3, jwsRepresentation: null, source: "resubscribeGenericSubscription" };
                obj14[0] = purchaseResponse.transactionReceipt;
                obj14[2] = purchaseResponse.jwsRepresentation;
                c6 = 7;
                purchaseResponse = 1;
                const obj15 = { value: null, done: false };
                obj15[0] = callback3(obj14);
                return obj15;
              }
            } else if (7 === tmp6) {
              if (arg0 === 1) {
                purchaseResponse = 3;
                throw requestJSONString;
              } else if (arg0 === 2) {
                requestJSONString = 0;
                purchaseResponse = 3;
                const obj16 = { value: null, done: true };
                obj16[0] = requestJSONString;
                return obj16;
              } else {
                obj1 = callback(obj2[22]);
                const obj17 = { purchase: null };
                obj17[0] = originalPurchase;
                c6 = 8;
                purchaseResponse = 1;
                const obj18 = { value: null, done: false };
                obj18[0] = obj1.finishTransaction(obj17);
                return obj18;
              }
            } else if (arg0 === 1) {
              purchaseResponse = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              requestJSONString = 0;
              purchaseResponse = 3;
              obj = { value: null, done: true };
              obj[0] = requestJSONString;
              return obj;
            }
            obj8 = callback2(obj2[23]);
            const obj19 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: null };
            obj19[1] = closure_4;
            obj8.dispatch(obj19);
            requestJSONString = 0;
            purchaseResponse = 3;
            return { value: true, done: true };
          }
        } catch (tmp68) {
          closure_4 = tmp68;
          if (tmp3 === requestJSONString) {
            purchaseResponse = tmp;
            throw tmp68;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_44 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _retryPendingPurchases() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0, arg1) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        while (true) {
          let num = 2;
          c9 = 2;
          let tmp4 = c8;
          if (0 === c8) {
            if (arg0 === 1) {
              let num12 = 3;
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num11 = 3;
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let purchaseResponse = tmp;
              purchaseResponse = tmp4;
              let tmp89 = callback;
              let tmp90 = callback2;
              let lib;
              let arr;
              purchaseResponse = undefined;
              purchaseResponse = undefined;
              let productIdentifier;
              c7 = undefined;
              c8 = undefined;
              let tmp91 = callback2;
              let tmp92 = closure_1_3;
              let obj23 = callback2(closure_1_3[20]);
              c8 = 1;
              let num22 = 1;
              c9 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj23.restorePurchases({ fullRestore: false });
              return obj1;
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                let num10 = 3;
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                let num9 = 3;
                c9 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                let tmp67 = purchaseResponse;
                lib = arg1;
                arr = [];
                let tmp68 = lib;
                if (0 === lib.length) {
                  let num8 = 3;
                  c9 = 3;
                  return { value: true, done: true };
                } else {
                  let tmp69 = purchaseResponse;
                  let tmp70 = lib;
                  arr = lib;
                  let tmp71 = lib;
                  arr = lib;
                  lib = lib[Symbol.iterator]();
                }
              }
            } else if (2 === tmp4) {
              let tmp32 = productIdentifier;
              let tmp33 = productIdentifier;
              c7 = 0;
              let tmp34 = lib;
              lib.return();
              throw productIdentifier;
            } else {
              if (3 === tmp4) {
                let tmp15 = purchaseResponse;
                let tmp16 = purchaseResponse;
                let tmp17 = productIdentifier;
                let tmp18 = productIdentifier;
                c7 = 1;
                c9 = productIdentifier;
                let tmp19 = callback2;
                let tmp20 = arr;
                let obj5 = callback2(arr[15]);
                let tmp21 = constants;
                let obj3 = { product_id: null, transaction_id: null, error_code: null, error_message: null };
                let tmp22 = productIdentifier;
                obj3[0] = productIdentifier;
                let tmp23 = c7;
                obj3[1] = c7;
                let tmp24 = c9;
                let str = c9.code;
                str = undefined;
                if (str != null) {
                  str = str.toString();
                }
                let tmp26 = purchaseResponse;
                obj3[2] = str;
                let tmp27 = c9;
                obj3[3] = c9.message;
                let trackResult = obj5.track(constants.APPLE_RETRY_PENDING_PURCHASE_FAILED, obj3);
                let tmp29 = arr;
                let tmp30 = c9;
                arr = arr.push(c9);
              } else if (4 === tmp4) {
                if (arg0 === 1) {
                  let num5 = 3;
                  c9 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c7 = 0;
                  let tmp14 = lib;
                  lib.return();
                  let num4 = 3;
                  c9 = 3;
                  let obj4 = { value: null, done: true };
                  obj4[0] = arg1;
                  return obj4;
                } else {
                  let tmp59 = purchaseResponse;
                  let tmp60 = purchaseResponse;
                  let tmp61 = callback;
                  let tmp62 = arr;
                  let obj17 = callback(arr[22]);
                  obj5 = { purchase: null };
                  let obj6 = { productId: null, transactionId: null, transactionDate: null, transactionReceipt: null };
                  let tmp63 = productIdentifier;
                  obj6[0] = productIdentifier;
                  let tmp64 = c7;
                  obj6[1] = c7;
                  let tmp65 = purchaseResponse;
                  obj6[2] = purchaseResponse.transactionDate;
                  let tmp66 = purchaseResponse;
                  obj6[3] = purchaseResponse.transactionReceipt;
                  obj5[0] = obj6;
                  c8 = 5;
                  let num20 = 1;
                  c9 = 1;
                  let obj7 = { value: null, done: false };
                  obj7[0] = obj17.finishTransaction(obj5);
                  return obj7;
                }
              } else if (arg0 === 1) {
                let num3 = 3;
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 0;
                let tmp13 = lib;
                lib.return();
                let num2 = 3;
                c9 = 3;
                let obj8 = { value: null, done: true };
                obj8[0] = arg1;
                return obj8;
              } else {
                let tmp5 = purchaseResponse;
                let tmp6 = purchaseResponse;
                let tmp7 = callback2;
                let tmp8 = arr;
                obj = callback2(arr[15]);
                let tmp9 = constants;
                let obj9 = { product_id: null, transaction_id: null };
                let tmp10 = productIdentifier;
                obj9[0] = productIdentifier;
                let tmp11 = c7;
                obj9[1] = c7;
                let trackResult1 = obj.track(constants.APPLE_RETRY_PENDING_PURCHASE_SUCCEEDED, obj9);
                c7 = 1;
              }
              c7 = 0;
            }
            let tmp35 = arr;
            let tmp36 = lib;
            if (lib === undefined) {
              let tmp38 = purchaseResponse;
              let tmp39 = arr;
              if (arr.length > 0) {
                let tmp40 = purchaseResponse;
                let tmp41 = purchaseResponse;
                let tmp42 = arr;
                let mapped = arr.map((message) => message.message);
                let _HermesInternal = HermesInternal;
                c8 = "Failed to retry pending purchases: " + mapped.join(", ");
                let tmp43 = callback;
                let tmp44 = arr;
                obj9 = callback(arr[17]);
                let _Error = Error;
                let tmp45 = c8;
                let tmp46 = new.target;
                let tmp47 = new.target;
                error = new Error(c8);
                let obj10 = { tags: null };
                let obj11 = { pendingPurchaseFailures: null, totalPendingPurchases: null };
                let tmp49 = arr;
                let str2 = arr.length;
                obj11[0] = str2.toString();
                let tmp50 = lib;
                let str3 = lib.length;
                obj11[1] = str3.toString();
                obj10[0] = obj11;
                let tmp51 = error;
                let result = obj9.captureBillingException(error, obj10);
                let num7 = 3;
                c9 = 3;
                return { value: false, done: true };
              } else {
                let num6 = 3;
                c9 = 3;
                return { value: true, done: true };
              }
            } else {
              let tmp72 = purchaseResponse;
              c7 = 1;
              purchaseResponse = tmp37;
              let tmp73 = purchaseResponse;
              purchaseResponse = purchaseResponse.purchaseResponse;
              let tmp74 = purchaseResponse;
              productIdentifier = purchaseResponse.productIdentifier;
              let tmp75 = purchaseResponse;
              let str7 = purchaseResponse.transactionIdentifier;
              c7 = str7.toString();
              let tmp76 = purchaseResponse;
              let tmp77 = purchaseResponse;
              c7 = 2;
              let tmp78 = callback2;
              let tmp79 = arr;
              let obj20 = callback2(arr[15]);
              let tmp80 = constants;
              let obj12 = { product_id: null, transaction_id: null };
              let tmp81 = productIdentifier;
              obj12[0] = productIdentifier;
              let tmp82 = c7;
              obj12[1] = c7;
              let trackResult2 = obj20.track(constants.APPLE_RETRY_PENDING_PURCHASE_STARTED, obj12);
              let tmp84 = callback3;
              let obj13 = { encodedReceipt: null, retries: 3, presentmentCurrency: null, appStoreRegion: null, jwsRepresentation: null, source: "retryPendingPurchases" };
              let tmp85 = purchaseResponse;
              obj13[0] = purchaseResponse.transactionReceipt;
              let tmp86 = callback;
              obj13[2] = callback;
              let tmp87 = callback2;
              obj13[3] = callback2;
              let tmp88 = purchaseResponse;
              obj13[4] = purchaseResponse.jwsRepresentation;
              c8 = 4;
              let num21 = 1;
              c9 = 1;
              let obj14 = { value: null, done: false };
              obj14[0] = callback3(obj13);
              return obj14;
            }
          }
        }
      }
    })();
  });
  closure_45 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _mobilePurchaseSKU() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    const iter = (function*(arg0, arg1) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 0;
          const code = closure_6;
          if (code.code === callback(4161).ErrorCodes.BILLING_PURCHASE_REQUEST_INVALID) {
            const result = callback(4154).captureBillingException(code, {});
            const obj2 = callback(4154);
          }
          while (true) {
            let tmp14 = closure_4;
            let tmp15 = closure_5;
            let tmp18 = c9;
            let tmp19 = null == c9;
            let tmp16 = closure_28;
            let tmp17 = closure_23;
            if (tmp19) {
              break;
            } else {
              let tmp20 = closure_4;
              tmp19 = closure_12;
              break;
            }
            let tmp21 = closure_4;
            let tmp16Result = tmp16(tmp17, "collectibles", tmp19);
            let tmp23 = closure_12;
            if (closure_12) {
              let tmp28 = closure_5;
              let tmp29 = constants;
              let POST_PURCHASE_FAILED = constants.POST_PURCHASE_FAILED;
            } else {
              let tmp24 = closure_4;
              let tmp25 = closure_5;
              let tmp26 = callback2;
              let tmp27 = closure_23;
              POST_PURCHASE_FAILED = callback2(closure_23);
            }
            { success: false, failureReason: null }[1] = POST_PURCHASE_FAILED;
            let num = 3;
            c9 = 3;
          }
        } catch (tmp30) {
          closure_6 = tmp30;
          if (tmp3 === c7) {
            c9 = tmp2;
            throw tmp30;
          } else if (tmp === tmp32) {
            c8 = tmp2;
          } else {
            c8 = tmp4;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_46 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _migrateToACOM() {
  const self = this;
  let tmp = callback(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (null == closure_1_13.getCurrentUser()) {
            c2 = 3;
            return { value: false, done: true };
          } else if (closure_1_29()) {
            obj1 = closure_1_14;
            const activeGuildSubscriptions = closure_1_14.getActiveGuildSubscriptions();
            closure_0 = activeGuildSubscriptions;
            if (activeGuildSubscriptions == null) {
              closure_0 = [];
            }
            const found = closure_0.filter((paymentGateway) => paymentGateway.paymentGateway === constants2.APPLE_PARTNER);
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
            const NitroACOMSubscriptionExperiment = closure_1_0(table[48]).NitroACOMSubscriptionExperiment;
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
            const HTTP = closure_1_0(table[16]).HTTP;
            obj1 = { url: null, rejectWithError: true, body: null };
            obj1[0] = closure_1_19.BILLING_ACOM_SUBSCRIPTION_MIGRATION;
            const obj2 = { migrate_premium: null };
            obj2[0] = enabled;
            obj1[2] = obj2;
            table = 2;
            c2 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = HTTP.post(obj1);
            return obj3;
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
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
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
          table = tmp;
        }
      }
    }
  });
  closure_47 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = ["items", "country_code"];
let closure_5 = ["subscription_items"];
let closure_6 = ["sku_id", "country_code", "is_gift", "gift_info_options"];
noopAll;
({ setPaymentSuccess: unpackModuleId, showOldPaymentFlowSuccess: closure_12 } = usePremiumPlanPurchasedStore);
({ SubscriptionTypes: closure_16, AnalyticEvents: closure_17, CurrencyCodes: closure_18, Endpoints: closure_19, StoreKitErrors } = ME);
const localAppleReceiptHash = "localAppleReceiptHash";
const BILLING = "BILLING";
new timestampDefault("BillingActionCreators.tsx");
let obj = {
  applyAppleReceipt,
  fetchMostRecentSubscription: require("_deletePaymentSource").fetchMostRecentSubscription,
  fetchIpCountryCode: require("_deletePaymentSource").fetchIpCountryCode,
  init() {
    const self = this;
    return callback(function*() {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              c4 = 1;
              c0 = null;
              if (obj13.isIOS()) {
                c4 = 2;
                c5 = 3;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_1(closure_1_3[20]).fetchStoreFront();
                return obj1;
              }
              obj13 = closure_1_0(closure_1_3[19]);
            }
          } else {
            if (1 === tmp8) {
              c4 = 0;
              c6 = 3;
            } else if (2 === tmp8) {
              c4 = 1;
              c0 = null;
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                c0 = arg1;
                c4 = 1;
              }
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                c5 = 5;
                c6 = 1;
                let obj4 = { value: null, done: false };
                obj4[0] = c0.restoreAndApplyPurchases();
                return obj4;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          if (null != c0) {
            let obj5 = closure_1_0(closure_1_3[21]);
            let premiumSubscriptionPlans = obj5.fetchPremiumSubscriptionPlans(c0.country, undefined, undefined, closure_1_20.APPLE_ADVANCED_COMMERCE);
          } else {
            obj4 = closure_1_0(closure_1_3[21]);
            premiumSubscriptionPlans = obj4.fetchPremiumSubscriptionPlans();
          }
          const items = [premiumSubscriptionPlans, , ];
          if (c0 == null) {
            c0 = undefined;
          }
          items[1] = c0.loadProducts(c0);
          items[2] = closure_1_0(closure_1_3[18]).fetchSubscriptions();
          c5 = 4;
          c6 = 1;
          obj5 = { value: null, done: false };
          obj5[0] = Promise.all(items);
          return obj5;
        } catch (tmp38) {
          closure_3 = tmp38;
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
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback2 = tmp3;
              let callback = tmp7;
              callback = undefined;
              callback = closure_1_9.isGenericIapConnected();
              if (callback) {
                c5 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = callback;
                return obj1;
              } else {
                dependencyMap = 1;
                c4 = 2;
                c5 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = closure_1_0(11015).initConnection();
                return obj2;
              }
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            callback2 = closure_2;
            let obj4 = callback(4154);
            const result = obj4.captureBillingException(callback2);
            let obj5 = callback2(706);
            obj5.dispatch({ type: "GENERIC_IAP_INIT_CONNECTION_FAILED" });
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            callback = arg1;
            obj = callback2(706);
            obj4 = { type: "GENERIC_IAP_INIT_CONNECTION", connected: null };
            obj4[1] = callback;
            obj.dispatch(obj4);
            dependencyMap = 0;
            c5 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = callback;
            return obj5;
          }
        } catch (tmp27) {
          closure_2 = tmp27;
          if (tmp4 === dependencyMap) {
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
    dispatcherDefault.dispatch({ type: "GENERIC_IAP_END_CONNECTION" });
  },
  loadProducts(arg0) {
    closure_0 = arg0;
    return callback(function*() {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              let callback;
              closure_1 = undefined;
              closure_2 = undefined;
              c4 = 1;
              closure_1_1(706).dispatch({ type: "IAP_LOAD_PRODUCTS_START" });
              const obj16 = closure_1_1(706);
              c5 = 2;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_1(11014).loadProducts();
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              closure_1_1(706).dispatch({ type: "IAP_LOAD_PRODUCTS_FAILED" });
              const obj11 = closure_1_1(706);
              const result = callback(4154).captureBillingException(dependencyMap);
              c6 = 3;
              const obj12 = callback(4154);
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  closure_1 = arg1;
                  closure_2 = closure_1_1(12).filter(closure_1, (identifier) => {
                    const GenericProductIds = callback(tmp45[25]).GenericProductIds;
                    return GenericProductIds.includes(identifier.identifier);
                  });
                  if (null != callback) {
                    let tmp8 = callback;
                  }
                  const arr = closure_1_1(12);
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                callback = arg1;
                if (arg1 == null) {
                  callback = { country: "US", currency: "usd" };
                }
                tmp8 = callback;
              }
              callback = tmp8;
              obj1 = closure_1_1(706);
              let obj3 = { type: "IAP_LOAD_PRODUCTS", products: null };
              obj3[1] = closure_1_1;
              obj1.dispatch(obj3);
              if (closure_1_2.length === callback(6095).GenericProductIds.length) {
                let obj5 = closure_1_1(706);
                const obj4 = { type: "IAP_LOAD_GENERIC_PRODUCTS", products: null, storeFront: null };
                obj4[1] = closure_2;
                obj4[2] = callback;
                obj5.dispatch(obj4);
              } else {
                obj3 = closure_1_1(706);
                obj5 = { type: "GENERIC_IAP_SET_STORE_FRONT", storeFront: null };
                obj5[1] = callback;
                obj3.dispatch(obj5);
              }
              c4 = 0;
            }
            c5 = 3;
            c6 = 1;
            const obj6 = { value: null, done: false };
            obj6[0] = closure_1_1(11014).fetchStoreFront();
            return obj6;
          }
        } catch (tmp45) {
          dependencyMap = tmp45;
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
    return callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp8;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp9 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            v0 = 2;
            switch (c5) {
              case 0:
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  c2 = tmp4;
                  c1 = tmp7;
                  let transactionReceipt;
                  c1 = undefined;
                  c2 = undefined;
                  c3 = undefined;
                  c4 = undefined;
                  c5 = undefined;
                  v0 = undefined;
                  c7 = undefined;
                  c8 = undefined;
                  c9 = undefined;
                  c10 = undefined;
                  c11 = undefined;
                  c12 = undefined;
                  let currentUser;
                  c14 = undefined;
                  c15 = undefined;
                  c16 = undefined;
                  c17 = undefined;
                  let currencyCode;
                  c19 = undefined;
                  throwTypeErrorResult = closure_1_0;
                  const productId = closure_1_0.productId;
                  transactionReceipt = productId;
                  ({ isGift: c1, giftInfoOptions: c2, baseAnalyticsData: c3, applicationId: c4, offerId: c5, onPurchaseComplete: c6, onPurchaseError: c7, orderId: c8 } = closure_1_0);
                  throwTypeErrorResult = closure_15;
                  if (!closure_15.isBusy()) {
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = closure_1_3;
                    throwTypeErrorResult = closure_1_1;
                    throwTypeErrorResult = closure_1_3;
                    if (obj29.getIsPaymentsBlocked()) {
                      throwTypeErrorResult = throwTypeErrorResult(throwTypeErrorResult[27])();
                    } else {
                      obj1 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: null };
                      obj1[1] = productId;
                      c5 = 1;
                      v0 = 1;
                      let obj2 = { value: null, done: false };
                      obj2[0] = throwTypeErrorResult(throwTypeErrorResult[23]).dispatch(obj1);
                      return obj2;
                    }
                    obj29 = closure_1_0(closure_1_3[26]);
                  }
                  v0 = 3;
                  if (arg0 === 1) {
                    v0 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    v0 = 3;
                    const obj3 = { value: null, done: true };
                    obj3[0] = arg1;
                    return obj3;
                  } else {
                    throwTypeErrorResult = c2;
                    c4 = 1;
                    throwTypeErrorResult = closure_1_1;
                    throwTypeErrorResult = closure_1_3;
                    let obj25 = closure_1_1(closure_1_3[20]);
                    c5 = 3;
                    v0 = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = obj25.canMakePayments();
                    return obj4;
                  }
                }
              break;
              case 1:
              break;
              case 2:
                throwTypeErrorResult = c1;
                throwTypeErrorResult = c2;
                throwTypeErrorResult = c3;
                throwTypeErrorResult = c3;
                c4 = 0;
                closure_21 = c3;
                throwTypeErrorResult = closure_1_1;
                throwTypeErrorResult = closure_1_3;
                let obj23 = closure_1_1(closure_1_3[23]);
                let obj5 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: null };
                throwTypeErrorResult = closure_1_0;
                obj5[1] = closure_1_0;
                throwTypeErrorResult = obj23.dispatch(obj5);
                if (closure_1_7 != null) {
                  throwTypeErrorResult = c1;
                  throwTypeErrorResult = closure_21;
                  throwTypeErrorResult = throwTypeErrorResult(closure_21);
                }
                throwTypeErrorResult = c1;
                throwTypeErrorResult = c2;
                throwTypeErrorResult = closure_1_28;
                throwTypeErrorResult = closure_21;
                throwTypeErrorResult = closure_1_28(closure_21, "subscription");
              break;
              case 3:
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 0;
                  v0 = 3;
                  const obj6 = { value: null, done: true };
                  obj6[0] = arg1;
                  return obj6;
                } else {
                  throwTypeErrorResult = c2;
                  throwTypeErrorResult = closure_14;
                  if (closure_14.hasFetchedSubscriptions()) {
                    const id = currentUser.getCurrentUser();
                    if (null == id) {
                      const _Error2 = Error;
                      const intl2 = closure_1_0(closure_1_3[28]).intl;
                      error = new Error(intl2.string(closure_1_0(closure_1_3[28]).t.PjfUXe));
                      throwTypeErrorResult = error;
                      throw error;
                    } else {
                      throwTypeErrorResult = c1;
                      throwTypeErrorResult = c2;
                      throwTypeErrorResult = closure_1_0;
                      throwTypeErrorResult = closure_1_3;
                      throwTypeErrorResult = id;
                      closure_10 = closure_1_0(closure_1_3[20]).convertToUUID(id.id);
                      let obj11;
                      throwTypeErrorResult = c5;
                      if (null != c5) {
                        c5 = 5;
                        v0 = 1;
                        const obj7 = { value: null, done: false };
                        obj7[0] = (function getTrialOfferSignature(closure_1_0, c5, closure_10) {
                          const self = this;
                          const apply = closure_25.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(closure_1_0, c5, closure_10);
                        return obj7;
                      } else {
                        let obj20 = closure_1_1(closure_1_3[20]);
                        obj20.purchaseProduct(closure_1_0, obj11, closure_10);
                        c5 = 6;
                        v0 = 1;
                        c4 = 0;
                        v0 = 3;
                        const obj8 = { value: null, done: true };
                        obj8[0] = arg1;
                        return obj8;
                      }
                      const obj42 = closure_1_0(closure_1_3[20]);
                    }
                  } else {
                    let obj18 = closure_1_0(closure_1_3[18]);
                    c5 = 4;
                    v0 = 1;
                    const obj9 = { value: null, done: false };
                    obj9[0] = obj18.fetchSubscriptions();
                    return obj9;
                  }
                }
              break;
              case 4:
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 0;
                  v0 = 3;
                  let obj10 = { value: null, done: true };
                  obj10[0] = arg1;
                  return obj10;
                } else {
                  const _Error = Error;
                  const intl = closure_1_0(closure_1_3[28]).intl;
                  const error1 = new Error(intl.string(closure_1_0(closure_1_3[28]).t.PjfUXe));
                  throw error1;
                }
              break;
              case 5:
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  const lib = arg1;
                  if (null != lib) {
                    throwTypeErrorResult = c1;
                    obj11 = { identifier: null, keyIdentifier: null, nonce: null, signature: null, timestamp: null };
                    throwTypeErrorResult = c5;
                    obj11[0] = c5;
                    throwTypeErrorResult = lib;
                    obj11[1] = lib.key_id;
                    throwTypeErrorResult = lib;
                    obj11[2] = lib.nonce;
                    throwTypeErrorResult = lib;
                    obj11[3] = lib.signature;
                    const _Number = Number;
                    throwTypeErrorResult = lib;
                    obj11[4] = Number(lib.timestamp);
                  }
                }
              break;
              case 6:
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 0;
                  v0 = 3;
                  const obj12 = { value: null, done: true };
                  obj12[0] = arg1;
                  return obj12;
                } else {
                  throwTypeErrorResult = c1;
                  currentUser = arg1;
                  throwTypeErrorResult = currentUser;
                  const jwsRepresentation = currentUser.jwsRepresentation;
                  transactionReceipt = jwsRepresentation;
                  if (jwsRepresentation == null) {
                    transactionReceipt = currentUser.transactionReceipt;
                  }
                  closure_14 = transactionReceipt;
                  obj10 = closure_1_1(closure_1_3[13]);
                  closure_15 = obj10.v3(closure_14);
                  obj11 = closure_1_1(closure_1_3[23]);
                  const obj13 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key: null, giftOptions: null };
                  obj13[1] = closure_15;
                  const obj14 = {};
                  let merged = Object.assign(closure_1_2);
                  obj13[2] = obj14;
                  obj11.dispatch(obj13);
                  let tmp61;
                  if (v0 != null) {
                    tmp61 = v0();
                  }
                  c5 = 7;
                  v0 = 1;
                  const obj15 = { value: null, done: false };
                  obj15[0] = tmp61;
                  return obj15;
                }
              break;
              case 7:
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 0;
                  v0 = 3;
                  const obj16 = { value: null, done: true };
                  obj16[0] = arg1;
                  return obj16;
                } else {
                  throwTypeErrorResult = c1;
                  throwTypeErrorResult = c2;
                  throwTypeErrorResult = closure_15;
                  throwTypeErrorResult = closure_1_0;
                  const product = closure_15.getProduct(closure_1_0);
                  let price;
                  if (product != null) {
                    price = product.price;
                  }
                  currencyCode = undefined;
                  if (product != null) {
                    currencyCode = product.currencyCode;
                  }
                  const obj17 = { encodedReceipt: null, retries: 3, presentmentCurrency: null, presentmentAmount: null, appStoreRegion: null, giftInfoOptions: null, jwsRepresentation: null, source: "createSubscription", orderId: null };
                  obj17[0] = currentUser.transactionReceipt;
                  obj17[2] = currencyCode;
                  obj17[3] = c17;
                  let countryCode;
                  if (c16 != null) {
                    countryCode = c16.countryCode;
                  }
                  obj17[4] = countryCode;
                  obj17[5] = c2;
                  obj17[6] = currentUser.jwsRepresentation;
                  obj17[8] = c8;
                  c5 = 9;
                  v0 = 1;
                  obj18 = { value: null, done: false };
                  obj18[0] = closure_1_24(obj17);
                  return obj18;
                }
              break;
              case 8:
                c4 = 1;
                closure_20 = c3;
                obj5 = closure_1_0(closure_1_3[17]);
                const obj19 = { tags: null };
                obj19[0] = { source: "createSubscriptionFetchSubscriptions" };
                const result = obj5.captureBillingException(closure_20, obj19);
                throwTypeErrorResult = c1;
                throwTypeErrorResult = c2;
                throwTypeErrorResult = closure_14;
                const premiumTypeSubscription = closure_14.getPremiumTypeSubscription();
                throwTypeErrorResult = premiumTypeSubscription;
                if (null != premiumTypeSubscription) {
                  throwTypeErrorResult = c1;
                  throwTypeErrorResult = c2;
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = lib(() => {
                    obj = _undefined(_undefined2[30]);
                    obj = {
                      importer() {
                        return closure_1_0(closure_1_3[32])(closure_1_3[31], closure_1_3.paths).then((arg0) => {
                          closure_0 = arg0.default;
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
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 0;
                  v0 = 3;
                  obj20 = { value: null, done: true };
                  obj20[0] = arg1;
                  return obj20;
                } else {
                  throwTypeErrorResult = c1;
                  throwTypeErrorResult = c2;
                  throwTypeErrorResult = obj11;
                  throwTypeErrorResult = obj11();
                  throwTypeErrorResult = closure_1_1;
                  throwTypeErrorResult = closure_1_3;
                  const obj21 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: null };
                  throwTypeErrorResult = c15;
                  obj21[1] = c15;
                  throwTypeErrorResult = closure_1_1(closure_1_3[23]).dispatch(obj21);
                  throwTypeErrorResult = closure_1_1;
                  throwTypeErrorResult = closure_1_3;
                  const obj36 = closure_1_1(closure_1_3[23]);
                  throwTypeErrorResult = price;
                  throwTypeErrorResult = closure_1_0;
                  throwTypeErrorResult = closure_1_3;
                  const obj38 = closure_1_1(closure_1_3[15]);
                  const obj22 = { subscription_plan_gateway_plan_id: null, price: null, regular_price: null, currency: null, application_id: null };
                  throwTypeErrorResult = transactionReceipt;
                  obj22[0] = transactionReceipt;
                  throwTypeErrorResult = c17;
                  obj22[1] = c17;
                  throwTypeErrorResult = c17;
                  obj22[2] = c17;
                  let formatted;
                  throwTypeErrorResult = c3;
                  if (currencyCode != null) {
                    formatted = str3.toLowerCase();
                  }
                  obj22[3] = formatted;
                  obj22[4] = c4;
                  obj38.track(price.PAYMENT_FLOW_COMPLETED, closure_1_0(closure_1_3[29]).getPaymentFlowCompletedAnalyticsFields(throwTypeErrorResult, obj22));
                  obj = closure_1_1(closure_1_3[23]);
                  obj23 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: null };
                  obj23[1] = transactionReceipt;
                  obj.dispatch(obj23);
                  if (!c1) {
                    c4 = 2;
                    obj2 = closure_1_0(closure_1_3[18]);
                    c5 = 10;
                    v0 = 1;
                    const obj24 = { value: null, done: false };
                    obj24[0] = obj2.fetchSubscriptions();
                    return obj24;
                  }
                  const obj39 = closure_1_0(closure_1_3[29]);
                  str3 = currencyCode;
                }
              break;
              default:
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 0;
                  v0 = 3;
                  obj25 = { value: null, done: true };
                  obj25[0] = arg1;
                  return obj25;
                } else {
                  c4 = 1;
                }
            }
          } catch (throwTypeErrorResult) {
            c3 = throwTypeErrorResult;
            if (tmp5 === c4) {
              throwTypeErrorResult = tmp3;
              v0 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              c5 = throwTypeErrorResult;
            } else {
              c5 = tmp6;
            }
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
    return callback(function*() {
      if (c11 === 2) {
        c11 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp8;
        throwTypeErrorResult = globalThis;
        if (tmp9 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c11 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_7 = tmp4;
                closure_6 = tmp10;
                let lib;
                let lib2;
                let length;
                let iter2;
                let next;
                let iter5;
                throwTypeErrorResult = closure_1_15;
                if (closure_1_15.isBusy()) {
                  c11 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = [];
                  return obj1;
                } else {
                  throwTypeErrorResult = lib2(closure_3[23]).dispatch({ type: "IAP_RESTORE_PURCHASES_START" });
                  c8 = 2;
                  throwTypeErrorResult = lib2;
                  c10 = 3;
                  c11 = 1;
                  let obj2 = { value: null, done: false };
                  obj2[0] = lib2.loadProducts();
                  return obj2;
                }
              }
            } else if (1 === tmp10) {
              c8 = 0;
              lib2(closure_3[23]).dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
              throw closure_9;
            } else if (2 === tmp10) {
              c8 = 1;
              closure_6 = closure_9;
              let result = lib(closure_3[17]).captureBillingException(closure_6);
              throw closure_6;
            } else if (3 === tmp10) {
              if (arg0 === 1) {
                c11 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 0;
                lib2(closure_3[23]).dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                c11 = 3;
                let obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                let obj4 = { fullRestore: null };
                obj4[0] = lib;
                c10 = 4;
                c11 = 1;
                let obj5 = { value: null, done: false };
                obj5[0] = lib2(closure_3[20]).restorePurchases(obj4);
                return obj5;
              }
            } else {
              if (4 === tmp10) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c8 = 0;
                  let obj11 = lib2(closure_3[23]);
                  obj11.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                  c11 = 3;
                  const obj6 = { value: null, done: true };
                  obj6[0] = arg1;
                  return obj6;
                } else {
                  throwTypeErrorResult = closure_6;
                  lib = arg1;
                  throwTypeErrorResult = lib;
                  if (0 === lib.length) {
                    c8 = 0;
                    let obj9 = lib2(closure_3[23]);
                    obj9.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                    c11 = 3;
                    let obj7 = { value: null, done: true };
                    obj7[0] = [];
                    return obj7;
                  } else {
                    throwTypeErrorResult = closure_6;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = lib2;
                    throwTypeErrorResult = closure_3;
                    throwTypeErrorResult = lib;
                    const obj27 = lib2(closure_3[24])(lib);
                    lib2 = lib2(closure_3[24])(lib).uniqBy((purchaseResponse) => {
                      let originalTransactionIdentifier = purchaseResponse.purchaseResponse.jwsRepresentation;
                      if (originalTransactionIdentifier == null) {
                        originalTransactionIdentifier = purchaseResponse.purchaseResponse.originalTransactionIdentifier;
                      }
                      return originalTransactionIdentifier;
                    }).value();
                    length = [];
                    closure_3 = [];
                    function _loop(arg0) {
                      closure_0 = arg0;
                      c6 = 0;
                      c7 = 0;
                      c5 = 0;
                      return (function* _loop(arg0) {
                        let arr2 = tmp3;
                        purchaseResponse = purchaseResponse.purchaseResponse;
                        let transactionReceipt = purchaseResponse;
                        const product = closure_2_15.getProduct(purchaseResponse.productIdentifier);
                        const jwsRepresentation = purchaseResponse.jwsRepresentation;
                        transactionReceipt = jwsRepresentation;
                        if (jwsRepresentation == null) {
                          transactionReceipt = purchaseResponse.transactionReceipt;
                        }
                        obj1 = callback(iter2[13]);
                        const v3Result = obj1.v3(transactionReceipt);
                        let arr = v3Result;
                        giftOptionsForKey = giftOptionsForKey.getGiftOptionsForKey(v3Result);
                        c5 = 1;
                        obj1 = { jwsRepresentation: null, encodedReceipt: null, presentmentCurrency: null, presentmentAmount: null, appStoreRegion: null, giftInfoOptions: null, source: "restoreSubscription", skipDupCheck: null };
                        ({ jwsRepresentation: obj3[0], transactionReceipt: obj3[1] } = purchaseResponse);
                        if (product != null) {
                          const currencyCode = product.currencyCode;
                        }
                        obj1[2] = currencyCode;
                        if (product != null) {
                          const price = product.price;
                        }
                        obj1[3] = price;
                        if (product != null) {
                          const countryCode = product.countryCode;
                        }
                        obj1[4] = countryCode;
                        if (giftOptionsForKey != null) {
                          const gift_style = giftOptionsForKey.gift_style;
                        }
                        const obj2 = { gift_style: null, reward_sku_ids: null };
                        obj2[0] = gift_style;
                        if (giftOptionsForKey != null) {
                          const reward_sku_ids = giftOptionsForKey.reward_sku_ids;
                        }
                        obj2[1] = reward_sku_ids;
                        obj1[5] = obj2;
                        obj1[7] = purchaseResponse;
                        yield closure_2_24(obj1).then((arg0) => {
                          obj = callback(table[22]);
                          obj = { purchase: null };
                          obj = { productId: transactionReceipt.productIdentifier, transactionDate: transactionReceipt.transactionDate, transactionReceipt: transactionReceipt.transactionReceipt, transactionId: str.toString() };
                          obj[0] = obj;
                          obj.finishTransaction(obj);
                          if (null != arg0) {
                            obj1 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: null };
                            obj1[1] = c2;
                            transactionReceipt(table[23]).dispatch(obj1);
                            const obj4 = transactionReceipt(table[23]);
                          }
                          let tmp6 = null;
                          if (null != arg0) {
                            tmp6 = callback;
                          }
                          return tmp6;
                        });
                        if (1 === tmp7) {
                          c5 = 0;
                          arr2 = closure_4;
                          arr = arr2.push(arr2);
                          c7 = 3;
                        } else if (arg0 === 1) {
                          c7 = 3;
                          throw arg1;
                        } else if (arg0 !== 2) {
                          if (null != arg1) {
                            arr = arr.push(transactionReceipt);
                          }
                          c5 = 0;
                        }
                        c5 = 0;
                        return arg1;
                      })();
                    }
                    throwTypeErrorResult = lib2;
                    throwTypeErrorResult = lib2;
                    lib = lib2[Symbol.iterator]();
                    if (lib === undefined) {
                      if (length.length > 0) {
                        obj7 = lib(closure_3[18]);
                        c10 = 8;
                        c11 = 1;
                        const obj8 = { value: null, done: false };
                        obj8[0] = obj7.fetchSubscriptions();
                        return obj8;
                      } else if (closure_3.length > 0) {
                        const item = closure_3.forEach((error) => {
                          const result = callback(iter2[17]).captureBillingException(error);
                        });
                        const _Error = Error;
                        error = new Error("There were some errors while trying to restore");
                        throw error;
                      } else {
                        c8 = 0;
                        obj5 = lib2(closure_3[23]);
                        obj5.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                        c11 = 3;
                        obj9 = { value: null, done: true };
                        obj9[0] = length;
                        return obj9;
                      }
                    } else {
                      throwTypeErrorResult = closure_6;
                      c8 = 3;
                      closure_5 = tmp41;
                      throwTypeErrorResult = _loop;
                      throwTypeErrorResult = closure_5;
                      throwTypeErrorResult = _loop(closure_5);
                      iter5 = throwTypeErrorResult[throwTypeErrorResult.iterator]();
                      throwTypeErrorResult = iter5;
                      throwTypeErrorResult = HermesBuiltin.ensureObject("iterator is not an object");
                      next = iter5.next;
                      length = undefined;
                    }
                    const iter4 = lib2(closure_3[24])(lib).uniqBy((purchaseResponse) => {
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
                lib.return();
                throw closure_9;
              } else if (6 === tmp10) {
                c8 = 4;
                if (arg0 === 1) {
                  c11 = 3;
                  throw arg1;
                } else {
                  length = arg1;
                  if (arg0 === 2) {
                    length = arg1;
                    c8 = 3;
                    const method = HermesBuiltin.getMethod("return");
                    if (method === undefined) {
                      c8 = 2;
                      lib.return();
                      c8 = 0;
                      obj3 = lib2(closure_3[23]);
                      obj3.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                      c11 = 3;
                      const obj10 = { value: null, done: true };
                      obj10[0] = arg1;
                      return obj10;
                    } else {
                      throwTypeErrorResult = iter5;
                      throwTypeErrorResult = length;
                      const iter3 = method(length);
                      throwTypeErrorResult = iter3;
                      throwTypeErrorResult = HermesBuiltin.ensureObject("iterator.return() did not return an object");
                      if (iter3.done) {
                        c8 = 2;
                        lib.return();
                        c8 = 0;
                        obj1 = lib2(closure_3[23]);
                        obj1.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                        c11 = 3;
                        obj11 = { value: null, done: true };
                        obj11[0] = iter3.value;
                        return obj11;
                      } else {
                        c10 = 6;
                        c11 = 1;
                        return iter3;
                      }
                    }
                  } else {
                    c8 = 3;
                    const tmp23 = arg1;
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
                  HermesBuiltin.throwTypeError();
                } else {
                  const iter = method1(tmp12);
                  HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                  if (iter.done) {
                    iter2 = iter;
                  } else {
                    c10 = 6;
                    c11 = 1;
                    return iter;
                  }
                }
                const value = iter2.value;
                c8 = 2;
                tmp12 = closure_9;
              } else if (arg0 === 1) {
                c11 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 0;
                throwTypeErrorResult = closure_7;
                throwTypeErrorResult = lib2;
                throwTypeErrorResult = closure_3;
                throwTypeErrorResult = lib2(closure_3[23]).dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                c11 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              iter2 = next(tmp23);
              HermesBuiltin.ensureObject("iterator.next() did not return an object");
              if (!iter2.done) {
                c10 = 6;
                c11 = 1;
                return iter2;
              }
            }
          } catch (throwTypeErrorResult) {
            closure_9 = throwTypeErrorResult;
            throwTypeErrorResult = c8;
            if (tmp5 === c8) {
              throwTypeErrorResult = tmp3;
              c11 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              c10 = tmp2;
            } else if (throwTypeErrorResult === throwTypeErrorResult) {
              c10 = throwTypeErrorResult;
            } else if (tmp3 === throwTypeErrorResult) {
              c10 = tmp7;
            } else {
              c10 = tmp6;
            }
          }
        }
      }
    })();
  }
};
let items = [require("module_11015").ErrorCode.E_USER_CANCELLED, StoreKitErrors.PAYMENT_CANCELED];
let set = new Set(items);
obj = { NONE: "none", CANNOT_MAKE_REQUEST: "cannot_make_request", INVALID_CURRENCY: "invalid_currency", PURCHASE_INCOMPLETE: "purchase_incomplete", USER_CANCELLED: "user_cancelled", POST_PURCHASE_FAILED: "post_purchase_failed" };
let result = set.fileFinishedImporting("actions/native/BillingActionCreators.tsx");

export default obj;
export { getIAPJWTRequestData };
export { updateAppleSubscription };
export const cancelGenericSubscription = function cancelGenericSubscription(requestIdentifier, subscriptionId, closure_1_1) {
  const self = this;
  const apply = _cancelGenericSubscription.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { isValidCurrency };
export const SubscriptionPurchaseFailureReason = obj;
export const createGenericSubscription = function createGenericSubscription(closure_1_5) {
  const self = this;
  const apply = _createGenericSubscription.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const modifyGenericSubscription = function modifyGenericSubscription(arg0) {
  const self = this;
  const apply = _modifyGenericSubscription.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resubscribeGenericSubscription = function resubscribeGenericSubscription(closure_1_5, isACOM) {
  const self = this;
  const apply = _resubscribeGenericSubscription.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const mobilePurchaseSKU = function mobilePurchaseSKU(arg0, arg1) {
  const self = this;
  const apply = _mobilePurchaseSKU.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const migrateToACOM = function migrateToACOM() {
  const self = this;
  const apply = _migrateToACOM.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};