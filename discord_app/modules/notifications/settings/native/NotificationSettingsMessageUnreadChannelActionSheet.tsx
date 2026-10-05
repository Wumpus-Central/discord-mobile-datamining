// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import UserSettingsConstants from "../../../user_settings/UserSettingsConstants.tsx";
import ReadStateConstants from "../../../read_states/ReadStateConstants.tsx";
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import notificationSettingsFlagUtils from "../utils/notificationSettingsFlagUtils.tsx";
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet.tsx";
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
      let notification;
      let tmp5;
      let unread;
      _require = channel;
      let obj = require("react");
      const cResult = obj.c(9);
      const obj2 = require("notficationSettingsChannelFlagUtils");
      const channelPresetSettings = obj2.useChannelPresetSettings(channel.channel);
      ({ unread, notification } = channelPresetSettings);
      if (cResult[0] !== notification) {
        let stringResult;
        if (notification === UserNotificationSettings.ALL_MESSAGES) {
          const intl = tmp(1126).intl;
          stringResult = intl.string(tmp(1126).t.eP8yWU);
        }
        cResult[0] = notification;
        cResult[1] = stringResult;
        tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === channel.channel.guild_id) {
        let tmp8;
        if (cResult[3] === channel.channel.id) {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp5) {
          if (cResult[6] === tmp8) {
            let tmp9;
            if (cResult[7] === unread) {
              tmp9 = cResult[8];
            }
            return tmp9;
          }
        }
        const tmp12 = jsx(NotificationSettingsMessageUnreadActionSheetDefault, {
          value: unread,
          disabledMentionOnlyWithReason: tmp5,
          onChange: tmp8,
        });
        cResult[5] = tmp5;
        cResult[6] = tmp8;
        cResult[7] = unread;
        cResult[8] = tmp12;
        tmp9 = tmp12;
      }
      const fn = function c(toggleExpandedHistory) {
        let NotificationLabel;
        let UNREADS_ONLY_MENTIONS;
        let withChannelUnreadFlags;
        const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
        const obj = {
          guildId: channel.channel.guild_id,
          channelId: channel.channel.id,
          settings: { flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) },
          label: NotificationLabel.unreads(toggleExpandedHistory),
        };
        const updateChannelOverrideSettings =
          NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
        NotificationSettingsModalActionCreatorsDefault;
        withChannelUnreadFlags = notificationSettingsFlagUtils.withChannelUnreadFlags;
        notificationSettingsFlagUtils;
        if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
          UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
        } else {
          UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
        }
        ({ flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) });
        NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = updateChannelOverrideSettings(obj);
      };
      cResult[2] = channel.channel.guild_id;
      cResult[3] = channel.channel.id;
      cResult[4] = fn;
      tmp8 = fn;
    }
  : (channel) => {
      let notification;
      let unread;
      _require = channel;
      let obj = require("notficationSettingsChannelFlagUtils");
      const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
      ({ unread, notification } = channelPresetSettings);
      let stringResult;
      if (notification === UserNotificationSettings.ALL_MESSAGES) {
        const intl = tmp(1126).intl;
        stringResult = intl.string(tmp(1126).t.eP8yWU);
      }
      return (
        <tmp5
          value={unread}
          disabledMentionOnlyWithReason={stringResult}
          onChange={function onChange(toggleExpandedHistory) {
            let NotificationLabel;
            let UNREADS_ONLY_MENTIONS;
            let withChannelUnreadFlags;
            const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(
              channel.channel.guild_id,
              channel.channel.id,
            );
            const obj = {
              guildId: channel.channel.guild_id,
              channelId: channel.channel.id,
              settings: { flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) },
              label: NotificationLabel.unreads(toggleExpandedHistory),
            };
            const updateChannelOverrideSettings =
              NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
            NotificationSettingsModalActionCreatorsDefault;
            withChannelUnreadFlags = notificationSettingsFlagUtils.withChannelUnreadFlags;
            notificationSettingsFlagUtils;
            if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
              UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
            } else {
              UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
            }
            ({ flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) });
            NotificationLabel = NotificationSettingsUtils.NotificationLabel;
            const result = updateChannelOverrideSettings(obj);
          }}
        />
      );
    };
let result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx",
);

export default tmp3;
