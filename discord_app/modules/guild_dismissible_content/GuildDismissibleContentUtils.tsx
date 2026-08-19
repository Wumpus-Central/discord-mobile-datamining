// === Module 11663: isContentDismissed ===

// Module 11663 (isContentDismissed)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import hasBit from "hasBit" /* 1376 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { UserSettingsDelay } from "MAX_FAVORITES" /* 685 */;

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
  return _require(589).useStateFromStores(items, () => {
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
  let obj = _require(1374);
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
  const result = _require(1374).updateUserGuildSettings(guildId, (dismissedGuildContent) => {
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