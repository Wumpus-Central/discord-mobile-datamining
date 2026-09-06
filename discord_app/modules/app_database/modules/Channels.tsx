// discord_app/modules/app_database/modules/Channels.tsx
import ChannelRecord from "../../../records/ChannelRecord.tsx";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = ChannelRecord.createChannelRecordFromServer;
class Channels {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.privateChannels = [];
    obj.actions = {
      BACKGROUND_SYNC(arg0, arg1) {
        return obj.handleBackgroundSync(arg0, arg1);
      },
      CHANNEL_CREATE(channel, arg1) {
        return obj.putOne(channel.channel, arg1);
      },
      CHANNEL_DELETE(channel, arg1) {
        return obj.deleteOne(channel.channel.guild_id, channel.channel.id, arg1);
      },
      CHANNEL_RECIPIENT_ADD(channelId, arg1) {
        return obj.handleChannelRecipientAdd(channelId, arg1);
      },
      CHANNEL_RECIPIENT_REMOVE(channelId, arg1) {
        return obj.handleChannelRecipientRemove(channelId, arg1);
      },
      CHANNEL_UPDATES(channels, arg1) {
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
      },
    };
    return obj;
  }
}
const prototype = Channels.prototype;
prototype["handleBackgroundSync"] = function handleBackgroundSync(arg0, arg1) {
  closure_0 = arg1;
  const self = this;
  function _loop(iter) {
    const data_mode = iter.data_mode;
    if ("unavailable" !== data_mode) {
      function asRecord(item) {
        return closure_2_2(item, iter.id);
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
        let obj = { op: "update", writes: mapped, deletes: null };
        let deleted_channel_ids = iter.partial_updates.deleted_channel_ids;
        if (deleted_channel_ids == null) {
          deleted_channel_ids = [];
        }
        obj.deletes = deleted_channel_ids;
        const result = self.handleGuildSynchronize(iter.id, obj, iter);
      } else {
        obj = { op: "full_sync", items: null };
        const channels1 = iter.channels;
        obj.items = channels1.map(asRecord);
        const result1 = self.handleGuildSynchronize(iter.id, obj, iter);
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
  DatabaseDaosDefault.channelsTransaction(database).deleteAllExcept(items);
  for (const item10027 of tmp2) {
    let result = self.handleGuildSynchronize(item10027.id, item10027.channels, arg1);
    continue;
  }
  self.privateChannels = unavailableGuilds.initialPrivateChannels;
};
prototype["handleConnectionOpenSupplemental"] = function handleConnectionOpenSupplemental(lazyPrivateChannels, arg1) {
  const items = [...lazyPrivateChannels.lazyPrivateChannels];
  const replaced = this.replace(null, items, arg1);
  this.privateChannels = [];
};
prototype["handleChannelRecipientAdd"] = function handleChannelRecipientAdd(channelId, arg1) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  let isPrivateResult;
  const id = AuthenticationStore.getId();
  if (channel != null) {
    isPrivateResult = channel.isPrivate();
  }
  if (isPrivateResult) {
    const self = this;
    this.putOne(channel.addRecipient(channelId.user.id, channelId.nick, id), arg1);
  }
};
prototype["handleChannelRecipientRemove"] = function handleChannelRecipientRemove(channelId, arg1) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  let isPrivateResult;
  if (channel != null) {
    isPrivateResult = channel.isPrivate();
  }
  if (isPrivateResult) {
    const self = this;
    this.putOne(channel.removeRecipient(channelId.user.id), arg1);
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild, iter) {
  const result = this.handleGuildSynchronize(guild.guild.id, guild.guild.channels, iter);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild, arg1) {
  this.deleteManySyncUnsafe(guild.guild.id);
};
prototype["resetInMemoryState"] = function resetInMemoryState() {
  this.privateChannels = [];
};
prototype["handleGuildSynchronize"] = function handleGuildSynchronize(id, channels, iter) {
  const op = channels.op;
  if ("update" === op) {
    const channelsTransactionResult = DatabaseDaosDefault.channelsTransaction(iter);
    channelsTransactionResult.putAll(id, channels.writes);
    const deletes = channels.deletes;
    for (const item10024 of deletes) {
      let deleteResult = channelsTransactionResult.delete(arg0, item10024);
      continue;
    }
  } else if ("full_sync" === op) {
    const self = this;
    const replaced = this.replace(id, channels.items, iter);
  }
};
prototype["putOne"] = function putOne(guild_id, database) {
  DatabaseDaosDefault.channelsTransaction(database).put(guild_id.guild_id, guild_id);
};
prototype["putMany"] = function putMany(arg0, database) {
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let putResult = channelsTransactionResult.put(nextResult.guild_id, nextResult);
    continue;
  }
};
prototype["replace"] = function replace(arg0, arg1, database) {
  const replaced = DatabaseDaosDefault.channelsTransaction(database).replaceAll(arg0, arg1);
};
prototype["deleteOne"] = function deleteOne(arg0, arg1, database) {
  DatabaseDaosDefault.channelsTransaction(database).delete(arg0, arg1);
};
prototype["deleteManySyncUnsafe"] = function deleteManySyncUnsafe(id) {
  const channelsResult = DatabaseDaosDefault.channels();
  if (channelsResult != null) {
    channelsResult.deleteSyncUnsafe(id);
  }
};
let obj = Object.create(Channels.prototype);
let closure_129_0 = obj;
obj.privateChannels = [];
obj.actions = {
  BACKGROUND_SYNC(arg0, arg1) {
    return obj.handleBackgroundSync(arg0, arg1);
  },
  CHANNEL_CREATE(channel, arg1) {
    return obj.putOne(channel.channel, arg1);
  },
  CHANNEL_DELETE(channel, arg1) {
    return obj.deleteOne(channel.channel.guild_id, channel.channel.id, arg1);
  },
  CHANNEL_RECIPIENT_ADD(channelId, arg1) {
    return obj.handleChannelRecipientAdd(channelId, arg1);
  },
  CHANNEL_RECIPIENT_REMOVE(channelId, arg1) {
    return obj.handleChannelRecipientRemove(channelId, arg1);
  },
  CHANNEL_UPDATES(channels, arg1) {
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
  },
};
let result = size.fileFinishedImporting("modules/app_database/modules/Channels.tsx");

export default obj;
