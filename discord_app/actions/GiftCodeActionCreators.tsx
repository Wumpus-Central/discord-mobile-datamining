// === Module 11089: GiftCodeActionCreators ===

// Module 11089 (GiftCodeActionCreators)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4551 */;
import UnknownCollectiblesItemRecord from "UnknownCollectiblesItemRecord" /* 7061 */;
import CodedLinkActionCreatorsDefault from "CodedLinkActionCreators" /* 11090 */;
import actions_GiftCodeActionCreators from "actions/GiftCodeActionCreators" /* 11091 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c7, c8;

let c9;
let metroImportAll;
let metroImportDefault;
function resolveGiftCode() {
  return obj(...arguments);
}
let obj = function _resolveGiftCode() {
  obj = _asyncToGenerator(async function(code) {
    let closure_4;
    let error;
    let obj20;
    let obj7;
    let obj9;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (code === 1) {
        throw value;
      } else if (code === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let product;
        let giftCode;
        let flag2;
        let flag;
        c8 = 2;
        if (0 === c7) {
          if (code === 1) {
            c8 = 3;
            throw value;
          } else if (code === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            product = tmp;
            giftCode = tmp4;
            flag2 = undefined;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = false;
            }
            flag2 = closure_2;
            if (closure_2 === undefined) {
              flag2 = false;
            }
            giftCode = undefined;
            product = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c7) {
          if (code === 1) {
            c8 = 3;
            throw value;
          } else if (code === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj6 = { type: "GIFT_CODE_RESOLVE", code };
            const obj18 = closure_132_1(closure_132_2[6]);
            obj18.dispatch(obj6);
            c6 = 1;
            c7 = 3;
            c8 = 1;
            const obj8 = { value: obj20.resolveGiftCode(code, flag, flag2), done: false };
            obj20 = closure_132_0(closure_132_2[7]);
            return obj8;
          }
        } else if (2 === c7) {
          c6 = 0;
          const obj10 = { type: "GIFT_CODE_RESOLVE_FAILURE", code, error };
          const obj12 = closure_132_1(closure_132_2[6]);
          obj12.dispatch(obj10);
          throw error;
        } else {
          if (3 === c7) {
            if (code === 1) {
              c8 = 3;
              throw value;
            } else if (code === 2) {
              c6 = 0;
              c8 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              giftCode = value;
              if (null != giftCode.application_id) {
                if (giftCode.application_id !== closure_132_10) {
                  if (null == closure_132_4.getApplication(giftCode.application_id)) {
                    c6 = 2;
                    c7 = 5;
                    c8 = 1;
                    const obj13 = { value: obj9.fetchApplication(giftCode.application_id), done: false };
                    obj9 = closure_132_1(closure_132_2[8]);
                    return obj13;
                  }
                }
              }
            }
          } else if (4 === c7) {
            c6 = 1;
          } else {
            if (5 === c7) {
              if (code === 1) {
                c8 = 3;
                throw value;
              } else if (code === 2) {
                c6 = 0;
                c8 = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                c6 = 1;
              }
            } else if (code === 1) {
              c8 = 3;
              throw value;
            } else if (code === 2) {
              c6 = 0;
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              product = closure_132_5.getProduct(giftCode.sku_id);
              let someResult;
              if (product != null) {
                const items = tmp60.items;
                someResult = items.some(closure_132_6);
              }
              if (true === someResult) {
                const self = this;
                const self2 = this;
                const clientOutdatedAcceptGiftError = new closure_132_0(closure_132_2[10]).ClientOutdatedAcceptGiftError("Client update required to redeem this gift");
                throw clientOutdatedAcceptGiftError;
              }
            }
            const obj15 = { type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode };
            const obj3 = closure_132_1(closure_132_2[6]);
            obj3.dispatch(obj15);
            const obj16 = { giftCode };
            c6 = 0;
            c8 = 3;
            const obj17 = { value: obj16, done: true };
            return obj17;
          }
          if (giftCode.application_id === closure_132_7) {
            c7 = 6;
            c8 = 1;
            const obj19 = { value: obj7.fetchCollectiblesProduct(giftCode.sku_id), done: false };
            obj7 = closure_132_0(closure_132_2[9]);
            return obj19;
          }
        }
      } catch (tmp49) {
        error = tmp49;
        if (0 === c6) {
          c8 = 3;
          throw tmp49;
        } else if (1 === tmp51) {
          c7 = 2;
        } else {
          c7 = 4;
        }
      }
    }
  });
  return obj(...arguments);
};
function reportUnexpectedGiftCodeError(status) {
  let obj2;
  if (status instanceof errors_V6OrEarlierAPIErrorDefault) {
    if (404 !== status.status) {
      let str = status.status;
      const captureException = SentryUtilsDefault.captureException;
      const error = status.error;
      const _String = String;
      SentryUtilsDefault;
      if (str == null) {
        str = "unknown";
      }
      obj = { tags: obj2 };
      obj2 = { gift_code_resolve_status: _String(str) };
      captureException(error, obj);
    }
  } else {
    const _Error = Error;
    if (status instanceof Error) {
      const tmpResult2 = SentryUtilsDefault;
      tmpResult2.captureException(status);
    }
  }
  return null;
}
obj = function _deliverGiftCodes() {
  obj = _asyncToGenerator(async (recipient_ids, checkout_session_id) => {
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj4;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: constants.USER_GIFT_CODE_DELIVERIES, body: obj4, oldFormErrors: true, rejectWithError: true };
      obj4 = { checkout_session_id, recipient_ids };
      await HTTP.post(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
let closure_6 = UnknownCollectiblesItemRecord.isUnknownCollectiblesItemRecord;
({ COLLECTIBLES_APPLICATION_ID: metroImportDefault, Endpoints: metroImportAll, RPCCommands: c9 } = Constants);
let closure_10 = PremiumConstants.PREMIUM_SUBSCRIPTION_APPLICATION;
obj = {
  resolveGiftCode,
  reportUnexpectedGiftCodeError,
  fetchUserGiftCodesForSKU(skuId) {
    let closure_0 = skuId;
    let tmp = subscriptionPlanId;
    if (subscriptionPlanId === undefined) {
      tmp = null;
    }
    let c1 = tmp;
    return (async () => {
      let closure_0;
      let closure_1;
      let obj6;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let sku_id;
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
              sku_id = undefined;
              const obj5 = { type: "GIFT_CODES_FETCH", skuId: sku_id, subscriptionPlanId: tmp };
              const obj9 = tmp(closure_2[6]);
              obj9.dispatch(obj5);
              c3 = 1;
              const HTTP = sku_id(closure_2[13]).HTTP;
              const request = { url: constants.USER_GIFT_CODES, query: obj6, oldFormErrors: true, rejectWithError: true };
              obj6 = { sku_id, subscription_plan_id: tmp };
              c4 = 2;
              c5 = 1;
              const obj7 = { value: HTTP.get(request), done: false };
              return obj7;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              const obj8 = { type: "GIFT_CODES_FETCH_FAILURE", skuId: closure_129_0, subscriptionPlanId: closure_129_1 };
              const obj4 = tmp(closure_2[6]);
              obj4.dispatch(obj8);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              sku_id = value;
              const obj11 = { type: "GIFT_CODES_FETCH_SUCCESS", giftCodes: sku_id.body, skuId: closure_129_0, subscriptionPlanId: closure_129_1 };
              obj = tmp(closure_2[6]);
              obj.dispatch(obj11);
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp20) {
          closure_2 = tmp20;
          if (0 === c3) {
            c5 = 3;
            throw tmp20;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  createGiftCode(skuId) {
    let closure_0 = skuId;
    let tmp = subscriptionPlanId;
    if (subscriptionPlanId === undefined) {
      tmp = null;
    }
    let c1 = tmp;
    let tmp2 = giftStyle;
    if (giftStyle === undefined) {
      tmp2 = null;
    }
    let c2 = tmp2;
    return (async () => {
      let c3;
      let c4;
      let c5;
      let closure_0;
      let closure_1;
      let obj6;
      let sku_id = tmp4;
      const obj4 = { type: "GIFT_CODE_CREATE_START", skuId: sku_id, subscriptionPlanId: tmp };
      const obj10 = tmp(gift_style[6]);
      obj10.dispatch(obj4);
      const HTTP = sku_id(gift_style[13]).HTTP;
      const request = { url: constants.USER_GIFT_CODE_CREATE, body: obj6, oldFormErrors: true, rejectWithError: true };
      obj6 = { sku_id, subscription_plan_id: tmp, gift_style };
      await HTTP.post(request);
      const obj8 = { type: "GIFT_CODE_CREATE_FAILURE", skuId: closure_129_0, subscriptionPlanId: closure_129_1 };
      const obj5 = tmp(gift_style[6]);
      obj5.dispatch(obj8);
      await "IconComponent";
      sku_id = value;
      const obj11 = { type: "GIFT_CODE_CREATE_SUCCESS", giftCode: sku_id.body };
      obj = tmp(gift_style[6]);
      obj.dispatch(obj11);
      return sku_id.body;
    })();
  },
  revokeGiftCode(code) {
    let closure_0 = code;
    return (async () => {
      let v1;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              code = tmp;
              const obj5 = { type: "GIFT_CODE_REVOKE", code };
              const obj9 = v1(closure_2[6]);
              obj9.dispatch(obj5);
              c3 = 1;
              const HTTP = code(closure_2[13]).HTTP;
              const obj6 = { url: closure_1_8.USER_GIFT_CODE_REVOKE(code), oldFormErrors: true, rejectWithError: true };
              const del = HTTP.del;
              v1 = 2;
              c4 = 1;
              const obj7 = { value: del(obj6), done: false };
              return obj7;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
              const obj8 = { type: "GIFT_CODE_REVOKE_FAILURE", code: closure_128_0 };
              const obj4 = v1(closure_2[6]);
              obj4.dispatch(obj8);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              const obj11 = { type: "GIFT_CODE_REVOKE_SUCCESS", code: closure_128_0 };
              obj = v1(closure_2[6]);
              obj.dispatch(obj11);
              c3 = 0;
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          closure_2 = tmp16;
          if (0 === c3) {
            c4 = 3;
            throw tmp16;
          } else {
            v1 = 1;
          }
        }
      }
    })();
  },
  openNativeGiftCodeModal(arg0) {
    obj = CodedLinkActionCreatorsDefault;
    obj.openNativeAppModal(arg0, constants.GIFT_CODE_BROWSER);
  }
};
const merged = Object.assign(actions_GiftCodeActionCreators.default);
const result = size.fileFinishedImporting("actions/GiftCodeActionCreators.tsx");

export default obj;
export { resolveGiftCode };
export { reportUnexpectedGiftCodeError };
export const deliverGiftCodes = function deliverGiftCodes() {
  return obj(...arguments);
};