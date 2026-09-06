// discord_app/modules/gateway/GatewaySocketOpCodes.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import GatewaySocketOpcode from "GatewaySocketOpcode.tsx";
import RTCRegionStore from "../../stores/RTCRegionStore.tsx";

require = fn;
const EventEmitter = fn(568).EventEmitter;
class GatewaySocketOpCodes extends EventEmitter {}
const prototype = GatewaySocketOpCodes.prototype;
prototype["presenceUpdate"] = function presenceUpdate(status, since, activities, afk) {
  this.send(GatewaySocketOpcode.Opcode.PRESENCE_UPDATE, { status, since, activities, afk });
};
prototype["voiceStateUpdate"] = function voiceStateUpdate(guildId) {
  guildId = guildId.guildId;
  if (guildId === undefined) {
    guildId = null;
  }
  let channelId = guildId.channelId;
  if (channelId === undefined) {
    channelId = null;
  }
  let flag = guildId.selfMute;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guildId.selfDeaf;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = guildId.selfVideo;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let preferredRegion = guildId.preferredRegion;
  if (preferredRegion === undefined) {
    preferredRegion = null;
  }
  let preferredRegions = guildId.preferredRegions;
  if (preferredRegions === undefined) {
    preferredRegions = null;
  }
  let prop = guildId.videoStreamParameters;
  if (prop === undefined) {
    prop = null;
  }
  let num = guildId.flags;
  if (num === undefined) {
    num = 0;
  }
  const obj = {
    guild_id: guildId,
    channel_id: channelId,
    self_mute: flag,
    self_deaf: flag2,
    self_video: flag3,
    flags: num,
  };
  let result = null != channelId;
  if (result) {
    result = RTCRegionStore.shouldIncludePreferredRegion();
  }
  if (result) {
    obj.preferred_region = preferredRegion;
    obj.preferred_regions = preferredRegions;
  }
  if (null != prop) {
    let mapped;
    if (prop != null) {
      mapped = prop.map((type) => ({ type: type.type, rid: type.rid, quality: type.quality }));
    }
    obj.tracks = mapped;
  }
  this.send(GatewaySocketOpcode.Opcode.VOICE_STATE_UPDATE, obj);
};
prototype["voiceServerPing"] = function voiceServerPing() {
  this.send(GatewaySocketOpcode.Opcode.VOICE_SERVER_PING, null);
};
prototype["requestGuildMembers"] = function requestGuildMembers(guildIds, arg1) {
  ({ query, limit, userIds, presences } = arg1);
  this.send(GatewaySocketOpcode.Opcode.REQUEST_GUILD_MEMBERS, {
    guild_id: guildIds,
    query,
    limit,
    user_ids: userIds,
    presences,
  });
};
prototype["searchRecentMembers"] = function searchRecentMembers(guild_id, arg1) {
  ({ query, continuationToken } = arg1);
  const obj = { guild_id, query: null, continuation_token: null };
  if (query == null) {
    query = "";
  }
  obj.query = query;
  if (continuationToken == null) {
    continuationToken = null;
  }
  obj.continuation_token = continuationToken;
  this.send(GatewaySocketOpcode.Opcode.SEARCH_RECENT_MEMBERS, obj);
};
prototype["updateGuildSubscriptions"] = function updateGuildSubscriptions(subscriptions) {
  const self = this;
  importDefault = subscriptions;
  dependencyMap = {};
  _require = 0;
  let obj = SnowflakeUtilsDefault;
  const keys = obj.keys(subscriptions);
  const item = keys.forEach((item) => {
    const items = [item, subscriptions[item]];
    const length = JSON.stringify(items).length;
    if (closure_0 + length > 15360) {
      const obj = { subscriptions: subscriptions2 };
      self.send(GatewaySocketOpcode.Opcode.GUILD_SUBSCRIPTIONS_BULK, obj);
      subscriptions2 = {};
      closure_0 = 0;
    }
    subscriptions2[item] = subscriptions[item];
    closure_0 = closure_0 + length;
  });
  if (_require > 0) {
    obj = { subscriptions: dependencyMap };
    self.send(require("GatewaySocketOpcode").Opcode.GUILD_SUBSCRIPTIONS_BULK, obj);
  }
};
prototype["callConnect"] = function callConnect(channel_id) {
  this.send(GatewaySocketOpcode.Opcode.CALL_CONNECT, { channel_id });
};
prototype["streamCreate"] = function streamCreate(streamType, guildId, channelId, region) {
  let tmp = region;
  if (region === undefined) {
    tmp = null;
  }
  this.send(GatewaySocketOpcode.Opcode.STREAM_CREATE, {
    type: streamType,
    guild_id: guildId,
    channel_id: channelId,
    preferred_region: tmp,
  });
};
prototype["streamWatch"] = function streamWatch(streamKey) {
  this.send(GatewaySocketOpcode.Opcode.STREAM_WATCH, { stream_key: streamKey });
};
prototype["streamPing"] = function streamPing(streamKey) {
  this.send(GatewaySocketOpcode.Opcode.STREAM_PING, { stream_key: streamKey });
};
prototype["streamDelete"] = function streamDelete(streamKey) {
  this.send(GatewaySocketOpcode.Opcode.STREAM_DELETE, { stream_key: streamKey });
};
prototype["streamSetPaused"] = function streamSetPaused(streamKey, paused) {
  this.send(GatewaySocketOpcode.Opcode.STREAM_SET_PAUSED, { stream_key: streamKey, paused });
};
prototype["requestForumUnreads"] = function requestForumUnreads(guildId, channelId, threads) {
  this.send(GatewaySocketOpcode.Opcode.REQUEST_FORUM_UNREADS, {
    guild_id: guildId,
    channel_id: channelId,
    threads: threads.map((threadId) => ({ thread_id: threadId.threadId, ack_message_id: threadId.ackMessageId })),
  });
};
prototype["requestSoundboardSounds"] = function requestSoundboardSounds(guildIds) {
  this.send(GatewaySocketOpcode.Opcode.REQUEST_SOUNDBOARD_SOUNDS, { guild_ids: guildIds });
};
prototype["requestLastMessages"] = function requestLastMessages(guild_id, nextWantsResult) {
  this.send(GatewaySocketOpcode.Opcode.REQUEST_LAST_MESSAGES, { guild_id, channel_ids: nextWantsResult });
};
prototype["getDeletedEntityIdsNotMatchingHash"] = function getDeletedEntityIdsNotMatchingHash(
  guild_id,
  channel_ids_hash,
  role_ids_hash,
  emoji_ids_hash,
  sticker_ids_hash,
) {
  this.send(GatewaySocketOpcode.Opcode.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH, {
    guild_id,
    channel_ids_hash,
    role_ids_hash,
    emoji_ids_hash,
    sticker_ids_hash,
  });
};
prototype["triggerGuildChannelResync"] = function triggerGuildChannelResync(id, items) {
  this.send(GatewaySocketOpcode.Opcode.GUILD_CHANNELS_RESYNC, { guild_id: id, obfuscated_channel_ids: items });
};
prototype["requestChannelInfo"] = function requestChannelInfo(guild_id, fields) {
  this.send(GatewaySocketOpcode.Opcode.REQUEST_CHANNEL_INFO, { guild_id, fields });
};
prototype["requestChannelMemberCount"] = function requestChannelMemberCount(guildId, channelId) {
  this.send(GatewaySocketOpcode.Opcode.REQUEST_CHANNEL_MEMBER_COUNT, { guild_id: guildId, channel_id: channelId });
};
prototype["remoteCommand"] = function remoteCommand(sessionId, payload) {
  this.send(GatewaySocketOpcode.Opcode.REMOTE_COMMAND, { target_session_id: sessionId, payload });
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/gateway/GatewaySocketOpCodes.tsx");

export default GatewaySocketOpCodes;
export const Opcode = fn(1906).Opcode;
