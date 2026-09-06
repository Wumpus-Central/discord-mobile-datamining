// === Module 11815: PremiumGiftingIntentUtils ===

// Module 11815 (PremiumGiftingIntentUtils)
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1373 */;
import size from "module_2" /* 2 */;

const GiftIntentType = PremiumConstants.GiftIntentType;
const AnalyticsLocations = Constants.AnalyticsLocations;
const items = [AnalyticsLocations.FRIEND_ANNIVERSARIES_CHAT, GiftIntentType.FRIEND_ANNIVERSARY];
const items1 = [items, , ];
const items2 = [AnalyticsLocations.FRIEND_ANNIVERSARIES_ACTION_BUTTON, GiftIntentType.FRIEND_ANNIVERSARY];
items1[1] = items2;
const items3 = [AnalyticsLocations.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK, GiftIntentType.FRIEND_ANNIVERSARY];
items1[2] = items3;
const map = new Map(items1);
const result = size.fileFinishedImporting("modules/premium/gifting/utils/PremiumGiftingIntentUtils.tsx");

export const getPremiumGiftingIntentAnalyticsLocation = function getPremiumGiftingIntentAnalyticsLocation(arg0) {
  if (arg0 === GiftIntentType.FRIEND_ANNIVERSARY) {
    let obj = { chat: null, actionButton: null, actionButtonCoachmark: null };
    ({ FRIEND_ANNIVERSARIES_CHAT: obj2.chat, FRIEND_ANNIVERSARIES_ACTION_BUTTON: obj2.actionButton, FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK: obj2.actionButtonCoachmark } = AnalyticsLocations);
  } else {
    obj = {};
  }
  return obj;
};
export const getGiftIntentTypeForLocation = function getGiftIntentTypeForLocation(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
export const parseGiftIntentType = function parseGiftIntentType(giftIntentType) {
  let tmp = null;
  if (typeof giftIntentType === "number") {
    tmp = null;
    if (giftIntentType in GiftIntentType) {
      tmp = null;
      if (giftIntentType !== GiftIntentType.UNSPECIFIED) {
        tmp = giftIntentType;
      }
    }
  }
  return tmp;
};