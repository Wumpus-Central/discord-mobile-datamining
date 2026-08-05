import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { ensureAvatarSource } from "../../../../../utils/native/AvatarUtils.tsx";
import { getTagProperties } from "../getTagProperties.tsx";
import { result } from "../resolveMessageContentColors.tsx";
import { createCommonMessage } from "createCommonMessage.tsx";
import { formatUsernameOnClick } from "formatUsernameOnClick.tsx";
import { nativeStyleProperties } from "GuildAlertModeSystemMessage.tsx";
import { getMessageAuthorWithProcessedColor } from "useAuthorWithProcessedColor.tsx";
// discord_app/modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx");

export const createGuildReportFalseAlarmSystemMessage = function createGuildReportFalseAlarmSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let obj = getMessageAuthorWithProcessedColor /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp2 = result(theme);
  let automodUsernameColor = nativeStyleProperties /* nativeStyleProperties */.resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClick({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  const obj2 = nativeStyleProperties /* nativeStyleProperties */;
  obj = {};
  const merged = Object.assign(createCommonMessage(roleStyle));
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj.content = intl.formatToParts(getSystemLocale /* getSystemLocale */.t["21+uW4"], obj);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj.username = intl2.string(getSystemLocale /* getSystemLocale */.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp4Result = tmp4(1419);
  tmp4Result = tmp4(1416);
  const tmp7 = getTagProperties({ message, channel, isSystemDM: true, colors: tmp2 });
  obj.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(ensureAvatarSource /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp7);
  return obj;
};