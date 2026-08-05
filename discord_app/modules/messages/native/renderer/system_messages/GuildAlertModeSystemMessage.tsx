// discord_app/modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { automodUsernameColor: require("Themes").colors.TEXT_BRAND };
createCacheKey = createCacheKey.createNativeStyleProperties(createCacheKey);
const result = require("Themes").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx");

export const resolveAlertModeColors = createCacheKey;
export const createGuildAlertModeEnabledSystemMessage = function createGuildAlertModeEnabledSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let obj = require("useAuthorWithProcessedColor.tsx") /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let automodUsernameColor = createCacheKey(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: require("formatUsernameOnClick.tsx")({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), time: null };
  let str = "";
  if ("" !== message.content) {
    const _Date = Date;
    const date = new Date(message.content);
    str = date.toLocaleString(tmp5(1236).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  }
  obj[2] = str;
  const tmp3 = require("../resolveMessageContentColors.tsx")(theme);
  obj = {};
  const merged = Object.assign(tmp(7882)(roleStyle));
  const intl = tmp5(1236).intl;
  obj.content = intl.formatToParts(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.ig55n6, obj);
  const intl2 = tmp5(1236).intl;
  obj.username = intl2.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp5Result = tmp5(1419);
  tmp5Result = tmp5(1416);
  const tmp12 = require("../getTagProperties.tsx")({ message, channel, isSystemDM: true, colors: require("../resolveMessageContentColors.tsx")(theme) });
  obj.avatarURL = tmp5Result.ensureAvatarSource(tmp5Result.makeSource(require("../../../../../utils/native/AvatarUtils.tsx") /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp12);
  return obj;
};
export const createGuildAlertModeDisabledSystemMessage = function createGuildAlertModeDisabledSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  let automodUsernameColor = createCacheKey(theme).automodUsernameColor;
  let obj = require("useAuthorWithProcessedColor.tsx") /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: require("formatUsernameOnClick.tsx")({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj = { message, channel: "HermesInternal", isSystemDM: null, colors: "md" };
  obj[3] = require("../resolveMessageContentColors.tsx")(theme);
  const tmp2 = require("../resolveMessageContentColors.tsx")(theme);
  const obj1 = {};
  const merged = Object.assign(require("createCommonMessage.tsx")(roleStyle));
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1.content = intl.formatToParts(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.cyq2WA, obj);
  const intl2 = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1.username = intl2.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj1.usernameColor = automodUsernameColor;
  let tmp4Result = tmp4(1419);
  tmp4Result = tmp4(1416);
  const tmp6 = require("../getTagProperties.tsx")(obj);
  obj1.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(require("../../../../../utils/native/AvatarUtils.tsx") /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp6);
  return obj1;
};