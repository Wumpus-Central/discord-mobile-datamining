// === Module 8258: createGuildReportRaidSystemMessage ===

// Module 8258 (createGuildReportRaidSystemMessage)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAvatarURL from "getAvatarURL" /* 1435 */;
import ensureAvatarSource from "ensureAvatarSource" /* 1438 */;
import resultDefault from "result" /* 8178 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8185 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8187 */;
import createCommonMessageDefault from "createCommonMessage" /* 8188 */;
import nativeStyleProperties from "nativeStyleProperties" /* 8251 */;
import getTagPropertiesDefault from "getTagProperties" /* 8252 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx");

export const createGuildReportRaidSystemMessage = function createGuildReportRaidSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  guild = guild.getGuild(guild_id);
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp3 = resultDefault(theme);
  let automodUsernameColor = nativeStyleProperties.resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), guildName: null };
  let str;
  if (guild != null) {
    str = guild.name;
  }
  if (str == null) {
    str = "";
  }
  obj[2] = str;
  obj = {};
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  const intl = getSystemLocale.intl;
  obj.content = intl.formatToParts(getSystemLocale.t["MTmH+u"], obj);
  const intl2 = getSystemLocale.intl;
  obj.username = intl2.string(getSystemLocale.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  const tmp8Result = getAvatarURL;
  const tmp11 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp3 });
  obj.avatarURL = tmp8Result.ensureAvatarSource(tmp8Result.makeSource(ensureAvatarSource.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp11);
  return obj;
};