// discord_app/utils/ReadyPayloadUtils.tsx
import set2 from "../../_runtime/00002_set.js";
import createChannelRecord from "../records/ChannelRecord.tsx";
import itemsDefault from "../modules/app_database/DatabaseDaos.tsx";
import isCacheEnabled from "../modules/cache/isCacheEnabled.native.tsx";

function hydrateGuild(guild) {
  closure_0 = guild;
  if ("partial" !== guild.data_mode) {
    let obj = {
      id: null,
      dataMode: null,
      emojis: null,
      guild_scheduled_events: null,
      experiments: null,
      joined_at: null,
      lastMessages: null,
      member_count: null,
      members: null,
      premium_subscription_count: null,
      properties: null,
      roles: null,
      stage_instances: null,
      stickers: null,
      threads: null,
      threadMessages: null,
      channels: null,
      version: null,
      hasThreadsSubscription: null,
    };
    ({ id: obj5[0], data_mode: obj5[1] } = guild);
    obj = { op: "full_sync", items: null };
    obj[1] = guild.emojis;
    obj[2] = obj;
    ({
      guild_scheduled_events: obj5[3],
      experiments: obj5[4],
      joined_at: obj5[5],
      last_messages: obj5[6],
      member_count: obj5[7],
      members: obj5[8],
      premium_subscription_count: obj5[9],
      properties: obj5[10],
    } = guild);
    obj1 = { op: "full_sync", items: null };
    obj1[1] = guild.roles;
    obj[11] = obj1;
    obj[12] = guild.stage_instances;
    const obj2 = { op: "full_sync", items: null };
    obj2[1] = guild.stickers;
    obj[13] = obj2;
    threads = guild.threads;
    let mapped;
    if (threads != null) {
      mapped = threads.map((arg0) => closure_1_3(arg0, guild.id));
    }
    if (mapped == null) {
      mapped = [];
    }
    obj[14] = mapped;
    obj[15] = collectThreadMessages(guild.threads);
    const obj3 = { op: "full_sync", items: null };
    const channels = guild.channels;
    obj3[1] = channels.map((arg0) => {
      arg0.guild_id = guild.id;
      return closure_1_3(arg0, guild.id);
    });
    obj[16] = obj3;
    ({ version: obj5[17], has_threads_subscription: obj5[18] } = guild);
    let obj4 = obj;
  } else {
    obj4 = {
      id: null,
      dataMode: null,
      channels: null,
      channelTimestampUpdates: null,
      emojis: null,
      guild_scheduled_events: null,
      experiments: null,
      joined_at: null,
      lastMessages: null,
      member_count: null,
      members: null,
      premium_subscription_count: null,
      properties: null,
      roles: null,
      stage_instances: null,
      stickers: null,
      unableToSyncDeletes: null,
      threads: null,
      threadMessages: null,
      version: null,
      hasThreadsSubscription: null,
    };
    ({ id: obj10[0], data_mode: obj10[1] } = guild);
    const channels1 = guild.partial_updates.channels;
    let mapped1;
    if (channels1 != null) {
      mapped1 = channels1.map((arg0) => closure_1_3(arg0, guild.id));
    }
    if (mapped1 == null) {
      mapped1 = [];
    }
    obj = { op: "update", writes: null, deletes: null };
    obj[1] = mapped1;
    let deleted_channel_ids = guild.partial_updates.deleted_channel_ids;
    if (deleted_channel_ids == null) {
      deleted_channel_ids = [];
    }
    obj[2] = deleted_channel_ids;
    obj4[2] = obj;
    obj4[3] = guild.channel_updates;
    let emojis = guild.partial_updates.emojis;
    if (emojis == null) {
      emojis = [];
    }
    const obj5 = { op: "update", writes: null, deletes: null };
    obj5[1] = emojis;
    let deleted_emoji_ids = guild.partial_updates.deleted_emoji_ids;
    if (deleted_emoji_ids == null) {
      deleted_emoji_ids = [];
    }
    obj5[2] = deleted_emoji_ids;
    obj4[4] = obj5;
    ({
      guild_scheduled_events: obj10[5],
      experiments: obj10[6],
      joined_at: obj10[7],
      last_messages: obj10[8],
      member_count: obj10[9],
      members: obj10[10],
      premium_subscription_count: obj10[11],
      properties,
    } = guild);
    if (properties == null) {
      properties = null;
    }
    obj4[12] = properties;
    let roles = guild.partial_updates.roles;
    if (roles == null) {
      roles = [];
    }
    const obj6 = { op: "update", writes: null, deletes: null };
    obj6[1] = roles;
    let deleted_role_ids = guild.partial_updates.deleted_role_ids;
    if (deleted_role_ids == null) {
      deleted_role_ids = [];
    }
    obj6[2] = deleted_role_ids;
    obj4[13] = obj6;
    obj4[14] = guild.stage_instances;
    let stickers = guild.partial_updates.stickers;
    if (stickers == null) {
      stickers = [];
    }
    const obj7 = { op: "update", writes: null, deletes: null };
    obj7[1] = stickers;
    let deleted_sticker_ids = guild.partial_updates.deleted_sticker_ids;
    if (deleted_sticker_ids == null) {
      deleted_sticker_ids = [];
    }
    obj7[2] = deleted_sticker_ids;
    obj4[15] = obj7;
    ({ unable_to_sync_deletes: obj10[16], threads } = guild);
    let mapped2;
    if (threads != null) {
      mapped2 = threads.map((arg0) => closure_1_3(arg0, guild.id));
    }
    if (mapped2 == null) {
      mapped2 = [];
    }
    obj4[17] = mapped2;
    obj4[18] = collectThreadMessages(guild.threads);
    ({ version: obj10[19], has_threads_subscription: obj10[20] } = guild);
  }
  return obj4;
}
function hydratePreviouslyUnavailableGuild(data_mode) {
  closure_0 = data_mode;
  if ("partial" !== data_mode.data_mode) {
    let obj = {
      id: null,
      guild_scheduled_events: null,
      experiments: null,
      joined_at: null,
      lastMessages: null,
      member_count: null,
      members: null,
      premium_subscription_count: null,
      properties: null,
      roles: null,
      stage_instances: null,
      threads: null,
      threadMessages: null,
      presences: null,
      activity_instances: null,
      voice_states: null,
      version: null,
      hasThreadsSubscription: null,
      emojis: null,
      stickers: null,
      channels: null,
    };
    ({
      id: obj5[0],
      guild_scheduled_events: obj5[1],
      experiments: obj5[2],
      joined_at: obj5[3],
      last_messages: obj5[4],
      member_count: obj5[5],
      members: obj5[6],
      premium_subscription_count: obj5[7],
      properties: obj5[8],
    } = data_mode);
    obj = { op: "full_sync", items: null };
    obj[1] = data_mode.roles;
    obj[9] = obj;
    ({ stage_instances: obj5[10], threads: threads2 } = data_mode);
    let mapped;
    if (threads2 != null) {
      mapped = threads2.map((arg0) => closure_1_3(arg0, data_mode.id));
    }
    if (mapped == null) {
      mapped = [];
    }
    obj[11] = mapped;
    obj[12] = collectThreadMessages(data_mode.threads);
    ({
      presences: obj5[13],
      activity_instances: obj5[14],
      voice_states: obj5[15],
      version: obj5[16],
      has_threads_subscription: obj5[17],
    } = data_mode);
    obj1 = { op: "full_sync", items: null };
    obj1[1] = data_mode.emojis;
    obj[18] = obj1;
    const obj2 = { op: "full_sync", items: null };
    obj2[1] = data_mode.stickers;
    obj[19] = obj2;
    const obj3 = { op: "full_sync", items: null };
    const channels = data_mode.channels;
    obj3[1] = channels.map((arg0) => {
      arg0.guild_id = data_mode.id;
      return closure_1_3(arg0, data_mode.id);
    });
    obj[20] = obj3;
    let obj4 = obj;
  } else {
    obj4 = {
      id: null,
      channels: null,
      channelTimestampUpdates: null,
      activity_instances: null,
      emojis: null,
      guild_scheduled_events: null,
      experiments: null,
      joined_at: null,
      lastMessages: null,
      member_count: null,
      members: null,
      premium_subscription_count: null,
      presences: null,
      properties: null,
      roles: null,
      stage_instances: null,
      stickers: null,
      unableToSyncDeletes: null,
      threads: null,
      threadMessages: null,
      voice_states: null,
      version: null,
      hasThreadsSubscription: null,
    };
    obj4[0] = data_mode.id;
    const channels1 = data_mode.partial_updates.channels;
    let mapped1;
    if (channels1 != null) {
      mapped1 = channels1.map((arg0) => closure_1_3(arg0, data_mode.id));
    }
    if (mapped1 == null) {
      mapped1 = [];
    }
    obj = { op: "update", writes: null, deletes: null };
    obj[1] = mapped1;
    let deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
    if (deleted_channel_ids == null) {
      deleted_channel_ids = [];
    }
    obj[2] = deleted_channel_ids;
    obj4[1] = obj;
    ({ channel_updates: obj10[2], activity_instances: obj10[3] } = data_mode);
    let emojis = data_mode.partial_updates.emojis;
    if (emojis == null) {
      emojis = [];
    }
    const obj5 = { op: "update", writes: null, deletes: null };
    obj5[1] = emojis;
    let deleted_emoji_ids = data_mode.partial_updates.deleted_emoji_ids;
    if (deleted_emoji_ids == null) {
      deleted_emoji_ids = [];
    }
    obj5[2] = deleted_emoji_ids;
    obj4[4] = obj5;
    ({
      guild_scheduled_events: obj10[5],
      experiments: obj10[6],
      joined_at: obj10[7],
      last_messages: obj10[8],
      member_count: obj10[9],
      members: obj10[10],
      premium_subscription_count: obj10[11],
      presences: obj10[12],
      properties,
    } = data_mode);
    if (properties == null) {
      properties = null;
    }
    obj4[13] = properties;
    let roles = data_mode.partial_updates.roles;
    if (roles == null) {
      roles = [];
    }
    const obj6 = { op: "update", writes: null, deletes: null };
    obj6[1] = roles;
    let deleted_role_ids = data_mode.partial_updates.deleted_role_ids;
    if (deleted_role_ids == null) {
      deleted_role_ids = [];
    }
    obj6[2] = deleted_role_ids;
    obj4[14] = obj6;
    obj4[15] = data_mode.stage_instances;
    let stickers = data_mode.partial_updates.stickers;
    if (stickers == null) {
      stickers = [];
    }
    const obj7 = { op: "update", writes: null, deletes: null };
    obj7[1] = stickers;
    let deleted_sticker_ids = data_mode.partial_updates.deleted_sticker_ids;
    if (deleted_sticker_ids == null) {
      deleted_sticker_ids = [];
    }
    obj7[2] = deleted_sticker_ids;
    obj4[16] = obj7;
    ({ unable_to_sync_deletes: obj10[17], threads } = data_mode);
    let mapped2;
    if (threads != null) {
      mapped2 = threads.map((arg0) => closure_1_3(arg0, data_mode.id));
    }
    if (mapped2 == null) {
      mapped2 = [];
    }
    obj4[18] = mapped2;
    obj4[19] = collectThreadMessages(data_mode.threads);
    ({ voice_states: obj10[20], version: obj10[21], has_threads_subscription: obj10[22] } = data_mode);
  }
  return obj4;
}
function collectThreadMessages(threads) {
  const items = [];
  if (null != threads) {
    const iter = threads[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.most_recent_message) {
        let tmp6 = nextResult;
        let arr = items.push(tmp5.most_recent_message);
      }
      continue;
    }
  }
  return items;
}
let closure_3 = createChannelRecord.createChannelRecordFromServer;
let c4 = null;
let closure_5 = {};
let result = set2.fileFinishedImporting("utils/ReadyPayloadUtils.tsx");

