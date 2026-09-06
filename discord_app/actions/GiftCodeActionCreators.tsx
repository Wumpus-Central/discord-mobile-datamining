// === Module 11430: GiftCodeActionCreators ===

// Module 11430 (GiftCodeActionCreators)
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4241 */;
import CodedLinkActionCreatorsDefault from "CodedLinkActionCreators" /* 11431 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;

require = fn;
function resolveGiftCode() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _resolveGiftCode(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          closure_4 = tmp4;
          closure_3 = tmp9;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = false;
          }
          closure_131_1 = flag;
          let flag2 = closure_2;
          if (closure_2 === undefined) {
            flag2 = false;
          }
          closure_131_2 = flag2;
          closure_131_3 = undefined;
          let product;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp9) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          let obj2 = { type: "GIFT_CODE_RESOLVE", code: closure_131_0 };
          closure_132_1(closure_132_2[6]).dispatch(obj2);
          c6 = 1;
          const obj18 = closure_132_1(closure_132_2[6]);
          c7 = 3;
          c8 = 1;
          const obj3 = { value: closure_132_0(closure_132_2[7]).resolveGiftCode(closure_131_0, closure_131_1, closure_131_2), done: false };
          return obj3;
        }
      } else if (2 === tmp9) {
        c6 = 0;
        closure_131_5 = closure_5;
        let obj11 = closure_132_1(closure_132_2[6]);
        const obj4 = { type: "GIFT_CODE_RESOLVE_FAILURE", code: closure_131_0, error: closure_131_5 };
        obj11.dispatch(obj4);
        throw closure_131_5;
      } else {
        if (3 === tmp9) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_131_3 = value;
            if (null != closure_131_3.application_id) {
              if (closure_131_3.application_id !== closure_132_10) {
                if (null == closure_132_4.getApplication(closure_131_3.application_id)) {
                  c6 = 2;
                  let obj8 = closure_132_1(closure_132_2[8]);
                  c7 = 5;
                  c8 = 1;
                  let obj6 = { value: obj8.fetchApplication(closure_131_3.application_id), done: false };
                  return obj6;
                }
              }
            }
          }
        } else if (4 === tmp9) {
          c6 = 1;
        } else {
          if (5 === tmp9) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              c6 = 1;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            product = closure_132_5.getProduct(closure_131_3.sku_id);
            let someResult;
            if (product != null) {
              const items = tmp66.items;
              someResult = items.some(closure_132_6);
            }
            if (true === someResult) {
              const clientOutdatedAcceptGiftError = new closure_132_0(closure_132_2[10]).ClientOutdatedAcceptGiftError("Client update required to redeem this gift");
              throw clientOutdatedAcceptGiftError;
            }
          }
          obj2 = closure_132_1(closure_132_2[6]);
          obj8 = { type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: closure_131_3 };
          obj2.dispatch(obj8);
          const obj9 = { giftCode: closure_131_3 };
          c6 = 0;
          c8 = 3;
          const obj10 = { value: obj9, done: true };
          return obj10;
        }
        if (closure_131_3.application_id === closure_132_7) {
          obj6 = closure_132_0(closure_132_2[9]);
          c7 = 6;
          c8 = 1;
          obj11 = { value: obj6.fetchCollectiblesProduct(closure_131_3.sku_id), done: false };
          return obj11;
        }
      }
    } catch (tmp54) {
      closure_5 = tmp54;
      if (tmp5 === c6) {
        c8 = tmp3;
        throw tmp54;
      } else if (tmp2 === tmp56) {
        c7 = tmp;
      } else {
        c7 = tmp6;
      }
    }
  }
};
function reportUnexpectedGiftCodeError(status) {
  if (status instanceof errors_V6OrEarlierAPIErrorDefault) {
    if (404 !== status.status) {
      let tmpResult = SentryUtilsDefault;
      let str = status.status;
      if (str == null) {
        str = "unknown";
      }
      let obj = { tags: null };
      obj = { gift_code_resolve_status: String(str) };
      obj.tags = obj;
      tmpResult.captureException(status.error, obj);
    }
  } else {
    const _Error = Error;
    if (status instanceof Error) {
      tmpResult = SentryUtilsDefault;
      tmpResult.captureException(status);
    }
  }
  return null;
}
let closure_12 = async function _deliverGiftCodes() {
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.USER_GIFT_CODE_DELIVERIES, body: { checkout_session_id, recipient_ids }, oldFormErrors: true, rejectWithError: true };
    await HTTP.post(request);
    return value.body;
  })();
};
let closure_6 = fn(7550).isUnknownCollectiblesItemRecord;
const Constants = fn(1074);
({ COLLECTIBLES_APPLICATION_ID: closure_7, Endpoints: closure_8, RPCCommands: closure_9 } = Constants);
let closure_10 = fn(1373).PREMIUM_SUBSCRIPTION_APPLICATION;
const merged = Object.assign(fn(11432).default);
const size = fn(2);
const result = size.fileFinishedImporting("actions/GiftCodeActionCreators.tsx");

export default {
  resolveGiftCode,
  reportUnexpectedGiftCodeError,
  fetchUserGiftCodesForSKU(skuId) {
    closure_0 = skuId;
    let tmp = subscriptionPlanId;
    if (subscriptionPlanId === undefined) {
      tmp = null;
    }
    c1 = tmp;
    return (async () => {
      tmp3(tmp23[6]).dispatch({ type: "GIFT_CODES_FETCH", skuId: sku_id, subscriptionPlanId: tmp3 });
      const HTTP = sku_id(tmp23[13]).HTTP;
      const request = { url: constants.USER_GIFT_CODES, query: { sku_id, subscription_plan_id: tmp3 }, oldFormErrors: true, rejectWithError: true };
      await HTTP.get(request);
      if (1 === tmp7) {
        c3 = 0;
        tmp3(tmp23[6]).dispatch({ type: "GIFT_CODES_FETCH_FAILURE", skuId: closure_129_0, subscriptionPlanId: closure_129_1 });
        c5 = 3;
        tmp3(tmp23[6]);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        tmp3(tmp23[6]).dispatch({ type: "GIFT_CODES_FETCH_SUCCESS", giftCodes: closure_128_0.body, skuId: closure_129_0, subscriptionPlanId: closure_129_1 });
        c3 = 0;
        tmp3(tmp23[6]);
      }
      return value;
    })();
  },
  createGiftCode(skuId) {
    closure_0 = skuId;
    let tmp = subscriptionPlanId;
    if (subscriptionPlanId === undefined) {
      tmp = null;
    }
    c1 = tmp;
    let tmp2 = giftStyle;
    if (giftStyle === undefined) {
      tmp2 = null;
    }
    c2 = tmp2;
    return (async () => {
      tmp3(gift_style[6]).dispatch({ type: "GIFT_CODE_CREATE_START", skuId: sku_id, subscriptionPlanId: tmp3 });
      const HTTP = sku_id(gift_style[13]).HTTP;
      const request = { url: constants.USER_GIFT_CODE_CREATE, body: { sku_id, subscription_plan_id: tmp3, gift_style }, oldFormErrors: true, rejectWithError: true };
      await HTTP.post(request);
      tmp3(gift_style[6]);
      const obj4 = { type: "GIFT_CODE_CREATE_FAILURE", skuId: closure_129_0, subscriptionPlanId: closure_129_1 };
      obj4.dispatch(obj4);
      await "HermesInternal";
      closure_128_0 = value;
      tmp3(gift_style[6]).dispatch({ type: "GIFT_CODE_CREATE_SUCCESS", giftCode: closure_128_0.body });
      return closure_128_0.body;
    })();
  },
  revokeGiftCode(code) {
    closure_0 = code;
    return (async () => {
      code = tmp3;
      v2(tmp19[6]).dispatch({ type: "GIFT_CODE_REVOKE", code });
      const HTTP = code(tmp19[13]).HTTP;
      await HTTP.del({ url: closure_1_8.USER_GIFT_CODE_REVOKE(code), oldFormErrors: true, rejectWithError: true });
      if (1 === tmp7) {
        c3 = 0;
        v2(tmp19[6]).dispatch({ type: "GIFT_CODE_REVOKE_FAILURE", code: closure_128_0 });
        c4 = 3;
        v2(tmp19[6]);
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        v2(tmp19[6]).dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: closure_128_0 });
        c3 = 0;
        v2(tmp19[6]);
      }
      return value;
    })();
  },
  openNativeGiftCodeModal(arg0) {
    CodedLinkActionCreatorsDefault.openNativeAppModal(arg0, constants.GIFT_CODE_BROWSER);
  }
};
export { resolveGiftCode };
export { reportUnexpectedGiftCodeError };
export const deliverGiftCodes = function deliverGiftCodes() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};