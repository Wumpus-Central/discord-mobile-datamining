// === Module 13937: ReadyPayloadUtils ===

// Module 13937 (ReadyPayloadUtils)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import ChannelRecord from "ChannelRecord" /* 2045 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 2070 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2087 */;
import ChannelReaderDefault from "ChannelReader" /* 2091 */;
import isCacheEnabled from "isCacheEnabled" /* 7883 */;
import GuildVersionsDefault from "GuildVersions" /* 7887 */;
import KvCacheVersionDefault from "KvCacheVersion" /* 7888 */;
import size from "module_2" /* 2 */;

function hydrateGuild(guild) {
  if ("partial" !== guild.data_mode) {
    const obj2 = { id: null, dataMode: null, emojis: null, guild_scheduled_events: null, experiments: null, joined_at: null, lastMessages: null, member_count: null, members: null, premium_subscription_count: null, properties: null, roles: null, stage_instances: null, stickers: null, threads: null, threadMessages: null, channels: null, version: null, hasThreadsSubscription: null };
    ({ id: obj5.id, data_mode: obj5.dataMode } = guild);
    const obj3 = { op: "full_sync", items: guild.emojis };
    obj2.emojis = obj3;
    ({ guild_scheduled_events: obj5.guild_scheduled_events, experiments: obj5.experiments, joined_at: obj5.joined_at, last_messages: obj5.lastMessages, member_count: obj5.member_count, members: obj5.members, premium_subscription_count: obj5.premium_subscription_count, properties: obj5.properties } = guild);
    const obj4 = { op: "full_sync", items: guild.roles };
    obj2.roles = obj4;
    obj2.stage_instances = guild.stage_instances;
    const obj6 = { op: "full_sync", items: guild.stickers };
    obj2.stickers = obj6;
    const threads1 = guild.threads;
    let mapped;
    if (threads1 != null) {
      mapped = threads1.map((item) => closure_3(item, guild.id));
    }
    if (mapped == null) {
      mapped = [];
    }
    obj2.threads = mapped;
    obj2.threadMessages = collectThreadMessages(guild.threads);
    const obj7 = { op: "full_sync", items: null };
    channels = guild.channels;
    obj7.items = channels.map((item) => {
      item.guild_id = guild.id;
      return closure_3(item, guild.id);
    });
    obj2.channels = obj7;
    ({ version: obj5.version, has_threads_subscription: obj5.hasThreadsSubscription } = guild);
    let obj8 = obj2;
  } else {
    obj8 = { id: null, dataMode: null, channels: null, channelTimestampUpdates: null, emojis: null, guild_scheduled_events: null, experiments: null, joined_at: null, lastMessages: null, member_count: null, members: null, premium_subscription_count: null, properties: null, roles: null, stage_instances: null, stickers: null, unableToSyncDeletes: null, threads: null, threadMessages: null, version: null, hasThreadsSubscription: null };
    ({ id: obj10.id, data_mode: obj10.dataMode } = guild);
    const channels1 = guild.partial_updates.channels;
    let mapped1;
    if (channels1 != null) {
      mapped1 = channels1.map((item) => closure_3(item, guild.id));
    }
    if (mapped1 == null) {
      mapped1 = [];
    }
    channels = { op: "update", writes: mapped1, deletes: null };
    let deleted_channel_ids = guild.partial_updates.deleted_channel_ids;
    if (deleted_channel_ids == null) {
      deleted_channel_ids = [];
    }
    channels.deletes = deleted_channel_ids;
    obj8.channels = channels;
    obj8.channelTimestampUpdates = guild.channel_updates;
    let emojis = guild.partial_updates.emojis;
    if (emojis == null) {
      emojis = [];
    }
    const obj9 = { op: "update", writes: emojis, deletes: null };
    let deleted_emoji_ids = guild.partial_updates.deleted_emoji_ids;
    if (deleted_emoji_ids == null) {
      deleted_emoji_ids = [];
    }
    obj9.deletes = deleted_emoji_ids;
    obj8.emojis = obj9;
    ({ guild_scheduled_events: obj10.guild_scheduled_events, experiments: obj10.experiments, joined_at: obj10.joined_at, last_messages: obj10.lastMessages, member_count: obj10.member_count, members: obj10.members, premium_subscription_count: obj10.premium_subscription_count, properties } = guild);
    if (properties == null) {
      properties = null;
    }
    obj8.properties = properties;
    let roles = guild.partial_updates.roles;
    if (roles == null) {
      roles = [];
    }
    const obj19 = { op: "update", writes: roles, deletes: null };
    let deleted_role_ids = guild.partial_updates.deleted_role_ids;
    if (deleted_role_ids == null) {
      deleted_role_ids = [];
    }
    obj19.deletes = deleted_role_ids;
    obj8.roles = obj19;
    obj8.stage_instances = guild.stage_instances;
    let stickers = guild.partial_updates.stickers;
    if (stickers == null) {
      stickers = [];
    }
    const obj20 = { op: "update", writes: stickers, deletes: null };
    let deleted_sticker_ids = guild.partial_updates.deleted_sticker_ids;
    if (deleted_sticker_ids == null) {
      deleted_sticker_ids = [];
    }
    obj20.deletes = deleted_sticker_ids;
    obj8.stickers = obj20;
    ({ unable_to_sync_deletes: obj10.unableToSyncDeletes, threads } = guild);
    let mapped2;
    if (threads != null) {
      mapped2 = threads.map((item) => closure_3(item, guild.id));
    }
    if (mapped2 == null) {
      mapped2 = [];
    }
    obj8.threads = mapped2;
    obj8.threadMessages = collectThreadMessages(guild.threads);
    ({ version: obj10.version, has_threads_subscription: obj10.hasThreadsSubscription } = guild);
  }
  return obj8;
}
function hydratePreviouslyUnavailableGuild(data_mode) {
  if ("partial" !== data_mode.data_mode) {
    const obj2 = { id: null, guild_scheduled_events: null, experiments: null, joined_at: null, lastMessages: null, member_count: null, members: null, premium_subscription_count: null, properties: null, roles: null, stage_instances: null, threads: null, threadMessages: null, presences: null, activity_instances: null, voice_states: null, version: null, hasThreadsSubscription: null, emojis: null, stickers: null, channels: null };
    ({ id: obj5.id, guild_scheduled_events: obj5.guild_scheduled_events, experiments: obj5.experiments, joined_at: obj5.joined_at, last_messages: obj5.lastMessages, member_count: obj5.member_count, members: obj5.members, premium_subscription_count: obj5.premium_subscription_count, properties: obj5.properties } = data_mode);
    const obj3 = { op: "full_sync", items: data_mode.roles };
    obj2.roles = obj3;
    ({ stage_instances: obj5.stage_instances, threads: threads2 } = data_mode);
    let mapped;
    if (threads2 != null) {
      mapped = threads2.map((item) => closure_3(item, data_mode.id));
    }
    if (mapped == null) {
      mapped = [];
    }
    obj2.threads = mapped;
    obj2.threadMessages = collectThreadMessages(data_mode.threads);
    ({ presences: obj5.presences, activity_instances: obj5.activity_instances, voice_states: obj5.voice_states, version: obj5.version, has_threads_subscription: obj5.hasThreadsSubscription } = data_mode);
    const obj4 = { op: "full_sync", items: data_mode.emojis };
    obj2.emojis = obj4;
    const obj6 = { op: "full_sync", items: data_mode.stickers };
    obj2.stickers = obj6;
    const obj7 = { op: "full_sync", items: null };
    channels = data_mode.channels;
    obj7.items = channels.map((item) => {
      item.guild_id = data_mode.id;
      return closure_3(item, data_mode.id);
    });
    obj2.channels = obj7;
    let obj8 = obj2;
  } else {
    obj8 = { id: data_mode.id, channels: null, channelTimestampUpdates: null, activity_instances: null, emojis: null, guild_scheduled_events: null, experiments: null, joined_at: null, lastMessages: null, member_count: null, members: null, premium_subscription_count: null, presences: null, properties: null, roles: null, stage_instances: null, stickers: null, unableToSyncDeletes: null, threads: null, threadMessages: null, voice_states: null, version: null, hasThreadsSubscription: null };
    const channels1 = data_mode.partial_updates.channels;
    let mapped1;
    if (channels1 != null) {
      mapped1 = channels1.map((item) => closure_3(item, data_mode.id));
    }
    if (mapped1 == null) {
      mapped1 = [];
    }
    channels = { op: "update", writes: mapped1, deletes: null };
    let deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
    if (deleted_channel_ids == null) {
      deleted_channel_ids = [];
    }
    channels.deletes = deleted_channel_ids;
    obj8.channels = channels;
    ({ channel_updates: obj10.channelTimestampUpdates, activity_instances: obj10.activity_instances } = data_mode);
    let emojis = data_mode.partial_updates.emojis;
    if (emojis == null) {
      emojis = [];
    }
    const obj9 = { op: "update", writes: emojis, deletes: null };
    let deleted_emoji_ids = data_mode.partial_updates.deleted_emoji_ids;
    if (deleted_emoji_ids == null) {
      deleted_emoji_ids = [];
    }
    obj9.deletes = deleted_emoji_ids;
    obj8.emojis = obj9;
    ({ guild_scheduled_events: obj10.guild_scheduled_events, experiments: obj10.experiments, joined_at: obj10.joined_at, last_messages: obj10.lastMessages, member_count: obj10.member_count, members: obj10.members, premium_subscription_count: obj10.premium_subscription_count, presences: obj10.presences, properties } = data_mode);
    if (properties == null) {
      properties = null;
    }
    obj8.properties = properties;
    let roles = data_mode.partial_updates.roles;
    if (roles == null) {
      roles = [];
    }
    const obj19 = { op: "update", writes: roles, deletes: null };
    let deleted_role_ids = data_mode.partial_updates.deleted_role_ids;
    if (deleted_role_ids == null) {
      deleted_role_ids = [];
    }
    obj19.deletes = deleted_role_ids;
    obj8.roles = obj19;
    obj8.stage_instances = data_mode.stage_instances;
    let stickers = data_mode.partial_updates.stickers;
    if (stickers == null) {
      stickers = [];
    }
    const obj20 = { op: "update", writes: stickers, deletes: null };
    let deleted_sticker_ids = data_mode.partial_updates.deleted_sticker_ids;
    if (deleted_sticker_ids == null) {
      deleted_sticker_ids = [];
    }
    obj20.deletes = deleted_sticker_ids;
    obj8.stickers = obj20;
    ({ unable_to_sync_deletes: obj10.unableToSyncDeletes, threads } = data_mode);
    let mapped2;
    if (threads != null) {
      mapped2 = threads.map((item) => closure_3(item, data_mode.id));
    }
    if (mapped2 == null) {
      mapped2 = [];
    }
    obj8.threads = mapped2;
    obj8.threadMessages = collectThreadMessages(data_mode.threads);
    ({ voice_states: obj10.voice_states, version: obj10.version, has_threads_subscription: obj10.hasThreadsSubscription } = data_mode);
  }
  return obj8;
}
function collectThreadMessages(threads) {
  const items = [];
  if (null != threads) {
    const iter = threads[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.most_recent_message) {
        let arr = items.push(tmp5.most_recent_message);
      }
      continue;
    }
  }
  return items;
}
let closure_3 = ChannelRecord.createChannelRecordFromServer;
let channels = null;
let closure_5 = {};
let result = size.fileFinishedImporting("utils/ReadyPayloadUtils.tsx");

