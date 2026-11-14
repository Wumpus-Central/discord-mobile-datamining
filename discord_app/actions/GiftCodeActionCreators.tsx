// discord_app/actions/GiftCodeActionCreators.tsx
import SentryUtilsDefault from "../utils/SentryUtils.native.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import errors_V6OrEarlierAPIErrorDefault from "../errors/V6OrEarlierAPIError.tsx";
import CodedLinkActionCreatorsDefault from "../modules/coded_links/web/CodedLinkActionCreators.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../modules/applications/ApplicationStore.tsx";
import CollectiblesCategoryStore from "../modules/collectibles/CollectiblesCategoryStore.tsx";

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
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp4;
          closure_2 = tmp9;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let obj5 = closure_1;
          if (closure_1 === undefined) {
            obj5 = {};
          }
          closure_130_1 = obj5;
          closure_130_2 = undefined;
          let product;
          c6 = 1;
          c7 = 1;
          return { value: "Path", done: true };
        }
      } else if (1 === tmp9) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const obj8 = { type: "GIFT_CODE_RESOLVE", code: closure_130_0 };
          closure_131_1(closure_131_2[6]).dispatch(obj8);
          c5 = 1;
          const obj19 = closure_131_1(closure_131_2[6]);
          c6 = 3;
          c7 = 1;
          const obj10 = {
            value: closure_131_0(closure_131_2[7]).resolveGiftCode(closure_130_0, closure_130_1),
            done: false,
          };
          return obj10;
        }
      } else if (2 === tmp9) {
        c5 = 0;
        closure_130_4 = closure_4;
        const obj11 = { type: "GIFT_CODE_RESOLVE_FAILURE", code: closure_130_0, error: closure_130_4 };
        closure_131_1(closure_131_2[6]).dispatch(obj11);
        throw closure_130_4;
      } else {
        if (3 === tmp9) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_130_2 = value;
            if (null != closure_130_2.application_id) {
              if (closure_130_2.application_id !== closure_131_10) {
                if (null == closure_131_4.getApplication(closure_130_2.application_id)) {
                  c5 = 2;
                  c6 = 5;
                  c7 = 1;
                  const obj14 = {
                    value: closure_131_1(closure_131_2[8]).fetchApplication(closure_130_2.application_id),
                    done: false,
                  };
                  return obj14;
                }
              }
            }
          }
        } else if (4 === tmp9) {
          c5 = 1;
        } else {
          if (5 === tmp9) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              c5 = 1;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            product = closure_131_5.getProduct(closure_130_2.sku_id);
            let someResult;
            if (product != null) {
              items = tmp66.items;
              someResult = items.some(closure_131_6);
            }
            if (true === someResult) {
              const clientOutdatedAcceptGiftError = new closure_131_0(closure_131_2[10]).ClientOutdatedAcceptGiftError(
                "Client update required to redeem this gift",
              );
              throw clientOutdatedAcceptGiftError;
            }
          }
          const obj16 = { type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: closure_130_2 };
          closure_131_1(closure_131_2[6]).dispatch(obj16);
          const obj17 = { giftCode: closure_130_2 };
          c5 = 0;
          c7 = 3;
          const obj18 = { value: obj17, done: true };
          return obj18;
        }
        if (closure_130_2.application_id === closure_131_7) {
          c6 = 6;
          c7 = 1;
          const obj20 = {
            value: closure_131_0(closure_131_2[9]).fetchCollectiblesProduct(closure_130_2.sku_id),
            done: false,
          };
          return obj20;
        }
      }
    } catch (tmp54) {
      closure_4 = tmp54;
      if (tmp5 === c5) {
        c7 = tmp3;
        throw tmp54;
      } else if (tmp2 === tmp56) {
        c6 = tmp;
      } else {
        c6 = tmp6;
      }
    }
  }
};
function reportUnexpectedGiftCodeError(status) {
  if (status instanceof errors_V6OrEarlierAPIErrorDefault) {
    if (404 !== status.status) {
      let str = status.status;
      if (str == null) {
        str = "unknown";
      }
      const obj = { tags: null };
      const obj2 = { gift_code_resolve_status: String(str) };
      obj.tags = obj2;
      SentryUtilsDefault.captureException(status.error, obj);
      const tmpResult = SentryUtilsDefault;
    }
  } else {
    const _Error = Error;
    if (status instanceof Error) {
      SentryUtilsDefault.captureException(status);
      const tmpResult2 = SentryUtilsDefault;
    }
  }
  return null;
}
let closure_12 = async function _deliverGiftCodes() {
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: constants.USER_GIFT_CODE_DELIVERIES,
      body: { checkout_session_id, recipient_ids },
      oldFormErrors: true,
      rejectWithError: true,
    };
    await HTTP.post(request);
    return value.body;
  })();
};
let closure_6 = fn(8493).isUnknownCollectiblesItemRecord;
const Constants = fn(1072);
({ COLLECTIBLES_APPLICATION_ID: metroImportDefault, Endpoints: closure_8, RPCCommands: closure_9 } = Constants);
let closure_10 = fn(1390).PREMIUM_SUBSCRIPTION_APPLICATION;
const merged = Object.assign(fn(12381).default);
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
      const request = {
        url: constants.USER_GIFT_CODES,
        query: { sku_id, subscription_plan_id: tmp3 },
        oldFormErrors: true,
        rejectWithError: true,
      };
      await HTTP.get(request);
      if (1 === tmp7) {
        c3 = 0;
        tmp3(tmp23[6]).dispatch({
          type: "GIFT_CODES_FETCH_FAILURE",
          skuId: closure_129_0,
          subscriptionPlanId: closure_129_1,
        });
        c5 = 3;
        tmp3(tmp23[6]);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        tmp3(tmp23[6]).dispatch({
          type: "GIFT_CODES_FETCH_SUCCESS",
          giftCodes: closure_128_0.body,
          skuId: closure_129_0,
          subscriptionPlanId: closure_129_1,
        });
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
      const request = {
        url: constants.USER_GIFT_CODE_CREATE,
        body: { sku_id, subscription_plan_id: tmp3, gift_style },
        oldFormErrors: true,
        rejectWithError: true,
      };
      await HTTP.post(request);
      tmp3(gift_style[6]).dispatch({
        type: "GIFT_CODE_CREATE_FAILURE",
        skuId: closure_129_0,
        subscriptionPlanId: closure_129_1,
      });
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
  },
};
export { resolveGiftCode };
export { reportUnexpectedGiftCodeError };
export function deliverGiftCodes() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
