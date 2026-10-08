// === Module 12623: NotificationSettingsMessageUnreadGuildActionSheet ===

// Module 12623 (NotificationSettingsMessageUnreadGuildActionSheet)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6793 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6798 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10425 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 12624 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5971 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1085).UserNotificationSettings;
const UnreadSetting = fn(5972).UnreadSetting;
let closure_6 = fn(1095).GuildNotificationSettingsFlags;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  _require = guildId;
  const cResult = require("c").c(8);
  let obj = require("c");
  const guildPresetSettings = require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  if (cResult[0] !== notification) {
    let stringResult;
    if (notification === UserNotificationSettings.ALL_MESSAGES) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.eP8yWU);
    }
    cResult[0] = notification;
    cResult[1] = stringResult;
    let tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== guildId.guildId) {
    const fn = function c(toggleExpandedHistory) {
      const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId.guildId);
      const obj = NotificationSettingsModalActionCreatorsDefault;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
      }
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, { flags: notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) }, NotificationLabel.unreads(toggleExpandedHistory));
      const obj3 = { flags: notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
    };
    cResult[2] = guildId.guildId;
    cResult[3] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === tmp8) {
      if (cResult[6] === unread) {
        let tmp9 = cResult[7];
      }
      return tmp9;
    }
  }
  const tmp10 = jsx(NotificationSettingsMessageUnreadActionSheetDefault, { disabledMentionOnlyWithReason: tmp5, value: unread, onChange: tmp8 });
  cResult[4] = tmp5;
  cResult[5] = tmp8;
  cResult[6] = unread;
  cResult[7] = tmp10;
  tmp9 = tmp10;
  let obj2 = require("notificationSettingsGuildFlagUtils");
}) : (function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  _require = guildId;
  const guildPresetSettings = require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  let stringResult;
  let obj = require("notificationSettingsGuildFlagUtils");
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t.eP8yWU);
  }
  return jsx(NotificationSettingsMessageUnreadActionSheetDefault, {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(toggleExpandedHistory) {
      const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId.guildId);
      const obj = NotificationSettingsModalActionCreatorsDefault;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
      }
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, { flags: notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) }, NotificationLabel.unreads(toggleExpandedHistory));
      const obj3 = { flags: notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
    }
  });
});