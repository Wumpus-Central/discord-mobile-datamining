// === Module 15152: useMessagePreviews ===

// Module 15152 (useMessagePreviews)
import UserSettings from "UserSettings" /* 2028 */;
import useIsNsfwGatedDefault from "useIsNsfwGated" /* 7538 */;
import useLatestChannelMessageDefault from "useLatestChannelMessage" /* 15153 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    cResult[0] = items;
    first = items;
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
        let setting;
        const ValidMessagePreviewTypes = UserSettings.ValidMessagePreviewTypes;
        if (ValidMessagePreviewTypes.has(tmp2.value)) {
          setting = tmp2.value;
        }
        return setting;
      }
      const MessagePreviewSetting = UserSettings.MessagePreviewSetting;
      setting = MessagePreviewSetting.getSetting();
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [UserSettingsProtoStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
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
      let setting;
      const ValidMessagePreviewTypes = UserSettings.ValidMessagePreviewTypes;
      if (ValidMessagePreviewTypes.has(tmp2.value)) {
        setting = tmp2.value;
      }
      return setting;
    }
    const MessagePreviewSetting = UserSettings.MessagePreviewSetting;
    setting = MessagePreviewSetting.getSetting();
  });
});
let closure_5 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, arg1) => {
  let disabled;
  let first;
  let tmp7;
  let unread;
  _require = guild_id;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(3);
  ({ unread, disabled } = arg1);
  const tmp4 = closure_5(guild_id.guild_id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function o() {
      const hasUnreadResult = null != guild_id && ReadStateStore.hasUnread(tmp.id);
      return hasUnreadResult;
    };
    cResult[1] = guild_id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (!disabled) {
    disabled = useIsNsfwGatedDefault(guild_id);
  }
  if (!disabled) {
    disabled = tmp4 === tmp(7525).MessagePreviewTypes.NONE;
  }
  if (!disabled) {
    let tmp10 = tmp4 === tmp(7525).MessagePreviewTypes.UNREADS;
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
  let disabled;
  let unread;
  _require = guild_id;
  ({ unread, disabled } = arg1);
  const tmp = closure_5(guild_id.guild_id);
  const items = [ReadStateStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const hasUnreadResult = null != guild_id && ReadStateStore.hasUnread(tmp.id);
    return hasUnreadResult;
  });
  if (!disabled) {
    disabled = useIsNsfwGatedDefault(guild_id);
  }
  if (!disabled) {
    disabled = tmp === tmp2(7525).MessagePreviewTypes.NONE;
  }
  if (!disabled) {
    let tmp6 = tmp === tmp2(7525).MessagePreviewTypes.UNREADS;
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
const result = size.fileFinishedImporting("modules/main_tabs_v2/useMessagePreviews.tsx");

export default tmp3;
export const useMessagePreviewSetting = tmp2;