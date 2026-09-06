// discord_app/modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import Uint8ArrayUtils from "../../utils/Uint8ArrayUtils.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const UserSettingsDelay = fn(1084).UserSettingsDelay;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx");

export const isContentDismissed = function isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, id) {
  const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(id);
  let hasBitResult = null != dismissedGuildContent;
  if (hasBitResult) {
    hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK);
  }
  return hasBitResult;
};
export const useIsContentDismissed = function useIsContentDismissed(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [UserSettingsProtoStore];
  return require("initialize").useStateFromStores(items, () => {
    const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_1);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, closure_0);
    }
    return hasBitResult;
  });
};
export const markContentAsDismissed = function markContentAsDismissed(
  GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
  guildId,
  arg2,
  AUTO_DISMISS,
) {
  _require = true;
  importDefault = GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK;
  dependencyMap = guildId;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(
    guildId,
    (dismissedGuildContent) => {
      dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_2);
      let hasBitResult = null != dismissedGuildContent;
      if (hasBitResult) {
        hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, tmp);
      }
      if (!c0) {
        const tmp9 = Uint8ArrayUtils;
        dismissedGuildContent.dismissedGuildContent = tmp6
          ? tmp9.addBit
          : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, tmp);
      }
      return false;
    },
    UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
  if (arg2) {
    let UNKNOWN = AUTO_DISMISS;
    obj = {
      type: require("dismissible_content").DismissibleGuildContent[GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK],
      guild_id: guildId,
      action: null,
    };
    if (AUTO_DISMISS == null) {
      UNKNOWN = ContentDismissActionType.UNKNOWN;
    }
    obj.action = UNKNOWN;
    AnalyticsUtilsDefault.track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj);
  }
};
export const unmarkContentAsDismissed = function unmarkContentAsDismissed(dc, guildId) {
  _require = false;
  closure_1 = dc;
  dependencyMap = guildId;
  const result = require("UserSettingsProtoActionCreators").updateUserGuildSettings(
    guildId,
    (dismissedGuildContent) => {
      dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_2);
      let hasBitResult = null != dismissedGuildContent;
      if (hasBitResult) {
        hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, tmp);
      }
      if (!c0) {
        const tmp9 = Uint8ArrayUtils;
        dismissedGuildContent.dismissedGuildContent = tmp6
          ? tmp9.addBit
          : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, tmp);
      }
      return false;
    },
    UserSettingsDelay.FREQUENT_USER_ACTION,
  );
};
