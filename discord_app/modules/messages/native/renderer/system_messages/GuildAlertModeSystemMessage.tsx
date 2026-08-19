// === Module 8251: nativeStyleProperties ===

// Module 8251 (nativeStyleProperties)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAvatarURL from "getAvatarURL" /* 1435 */;
import ensureAvatarSource from "ensureAvatarSource" /* 1438 */;
import resultDefault from "result" /* 8178 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8185 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8187 */;
import createCommonMessageDefault from "createCommonMessage" /* 8188 */;
import getTagPropertiesDefault from "getTagProperties" /* 8252 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import "createCacheKey";

require = fn;
let createCacheKey = { automodUsernameColor: ThemesDefault.colors.TEXT_BRAND };
createCacheKey = createCacheKey.createNativeStyleProperties(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx");

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
    str = date.toLocaleString(getSystemLocale.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  }
  obj[2] = str;
  const tmp3 = resultDefault(theme);
  obj = {};
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  const intl = getSystemLocale.intl;
  obj.content = intl.formatToParts(getSystemLocale.t.ig55n6, obj);
  const intl2 = getSystemLocale.intl;
  obj.username = intl2.string(getSystemLocale.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  const tmp5Result = getAvatarURL;
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
  { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj = { message, channel: "HermesInternal", isSystemDM: null, colors: "header" };
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
  const tmp4Result = getAvatarURL;
  const tmp6 = getTagPropertiesDefault(obj);
  obj1.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(ensureAvatarSource.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp6);
  return obj1;
};