// discord_app/actions/GiftCodeActionCreators.tsx
import GuildFeatures from "GuildFeatures";
import addApplication from "addApplication";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import { isUnknownCollectiblesItemRecord as closure_6 } from "fromServer";
import ME from "ME";
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_10 } from "GuildFeatures";
import { CodedLinkActionCreators } from "../modules/coded_links/web/CodedLinkActionCreators.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
function resolveGiftCode() {
  const self = this;
  const apply = _resolveGiftCode.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _resolveGiftCode() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
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
              let application = tmp4;
              let GuildFeatures = tmp9;
              let flag;
              let flag2;
              if (flag === undefined) {
                flag = false;
              }
              if (flag2 === undefined) {
                flag2 = false;
              }
              GuildFeatures = undefined;
              application = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp9) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj2 = { type: "GIFT_CODE_RESOLVE", code: null };
              obj2[1] = callback;
              flag(flag2[6]).dispatch(obj2);
              let c6 = 1;
              const obj18 = flag(flag2[6]);
              c7 = 3;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(flag2[7]).resolveGiftCode(callback, flag, flag2);
              return obj3;
            }
          } else if (2 === tmp9) {
            c6 = 0;
            let obj11 = flag(flag2[6]);
            const obj4 = { type: "GIFT_CODE_RESOLVE_FAILURE", code: null, error: null };
            obj4[1] = callback;
            obj4[2] = product;
            obj11.dispatch(obj4);
            throw product;
          } else {
            if (3 === tmp9) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                GuildFeatures = arg1;
                if (null != GuildFeatures.application_id) {
                  if (GuildFeatures.application_id !== closure_10) {
                    if (null == application.getApplication(GuildFeatures.application_id)) {
                      c6 = 2;
                      let obj8 = flag(flag2[8]);
                      c7 = 5;
                      c8 = 1;
                      let obj6 = { value: null, done: false };
                      obj6[0] = obj8.fetchApplication(GuildFeatures.application_id);
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
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  const obj7 = { value: null, done: true };
                  obj7[0] = arg1;
                  return obj7;
                } else {
                  c6 = 1;
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                application = product.getProduct(GuildFeatures.sku_id);
                let someResult;
                if (application != null) {
                  const items = tmp67.items;
                  someResult = items.some(c6);
                }
                if (true === someResult) {
                  const clientOutdatedAcceptGiftError = new callback(flag2[10]).ClientOutdatedAcceptGiftError("Client update required to redeem this gift");
                  throw clientOutdatedAcceptGiftError;
                }
              }
              obj2 = flag(flag2[6]);
              obj8 = { type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: null };
              obj8[1] = GuildFeatures;
              obj2.dispatch(obj8);
              const obj9 = { giftCode: null };
              obj9[0] = GuildFeatures;
              c6 = 0;
              c8 = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = obj9;
              return obj10;
            }
            if (GuildFeatures.application_id === c7) {
              obj6 = callback(flag2[9]);
              c7 = 6;
              c8 = 1;
              obj11 = { value: null, done: false };
              obj11[0] = obj6.fetchCollectiblesProduct(GuildFeatures.sku_id);
              return obj11;
            }
          }
        } catch (tmp54) {
          product = tmp54;
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
    })();
    iter.next();
    return iter;
  });
  const _resolveGiftCode = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ COLLECTIBLES_APPLICATION_ID: error, Endpoints: metroImportAll, RPCCommands: c9 } = ME);
const merged = Object.assign(require("redeemGiftCode").default);
const result = require("updateCategoriesAndProducts").fileFinishedImporting("actions/GiftCodeActionCreators.tsx");

