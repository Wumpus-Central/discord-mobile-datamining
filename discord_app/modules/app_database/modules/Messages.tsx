// === Module 6986: modules/Messages ===

// Module 6986 (modules/Messages)
import LoggerDefault from "Logger" /* 3 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 2078 */;
import _mod2079 from "module_2079" /* 2079 */;
import requireSortedDescending from "requireSortedDescending" /* 5435 */;
import isReadableChannel from "isReadableChannel" /* 6993 */;
import KvMessage2 from "KvMessage" /* 6996 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SaveableChannelsStore from "SaveableChannelsStore" /* 6987 */;
import size from "module_2" /* 2 */;

let c2, c3, dependencyMap, importDefault;

let _asyncToGenerator = _asyncToGenerator_mod;
let tmp2 = new LoggerDefault("Messages");
let closure_8 = tmp2;
class ChannelHistory {
  constructor(arr) {
    let tmp6;
    let tmp7;
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
      [tmp6, tmp7] = ChannelHistory.computeUsersAndMembers(arr);
      _slicedToArray(ChannelHistory.computeUsersAndMembers(arr), 2);
      if (everyResult) {
        everyResult = arr.every((connectionId) => connectionId.connectionId === connectionId);
      }
      if (everyResult) {
        merged.connectionId = connectionId;
      }
      merged.users = tmp6;
      merged.members = tmp7;
      merged.messages = arr.map((message) => message.message);
    }
    return merged;
  }
  static computeUsersAndMembers(arr) {
    const self = this;
    const obj = requireSortedDescending;
    const result = obj.requireSortedDescending(arr);
    map = new Map();
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
  }
  static addIntoMap(map, members, fn) {
    const iter = members[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = fn(nextResult);
      let tmp4 = tmp3;
      let value = map.get(tmp3);
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
  }
}
class Messages {
  constructor() {
    const obj = Object.create(new.target.prototype);
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
  startupLoad(arg0, arg1, arg2, arg3) {
    let closure_3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    _asyncToGenerator = arg3;
    return (async function() {
      let messagesResult;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = undefined;
              const obj3 = tmp4(c2[7]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: messagesResult.getLatest(tmp4, closure_2, closure_3), done: false };
              messagesResult = obj3.messages(closure_0);
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = value;
            const self = this;
            c3 = 3;
            const obj = { value: new ChannelHistory(closure_0), done: true };
            return obj;
          }
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    })();
  }
  load(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async function() {
      let basicChannel;
      let messagesResult;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              tmp = undefined;
              basicChannel = basicChannel.getBasicChannel(tmp4);
              if (null != tmp4) {
                if (null != basicChannel) {
                  const obj3 = tmp(c2[8]);
                  const tmp10 = c2;
                  if (obj3.isReadableChannel(basicChannel)) {
                    const obj5 = tmp4(tmp10[7]);
                    c2 = 1;
                    c3 = 1;
                    const obj6 = { value: messagesResult.getLatest(basicChannel.guild_id, tmp4, closure_2), done: false };
                    messagesResult = obj5.messages(tmp);
                    return obj6;
                  }
                }
              }
              const self2 = this;
              c3 = 3;
              const obj7 = { value: new ChannelHistory([]), done: true };
              return obj7;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            tmp = value;
            const self = this;
            c3 = 3;
            const obj = { value: new ChannelHistory(tmp), done: true };
            return obj;
          }
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    })();
  }
  handleMessageCreate(optimistic, database) {
    const tmp = optimistic.optimistic || optimistic.isPushNotification || null != optimistic.sendMessageOptions;
    if (!tmp) {
      const obj = isReadableChannel;
      if (obj.isReadableChannelId(optimistic.channelId)) {
        const self = this;
        const self2 = this;
        this.upsertOne(optimistic.guildId, optimistic.channelId, optimistic.message, database);
      }
    }
  }
  handleMessageUpdate(message, database) {
    let isReadableChannelIdResult = null != message.message.id && null != message.message.channel_id;
    if (isReadableChannelIdResult) {
      const obj = isReadableChannel;
      isReadableChannelIdResult = obj.isReadableChannelId(message.message.channel_id);
    }
    if (isReadableChannelIdResult) {
      message = message.message;
      const self = this;
      const tmp4 = null != message.author && null != message.content && null != message.mentions && null != message.timestamp;
      if (tmp4) {
        self.upsertOne(message.guildId, message.message.channel_id, message.message, database);
      } else {
        self.updateOne(message.guildId, message.message.channel_id, message.message, database);
      }
    }
  }
  handleMessagePreviewsLoaded(messages, database) {
    const self = this;
    messages = messages.messages;
    for (const item10009 of messages) {
      let obj = isReadableChannel;
      if (obj.isReadableChannelId(item10009.channel_id)) {
        let insertStaleResult = self.insertStale(messages.guildId, item10009.channel_id, item10009, database);
      }
      continue;
    }
  }
  handleLoadMessagesSuccess(channelId, database) {
    const basicChannel = ChannelStore.getBasicChannel(channelId.channelId);
    if (null != basicChannel) {
      const obj = isReadableChannel;
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
  }
  handleMessageDelete(id, arg1) {
    if (null != id.id) {
      const self = this;
      const self2 = this;
      this.deleteOne(id.guildId, id.channelId, id.id, arg1);
    }
  }
  handleMessageDeleteBulk(ids, arg1) {
    const self = this;
    ids = ids.ids;
    for (const item10008 of ids) {
      let deleteOneResult = self.deleteOne(ids.guildId, ids.channelId, item10008, arg1);
      continue;
    }
  }
  handleChannelDelete(channel, arg1) {
    this.deleteChannel(channel.channel.guild_id, channel.channel.id, arg1);
  }
  handleGuildDelete(guild, arg1) {
    if (!guild.guild.unavailable) {
      const self = this;
      this.deleteGuild(guild.guild.id, arg1);
    }
  }
  resetInMemoryState() {

  }
  insertStale(guildId, channel_id, item10009, database) {
    const obj = DatabaseDaosDefault;
    const messagesTransactionResult = obj.messagesTransaction(database);
    const result = GatewayConnectionStore.lastTimeConnectedChanged();
    const put = messagesTransactionResult.put;
    const KvMessage = KvMessage2.KvMessage;
    const fromMessageResult = KvMessage.fromMessage(guildId, channel_id, item10009, result);
    put(guildId, channel_id, fromMessageResult, _mod2079.ConflictOptions.Skip);
  }
  upsertOne(guildId, channelId, message, database) {
    const obj = DatabaseDaosDefault;
    const messagesTransactionResult = obj.messagesTransaction(database);
    const result = GatewayConnectionStore.lastTimeConnectedChanged();
    const put = messagesTransactionResult.put;
    const KvMessage = KvMessage2.KvMessage;
    const fromMessageResult = KvMessage.fromMessage(guildId, channelId, message, result);
    put(guildId, channelId, fromMessageResult, _mod2079.ConflictOptions.Replace);
    messagesTransactionResult.trimChannel(guildId, channelId, SaveableChannelsStore.saveLimit(channelId));
  }
  upsertMany(guild_id, channelId, messages, database) {
    const obj = DatabaseDaosDefault;
    const messagesTransactionResult = obj.messagesTransaction(database);
    const result = GatewayConnectionStore.lastTimeConnectedChanged();
    const iter = messages[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let put = messagesTransactionResult.put;
      let KvMessage = KvMessage2.KvMessage;
      let putResult = put(guild_id, channelId, KvMessage.fromMessage(guild_id, channelId, nextResult, result));
      continue;
    }
    messagesTransactionResult.trimChannel(guild_id, channelId, SaveableChannelsStore.saveLimit(channelId));
  }
  replaceChannel(arg0, channelId, arr, database) {
    let closure_2;
    let closure_0 = arg0;
    importDefault = channelId;
    const obj = DatabaseDaosDefault;
    const messagesTransactionResult = obj.messagesTransaction(database);
    dependencyMap = GatewayConnectionStore.lastTimeConnectedChanged();
    const saveLimitResult = SaveableChannelsStore.saveLimit(channelId);
    let substr = arr;
    if (arr.length > saveLimitResult) {
      substr = arr.slice(arr.length - saveLimitResult);
    }
    messagesTransactionResult.replaceChannel(arg0, channelId, substr.map((item) => {
      const KvMessage = KvMessage2.KvMessage;
      return KvMessage.fromMessage(closure_0, channelId, item, closure_2);
    }));
    messagesTransactionResult.trimChannel(arg0, channelId, SaveableChannelsStore.saveLimit(channelId));
  }
  updateOne(guildId, channel_id, message, database) {
    let closure_0 = guildId;
    let closure_1 = channel_id;
    let closure_2 = message;
    _asyncToGenerator = database;
    return (async () => {
      let closure_0;
      let closure_1;
      let user;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          let tmp4;
          c3 = 2;
          if (0 === user) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              tmp = undefined;
              tmp4 = undefined;
              user = undefined;
              if (null != user.id) {
                const obj2 = tmp4(user[7]);
                const messagesResult = obj2.messages(database.database);
                tmp = messagesResult;
                user = 1;
                c3 = 1;
                const obj5 = { value: messagesResult.get(tmp, tmp4, user.id), done: false };
                return obj5;
              } else {
                logger.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp4 = value;
            user = GatewayConnectionStore.lastTimeConnectedChanged();
            if (null != tmp4) {
              const put = tmp.put;
              const KvMessage = tmp(user[9]).KvMessage;
              const obj6 = {};
              const fromMessage = KvMessage.fromMessage;
              const merged = Object.assign(tmp4.message);
              const merged1 = Object.assign(closure_129_2);
              put(closure_129_0, closure_129_1, fromMessage(closure_129_0, closure_129_1, obj6, user));
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    })();
  }
  deleteOne(arg0, arg1, arg2, database) {
    const obj = DatabaseDaosDefault;
    const messagesTransactionResult = obj.messagesTransaction(database);
    messagesTransactionResult.deleteMessage(arg0, arg1, arg2);
  }
  deleteChannel(arg0, arg1, database) {
    const obj = DatabaseDaosDefault;
    const messagesTransactionResult = obj.messagesTransaction(database);
    messagesTransactionResult.deleteChannel(arg0, arg1);
  }
  deleteGuild(arg0, database) {
    const obj = DatabaseDaosDefault;
    const messagesTransactionResult = obj.messagesTransaction(database);
    messagesTransactionResult.deleteGuild(arg0);
  }
}
const prototype = Messages.prototype;
let obj = Object.create(Messages.prototype);
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
let result = size.fileFinishedImporting("modules/app_database/modules/Messages.tsx");

export default obj;
export { ChannelHistory };
export const isLikelyNotDelta = function isLikelyNotDelta(author) {
  return null != author.author && null != author.content && null != author.mentions && null != author.timestamp;
};