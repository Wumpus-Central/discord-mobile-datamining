// === Module 8032: GuildAlertModeSystemMessage ===

// Module 8032 (GuildAlertModeSystemMessage)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1399 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7953 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7962 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import getTagPropertiesDefault from "getTagProperties" /* 8033 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
fn(4560);
let createStyles = { automodUsernameColor: nativeDefault.colors.TEXT_BRAND };
createStyles = createStyles.createNativeStyleProperties(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx");

export const resolveAlertModeColors = createStyles;
export const createGuildAlertModeEnabledSystemMessage = function createGuildAlertModeEnabledSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  const channel = ChannelStore.getChannel(message.channel_id);
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let automodUsernameColor = createStyles(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), time: null };
  let str = "";
  if ("" !== message.content) {
    const _Date = Date;
    const date = new Date(message.content);
    str = date.toLocaleString(tmp5(1114).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  }
  obj.time = str;
  const tmp3 = resolveMessageContentColorsDefault(theme);
  obj = {};
  const merged = Object.assign(tmp(7964)(roleStyle));
  const intl = tmp5(1114).intl;
  obj.content = intl.formatToParts(util.t.ig55n6, obj);
  const intl2 = tmp5(1114).intl;
  obj.username = intl2.string(util.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  tmp5(1399);
  const tmp5Result = tmp5(1396);
  const tmp12 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: resolveMessageContentColorsDefault(theme) });
  obj.avatarURL = tmp5Result.ensureAvatarSource(tmp5Result.makeSource(utils_AvatarUtils.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp12);
  return obj;
};
export const createGuildAlertModeDisabledSystemMessage = function createGuildAlertModeDisabledSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  let automodUsernameColor = createStyles(theme).automodUsernameColor;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj = { message, channel: "HermesInternal", isSystemDM: null, colors: resolveMessageContentColorsDefault(theme) };
  const tmp2 = resolveMessageContentColorsDefault(theme);
  const obj1 = {};
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  const intl = util.intl;
  obj1.content = intl.formatToParts(util.t.cyq2WA, obj);
  const intl2 = util.intl;
  obj1.username = intl2.string(util.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj1.usernameColor = automodUsernameColor;
  tmp4(1399);
  const tmp4Result = tmp4(1396);
  const tmp6 = getTagPropertiesDefault(obj);
  obj1.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(utils_AvatarUtils.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp6);
  return obj1;
};