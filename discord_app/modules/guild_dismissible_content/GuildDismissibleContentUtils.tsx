// === Module 12153: GuildDismissibleContentUtils ===

// Module 12153 (GuildDismissibleContentUtils)
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 2035 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const f110804 = (dismissedGuildContent) => {
  dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(guildId);
  let hasBitResult = null != dismissedGuildContent;
  if (hasBitResult) {
    const obj = Uint8ArrayUtils;
    hasBitResult = obj.hasBit(dismissedGuildContent, dc);
  }
  if (!c0) {
    const tmp9 = Uint8ArrayUtils;
    dismissedGuildContent.dismissedGuildContent = c0 ? tmp9.addBit : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, dc);
  }
  return false;
};
const AnalyticEvents = Constants.AnalyticEvents;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const UserSettingsDelay = UserSettingsConstants.UserSettingsDelay;
function isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, c0) {
  const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(c0);
  let hasBitResult = null != dismissedGuildContent;
  if (hasBitResult) {
    const obj = Uint8ArrayUtils;
    hasBitResult = obj.hasBit(dismissedGuildContent, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK);
  }
  return hasBitResult;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp6;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6);
  }
  const fn = function u() {
    const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_1);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      const obj = Uint8ArrayUtils;
      hasBitResult = obj.hasBit(dismissedGuildContent, closure_0);
    }
    return hasBitResult;
  };
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [UserSettingsProtoStore];
  return obj.useStateFromStores(items, () => {
    const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_1);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      const obj = Uint8ArrayUtils;
      hasBitResult = obj.hasBit(dismissedGuildContent, closure_0);
    }
    return hasBitResult;
  });
});
let result = size.fileFinishedImporting("modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx");

export { isContentDismissed };
export const useIsContentDismissed = tmp2;
export const markContentAsDismissed = function markContentAsDismissed(dc, guildId, arg2, AUTO_DISMISS) {
  let c0;
  _require = true;
  importDefault = dc;
  dependencyMap = guildId;
  const obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(guildId, f110804, UserSettingsDelay.INFREQUENT_USER_ACTION);
  const tmp = _require;
  const tmp4 = arg2;
  if (tmp4) {
    let UNKNOWN = AUTO_DISMISS;
    const obj2 = { type: tmp(2036).DismissibleGuildContent[dc], guild_id: guildId, action: UNKNOWN };
    const track = AnalyticsUtilsDefault.track;
    const DISMISSIBLE_CONTENT_DISMISSED = AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED;
    AnalyticsUtilsDefault;
    if (AUTO_DISMISS == null) {
      UNKNOWN = ContentDismissActionType.UNKNOWN;
    }
    track(DISMISSIBLE_CONTENT_DISMISSED, obj2);
  }
};
export const unmarkContentAsDismissed = function unmarkContentAsDismissed(dc, guildId) {
  let c0;
  _require = false;
  let closure_1 = dc;
  dependencyMap = guildId;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(guildId, f110804, UserSettingsDelay.FREQUENT_USER_ACTION);
};