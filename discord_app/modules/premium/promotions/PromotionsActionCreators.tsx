import ME from "ME";
import _getSystemLocale from "_getSystemLocale";
import createFromServer from "createFromServer";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_7 } from "GuildFeatures";
import { Endpoints } from "ME";

const require = arg1;
function fetchActivePromotions() {
  const self = this;
  const apply = _fetchActivePromotions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchActivePromotions() {
  const self = this;
  let tmp = callback(function*() {
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
            let promotion_id = tmp3;
            let callback = tmp7;
            let lib;
            callback = undefined;
            promotion_id = undefined;
            let locale = 1;
            locale = locale.locale;
            let obj1 = { type: "ACTIVE_PROMOTIONS_FETCH", locale: null };
            obj1[1] = locale;
            outer1_1(outer1_2[6]).dispatch(obj1);
            const HTTP = outer1_0(outer1_2[8]).HTTP;
            const obj2 = { url: null, query: null, oldFormErrors: true, rejectWithError: true };
            obj2[0] = outer1_8.PROMOTIONS;
            let obj3 = { locale: null, platform: null };
            obj3[0] = locale;
            obj3[1] = outer1_0(outer1_2[7]).MarketingComponentPlatform.MOBILE;
            obj2[1] = obj3;
            c5 = 2;
            c6 = 1;
            const obj4 = { value: null, done: false };
            obj4[0] = HTTP.get(obj2);
            return obj4;
          }
        } else {
          if (1 === tmp7) {
            locale = 0;
            let obj6 = callback(promotion_id[6]);
            obj6.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
            c6 = 3;
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                lib = arg1;
                callback = c6.consumedInboundPromotionId;
                if (!c6.hasFetchedConsumedInboundPromotionId) {
                  obj1 = lib(promotion_id[9]);
                  c5 = 3;
                  c6 = 1;
                  const obj5 = { value: null, done: false };
                  obj5[0] = obj1.fetchUserEntitlementsForApplication(closure_7, false);
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              locale = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              promotion_id = arg1.find((promotion_id) => {
                let tmp = null != promotion_id.promotion_id;
                if (tmp) {
                  tmp = true === promotion_id.consumed;
                }
                return tmp;
              });
              promotion_id = undefined;
              if (promotion_id != null) {
                promotion_id = promotion_id.promotion_id;
              }
              lib = promotion_id;
              if (promotion_id == null) {
                lib = null;
              }
              callback = lib;
            }
            obj3 = callback(promotion_id[6]);
            obj6 = { type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: null, consumedInboundPromotionId: null };
            obj6[1] = lib.body;
            obj6[2] = callback;
            obj3.dispatch(obj6);
            locale = 0;
          }
          locale = 0;
          c6 = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = arg1;
          return obj7;
        }
      } catch (tmp28) {
        let ME = tmp28;
        if (tmp4 === locale) {
          c6 = tmp2;
          throw tmp28;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const _fetchActivePromotions = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function dismissOutboundPromotionNotice() {
  importDefault(709).dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
  const lastDismissedOutboundPromotionStartDate = createEmptyPromotionsByType.lastDismissedOutboundPromotionStartDate;
  if (null != lastDismissedOutboundPromotionStartDate) {
    const PreloadedUserSettingsActionCreators = lastDismissedOutboundPromotionStartDate(1355).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("userContent", (arg0) => {
      const StringValue = lastDismissedOutboundPromotionStartDate(outer1_2[11]).StringValue;
      arg0.lastDismissedOutboundPromotionStartDate = StringValue.create({ value: lastDismissedOutboundPromotionStartDate });
    }, lastDismissedOutboundPromotionStartDate(1355).UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
function fetchActiveBogoPromotion() {
  const self = this;
  const apply = _fetchActiveBogoPromotion.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchActiveBogoPromotion() {
  const self = this;
  const tmp = callback(function*() {
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === locale) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            let body = tmp7;
            body = undefined;
            if (!outer1_6.isFetchingActiveBogoPromotion) {
              let c3 = 1;
              let obj4 = outer1_1(outer1_2[6]);
              obj4.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
              const HTTP = outer1_0(outer1_2[8]).HTTP;
              const obj1 = { url: null, query: null, rejectWithError: true };
              obj1[0] = outer1_8.BOGO_PROMOTIONS;
              const obj2 = { locale: null };
              obj2[0] = locale.locale;
              obj1[1] = obj2;
              locale = 2;
              c5 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            obj3 = callback(709);
            obj3.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            body = arg1.body;
            obj = callback(709);
            obj4 = { type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS", activePromotion: null };
            obj4[1] = c5.createFromServer(body);
            obj.dispatch(obj4);
            c3 = 0;
          }
          c3 = 0;
          c5 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        }
        c5 = 3;
      } catch (tmp27) {
        const dependencyMap = tmp27;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp27;
        } else {
          locale = tmp;
        }
      }
    }
  });
  const _fetchActiveBogoPromotion = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchClaimedOutboundPromotionCodes() {
  const self = this;
  const apply = _fetchClaimedOutboundPromotionCodes.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchClaimedOutboundPromotionCodes() {
  const self = this;
  const tmp = callback(function*() {
    if (locale === 2) {
      locale = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
        locale = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            locale = 3;
            throw arg1;
          } else if (arg0 === 2) {
            locale = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback2 = tmp3;
            let callback = tmp7;
            callback = undefined;
            let dependencyMap = 1;
            const HTTP = outer1_0(530).HTTP;
            const obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
            obj1[0] = outer1_8.CLAIMED_OUTBOUND_PROMOTION_CODES;
            const obj2 = { locale: null };
            obj2[0] = locale.locale;
            obj1[1] = obj2;
            obj1[3] = outer1_0(530).rejectWithMigratedError();
            c3 = 2;
            locale = 1;
            let obj3 = { value: null, done: false };
            obj3[0] = HTTP.get(obj1);
            return obj3;
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            obj3 = callback2(709);
            obj3.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL" });
            locale = 3;
          } else if (arg0 === 1) {
            locale = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const body = arg1.body;
            callback = body.map(callback(7555).claimedOutboundPromotionCodeFromServer);
            obj = callback2(709);
            const obj4 = { type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS", claimedOutboundPromotionCodes: null };
            obj4[1] = callback;
            obj.dispatch(obj4);
            dependencyMap = 0;
          }
          dependencyMap = 0;
          locale = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        }
      } catch (tmp20) {
        if (tmp4 === dependencyMap) {
          locale = tmp2;
          throw tmp20;
        } else {
          c3 = tmp;
        }
      }
    }
  });
  const _fetchClaimedOutboundPromotionCodes = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function addClaimedOutboundPromotionCode(claimedOutboundPromotionCode) {
  let obj = importDefault(709);
  obj = { type: "CLAIMED_OUTBOUND_PROMOTION_CODE_ADD", claimedOutboundPromotionCode };
  obj.dispatch(obj);
}
const result = require("createFromServer").fileFinishedImporting("modules/premium/promotions/PromotionsActionCreators.tsx");

export default {
  fetchActivePromotions,
  fetchClaimedOutboundPromotionCodes,
  addClaimedOutboundPromotionCode,
  dismissOutboundPromotionNotice,
  markOutboundPromotionsSeen() {
    importDefault(709).dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
  },
  fetchActiveBogoPromotion
};
export const maybeFetchActivePromotions = function maybeFetchActivePromotions(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let isFetchingActivePromotions = createEmptyPromotionsByType.isFetchingActivePromotions;
  if (!isFetchingActivePromotions) {
    if (flag) {
      flag = null != createEmptyPromotionsByType.lastFetchedActivePromotions;
    }
    isFetchingActivePromotions = flag;
  }
  if (!isFetchingActivePromotions) {
    fetchActivePromotions();
  }
};
export const clearActivePromotions = function clearActivePromotions() {
  importDefault(709).dispatch({ type: "ACTIVE_PROMOTIONS_CLEAR" });
};
export { fetchActivePromotions };
export { dismissOutboundPromotionNotice };
export { fetchActiveBogoPromotion };
export { fetchClaimedOutboundPromotionCodes };
export { addClaimedOutboundPromotionCode };