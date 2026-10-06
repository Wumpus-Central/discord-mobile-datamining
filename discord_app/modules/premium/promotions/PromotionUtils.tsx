// === Module 13247: PromotionUtils ===

// Module 13247 (PromotionUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import Constants2 from "Constants" /* 2011 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2037 */;
import shared from "shared" /* 4735 */;
import promotions_constants from "promotions/constants" /* 10441 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import PromotionRecord from "PromotionRecord" /* 10410 */;
import PromotionsStore from "PromotionsStore" /* 10409 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c5, c6, promotion_id, set;

let c10;
let c9;
let metroImportAll;
const f114403 = (startDate, startDate2) => {
  let num = 1;
  const date = new Date(startDate.startDate);
  const date1 = new Date(startDate2.startDate);
  if (date < date1) {
    num = -1;
  }
  return num;
};
function claimedOutboundPromotionCodeFromServer(code) {
  obj = { code: code.code, userId: code.user_id, claimedAt: code.claimed_at, promotion: PromotionRecord.createFromServer(code.promotion) };
  return obj;
}
let obj = function _claimOutboundPromotion() {
  obj = _asyncToGenerator(async (promotion_id) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let obj10;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (promotion_id === 1) {
        throw value;
      } else if (promotion_id === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let name;
        let partner;
        let location_stack;
        let closure_4;
        let body;
        let ANDROID;
        c6 = 2;
        if (0 === c5) {
          if (promotion_id === 1) {
            c6 = 3;
            throw value;
          } else if (promotion_id === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            promotion_id = undefined;
            name = undefined;
            partner = undefined;
            location_stack = undefined;
            ({ promotionId: c0, promotionTitle: c1, partnerId: c2, analyticsLocations: c3 } = closure_0);
            closure_4 = undefined;
            body = undefined;
            ANDROID = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (promotion_id === 1) {
            c6 = 3;
            throw value;
          } else if (promotion_id === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const HTTP = closure_132_0(closure_132_2[8]).HTTP;
            const obj5 = { url: closure_132_9.CLAIM_OUTBOUND_PROMOTION_CODE(promotion_id), rejectWithError: obj10.rejectWithMigratedError() };
            const post = HTTP.post;
            obj10 = closure_132_0(closure_132_2[8]);
            c5 = 2;
            c6 = 1;
            const obj6 = { value: post(obj5), done: false };
            return obj6;
          }
        } else if (promotion_id === 1) {
          c6 = 3;
          throw value;
        } else if (promotion_id === 2) {
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_4 = value;
          body = closure_4.body;
          const obj8 = closure_132_0(closure_132_2[9]);
          if (obj8.isIOS()) {
            ANDROID = closure_132_10.IOS;
          } else {
            ANDROID = closure_132_10.ANDROID;
          }
          obj = { platform: ANDROID, status: closure_4.status, location_stack, promotion_id, name, partner };
          const track = closure_132_1(closure_132_2[10]).track;
          const OUTBOUND_PROMOTION_CLAIMED = closure_132_8.OUTBOUND_PROMOTION_CLAIMED;
          const tmp9 = closure_132_1(closure_132_2[10]);
          if (name == null) {
            name = null;
          }
          if (partner == null) {
            partner = null;
          }
          track(OUTBOUND_PROMOTION_CLAIMED, obj);
          c6 = 3;
          const obj9 = { value: closure_132_11(body), done: true };
          return obj9;
        }
      } catch (tmp27) {
        c6 = 3;
        throw tmp27;
      }
    }
  });
  return obj(...arguments);
};
const PromotionFlags = PremiumConstants.PromotionFlags;
({ AnalyticEvents: metroImportAll, Endpoints: c9, Platforms: c10 } = Constants);
const ActivityPlatform = Constants2.ActivityPlatform;
const result = size.fileFinishedImporting("modules/premium/promotions/PromotionUtils.tsx");

export const getPromotionImageURL = function getPromotionImageURL(id, arg1) {
  let combined;
  let str = "logo-light";
  obj = shared;
  if (obj.isThemeDark(arg1)) {
    str = "logo-dark";
  }
  if (null != CDN_HOST) {
    const _HermesInternal2 = HermesInternal;
    combined = "https://" + CDN_HOST + "/promotions/" + id + "/" + str + "?size=256";
  } else {
    const _location = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    combined = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT + "/promotions/" + id + "/" + str + "?size=256";
  }
  return combined;
};
export { claimedOutboundPromotionCodeFromServer };
export const claimOutboundPromotion = function claimOutboundPromotion() {
  return obj(...arguments);
};
export const getOutboundPromotionRedemptionUrl = function getOutboundPromotionRedemptionUrl(arg0, outboundPromotion) {
  let str2;
  if (null != outboundPromotion.outboundRedemptionUrlFormat) {
    if ("" !== outboundPromotion.outboundRedemptionUrlFormat) {
      const _encodeURIComponent = encodeURIComponent;
      const str3 = outboundPromotion.outboundRedemptionUrlFormat;
      str2 = str3.replace("{code}", encodeURIComponent(arg0));
    }
    return str2;
  }
  str2 = outboundPromotion.outboundRedemptionPageLink;
  if (str2 == null) {
    str2 = "";
  }
};
export const getNextUnseenOutboundPromotionId = function getNextUnseenOutboundPromotionId() {
  let outboundPromotions;
  ({ outboundPromotions, consumedInboundPromotionId: require } = PromotionsStore);
  const found = outboundPromotions.filter((id) => {
    let tmp = id.id !== require;
    if (tmp) {
      obj = FlagUtils;
      tmp = !obj.hasFlag(id.flags, PromotionFlags.SUPPRESS_NOTIFICATION);
    }
    if (tmp) {
      let hasItem = null != id.partnerId;
      if (hasItem) {
        const DEDICATED_SURFACE_PARTNER_IDS = promotions_constants.DEDICATED_SURFACE_PARTNER_IDS;
        hasItem = DEDICATED_SURFACE_PARTNER_IDS.has(id.partnerId);
      }
      tmp = !hasItem;
    }
    return tmp;
  });
  const userContent = UserSettingsProtoStore.settings.userContent;
  let prop;
  if (userContent != null) {
    const tmp4 = userContent.recurringDismissibleContentStates[dismissible_content.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR];
    if (tmp4 != null) {
      prop = tmp4.lastDismissedObjectId;
    }
  }
  let found1 = found;
  if (null != prop) {
    found1 = found.filter((id) => {
      id = id.id;
      obj = SnowflakeUtilsDefault;
      return 1 === obj.compare(id, prop);
    });
  }
  let id = null;
  if (0 !== found1.length) {
    id = found1.sort(f114403)[0].id;
  }
  return id;
};
export const shouldShowOutboundPromotionNotice = function shouldShowOutboundPromotionNotice() {
  let outboundPromotions;
  ({ outboundPromotions, consumedInboundPromotionId: require } = PromotionsStore);
  const found = outboundPromotions.filter((id) => {
    let tmp = id.id !== require;
    if (tmp) {
      obj = FlagUtils;
      tmp = !obj.hasFlag(id.flags, PromotionFlags.SUPPRESS_NOTIFICATION);
    }
    if (tmp) {
      let hasItem = null != id.partnerId;
      if (hasItem) {
        const DEDICATED_SURFACE_PARTNER_IDS = promotions_constants.DEDICATED_SURFACE_PARTNER_IDS;
        hasItem = DEDICATED_SURFACE_PARTNER_IDS.has(id.partnerId);
      }
      tmp = !hasItem;
    }
    return tmp;
  });
  const userContent = UserSettingsProtoStore.settings.userContent;
  let prop;
  if (userContent != null) {
    const tmp4 = userContent.recurringDismissibleContentStates[dismissible_content.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR];
    if (tmp4 != null) {
      prop = tmp4.lastDismissedObjectId;
    }
  }
  let found1 = found;
  if (null != prop) {
    found1 = found.filter((id) => {
      id = id.id;
      obj = SnowflakeUtilsDefault;
      return 1 === obj.compare(id, prop);
    });
  }
  let id = null;
  if (0 !== found1.length) {
    id = found1.sort(f114403)[0].id;
  }
  let tmp6 = null != id;
  if (tmp6) {
    obj = DismissibleContentUtils;
    tmp6 = !obj.isTimeRecurringSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, id, { cooldownDurationMs: 259200000 });
  }
  return tmp6;
};
export const isDedicatedSurfacePromotion = function isDedicatedSurfacePromotion(promotion) {
  let hasItem = null != promotion.partnerId;
  if (hasItem) {
    const DEDICATED_SURFACE_PARTNER_IDS = promotions_constants.DEDICATED_SURFACE_PARTNER_IDS;
    hasItem = DEDICATED_SURFACE_PARTNER_IDS.has(promotion.partnerId);
  }
  return hasItem;
};
export const shouldShowOutboundPromotionOnPlatform = function shouldShowOutboundPromotionOnPlatform(promotion) {
  obj = PlatformUtils;
  const isIOSResult = obj.isIOS();
  let tmp2 = !isIOSResult;
  if (isIOSResult) {
    tmp2 = !promotion.hasFlag(PromotionFlags.IS_BLOCKED_IOS);
  }
  return tmp2;
};
export const getClaimedOutboundPromotionCodeMap = function getClaimedOutboundPromotionCodeMap(stateFromStores2) {
  obj = {};
  const iter = stateFromStores2[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    obj[nextResult.promotion.id] = nextResult.code;
    continue;
  }
  return obj;
};
export const getClaimedEndedOutboundPromotions = function getClaimedEndedOutboundPromotions(arr, arr2) {
  set = new Set(arr2.map((id) => id.id));
  return arr.filter((promotion) => {
    promotion = promotion.promotion;
    const hasItem = set.has(promotion.id);
    let tmp2 = !hasItem && promotion.promotionType !== promotions_constants.PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING;
    if (tmp2) {
      let hasItem1 = null != promotion.partnerId;
      if (hasItem1) {
        const DEDICATED_SURFACE_PARTNER_IDS = promotions_constants.DEDICATED_SURFACE_PARTNER_IDS;
        hasItem1 = DEDICATED_SURFACE_PARTNER_IDS.has(promotion.partnerId);
      }
      tmp2 = !hasItem1;
    }
    if (tmp2) {
      obj = PlatformUtils;
      const isIOSResult = obj.isIOS();
      let tmp12 = !isIOSResult;
      if (isIOSResult) {
        tmp12 = !promotion.hasFlag(PromotionFlags.IS_BLOCKED_IOS);
      }
      tmp2 = tmp12;
    }
    return tmp2;
  });
};
export const isRecurringPromotion = function isRecurringPromotion(promotionType) {
  return promotionType.promotionType === promotions_constants.PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING;
};