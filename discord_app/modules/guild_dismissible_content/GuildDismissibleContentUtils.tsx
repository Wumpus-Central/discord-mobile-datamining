// === Module 14020: GuildDismissibleContentUtils ===

// Module 14020 (GuildDismissibleContentUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 4841 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const UserSettingsDelay = fn(1082).UserSettingsDelay;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx");

export function isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, guildId) {
  const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(guildId);
  let hasBitResult = null != dismissedGuildContent;
  if (hasBitResult) {
    hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK);
  }
  return hasBitResult;
}
export function useIsContentDismissed(arg0, arg1) {
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
}
export function markContentAsDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, guildId, arg2, AUTO_DISMISS) {
  _require = true;
  importDefault = GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK;
  dependencyMap = guildId;
  const result = require("UserSettingsProtoActionCreators").updateUserGuildSettings(guildId, (dismissedGuildContent) => {
    dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_2);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, closure_1);
    }
    if (!c0) {
      const tmp9 = Uint8ArrayUtils;
      dismissedGuildContent.dismissedGuildContent = c0 ? tmp9.addBit : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, closure_1);
    }
    return false;
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
  if (arg2) {
    let UNKNOWN = AUTO_DISMISS;
    const obj3 = { type: tmp(4842).DismissibleGuildContent[GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK], guild_id: guildId, action: null };
    if (AUTO_DISMISS == null) {
      UNKNOWN = ContentDismissActionType.UNKNOWN;
    }
    obj3.action = UNKNOWN;
    AnalyticsUtilsDefault.track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj3);
  }
  const obj = require("UserSettingsProtoActionCreators");
  tmp = _require;
}
export function unmarkContentAsDismissed(dc, guildId) {
  _require = false;
  closure_1 = dc;
  dependencyMap = guildId;
  const result = require("UserSettingsProtoActionCreators").updateUserGuildSettings(guildId, (dismissedGuildContent) => {
    dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_2);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, closure_1);
    }
    if (!c0) {
      const tmp9 = Uint8ArrayUtils;
      dismissedGuildContent.dismissedGuildContent = c0 ? tmp9.addBit : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, closure_1);
    }
    return false;
  }, UserSettingsDelay.FREQUENT_USER_ACTION);
}