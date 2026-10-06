// === Module 13464: GatewaySocketOpCodes ===

// Module 13464 (GatewaySocketOpCodes)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _mod580 from "module_580" /* 580 */;
import GatewaySocketOpcode from "GatewaySocketOpcode" /* 1997 */;
import RTCRegionStore from "RTCRegionStore" /* 4946 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap, importDefault, subscriptions2;

const EventEmitter = _mod580.EventEmitter;
class GatewaySocketOpCodes extends EventEmitter {
  presenceUpdate(status, since, activities, afk) {
    const obj = { status, since, activities, afk };
    this.send(GatewaySocketOpcode.Opcode.PRESENCE_UPDATE, obj);
  }
  voiceStateUpdate(guildId) {
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
    const obj = { guild_id: guildId, channel_id: channelId, self_mute: flag, self_deaf: flag2, self_video: flag3, flags: num };
    const result = null != channelId && RTCRegionStore.shouldIncludePreferredRegion();
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
  }
  voiceServerPing() {
    this.send(GatewaySocketOpcode.Opcode.VOICE_SERVER_PING, null);
  }
  requestGuildMembers(guildIds, arg1) {
    let limit;
    let presences;
    let query;
    let userIds;
    ({ query, limit, userIds, presences } = arg1);
    const obj = { guild_id: guildIds, query, limit, user_ids: userIds, presences };
    this.send(GatewaySocketOpcode.Opcode.REQUEST_GUILD_MEMBERS, obj);
  }
  searchRecentMembers(guild_id, arg1) {
    let continuationToken;
    let query;
    ({ query, continuationToken } = arg1);
    const send = this.send;
    const obj = { guild_id, query, continuation_token: continuationToken };
    const SEARCH_RECENT_MEMBERS = GatewaySocketOpcode.Opcode.SEARCH_RECENT_MEMBERS;
    if (query == null) {
      query = "";
    }
    if (continuationToken == null) {
      continuationToken = null;
    }
    send(SEARCH_RECENT_MEMBERS, obj);
  }
  updateGuildSubscriptions(subscriptions) {
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
      const obj2 = { subscriptions: dependencyMap };
      self.send(require("GatewaySocketOpcode").Opcode.GUILD_SUBSCRIPTIONS_BULK, obj2);
    }
  }
  callConnect(channel_id) {
    const obj = { channel_id };
    this.send(GatewaySocketOpcode.Opcode.CALL_CONNECT, obj);
  }
  streamCreate(streamType, guildId, channelId) {
    let tmp = region;
    if (region === undefined) {
      tmp = null;
    }
    const obj = { type: streamType, guild_id: guildId, channel_id: channelId, preferred_region: tmp };
    this.send(GatewaySocketOpcode.Opcode.STREAM_CREATE, obj);
  }
  streamWatch(streamKey) {
    const obj = { stream_key: streamKey };
    this.send(GatewaySocketOpcode.Opcode.STREAM_WATCH, obj);
  }
  streamPing(streamKey) {
    const obj = { stream_key: streamKey };
    this.send(GatewaySocketOpcode.Opcode.STREAM_PING, obj);
  }
  streamDelete(streamKey) {
    const obj = { stream_key: streamKey };
    this.send(GatewaySocketOpcode.Opcode.STREAM_DELETE, obj);
  }
  streamSetPaused(streamKey, paused) {
    const obj = { stream_key: streamKey, paused };
    this.send(GatewaySocketOpcode.Opcode.STREAM_SET_PAUSED, obj);
  }
  requestForumUnreads(guildId, channelId, threads) {
    const send = this.send;
    const obj = { guild_id: guildId, channel_id: channelId, threads: threads.map((threadId) => ({ thread_id: threadId.threadId, ack_message_id: threadId.ackMessageId })) };
    const REQUEST_FORUM_UNREADS = GatewaySocketOpcode.Opcode.REQUEST_FORUM_UNREADS;
    send(REQUEST_FORUM_UNREADS, obj);
  }
  requestSoundboardSounds(guildIds) {
    const obj = { guild_ids: guildIds };
    this.send(GatewaySocketOpcode.Opcode.REQUEST_SOUNDBOARD_SOUNDS, obj);
  }
  requestLastMessages(guild_id, nextWantsResult) {
    const obj = { guild_id, channel_ids: nextWantsResult };
    this.send(GatewaySocketOpcode.Opcode.REQUEST_LAST_MESSAGES, obj);
  }
  getDeletedEntityIdsNotMatchingHash(guild_id, channel_ids_hash, role_ids_hash, emoji_ids_hash, sticker_ids_hash) {
    const obj = { guild_id, channel_ids_hash, role_ids_hash, emoji_ids_hash, sticker_ids_hash };
    this.send(GatewaySocketOpcode.Opcode.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH, obj);
  }
  triggerGuildChannelResync(id, items) {
    const obj = { guild_id: id, obfuscated_channel_ids: items };
    this.send(GatewaySocketOpcode.Opcode.GUILD_CHANNELS_RESYNC, obj);
  }
  requestChannelInfo(guild_id, fields) {
    const obj = { guild_id, fields };
    this.send(GatewaySocketOpcode.Opcode.REQUEST_CHANNEL_INFO, obj);
  }
  requestChannelMemberCount(guildId, channelId) {
    const obj = { guild_id: guildId, channel_id: channelId };
    this.send(GatewaySocketOpcode.Opcode.REQUEST_CHANNEL_MEMBER_COUNT, obj);
  }
  remoteCommand(sessionId, payload) {
    const obj = { target_session_id: sessionId, payload };
    this.send(GatewaySocketOpcode.Opcode.REMOTE_COMMAND, obj);
  }
}
const prototype = GatewaySocketOpCodes.prototype;
let result = size.fileFinishedImporting("modules/gateway/GatewaySocketOpCodes.tsx");

export default GatewaySocketOpCodes;
export const Opcode = GatewaySocketOpcode.Opcode;