export const hydrateReadySupplementalPayload = function hydrateReadySupplementalPayload(arg0, identifyStartTime) {
  ({ guilds, merged_members: closure_0, merged_presences } = arg0);
  let items = merged_presences;
  let merged = Object.assign(arg0, Object.create(null));
  let friends;
  if (merged_presences != null) {
    friends = merged_presences.friends;
  }
  closure_0 = closure_5;
  items = [];
  if (friends != null) {
    let item = friends.forEach((user_id) => {
      if (null != user_id) {
        user_id = user_id.user_id;
        if (null != user_id) {
          const _HermesInternal = HermesInternal;
          items(closure_1_2[8])(
            null != dependencyMap[user_id],
            "Missing user[" + user_id + "] in compressed ready payload",
          );
          user_id.user = dependencyMap[user_id];
          const tmp5 = items(closure_1_2[8]);
          const tmp7 = null != dependencyMap[user_id];
        }
        delete tmp2[tmp];
        items.push(user_id);
      }
    });
  }
  let mapped;
  if (guilds != null) {
    mapped = guilds.map((voice_states) => {
      let tmp2;
      if (items1 != null) {
        tmp2 = items1.guilds[arg1];
      }
      let table = closure_5;
      items = [];
      items1 = items;
      if (tmp2 != null) {
        const item = tmp2.forEach((user_id) => {
          if (null != user_id) {
            user_id = user_id.user_id;
            if (null != user_id) {
              const _HermesInternal = HermesInternal;
              items(closure_1_2[8])(
                null != dependencyMap[user_id],
                "Missing user[" + user_id + "] in compressed ready payload",
              );
              user_id.user = dependencyMap[user_id];
              const tmp5 = items(closure_1_2[8]);
              const tmp7 = null != dependencyMap[user_id];
            }
            delete tmp2[tmp];
            items.push(user_id);
          }
        });
      }
      let tmp5;
      if (table != null) {
        tmp5 = table[arg1];
      }
      table = closure_5;
      items1 = [];
      if (tmp5 != null) {
        const item1 = tmp5.forEach((user_id) => {
          if (null != user_id) {
            user_id = user_id.user_id;
            if (null != user_id) {
              const _HermesInternal = HermesInternal;
              items(closure_1_2[8])(
                null != dependencyMap[user_id],
                "Missing user[" + user_id + "] in compressed ready payload",
              );
              user_id.user = dependencyMap[user_id];
              const tmp5 = items(closure_1_2[8]);
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
  if (null != _null) {
    tmp5 = null;
    if (_null.identifyTime === identifyStartTime) {
      if (null == guilds) {
        let obj = {
          id: null,
          members: null,
          presences: null,
          activity_instances: null,
          voice_states: null,
          unavailable: false,
        };
        ({
          id: obj[0],
          members: obj[1],
          presences: obj[2],
          activity_instances: obj[3],
          voice_states: obj[4],
        } = _null.guild);
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
  obj = {};
  const merged1 = Object.assign(merged);
  obj.presences = items;
  obj.guilds = mapped;
  return obj;
};
export const preloadReadyPayloadData = function preloadReadyPayloadData() {
  const databaseResult = itemsDefault.database();
  const obj = itemsDefault;
  const tmp4 = require;
  if (obj2.isCacheEnabled()) {
    let tmpResult = tmp(7408);
    let committedVersions = tmpResult.getCommittedVersions();
  } else {
    committedVersions = Promise.resolve({});
  }
  obj2 = isCacheEnabled;
  if (tmp4Result.isCacheEnabled()) {
    tmpResult = tmp(1976);
    let guildIds = tmpResult.getGuildIds();
  } else {
    const _Set = Set;
    const set = new Set();
    guildIds = Promise.resolve(set);
  }
  if (null != databaseResult) {
    let okAsyncResult = tmp(7409).okAsync(databaseResult);
    const tmpResult1 = tmp(7409);
  } else {
    okAsyncResult = Promise.resolve(false);
  }
  const items = [committedVersions, guildIds, okAsyncResult];
  tmp4Result = isCacheEnabled;
  return Promise.all(items).then((arg0) => {
    [tmp, tmp2, tmp3] = arg0;
    return { guildVersions, guildChannels, databaseOk };
  });
};
export const hydrateReadyPayloadPrioritized = function hydrateReadyPayloadPrioritized(
  arg0,
  identifyStartTime,
  closure_1,
) {
  ({ users, private_channels, merged_members: require, guilds } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = itemsDefault;
  let tmp4 = null != obj.database();
  if (tmp4) {
    tmp4 = false === closure_1.databaseOk;
  }
  if (tmp4) {
    let tmp2Result = tmp2(1972);
    const result = tmp2Result.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok");
  }
  tmp2Result = tmp2(12);
  closure_5 = tmp2Result.keyBy(users, (id) => id.id);
  if (private_channels != null) {
    let item = private_channels.forEach((recipient_ids) => {
      recipient_ids = recipient_ids.recipient_ids;
      if (null != recipient_ids) {
        recipient_ids.recipients = recipient_ids.map((arg0) => {
          callback(table[8])(null != dependencyMap[arg0], "Missing user in compressed ready payload");
          return dependencyMap[arg0];
        });
      }
      delete tmp2[tmp];
    });
  }
  let mapped;
  if (guilds != null) {
    mapped = guilds.map((unavailable) => {
      let tmp = unavailable;
      if (true !== unavailable.unavailable) {
        let tmp5;
        if (closure_0 != null) {
          tmp5 = tmp3[arg1];
        }
        closure_0 = closure_5;
        const items = [];
        if (tmp5 != null) {
          const item = tmp5.forEach((user_id) => {
            if (null != user_id) {
              user_id = user_id.user_id;
              if (null != user_id) {
                const _HermesInternal = HermesInternal;
                items(closure_1_2[8])(
                  null != dependencyMap[user_id],
                  "Missing user[" + user_id + "] in compressed ready payload",
                );
                user_id.user = dependencyMap[user_id];
                const tmp5 = items(closure_1_2[8]);
                const tmp7 = null != dependencyMap[user_id];
              }
              delete tmp2[tmp];
              items.push(user_id);
            }
          });
        }
        unavailable.members = items;
        tmp = closure_1_6(unavailable);
        const tmp2 = closure_5;
      }
      return tmp;
    });
  }
  if (mapped == null) {
    mapped = [];
  }
  let tmp8 = null;
  if (null != _null) {
    tmp8 = null;
    if (_null.identifyTime === identifyStartTime) {
      if (null == guilds) {
        tmp8 = hydrateGuild(_null.guild);
      } else {
        tmp8 = null;
      }
    }
  }
  if (null != tmp8) {
    mapped.push(tmp8);
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.users = users;
  obj.presences = [];
  obj.guilds = mapped;
  if (private_channels == null) {
    private_channels = [];
  }
  obj.private_channels = private_channels;
  return obj;
};
export const hydrateInitialGuild = function hydrateInitialGuild(guild, identifyStartTime) {
  const obj = { guild, identifyTime: identifyStartTime };
  return hydratePreviouslyUnavailableGuild(guild);
};
export { hydratePreviouslyUnavailableGuild };
