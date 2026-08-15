// discord_app/actions/native/BillingActionCreators.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import closure_8 from "usePremiumPlanPurchasedStore";
import "set";
import isGenericIapConnected from "isGenericIapConnected";
import initialize from "initialize";
import usePremiumPlanPurchasedStore from "usePremiumPlanPurchasedStore";
import mergeGuildAvatar from "mergeGuildAvatar";
import reset from "reset";
import updateProduct from "updateProduct";
import ME from "ME";
import { PaymentGateways } from "sum";
import { jsx } from "fetchSubscriptionPlansForSKU";
import set from "noop";
import { MurmurHashV3 } from "../../../_runtime/01217_MurmurHashV3.js";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { Storage } from "../../../discord_common/js/packages/storage/Storage.tsx";
import { APBRequestOperations } from "../../../discord_common/js/shared/shared-constants/APBRequestOperations.tsx";
import { dispatcher } from "../../Dispatcher.tsx";
import { V6OrEarlierAPIError } from "../../errors/index.tsx";
import { useBlockedPaymentsConfig } from "../../modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx";
import { openBlockedPaymentsCountryActionSheet } from "../../modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx";
import { isSpendingLimitError } from "../../modules/parent_tools/native/showSpendingLimitReachedAlert.tsx";
import { SubscriptionPlans } from "../../modules/premium/native/ProductIds.android.tsx";
import { AlertActionCreators } from "AlertActionCreators.tsx";

