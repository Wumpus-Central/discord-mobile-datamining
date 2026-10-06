// discord_app/modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx
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
let _require, guildId;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_6 = UserSettingsConstants.GuildNotificationSettingsFlags;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      _require = guildId;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(10);
      let obj2 = require("notificationSettingsGuildFlagUtils");
      const guildPresetSettings = obj2.useGuildPresetSettings(guildId.guildId);
      const unread = guildPresetSettings.unread;
      const notification = guildPresetSettings.notification;
      if (cResult[0] === notification) {
        let tmp5;
        if (cResult[1] === unread) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === guildId.guildId) {
          let tmp8;
          if (cResult[4] === unread) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === notification) {
            if (cResult[7] === tmp5) {
              let tmp9;
              if (cResult[8] === tmp8) {
                tmp9 = cResult[9];
              }
              return tmp9;
            }
          }
          const tmp12 = jsx(unread(12523), {
            context: "guild",
            value: notification,
            allMessagesSubLabel: tmp5,
            onChange: tmp8,
          });
          cResult[6] = notification;
          cResult[7] = tmp5;
          cResult[8] = tmp8;
          cResult[9] = tmp12;
          tmp9 = tmp12;
        }
        const fn = function c(message_notifications) {
          const obj = { message_notifications };
          const tmp =
            message_notifications === UserNotificationSettings.ALL_MESSAGES && unread !== UnreadSetting.ALL_MESSAGES;
          if (tmp) {
            const obj2 = notificationSettingsFlagUtils;
            obj.flags = obj2.withGuildUnreadFlags(
              UserGuildSettingsStore.getGuildFlags(guildId.guildId),
              constants.UNREADS_ALL_MESSAGES,
            );
          }
          const updateGuildNotificationSettings =
            NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
          guildId = guildId.guildId;
          NotificationSettingsModalActionCreatorsDefault;
          const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
          const result = updateGuildNotificationSettings(
            guildId,
            obj,
            NotificationLabel.notifications(message_notifications),
          );
        };
        cResult[3] = guildId.guildId;
        cResult[4] = unread;
        cResult[5] = fn;
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
  : (guildId) => {
      _require = guildId;
      let tmp = _require;
      let obj = require("notificationSettingsGuildFlagUtils");
      const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
      const unread = guildPresetSettings.unread;
      const notification = guildPresetSettings.notification;
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
          context="guild"
          value={notification}
          allMessagesSubLabel={stringResult}
          onChange={function onChange(message_notifications) {
            const obj = { message_notifications };
            const tmp =
              message_notifications === UserNotificationSettings.ALL_MESSAGES && unread !== UnreadSetting.ALL_MESSAGES;
            if (tmp) {
              const obj2 = notificationSettingsFlagUtils;
              obj.flags = obj2.withGuildUnreadFlags(
                UserGuildSettingsStore.getGuildFlags(guildId.guildId),
                constants.UNREADS_ALL_MESSAGES,
              );
            }
            const updateGuildNotificationSettings =
              NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
            guildId = guildId.guildId;
            NotificationSettingsModalActionCreatorsDefault;
            const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
            const result = updateGuildNotificationSettings(
              guildId,
              obj,
              NotificationLabel.notifications(message_notifications),
            );
          }}
        />
      );
    };
let result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx",
);

export default tmp3;
