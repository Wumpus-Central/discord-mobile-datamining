// === Module 11706: isContentDismissed ===

// Module 11706 (isContentDismissed)
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { AnalyticEvents } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { UserSettingsDelay } from "MAX_FAVORITES";

const require = arg1;
let result = require("ContentDismissActionType").fileFinishedImporting("modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx");

export const isContentDismissed = function isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_1) {
  dismissedGuildContent = dismissedGuildContent.getDismissedGuildContent(closure_1);
  let hasBitResult = null != dismissedGuildContent;
  if (hasBitResult) {
    hasBitResult = require(1357) /* hasBit */.hasBit(dismissedGuildContent, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK);
    const obj = require(1357) /* hasBit */;
  }
  return hasBitResult;
};
export const useIsContentDismissed = function useIsContentDismissed(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const items = [handleConnectionClosedOrResumed];
  return _require(589).useStateFromStores(items, () => {
    const dismissedGuildContent = outer1_3.getDismissedGuildContent(closure_1);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = callback(outer1_2[4]).hasBit(dismissedGuildContent, callback);
      const obj = callback(outer1_2[4]);
    }
    return hasBitResult;
  });
};
export const markContentAsDismissed = function markContentAsDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, arg2, AUTO_DISMISS) {
  const _require = true;
  const importDefault = GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK;
  const dependencyMap = closure_0;
  let obj = _require(1355);
  const result = obj.updateUserGuildSettings(closure_0, (dismissedGuildContent) => {
    dismissedGuildContent = outer1_3.getDismissedGuildContent(guildId);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = callback(guildId[4]).hasBit(dismissedGuildContent, tmp);
      const obj = callback(guildId[4]);
    }
    if (!callback) {
      const tmp9 = callback(guildId[4]);
      dismissedGuildContent.dismissedGuildContent = tmp6 ? tmp9.addBit : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, tmp);
    }
    return false;
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
  if (arg2) {
    let UNKNOWN = AUTO_DISMISS;
    obj = { type: null, guild_id: null, action: null };
    obj[0] = _require(1358).DismissibleGuildContent[GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK];
    obj[1] = closure_0;
    if (AUTO_DISMISS == null) {
      UNKNOWN = ContentDismissActionType.UNKNOWN;
    }
    obj[2] = UNKNOWN;
    importDefault(698).track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj);
    const obj2 = importDefault(698);
  }
};
export const unmarkContentAsDismissed = function unmarkContentAsDismissed(dc, guildId) {
  const _require = false;
  let closure_1 = dc;
  const dependencyMap = guildId;
  const result = _require(1355).updateUserGuildSettings(guildId, (dismissedGuildContent) => {
    dismissedGuildContent = outer1_3.getDismissedGuildContent(guildId);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = callback(guildId[4]).hasBit(dismissedGuildContent, tmp);
      const obj = callback(guildId[4]);
    }
    if (!callback) {
      const tmp9 = callback(guildId[4]);
      dismissedGuildContent.dismissedGuildContent = tmp6 ? tmp9.addBit : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, tmp);
    }
    return false;
  }, UserSettingsDelay.FREQUENT_USER_ACTION);
};