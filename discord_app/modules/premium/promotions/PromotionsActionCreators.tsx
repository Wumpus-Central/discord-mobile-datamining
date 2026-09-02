// discord_app/modules/premium/promotions/PromotionsActionCreators.tsx
import dispatcherDefault from "../../../Dispatcher.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../user_settings/LocaleStore.tsx";
import closure_5 from "../../../records/PromotionRecord.tsx";
import closure_6 from "../../../stores/UserStore.tsx";
import closure_7 from "PromotionsStore.tsx";
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_8 } from "../PremiumConstants.tsx";
import { Endpoints } from "../../../Constants.tsx";

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
  let tmp = callback(function* () {
    let promotion_id = tmp3;
    let locale = 1;
    locale = locale.locale;
    obj1 = { type: "ACTIVE_PROMOTIONS_FETCH", locale: null };
    obj1[1] = locale;
    closure_1_1(closure_1_2[7]).dispatch(obj1);
    const HTTP = closure_1_0(closure_1_2[9]).HTTP;
    const obj2 = { url: null, query: null, oldFormErrors: true, rejectWithError: true };
    obj2[0] = closure_1_9.PROMOTIONS;
    let obj3 = { locale: null, platform: null };
    obj3[0] = locale;
    obj3[1] = closure_1_0(closure_1_2[8]).MarketingComponentPlatform.MOBILE;
    obj2[1] = obj3;
    yield HTTP.get(obj2);
    if (1 === tmp7) {
      locale = 0;
      let obj6 = callback(promotion_id[7]);
      obj6.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
      c6 = 3;
    } else {
      if (2 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          let lib = arg1;
          callback = closure_7.consumedInboundPromotionId;
          if (!closure_7.hasFetchedConsumedInboundPromotionId) {
            obj1 = lib(promotion_id[10]);
            c5 = 3;
            c6 = 1;
            const obj5 = { value: null, done: false };
            obj5[0] = obj1.fetchUserEntitlementsForApplication(closure_8, false);
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        locale = 0;
        c6 = 3;
        const obj = { value: null, done: true };
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
      obj3 = callback(promotion_id[7]);
      obj6 = { type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: null, consumedInboundPromotionId: null };
      obj6[1] = lib.body;
      obj6[2] = callback;
      obj3.dispatch(obj6);
      locale = 0;
    }
    locale = 0;
    return arg1;
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function dismissOutboundPromotionNotice() {
  dispatcherDefault.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
  const lastDismissedOutboundPromotionStartDate = closure_7.lastDismissedOutboundPromotionStartDate;
  if (null != lastDismissedOutboundPromotionStartDate) {
    const PreloadedUserSettingsActionCreators =
      lastDismissedOutboundPromotionStartDate(1369).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync(
      "userContent",
      (arg0) => {
        const StringValue = lastDismissedOutboundPromotionStartDate(closure_1_2[12]).StringValue;
        arg0.lastDismissedOutboundPromotionStartDate = StringValue.create({
          value: lastDismissedOutboundPromotionStartDate,
        });
      },
      lastDismissedOutboundPromotionStartDate(1369).UserSettingsDelay.INFREQUENT_USER_ACTION,
    );
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
  const tmp = callback(function* () {
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
            if (!closure_1_7.isFetchingActiveBogoPromotion) {
              c3 = 1;
              let obj4 = closure_1_1(closure_1_2[7]);
              obj4.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
              const HTTP = closure_1_0(closure_1_2[9]).HTTP;
              obj1 = { url: null, query: null, rejectWithError: true };
              obj1[0] = closure_1_9.BOGO_PROMOTIONS;
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
            obj3 = callback(706);
            obj3.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            body = arg1.body;
            obj = callback(706);
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
        dependencyMap = tmp27;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp27;
        } else {
          locale = tmp;
        }
      }
    }
  });
  closure_12 = tmp;
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
  const tmp = callback(function* () {
    const callback2 = tmp3;
    dependencyMap = 1;
    const HTTP = closure_1_0(527).HTTP;
    obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
    obj1[0] = closure_1_9.CLAIMED_OUTBOUND_PROMOTION_CODES;
    const obj2 = { locale: null };
    obj2[0] = locale.locale;
    obj1[1] = obj2;
    obj1[3] = closure_1_0(527).rejectWithMigratedError();
    yield HTTP.get(obj1);
    if (1 === tmp7) {
      dependencyMap = 0;
      const obj3 = callback2(706);
      obj3.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL" });
      locale = 3;
    } else if (arg0 === 1) {
      locale = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const body = arg1.body;
      callback = body.map(callback(13238).claimedOutboundPromotionCodeFromServer);
      const obj = callback2(706);
      const obj4 = { type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS", claimedOutboundPromotionCodes: null };
      obj4[1] = callback;
      obj.dispatch(obj4);
      dependencyMap = 0;
    }
    dependencyMap = 0;
    return arg1;
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function addClaimedOutboundPromotionCode(claimedOutboundPromotionCode) {
  let obj = dispatcherDefault;
  obj = { type: "CLAIMED_OUTBOUND_PROMOTION_CODE_ADD", claimedOutboundPromotionCode };
  obj.dispatch(obj);
}
const result = require("set").fileFinishedImporting("modules/premium/promotions/PromotionsActionCreators.tsx");

export default {
  fetchActivePromotions,
  fetchClaimedOutboundPromotionCodes,
  addClaimedOutboundPromotionCode,
  dismissOutboundPromotionNotice,
  markOutboundPromotionsSeen() {
    dispatcherDefault.dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
  },
  fetchActiveBogoPromotion,
};
export const maybeFetchActivePromotions = function maybeFetchActivePromotions(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (null != currentUser.getCurrentUser()) {
    let isFetchingActivePromotions = closure_7.isFetchingActivePromotions;
    if (!isFetchingActivePromotions) {
      if (flag) {
        flag = null != closure_7.lastFetchedActivePromotions;
      }
      isFetchingActivePromotions = flag;
    }
    if (!isFetchingActivePromotions) {
      fetchActivePromotions();
    }
  }
};
export const clearActivePromotions = function clearActivePromotions() {
  dispatcherDefault.dispatch({ type: "ACTIVE_PROMOTIONS_CLEAR" });
};
export { fetchActivePromotions };
export { dismissOutboundPromotionNotice };
export { fetchActiveBogoPromotion };
export { fetchClaimedOutboundPromotionCodes };
export { addClaimedOutboundPromotionCode };
