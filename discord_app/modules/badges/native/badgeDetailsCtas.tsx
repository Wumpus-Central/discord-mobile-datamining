// === Module 10127: badgeDetailsCtas ===

// Module 10127 (badgeDetailsCtas)
import Constants from "Constants" /* 1072 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import util from "util" /* 1113 */;
import Link from "Link" /* 1503 */;
import QuestContent from "QuestContent" /* 5343 */;
import RootNavigationRef from "RootNavigationRef" /* 5493 */;
import openURLDefault from "openURL" /* 6008 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import BadgeId from "BadgeId" /* 8480 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 8484 */;
import openUserSettings from "openUserSettings" /* 8604 */;
import QuestUtils from "QuestUtils" /* 10128 */;
import QuestsEligibility from "QuestsEligibility" /* 10132 */;
import utils_openGiftModal from "utils/openGiftModal" /* 11661 */;
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
    return obj.openQuestHome({ fromContent: QuestContent.QuestContent.QUEST_BADGE, pop: false });
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
    items = [AnalyticsLocationDefault.BADGE];
    obj2.analyticsLocations = items;
    return utils_openGiftModal.openGiftModal(obj2);
  }
};
const result = size.fileFinishedImporting("modules/badges/native/badgeDetailsCtas.tsx");

export function getBadgeDetailsCta(badge_id) {
  let isAvailable;
  if (obj[badge_id] != null) {
    isAvailable = obj.isAvailable;
  }
  return obj[badge_id];
}