// discord_app/modules/app_database/modules/messages/isLimitedChannel.tsx
import Constants from "../../../../Constants.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildMemberCountStore from "../../../../stores/GuildMemberCountStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_database/modules/messages/isLimitedChannel.tsx");

export const LIMITED_GUILD_MEMBER_THRESHOLD = 10000;
export const isLimitedChannel = function isLimitedChannel(basicChannel) {
  let guild_id;
  const getMemberCount = GuildMemberCountStore.getMemberCount;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  let num = getMemberCount(guild_id);
  if (num == null) {
    num = 0;
  }
  return (
    null != basicChannel &&
    basicChannel.type !== ChannelTypes.DM &&
    basicChannel.type !== ChannelTypes.GROUP_DM &&
    num >= 10000
  );
};
export const isLimitedChannelId = function isLimitedChannelId(arg0) {
  let str = arg0;
  const getBasicChannel = ChannelStore.getBasicChannel;
  if (arg0 == null) {
    str = "_";
  }
  const basicChannel = getBasicChannel(str);
  let guild_id;
  const getMemberCount = GuildMemberCountStore.getMemberCount;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  let num = getMemberCount(guild_id);
  if (num == null) {
    num = 0;
  }
  return (
    null != basicChannel &&
    basicChannel.type !== ChannelTypes.DM &&
    basicChannel.type !== ChannelTypes.GROUP_DM &&
    num >= 10000
  );
};
