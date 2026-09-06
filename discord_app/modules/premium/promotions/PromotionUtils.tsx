// discord_app/modules/premium/promotions/PromotionUtils.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "../../dismissible_content/DismissibleContentUtils.tsx";
import constants from "constants.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import PromotionRecord from "../../../records/PromotionRecord.tsx";
import PromotionsStore from "PromotionsStore.tsx";

require = fn;
function claimedOutboundPromotionCodeFromServer(code) {
  return {
    code: code.code,
    userId: code.user_id,
    claimedAt: code.claimed_at,
    promotion: PromotionRecord.createFromServer(code.promotion),
  };
}
let closure_12 = async function _claimOutboundPromotion(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          ({
            promotionId: closure_131_0,
            promotionTitle: closure_131_1,
            partnerId: closure_131_2,
            analyticsLocations: closure_131_3,
          } = closure_0);
          closure_131_4 = undefined;
          let body;
          closure_131_6 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          const HTTP = closure_132_0(closure_132_2[8]).HTTP;
          const obj2 = {
            url: closure_132_9.CLAIM_OUTBOUND_PROMOTION_CODE(closure_131_0),
            rejectWithError: closure_132_0(closure_132_2[8]).rejectWithMigratedError(),
          };
          c5 = 2;
          c6 = 1;
          const obj3 = { value: HTTP.post(obj2), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_131_4 = value;
        body = closure_131_4.body;
        if (obj9.isIOS()) {
          let ANDROID = tmp38.IOS;
        } else {
          ANDROID = tmp38.ANDROID;
        }
        closure_131_6 = ANDROID;
        obj = closure_132_1(closure_132_2[10]);
        const obj5 = {
          platform: closure_131_6,
          status: closure_131_4.status,
          location_stack: closure_131_3,
          promotion_id: closure_131_0,
          name: null,
          partner: null,
        };
        let name = closure_131_1;
        if (closure_131_1 == null) {
          name = null;
        }
        obj5.name = name;
        let partner = closure_131_2;
        if (closure_131_2 == null) {
          partner = null;
        }
        obj5.partner = partner;
        obj.track(closure_132_8.OUTBOUND_PROMOTION_CLAIMED, obj5);
        c6 = 3;
        const obj6 = { value: closure_132_11(body), done: true };
        return obj6;
      }
    } catch (tmp27) {
      c6 = tmp;
      throw tmp27;
    }
  }
};
const PromotionFlags = fn(1373).PromotionFlags;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, Endpoints: closure_9, Platforms: c10 } = Constants);
const ActivityPlatform = fn(1920).ActivityPlatform;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/PromotionUtils.tsx");

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
export const claimOutboundPromotion = function claimOutboundPromotion() {
  const self = this;
  const apply = closure_12.apply;
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
    }
    return str2;
  }
  str2 = outboundPromotion.outboundRedemptionPageLink;
  if (str2 == null) {
    str2 = "";
  }
};
export const getNextUnseenOutboundPromotionId = function getNextUnseenOutboundPromotionId() {
  ({ outboundPromotions, consumedInboundPromotionId: require } = PromotionsStore);
  const found = outboundPromotions.filter((id) => {
    let tmp = id.id !== closure_1_0;
    if (tmp) {
      tmp = !FlagUtils.hasFlag(id.flags, PromotionFlags.SUPPRESS_NOTIFICATION);
    }
    if (tmp) {
      let hasItem = null != id.partnerId;
      if (hasItem) {
        const DEDICATED_SURFACE_PARTNER_IDS = constants.DEDICATED_SURFACE_PARTNER_IDS;
        hasItem = DEDICATED_SURFACE_PARTNER_IDS.has(id.partnerId);
      }
      tmp = !hasItem;
    }
    return tmp;
  });
  const userContent = UserSettingsProtoStore.settings.userContent;
  let prop;
  if (userContent != null) {
    const tmp4 =
      userContent.recurringDismissibleContentStates[
        dismissible_content.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR
      ];
    if (tmp4 != null) {
      prop = tmp4.lastDismissedObjectId;
    }
  }
  let found1 = found;
  if (null != prop) {
    found1 = found.filter((id) => 1 === SnowflakeUtilsDefault.compare(id.id, prop));
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
  ({ outboundPromotions, consumedInboundPromotionId: require } = PromotionsStore);
  const found = outboundPromotions.filter((id) => {
    let tmp = id.id !== closure_1_0;
    if (tmp) {
      tmp = !FlagUtils.hasFlag(id.flags, PromotionFlags.SUPPRESS_NOTIFICATION);
    }
    if (tmp) {
      let hasItem = null != id.partnerId;
      if (hasItem) {
        const DEDICATED_SURFACE_PARTNER_IDS = constants.DEDICATED_SURFACE_PARTNER_IDS;
        hasItem = DEDICATED_SURFACE_PARTNER_IDS.has(id.partnerId);
      }
      tmp = !hasItem;
    }
    return tmp;
  });
  const userContent = UserSettingsProtoStore.settings.userContent;
  let prop;
  if (userContent != null) {
    const tmp4 =
      userContent.recurringDismissibleContentStates[
        dismissible_content.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR
      ];
    if (tmp4 != null) {
      prop = tmp4.lastDismissedObjectId;
    }
  }
  let found1 = found;
  if (null != prop) {
    found1 = found.filter((id) => 1 === SnowflakeUtilsDefault.compare(id.id, prop));
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
    tmp6 = !DismissibleContentUtils.isTimeRecurringSnowflakeBoundDismissibleContentDismissed(
      dismissible_content.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
      id,
      { cooldownDurationMs: 259200000 },
    );
  }
  return tmp6;
};
export const isDedicatedSurfacePromotion = function isDedicatedSurfacePromotion(promotion) {
  let hasItem = null != promotion.partnerId;
  if (hasItem) {
    const DEDICATED_SURFACE_PARTNER_IDS = constants.DEDICATED_SURFACE_PARTNER_IDS;
    hasItem = DEDICATED_SURFACE_PARTNER_IDS.has(promotion.partnerId);
  }
  return hasItem;
};
export const shouldShowOutboundPromotionOnPlatform = function shouldShowOutboundPromotionOnPlatform(promotion) {
  const isIOSResult = PlatformUtils.isIOS();
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
      tmp2 = promotion.promotionType !== constants.PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING;
    }
    if (tmp2) {
      let hasItem1 = null != promotion.partnerId;
      if (hasItem1) {
        const DEDICATED_SURFACE_PARTNER_IDS = constants.DEDICATED_SURFACE_PARTNER_IDS;
        hasItem1 = DEDICATED_SURFACE_PARTNER_IDS.has(promotion.partnerId);
      }
      tmp2 = !hasItem1;
    }
    if (tmp2) {
      const isIOSResult = PlatformUtils.isIOS();
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
  return promotionType.promotionType === constants.PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING;
};
