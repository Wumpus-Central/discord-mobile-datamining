// === Module 13353: PromotionsActionCreators ===

// Module 13353 (PromotionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import wrappers from "wrappers" /* 1218 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import MarketingComponentPlatform from "MarketingComponentPlatform" /* 13354 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import PromotionRecord from "PromotionRecord" /* 10666 */;
import UserStore from "UserStore" /* 1371 */;
import PromotionsStore from "PromotionsStore" /* 10665 */;

require = fn;
function fetchActivePromotions() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _fetchActivePromotions() {
  closure_2 = tmp3;
  locale = locale.locale;
  let obj1 = { type: "ACTIVE_PROMOTIONS_FETCH", locale };
  DispatcherDefault.dispatch(obj1);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.PROMOTIONS, query: { locale, platform: MarketingComponentPlatform.MarketingComponentPlatform.MOBILE }, oldFormErrors: true, rejectWithError: true };
  await HTTP.get(request);
  if (1 === tmp7) {
    c4 = 0;
    closure_130_1(closure_130_2[7]).dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
    c6 = 3;
    closure_130_1(closure_130_2[7]);
  } else {
    if (2 === tmp7) {
      if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_129_0 = value;
        closure_129_1 = closure_130_7.consumedInboundPromotionId;
        if (!closure_130_7.hasFetchedConsumedInboundPromotionId) {
          obj1 = closure_130_0(closure_130_2[10]);
          c5 = 3;
          c6 = 1;
          return { value: obj1.fetchUserEntitlementsForApplication(closure_130_8, false), done: false };
        }
      }
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      return { value, done: true };
    } else {
      closure_129_2 = value.find((promotion_id) => {
        let tmp = null != promotion_id.promotion_id;
        if (tmp) {
          tmp = true === promotion_id.consumed;
        }
        return tmp;
      });
      let promotion_id;
      if (closure_129_2 != null) {
        promotion_id = closure_129_2.promotion_id;
      }
      c0 = promotion_id;
      if (promotion_id == null) {
        c0 = null;
      }
      closure_129_1 = c0;
    }
    closure_130_1(closure_130_2[7]).dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: closure_129_0.body, consumedInboundPromotionId: closure_129_1 });
    c4 = 0;
    closure_130_1(closure_130_2[7]);
  }
  return value;
};
function dismissOutboundPromotionNotice() {
  DispatcherDefault.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
  const lastDismissedOutboundPromotionStartDate = PromotionsStore.lastDismissedOutboundPromotionStartDate;
  if (null != lastDismissedOutboundPromotionStartDate) {
    const PreloadedUserSettingsActionCreators = lastDismissedOutboundPromotionStartDate(1940).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("userContent", async (arg0) => {
      const StringValue = wrappers.StringValue;
      arg0.lastDismissedOutboundPromotionStartDate = StringValue.create({ value: lastDismissedOutboundPromotionStartDate });
    }, lastDismissedOutboundPromotionStartDate(1940).UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
function fetchActiveBogoPromotion() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _fetchActiveBogoPromotion() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
          let body;
          if (!PromotionsStore.isFetchingActiveBogoPromotion) {
            c3 = 1;
            let obj4 = DispatcherDefault;
            obj4.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.BOGO_PROMOTIONS, query: null, rejectWithError: true };
            const obj1 = { locale: locale.locale };
            request.query = obj1;
            c4 = 2;
            c5 = 1;
            const obj2 = { value: HTTP.get(request), done: false };
            return obj2;
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          let obj3 = closure_129_1(closure_129_2[7]);
          obj3.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          body = value.body;
          obj = closure_129_1(closure_129_2[7]);
          obj3 = { type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS", activePromotion: closure_129_5.createFromServer(body) };
          obj.dispatch(obj3);
          c3 = 0;
        }
        c3 = 0;
        c5 = 3;
        obj4 = { value, done: true };
        return obj4;
      }
      c5 = 3;
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
};
function fetchClaimedOutboundPromotionCodes() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _fetchClaimedOutboundPromotionCodes() {
  closure_1 = tmp3;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.CLAIMED_OUTBOUND_PROMOTION_CODES, query: { locale: locale.locale }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  await HTTP.get(request);
  if (1 === tmp7) {
    c2 = 0;
    let obj3 = closure_129_1(closure_129_2[7]);
    obj3.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL" });
    c4 = 3;
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const body = value.body;
    closure_128_0 = body.map(closure_129_0(closure_129_2[13]).claimedOutboundPromotionCodeFromServer);
    obj3 = { type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS", claimedOutboundPromotionCodes: closure_128_0 };
    closure_129_1(closure_129_2[7]).dispatch(obj3);
    c2 = 0;
    closure_129_1(closure_129_2[7]);
  }
  return value;
};
function addClaimedOutboundPromotionCode(claimedOutboundPromotionCode) {
  const obj = { type: "CLAIMED_OUTBOUND_PROMOTION_CODE_ADD", claimedOutboundPromotionCode };
  obj.dispatch(obj);
}
let closure_8 = fn(1373).PREMIUM_SUBSCRIPTION_APPLICATION;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/PromotionsActionCreators.tsx");

export default {
  fetchActivePromotions,
  fetchClaimedOutboundPromotionCodes,
  addClaimedOutboundPromotionCode,
  dismissOutboundPromotionNotice,
  markOutboundPromotionsSeen() {
    DispatcherDefault.dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
  },
  fetchActiveBogoPromotion
};
export const maybeFetchActivePromotions = function maybeFetchActivePromotions(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (null != UserStore.getCurrentUser()) {
    let isFetchingActivePromotions = PromotionsStore.isFetchingActivePromotions;
    if (!isFetchingActivePromotions) {
      if (flag) {
        flag = null != PromotionsStore.lastFetchedActivePromotions;
      }
      isFetchingActivePromotions = flag;
    }
    if (!isFetchingActivePromotions) {
      fetchActivePromotions();
    }
  }
};
export const clearActivePromotions = function clearActivePromotions() {
  DispatcherDefault.dispatch({ type: "ACTIVE_PROMOTIONS_CLEAR" });
};
export { fetchActivePromotions };
export { dismissOutboundPromotionNotice };
export { fetchActiveBogoPromotion };
export { fetchClaimedOutboundPromotionCodes };
export { addClaimedOutboundPromotionCode };