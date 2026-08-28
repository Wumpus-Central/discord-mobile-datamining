// === Module 14846: useMessagePreview ===

// Module 14846 (useMessagePreview)
import useIsNsfwGatedDefault from "useIsNsfwGated" /* 7574 */;
import useLatestChannelMessageDefault from "useLatestChannelMessage" /* 14847 */;
import closure_3 from "handleConnectionClosedOrResumed" /* 1340 */;
import closure_4 from "generateOldThreadCutoff" /* 4461 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/useMessagePreviews.tsx");

export default function useMessagePreview(guild_id) {
  ({ unread, disabled } = arg1);
  guild_id = guild_id.guild_id;
  const items = [closure_3];
  const stateFromStores = guild_id(589).useStateFromStores(items, () => {
    const guilds = closure_1_3.settings.guilds;
    let tmp2 = null;
    if (null != guild_id) {
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
      const ValidMessagePreviewTypes = guild_id(closure_1_2[2]).ValidMessagePreviewTypes;
      if (ValidMessagePreviewTypes.has(tmp2.value)) {
        let setting = tmp2.value;
      }
      return setting;
    }
    const MessagePreviewSetting = guild_id(closure_1_2[2]).MessagePreviewSetting;
    setting = MessagePreviewSetting.getSetting();
  });
  const obj = guild_id(589);
  const items1 = [closure_4];
  const stateFromStores1 = guild_id(589).useStateFromStores(items1, () => {
    let hasUnreadResult = null != guild_id;
    if (hasUnreadResult) {
      hasUnreadResult = closure_1_4.hasUnread(tmp.id);
    }
    return hasUnreadResult;
  });
  if (!disabled) {
    disabled = useIsNsfwGatedDefault(guild_id);
  }
  if (!disabled) {
    disabled = stateFromStores === tmp(4140).MessagePreviewTypes.NONE;
  }
  if (!disabled) {
    let tmp6 = stateFromStores === tmp(4140).MessagePreviewTypes.UNREADS;
    if (tmp6) {
      if (unread == null) {
        unread = stateFromStores1;
      }
      tmp6 = !unread;
    }
    disabled = tmp6;
  }
  return useLatestChannelMessageDefault(guild_id, disabled);
};
export const useMessagePreviewSetting = function useMessagePreviewSetting(arg0) {
  const _require = arg0;
  const items = [closure_3];
  return _require(589).useStateFromStores(items, () => {
    const guilds = closure_1_3.settings.guilds;
    let tmp2 = null;
    if (null != guild_id) {
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
      const ValidMessagePreviewTypes = guild_id(closure_1_2[2]).ValidMessagePreviewTypes;
      if (ValidMessagePreviewTypes.has(tmp2.value)) {
        let setting = tmp2.value;
      }
      return setting;
    }
    const MessagePreviewSetting = guild_id(closure_1_2[2]).MessagePreviewSetting;
    setting = MessagePreviewSetting.getSetting();
  });
};