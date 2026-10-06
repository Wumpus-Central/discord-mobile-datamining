// discord_app/modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import UserSettingsConstants from "../../../user_settings/UserSettingsConstants.tsx";
import ReadStateConstants from "../../../read_states/ReadStateConstants.tsx";
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import notificationSettingsFlagUtils from "../utils/notificationSettingsFlagUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_6 = UserSettingsConstants.ChannelNotificationSettingsFlags;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
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
            const tmp12 = jsx(unread(12523), {
              context: "channel",
              value: notification,
              allMessagesSubLabel: tmp5,
              onChange: tmp8,
            });
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
          const tmp =
            message_notifications === UserNotificationSettings.ALL_MESSAGES && unread !== UnreadSetting.ALL_MESSAGES;
          if (tmp) {
            const obj2 = notificationSettingsFlagUtils;
            obj.flags = obj2.withChannelUnreadFlags(
              UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id),
              constants.UNREADS_ALL_MESSAGES,
            );
          }
          const obj3 = {
            guildId: channel.channel.guild_id,
            channelId: channel.channel.id,
            settings: obj,
            label: NotificationLabel.notifications(message_notifications),
          };
          const updateChannelOverrideSettings =
            NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
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
    }
  : (channel) => {
      _require = channel;
      let tmp = _require;
      let obj = require("notficationSettingsChannelFlagUtils");
      const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
      const unread = channelPresetSettings.unread;
      const notification = channelPresetSettings.notification;
      let stringResult;
      unread(12523);
      if (notification !== UserNotificationSettings.ALL_MESSAGES) {
        if (unread !== UnreadSetting.ALL_MESSAGES) {
          const intl = tmp(1126).intl;
          stringResult = intl.string(tmp(1126).t.eP8yWU);
        }
      }
      return (
        <tmp5
          context="channel"
          value={notification}
          allMessagesSubLabel={stringResult}
          onChange={function onChange(message_notifications) {
            let NotificationLabel;
            const obj = { message_notifications };
            const tmp =
              message_notifications === UserNotificationSettings.ALL_MESSAGES && unread !== UnreadSetting.ALL_MESSAGES;
            if (tmp) {
              const obj2 = notificationSettingsFlagUtils;
              obj.flags = obj2.withChannelUnreadFlags(
                UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id),
                constants.UNREADS_ALL_MESSAGES,
              );
            }
            const obj3 = {
              guildId: channel.channel.guild_id,
              channelId: channel.channel.id,
              settings: obj,
              label: NotificationLabel.notifications(message_notifications),
            };
            const updateChannelOverrideSettings =
              NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
            NotificationSettingsModalActionCreatorsDefault;
            NotificationLabel = NotificationSettingsUtils.NotificationLabel;
            const result = updateChannelOverrideSettings(obj3);
          }}
        />
      );
    };
let result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx",
);

export default tmp3;
