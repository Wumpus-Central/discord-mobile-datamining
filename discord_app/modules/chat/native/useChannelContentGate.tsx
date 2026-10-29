// === Module 10966: useChannelContentGate ===

// Module 10966 (useChannelContentGate)
import c from "c" /* 576 */;
import AgeGateUtils from "AgeGateUtils" /* 6721 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6740 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 9924 */;
import NsfwGateChatDefault from "NsfwGateChat" /* 10967 */;
import GuildNSFWDefault from "GuildNSFW" /* 10969 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 10971 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const constants = { IOS_GUILD_NSFW: "NsfwGateChat", CHANNEL_NSFW: "GuildNSFW", CHANNEL_SPOILER: "ChannelSpoiler" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/useChannelContentGate.tsx");

export const useChannelContentGate = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelContentGate(guildId, arg1) {
  id = arg1;
  const cResult = c.c(8);
  const isChannelContentGated = AgeGateUtils.useIsChannelContentGated(arg1);
  const getSpoilerGatingChannelId = SpoilerChannelUtils.useGetSpoilerGatingChannelId(arg1);
  if (null == guildId) {
    return null;
  } else {
    if (!tmpResult.shouldNSFWGateGuild(guildId)) {
      if (null != id) {
        if (!isChannelContentGated) {
          if (null != getSpoilerGatingChannelId) {
            if (cResult[4] === id.id) {
              if (cResult[5] === guildId) {
              }
            }
            const obj4 = { kind: constants.CHANNEL_SPOILER, guildId, channelId: id.id, spoilerGatingChannelId: getSpoilerGatingChannelId };
            cResult[4] = id.id;
            cResult[5] = guildId;
            cResult[6] = getSpoilerGatingChannelId;
            cResult[7] = obj4;
          }
        }
        if (cResult[1] === id.id) {
        }
        const obj5 = { kind: constants.CHANNEL_NSFW, guildId, channelId: null };
        ({ id: obj6.channelId, id } = id);
        cResult[1] = id;
        cResult[2] = guildId;
        cResult[3] = obj5;
      }
    }
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { kind: constants.IOS_GUILD_NSFW };
      cResult[0] = obj7;
      let first = obj7;
    } else {
      first = cResult[0];
    }
    tmpResult = age_gate_AgeGateUtils;
  }
}) : (function useChannelContentGate(guildId, arg1) {
  let id = arg1;
  const isChannelContentGated = AgeGateUtils.useIsChannelContentGated(arg1);
  const getSpoilerGatingChannelId = SpoilerChannelUtils.useGetSpoilerGatingChannelId(arg1);
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
});
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