// === Module 7953: nativeStyleProperties ===

// Module 7953 (nativeStyleProperties)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ensureAvatarSource from "ensureAvatarSource" /* 1433 */;
import resultDefault from "result" /* 7874 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7881 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7883 */;
import createCommonMessageDefault from "createCommonMessage" /* 7885 */;
import getTagPropertiesDefault from "getTagProperties" /* 7954 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
createCacheKey = { automodUsernameColor: ThemesDefault.colors.TEXT_BRAND };
createCacheKey = createCacheKey.createNativeStyleProperties(createCacheKey);
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx");

export const resolveAlertModeColors = createCacheKey;
export const createGuildAlertModeEnabledSystemMessage = function createGuildAlertModeEnabledSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let automodUsernameColor = createCacheKey(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), time: null };
  let str = "";
  if ("" !== message.content) {
    const _Date = Date;
    const date = new Date(message.content);
    str = date.toLocaleString(tmp5(1233).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  }
  obj[2] = str;
  const tmp3 = resultDefault(theme);
  obj = {};
  const merged = Object.assign(tmp(7885)(roleStyle));
  const intl = tmp5(1233).intl;
  obj.content = intl.formatToParts(getSystemLocale.t.ig55n6, obj);
  const intl2 = tmp5(1233).intl;
  obj.username = intl2.string(getSystemLocale.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp5Result = tmp5(1433);
  tmp5Result = tmp5(1430);
  const tmp12 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: resultDefault(theme) });
  obj.avatarURL = tmp5Result.ensureAvatarSource(tmp5Result.makeSource(ensureAvatarSource.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp12);
  return obj;
};
export const createGuildAlertModeDisabledSystemMessage = function createGuildAlertModeDisabledSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  let automodUsernameColor = createCacheKey(theme).automodUsernameColor;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj = { message, channel: "HermesInternal", isSystemDM: null, colors: "button" };
  obj[3] = resultDefault(theme);
  const tmp2 = resultDefault(theme);
  obj1 = {};
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  const intl = getSystemLocale.intl;
  obj1.content = intl.formatToParts(getSystemLocale.t.cyq2WA, obj);
  const intl2 = getSystemLocale.intl;
  obj1.username = intl2.string(getSystemLocale.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj1.usernameColor = automodUsernameColor;
  let tmp4Result = tmp4(1433);
  tmp4Result = tmp4(1430);
  const tmp6 = getTagPropertiesDefault(obj);
  obj1.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(ensureAvatarSource.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp6);
  return obj1;
};