export const hydrateReadySupplementalPayload = function hydrateReadySupplementalPayload(arg0, identifyStartTime) {
  ({ guilds, merged_members: require, merged_presences } = arg0);
  let merged = Object.assign(arg0, Object.assign({ guilds: 0, merged_members: 0, merged_presences: 0 }));
  let friends;
  if (merged_presences != null) {
    friends = merged_presences.friends;
  }
  closure_129_0 = closure_5;
  let items = [];
  closure_129_1 = items;
  if (friends != null) {
    let item = friends.forEach((user_id) => {
      if (null != user_id) {
        user_id = user_id.user_id;
        if (null != user_id) {
          const _HermesInternal = HermesInternal;
          _modDef38(null != dependencyMap[user_id], "Missing user[" + user_id + "] in compressed ready payload");
          user_id.user = dependencyMap[user_id];
          const tmp7 = null != dependencyMap[user_id];
        }
        delete tmp2[tmp];
        items.push(user_id);
      }
    });
  }
  let mapped;
  if (guilds != null) {
    mapped = guilds.map((voice_states, index) => {
      let tmp2;
      if (merged_presences != null) {
        tmp2 = merged_presences.guilds[index];
      }
      closure_0 = closure_5;
      const items = [];
      let items1 = items;
      if (tmp2 != null) {
        const item = tmp2.forEach((user_id) => {
          if (null != user_id) {
            user_id = user_id.user_id;
            if (null != user_id) {
              const _HermesInternal = HermesInternal;
              _modDef38(null != dependencyMap[user_id], "Missing user[" + user_id + "] in compressed ready payload");
              user_id.user = dependencyMap[user_id];
              const tmp7 = null != dependencyMap[user_id];
            }
            delete tmp2[tmp];
            items.push(user_id);
          }
        });
      }
      let tmp5;
      if (require != null) {
        tmp5 = require[index];
      }
      closure_0 = closure_5;
      items1 = [];
      if (tmp5 != null) {
        const item1 = tmp5.forEach((user_id) => {
          if (null != user_id) {
            user_id = user_id.user_id;
            if (null != user_id) {
              const _HermesInternal = HermesInternal;
              _modDef38(null != dependencyMap[user_id], "Missing user[" + user_id + "] in compressed ready payload");
              user_id.user = dependencyMap[user_id];
              const tmp7 = null != dependencyMap[user_id];
            }
            delete tmp2[tmp];
            items.push(user_id);
          }
        });
      }
      const obj = {};
      const merged = Object.assign(voice_states);
      obj.unavailable = undefined === voice_states.voice_states;
      obj.presences = items;
      obj.members = items1;
      return obj;
    });
  }
  if (mapped == null) {
    mapped = [];
  }
  let tmp5 = null;
  if (null != obj) {
    tmp5 = null;
    if (obj.identifyTime === identifyStartTime) {
      if (null == guilds) {
        obj = { id: null, members: null, presences: null, activity_instances: null, voice_states: null, unavailable: false };
        ({ id: obj.id, members: obj.members, presences: obj.presences, activity_instances: obj.activity_instances, voice_states: obj.voice_states } = obj.guild);
        tmp5 = obj;
      } else {
        tmp5 = null;
      }
    }
  }
  if (null != tmp5) {
    mapped.push(tmp5);
  }
  closure_5 = {};
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.presences = items;
  obj2.guilds = mapped;
  return obj2;
};
export const preloadReadyPayloadData = function preloadReadyPayloadData() {
  const databaseResult = DatabaseDaosDefault.database();
  if (obj2.isCacheEnabled()) {
    let committedVersions = GuildVersionsDefault.getCommittedVersions();
    const tmpResult = GuildVersionsDefault;
  } else {
    committedVersions = Promise.resolve({});
  }
  obj2 = isCacheEnabled;
  if (tmp4Result.isCacheEnabled()) {
    let guildIds = ChannelReaderDefault.getGuildIds();
    const tmpResult3 = ChannelReaderDefault;
  } else {
    const _Set = Set;
    const set = new Set();
    guildIds = Promise.resolve(set);
  }
  if (null != databaseResult) {
    let okAsyncResult = KvCacheVersionDefault.okAsync(databaseResult);
    const tmpResult4 = KvCacheVersionDefault;
  } else {
    okAsyncResult = Promise.resolve(false);
  }
  const items = [committedVersions, guildIds, okAsyncResult];
  tmp4Result = isCacheEnabled;
  return Promise.all(items).then((result) => {
    [tmp, tmp2, tmp3] = result;
    return { guildVersions, guildChannels, databaseOk };
  });
};
export const hydrateReadyPayloadPrioritized = function hydrateReadyPayloadPrioritized(arg0, identifyStartTime, databaseOk) {
  ({ users, private_channels, merged_members: require, guilds } = arg0);
  const merged = Object.assign(arg0, Object.assign({ users: 0, private_channels: 0, merged_members: 0, guilds: 0 }));
  const obj = DatabaseDaosDefault;
  let tmp4 = null != obj.database();
  if (tmp4) {
    tmp4 = false === databaseOk.databaseOk;
  }
  if (tmp4) {
    const result = DatabaseManagerDefault.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok");
    const tmp2Result = DatabaseManagerDefault;
  }
  closure_5 = _modDef12.keyBy(users, (id) => id.id);
  if (private_channels != null) {
    let item = private_channels.forEach((recipient_ids) => {
      recipient_ids = recipient_ids.recipient_ids;
      if (null != recipient_ids) {
        recipient_ids.recipients = recipient_ids.map((item) => {
          closure_1_1(closure_1_2[8])(null != dependencyMap[item], "Missing user in compressed ready payload");
          return dependencyMap[item];
        });
      }
      delete tmp2[tmp];
    });
  }
  let mapped;
  if (guilds != null) {
    mapped = guilds.map((unavailable, index) => {
      let tmp = unavailable;
      if (true !== unavailable.unavailable) {
        let tmp5;
        if (require != null) {
          tmp5 = tmp3[index];
        }
        dependencyMap = closure_5;
        const items = [];
        if (tmp5 != null) {
          const item = tmp5.forEach((user_id) => {
            if (null != user_id) {
              user_id = user_id.user_id;
              if (null != user_id) {
                const _HermesInternal = HermesInternal;
                _modDef38(null != dependencyMap[user_id], "Missing user[" + user_id + "] in compressed ready payload");
                user_id.user = dependencyMap[user_id];
                const tmp7 = null != dependencyMap[user_id];
              }
              delete tmp2[tmp];
              items.push(user_id);
            }
          });
        }
        unavailable.members = items;
        tmp = hydrateGuild(unavailable);
      }
      return tmp;
    });
  }
  if (mapped == null) {
    mapped = [];
  }
  let tmp8 = null;
  if (null != obj) {
    tmp8 = null;
    if (obj.identifyTime === identifyStartTime) {
      if (null == guilds) {
        tmp8 = hydrateGuild(obj.guild);
      } else {
        tmp8 = null;
      }
    }
  }
  if (null != tmp8) {
    mapped.push(tmp8);
  }
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.users = users;
  obj2.presences = [];
  obj2.guilds = mapped;
  if (private_channels == null) {
    private_channels = [];
  }
  obj2.private_channels = private_channels;
  return obj2;
};
export const hydrateInitialGuild = function hydrateInitialGuild(guild, identifyStartTime) {
  const obj = { guild, identifyTime: identifyStartTime };
  return hydratePreviouslyUnavailableGuild(guild);
};
export { hydratePreviouslyUnavailableGuild };