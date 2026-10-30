// === Module 11441: badgeDetailsCtas ===

// Module 11441 (badgeDetailsCtas)
import Constants from "Constants" /* 1072 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import util from "util" /* 1114 */;
import Link from "Link" /* 1499 */;
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import openURLDefault from "openURL" /* 5700 */;
import QuestContent from "QuestContent" /* 6780 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7712 */;
import BadgeId from "BadgeId" /* 8747 */;
import QuestsEligibility from "QuestsEligibility" /* 9653 */;
import QuestUtils from "QuestUtils" /* 9658 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10538 */;
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
    const items = [AnalyticsLocationDefault.BADGE];
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