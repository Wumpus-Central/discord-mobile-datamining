// discord_app/modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import Uint8ArrayUtils from "../../utils/Uint8ArrayUtils.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const UserSettingsDelay = fn(1095).UserSettingsDelay;
const ReactCompilerGating = fn(558);
function isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, guildId) {
  const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(guildId);
  let hasBitResult = null != dismissedGuildContent;
  if (hasBitResult) {
    hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK);
  }
  return hasBitResult;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx");

export { isContentDismissed };
export const useIsContentDismissed = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserSettingsProtoStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === arg1) {
          let tmp6 = cResult[3];
        }
        return tmp(504).useStateFromStores(first, tmp6);
      }
      const fn = function u() {
        const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_1);
        let hasBitResult = null != dismissedGuildContent;
        if (hasBitResult) {
          hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, closure_0);
        }
        return hasBitResult;
      };
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      tmp6 = fn;
      let obj = require("c");
      tmp = _require;
    }
  : (arg0, arg1) => {
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
export const markContentAsDismissed = function markContentAsDismissed(dc, guildId, arg2, AUTO_DISMISS) {
  _require = true;
  importDefault = dc;
  dependencyMap = guildId;
  const result = require("UserSettingsProtoActionCreators").updateUserGuildSettings(
    guildId,
    (dismissedGuildContent) => {
      dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_2);
      let hasBitResult = null != dismissedGuildContent;
      if (hasBitResult) {
        hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, closure_1);
      }
      if (!c0) {
        const tmp9 = Uint8ArrayUtils;
        dismissedGuildContent.dismissedGuildContent = c0
          ? tmp9.addBit
          : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, closure_1);
      }
      return false;
    },
    UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
  if (arg2) {
    let UNKNOWN = AUTO_DISMISS;
    const obj3 = { type: tmp(2036).DismissibleGuildContent[dc], guild_id: guildId, action: null };
    if (AUTO_DISMISS == null) {
      UNKNOWN = ContentDismissActionType.UNKNOWN;
    }
    obj3.action = UNKNOWN;
    AnalyticsUtilsDefault.track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj3);
  }
  const obj = require("UserSettingsProtoActionCreators");
  tmp = _require;
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
        hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, closure_1);
      }
      if (!c0) {
        const tmp9 = Uint8ArrayUtils;
        dismissedGuildContent.dismissedGuildContent = c0
          ? tmp9.addBit
          : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, closure_1);
      }
      return false;
    },
    UserSettingsDelay.FREQUENT_USER_ACTION,
  );
};
