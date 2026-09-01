// discord_app/modules/premium/promotions/PromotionUtils.tsx
import set2 from "../../../utils/PlatformUtils.tsx";
import DismissibleContent from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import addVersionedDismissedContent from "../../dismissible_content/DismissibleContentUtils.tsx";
import CountryListMode from "constants.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../user_settings/UserSettingsProtoStore.tsx";
import closure_5 from "../../../records/PromotionRecord.tsx";
import closure_6 from "PromotionsStore.tsx";
import { PromotionFlags } from "../PremiumConstants.tsx";
import ME from "../../../Constants.tsx";
import { ActivityPlatform } from "../../activities/Constants.tsx";

require = arg1;
function claimedOutboundPromotionCodeFromServer(code) {
  return {
    code: code.code,
    userId: code.user_id,
    claimedAt: code.claimed_at,
    promotion: closure_5.createFromServer(code.promotion),
  };
}
function _claimOutboundPromotion() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    const iter = (function* (arg0) {
      c3 = tmp2;
      ({ promotionId: c0, promotionTitle: c1, partnerId: c2, analyticsLocations: c3 } = callback);
      yield "PX_16";
      const HTTP = callback(530).HTTP;
      const obj2 = { url: null, rejectWithError: null };
      obj2[0] = closure_9.CLAIM_OUTBOUND_PROMOTION_CODE(callback);
      obj2[1] = callback(530).rejectWithMigratedError();
      closure_4 = yield HTTP.post(obj2);
      if (obj9.isIOS()) {
        let ANDROID = tmp39.IOS;
      } else {
        ANDROID = tmp39.ANDROID;
      }
      const obj = callback2(698);
      const obj5 = {
        platform: null,
        status: null,
        location_stack: null,
        promotion_id: null,
        name: null,
        partner: null,
      };
      obj5[0] = c6;
      obj5[1] = closure_4.status;
      obj5[2] = c3;
      obj5[3] = callback;
      if (callback2 == null) {
        callback2 = null;
      }
      obj5[4] = callback2;
      if (dependencyMap == null) {
        dependencyMap = null;
      }
      obj5[5] = dependencyMap;
      obj.track(constants.OUTBOUND_PROMOTION_CLAIMED, obj5);
      return callback3(body);
    })();
    iter.next();
    return iter;
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
({ AnalyticEvents: closure_8, Endpoints: c9, Platforms: c10 } = ME);
const result = require("set").fileFinishedImporting("modules/premium/promotions/PromotionUtils.tsx");

