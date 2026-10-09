// discord_app/modules/badges/native/badgeDetailsCtas.tsx
import Constants from "../../../Constants.tsx";
import CollectiblesShopConstants from "../../collectibles/CollectiblesShopConstants.tsx";
import util from "../../../intl/index.native.tsx";
import openURLDefault from "../../../lib/openURL.tsx";
import QuestContent from "../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import CollectiblesActionCreators from "../../collectibles/CollectiblesActionCreators.tsx";
import BadgeId from "../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import QuestsEligibility from "../../quests/lib/QuestsEligibility.tsx";
import QuestUtils from "../../quests/native/QuestUtils.native.tsx";
import utils_openGiftModal from "../../premium/native/utils/openGiftModal.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const UserSettingsSections = Constants.UserSettingsSections;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
let obj = {
  [BadgeId.BadgeId.STAFF]: obj2,
  [BadgeId.BadgeId.PREMIUM_TENURE]: obj3,
  [BadgeId.BadgeId.GUILD_BOOSTER]: obj4,
  [BadgeId.BadgeId.ORB_PROFILE]: obj5,
};
obj[BadgeId.BadgeId.QUEST_COMPLETED] = {
  ctaLabel() {
    const intl = util.intl;
    return intl.string(util.t.swICIT);
  },
  ctaAction() {
    obj = QuestUtils;
    return obj.openQuestHome({ fromContent: QuestContent.QuestContent.QUEST_BADGE, pop: false });
  },
  isAvailable: QuestsEligibility.getIsEligibleForQuests,
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
  },
};
const result = size.fileFinishedImporting("modules/badges/native/badgeDetailsCtas.tsx");

export const getBadgeDetailsCta = function getBadgeDetailsCta(badge_id) {
  let isAvailable;
  if (obj[badge_id] != null) {
    isAvailable = obj.isAvailable;
  }
  return obj[badge_id];
};
