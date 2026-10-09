// === Module 12560: NotificationSettingsMessageNotificationChannelActionSheet ===

// Module 12560 (NotificationSettingsMessageNotificationChannelActionSheet)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6800 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6805 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10414 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5973 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1085).UserNotificationSettings;
const UnreadSetting = fn(5974).UnreadSetting;
let closure_6 = fn(1095).ChannelNotificationSettingsFlags;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
  _require = channel;
  const cResult = require("c").c(11);
  let obj = require("c");
  const channelPresetSettings = require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  if (cResult[0] === notification) {
    if (cResult[1] === unread) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === channel.channel.guild_id) {
      if (cResult[4] === channel.channel.id) {
        if (cResult[5] === unread) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] === notification) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp8) {
              let tmp9 = cResult[10];
            }
            return tmp9;
          }
        }
        let obj3 = { context: "channel", value: notification, allMessagesSubLabel: tmp5, onChange: tmp8 };
        const tmp12 = jsx(unread(12559), { context: "channel", value: notification, allMessagesSubLabel: tmp5, onChange: tmp8 });
        cResult[7] = notification;
        cResult[8] = tmp5;
        cResult[9] = tmp8;
        cResult[10] = tmp12;
        tmp9 = tmp12;
      }
    }
    const fn = function h(message_notifications) {
      const obj = { message_notifications };
      let tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES;
      if (tmp) {
        tmp = unread !== UnreadSetting.ALL_MESSAGES;
      }
      if (tmp) {
        obj.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id), constants.UNREADS_ALL_MESSAGES);
      }
      const obj4 = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: obj, label: null };
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      obj4.label = NotificationLabel.notifications(message_notifications);
      const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj4);
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
  let obj2 = require("notficationSettingsChannelFlagUtils");
}) : (function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
  _require = channel;
  const channelPresetSettings = require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  let obj2 = { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null };
  let stringResult;
  let obj = require("notficationSettingsChannelFlagUtils");
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.eP8yWU);
    }
  }
  obj2.allMessagesSubLabel = stringResult;
  obj2.onChange = function onChange(message_notifications) {
    const obj = { message_notifications };
    let tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== UnreadSetting.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id), constants.UNREADS_ALL_MESSAGES);
    }
    const obj4 = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: obj, label: null };
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    obj4.label = NotificationLabel.notifications(message_notifications);
    const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj4);
  };
  return jsx(unread(12559), { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null });
});