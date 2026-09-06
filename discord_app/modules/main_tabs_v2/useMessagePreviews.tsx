// discord_app/modules/main_tabs_v2/useMessagePreviews.tsx
import UserSettings from "../user_settings/UserSettings.tsx";
import useIsNsfwGatedDefault from "../age_gate/useIsNsfwGated.tsx";
import useLatestChannelMessageDefault from "../message_previews/useLatestChannelMessage.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/useMessagePreviews.tsx");

export default function useMessagePreview(guild_id, arg1) {
  _require = guild_id;
  ({ unread, disabled } = arg1);
  guild_id = guild_id.guild_id;
  const items = [UserSettingsProtoStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
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
  const obj = require("initialize");
  const items1 = [ReadStateStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
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
    disabled = stateFromStores === tmp(7879).MessagePreviewTypes.NONE;
  }
  if (!disabled) {
    let tmp6 = stateFromStores === tmp(7879).MessagePreviewTypes.UNREADS;
    if (tmp6) {
      if (unread == null) {
        unread = stateFromStores1;
      }
      tmp6 = !unread;
    }
    disabled = tmp6;
  }
  return useLatestChannelMessageDefault(guild_id, disabled);
}
export const useMessagePreviewSetting = function useMessagePreviewSetting(arg0) {
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
};
