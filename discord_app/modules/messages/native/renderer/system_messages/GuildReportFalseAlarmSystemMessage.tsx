// discord_app/modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import utils_AvatarUtils from "../../../../../utils/native/AvatarUtils.tsx";
import resolveMessageContentColorsDefault from "../resolveMessageContentColors.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage.tsx";
import getTagPropertiesDefault from "../getTagProperties.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx",
);

export const createGuildReportFalseAlarmSystemMessage = function createGuildReportFalseAlarmSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  const channel = ChannelStore.getChannel(message.channel_id);
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp2 = resolveMessageContentColorsDefault(theme);
  let automodUsernameColor = GuildAlertModeSystemMessage.resolveAlertModeColors(theme).automodUsernameColor;
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({
      message,
      author: messageAuthorWithProcessedColor,
      roleStyle: roleStyle.roleStyle,
    }),
  };
  obj = {};
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  const intl = util.intl;
  obj.content = intl.formatToParts(util.t["21+uW4"], obj);
  const intl2 = util.intl;
  obj.username = intl2.string(util.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  tmp4(1399);
  const tmp4Result = tmp4(1396);
  const tmp7 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp2 });
  obj.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(utils_AvatarUtils.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp7);
  return obj;
};
