// === Module 7477: modules/Messages ===

// Module 7477 (modules/Messages)
import LoggerDefault from "Logger" /* 3 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 1986 */;
import _mod1987 from "module_1987" /* 1987 */;
import requireSortedDescending from "requireSortedDescending" /* 5276 */;
import isReadableChannel from "isReadableChannel" /* 7484 */;
import KvMessage2 from "KvMessage" /* 7487 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SaveableChannelsStore from "SaveableChannelsStore" /* 7478 */;

require = fn;
let closure_8 = new LoggerDefault("Messages");
const prototype = function ChannelHistory(arr) {
  const merged = Object.assign({ connectionId: null, users: null, members: null, messages: null });
  merged[1] = [];
  merged[2] = [];
  merged[3] = [];
  if (arr.length > 0) {
    const first = arr[0];
    let connectionId;
    if (first != null) {
      connectionId = first.connectionId;
    }
    let everyResult = arr.length > 0;
    [tmp6, tmp7] = _slicedToArray(prototype.computeUsersAndMembers(arr), 2);
    if (everyResult) {
      everyResult = arr.every((connectionId) => connectionId.connectionId === connectionId);
    }
    if (everyResult) {
      merged.connectionId = connectionId;
    }
    merged.users = tmp6;
    merged.members = tmp7;
    merged.messages = arr.map((message) => message.message);
    const tmp5 = _slicedToArray(prototype.computeUsersAndMembers(arr), 2);
  }
  return merged;
}.prototype;
prototype["computeUsersAndMembers"] = function computeUsersAndMembers(arr) {
  const self = this;
  const result = requireSortedDescending.requireSortedDescending(arr);
  const map = new Map();
  map1 = new Map();
  const iter = arr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let addIntoMapResult = self.addIntoMap(map, nextResult.users, (id) => id.id);
    let addIntoMapResult1 = self.addIntoMap(map1, nextResult.members, (userId) => userId.userId);
    continue;
  }
  const items = [Array.from(map.values()), Array.from(map1.values())];
  return items;
};
prototype["addIntoMap"] = function addIntoMap(map, members, fn) {
  const iter = members[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = fn(nextResult);
    let tmp4 = tmp3;
    value = map.get(tmp3);
    let tmp7 = null == value;
    if (!tmp7) {
      let incomplete = tmp6.incomplete;
      if (incomplete) {
        incomplete = !tmp2.incomplete;
      }
      tmp7 = incomplete;
    }
    if (tmp7) {
      let result = map.set(tmp4, tmp2);
    }
    continue;
  }
};
class Messages {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.actions = {
      CHANNEL_DELETE(arg0, arg1) {
            return obj.handleChannelDelete(arg0, arg1);
          },
      GUILD_DELETE(arg0, arg1) {
            return obj.handleGuildDelete(arg0, arg1);
          },
      LOAD_MESSAGES_SUCCESS(arg0, arg1) {
            return obj.handleLoadMessagesSuccess(arg0, arg1);
          },
      MESSAGE_CREATE(arg0, arg1) {
            return obj.handleMessageCreate(arg0, arg1);
          },
      MESSAGE_DELETE_BULK(arg0, arg1) {
            return obj.handleMessageDeleteBulk(arg0, arg1);
          },
      MESSAGE_DELETE(arg0, arg1) {
            return obj.handleMessageDelete(arg0, arg1);
          },
      MESSAGE_PREVIEWS_LOADED(arg0, arg1) {
            return obj.handleMessagePreviewsLoaded(arg0, arg1);
          },
      MESSAGE_UPDATE(arg0, arg1) {
            return obj.handleMessageUpdate(arg0, arg1);
          }
    };
    return obj;
  }
}
const prototype2 = Messages.prototype;
prototype2["startupLoad"] = function startupLoad(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  asyncGeneratorStep = arg3;
  return (async () => {
    closure_0 = tmp2;
    await tmp5(c2[7]).messages(closure_0).getLatest(tmp5, closure_2, closure_3);
    closure_128_0 = value;
    return new prototype(closure_128_0);
  })();
};
prototype2["load"] = function load(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            basicChannel = basicChannel.getBasicChannel(tmp5);
            if (null != tmp5) {
              if (null != basicChannel) {
                let obj2 = tmp2(c2[8]);
                if (obj2.isReadableChannel(basicChannel)) {
                  const obj5 = tmp5(tmp12[7]);
                  c2 = 1;
                  c3 = 1;
                  const obj1 = { value: tmp5(tmp12[7]).messages(tmp2).getLatest(basicChannel.guild_id, tmp5, closure_2), done: false };
                  return obj1;
                }
                tmp12 = c2;
              }
            }
            c3 = 3;
            obj2 = { value: new prototype([]), done: true };
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_128_0 = value;
          c3 = 3;
          obj = { value: new prototype(closure_128_0), done: true };
          return obj;
        }
      } catch (tmp18) {
        c3 = tmp;
        throw tmp18;
      }
    }
  })();
};
prototype2["handleMessageCreate"] = function handleMessageCreate(optimistic, database) {
  let tmp = optimistic.optimistic || optimistic.isPushNotification;
  if (!tmp) {
    tmp = null != optimistic.sendMessageOptions;
  }
  if (!tmp) {
    if (obj.isReadableChannelId(optimistic.channelId)) {
      const self = this;
      const self2 = this;
      this.upsertOne(optimistic.guildId, optimistic.channelId, optimistic.message, database);
    }
    obj = isReadableChannel;
  }
};
prototype2["handleMessageUpdate"] = function handleMessageUpdate(message, database) {
  let isReadableChannelIdResult = null != message.message.id && null != message.message.channel_id;
  if (isReadableChannelIdResult) {
    isReadableChannelIdResult = isReadableChannel.isReadableChannelId(message.message.channel_id);
  }
  if (isReadableChannelIdResult) {
    message = message.message;
    const self = this;
    if (tmp4) {
      self.upsertOne(message.guildId, message.message.channel_id, message.message, database);
    } else {
      self.updateOne(message.guildId, message.message.channel_id, message.message, database);
    }
    tmp4 = null != message.author && null != message.content && null != message.mentions && null != message.timestamp;
  }
};
prototype2["handleMessagePreviewsLoaded"] = function handleMessagePreviewsLoaded(guildId, database) {
  const self = this;
  for (const item10009 of tmp) {
    let obj = isReadableChannel;
    if (obj.isReadableChannelId(item10009.channel_id)) {
      let insertStaleResult = self.insertStale(arg0.guildId, item10009.channel_id, item10009, arg1);
    }
    continue;
  }
};
prototype2["handleLoadMessagesSuccess"] = function handleLoadMessagesSuccess(channelId, database) {
  const basicChannel = ChannelStore.getBasicChannel(channelId.channelId);
  if (null != basicChannel) {
    if (obj.isReadableChannelId(channelId.channelId)) {
      const self = this;
      if (!channelId.isAfter) {
        if (!channelId.isBefore) {
          if (!channelId.hasMoreAfter) {
            if (channelId.limit > 5) {
              self.replaceChannel(basicChannel.guild_id, channelId.channelId, channelId.messages, database);
            }
          }
        }
      }
      self.upsertMany(basicChannel.guild_id, channelId.channelId, channelId.messages, database);
    }
    obj = isReadableChannel;
  }
};
prototype2["handleMessageDelete"] = function handleMessageDelete(id, arg1) {
  if (null != id.id) {
    const self = this;
    const self2 = this;
    this.deleteOne(id.guildId, id.channelId, id.id, arg1);
  }
};
prototype2["handleMessageDeleteBulk"] = function handleMessageDeleteBulk(guildId, arg1) {
  const self = this;
  for (const item10008 of tmp) {
    let deleteOneResult = self.deleteOne(arg0.guildId, arg0.channelId, item10008, arg1);
    continue;
  }
};
prototype2["handleChannelDelete"] = function handleChannelDelete(channel, arg1) {
  this.deleteChannel(channel.channel.guild_id, channel.channel.id, arg1);
};
prototype2["handleGuildDelete"] = function handleGuildDelete(guild, arg1) {
  if (!guild.guild.unavailable) {
    const self = this;
    this.deleteGuild(guild.guild.id, arg1);
  }
};
prototype2["resetInMemoryState"] = function resetInMemoryState() {

};
prototype2["insertStale"] = function insertStale(guildId, channel_id, item10009, database) {
  const result = GatewayConnectionStore.lastTimeConnectedChanged();
  const KvMessage = KvMessage2.KvMessage;
  const messagesTransactionResult = DatabaseDaosDefault.messagesTransaction(database);
  messagesTransactionResult.put(guildId, channel_id, KvMessage.fromMessage(guildId, channel_id, item10009, result), _mod1987.ConflictOptions.Skip);
};
prototype2["upsertOne"] = function upsertOne(guildId, channelId, message, database) {
  const messagesTransactionResult = DatabaseDaosDefault.messagesTransaction(database);
  const result = GatewayConnectionStore.lastTimeConnectedChanged();
  const KvMessage = KvMessage2.KvMessage;
  messagesTransactionResult.put(guildId, channelId, KvMessage.fromMessage(guildId, channelId, message, result), _mod1987.ConflictOptions.Replace);
  messagesTransactionResult.trimChannel(guildId, channelId, SaveableChannelsStore.saveLimit(channelId));
};
prototype2["upsertMany"] = function upsertMany(guild_id, channelId, messages, database) {
  const messagesTransactionResult = DatabaseDaosDefault.messagesTransaction(database);
  const result = GatewayConnectionStore.lastTimeConnectedChanged();
  const iter = messages[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let KvMessage = KvMessage2.KvMessage;
    let putResult = messagesTransactionResult.put(guild_id, channelId, KvMessage.fromMessage(guild_id, channelId, nextResult, result));
    continue;
  }
  messagesTransactionResult.trimChannel(guild_id, channelId, SaveableChannelsStore.saveLimit(channelId));
};
prototype2["replaceChannel"] = function replaceChannel(arg0, channelId, arr, database) {
  closure_0 = arg0;
  importDefault = channelId;
  const messagesTransactionResult = DatabaseDaosDefault.messagesTransaction(database);
  dependencyMap = GatewayConnectionStore.lastTimeConnectedChanged();
  const saveLimitResult = SaveableChannelsStore.saveLimit(channelId);
  let substr = arr;
  if (arr.length > saveLimitResult) {
    substr = arr.slice(arr.length - saveLimitResult);
  }
  messagesTransactionResult.replaceChannel(arg0, channelId, substr.map((item) => {
    const KvMessage = KvMessage2.KvMessage;
    return KvMessage.fromMessage(closure_0, closure_1, item, closure_2);
  }));
  messagesTransactionResult.trimChannel(arg0, channelId, SaveableChannelsStore.saveLimit(channelId));
};
prototype2["updateOne"] = function updateOne(guildId, channel_id, message, database) {
  closure_0 = guildId;
  closure_1 = channel_id;
  closure_2 = message;
  asyncGeneratorStep = database;
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === user) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            if (null != user.id) {
              let obj1 = tmp5(user[7]);
              const messagesResult = obj1.messages(database.database);
              closure_128_0 = messagesResult;
              user = 1;
              c3 = 1;
              obj1 = { value: messagesResult.get(tmp2, tmp5, user.id), done: false };
              return obj1;
            } else {
              logger.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_1 = value;
          closure_128_2 = GatewayConnectionStore.lastTimeConnectedChanged();
          if (null != closure_128_1) {
            const KvMessage = tmp2(user[9]).KvMessage;
            const obj2 = {};
            const merged = Object.assign(closure_128_1.message);
            const merged1 = Object.assign(closure_129_2);
            closure_128_0.put(closure_129_0, closure_129_1, KvMessage.fromMessage(closure_129_0, closure_129_1, obj2, closure_128_2));
          }
        }
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp14) {
        c3 = tmp;
        throw tmp14;
      }
    }
  })();
};
prototype2["deleteOne"] = function deleteOne(arg0, arg1, arg2, database) {
  DatabaseDaosDefault.messagesTransaction(database).deleteMessage(arg0, arg1, arg2);
};
prototype2["deleteChannel"] = function deleteChannel(arg0, arg1, database) {
  DatabaseDaosDefault.messagesTransaction(database).deleteChannel(arg0, arg1);
};
prototype2["deleteGuild"] = function deleteGuild(arg0, database) {
  DatabaseDaosDefault.messagesTransaction(database).deleteGuild(arg0);
};
let size = Object.create(Messages.prototype);
let closure_129_0 = size;
size.actions = {
  CHANNEL_DELETE(arg0, arg1) {
    return obj.handleChannelDelete(arg0, arg1);
  },
  GUILD_DELETE(arg0, arg1) {
    return obj.handleGuildDelete(arg0, arg1);
  },
  LOAD_MESSAGES_SUCCESS(arg0, arg1) {
    return obj.handleLoadMessagesSuccess(arg0, arg1);
  },
  MESSAGE_CREATE(arg0, arg1) {
    return obj.handleMessageCreate(arg0, arg1);
  },
  MESSAGE_DELETE_BULK(arg0, arg1) {
    return obj.handleMessageDeleteBulk(arg0, arg1);
  },
  MESSAGE_DELETE(arg0, arg1) {
    return obj.handleMessageDelete(arg0, arg1);
  },
  MESSAGE_PREVIEWS_LOADED(arg0, arg1) {
    return obj.handleMessagePreviewsLoaded(arg0, arg1);
  },
  MESSAGE_UPDATE(arg0, arg1) {
    return obj.handleMessageUpdate(arg0, arg1);
  }
};
size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/Messages.tsx");

export default size;
export const ChannelHistory = prototype;
export const isLikelyNotDelta = function isLikelyNotDelta(author) {
  return null != author.author && null != author.content && null != author.mentions && null != author.timestamp;
};