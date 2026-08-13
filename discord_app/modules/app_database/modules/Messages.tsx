// discord_app/modules/app_database/modules/Messages.tsx
import timestamp from "timestamp";
import _slicedToArray from "_slicedToArray";
import _handleConnectionOpen from "_handleConnectionOpen";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleSelectedChannelStoreChanged from "handleSelectedChannelStoreChanged";
import set from "_handleConnectionOpen";
import { items } from "../DatabaseDaos.tsx";

const metroImportAll = new require("ensureGuildLoaded")("Messages");
let prototype;
prototype = function ChannelHistory(arr) {
  let tmp6;
  let tmp7;
  const obj = Object.create(new.target.prototype);
  obj[1] = [];
  obj[2] = [];
  obj[3] = [];
  if (arr.length > 0) {
    const first = arr[0];
    let connectionId;
    if (first != null) {
      connectionId = first.connectionId;
    }
    let everyResult = arr.length > 0;
    [tmp6, tmp7] = callback2(prototype.computeUsersAndMembers(arr), 2);
    if (everyResult) {
      everyResult = arr.every((connectionId) => connectionId.connectionId === connectionId);
    }
    if (everyResult) {
      obj.connectionId = connectionId;
    }
    obj.users = tmp6;
    obj.members = tmp7;
    obj.messages = arr.map((message) => message.message);
    const tmp5 = callback2(prototype.computeUsersAndMembers(arr), 2);
  }
  return obj;
}.prototype;
prototype["computeUsersAndMembers"] = function computeUsersAndMembers(arr) {
  const self = this;
  obj = obj(5034);
  const result = obj.requireSortedDescending(arr);
  const map = new Map();
  const map1 = new Map();
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
prototype["addIntoMap"] = function addIntoMap(map, members, arg2) {
  const iter = members[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = arg2(nextResult);
    let tmp4 = tmp3;
    let value = map.get(tmp3);
    let tmp7 = null == value;
    if (!tmp7) {
      let tmp8 = value;
      let incomplete = tmp6.incomplete;
      if (incomplete) {
        let tmp9 = nextResult;
        incomplete = !tmp2.incomplete;
      }
      tmp7 = incomplete;
    }
    if (tmp7) {
      let tmp10 = tmp3;
      let tmp11 = nextResult;
      let result = map.set(tmp4, tmp2);
    }
    continue;
  }
};
class Messages {
  constructor() {
    obj = Object.create(new.target.prototype);
    Messages = obj;
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
prototype2["startupLoad"] = function startupLoad(arg0, arg1, arg2, outer1_9) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const callback = outer1_9;
  return callback(function*() {
    let closure_1 = tmp5;
    let closure_0 = tmp2;
    const obj2 = outer1_1(table[7]);
    closure_0 = yield obj2.messages(outer1_0).getLatest(outer1_1, table, c3);
    return new outer1_9(closure_0);
  })();
};
prototype2["load"] = function load(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            const basicChannel = outer1_6.getBasicChannel(outer1_1);
            if (null != outer1_1) {
              if (null != basicChannel) {
                let obj2 = outer1_0(table[8]);
                if (obj2.isReadableChannel(basicChannel)) {
                  const obj5 = outer1_1(tmp12[7]);
                  table = 1;
                  c3 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = outer1_1(tmp12[7]).messages(outer1_0).getLatest(basicChannel.guild_id, outer1_1, table);
                  return obj1;
                }
                tmp12 = table;
              }
            }
            c3 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = new outer1_9([]);
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          closure_0 = arg1;
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = new outer1_9(closure_0);
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
    obj = obj(6991);
    if (obj.isReadableChannelId(optimistic.channelId)) {
      const self = this;
      const self2 = this;
      this.upsertOne(optimistic.guildId, optimistic.channelId, optimistic.message, database);
    }
  }
};
prototype2["handleMessageUpdate"] = function handleMessageUpdate(message, database) {
  let isReadableChannelIdResult = null != message.message.id && null != message.message.channel_id;
  if (isReadableChannelIdResult) {
    obj = obj(6991);
    isReadableChannelIdResult = obj.isReadableChannelId(message.message.channel_id);
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
    let tmp2 = item10009;
    let tmp3 = obj;
    let tmp4 = dependencyMap;
    let obj = obj(6991);
    if (obj.isReadableChannelId(item10009.channel_id)) {
      let tmp5 = item10009;
      let tmp6 = self;
      let tmp7 = tmp2;
      let tmp8 = arg1;
      let insertStaleResult = self.insertStale(arg0.guildId, tmp2.channel_id, item10009, arg1);
    }
    continue;
  }
};
prototype2["handleLoadMessagesSuccess"] = function handleLoadMessagesSuccess(channelId, database) {
  basicChannel = basicChannel.getBasicChannel(channelId.channelId);
  if (null != basicChannel) {
    obj = obj(6991);
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
  }
};
prototype2["handleMessageDelete"] = function handleMessageDelete(id) {
  if (null != id.id) {
    const self = this;
    const self2 = this;
    this.deleteOne(id.guildId, id.channelId, id.id, arg1);
  }
};
prototype2["handleMessageDeleteBulk"] = function handleMessageDeleteBulk(guildId) {
  const self = this;
  for (const item10008 of tmp) {
    let tmp2 = self;
    let tmp3 = item10008;
    let tmp4 = arg1;
    let deleteOneResult = self.deleteOne(arg0.guildId, arg0.channelId, item10008, arg1);
    continue;
  }
};
prototype2["handleChannelDelete"] = function handleChannelDelete(channel) {
  this.deleteChannel(channel.channel.guild_id, channel.channel.id, arg1);
};
prototype2["handleGuildDelete"] = function handleGuildDelete(guild) {
  if (!guild.guild.unavailable) {
    const self = this;
    this.deleteGuild(guild.guild.id, arg1);
  }
};
prototype2["resetInMemoryState"] = function resetInMemoryState() {

};
prototype2["insertStale"] = function insertStale(guildId, channel_id, item10009, database) {
  const obj = items;
  const result = _handleConnectionOpen.lastTimeConnectedChanged();
  const KvMessage = obj(6994).KvMessage;
  const messagesTransactionResult = obj.messagesTransaction(database);
  messagesTransactionResult.put(guildId, channel_id, KvMessage.fromMessage(guildId, channel_id, item10009, result), obj(1956).ConflictOptions.Skip);
};
prototype2["upsertOne"] = function upsertOne(guildId, channelId, message, database) {
  const obj = items;
  const messagesTransactionResult = obj.messagesTransaction(database);
  const result = _handleConnectionOpen.lastTimeConnectedChanged();
  const KvMessage = obj(6994).KvMessage;
  messagesTransactionResult.put(guildId, channelId, KvMessage.fromMessage(guildId, channelId, message, result), obj(1956).ConflictOptions.Replace);
  messagesTransactionResult.trimChannel(guildId, channelId, handleSelectedChannelStoreChanged.saveLimit(channelId));
};
prototype2["upsertMany"] = function upsertMany(guild_id, channelId, messages, database) {
  const obj = items;
  const messagesTransactionResult = obj.messagesTransaction(database);
  const result = _handleConnectionOpen.lastTimeConnectedChanged();
  const iter = messages[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = obj;
    let tmp4 = dependencyMap;
    let KvMessage = obj(6994).KvMessage;
    let tmp5 = KvMessage;
    let tmp6 = guild_id;
    let tmp7 = channelId;
    let tmp8 = nextResult;
    let tmp9 = result;
    let putResult = messagesTransactionResult.put(guild_id, channelId, KvMessage.fromMessage(guild_id, channelId, nextResult, result));
    continue;
  }
  messagesTransactionResult.trimChannel(guild_id, channelId, handleSelectedChannelStoreChanged.saveLimit(channelId));
};
prototype2["replaceChannel"] = function replaceChannel(arg0, channelId, arr, database) {
  let closure_0 = arg0;
  const importDefault = channelId;
  const messagesTransactionResult = items.messagesTransaction(database);
  const dependencyMap = _handleConnectionOpen.lastTimeConnectedChanged();
  const saveLimitResult = handleSelectedChannelStoreChanged.saveLimit(channelId);
  let substr = arr;
  if (arr.length > saveLimitResult) {
    substr = arr.slice(arr.length - saveLimitResult);
  }
  messagesTransactionResult.replaceChannel(arg0, channelId, substr.map((nextResult) => {
    const KvMessage = callback(table[9]).KvMessage;
    return KvMessage.fromMessage(callback, closure_1, nextResult, table);
  }));
  messagesTransactionResult.trimChannel(arg0, channelId, handleSelectedChannelStoreChanged.saveLimit(channelId));
};
prototype2["updateOne"] = function updateOne(guildId, channel_id, message, database) {
  let closure_0 = guildId;
  let closure_1 = channel_id;
  let closure_2 = message;
  const callback = database;
  return callback(function*() {
    if (database === 2) {
      database = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        database = 2;
        if (0 === closure_2) {
          if (arg0 === 1) {
            database = 3;
            throw arg1;
          } else if (arg0 === 2) {
            database = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let message = tmp5;
            let c0 = tmp2;
            c0 = undefined;
            message = undefined;
            closure_2 = undefined;
            if (null != user.id) {
              let obj1 = outer1_1(user[7]);
              const messagesResult = obj1.messages(database.database);
              c0 = messagesResult;
              closure_2 = 1;
              database = 1;
              obj1 = { value: null, done: false };
              obj1[0] = messagesResult.get(outer1_0, outer1_1, user.id);
              return obj1;
            } else {
              outer1_8.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
              database = 3;
            }
          }
        } else if (arg0 === 1) {
          database = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          message = arg1;
          closure_2 = outer1_5.lastTimeConnectedChanged();
          if (null != message) {
            const KvMessage = outer1_0(user[9]).KvMessage;
            const obj2 = {};
            const merged = Object.assign(message.message);
            const merged1 = Object.assign(closure_2);
            c0.put(c0, message, KvMessage.fromMessage(c0, message, obj2, closure_2));
          }
        }
        database = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp14) {
        database = tmp;
        throw tmp14;
      }
    }
  })();
};
prototype2["deleteOne"] = function deleteOne(arg0, arg1, arg2, database) {
  const obj = items;
  items.messagesTransaction(database).deleteMessage(arg0, arg1, arg2);
};
prototype2["deleteChannel"] = function deleteChannel(arg0, arg1, database) {
  const obj = items;
  items.messagesTransaction(database).deleteChannel(arg0, arg1);
};
prototype2["deleteGuild"] = function deleteGuild(arg0, database) {
  const obj = items;
  items.messagesTransaction(database).deleteGuild(arg0);
};
let set = Object.create(Messages.prototype);
set.actions = {
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
let result = set.fileFinishedImporting("modules/app_database/modules/Messages.tsx");

export default set;
export const ChannelHistory = prototype;
export const isLikelyNotDelta = function isLikelyNotDelta(author) {
  return null != author.author && null != author.content && null != author.mentions && null != author.timestamp;
};