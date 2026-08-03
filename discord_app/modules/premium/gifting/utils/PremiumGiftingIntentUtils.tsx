// === Module 11019: GiftIntentType ===

// Module 11019 (GiftIntentType)
import { GiftIntentType } from "GuildFeatures";
import { AnalyticsLocations } from "ME";

const items = [AnalyticsLocations.FRIEND_ANNIVERSARIES_CHAT, GiftIntentType.FRIEND_ANNIVERSARY];
const items1 = [items, , ];
const items2 = [AnalyticsLocations.FRIEND_ANNIVERSARIES_ACTION_BUTTON, GiftIntentType.FRIEND_ANNIVERSARY];
items1[1] = items2;
const items3 = [AnalyticsLocations.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK, GiftIntentType.FRIEND_ANNIVERSARY];
items1[2] = items3;
const map = new Map(items1);
const result = require("set").fileFinishedImporting("modules/premium/gifting/utils/PremiumGiftingIntentUtils.tsx");

export const getPremiumGiftingIntentAnalyticsLocation = function getPremiumGiftingIntentAnalyticsLocation(arg0) {
  if (arg0 === GiftIntentType.FRIEND_ANNIVERSARY) {
    let obj = { chat: null, actionButton: null, actionButtonCoachmark: null };
    ({ FRIEND_ANNIVERSARIES_CHAT: obj2[0], FRIEND_ANNIVERSARIES_ACTION_BUTTON: obj2[1], FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK: obj2[2] } = AnalyticsLocations);
  } else {
    obj = {};
  }
  return obj;
};
export const getGiftIntentTypeForLocation = function getGiftIntentTypeForLocation(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
export const parseGiftIntentType = function parseGiftIntentType(giftIntentType) {
  let tmp = null;
  if (typeof giftIntentType !== "__REMOTEDEV__") {
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