export default {
  resolveGiftCode,
  fetchUserGiftCodesForSKU(skuId, subscriptionPlanId) {
    let closure_0 = skuId;
    let tmp = subscriptionPlanId;
    if (subscriptionPlanId === undefined) {
      tmp = null;
    }
    const importDefault = tmp;
    return callback(function*() {
      let closure_1 = tmp3;
      const obj1 = { type: "GIFT_CODES_FETCH", skuId: null, subscriptionPlanId: null };
      obj1[1] = outer1_0;
      obj1[2] = outer1_1;
      outer1_1(outer1_2[6]).dispatch(obj1);
      let c3 = 1;
      const HTTP = outer1_0(outer1_2[11]).HTTP;
      const obj2 = { url: null, query: null, oldFormErrors: true, rejectWithError: true };
      obj2[0] = outer1_8.USER_GIFT_CODES;
      let obj3 = { sku_id: null, subscription_plan_id: null };
      obj3[0] = outer1_0;
      obj3[1] = outer1_1;
      obj2[1] = obj3;
      yield HTTP.get(obj2);
      if (1 === tmp7) {
        c3 = 0;
        obj3 = outer1_1(outer1_2[6]);
        const obj5 = { type: "GIFT_CODES_FETCH_FAILURE", skuId: null, subscriptionPlanId: null };
        obj5[1] = body;
        obj5[2] = closure_1;
        obj3.dispatch(obj5);
        let c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        body = arg1;
        const obj = outer1_1(outer1_2[6]);
        const obj6 = { type: "GIFT_CODES_FETCH_SUCCESS", giftCodes: null, skuId: null, subscriptionPlanId: null };
        obj6[1] = body.body;
        obj6[2] = body;
        obj6[3] = closure_1;
        obj.dispatch(obj6);
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    })();
  },
  createGiftCode(skuId, subscriptionPlanId, giftStyle) {
    let closure_0 = skuId;
    let tmp = subscriptionPlanId;
    if (subscriptionPlanId === undefined) {
      tmp = null;
    }
    const importDefault = tmp;
    let tmp2 = giftStyle;
    if (giftStyle === undefined) {
      tmp2 = null;
    }
    const dependencyMap = tmp2;
    return callback(function*() {
      let closure_1 = tmp3;
      const obj1 = { type: "GIFT_CODE_CREATE_START", skuId: null, subscriptionPlanId: null };
      obj1[1] = outer1_0;
      obj1[2] = outer1_1;
      outer1_1(outer1_2[6]).dispatch(obj1);
      let c3 = 1;
      const HTTP = outer1_0(outer1_2[11]).HTTP;
      const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
      obj2[0] = outer1_8.USER_GIFT_CODE_CREATE;
      const obj3 = { sku_id: null, subscription_plan_id: null, gift_style: null };
      obj3[0] = outer1_0;
      obj3[1] = outer1_1;
      obj3[2] = outer1_2;
      obj2[1] = obj3;
      yield HTTP.post(obj2);
      c3 = 0;
      const obj4 = outer1_1(outer1_2[6]);
      const obj5 = { type: "GIFT_CODE_CREATE_FAILURE", skuId: null, subscriptionPlanId: null };
      obj5[1] = closure_0;
      obj5[2] = closure_1;
      obj4.dispatch(obj5);
      closure_0 = yield "HermesInternal";
      const obj = outer1_1(outer1_2[6]);
      const obj7 = { type: "GIFT_CODE_CREATE_SUCCESS", giftCode: null };
      obj7[1] = closure_0.body;
      obj.dispatch(obj7);
      c3 = 0;
      return closure_0.body;
    })();
  },
  revokeGiftCode(code) {
    let closure_0 = code;
    return callback(function*() {
      let closure_0 = tmp3;
      const obj1 = { type: "GIFT_CODE_REVOKE", code: null };
      obj1[1] = outer1_0;
      v0(outer1_2[6]).dispatch(obj1);
      let c3 = 1;
      const HTTP = outer1_0(outer1_2[11]).HTTP;
      const obj2 = { url: null, oldFormErrors: true, rejectWithError: true };
      obj2[0] = outer1_8.USER_GIFT_CODE_REVOKE(outer1_0);
      yield HTTP.del(obj2);
      if (1 === tmp7) {
        c3 = 0;
        const obj3 = v0(outer1_2[6]);
        const obj4 = { type: "GIFT_CODE_REVOKE_FAILURE", code: null };
        obj4[1] = closure_0;
        obj3.dispatch(obj4);
        let c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = v0(outer1_2[6]);
        const obj5 = { type: "GIFT_CODE_REVOKE_SUCCESS", code: null };
        obj5[1] = closure_0;
        obj.dispatch(obj5);
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    })();
  },
  openNativeGiftCodeModal(arg0) {
    CodedLinkActionCreators.openNativeAppModal(arg0, constants.GIFT_CODE_BROWSER);
  }
};
export { resolveGiftCode };