let StoreKitErrors;
let closure_12;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let unpackModuleId;
let require = arg1;
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
  let obj = MurmurHashV3;
  const v3Result = obj.v3(first);
  const require = v3Result;
  let Storage = Storage.Storage;
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
    tmp2(698).track(constants.GIFT_INFO_OPTIONS_MISSING, obj);
    const tmp2Result = tmp2(698);
  }
  const HTTP = sendRequest.HTTP;
  obj = { url: constants2.BILLING_APPLY_APPLE_RECEIPT, body: { encoded_receipt: encodedReceipt, entitlement_sku_id: entitlementSkuId, presentment_currency: presentmentCurrency, presentment_amount: presentmentAmount, app_store_region: appStoreRegion, gift_info_options: giftInfoOptions, is_gift: isGift, source, jws_representations: jwsRepresentations, order_id: orderId }, retries, oldFormErrors: true, rejectWithError: true };
  const postResult = HTTP.post(obj);
  tmp2 = importDefault;
  const tmp5 = require;
  resolved = HTTP.post(obj).then((arg0) => {
    const Storage = v3Result(outer1_3[14]).Storage;
    const result = Storage.set(outer1_22, closure_0);
    return arg0;
  }).catch((error) => {
    let obj = v3Result(table[17]);
    obj = { source: closure_23 };
    const result = obj.captureBillingException(error, { tags: obj });
    throw error;
  });
}
function _getTrialOfferSignature() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, body) {
      let closure_4 = tmp3;
      let c6 = 1;
      const HTTP = callback(outer1_3[16]).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: false };
      obj1[0] = outer1_19.BILLING_GENERATE_APPLE_TRIAL_OFFER_SIGNATURE;
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
  const _getTrialOfferSignature = tmp;
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
    let obj = isSpendingLimitError;
    let billingError = code;
    if (!(code instanceof V6OrEarlierAPIError.BillingError)) {
      billingError = new tmp(4273).BillingError(code);
    }
    if (obj.isSpendingLimitError(billingError)) {
      let tmpResult = tmp(7620);
      const result = tmpResult.showSpendingLimitReachedAlert();
    } else {
      const message = code.message;
      const _JSON = JSON;
      const json = JSON.stringify(code);
      let obj1 = importAll(7731);
      const underlyingIOSError = obj1.getUnderlyingIOSError(code);
      if (null != underlyingIOSError) {
        obj = { title: null, body: null };
        const intl2 = tmp(1236).intl;
        obj[0] = intl2.string(tmp(1236).t.POsVOt);
        obj[1] = underlyingIOSError;
        AlertActionCreators.show(obj);
        throw code;
      } else {
        const intl3 = tmp(1236).intl;
        const stringResult = intl3.string(tmp(1236).t.PjfUXe);
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
        if (!(code instanceof tmp(4273).BillingError)) {
          billingError1 = new tmp(4273).BillingError(code);
        }
        let tmp19 = message2 === stringResult && flag;
        if (tmp19) {
          tmp19 = billingError1.code !== tmp(4061).ErrorCodes.UNKNOWN;
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
        let obj2 = AlertActionCreators;
        obj = { title: null, body: null, isDismissable: true, hideActionSheet: null };
        const intl = tmp(1236).intl;
        obj[0] = intl.string(tmp(1236).t.zrhHH3);
        obj[1] = message2;
        obj[3] = flag;
        obj2.show(obj);
        tmpResult = tmp(4054);
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
      openBlockedPaymentsCountryActionSheet();
      flag = false;
    }
    tmp2 = flag;
    const obj = useBlockedPaymentsConfig;
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
  let tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c10 = 0;
    let c11 = 0;
    let c9 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c11 === 2) {
        c11 = 3;
        HermesBuiltin.throwTypeError();
      } else {
        let tmp = arg0;
        tmp = tmp6;
        tmp = null;
        if (tmp7 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
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
                let _objectWithoutProperties = tmp4;
                let closure_6 = tmp8;
                tmp = callback;
                tmp = callback2;
                tmp = callback3;
                tmp = dependencyMap;
                closure_6 = undefined;
                _objectWithoutProperties = undefined;
                let transactionDate;
                let length;
                c10 = undefined;
                let closure_4 = false;
                obj = null;
                length = 2;
                tmp = callback;
                tmp = dependencyMap;
                c10 = 3;
                c11 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = callback(7706).clearTransactionIOS();
                return obj1;
              }
            } else if (1 === tmp8) {
              length = 0;
              const obj2 = { request_identifier: null, success: null };
              obj2[0] = callback;
              obj2[1] = closure_4;
              const merged = Object.assign(obj);
              callback2(698).track(constants.APPLE_PARTNER_IAP_REQUEST_SENT, obj2);
              throw transactionDate;
            } else if (2 === tmp8) {
              length = 1;
              c11 = transactionDate;
              length = callback3(7731).getUnderlyingIOSError(c11);
              if (null != length) {
                if (length.length > 0) {
                  let str1 = length;
                }
                c10 = str1;
                let str2 = c11.code;
                let str;
                if (str2 != null) {
                  str = str2.toString();
                }
                const obj3 = { error_code: null, error_message: null };
                obj3[0] = str;
                obj3[1] = c10;
                obj = obj3;
                throw c11;
              }
              str = c11.message;
              if (str != null) {
                str1 = str.toString();
              }
              const obj13 = callback3(7731);
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c11 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                length = 0;
                let obj9 = callback2(698);
                let obj4 = { request_identifier: null, success: null };
                obj4[0] = callback;
                obj4[1] = closure_4;
                const merged1 = Object.assign(obj);
                obj9.track(constants.APPLE_PARTNER_IAP_REQUEST_SENT, obj4);
                c11 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                let obj7 = callback(7705);
                c10 = 4;
                c11 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = obj7.makeIAPRequest(callback2, callback3, dependencyMap);
                return obj6;
              }
            } else if (arg0 === 1) {
              c11 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              length = 0;
              obj4 = callback2(698);
              obj7 = { request_identifier: null, success: null };
              obj7[0] = callback;
              obj7[1] = closure_4;
              const merged2 = Object.assign(obj);
              obj4.track(constants.APPLE_PARTNER_IAP_REQUEST_SENT, obj7);
              c11 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              tmp = closure_6;
              closure_6 = arg1;
              closure_4 = true;
              tmp = closure_6;
              _objectWithoutProperties = closure_6.purchaseResponse.transactionIdentifier.toString();
              tmp = closure_6;
              transactionDate = closure_6.purchaseResponse.transactionDate;
              tmp = closure_6;
              str2 = undefined;
              if (closure_6.purchaseResponse.originalTransactionIdentifier != null) {
                str2 = str5.toString();
              }
              closure_4 = str2;
              if (str2 == null) {
                closure_4 = _objectWithoutProperties;
              }
              obj = { original_transaction_id: null, original_transaction_date: null, transaction_id: null, transaction_date: null };
              obj[0] = closure_4;
              const originalTransactionDate = closure_6.purchaseResponse.originalTransactionDate;
              obj = originalTransactionDate;
              if (originalTransactionDate == null) {
                obj = transactionDate;
              }
              obj[1] = obj;
              obj[2] = _objectWithoutProperties;
              obj[3] = transactionDate;
              length = 0;
              obj1 = callback2(698);
              obj9 = { request_identifier: null, success: null };
              obj9[0] = callback;
              obj9[1] = closure_4;
              const merged3 = Object.assign(obj);
              obj1.track(constants.APPLE_PARTNER_IAP_REQUEST_SENT, obj9);
              c11 = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = closure_6;
              return obj10;
            }
          } catch (tmp94) {
            transactionDate = tmp94;
            if (tmp5 === length) {
              c11 = tmp3;
              throw tmp94;
            } else if (tmp2 === tmp96) {
              c10 = tmp2;
            } else {
              c10 = tmp;
            }
          }
        }
      }
    })();
  });
  const _clearAndMakeIAPRequest = tmp;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      let body = tmp2;
      let obj1 = { url: null, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: true };
      obj1[0] = outer1_19.BILLING_CREATE_APPLE_IAP_JWT_TOKEN;
      obj1[1] = callback;
      let obj2 = { event: null, properties: null };
      obj2[0] = callback(503).NetworkActionNames.APPLE_JWT_TOKEN_CREATE;
      obj2[1] = function properties(body) {
        let country_code;
        let gift_info_options;
        let is_gift;
        let items;
        if (lib.operation !== lib(table[41]).APBRequestOperations.CREATE) {
          if (tmp.operation !== tmp2(tmp3[42]).ACRequestOperations.CREATE) {
            if (tmp.operation === tmp2(tmp3[42]).ACRequestOperations.MODIFY) {
              let obj = { subscription_items_json_string: null };
              const _JSON2 = JSON;
              obj[0] = JSON.stringify(tmp.subscription_items);
              const merged = Object.assign(outer1_7(tmp, outer1_5));
              const tmp15 = outer1_7(tmp, outer1_5);
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
              const merged2 = Object.assign(outer1_7(tmp, outer1_6));
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
          const obj1 = { jwt_token_exists: null };
          obj1[0] = str.length > 0;
          const merged3 = Object.assign(obj);
          return tmp2(tmp3[43]).exact(obj1);
        }
        ({ items, country_code } = lib);
        const obj2 = { subscription_items_json_string: null, request_country_code: null };
        obj2[0] = JSON.stringify(items);
        obj2[1] = country_code;
        const merged4 = Object.assign(outer1_7(lib, outer1_4));
        obj = obj2;
      };
      obj1[3] = obj2;
      body = yield outer1_1(5227).post(obj1);
      let obj = { requestJSONString: null };
      let _JSON = JSON;
      obj[0] = JSON.stringify(body.body.request_data);
      return obj;
    })();
  });
  const _getIAPJWTRequestData = tmp;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj1 = { url: null, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: false };
              obj1[0] = outer1_19.BILLING_APPLE_SUBSCRIPTION(lib.subscription_id);
              obj1[1] = lib;
              const obj2 = { event: null, properties: null };
              obj2[0] = lib(outer1_3[40]).NetworkActionNames.APPLE_JWT_TOKEN_CREATE;
              obj2[1] = function properties(body) {
                let obj = {};
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
                return callback(outer1_3[43]).exact(obj);
              };
              obj1[3] = obj2;
              c2 = 1;
              v0 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = v0(outer1_3[39]).patch(obj1);
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp5) {
          v0 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  const _updateAppleSubscription = tmp;
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
    if (tmp(7867).APBRequestOperations.CANCEL !== arg0) {
      if (tmp(7867).APBRequestOperations.RESUBSCRIBE !== arg0) {
        if (tmp(7867).APBRequestOperations.REACTIVATE !== arg0) {
          if (tmp(7867).APBRequestOperations.CHARGE === arg0) {
            return tmp(5322).ProductIds.GENERIC_CONSUMABLE;
          } else {
            if (tmp(7868).ACRequestOperations.CREATE !== arg0) {
              if (tmp(7868).ACRequestOperations.CANCEL !== arg0) {
                if (tmp(7868).ACRequestOperations.REACTIVATE !== arg0) {
                  if (tmp(7868).ACRequestOperations.MODIFY !== arg0) {
                    if (tmp(7868).ACRequestOperations.CHARGE === arg0) {
                      return tmp(5322).ProductIds.GENERIC_CONSUMABLE;
                    } else {
                      const _Error = Error;
                      const error = new Error("Invalid operation");
                      throw error;
                    }
                  }
                }
              }
            }
            return tmp(5322).ProductIds.GENERIC_SUBSCRIPTION;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let c4 = tmp3;
              let CANCEL = tmp7;
              CANCEL = undefined;
              c4 = undefined;
              if (outer1_29()) {
                let tmp32 = closure_0;
                let dispatchResult = outer1_3;
                if (tmp47) {
                  CANCEL = tmp32(dispatchResult[42]).ACRequestOperations.CANCEL;
                } else {
                  CANCEL = tmp32(dispatchResult[41]).APBRequestOperations.CANCEL;
                }
                tmp32 = outer1_36(CANCEL);
                c4 = tmp32;
                const obj1 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: null };
                obj1[1] = tmp32;
                dispatchResult = callback(outer1_3[23]).dispatch(obj1);
                c7 = 1;
                c8 = 1;
                const obj9 = callback(outer1_3[23]);
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
              let c6 = 1;
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
            obj5[1] = c4;
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
            obj7[1] = c4;
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
  const _cancelGenericSubscription = tmp;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0, requestJSONString) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw requestJSONString;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = requestJSONString;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let dependencyMap;
              c4 = undefined;
              ({ requestIdentifier: c0, items: c1, currency: c2, countryCode: c3, orderId: c4 } = callback);
              c5 = undefined;
              c6 = undefined;
              let obj9;
              requestJSONString = undefined;
              let isGenericIapConnected;
              let purchaseResponse;
              let originalPurchase;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c6 = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = requestJSONString;
              return obj1;
            } else if (callback3()) {
              if (callback7(c2)) {
                c5 = callback6(callback(7868).ACRequestOperations.CREATE);
                let obj22 = lib(709);
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
              obj10[0] = callback(7868).ACRequestOperations.CREATE;
              const merged = Object.assign(obj9);
              c5 = 4;
              c6 = 1;
              const obj11 = { value: null, done: false };
              obj11[0] = callback5(obj10);
              return obj11;
            }
          } else if (3 === tmp6) {
            c4 = 0;
            let closure_12 = dependencyMap;
            let obj13 = lib(709);
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
              isGenericIapConnected = requestJSONString;
              purchaseResponse = isGenericIapConnected.purchaseResponse;
              originalPurchase = isGenericIapConnected.originalPurchase;
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
              obj5 = callback(7706);
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
            obj = lib(709);
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
  const _createGenericSubscription = tmp;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0, requestJSONString) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw requestJSONString;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = requestJSONString;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === GENERIC_SUBSCRIPTION) {
            if (arg0 === 1) {
              c6 = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = requestJSONString;
              return obj;
            } else {
              c2 = tmp3;
              let callback2 = tmp8;
              let callback;
              callback2 = undefined;
              c2 = undefined;
              let dependencyMap;
              let v0;
              ({ requestIdentifier: c0, subscriptionId: c1, items: c2, orderId: c3, onPurchaseComplete: c4 } = callback);
              GENERIC_SUBSCRIPTION = undefined;
              c6 = undefined;
              requestJSONString = undefined;
              let closure_8;
              let purchaseResponse;
              let originalPurchase;
              GENERIC_SUBSCRIPTION = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = requestJSONString;
              return obj1;
            } else if (callback4()) {
              GENERIC_SUBSCRIPTION = callback(5322).ProductIds.GENERIC_SUBSCRIPTION;
              let obj23 = callback2(709);
              const obj2 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: null };
              obj2[1] = GENERIC_SUBSCRIPTION;
              GENERIC_SUBSCRIPTION = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj23.dispatch(obj2);
              return obj3;
            } else {
              const obj4 = { success: false, failureReason: null };
              obj4[1] = constants.CANNOT_MAKE_REQUEST;
              c6 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = obj4;
              return obj5;
            }
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj6 = { value: null, done: true };
              obj6[0] = requestJSONString;
              return obj6;
            } else {
              c6 = false;
              v0 = 1;
              const obj7 = { operation: null, request_identifier: null, subscription_id: null, subscription_items: null, order_id: null };
              obj7[0] = callback(7868).ACRequestOperations.MODIFY;
              obj7[1] = callback;
              obj7[2] = callback2;
              obj7[3] = c2.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity }));
              obj7[4] = dependencyMap;
              GENERIC_SUBSCRIPTION = 4;
              c6 = 1;
              const obj8 = { value: null, done: false };
              obj8[0] = callback6(obj7);
              return obj8;
            }
          } else if (3 === tmp8) {
            v0 = 0;
            let closure_12 = dependencyMap;
            let obj16 = callback2(709);
            const obj9 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: null };
            obj9[1] = GENERIC_SUBSCRIPTION;
            obj16.dispatch(obj9);
            let tmp58 = null == dependencyMap;
            if (!tmp58) {
              tmp58 = c6;
            }
            closure_28(closure_12, "advanced_commerce", tmp58);
            let obj10 = constants;
            if (c6) {
              let PURCHASE_INCOMPLETE = obj10.POST_PURCHASE_FAILED;
            } else {
              PURCHASE_INCOMPLETE = obj10.PURCHASE_INCOMPLETE;
            }
            obj10 = { success: false, failureReason: null };
            obj10[1] = PURCHASE_INCOMPLETE;
            c6 = 3;
            const tmp55 = closure_28;
            const tmp56 = closure_12;
          } else if (4 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj11 = { value: null, done: true };
              obj11[0] = requestJSONString;
              return obj11;
            } else {
              requestJSONString = requestJSONString.requestJSONString;
              GENERIC_SUBSCRIPTION = 5;
              c6 = 1;
              const obj12 = { value: null, done: false };
              obj12[0] = callback5(callback, requestJSONString, GENERIC_SUBSCRIPTION, true);
              return obj12;
            }
          } else if (5 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj13 = { value: null, done: true };
              obj13[0] = requestJSONString;
              return obj13;
            } else {
              closure_8 = requestJSONString;
              purchaseResponse = closure_8.purchaseResponse;
              originalPurchase = closure_8.originalPurchase;
              c6 = true;
              v0 = 2;
              let tmp40;
              if (v0 != null) {
                tmp40 = v0();
              }
              GENERIC_SUBSCRIPTION = 8;
              c6 = 1;
              const obj14 = { value: null, done: false };
              obj14[0] = tmp40;
              return obj14;
            }
          } else {
            if (6 === tmp8) {
              v0 = 1;
              let closure_11 = dependencyMap;
              obj10 = callback(4054);
              const result = obj10.captureBillingException(closure_11);
              const obj15 = { encodedReceipt: null, retries: 3, jwsRepresentation: null, source: "modifyGenericSubscription", orderId: null };
              obj15[0] = purchaseResponse.transactionReceipt;
              obj15[2] = purchaseResponse.jwsRepresentation;
              obj15[4] = dependencyMap;
              callback3(obj15);
              GENERIC_SUBSCRIPTION = 7;
              c6 = 1;
            } else if (7 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw requestJSONString;
              } else if (arg0 === 2) {
                v0 = 0;
                c6 = 3;
                obj16 = { value: null, done: true };
                obj16[0] = requestJSONString;
                return obj16;
              } else {
                obj6 = callback(7706);
                const obj17 = { purchase: null };
                obj17[0] = originalPurchase;
                GENERIC_SUBSCRIPTION = 9;
                c6 = 1;
                const obj18 = { value: null, done: false };
                obj18[0] = obj6.finishTransaction(obj17);
                return obj18;
              }
            } else if (8 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw requestJSONString;
              } else if (arg0 !== 2) {
                v0 = 1;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj19 = { value: null, done: true };
              obj19[0] = requestJSONString;
              return obj19;
            } else {
              obj = callback2(709);
              const obj20 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: null };
              obj20[1] = GENERIC_SUBSCRIPTION;
              obj.dispatch(obj20);
              const obj21 = { success: true, failureReason: null };
              obj21[1] = constants.NONE;
              v0 = 0;
              c6 = 3;
              const obj22 = { value: null, done: true };
              obj22[0] = obj21;
              return obj22;
            }
            v0 = 0;
            c6 = 3;
            obj23 = { value: null, done: true };
            obj23[0] = requestJSONString;
            return obj23;
          }
        } catch (tmp73) {
          dependencyMap = tmp73;
          if (tmp4 === v0) {
            c6 = tmp2;
            throw tmp73;
          } else if (tmp === tmp75) {
            GENERIC_SUBSCRIPTION = tmp2;
          } else {
            GENERIC_SUBSCRIPTION = tmp5;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _modifyGenericSubscription = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (function*(arg0, requestJSONString) {
      let c0;
      let c1;
      if (purchaseResponse === 2) {
        purchaseResponse = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw requestJSONString;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = requestJSONString;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let closure_2 = tmp6;
              let callback;
              let callback2;
              closure_2 = undefined;
              ({ requestIdentifier: c0, subscriptionId: c1 } = callback);
              closure_2 = callback2;
              obj2 = undefined;
              let closure_4;
              requestJSONString = undefined;
              c6 = undefined;
              purchaseResponse = undefined;
              let originalPurchase;
              c6 = 1;
              purchaseResponse = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              purchaseResponse = 3;
              throw requestJSONString;
            } else if (arg0 === 2) {
              purchaseResponse = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = requestJSONString;
              return obj1;
            } else if (callback4()) {
              obj2 = { request_identifier: null, subscription_id: null };
              obj2[0] = callback;
              obj2[1] = callback2;
              let obj22 = closure_36;
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
            let isGenericIapConnected = closure_4;
            let obj13 = callback2(obj2[23]);
            const obj9 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: null };
            obj9[1] = closure_4;
            obj13.dispatch(obj9);
            let str = "partner_subscription";
            if (closure_2) {
              str = "advanced_commerce";
            }
            closure_28(isGenericIapConnected, str);
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
  const _resubscribeGenericSubscription = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, arg1) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let c7;
              c8 = undefined;
              let tmp91 = callback2;
              let tmp92 = outer1_3;
              let obj23 = callback2(outer1_3[20]);
              c8 = 1;
              let num22 = 1;
              c9 = 1;
              let obj1 = { value: null, done: false };
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
                let error = new Error(c8);
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
  const _retryPendingPurchases = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    const iter = (function*(arg0, arg1) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          const obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          let c7 = 0;
          const code = closure_6;
          if (code.code === callback(4061).ErrorCodes.BILLING_PURCHASE_REQUEST_INVALID) {
            const result = callback(4054).captureBillingException(code, {});
            const obj2 = callback(4054);
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
            let c8 = tmp2;
          } else {
            c8 = tmp4;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _mobilePurchaseSKU = tmp;
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
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
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
          } else if (null == outer1_13.getCurrentUser()) {
            c2 = 3;
            return { value: false, done: true };
          } else if (outer1_29()) {
            let obj1 = outer1_14;
            const activeGuildSubscriptions = outer1_14.getActiveGuildSubscriptions();
            let closure_0 = activeGuildSubscriptions;
            if (activeGuildSubscriptions == null) {
              closure_0 = [];
            }
            const found = closure_0.filter((paymentGateway) => paymentGateway.paymentGateway === constants2.APPLE_PARTNER);
            const subscriptions = obj1.getSubscriptions();
            let closure_1 = subscriptions;
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
            const NitroACOMSubscriptionExperiment = outer1_0(table[47]).NitroACOMSubscriptionExperiment;
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
            let c4 = 1;
            const HTTP = outer1_0(table[16]).HTTP;
            obj1 = { url: null, rejectWithError: true, body: null };
            obj1[0] = outer1_19.BILLING_ACOM_SUBSCRIPTION_MIGRATION;
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
  const _migrateToACOM = tmp;
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
({ setPaymentSuccess: unpackModuleId, showOldPaymentFlowSuccess: closure_12 } = usePremiumPlanPurchasedStore);
({ SubscriptionTypes: closure_16, AnalyticEvents: closure_17, CurrencyCodes: closure_18, Endpoints: closure_19, StoreKitErrors } = ME);
const localAppleReceiptHash = "localAppleReceiptHash";
const BILLING = "BILLING";
new require("isGenericIapConnected")("BillingActionCreators.tsx");
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
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let closure_2 = tmp4;
              let closure_1 = tmp8;
              let c4 = 1;
              let c0 = null;
              if (obj13.isIOS()) {
                c4 = 2;
                c5 = 3;
                c6 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_1(outer1_3[20]).fetchStoreFront();
                return obj1;
              }
              obj13 = outer1_0(outer1_3[19]);
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
            let obj5 = outer1_0(outer1_3[21]);
            let premiumSubscriptionPlans = obj5.fetchPremiumSubscriptionPlans(c0.country, undefined, undefined, outer1_20.APPLE_ADVANCED_COMMERCE);
          } else {
            obj4 = outer1_0(outer1_3[21]);
            premiumSubscriptionPlans = obj4.fetchPremiumSubscriptionPlans();
          }
          const items = [premiumSubscriptionPlans, , ];
          if (c0 == null) {
            c0 = undefined;
          }
          items[1] = c0.loadProducts(c0);
          items[2] = outer1_0(outer1_3[18]).fetchSubscriptions();
          c5 = 4;
          c6 = 1;
          obj5 = { value: null, done: false };
          obj5[0] = Promise.all(items);
          return obj5;
        } catch (tmp38) {
          let closure_3 = tmp38;
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
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              callback = outer1_9.isGenericIapConnected();
              if (callback) {
                c5 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = callback;
                return obj1;
              } else {
                let dependencyMap = 1;
                c4 = 2;
                c5 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = outer1_0(7706).initConnection();
                return obj2;
              }
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            callback2 = closure_2;
            let obj4 = callback(4054);
            const result = obj4.captureBillingException(callback2);
            let obj5 = callback2(709);
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
            obj = callback2(709);
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
    dispatcher.dispatch({ type: "GENERIC_IAP_END_CONNECTION" });
  },
  loadProducts(arg0) {
    let closure_0 = arg0;
    return callback(function*() {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let closure_2 = tmp3;
              let closure_1 = tmp7;
              let closure_0;
              closure_1 = undefined;
              closure_2 = undefined;
              let c4 = 1;
              outer1_1(outer1_3[23]).dispatch({ type: "IAP_LOAD_PRODUCTS_START" });
              const obj16 = outer1_1(outer1_3[23]);
              c5 = 2;
              c6 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = outer1_1(outer1_3[20]).loadProducts();
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              outer1_3 = closure_3;
              outer1_1(outer1_3[23]).dispatch({ type: "IAP_LOAD_PRODUCTS_FAILED" });
              const obj11 = outer1_1(outer1_3[23]);
              const result = outer1_0(outer1_3[17]).captureBillingException(outer1_3);
              c6 = 3;
              const obj12 = outer1_0(outer1_3[17]);
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
                  closure_2 = outer1_1(outer1_3[24]).filter(closure_1, (identifier) => {
                    const GenericProductIds = callback(tmp45[25]).GenericProductIds;
                    return GenericProductIds.includes(identifier.identifier);
                  });
                  if (null != closure_0) {
                    let tmp8 = closure_0;
                  }
                  const arr = outer1_1(outer1_3[24]);
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
                closure_0 = arg1;
                if (arg1 == null) {
                  closure_0 = { country: "US", currency: "usd" };
                }
                tmp8 = closure_0;
              }
              outer1_0 = tmp8;
              obj1 = outer1_1(outer1_3[23]);
              let obj3 = { type: "IAP_LOAD_PRODUCTS", products: null };
              obj3[1] = outer1_1;
              obj1.dispatch(obj3);
              if (outer1_2.length === outer1_0(outer1_3[25]).GenericProductIds.length) {
                let obj5 = outer1_1(outer1_3[23]);
                const obj4 = { type: "IAP_LOAD_GENERIC_PRODUCTS", products: null, storeFront: null };
                obj4[1] = closure_2;
                obj4[2] = closure_0;
                obj5.dispatch(obj4);
              } else {
                obj3 = outer1_1(outer1_3[23]);
                obj5 = { type: "GENERIC_IAP_SET_STORE_FRONT", storeFront: null };
                obj5[1] = closure_0;
                obj3.dispatch(obj5);
              }
              c4 = 0;
            }
            c5 = 3;
            c6 = 1;
            const obj6 = { value: null, done: false };
            obj6[0] = outer1_1(outer1_3[20]).fetchStoreFront();
            return obj6;
          }
        } catch (tmp45) {
          closure_3 = tmp45;
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
    let closure_0 = arg0;
    return callback(function*() {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            let c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            outer1_11();
            const obj1 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: null };
            obj1[1] = updateProduct;
            outer1_1(outer1_3[23]).dispatch(obj1);
            const obj10 = outer1_1(outer1_3[23]);
            const obj12 = outer1_1(outer1_3[15]);
            let obj2 = { subscription_plan_gateway_plan_id: null, price: null, regular_price: null, currency: null, application_id: null };
            obj2[0] = closure_0;
            obj2[1] = closure_17;
            obj2[2] = closure_17;
            let formatted;
            if (closure_18 != null) {
              formatted = str3.toLowerCase();
            }
            obj2[3] = formatted;
            obj2[4] = c4;
            obj12.track(outer1_17.PAYMENT_FLOW_COMPLETED, outer1_0(outer1_3[29]).getPaymentFlowCompletedAnalyticsFields(closure_3, obj2));
            obj = outer1_1(outer1_3[23]);
            const obj3 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: null };
            obj3[1] = closure_0;
            obj.dispatch(obj3);
            if (closure_1) {
              c4 = 0;
              c6 = 3;
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                c4 = 1;
                let obj5 = outer1_1(outer1_3[20]);
                let c5 = 3;
                c6 = 1;
                obj5 = { value: null, done: false };
                obj5[0] = obj5.canMakePayments();
                return obj5;
              }
            } else {
              c4 = 2;
              obj2 = outer1_0(outer1_3[18]);
              c5 = 10;
              c6 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = obj2.fetchSubscriptions();
              return obj6;
            }
            const obj13 = outer1_0(outer1_3[29]);
            str3 = closure_18;
            const tmp47 = closure_3;
          }
        } catch (tmp24) {
          closure_3 = tmp24;
          if (tmp4 === c4) {
            c6 = tmp3;
            throw tmp24;
          } else if (tmp2 === tmp26) {
            c5 = tmp;
          } else {
            c5 = tmp5;
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
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
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
                let _objectWithoutProperties = tmp4;
                let closure_6 = tmp10;
                let closure_0;
                let closure_1;
                let closure_2;
                let iter2;
                let next;
                let iter5;
                throwTypeErrorResult = outer1_15;
                if (outer1_15.isBusy()) {
                  c11 = 3;
                  let obj1 = { value: null, done: true };
                  obj1[0] = [];
                  return obj1;
                } else {
                  throwTypeErrorResult = outer1_1(outer1_3[23]).dispatch({ type: "IAP_RESTORE_PURCHASES_START" });
                  let c8 = 2;
                  throwTypeErrorResult = outer1_1;
                  c10 = 3;
                  c11 = 1;
                  let obj2 = { value: null, done: false };
                  obj2[0] = outer1_1.loadProducts();
                  return obj2;
                }
              }
            } else if (1 === tmp10) {
              c8 = 0;
              outer1_1(outer1_3[23]).dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
              throw isGenericIapConnected;
            } else if (2 === tmp10) {
              c8 = 1;
              const outer1_6 = isGenericIapConnected;
              let result = outer1_0(outer1_3[17]).captureBillingException(outer1_6);
              throw outer1_6;
            } else if (3 === tmp10) {
              if (arg0 === 1) {
                c11 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 0;
                outer1_1(outer1_3[23]).dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                c11 = 3;
                let obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                let obj4 = { fullRestore: null };
                obj4[0] = closure_0;
                c10 = 4;
                c11 = 1;
                let obj5 = { value: null, done: false };
                obj5[0] = outer1_1(outer1_3[20]).restorePurchases(obj4);
                return obj5;
              }
            } else {
              if (4 === tmp10) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c8 = 0;
                  let obj11 = outer1_1(outer1_3[23]);
                  obj11.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                  c11 = 3;
                  const obj6 = { value: null, done: true };
                  obj6[0] = arg1;
                  return obj6;
                } else {
                  throwTypeErrorResult = closure_6;
                  outer1_0 = arg1;
                  throwTypeErrorResult = outer1_0;
                  if (0 === outer1_0.length) {
                    c8 = 0;
                    let obj9 = outer1_1(outer1_3[23]);
                    obj9.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                    c11 = 3;
                    let obj7 = { value: null, done: true };
                    obj7[0] = [];
                    return obj7;
                  } else {
                    throwTypeErrorResult = closure_6;
                    throwTypeErrorResult = _objectWithoutProperties;
                    throwTypeErrorResult = outer1_1;
                    throwTypeErrorResult = outer1_3;
                    throwTypeErrorResult = outer1_0;
                    const obj27 = outer1_1(outer1_3[24])(outer1_0);
                    outer1_1 = outer1_1(outer1_3[24])(outer1_0).uniqBy((purchaseResponse) => {
                      let originalTransactionIdentifier = purchaseResponse.purchaseResponse.jwsRepresentation;
                      if (originalTransactionIdentifier == null) {
                        originalTransactionIdentifier = purchaseResponse.purchaseResponse.originalTransactionIdentifier;
                      }
                      return originalTransactionIdentifier;
                    }).value();
                    const outer1_2 = [];
                    outer1_3 = [];
                    const outer1_4 = function _loop(arg0) {
                      let closure_0 = arg0;
                      let c6 = 0;
                      let c7 = 0;
                      let c5 = 0;
                      return (function* _loop(arg0) {
                        let arr2 = tmp3;
                        purchaseResponse = purchaseResponse.purchaseResponse;
                        let transactionReceipt = purchaseResponse;
                        const product = outer2_15.getProduct(purchaseResponse.productIdentifier);
                        const jwsRepresentation = purchaseResponse.jwsRepresentation;
                        transactionReceipt = jwsRepresentation;
                        if (jwsRepresentation == null) {
                          transactionReceipt = purchaseResponse.transactionReceipt;
                        }
                        let obj1 = callback(iter2[13]);
                        const v3Result = obj1.v3(transactionReceipt);
                        let arr = v3Result;
                        giftOptionsForKey = giftOptionsForKey.getGiftOptionsForKey(v3Result);
                        let c5 = 1;
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
                        yield outer2_24(obj1).then((arg0) => {
                          let obj = callback(table[22]);
                          obj = { purchase: null };
                          obj = { productId: transactionReceipt.productIdentifier, transactionDate: transactionReceipt.transactionDate, transactionReceipt: transactionReceipt.transactionReceipt, transactionId: str.toString() };
                          obj[0] = obj;
                          obj.finishTransaction(obj);
                          if (null != arg0) {
                            const obj1 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: null };
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
                          let c7 = 3;
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
                    };
                    throwTypeErrorResult = outer1_1;
                    closure_1 = outer1_1;
                    throwTypeErrorResult = outer1_1;
                    closure_1 = outer1_1;
                    closure_0 = outer1_1[Symbol.iterator]();
                    if (closure_0 === undefined) {
                      if (outer1_2.length > 0) {
                        obj7 = outer1_0(outer1_3[18]);
                        c10 = 8;
                        c11 = 1;
                        const obj8 = { value: null, done: false };
                        obj8[0] = obj7.fetchSubscriptions();
                        return obj8;
                      } else if (outer1_3.length > 0) {
                        const item = outer1_3.forEach((error) => {
                          const result = callback(iter2[17]).captureBillingException(error);
                        });
                        const _Error = Error;
                        const error = new Error("There were some errors while trying to restore");
                        throw error;
                      } else {
                        c8 = 0;
                        obj5 = outer1_1(outer1_3[23]);
                        obj5.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                        c11 = 3;
                        obj9 = { value: null, done: true };
                        obj9[0] = outer1_2;
                        return obj9;
                      }
                    } else {
                      throwTypeErrorResult = closure_6;
                      c8 = 3;
                      const outer1_5 = tmp41;
                      throwTypeErrorResult = outer1_4;
                      throwTypeErrorResult = outer1_5;
                      throwTypeErrorResult = outer1_4(outer1_5);
                      iter5 = throwTypeErrorResult[throwTypeErrorResult.iterator]();
                      throwTypeErrorResult = iter5;
                      throwTypeErrorResult = HermesBuiltin.ensureObject("iterator is not an object");
                      next = iter5.next;
                      closure_2 = undefined;
                    }
                    const iter4 = outer1_1(outer1_3[24])(outer1_0).uniqBy((purchaseResponse) => {
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
                throw isGenericIapConnected;
              } else if (6 === tmp10) {
                c8 = 4;
                if (arg0 === 1) {
                  c11 = 3;
                  throw arg1;
                } else {
                  closure_2 = arg1;
                  if (arg0 === 2) {
                    closure_2 = arg1;
                    c8 = 3;
                    const method = HermesBuiltin.getMethod("return");
                    if (method === undefined) {
                      c8 = 2;
                      closure_0.return();
                      c8 = 0;
                      obj3 = outer1_1(outer1_3[23]);
                      obj3.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                      c11 = 3;
                      const obj10 = { value: null, done: true };
                      obj10[0] = arg1;
                      return obj10;
                    } else {
                      throwTypeErrorResult = iter5;
                      throwTypeErrorResult = closure_2;
                      const iter3 = method(closure_2);
                      throwTypeErrorResult = iter3;
                      throwTypeErrorResult = HermesBuiltin.ensureObject("iterator.return() did not return an object");
                      if (iter3.done) {
                        c8 = 2;
                        closure_0.return();
                        c8 = 0;
                        obj1 = outer1_1(outer1_3[23]);
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
                tmp12 = isGenericIapConnected;
              } else if (arg0 === 1) {
                c11 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 0;
                throwTypeErrorResult = _objectWithoutProperties;
                throwTypeErrorResult = outer1_1;
                throwTypeErrorResult = outer1_3;
                throwTypeErrorResult = outer1_1(outer1_3[23]).dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
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
            isGenericIapConnected = throwTypeErrorResult;
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
let items = [require("module_7706").ErrorCode.E_USER_CANCELLED, StoreKitErrors.PAYMENT_CANCELED];
let set = new Set(items);
obj = { NONE: "none", CANNOT_MAKE_REQUEST: "cannot_make_request", INVALID_CURRENCY: "invalid_currency", PURCHASE_INCOMPLETE: "purchase_incomplete", USER_CANCELLED: "user_cancelled", POST_PURCHASE_FAILED: "post_purchase_failed" };
let result = set.fileFinishedImporting("actions/native/BillingActionCreators.tsx");

export default obj;
export { getIAPJWTRequestData };
export { updateAppleSubscription };
export const cancelGenericSubscription = function cancelGenericSubscription(requestIdentifier, subscriptionId, outer1_1) {
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
export const createGenericSubscription = function createGenericSubscription(outer1_5) {
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
export const resubscribeGenericSubscription = function resubscribeGenericSubscription(outer1_5, isACOM) {
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