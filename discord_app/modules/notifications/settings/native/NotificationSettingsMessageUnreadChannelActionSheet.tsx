// === Module 12612: NotificationSettingsMessageUnreadChannelActionSheet ===

// Module 12612 (NotificationSettingsMessageUnreadChannelActionSheet)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6803 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6808 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10447 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 12611 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1085).UserNotificationSettings;
const UnreadSetting = fn(5967).UnreadSetting;
let closure_6 = fn(1095).ChannelNotificationSettingsFlags;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  _require = channel;
  const cResult = require("c").c(9);
  let obj = require("c");
  const channelPresetSettings = require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
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
  if (cResult[2] === channel.channel.guild_id) {
    if (cResult[3] === channel.channel.id) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp8) {
        if (cResult[7] === unread) {
          let tmp9 = cResult[8];
        }
        return tmp9;
      }
    }
    let obj3 = { value: unread, disabledMentionOnlyWithReason: tmp5, onChange: tmp8 };
    const tmp12 = jsx(NotificationSettingsMessageUnreadActionSheetDefault, { value: unread, disabledMentionOnlyWithReason: tmp5, onChange: tmp8 });
    cResult[5] = tmp5;
    cResult[6] = tmp8;
    cResult[7] = unread;
    cResult[8] = tmp12;
    tmp9 = tmp12;
  }
  const fn = function c(toggleExpandedHistory) {
    const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
    const obj2 = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: null, label: null };
    const obj = NotificationSettingsModalActionCreatorsDefault;
    if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
    }
    obj2.settings = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    obj2.label = NotificationLabel.unreads(toggleExpandedHistory);
    const result = obj.updateChannelOverrideSettings(obj2);
    const obj4 = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
  };
  cResult[2] = channel.channel.guild_id;
  cResult[3] = channel.channel.id;
  cResult[4] = fn;
  tmp8 = fn;
  let obj2 = require("notficationSettingsChannelFlagUtils");
}) : (function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  _require = channel;
  const channelPresetSettings = require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  let obj2 = { value: unread, disabledMentionOnlyWithReason: null, onChange: null };
  let stringResult;
  let obj = require("notficationSettingsChannelFlagUtils");
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t.eP8yWU);
  }
  obj2.disabledMentionOnlyWithReason = stringResult;
  obj2.onChange = function onChange(toggleExpandedHistory) {
    const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
    const obj2 = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: null, label: null };
    const obj = NotificationSettingsModalActionCreatorsDefault;
    if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
    }
    obj2.settings = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    obj2.label = NotificationLabel.unreads(toggleExpandedHistory);
    const result = obj.updateChannelOverrideSettings(obj2);
    const obj4 = { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
  };
  return jsx(NotificationSettingsMessageUnreadActionSheetDefault, { value: unread, disabledMentionOnlyWithReason: null, onChange: null });
});