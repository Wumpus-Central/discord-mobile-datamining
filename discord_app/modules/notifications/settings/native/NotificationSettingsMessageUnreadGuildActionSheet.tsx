// === Module 12527: NotificationSettingsMessageUnreadGuildActionSheet ===

// Module 12527 (NotificationSettingsMessageUnreadGuildActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6616 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6621 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 9865 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 12528 */;
import react from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guildId, tmp2, tmp4, tmp6, tmp7;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const constants = UserSettingsConstants.GuildNotificationSettingsFlags;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let notification;
  let tmp5;
  let unread;
  _require = guildId;
  let obj = require("react");
  const cResult = obj.c(8);
  const obj2 = require("notificationSettingsGuildFlagUtils");
  const guildPresetSettings = obj2.useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
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
  if (cResult[2] !== guildId.guildId) {
    class E {
      constructor(arg0) {
        guildFlags = closure_3.getGuildFlags(closure_0.guildId);
        tmp2 = closure_2;
        tmp3 = closure_1(closure_2[10]);
        updateGuildNotificationSettings = tmp3.updateGuildNotificationSettings;
        guildId = closure_0.guildId;
        tmp4 = closure_0;
        tmp5 = closure_0(closure_2[11]);
        withGuildUnreadFlags = tmp5.withGuildUnreadFlags;
        if (guildId === UnreadSetting.ALL_MESSAGES) {
          tmp7 = closure_6;
          UNREADS_ONLY_MENTIONS = closure_6.UNREADS_ALL_MESSAGES;
        } else {
          tmp6 = closure_6;
          UNREADS_ONLY_MENTIONS = closure_6.UNREADS_ONLY_MENTIONS;
        }
        obj = { flags: withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
        NotificationLabel = tmp4(tmp2[12]).NotificationLabel;
        result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.unreads(guildId));
        return;
      }
    }
    cResult[2] = guildId.guildId;
    cResult[3] = E;
  } else {
    class E {
      constructor(arg0) {
        guildFlags = closure_3.getGuildFlags(closure_0.guildId);
        tmp2 = closure_2;
        tmp3 = closure_1(closure_2[10]);
        updateGuildNotificationSettings = tmp3.updateGuildNotificationSettings;
        guildId = closure_0.guildId;
        tmp4 = closure_0;
        tmp5 = closure_0(closure_2[11]);
        withGuildUnreadFlags = tmp5.withGuildUnreadFlags;
        if (guildId === UnreadSetting.ALL_MESSAGES) {
          tmp7 = closure_6;
          UNREADS_ONLY_MENTIONS = closure_6.UNREADS_ALL_MESSAGES;
        } else {
          tmp6 = closure_6;
          UNREADS_ONLY_MENTIONS = closure_6.UNREADS_ONLY_MENTIONS;
        }
        obj = { flags: withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
        NotificationLabel = tmp4(tmp2[12]).NotificationLabel;
        result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.unreads(guildId));
        return;
      }
    }
  }
  if (cResult[4] === tmp5) {
    class E {
      constructor(arg0) {
        guildFlags = closure_3.getGuildFlags(closure_0.guildId);
        tmp2 = closure_2;
        tmp3 = closure_1(closure_2[10]);
        updateGuildNotificationSettings = tmp3.updateGuildNotificationSettings;
        guildId = closure_0.guildId;
        tmp4 = closure_0;
        tmp5 = closure_0(closure_2[11]);
        withGuildUnreadFlags = tmp5.withGuildUnreadFlags;
        if (guildId === UnreadSetting.ALL_MESSAGES) {
          tmp7 = closure_6;
          UNREADS_ONLY_MENTIONS = closure_6.UNREADS_ALL_MESSAGES;
        } else {
          tmp6 = closure_6;
          UNREADS_ONLY_MENTIONS = closure_6.UNREADS_ONLY_MENTIONS;
        }
        obj = { flags: withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
        NotificationLabel = tmp4(tmp2[12]).NotificationLabel;
        result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.unreads(guildId));
        return;
      }
    }
  }
  cResult[4] = tmp5;
  cResult[5] = E;
  cResult[6] = unread;
  cResult[7] = jsx(NotificationSettingsMessageUnreadActionSheetDefault, { disabledMentionOnlyWithReason: tmp5, value: unread, onChange: E });
  jsx(NotificationSettingsMessageUnreadActionSheetDefault, { disabledMentionOnlyWithReason: tmp5, value: unread, onChange: E });
}) : ((guildId) => {
  let notification;
  let unread;
  _require = guildId;
  let obj = require("notificationSettingsGuildFlagUtils");
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t.eP8yWU);
  }
  return <tmp5 disabledMentionOnlyWithReason={stringResult} value={unread} onChange={function onChange(toggleExpandedHistory) {
    let UNREADS_ONLY_MENTIONS;
    const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId.guildId);
    const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
    guildId = guildId.guildId;
    NotificationSettingsModalActionCreatorsDefault;
    const withGuildUnreadFlags = notificationSettingsFlagUtils.withGuildUnreadFlags;
    notificationSettingsFlagUtils;
    if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
      UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
    }
    const obj = { flags: withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.unreads(toggleExpandedHistory));
  }} />;
});
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default tmp3;