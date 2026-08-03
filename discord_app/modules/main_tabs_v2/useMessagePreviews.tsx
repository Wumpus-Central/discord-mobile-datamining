import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import generateOldThreadCutoff from "generateOldThreadCutoff";

const require = arg1;
const result = require("explicitContentFromProto").fileFinishedImporting("modules/main_tabs_v2/useMessagePreviews.tsx");

export default function useMessagePreview(guild_id) {
  let disabled;
  let unread;
  ({ unread, disabled } = arg1);
  guild_id = guild_id.guild_id;
  const items = [handleConnectionClosedOrResumed];
  const stateFromStores = guild_id(589).useStateFromStores(items, () => {
    const guilds = outer1_3.settings.guilds;
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
      const ValidMessagePreviewTypes = guild_id(outer1_2[2]).ValidMessagePreviewTypes;
      if (ValidMessagePreviewTypes.has(tmp2.value)) {
        let setting = tmp2.value;
      }
      return setting;
    }
    const MessagePreviewSetting = guild_id(outer1_2[2]).MessagePreviewSetting;
    setting = MessagePreviewSetting.getSetting();
  });
  const obj = guild_id(589);
  const items1 = [generateOldThreadCutoff];
  const stateFromStores1 = guild_id(589).useStateFromStores(items1, () => {
    let hasUnreadResult = null != guild_id;
    if (hasUnreadResult) {
      hasUnreadResult = outer1_4.hasUnread(tmp.id);
    }
    return hasUnreadResult;
  });
  if (!disabled) {
    disabled = importDefault(9314)(guild_id);
  }
  if (!disabled) {
    disabled = stateFromStores === tmp(3933).MessagePreviewTypes.NONE;
  }
  if (!disabled) {
    let tmp6 = stateFromStores === tmp(3933).MessagePreviewTypes.UNREADS;
    if (tmp6) {
      if (unread == null) {
        unread = stateFromStores1;
      }
      tmp6 = !unread;
    }
    disabled = tmp6;
  }
  return importDefault(14421)(guild_id, disabled);
};
export const useMessagePreviewSetting = function useMessagePreviewSetting(arg0) {
  const _require = arg0;
  const items = [handleConnectionClosedOrResumed];
  return _require(589).useStateFromStores(items, () => {
    const guilds = outer1_3.settings.guilds;
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
      const ValidMessagePreviewTypes = guild_id(outer1_2[2]).ValidMessagePreviewTypes;
      if (ValidMessagePreviewTypes.has(tmp2.value)) {
        let setting = tmp2.value;
      }
      return setting;
    }
    const MessagePreviewSetting = guild_id(outer1_2[2]).MessagePreviewSetting;
    setting = MessagePreviewSetting.getSetting();
  });
};