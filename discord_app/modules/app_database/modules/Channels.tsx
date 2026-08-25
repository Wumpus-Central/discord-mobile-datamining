// === Module 7253: handleBackgroundSync ===

// Module 7253 (handleBackgroundSync)
import set from "set" /* 2 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;

let obj = importDefault;
let closure_2 = createChannelRecord.createChannelRecordFromServer;
class Channels {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.privateChannels = [];
    obj.actions = {
      BACKGROUND_SYNC(arg0, arg1) {
            return obj.handleBackgroundSync(arg0, arg1);
          },
      CHANNEL_CREATE(channel) {
            return obj.putOne(channel.channel, arg1);
          },
      CHANNEL_DELETE(channel) {
            return obj.deleteOne(channel.channel.guild_id, channel.channel.id, arg1);
          },
      CHANNEL_RECIPIENT_ADD(channelId) {
            return obj.handleChannelRecipientAdd(channelId, arg1);
          },
      CHANNEL_RECIPIENT_REMOVE(channelId) {
            return obj.handleChannelRecipientRemove(channelId, arg1);
          },
      CHANNEL_UPDATES(channels) {
            return obj.putMany(channels.channels, arg1);
          },
      CONNECTION_OPEN_SUPPLEMENTAL(arg0, arg1) {
            return obj.handleConnectionOpenSupplemental(arg0, arg1);
          },
      CONNECTION_OPEN(arg0, arg1) {
            return obj.handleConnectionOpen(arg0, arg1);
          },
      GUILD_CREATE(arg0, arg1) {
            return obj.handleGuildCreate(arg0, arg1);
          },
      GUILD_DELETE(arg0, arg1) {
            return obj.handleGuildDelete(arg0, arg1);
          }
    };
    return obj;
  }
}
const prototype = Channels.prototype;
prototype["handleBackgroundSync"] = function handleBackgroundSync(arg0, arg1) {
  closure_0 = arg1;
  const self = this;
  function _loop(iter) {
    closure_0 = iter;
    const data_mode = iter.data_mode;
    if ("unavailable" !== data_mode) {
      function asRecord(arg0) {
        return closure_1_2(arg0, iter.id);
      }
      if ("partial" === data_mode) {
        const channels = iter.partial_updates.channels;
        let mapped;
        if (channels != null) {
          mapped = channels.map(asRecord);
        }
        if (mapped == null) {
          mapped = [];
        }
        obj = { op: "update", writes: null, deletes: null };
        obj[1] = mapped;
        let deleted_channel_ids = iter.partial_updates.deleted_channel_ids;
        if (deleted_channel_ids == null) {
          deleted_channel_ids = [];
        }
        obj[2] = deleted_channel_ids;
        const result = self.handleGuildSynchronize(iter.id, obj, closure_0);
      } else {
        obj = { op: "full_sync", items: null };
        const channels1 = iter.channels;
        obj[1] = channels1.map(asRecord);
        const result1 = self.handleGuildSynchronize(iter.id, obj, closure_0);
      }
    }
  }
  const iter = arg0.guilds[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    continue;
  }
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(unavailableGuilds, database) {
  const self = this;
  const items = [...unavailableGuilds.unavailableGuilds];
  obj = obj(1956);
  obj.channelsTransaction(database).deleteAllExcept(items);
  for (const item10027 of tmp2) {
    let result = self.handleGuildSynchronize(item10027.id, item10027.channels, arg1);
    continue;
  }
  self.privateChannels = unavailableGuilds.initialPrivateChannels;
};
prototype["handleConnectionOpenSupplemental"] = function handleConnectionOpenSupplemental(lazyPrivateChannels) {
  const items = [...lazyPrivateChannels.lazyPrivateChannels];
  const replaced = this.replace(null, items, arg1);
  this.privateChannels = [];
};
prototype["handleChannelRecipientAdd"] = function handleChannelRecipientAdd(channelId, arg1) {
  const channel = store.getChannel(channelId.channelId);
  let isPrivateResult;
  id = id.getId();
  if (channel != null) {
    isPrivateResult = channel.isPrivate();
  }
  if (isPrivateResult) {
    const self = this;
    this.putOne(channel.addRecipient(channelId.user.id, channelId.nick, id), arg1);
  }
};
prototype["handleChannelRecipientRemove"] = function handleChannelRecipientRemove(channelId, arg1) {
  const channel = store.getChannel(channelId.channelId);
  let isPrivateResult;
  if (channel != null) {
    isPrivateResult = channel.isPrivate();
  }
  if (isPrivateResult) {
    const self = this;
    this.putOne(channel.removeRecipient(channelId.user.id), arg1);
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild, closure_0) {
  const result = this.handleGuildSynchronize(guild.guild.id, guild.guild.channels, closure_0);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  this.deleteManySyncUnsafe(guild.guild.id);
};
prototype["resetInMemoryState"] = function resetInMemoryState() {
  this.privateChannels = [];
};
prototype["handleGuildSynchronize"] = function handleGuildSynchronize(id, channels, closure_0) {
  const op = channels.op;
  if ("update" === op) {
    obj = obj(1956);
    const channelsTransactionResult = obj.channelsTransaction(closure_0);
    channelsTransactionResult.putAll(id, channels.writes);
    const deletes = channels.deletes;
    for (const item10024 of deletes) {
      let deleteResult = channelsTransactionResult.delete(arg0, item10024);
      continue;
    }
  } else if ("full_sync" === op) {
    const self = this;
    const replaced = this.replace(id, channels.items, closure_0);
  }
};
prototype["putOne"] = function putOne(guild_id, database) {
  obj = obj(1956);
  obj.channelsTransaction(database).put(guild_id.guild_id, guild_id);
};
prototype["putMany"] = function putMany(arg0, database) {
  obj = obj(1956);
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let putResult = channelsTransactionResult.put(nextResult.guild_id, nextResult);
    continue;
  }
};
prototype["replace"] = function replace(arg0, arg1, database) {
  obj = obj(1956);
  const replaced = obj.channelsTransaction(database).replaceAll(arg0, arg1);
};
prototype["deleteOne"] = function deleteOne(arg0, arg1, database) {
  obj = obj(1956);
  obj.channelsTransaction(database).delete(arg0, arg1);
};
prototype["deleteManySyncUnsafe"] = function deleteManySyncUnsafe(id) {
  obj = obj(1956);
  const channelsResult = obj.channels();
  if (channelsResult != null) {
    channelsResult.deleteSyncUnsafe(id);
  }
};
obj = Object.create(Channels.prototype);
obj.privateChannels = [];
obj.actions = {
  BACKGROUND_SYNC(arg0, arg1) {
    return obj.handleBackgroundSync(arg0, arg1);
  },
  CHANNEL_CREATE(channel) {
    return obj.putOne(channel.channel, arg1);
  },
  CHANNEL_DELETE(channel) {
    return obj.deleteOne(channel.channel.guild_id, channel.channel.id, arg1);
  },
  CHANNEL_RECIPIENT_ADD(channelId) {
    return obj.handleChannelRecipientAdd(channelId, arg1);
  },
  CHANNEL_RECIPIENT_REMOVE(channelId) {
    return obj.handleChannelRecipientRemove(channelId, arg1);
  },
  CHANNEL_UPDATES(channels) {
    return obj.putMany(channels.channels, arg1);
  },
  CONNECTION_OPEN_SUPPLEMENTAL(arg0, arg1) {
    return obj.handleConnectionOpenSupplemental(arg0, arg1);
  },
  CONNECTION_OPEN(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  },
  GUILD_CREATE(arg0, arg1) {
    return obj.handleGuildCreate(arg0, arg1);
  },
  GUILD_DELETE(arg0, arg1) {
    return obj.handleGuildDelete(arg0, arg1);
  }
};
let result = set.fileFinishedImporting("modules/app_database/modules/Channels.tsx");

export default obj;