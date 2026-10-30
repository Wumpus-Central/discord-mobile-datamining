// === Module 11196: useChannelContentGate ===

// Module 11196 (useChannelContentGate)
import AgeGateUtils from "AgeGateUtils" /* 6728 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6747 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 9951 */;
import NsfwGateChatDefault from "NsfwGateChat" /* 11197 */;
import GuildNSFWDefault from "GuildNSFW" /* 11199 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 11201 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const constants = { IOS_GUILD_NSFW: "NsfwGateChat", CHANNEL_NSFW: "GuildNSFW", CHANNEL_SPOILER: "ChannelSpoiler" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/useChannelContentGate.tsx");

export function useChannelContentGate(guildId, channel) {
  let id = channel;
  const isChannelContentGated = AgeGateUtils.useIsChannelContentGated(channel);
  const getSpoilerGatingChannelId = SpoilerChannelUtils.useGetSpoilerGatingChannelId(channel);
  if (null == guildId) {
    return null;
  } else {
    if (tmpResult.shouldNSFWGateGuild(guildId)) {
      const obj3 = { kind: constants.IOS_GUILD_NSFW };
    } else if (null != id) {
      if (isChannelContentGated) {
        const obj4 = { kind: constants.CHANNEL_NSFW, guildId, channelId: null };
        id = id.id;
        obj4.channelId = id;
      } else if (null != getSpoilerGatingChannelId) {
        const obj5 = { kind: constants.CHANNEL_SPOILER, guildId, channelId: id.id, spoilerGatingChannelId: getSpoilerGatingChannelId };
      }
    }
    tmpResult = age_gate_AgeGateUtils;
  }
}
export function renderChannelContentGate(channelContentGate) {
  const kind = channelContentGate.kind;
  if (constants.IOS_GUILD_NSFW === kind) {
    return jsx(NsfwGateChatDefault, {});
  } else if (constants.CHANNEL_NSFW === kind) {
    ({ guildId: obj2.guildId, channelId: obj2.channelId } = channelContentGate);
    return jsx(GuildNSFWDefault, { guildId: null, channelId: null });
  } else if (constants.CHANNEL_SPOILER === kind) {
    const obj = { guildId: null, channelId: null };
    ({ guildId: obj.guildId, spoilerGatingChannelId: obj.channelId } = channelContentGate);
    return jsx(ChannelSpoilerDefault, { guildId: null, channelId: null }, channelContentGate.channelId);
  }
}