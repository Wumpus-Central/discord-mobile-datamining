// discord_app/modules/app_database/modules/Channels.tsx
import ChannelRecord from "../../../records/ChannelRecord.tsx";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = ChannelRecord.createChannelRecordFromServer;
class Channels {
  constructor() {
    const obj = Object.create(new.target.prototype);
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
  handleBackgroundSync(arg0, arg1) {
    let closure_0 = arg1;
    const self = this;
    function _loop(iter) {
      let channels1;
      let deleted_channel_ids;
      closure_0 = iter;
      const data_mode = iter.data_mode;
      if ("unavailable" !== data_mode) {
        function asRecord(item) {
          return closure_2_2(item, id.id);
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
          const obj2 = { op: "update", writes: mapped, deletes: deleted_channel_ids };
          deleted_channel_ids = iter.partial_updates.deleted_channel_ids;
          if (deleted_channel_ids == null) {
            deleted_channel_ids = [];
          }
          const result = self.handleGuildSynchronize(iter.id, obj2, closure_0);
        } else {
          const obj = { op: "full_sync", items: channels1.map(asRecord) };
          channels1 = iter.channels;
          const result1 = self.handleGuildSynchronize(iter.id, obj, closure_0);
        }
      }
    }
    const iter = arg0.guilds[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
  }
  handleConnectionOpen(unavailableGuilds, database) {
    const self = this;
    const items = [...unavailableGuilds.unavailableGuilds];
    const obj = DatabaseDaosDefault;
    const channelsTransactionResult = obj.channelsTransaction(database);
    channelsTransactionResult.deleteAllExcept(items);
    const guilds = unavailableGuilds.guilds;
    for (const item10027 of guilds) {
      let result = self.handleGuildSynchronize(item10027.id, item10027.channels, database);
      continue;
    }
    self.privateChannels = unavailableGuilds.initialPrivateChannels;
  }
  handleConnectionOpenSupplemental(lazyPrivateChannels, arg1) {
    const items = [...lazyPrivateChannels.lazyPrivateChannels];
    const replaced = this.replace(null, items, arg1);
    this.privateChannels = [];
  }
  handleChannelRecipientAdd(channelId, arg1) {
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
  }
  handleChannelRecipientRemove(channelId, arg1) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let isPrivateResult;
    if (channel != null) {
      isPrivateResult = channel.isPrivate();
    }
    if (isPrivateResult) {
      const self = this;
      this.putOne(channel.removeRecipient(channelId.user.id), arg1);
    }
  }
  handleGuildCreate(guild, iter) {
    const result = this.handleGuildSynchronize(guild.guild.id, guild.guild.channels, iter);
  }
  handleGuildDelete(guild, arg1) {
    this.deleteManySyncUnsafe(guild.guild.id);
  }
  resetInMemoryState() {
    this.privateChannels = [];
  }
  handleGuildSynchronize(id, channels, iter) {
    const op = channels.op;
    if ("update" === op) {
      const obj = DatabaseDaosDefault;
      const channelsTransactionResult = obj.channelsTransaction(iter);
      channelsTransactionResult.putAll(id, channels.writes);
      const deletes = channels.deletes;
      for (const item10024 of deletes) {
        let deleteResult = channelsTransactionResult.delete(id, item10024);
        continue;
      }
    } else if ("full_sync" === op) {
      const self = this;
      const replaced = this.replace(id, channels.items, iter);
    }
  }
  putOne(guild_id, database) {
    const obj = DatabaseDaosDefault;
    const channelsTransactionResult = obj.channelsTransaction(database);
    channelsTransactionResult.put(guild_id.guild_id, guild_id);
  }
  putMany(arg0, database) {
    const obj = DatabaseDaosDefault;
    const channelsTransactionResult = obj.channelsTransaction(database);
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let putResult = channelsTransactionResult.put(nextResult.guild_id, nextResult);
      continue;
    }
  }
  replace(arg0, arg1, database) {
    const obj = DatabaseDaosDefault;
    const channelsTransactionResult = obj.channelsTransaction(database);
    const replaced = channelsTransactionResult.replaceAll(arg0, arg1);
  }
  deleteOne(arg0, arg1, database) {
    const obj = DatabaseDaosDefault;
    const channelsTransactionResult = obj.channelsTransaction(database);
    channelsTransactionResult.delete(arg0, arg1);
  }
  deleteManySyncUnsafe(id) {
    const obj = DatabaseDaosDefault;
    const channelsResult = obj.channels();
    if (channelsResult != null) {
      channelsResult.deleteSyncUnsafe(id);
    }
  }
}
const prototype = Channels.prototype;
let obj = Object.create(Channels.prototype);
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
