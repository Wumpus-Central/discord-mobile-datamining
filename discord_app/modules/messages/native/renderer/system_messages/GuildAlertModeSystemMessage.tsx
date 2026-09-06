// discord_app/modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import AvatarUtils from "../../../../../utils/AvatarUtils.tsx";
import utils_AvatarUtils from "../../../../../utils/native/AvatarUtils.tsx";
import resolveMessageContentColorsDefault from "../resolveMessageContentColors.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import getTagPropertiesDefault from "../getTagProperties.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
fn(4560);
let createStyles = { automodUsernameColor: nativeDefault.colors.TEXT_BRAND };
createStyles = createStyles.createNativeStyleProperties(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx",
);

export const resolveAlertModeColors = createStyles;
export const createGuildAlertModeEnabledSystemMessage = function createGuildAlertModeEnabledSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  const channel = ChannelStore.getChannel(message.channel_id);
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let automodUsernameColor = createStyles(theme).automodUsernameColor;
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({
      message,
      author: messageAuthorWithProcessedColor,
      roleStyle: roleStyle.roleStyle,
    }),
    time: null,
  };
  let str = "";
  if ("" !== message.content) {
    const _Date = Date;
    const date = new Date(message.content);
    str = date.toLocaleString(util.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  }
  obj.time = str;
  const tmp3 = resolveMessageContentColorsDefault(theme);
  obj = {};
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  const intl = util.intl;
  obj.content = intl.formatToParts(util.t.ig55n6, obj);
  const intl2 = util.intl;
  obj.username = intl2.string(util.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  const tmp5Result = AvatarUtils;
  const tmp12 = getTagPropertiesDefault({
    message,
    channel,
    isSystemDM: true,
    colors: resolveMessageContentColorsDefault(theme),
  });
  obj.avatarURL = tmp5Result.ensureAvatarSource(tmp5Result.makeSource(utils_AvatarUtils.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp12);
  return obj;
};
export const createGuildAlertModeDisabledSystemMessage = function createGuildAlertModeDisabledSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  let automodUsernameColor = createStyles(theme).automodUsernameColor;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({
      message,
      author: messageAuthorWithProcessedColor,
      roleStyle: roleStyle.roleStyle,
    }),
  };
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
  const tmp4Result = AvatarUtils;
  const tmp6 = getTagPropertiesDefault(obj);
  obj1.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(utils_AvatarUtils.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp6);
  return obj1;
};
