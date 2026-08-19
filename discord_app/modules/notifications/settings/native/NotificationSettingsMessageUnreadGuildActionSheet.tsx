// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import _modDef6798 from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet.tsx";
import updateUserGuildSettingsInternal from "../../../../stores/UserGuildSettingsStore.tsx";
import { UserNotificationSettings } from "../../../../Constants.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import { GuildNotificationSettingsFlags as closure_6 } from "../../../user_settings/UserSettingsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { updateGuildPreset } from "../utils/notificationSettingsGuildFlagUtils.tsx";

const require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  const _require = guildId;
  let obj = updateGuildPreset;
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.eP8yWU);
  }
  obj = {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(toggleExpandedHistory) {
      const guildFlags = closure_1_3.getGuildFlags(guildId.guildId);
      let obj = _modDef6798;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: guildId(dependencyMap[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = guildId(dependencyMap[11]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(toggleExpandedHistory));
      const obj2 = guildId(dependencyMap[10]);
    }
  };
  return jsx(NotificationSettingsMessageUnreadActionSheetDefault, {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(toggleExpandedHistory) {
      const guildFlags = closure_1_3.getGuildFlags(guildId.guildId);
      let obj = _modDef6798;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: guildId(dependencyMap[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = guildId(dependencyMap[11]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(toggleExpandedHistory));
      const obj2 = guildId(dependencyMap[10]);
    }
  });
};