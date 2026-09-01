// discord_app/modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import ensureAvatarSource from "../../../../../utils/native/AvatarUtils.tsx";
import resultDefault from "../resolveMessageContentColors.tsx";
import getMessageAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import nativeStyleProperties from "GuildAlertModeSystemMessage.tsx";
import getTagPropertiesDefault from "../getTagProperties.tsx";
import closure_3 from "../../../../../stores/ChannelStore.tsx";
import closure_4 from "../../../../../stores/GuildStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx",
);

export const createGuildReportRaidSystemMessage = function createGuildReportRaidSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  guild = guild.getGuild(guild_id);
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp3 = resultDefault(theme);
  let automodUsernameColor = nativeStyleProperties.resolveAlertModeColors(theme).automodUsernameColor;
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: tmp(7871)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }),
    guildName: null,
  };
  let str;
  if (guild != null) {
    str = guild.name;
  }
  if (str == null) {
    str = "";
  }
  obj[2] = str;
  const obj2 = nativeStyleProperties;
  obj = {};
  const merged = Object.assign(tmp(7873)(roleStyle));
  const intl = tmp8(1236).intl;
  obj.content = intl.formatToParts(getSystemLocale.t["MTmH+u"], obj);
  const intl2 = tmp8(1236).intl;
  obj.username = intl2.string(getSystemLocale.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp8Result = tmp8(1434);
  tmp8Result = tmp8(1431);
  const tmp11 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp3 });
  obj.avatarURL = tmp8Result.ensureAvatarSource(tmp8Result.makeSource(ensureAvatarSource.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp11);
  return obj;
};
