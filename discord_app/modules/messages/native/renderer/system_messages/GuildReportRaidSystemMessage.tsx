// === Module 8039: GuildReportRaidSystemMessage ===

// Module 8039 (GuildReportRaidSystemMessage)
import util from "util" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1399 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7953 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7962 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8032 */;
import getTagPropertiesDefault from "getTagProperties" /* 8033 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx");

export const createGuildReportRaidSystemMessage = function createGuildReportRaidSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  const channel = ChannelStore.getChannel(message.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const guild = GuildStore.getGuild(guild_id);
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp3 = resolveMessageContentColorsDefault(theme);
  let automodUsernameColor = GuildAlertModeSystemMessage.resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), guildName: null };
  let str;
  if (guild != null) {
    str = guild.name;
  }
  if (str == null) {
    str = "";
  }
  obj.guildName = str;
  obj = {};
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  const intl = util.intl;
  obj.content = intl.formatToParts(util.t["MTmH+u"], obj);
  const intl2 = util.intl;
  obj.username = intl2.string(util.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  const tmp8Result = AvatarUtils;
  const tmp11 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp3 });
  obj.avatarURL = tmp8Result.ensureAvatarSource(tmp8Result.makeSource(utils_AvatarUtils.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp11);
  return obj;
};