// === Module 12509: NotificationSettingsMessageNotificationChannelActionSheet ===

// Module 12509 (NotificationSettingsMessageNotificationChannelActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import ReadStateConstants from "ReadStateConstants" /* 5072 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6609 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6614 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 9852 */;
import react from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_6 = UserSettingsConstants.ChannelNotificationSettingsFlags;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  _require = channel;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(11);
  let obj2 = require("notficationSettingsChannelFlagUtils");
  const channelPresetSettings = obj2.useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  if (cResult[0] === notification) {
    let tmp5;
    if (cResult[1] === unread) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === channel.channel.guild_id) {
      if (cResult[4] === channel.channel.id) {
        let tmp8;
        if (cResult[5] === unread) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === notification) {
          if (cResult[8] === tmp5) {
            let tmp9;
            if (cResult[9] === tmp8) {
              tmp9 = cResult[10];
            }
            return tmp9;
          }
        }
        const tmp12 = jsx(unread(12508), { context: "channel", value: notification, allMessagesSubLabel: tmp5, onChange: tmp8 });
        cResult[7] = notification;
        cResult[8] = tmp5;
        cResult[9] = tmp8;
        cResult[10] = tmp12;
        tmp9 = tmp12;
      }
    }
    const fn = function h(message_notifications) {
      let NotificationLabel;
      const obj = { message_notifications };
      const tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES && unread !== UnreadSetting.ALL_MESSAGES;
      if (tmp) {
        const obj2 = notificationSettingsFlagUtils;
        obj.flags = obj2.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id), constants.UNREADS_ALL_MESSAGES);
      }
      const obj3 = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: obj, label: NotificationLabel.notifications(message_notifications) };
      const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
      NotificationSettingsModalActionCreatorsDefault;
      NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateChannelOverrideSettings(obj3);
    };
    cResult[3] = channel.channel.guild_id;
    cResult[4] = channel.channel.id;
    cResult[5] = unread;
    cResult[6] = fn;
    tmp8 = fn;
  }
  let stringResult;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.eP8yWU);
    }
  }
  cResult[0] = notification;
  cResult[1] = unread;
  cResult[2] = stringResult;
  tmp5 = stringResult;
}) : ((channel) => {
  _require = channel;
  let tmp = _require;
  let obj = require("notficationSettingsChannelFlagUtils");
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  let stringResult;
  unread(12508);
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.eP8yWU);
    }
  }
  return <tmp5 context="channel" value={notification} allMessagesSubLabel={stringResult} onChange={function onChange(message_notifications) {
    let NotificationLabel;
    const obj = { message_notifications };
    const tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES && unread !== UnreadSetting.ALL_MESSAGES;
    if (tmp) {
      const obj2 = notificationSettingsFlagUtils;
      obj.flags = obj2.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id), constants.UNREADS_ALL_MESSAGES);
    }
    const obj3 = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: obj, label: NotificationLabel.notifications(message_notifications) };
    const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = updateChannelOverrideSettings(obj3);
  }} />;
});
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx");

export default tmp3;