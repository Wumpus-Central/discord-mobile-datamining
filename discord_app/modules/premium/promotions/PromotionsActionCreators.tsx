// discord_app/modules/premium/promotions/PromotionsActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import wrappers from "../../../../discord_common/js/packages/protos/google/protobuf/wrappers.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import MarketingComponentPlatform from "../../../../discord_common/js/shared/shared-constants/MarketingComponentPlatform.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import PromotionsStore from "PromotionsStore.tsx";

require = fn;
function fetchActivePromotions() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _fetchActivePromotions() {
  closure_2 = tmp3;
  locale = locale.locale;
  DispatcherDefault.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH", locale });
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: constants.PROMOTIONS,
    query: { locale, platform: MarketingComponentPlatform.MarketingComponentPlatform.MOBILE },
    oldFormErrors: true,
    rejectWithError: true,
  };
  await HTTP.get(request);
  if (1 === tmp7) {
    c4 = 0;
    closure_130_1(closure_130_2[6]).dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
    c6 = 3;
    closure_130_1(closure_130_2[6]);
  } else {
    if (2 === tmp7) {
      if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_129_0 = value;
        closure_129_1 = closure_130_6.consumedInboundPromotionId;
        if (!closure_130_6.hasFetchedConsumedInboundPromotionId) {
          c5 = 3;
          c6 = 1;
          return {
            value: closure_130_0(closure_130_2[9]).fetchUserEntitlementsForApplication(closure_130_7, false),
            done: false,
          };
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
    closure_130_1(closure_130_2[6]).dispatch({
      type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
      promotions: closure_129_0.body,
      consumedInboundPromotionId: closure_129_1,
    });
    c4 = 0;
    closure_130_1(closure_130_2[6]);
  }
  return value;
};
function dismissOutboundPromotionNotice() {
  DispatcherDefault.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
  const lastDismissedOutboundPromotionStartDate = PromotionsStore.lastDismissedOutboundPromotionStartDate;
  if (null != lastDismissedOutboundPromotionStartDate) {
    const PreloadedUserSettingsActionCreators =
      lastDismissedOutboundPromotionStartDate(1941).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync(
      "userContent",
      async (arg0) => {
        const StringValue = wrappers.StringValue;
        arg0.lastDismissedOutboundPromotionStartDate = StringValue.create({
          value: lastDismissedOutboundPromotionStartDate,
        });
      },
      lastDismissedOutboundPromotionStartDate(1941).UserSettingsDelay.INFREQUENT_USER_ACTION,
    );
  }
}
function fetchClaimedOutboundPromotionCodes() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _fetchClaimedOutboundPromotionCodes() {
  closure_1 = tmp3;
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: constants.CLAIMED_OUTBOUND_PROMOTION_CODES,
    query: { locale: locale.locale },
    oldFormErrors: true,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  await HTTP.get(request);
  if (1 === tmp7) {
    c2 = 0;
    closure_129_1(closure_129_2[6]).dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL" });
    c4 = 3;
    closure_129_1(closure_129_2[6]);
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const body = value.body;
    closure_128_0 = body.map(closure_129_0(closure_129_2[12]).claimedOutboundPromotionCodeFromServer);
    closure_129_1(closure_129_2[6]).dispatch({
      type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS",
      claimedOutboundPromotionCodes: closure_128_0,
    });
    c2 = 0;
    closure_129_1(closure_129_2[6]);
  }
  return value;
};
function addClaimedOutboundPromotionCode(claimedOutboundPromotionCode) {
  DispatcherDefault.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODE_ADD", claimedOutboundPromotionCode });
}
let closure_7 = fn(1374).PREMIUM_SUBSCRIPTION_APPLICATION;
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
export { fetchClaimedOutboundPromotionCodes };
export { addClaimedOutboundPromotionCode };
