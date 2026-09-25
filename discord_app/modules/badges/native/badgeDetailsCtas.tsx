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
import utils_openGiftModal from "../../premium/native/utils/openGiftModal.tsx";
import QuestUtils from "../../quests/native/QuestUtils.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const UserSettingsSections = Constants.UserSettingsSections;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
let closure_5 = {
  [BadgeId.BadgeId.STAFF]: {
    ctaLabel() {
      const intl = util.intl;
      return intl.string(util.t.q7A8hP);
    },
    ctaAction() {
      return openURLDefault("https://discord.com/careers");
    },
  },
  [BadgeId.BadgeId.PREMIUM_TENURE]: {
    ctaLabel(arg0) {
      ({ owned, isViewerOnUpgradeableNitro } = arg0);
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (isViewerOnUpgradeableNitro) {
        let stringResult = string(t.uKFeS1);
      } else if (owned) {
        stringResult = string(t.xGjjkd);
      } else {
        stringResult = string(t.BTxm69);
      }
      return stringResult;
    },
    ctaAction() {
      return openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
    },
  },
  [BadgeId.BadgeId.GUILD_BOOSTER]: {
    ctaLabel(owned) {
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (owned.owned) {
        let stringResult = string(t.VMvz3m);
      } else {
        stringResult = string(t.xFVZeU);
      }
      return stringResult;
    },
    ctaAction() {
      return openUserSettings.openUserSettings({ screen: UserSettingsSections.GUILD_BOOSTING });
    },
  },
  [BadgeId.BadgeId.ORB_PROFILE]: {
    ctaLabel() {
      const intl = util.intl;
      return intl.string(util.t.EBYkzk);
    },
    ctaAction() {
      const obj2 = { screen: constants.ORBS, analyticsLocations: null, analyticsSource: null };
      const items = [AnalyticsLocationDefault.BADGE];
      obj2.analyticsLocations = items;
      obj2.analyticsSource = AnalyticsLocationDefault.BADGE;
      return CollectiblesActionCreators.openCollectiblesShopMobile(obj2);
    },
  },
  [BadgeId.BadgeId.QUEST_COMPLETED]: {
    ctaLabel() {
      const intl = util.intl;
      return intl.string(util.t.swICIT);
    },
    ctaAction() {
      const obj = QuestUtils;
      return obj.openQuestHome({ fromContent: QuestContent.QuestContent.QUEST_BADGE });
    },
  },
  [BadgeId.BadgeId.GIFTING]: {
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
  },
};
const result = size.fileFinishedImporting("modules/badges/native/badgeDetailsCtas.tsx");

export const getBadgeDetailsCta = function getBadgeDetailsCta(badge_id) {
  return closure_5[badge_id];
};
