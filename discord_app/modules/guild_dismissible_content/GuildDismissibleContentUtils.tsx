// discord_app/modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import hasBit from "../../utils/Uint8ArrayUtils.tsx";
import handleConnectionClosedOrResumed from "../user_settings/UserSettingsProtoStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";
import { ContentDismissActionType } from "../dismissible_content/DismissibleContentConstants.tsx";
import { UserSettingsDelay } from "../user_settings/UserSettingsConstants.tsx";
import { updateUserGuildSettings } from "../user_settings/UserSettingsProtoActionCreators.tsx";

require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx");

export const isContentDismissed = function isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0) {
  dismissedGuildContent = dismissedGuildContent.getDismissedGuildContent(closure_0);
  let hasBitResult = null != dismissedGuildContent;
  if (hasBitResult) {
    hasBitResult = hasBit.hasBit(dismissedGuildContent, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK);
  }
  return hasBitResult;
};
export const useIsContentDismissed = function useIsContentDismissed(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const items = [closure_3];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const dismissedGuildContent = closure_1_3.getDismissedGuildContent(closure_1);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = callback(dependencyMap[4]).hasBit(dismissedGuildContent, callback);
      const obj = callback(dependencyMap[4]);
    }
    return hasBitResult;
  });
};
export const markContentAsDismissed = function markContentAsDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, arg2, AUTO_DISMISS) {
  const _require = true;
  importDefault = GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK;
  dependencyMap = closure_0;
  let obj = updateUserGuildSettings;
  const result = obj.updateUserGuildSettings(closure_0, (dismissedGuildContent) => {
    dismissedGuildContent = closure_1_3.getDismissedGuildContent(guildId);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = callback(guildId[4]).hasBit(dismissedGuildContent, closure_1);
      const obj = callback(guildId[4]);
    }
    if (!callback) {
      const tmp9 = callback(guildId[4]);
      dismissedGuildContent.dismissedGuildContent = callback ? tmp9.addBit : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, closure_1);
    }
    return false;
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
  if (arg2) {
    let UNKNOWN = AUTO_DISMISS;
    obj = { type: null, guild_id: null, action: null };
    obj[0] = tmp(1377).DismissibleGuildContent[GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK];
    obj[1] = closure_0;
    if (AUTO_DISMISS == null) {
      UNKNOWN = ContentDismissActionType.UNKNOWN;
    }
    obj[2] = UNKNOWN;
    expandEventPropertiesDefault.track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj);
  }
  tmp = _require;
};
export const unmarkContentAsDismissed = function unmarkContentAsDismissed(dc, guildId) {
  const _require = false;
  closure_1 = dc;
  dependencyMap = guildId;
  const result = require("../user_settings/UserSettingsProtoActionCreators.tsx").updateUserGuildSettings(guildId, (dismissedGuildContent) => {
    dismissedGuildContent = closure_1_3.getDismissedGuildContent(guildId);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = callback(guildId[4]).hasBit(dismissedGuildContent, closure_1);
      const obj = callback(guildId[4]);
    }
    if (!callback) {
      const tmp9 = callback(guildId[4]);
      dismissedGuildContent.dismissedGuildContent = callback ? tmp9.addBit : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, closure_1);
    }
    return false;
  }, UserSettingsDelay.FREQUENT_USER_ACTION);
};