export const getPromotionImageURL = function getPromotionImageURL(id, arg1) {
  let str = "logo-light";
  if (obj.isThemeDark(arg1)) {
    str = "logo-dark";
  }
  if (null != CDN_HOST) {
    const _HermesInternal2 = HermesInternal;
    let combined = "https://" + CDN_HOST + "/promotions/" + id + "/" + str + "?size=256";
  } else {
    const _location = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    combined = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT + "/promotions/" + id + "/" + str + "?size=256";
  }
  return combined;
};
export { claimedOutboundPromotionCodeFromServer };
export const claimOutboundPromotion = function claimOutboundPromotion(arg0) {
  const self = this;
  const apply = _claimOutboundPromotion.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getOutboundPromotionRedemptionUrl = function getOutboundPromotionRedemptionUrl(arg0, outboundPromotion) {
  if (null != outboundPromotion.outboundRedemptionUrlFormat) {
    if ("" !== outboundPromotion.outboundRedemptionUrlFormat) {
      const _encodeURIComponent = encodeURIComponent;
      let str2 = outboundPromotion.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(arg0));
      const str3 = outboundPromotion.outboundRedemptionUrlFormat;
    }
    return str2;
  }
  str2 = outboundPromotion.outboundRedemptionPageLink;
  if (str2 == null) {
    str2 = "";
  }
};
export const getNextUnseenOutboundPromotionId = function getNextUnseenOutboundPromotionId() {
  ({ outboundPromotions, consumedInboundPromotionId: require } = closure_6);
  const found = outboundPromotions.filter((id) => {
    let tmp = id.id !== closure_0;
    if (tmp) {
      tmp = !closure_1_0(closure_1_2[11]).hasFlag(id.flags, closure_1_7.SUPPRESS_NOTIFICATION);
      const obj = closure_1_0(closure_1_2[11]);
    }
    if (tmp) {
      let hasItem = null != id.partnerId;
      if (hasItem) {
        const DEDICATED_SURFACE_PARTNER_IDS = closure_1_0(closure_1_2[15]).DEDICATED_SURFACE_PARTNER_IDS;
        hasItem = DEDICATED_SURFACE_PARTNER_IDS.has(id.partnerId);
      }
      tmp = !hasItem;
    }
    return tmp;
  });
  const userContent = closure_4.settings.userContent;
  let prop;
  if (userContent != null) {
    const tmp4 =
      userContent.recurringDismissibleContentStates[
        DismissibleContent.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR
      ];
    if (tmp4 != null) {
      prop = tmp4.lastDismissedObjectId;
    }
  }
  let found1 = found;
  if (null != prop) {
    found1 = found.filter((id) => 1 === prop(closure_1_2[13]).compare(id.id, prop));
  }
  let id = null;
  if (0 !== found1.length) {
    id = found1.sort((startDate, startDate2) => {
      const date = new Date(startDate.startDate);
      let num = 1;
      if (date < date1) {
        num = -1;
      }
      return num;
    })[0].id;
  }
  return id;
};
export const shouldShowOutboundPromotionNotice = function shouldShowOutboundPromotionNotice() {
  ({ outboundPromotions, consumedInboundPromotionId: require } = closure_6);
  const found = outboundPromotions.filter((id) => {
    let tmp = id.id !== closure_0;
    if (tmp) {
      tmp = !closure_1_0(closure_1_2[11]).hasFlag(id.flags, closure_1_7.SUPPRESS_NOTIFICATION);
      const obj = closure_1_0(closure_1_2[11]);
    }
    if (tmp) {
      let hasItem = null != id.partnerId;
      if (hasItem) {
        const DEDICATED_SURFACE_PARTNER_IDS = closure_1_0(closure_1_2[15]).DEDICATED_SURFACE_PARTNER_IDS;
        hasItem = DEDICATED_SURFACE_PARTNER_IDS.has(id.partnerId);
      }
      tmp = !hasItem;
    }
    return tmp;
  });
  const userContent = closure_4.settings.userContent;
  let prop;
  if (userContent != null) {
    const tmp4 =
      userContent.recurringDismissibleContentStates[
        DismissibleContent.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR
      ];
    if (tmp4 != null) {
      prop = tmp4.lastDismissedObjectId;
    }
  }
  let found1 = found;
  if (null != prop) {
    found1 = found.filter((id) => 1 === prop(closure_1_2[13]).compare(id.id, prop));
  }
  let id = null;
  if (0 !== found1.length) {
    id = found1.sort((startDate, startDate2) => {
      const date = new Date(startDate.startDate);
      let num = 1;
      if (date < date1) {
        num = -1;
      }
      return num;
    })[0].id;
  }
  let tmp6 = null != id;
  if (tmp6) {
    tmp6 = !addVersionedDismissedContent.isTimeRecurringSnowflakeBoundDismissibleContentDismissed(
      DismissibleContent.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
      id,
      { cooldownDurationMs: 259200000 },
    );
    let obj = addVersionedDismissedContent;
  }
  return tmp6;
};
export const isDedicatedSurfacePromotion = function isDedicatedSurfacePromotion(promotion) {
  let hasItem = null != promotion.partnerId;
  if (hasItem) {
    const DEDICATED_SURFACE_PARTNER_IDS = CountryListMode.DEDICATED_SURFACE_PARTNER_IDS;
    hasItem = DEDICATED_SURFACE_PARTNER_IDS.has(promotion.partnerId);
  }
  return hasItem;
};
export const shouldShowOutboundPromotionOnPlatform = function shouldShowOutboundPromotionOnPlatform(promotion) {
  const isIOSResult = set2.isIOS();
  let tmp2 = !isIOSResult;
  if (isIOSResult) {
    tmp2 = !promotion.hasFlag(PromotionFlags.IS_BLOCKED_IOS);
  }
  return tmp2;
};
export const getClaimedOutboundPromotionCodeMap = function getClaimedOutboundPromotionCodeMap(stateFromStores2) {
  const obj = {};
  const iter = stateFromStores2[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    obj[nextResult.promotion.id] = nextResult.code;
    continue;
  }
  return obj;
};
export const getClaimedEndedOutboundPromotions = function getClaimedEndedOutboundPromotions(arr, arr2) {
  const set = new Set(arr2.map((id) => id.id));
  return arr.filter((promotion) => {
    promotion = promotion.promotion;
    const hasItem = set.has(promotion.id);
    let tmp2 = !hasItem;
    if (!hasItem) {
      tmp2 = promotion.promotionType !== set(closure_1_2[15]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING;
    }
    if (tmp2) {
      let hasItem1 = null != promotion.partnerId;
      if (hasItem1) {
        const DEDICATED_SURFACE_PARTNER_IDS = set(closure_1_2[15]).DEDICATED_SURFACE_PARTNER_IDS;
        hasItem1 = DEDICATED_SURFACE_PARTNER_IDS.has(promotion.partnerId);
      }
      tmp2 = !hasItem1;
    }
    if (tmp2) {
      const isIOSResult = set(closure_1_2[9]).isIOS();
      let tmp12 = !isIOSResult;
      if (isIOSResult) {
        tmp12 = !promotion.hasFlag(closure_1_7.IS_BLOCKED_IOS);
      }
      tmp2 = tmp12;
      const obj = set(closure_1_2[9]);
    }
    return tmp2;
  });
};
export const isRecurringPromotion = function isRecurringPromotion(promotionType) {
  return promotionType.promotionType === CountryListMode.PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING;
};
