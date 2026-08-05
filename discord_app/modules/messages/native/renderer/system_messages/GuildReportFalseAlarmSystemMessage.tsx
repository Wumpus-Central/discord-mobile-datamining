// discord_app/modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx");

export const createGuildReportFalseAlarmSystemMessage = function createGuildReportFalseAlarmSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let obj = require("useAuthorWithProcessedColor.tsx") /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp2 = require("../resolveMessageContentColors.tsx")(theme);
  let automodUsernameColor = require("GuildAlertModeSystemMessage.tsx") /* nativeStyleProperties */.resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: require("formatUsernameOnClick.tsx")({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  const obj2 = require("GuildAlertModeSystemMessage.tsx") /* nativeStyleProperties */;
  obj = {};
  const merged = Object.assign(require("createCommonMessage.tsx")(roleStyle));
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj.content = intl.formatToParts(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t["21+uW4"], obj);
  const intl2 = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj.username = intl2.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp4Result = tmp4(1419);
  tmp4Result = tmp4(1416);
  const tmp7 = require("../getTagProperties.tsx")({ message, channel, isSystemDM: true, colors: tmp2 });
  obj.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(require("../../../../../utils/native/AvatarUtils.tsx") /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp7);
  return obj;
};