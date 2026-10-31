// discord_app/modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx
import Constants from "../../../../Constants.tsx";
import _mod6556 from "module_6556" /* 6556 */;
import ReadStateConstants from "../../../read_states/ReadStateConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const Presets = { ALL_MESSAGES: "all_messages", MENTIONS: "mentions", NOTHING: "nothing", CUSTOM: "custom" };
const result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx");

export { Presets };
export function presetFromSettings(guildUnreadSetting, UserGuildSettingsStore) {
  const items = [UserGuildSettingsStore, guildUnreadSetting];
  const match = _mod6556.match(items);
  const items1 = [UserNotificationSettings.ALL_MESSAGES, UnreadSetting.ALL_MESSAGES];
  const items2 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.UNSET];
  const withResult = match.with(items1, () => constants.ALL_MESSAGES);
  const items3 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.ONLY_MENTIONS];
  const withResult1 = match.with(items1, () => constants.ALL_MESSAGES).with(items2, () => constants.MENTIONS);
  const items4 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.UNSET];
  const withResult2 = match
    .with(items1, () => constants.ALL_MESSAGES)
    .with(items2, () => constants.MENTIONS)
    .with(items3, () => constants.MENTIONS);
  const items5 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.ONLY_MENTIONS];
  const withResult3 = match
    .with(items1, () => constants.ALL_MESSAGES)
    .with(items2, () => constants.MENTIONS)
    .with(items3, () => constants.MENTIONS)
    .with(items4, () => constants.NOTHING);
  return match
    .with(items1, () => constants.ALL_MESSAGES)
    .with(items2, () => constants.MENTIONS)
    .with(items3, () => constants.MENTIONS)
    .with(items4, () => constants.NOTHING)
    .with(items5, () => constants.NOTHING)
    .otherwise(() => constants.CUSTOM);
}
