// discord_app/modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import ensureAvatarSource from "../../../../../utils/native/AvatarUtils.tsx";
import resultDefault from "../resolveMessageContentColors.tsx";
import getMessageAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import nativeStyleProperties from "GuildAlertModeSystemMessage.tsx";
import getTagPropertiesDefault from "../getTagProperties.tsx";
import closure_3 from "../../../../../stores/ChannelStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx",
);

export const createGuildReportFalseAlarmSystemMessage = function createGuildReportFalseAlarmSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp2 = resultDefault(theme);
  let automodUsernameColor = nativeStyleProperties.resolveAlertModeColors(theme).automodUsernameColor;
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({
      message,
      author: messageAuthorWithProcessedColor,
      roleStyle: roleStyle.roleStyle,
    }),
  };
  const obj2 = nativeStyleProperties;
  obj = {};
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  const intl = getSystemLocale.intl;
  obj.content = intl.formatToParts(getSystemLocale.t["21+uW4"], obj);
  const intl2 = getSystemLocale.intl;
  obj.username = intl2.string(getSystemLocale.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp4Result = tmp4(1433);
  tmp4Result = tmp4(1430);
  const tmp7 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp2 });
  obj.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(ensureAvatarSource.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp7);
  return obj;
};
