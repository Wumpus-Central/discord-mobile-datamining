// === Module 12355: findLoadedAppChannel ===

// Module 12355 (findLoadedAppChannel)
import ChannelStore from "ChannelStore" /* 5092 */;
import PermissionStore from "PermissionStore" /* 5175 */;

function isViewableAppChannel(channel, arg1) {
  let canResult = null != channel;
  if (canResult) {
    canResult = channel.type === constants.GUILD_APP;
  }
  if (canResult) {
    canResult = channel.application_id === arg1;
  }
  if (canResult) {
    canResult = PermissionStore.can(constants2.VIEW_CHANNEL, channel);
  }
  return canResult;
}
const Constants = fn(1072);
({ ChannelTypes: c2, Permissions: c3 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/findLoadedAppChannel.tsx");

export default function findLoadedAppChannel(guildId, arg1, arg2) {
  const channel = ChannelStore.getChannel(arg2);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (guild_id === guildId) {
    if (isViewableAppChannel(channel, arg1)) {
      const obj2 = { guildId, channelId: channel.id };
      return obj2;
    }
  }
  let tmp4 = null;
  const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(guildId));
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp7 = nextResult;
    let tmp9 = null == tmp4;
    if (!tmp9) {
      tmp9 = tmp7.position < tmp4.position;
    }
    if (tmp9) {
      tmp9 = isViewableAppChannel(tmp7, arg1);
    }
    if (tmp9) {
      tmp4 = nextResult;
    }
    continue;
  }
  let tmp14 = null;
  if (null != tmp4) {
    const obj3 = { guildId, channelId: tmp4.id };
    tmp14 = obj3;
  }
  return tmp14;
};