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
const createStyles = fn(4722);
const nativeStyleProperties = createStyles.createNativeStyleProperties({
  automodUsernameColor: nativeDefault.colors.TEXT_BRAND,
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx",
);

export const resolveAlertModeColors = nativeStyleProperties;
export const createGuildAlertModeEnabledSystemMessage = function createGuildAlertModeEnabledSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  const channel = ChannelStore.getChannel(message.channel_id);
  const tmp3 = resolveMessageContentColorsDefault(theme);
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  let automodUsernameColor = nativeStyleProperties(theme).automodUsernameColor;
  const obj2 = {
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
  obj2.time = str;
  const obj3 = {};
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  const intl = util.intl;
  obj3.content = intl.formatToParts(util.t.ig55n6, obj2);
  const intl2 = util.intl;
  obj3.username = intl2.string(util.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj3.usernameColor = automodUsernameColor;
  const tmp12 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp3 });
  const tmp5Result = utils_AvatarUtils;
  const tmp5Result3 = AvatarUtils;
  obj3.avatarURL = tmp5Result.ensureAvatarSource(tmp5Result3.makeSource(utils_AvatarUtils.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp12);
  return obj3;
};
export const createGuildAlertModeDisabledSystemMessage = function createGuildAlertModeDisabledSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  let automodUsernameColor = nativeStyleProperties(theme).automodUsernameColor;
  const tmp2 = resolveMessageContentColorsDefault(theme);
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj3 = { message, channel: "HermesInternal", isSystemDM: null, colors: tmp2 };
  const obj2 = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({
      message,
      author: messageAuthorWithProcessedColor,
      roleStyle: roleStyle.roleStyle,
    }),
  };
  const obj4 = {};
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  const intl = util.intl;
  obj4.content = intl.formatToParts(util.t.cyq2WA, obj2);
  const intl2 = util.intl;
  obj4.username = intl2.string(util.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj4.usernameColor = automodUsernameColor;
  const tmp6 = getTagPropertiesDefault(obj3);
  const tmp4Result = utils_AvatarUtils;
  const tmp4Result3 = AvatarUtils;
  obj4.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result3.makeSource(utils_AvatarUtils.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp6);
  return obj4;
};
