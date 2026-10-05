// discord_app/utils/ReadyPayloadUtils.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import ChannelRecord from "../records/ChannelRecord.tsx";
import DatabaseDaosDefault from "../modules/app_database/DatabaseDaos.tsx";
import DatabaseManagerDefault from "../modules/app_database/system/DatabaseManager.tsx";
import ChannelReaderDefault from "../modules/app_database/modules/channels/ChannelReader.tsx";
import isCacheEnabled from "../modules/cache/isCacheEnabled.native.tsx";
import GuildVersionsDefault from "../modules/app_database/modules/GuildVersions.tsx";
import KvCacheVersionDefault from "../modules/app_database/modules/KvCacheVersion.tsx";
import size from "../../_runtime/metro/00002__.js";

let recipient_ids, set, user_id;

function hydrateGuild(guild) {
  let deleted_channel_ids;
  let deleted_emoji_ids;
  let deleted_role_ids;
  let deleted_sticker_ids;
  let mapped;
  let mapped2;
  let obj19;
  let obj20;
  let obj3;
  let obj4;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let properties;
  let threads;
  if ("partial" !== guild.data_mode) {
    ({ id: obj5.id, data_mode: obj5.dataMode } = guild);
    const obj2 = {
      id: null,
      dataMode: null,
      emojis: obj3,
      guild_scheduled_events: null,
      experiments: null,
      joined_at: null,
      lastMessages: null,
      member_count: null,
      members: null,
      premium_subscription_count: null,
      properties: null,
      roles: obj4,
      stage_instances: guild.stage_instances,
      stickers: obj6,
      threads: mapped,
      threadMessages: collectThreadMessages(guild.threads),
      channels: obj7,
      version: null,
      hasThreadsSubscription: null,
    };
    obj3 = { op: "full_sync", items: guild.emojis };
    ({
      guild_scheduled_events: obj5.guild_scheduled_events,
      experiments: obj5.experiments,
      joined_at: obj5.joined_at,
      last_messages: obj5.lastMessages,
      member_count: obj5.member_count,
      members: obj5.members,
      premium_subscription_count: obj5.premium_subscription_count,
      properties: obj5.properties,
    } = guild);
    const threads1 = guild.threads;
    mapped = undefined;
    obj4 = { op: "full_sync", items: guild.roles };
    obj6 = { op: "full_sync", items: guild.stickers };
    if (threads1 != null) {
      mapped = threads1.map((item) => closure_3(item, guild.id));
    }
    if (mapped == null) {
      mapped = [];
    }
    obj7 = {
      op: "full_sync",
      items: channels.map((item) => {
        item.guild_id = guild.id;
        return closure_3(item, guild.id);
      }),
    };
    channels = guild.channels;
    ({ version: obj5.version, has_threads_subscription: obj5.hasThreadsSubscription } = guild);
    obj8 = obj2;
  } else {
    obj8 = {
      id: null,
      dataMode: null,
      channels,
      channelTimestampUpdates: guild.channel_updates,
      emojis: obj9,
      guild_scheduled_events: null,
      experiments: null,
      joined_at: null,
      lastMessages: null,
      member_count: null,
      members: null,
      premium_subscription_count: null,
      properties,
      roles: obj19,
      stage_instances: guild.stage_instances,
      stickers: obj20,
      unableToSyncDeletes: null,
      threads: mapped2,
      threadMessages: collectThreadMessages(guild.threads),
      version: null,
      hasThreadsSubscription: null,
    };
    ({ id: obj10.id, data_mode: obj10.dataMode } = guild);
    const channels1 = guild.partial_updates.channels;
    let mapped1;
    if (channels1 != null) {
      mapped1 = channels1.map((item) => closure_3(item, guild.id));
    }
    if (mapped1 == null) {
      mapped1 = [];
    }
    channels = { op: "update", writes: mapped1, deletes: deleted_channel_ids };
    deleted_channel_ids = guild.partial_updates.deleted_channel_ids;
    if (deleted_channel_ids == null) {
      deleted_channel_ids = [];
    }
    let emojis = guild.partial_updates.emojis;
    if (emojis == null) {
      emojis = [];
    }
    obj9 = { op: "update", writes: emojis, deletes: deleted_emoji_ids };
    deleted_emoji_ids = guild.partial_updates.deleted_emoji_ids;
    if (deleted_emoji_ids == null) {
      deleted_emoji_ids = [];
    }
    ({
      guild_scheduled_events: obj10.guild_scheduled_events,
      experiments: obj10.experiments,
      joined_at: obj10.joined_at,
      last_messages: obj10.lastMessages,
      member_count: obj10.member_count,
      members: obj10.members,
      premium_subscription_count: obj10.premium_subscription_count,
      properties,
    } = guild);
    if (properties == null) {
      properties = null;
    }
    let roles = guild.partial_updates.roles;
    if (roles == null) {
      roles = [];
    }
    obj19 = { op: "update", writes: roles, deletes: deleted_role_ids };
    deleted_role_ids = guild.partial_updates.deleted_role_ids;
    if (deleted_role_ids == null) {
      deleted_role_ids = [];
    }
    let stickers = guild.partial_updates.stickers;
    if (stickers == null) {
      stickers = [];
    }
    obj20 = { op: "update", writes: stickers, deletes: deleted_sticker_ids };
    deleted_sticker_ids = guild.partial_updates.deleted_sticker_ids;
    if (deleted_sticker_ids == null) {
      deleted_sticker_ids = [];
    }
    ({ unable_to_sync_deletes: obj10.unableToSyncDeletes, threads } = guild);
    mapped2 = undefined;
    if (threads != null) {
      mapped2 = threads.map((item) => closure_3(item, guild.id));
    }
    if (mapped2 == null) {
      mapped2 = [];
    }
    ({ version: obj10.version, has_threads_subscription: obj10.hasThreadsSubscription } = guild);
  }
  return obj8;
}
function hydratePreviouslyUnavailableGuild(data_mode) {
  let deleted_channel_ids;
  let deleted_emoji_ids;
  let deleted_role_ids;
  let deleted_sticker_ids;
  let mapped;
  let mapped2;
  let obj19;
  let obj20;
  let obj3;
  let obj4;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let properties;
  let threads;
  let threads2;
  if ("partial" !== data_mode.data_mode) {
    ({
      id: obj5.id,
      guild_scheduled_events: obj5.guild_scheduled_events,
      experiments: obj5.experiments,
      joined_at: obj5.joined_at,
      last_messages: obj5.lastMessages,
      member_count: obj5.member_count,
      members: obj5.members,
      premium_subscription_count: obj5.premium_subscription_count,
      properties: obj5.properties,
    } = data_mode);
    const obj2 = {
      id: null,
      guild_scheduled_events: null,
      experiments: null,
      joined_at: null,
      lastMessages: null,
      member_count: null,
      members: null,
      premium_subscription_count: null,
      properties: null,
      roles: obj3,
      stage_instances: null,
      threads: mapped,
      threadMessages: collectThreadMessages(data_mode.threads),
      presences: null,
      activity_instances: null,
      voice_states: null,
      version: null,
      hasThreadsSubscription: null,
      emojis: obj4,
      stickers: obj6,
      channels: obj7,
    };
    obj3 = { op: "full_sync", items: data_mode.roles };
    ({ stage_instances: obj5.stage_instances, threads: threads2 } = data_mode);
    mapped = undefined;
    if (threads2 != null) {
      mapped = threads2.map((item) => closure_3(item, data_mode.id));
    }
    if (mapped == null) {
      mapped = [];
    }
    ({
      presences: obj5.presences,
      activity_instances: obj5.activity_instances,
      voice_states: obj5.voice_states,
      version: obj5.version,
      has_threads_subscription: obj5.hasThreadsSubscription,
    } = data_mode);
    obj4 = { op: "full_sync", items: data_mode.emojis };
    obj6 = { op: "full_sync", items: data_mode.stickers };
    obj7 = {
      op: "full_sync",
      items: channels.map((item) => {
        item.guild_id = data_mode.id;
        return closure_3(item, data_mode.id);
      }),
    };
    channels = data_mode.channels;
    obj8 = obj2;
  } else {
    obj8 = {
      id: data_mode.id,
      channels,
      channelTimestampUpdates: null,
      activity_instances: null,
      emojis: obj9,
      guild_scheduled_events: null,
      experiments: null,
      joined_at: null,
      lastMessages: null,
      member_count: null,
      members: null,
      premium_subscription_count: null,
      presences: null,
      properties,
      roles: obj19,
      stage_instances: data_mode.stage_instances,
      stickers: obj20,
      unableToSyncDeletes: null,
      threads: mapped2,
      threadMessages: collectThreadMessages(data_mode.threads),
      voice_states: null,
      version: null,
      hasThreadsSubscription: null,
    };
    const channels1 = data_mode.partial_updates.channels;
    let mapped1;
    if (channels1 != null) {
      mapped1 = channels1.map((item) => closure_3(item, data_mode.id));
    }
    if (mapped1 == null) {
      mapped1 = [];
    }
    channels = { op: "update", writes: mapped1, deletes: deleted_channel_ids };
    deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
    if (deleted_channel_ids == null) {
      deleted_channel_ids = [];
    }
    ({ channel_updates: obj10.channelTimestampUpdates, activity_instances: obj10.activity_instances } = data_mode);
    let emojis = data_mode.partial_updates.emojis;
    if (emojis == null) {
      emojis = [];
    }
    obj9 = { op: "update", writes: emojis, deletes: deleted_emoji_ids };
    deleted_emoji_ids = data_mode.partial_updates.deleted_emoji_ids;
    if (deleted_emoji_ids == null) {
      deleted_emoji_ids = [];
    }
    ({
      guild_scheduled_events: obj10.guild_scheduled_events,
      experiments: obj10.experiments,
      joined_at: obj10.joined_at,
      last_messages: obj10.lastMessages,
      member_count: obj10.member_count,
      members: obj10.members,
      premium_subscription_count: obj10.premium_subscription_count,
      presences: obj10.presences,
      properties,
    } = data_mode);
    if (properties == null) {
      properties = null;
    }
    let roles = data_mode.partial_updates.roles;
    if (roles == null) {
      roles = [];
    }
    obj19 = { op: "update", writes: roles, deletes: deleted_role_ids };
    deleted_role_ids = data_mode.partial_updates.deleted_role_ids;
    if (deleted_role_ids == null) {
      deleted_role_ids = [];
    }
    let stickers = data_mode.partial_updates.stickers;
    if (stickers == null) {
      stickers = [];
    }
    obj20 = { op: "update", writes: stickers, deletes: deleted_sticker_ids };
    deleted_sticker_ids = data_mode.partial_updates.deleted_sticker_ids;
    if (deleted_sticker_ids == null) {
      deleted_sticker_ids = [];
    }
    ({ unable_to_sync_deletes: obj10.unableToSyncDeletes, threads } = data_mode);
    mapped2 = undefined;
    if (threads != null) {
      mapped2 = threads.map((item) => closure_3(item, data_mode.id));
    }
    if (mapped2 == null) {
      mapped2 = [];
    }
    ({
      voice_states: obj10.voice_states,
      version: obj10.version,
      has_threads_subscription: obj10.hasThreadsSubscription,
    } = data_mode);
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

export const hydrateReadySupplementalPayload = function hydrateReadySupplementalPayload(found, identifyStartTime) {
  let guilds;
  let merged_presences;
  let obj;
  ({ guilds, merged_members: require, merged_presences } = found);
  let merged = Object.assign(found, Object.assign({ guilds: 0, merged_members: 0, merged_presences: 0 }));
  let friends;
  let tmp2 = closure_5;
  if (merged_presences != null) {
    friends = merged_presences.friends;
  }
  let closure_0 = tmp2;
  let items = [];
  if (friends != null) {
    let item = friends.forEach((user_id) => {
      if (null != user_id) {
        user_id = user_id.user_id;
        if (null != user_id) {
          const _HermesInternal = HermesInternal;
          const tmp4 = closure_2_1(closure_2_2[8]);
          const tmp6 = null != closure_0[user_id];
          tmp4(tmp6, "Missing user[" + user_id + "] in compressed ready payload");
          user_id.user = closure_0[user_id];
        }
        delete tmp["user_id"];
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
      require = closure_5;
      const items = [];
      if (tmp2 != null) {
        const item = tmp2.forEach((user_id) => {
          if (null != user_id) {
            user_id = user_id.user_id;
            if (null != user_id) {
              const _HermesInternal = HermesInternal;
              const tmp4 = closure_2_1(closure_2_2[8]);
              const tmp6 = null != closure_0[user_id];
              tmp4(tmp6, "Missing user[" + user_id + "] in compressed ready payload");
              user_id.user = closure_0[user_id];
            }
            delete tmp["user_id"];
            items.push(user_id);
          }
        });
      }
      let tmp5;
      if (require != null) {
        tmp5 = require[index];
      }
      require = closure_5;
      const items1 = [];
      if (tmp5 != null) {
        const item1 = tmp5.forEach((user_id) => {
          if (null != user_id) {
            user_id = user_id.user_id;
            if (null != user_id) {
              const _HermesInternal = HermesInternal;
              const tmp4 = closure_2_1(closure_2_2[8]);
              const tmp6 = null != closure_0[user_id];
              tmp4(tmp6, "Missing user[" + user_id + "] in compressed ready payload");
              user_id.user = closure_0[user_id];
            }
            delete tmp["user_id"];
            items.push(user_id);
          }
        });
      }
      const obj = { unavailable: undefined === voice_states.voice_states, presences: items, members: items1 };
      const merged = Object.assign(voice_states);
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
        obj = {
          id: null,
          members: null,
          presences: null,
          activity_instances: null,
          voice_states: null,
          unavailable: false,
        };
        ({
          id: obj.id,
          members: obj.members,
          presences: obj.presences,
          activity_instances: obj.activity_instances,
          voice_states: obj.voice_states,
        } = obj.guild);
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
  const obj2 = { presences: items, guilds: mapped };
  const merged1 = Object.assign(merged);
  return obj2;
};
export const preloadReadyPayloadData = function preloadReadyPayloadData() {
  let committedVersions;
  let guildIds;
  let okAsyncResult;
  const obj = DatabaseDaosDefault;
  const databaseResult = obj.database();
  const obj2 = isCacheEnabled;
  if (obj2.isCacheEnabled()) {
    const tmpResult = GuildVersionsDefault;
    committedVersions = tmpResult.getCommittedVersions();
  } else {
    committedVersions = Promise.resolve({});
  }
  const tmp4Result = isCacheEnabled;
  if (tmp4Result.isCacheEnabled()) {
    const tmpResult3 = ChannelReaderDefault;
    guildIds = tmpResult3.getGuildIds();
  } else {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    guildIds = resolve(set);
  }
  if (null != databaseResult) {
    const tmpResult4 = KvCacheVersionDefault;
    okAsyncResult = tmpResult4.okAsync(databaseResult);
  } else {
    okAsyncResult = Promise.resolve(false);
  }
  const items = [committedVersions, guildIds, okAsyncResult];
  const allPromises = Promise.all(items);
  return allPromises.then((result) => {
    let tmp;
    let tmp2;
    let tmp3;
    [tmp, tmp2, tmp3] = result;
    return { guildVersions, guildChannels, databaseOk };
  });
};
export const hydrateReadyPayloadPrioritized = function hydrateReadyPayloadPrioritized(
  initialPrivateChannels,
  identifyStartTime,
  databaseOk,
) {
  let guild;
  let guilds;
  let private_channels;
  let users;
  ({ users, private_channels, merged_members: require, guilds } = initialPrivateChannels);
  const merged = Object.assign(
    initialPrivateChannels,
    Object.assign({ users: 0, private_channels: 0, merged_members: 0, guilds: 0 }),
  );
  const obj = DatabaseDaosDefault;
  let tmp4 = null != obj.database();
  if (tmp4) {
    let tmp5 = databaseOk;
    tmp4 = false === databaseOk.databaseOk;
  }
  if (tmp4) {
    const tmp2Result = DatabaseManagerDefault;
    const result = tmp2Result.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok");
  }
  const tmp2Result2 = _modDef12;
  closure_5 = tmp2Result2.keyBy(users, (id) => id.id);
  if (private_channels != null) {
    let item = private_channels.forEach((recipient_ids) => {
      recipient_ids = recipient_ids.recipient_ids;
      const tmp = recipient_ids;
      if (null != recipient_ids) {
        recipient_ids.recipients = recipient_ids.map((item) => {
          closure_1_1(closure_1_2[8])(null != closure_1_5[item], "Missing user in compressed ready payload");
          return closure_1_5[item];
        });
      }
      delete tmp["recipient_ids"];
    });
  }
  let mapped;
  if (guilds != null) {
    mapped = guilds.map((unavailable, index) => {
      let tmp = unavailable;
      if (true !== unavailable.unavailable) {
        let tmp4 = null;
        let tmp5;
        if (require != null) {
          let tmp6 = index;
          tmp5 = tmp3[index];
        }
        require = closure_5;
        const items = [];
        if (tmp5 != null) {
          const item = tmp5.forEach((user_id) => {
            if (null != user_id) {
              user_id = user_id.user_id;
              if (null != user_id) {
                const _HermesInternal = HermesInternal;
                const tmp4 = closure_2_1(closure_2_2[8]);
                const tmp6 = null != closure_0[user_id];
                tmp4(tmp6, "Missing user[" + user_id + "] in compressed ready payload");
                user_id.user = closure_0[user_id];
              }
              delete tmp["user_id"];
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
  const obj2 = { users, presences: [], guilds: mapped, private_channels };
  const merged1 = Object.assign(merged);
  if (private_channels == null) {
    private_channels = [];
  }
  return obj2;
};
export const hydrateInitialGuild = function hydrateInitialGuild(guild, identifyStartTime) {
  const obj = { guild, identifyTime: identifyStartTime };
  return hydratePreviouslyUnavailableGuild(guild);
};
export { hydratePreviouslyUnavailableGuild };
