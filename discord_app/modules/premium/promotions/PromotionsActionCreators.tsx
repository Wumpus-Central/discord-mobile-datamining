// discord_app/modules/premium/promotions/PromotionsActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import wrappers from "../../../../discord_common/js/packages/protos/google/protobuf/wrappers.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import MarketingComponentPlatform from "../../../../discord_common/js/shared/shared-constants/MarketingComponentPlatform.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import PromotionsStore from "PromotionsStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3, c5, c6;

function fetchActivePromotions() {
  return obj(...arguments);
}
let obj = function _fetchActivePromotions() {
  obj = _asyncToGenerator(async () => {
    let obj2;
    let obj8;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const flag = false;
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let _null;
          let consumedInboundPromotionId;
          let promotion_id;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              _null = undefined;
              consumedInboundPromotionId = undefined;
              promotion_id = undefined;
              c4 = 1;
              locale = locale.locale;
              const obj6 = { type: "ACTIVE_PROMOTIONS_FETCH", locale };
              const obj11 = DispatcherDefault;
              obj11.dispatch(obj6);
              const MOBILE = MarketingComponentPlatform.MarketingComponentPlatform.MOBILE;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.PROMOTIONS, query: obj8, oldFormErrors: true, rejectWithError: true };
              obj8 = { locale, platform: MOBILE };
              c5 = 2;
              c6 = 1;
              const obj9 = { value: HTTP.get(request), done: false };
              return obj9;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj7 = closure_130_1(closure_130_2[6]);
              obj7.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
            } else {
              if (2 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  _null = value;
                  consumedInboundPromotionId = closure_130_6.consumedInboundPromotionId;
                  if (!closure_130_6.hasFetchedConsumedInboundPromotionId) {
                    c5 = 3;
                    c6 = 1;
                    const obj12 = {
                      value: obj2.fetchUserEntitlementsForApplication(closure_130_7, false),
                      done: false,
                    };
                    obj2 = closure_130_0(closure_130_2[9]);
                    return obj12;
                  }
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                value.find((promotion_id) => null != promotion_id.promotion_id && true === promotion_id.consumed);
                promotion_id = undefined;
                if (promotion_id != null) {
                  promotion_id = promotion_id.promotion_id;
                }
                let c0 = promotion_id;
                if (promotion_id == null) {
                  c0 = null;
                }
                consumedInboundPromotionId = c0;
              }
              const obj13 = {
                type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                promotions: _null.body,
                consumedInboundPromotionId,
              };
              const obj4 = closure_130_1(closure_130_2[6]);
              obj4.dispatch(obj13);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          let closure_3 = tmp25;
          if (0 === c4) {
            c6 = 3;
            throw tmp25;
          } else {
            c5 = 1;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
function dismissOutboundPromotionNotice() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
  const lastDismissedOutboundPromotionStartDate = PromotionsStore.lastDismissedOutboundPromotionStartDate;
  if (null != lastDismissedOutboundPromotionStartDate) {
    const PreloadedUserSettingsActionCreators =
      lastDismissedOutboundPromotionStartDate(2033).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync(
      "userContent",
      async (arg0) => {
        const StringValue = wrappers.StringValue;
        obj = { value: lastDismissedOutboundPromotionStartDate };
        arg0.lastDismissedOutboundPromotionStartDate = StringValue.create(obj);
      },
      lastDismissedOutboundPromotionStartDate(2033).UserSettingsDelay.INFREQUENT_USER_ACTION,
    );
  }
}
function fetchClaimedOutboundPromotionCodes() {
  return obj(...arguments);
}
obj = function _fetchClaimedOutboundPromotionCodes() {
  let locale;
  obj = _asyncToGenerator(async () => {
    let obj10;
    let obj5;
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
      let c2;
      try {
        let claimedOutboundPromotionCodes;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            claimedOutboundPromotionCodes = undefined;
            c2 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: constants.CLAIMED_OUTBOUND_PROMOTION_CODES,
              query: obj5,
              oldFormErrors: true,
              rejectWithError: obj10.rejectWithMigratedError(),
            };
            obj5 = { locale: locale.locale };
            const get = HTTP.get;
            obj10 = HTTPUtils;
            c3 = 2;
            c4 = 1;
            const obj6 = { value: get(request), done: false };
            return obj6;
          }
        } else if (1 === c3) {
          c2 = 0;
          const obj4 = closure_129_1(closure_129_2[6]);
          obj4.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL" });
          c4 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          const body = value.body;
          claimedOutboundPromotionCodes = body.map(
            closure_129_0(closure_129_2[12]).claimedOutboundPromotionCodeFromServer,
          );
          const obj8 = { type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS", claimedOutboundPromotionCodes };
          obj = closure_129_1(closure_129_2[6]);
          obj.dispatch(obj8);
          c2 = 0;
          c4 = 3;
          return { value: true, done: true };
        }
      } catch (tmp17) {
        if (0 === c2) {
          c4 = 3;
          throw tmp17;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function addClaimedOutboundPromotionCode(claimedOutboundPromotionCode) {
  obj = DispatcherDefault;
  const obj2 = { type: "CLAIMED_OUTBOUND_PROMOTION_CODE_ADD", claimedOutboundPromotionCode };
  obj.dispatch(obj2);
}
let closure_7 = PremiumConstants.PREMIUM_SUBSCRIPTION_APPLICATION;
const Endpoints = Constants.Endpoints;
obj = {
  fetchActivePromotions,
  fetchClaimedOutboundPromotionCodes,
  addClaimedOutboundPromotionCode,
  dismissOutboundPromotionNotice,
  markOutboundPromotionsSeen() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
  },
};
const result = size.fileFinishedImporting("modules/premium/promotions/PromotionsActionCreators.tsx");

export default obj;
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
  obj = DispatcherDefault;
  obj.dispatch({ type: "ACTIVE_PROMOTIONS_CLEAR" });
};
export { fetchActivePromotions };
export { dismissOutboundPromotionNotice };
export { fetchClaimedOutboundPromotionCodes };
export { addClaimedOutboundPromotionCode };
