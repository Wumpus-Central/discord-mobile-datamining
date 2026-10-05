// === Module 15137: useMessagePreviews ===

// Module 15137 (useMessagePreviews)
import UserSettings from "UserSettings" /* 2028 */;
import useIsNsfwGatedDefault from "useIsNsfwGated" /* 7527 */;
import useLatestChannelMessageDefault from "useLatestChannelMessage" /* 15138 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;

const require = globalThis.__r;

require = fn;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const guilds = UserSettingsProtoStore.settings.guilds;
      let tmp2 = null;
      if (null != closure_0) {
        let messagePreviews;
        if (guilds != null) {
          if (guilds.guilds[tmp] != null) {
            const mobileRedesignChannelListSettings = tmp4.mobileRedesignChannelListSettings;
            if (mobileRedesignChannelListSettings != null) {
              messagePreviews = mobileRedesignChannelListSettings.messagePreviews;
            }
          }
        }
        tmp2 = messagePreviews;
      }
      if (null != tmp2) {
        const ValidMessagePreviewTypes = UserSettings.ValidMessagePreviewTypes;
        if (ValidMessagePreviewTypes.has(tmp2.value)) {
          let setting = tmp2.value;
        }
        return setting;
      }
      const MessagePreviewSetting = UserSettings.MessagePreviewSetting;
      setting = MessagePreviewSetting.getSetting();
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [UserSettingsProtoStore];
  return require("initialize").useStateFromStores(items, () => {
    const guilds = UserSettingsProtoStore.settings.guilds;
    let tmp2 = null;
    if (null != closure_0) {
      let messagePreviews;
      if (guilds != null) {
        if (guilds.guilds[tmp] != null) {
          const mobileRedesignChannelListSettings = tmp4.mobileRedesignChannelListSettings;
          if (mobileRedesignChannelListSettings != null) {
            messagePreviews = mobileRedesignChannelListSettings.messagePreviews;
          }
        }
      }
      tmp2 = messagePreviews;
    }
    if (null != tmp2) {
      const ValidMessagePreviewTypes = UserSettings.ValidMessagePreviewTypes;
      if (ValidMessagePreviewTypes.has(tmp2.value)) {
        let setting = tmp2.value;
      }
      return setting;
    }
    const MessagePreviewSetting = UserSettings.MessagePreviewSetting;
    setting = MessagePreviewSetting.getSetting();
  });
});
let closure_5 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/useMessagePreviews.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, arg1) => {
  _require = guild_id;
  const cResult = require("c").c(3);
  ({ unread, disabled } = arg1);
  const tmp4 = closure_5(guild_id.guild_id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function o() {
      let hasUnreadResult = null != closure_0;
      if (hasUnreadResult) {
        hasUnreadResult = ReadStateStore.hasUnread(tmp.id);
      }
      return hasUnreadResult;
    };
    cResult[1] = guild_id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  if (!disabled) {
    disabled = useIsNsfwGatedDefault(guild_id);
  }
  if (!disabled) {
    disabled = tmp4 === tmp(7514).MessagePreviewTypes.NONE;
  }
  if (!disabled) {
    let tmp10 = tmp4 === tmp(7514).MessagePreviewTypes.UNREADS;
    if (tmp10) {
      if (unread == null) {
        unread = stateFromStores;
      }
      tmp10 = !unread;
    }
    disabled = tmp10;
  }
  return useLatestChannelMessageDefault(guild_id, disabled);
}) : ((guild_id, arg1) => {
  _require = guild_id;
  ({ unread, disabled } = arg1);
  const tmp = closure_5(guild_id.guild_id);
  const items = [ReadStateStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let hasUnreadResult = null != closure_0;
    if (hasUnreadResult) {
      hasUnreadResult = ReadStateStore.hasUnread(tmp.id);
    }
    return hasUnreadResult;
  });
  if (!disabled) {
    disabled = useIsNsfwGatedDefault(guild_id);
  }
  if (!disabled) {
    disabled = tmp === tmp2(7514).MessagePreviewTypes.NONE;
  }
  if (!disabled) {
    let tmp6 = tmp === tmp2(7514).MessagePreviewTypes.UNREADS;
    if (tmp6) {
      if (unread == null) {
        unread = stateFromStores;
      }
      tmp6 = !unread;
    }
    disabled = tmp6;
  }
  return useLatestChannelMessageDefault(guild_id, disabled);
});
export const useMessagePreviewSetting = tmp2;