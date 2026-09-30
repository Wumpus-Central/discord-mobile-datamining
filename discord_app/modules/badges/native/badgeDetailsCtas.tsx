// === Module 10881: badgeDetailsCtas ===

// Module 10881 (badgeDetailsCtas)
import Constants from "Constants" /* 1074 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import util from "util" /* 1115 */;
import openURLDefault from "openURL" /* 4549 */;
import QuestContent from "QuestContent" /* 5958 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6799 */;
import openUserSettings from "openUserSettings" /* 6996 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7157 */;
import BadgeId from "BadgeId" /* 7824 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10325 */;
import QuestUtils from "QuestUtils" /* 10882 */;
import QuestsEligibility from "QuestsEligibility" /* 10886 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
let obj = { [BadgeId.BadgeId.STAFF]: obj2, [BadgeId.BadgeId.PREMIUM_TENURE]: obj3, [BadgeId.BadgeId.GUILD_BOOSTER]: obj4, [BadgeId.BadgeId.ORB_PROFILE]: obj5 };
obj[BadgeId.BadgeId.QUEST_COMPLETED] = {
  ctaLabel() {
    const intl = util.intl;
    return intl.string(util.t.swICIT);
  },
  ctaAction() {
    obj = QuestUtils;
    return obj.openQuestHome({ fromContent: QuestContent.QuestContent.QUEST_BADGE });
  },
  isAvailable: QuestsEligibility.getIsEligibleForQuests
};
obj[BadgeId.BadgeId.GIFTING] = {
  ctaLabel() {
    const intl = util.intl;
    return intl.string(util.t["nUA/JW"]);
  },
  ctaAction() {
    const obj2 = { analyticsLocations: null };
    const items = [AnalyticsLocationDefault.BADGE];
    obj2.analyticsLocations = items;
    return utils_openGiftModal.openGiftModal(obj2);
  }
};
const result = size.fileFinishedImporting("modules/badges/native/badgeDetailsCtas.tsx");

export const getBadgeDetailsCta = function getBadgeDetailsCta(badge_id) {
  let isAvailable;
  if (obj[badge_id] != null) {
    isAvailable = obj.isAvailable;
  }
  return obj[badge_id];
};