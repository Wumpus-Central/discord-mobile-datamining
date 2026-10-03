// === Module 10907: badgeDetailsCtas ===

// Module 10907 (badgeDetailsCtas)
import Constants from "Constants" /* 1085 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import util from "util" /* 1126 */;
import openURLDefault from "openURL" /* 4559 */;
import QuestContent from "QuestContent" /* 5628 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import BadgeId from "BadgeId" /* 7855 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10392 */;
import QuestUtils from "QuestUtils" /* 10908 */;
import QuestsEligibility from "QuestsEligibility" /* 10912 */;
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

export const getBadgeDetailsCta = function getBadgeDetailsCta(badge_id) {
  let isAvailable;
  if (obj[badge_id] != null) {
    isAvailable = obj.isAvailable;
  }
  return obj[badge_id];
};