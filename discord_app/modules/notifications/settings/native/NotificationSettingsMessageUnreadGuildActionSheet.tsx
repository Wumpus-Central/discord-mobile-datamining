// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet.tsx";
import closure_3 from "../../../../stores/UserGuildSettingsStore.tsx";
import { UserNotificationSettings } from "../../../../Constants.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import { GuildNotificationSettingsFlags as closure_6 } from "../../../user_settings/UserSettingsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { updateGuildPreset } from "../utils/notificationSettingsGuildFlagUtils.tsx";

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx",
);

export default function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  const _require = guildId;
  let obj = updateGuildPreset;
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.eP8yWU);
  }
  obj = {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(ONLY_MENTIONS) {
      const guildFlags = closure_1_3.getGuildFlags(guildId.guildId);
      let obj = closure_1_1(closure_1_2[9]);
      if (ONLY_MENTIONS === closure_1_5.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: guildId(closure_1_2[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = guildId(closure_1_2[11]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(
        guildId.guildId,
        obj,
        NotificationLabel.unreads(ONLY_MENTIONS),
      );
    },
  };
  return jsx(NotificationSettingsMessageUnreadActionSheetDefault, {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(ONLY_MENTIONS) {
      const guildFlags = closure_1_3.getGuildFlags(guildId.guildId);
      let obj = closure_1_1(closure_1_2[9]);
      if (ONLY_MENTIONS === closure_1_5.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: guildId(closure_1_2[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = guildId(closure_1_2[11]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(
        guildId.guildId,
        obj,
        NotificationLabel.unreads(ONLY_MENTIONS),
      );
    },
  });
}
