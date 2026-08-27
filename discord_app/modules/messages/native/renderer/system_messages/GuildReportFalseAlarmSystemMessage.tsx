// === Module 7881: createGuildReportFalseAlarmSystemMessage ===

// Module 7881 (createGuildReportFalseAlarmSystemMessage)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ensureAvatarSource from "ensureAvatarSource" /* 1438 */;
import resultDefault from "result" /* 7795 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7802 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7804 */;
import createCommonMessageDefault from "createCommonMessage" /* 7805 */;
import nativeStyleProperties from "nativeStyleProperties" /* 7873 */;
import getTagPropertiesDefault from "getTagProperties" /* 7874 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx");

export const createGuildReportFalseAlarmSystemMessage = function createGuildReportFalseAlarmSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp2 = resultDefault(theme);
  let automodUsernameColor = nativeStyleProperties.resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
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
  let tmp4Result = tmp4(1438);
  tmp4Result = tmp4(1435);
  const tmp7 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp2 });
  obj.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(ensureAvatarSource.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp7);
  return obj;
};