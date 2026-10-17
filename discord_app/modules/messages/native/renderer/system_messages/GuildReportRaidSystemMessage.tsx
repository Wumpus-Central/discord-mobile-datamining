// === Module 8338: GuildReportRaidSystemMessage ===

// Module 8338 (GuildReportRaidSystemMessage)
import util from "util" /* 1128 */;
import AvatarUtils from "AvatarUtils" /* 1417 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1420 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8239 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8246 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8248 */;
import createCommonMessageDefault from "createCommonMessage" /* 8250 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8331 */;
import getTagPropertiesDefault from "getTagProperties" /* 8332 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import GuildStore from "GuildStore" /* 2090 */;

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
  guild = GuildStore.getGuild(guild_id);
  const tmp3 = resolveMessageContentColorsDefault(theme);
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  let automodUsernameColor = GuildAlertModeSystemMessage.resolveAlertModeColors(theme).automodUsernameColor;
  const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), guildName: null };
  let str;
  if (guild != null) {
    str = guild.name;
  }
  if (str == null) {
    str = "";
  }
  obj3.guildName = str;
  const obj4 = {};
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  const intl = util.intl;
  obj4.content = intl.formatToParts(util.t["MTmH+u"], obj3);
  const intl2 = util.intl;
  obj4.username = intl2.string(util.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj4.usernameColor = automodUsernameColor;
  const tmp11 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp3 });
  const tmp8Result = utils_AvatarUtils;
  const tmp8Result3 = AvatarUtils;
  obj4.avatarURL = tmp8Result.ensureAvatarSource(tmp8Result3.makeSource(utils_AvatarUtils.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp11);
  return obj4;
};