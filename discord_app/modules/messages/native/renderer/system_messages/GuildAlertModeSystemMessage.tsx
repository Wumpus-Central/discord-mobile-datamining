// === Module 7873: nativeStyleProperties ===

// Module 7873 (nativeStyleProperties)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ensureAvatarSource from "ensureAvatarSource" /* 1438 */;
import resultDefault from "result" /* 7795 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7802 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7804 */;
import createCommonMessageDefault from "createCommonMessage" /* 7805 */;
import getTagPropertiesDefault from "getTagProperties" /* 7874 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import createCacheKey from "createCacheKey" /* 4445 */;

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
    str = date.toLocaleString(tmp5(1236).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  }
  obj[2] = str;
  const tmp3 = resultDefault(theme);
  obj = {};
  const merged = Object.assign(tmp(7805)(roleStyle));
  const intl = tmp5(1236).intl;
  obj.content = intl.formatToParts(getSystemLocale.t.ig55n6, obj);
  const intl2 = tmp5(1236).intl;
  obj.username = intl2.string(getSystemLocale.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp5Result = tmp5(1438);
  tmp5Result = tmp5(1435);
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
  obj = { message, channel: "HermesInternal", isSystemDM: null, colors: "md" };
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
  let tmp4Result = tmp4(1438);
  tmp4Result = tmp4(1435);
  const tmp6 = getTagPropertiesDefault(obj);
  obj1.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(ensureAvatarSource.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp6);
  return obj1;
};