// === Module 7306: ThreadMessageStore ===

// Module 7306 (ThreadMessageStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import ThreadConstants from "ThreadConstants" /* 1113 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4783 */;
import ChannelRecord from "ChannelRecord" /* 1961 */;
import MessageRecord from "MessageRecord" /* 4210 */;
import UserRecord from "UserRecord" /* 1385 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MessageStore from "MessageStore" /* 4781 */;
import size from "module_2" /* 2 */;

function updateState(type, fn) {
  if (set.has(type.type)) {
    if (!(type.id in dependencyMap)) {
      const obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
      ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = type);
      if (messageCount == null) {
        messageCount = 0;
      }
      obj.count = messageCount;
      dependencyMap[type.id] = obj;
    }
    let num = dependencyMap2[tmp5.parentId];
    if (num == null) {
      num = 0;
    }
    dependencyMap2[dependencyMap[type.id].parentId] = num + 1;
    fn(dependencyMap[type.id]);
  }
}
function updateFromGuild(threads) {
  threads = threads.threads;
  if (threads != null) {
    const item = threads.forEach(updateFromThread);
  }
  const threadMessages = threads.threadMessages;
  if (threadMessages != null) {
    const item1 = threadMessages.forEach(updateFromThreadMessages);
  }
}
function updateFromThreadMessages(type) {
  const mostRecentRawMessage = type;
  if (type.type !== MessageTypes.THREAD_STARTER_MESSAGE) {
    const channel = ChannelStore.getChannel(type.channel_id);
    if (null != channel) {
      if (set.has(channel.type)) {
        if (!(channel.id in dependencyMap)) {
          const obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
          ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = channel);
          if (messageCount == null) {
            messageCount = 0;
          }
          obj.count = messageCount;
          dependencyMap[channel.id] = obj;
        }
        let num = dependencyMap2[tmp4.parentId];
        if (num == null) {
          num = 0;
        }
        dependencyMap2[dependencyMap[channel.id].parentId] = num + 1;
        ((dependencyMap) => {
          dependencyMap.mostRecentRawMessage = mostRecentRawMessage;
          dependencyMap.mostRecentMessage = null;
        })(dependencyMap[channel.id]);
      }
    }
  }
}
function updateFromThread(type) {
  closure_0 = type;
  if (set.has(type.type)) {
    if (!(type.id in dependencyMap)) {
      const obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
      ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = type);
      if (messageCount == null) {
        messageCount = 0;
      }
      obj.count = messageCount;
      dependencyMap[type.id] = obj;
    }
    let num = dependencyMap2[tmp5.parentId];
    if (num == null) {
      num = 0;
    }
    dependencyMap2[dependencyMap[type.id].parentId] = num + 1;
    ((mostRecentRawMessage) => {
      if (null != channel.messageCount) {
        mostRecentRawMessage.count = channel.messageCount;
      }
      let mostRecentMessage = mostRecentRawMessage.mostRecentRawMessage;
      if (mostRecentMessage == null) {
        mostRecentMessage = mostRecentRawMessage.mostRecentMessage;
      }
      let tmp2 = null != channel.lastMessageId;
      if (tmp2) {
        let id;
        if (mostRecentMessage != null) {
          id = mostRecentMessage.id;
        }
        tmp2 = id !== channel.lastMessageId;
      }
      if (tmp2) {
        mostRecentRawMessage.mostRecentRawMessage = null;
        mostRecentRawMessage.mostRecentMessage = null;
      }
    })(dependencyMap[type.id]);
  }
}
function updateFromServerThread(id) {
  if (null != id) {
    if (!(id.id in dependencyMap)) {
      const channel = ChannelStore.getChannel(id.id);
      if (null != channel) {
        if (set.has(channel.type)) {
          if (!(channel.id in dependencyMap)) {
            const obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
            ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = channel);
            if (messageCount == null) {
              messageCount = 0;
            }
            obj.count = messageCount;
            dependencyMap[channel.id] = obj;
          }
          let num = dependencyMap2[tmp6.parentId];
          if (num == null) {
            num = 0;
          }
          dependencyMap2[dependencyMap[channel.id].parentId] = num + 1;
          ((mostRecentRawMessage) => {
            if (null != channel.messageCount) {
              mostRecentRawMessage.count = channel.messageCount;
            }
            let mostRecentMessage = mostRecentRawMessage.mostRecentRawMessage;
            if (mostRecentMessage == null) {
              mostRecentMessage = mostRecentRawMessage.mostRecentMessage;
            }
            let tmp2 = null != channel.lastMessageId;
            if (tmp2) {
              let id;
              if (mostRecentMessage != null) {
                id = mostRecentMessage.id;
              }
              tmp2 = id !== channel.lastMessageId;
            }
            if (tmp2) {
              mostRecentRawMessage.mostRecentRawMessage = null;
              mostRecentRawMessage.mostRecentMessage = null;
            }
          })(dependencyMap[channel.id]);
        }
        return true;
      }
    }
  }
  return false;
}
function handleThreadCreateOrUpdate(channel) {
  channel = channel.channel;
  if (set.has(channel.type)) {
    if (!(channel.id in dependencyMap)) {
      const obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
      ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = channel);
      if (messageCount == null) {
        messageCount = 0;
      }
      obj.count = messageCount;
      dependencyMap[channel.id] = obj;
    }
    let num = dependencyMap2[tmp5.parentId];
    if (num == null) {
      num = 0;
    }
    dependencyMap2[dependencyMap[channel.id].parentId] = num + 1;
    ((mostRecentRawMessage) => {
      if (null != channel.messageCount) {
        mostRecentRawMessage.count = channel.messageCount;
      }
      let mostRecentMessage = mostRecentRawMessage.mostRecentRawMessage;
      if (mostRecentMessage == null) {
        mostRecentMessage = mostRecentRawMessage.mostRecentMessage;
      }
      let tmp2 = null != channel.lastMessageId;
      if (tmp2) {
        let id;
        if (mostRecentMessage != null) {
          id = mostRecentMessage.id;
        }
        tmp2 = id !== channel.lastMessageId;
      }
      if (tmp2) {
        mostRecentRawMessage.mostRecentRawMessage = null;
        mostRecentRawMessage.mostRecentMessage = null;
      }
    })(dependencyMap[channel.id]);
  }
}
function handleLoadArchivedThreadsSuccess(threads) {
  threads = threads.threads;
  const item = threads.forEach(updateFromServerThread);
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let item = data.forEach((item) => {
    ({ messages, threads } = item);
    item = messages.forEach((arr) => {
      const item = arr.forEach((thread) => {
        thread = thread.thread;
        if (null != thread) {
          if (!(thread.id in dependencyMap)) {
            channel = channel.getChannel(thread.id);
            if (null != channel) {
              if (set.has(channel.type)) {
                if (!(channel.id in dependencyMap)) {
                  const obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
                  ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = channel);
                  if (messageCount == null) {
                    messageCount = 0;
                  }
                  obj.count = messageCount;
                  dependencyMap[channel.id] = obj;
                }
                let num = closure_1_13[tmp6.parentId];
                if (num == null) {
                  num = 0;
                }
                closure_1_13[dependencyMap[channel.id].parentId] = num + 1;
                ((mostRecentRawMessage) => {
                  if (null != channel.messageCount) {
                    mostRecentRawMessage.count = channel.messageCount;
                  }
                  let mostRecentMessage = mostRecentRawMessage.mostRecentRawMessage;
                  if (mostRecentMessage == null) {
                    mostRecentMessage = mostRecentRawMessage.mostRecentMessage;
                  }
                  let tmp2 = null != channel.lastMessageId;
                  if (tmp2) {
                    let id;
                    if (mostRecentMessage != null) {
                      id = mostRecentMessage.id;
                    }
                    tmp2 = id !== channel.lastMessageId;
                  }
                  if (tmp2) {
                    mostRecentRawMessage.mostRecentRawMessage = null;
                    mostRecentRawMessage.mostRecentMessage = null;
                  }
                })(dependencyMap[channel.id]);
              }
            }
          }
        }
      });
    });
    const item1 = threads.forEach(updateFromServerThread);
  });
}
function handleRelationshipUpdate() {
  for (const key10003 in closure_12) {
    let tmp5 = dependencyMap[key10003];
    if (null == tmp5) {
      continue;
    } else {
      if (null == tmp5.mostRecentMessage) {
        continue;
      } else {
        let message = MessageStore.getMessage(key10003, tmp5.mostRecentMessage.id);
        if (null == message) {
          continue;
        } else {
          tmp5.mostRecentMessage = message;
          continue;
        }
        continue;
      }
      continue;
    }
    continue;
  }
}
({ ALL_CHANNEL_TYPES: c3, THREAD_CHANNEL_TYPES: closure_4 } = ChannelRecord);
const MAX_THREAD_MESSAGE_COUNT = ThreadConstants.MAX_THREAD_MESSAGE_COUNT;
const MessageTypes = Constants.MessageTypes;
const set = new Set();
const dependencyMap = {};
const dependencyMap2 = {};
const Store = initializeDefault.Store;
class ThreadMessageStore extends Store {
}
const prototype = ThreadMessageStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, MessageStore);
};
prototype["getCount"] = function getCount(arg0) {
  let count;
  if (dependencyMap[arg0] != null) {
    count = tmp.count;
  }
  if (count == null) {
    count = null;
  }
  return count;
};
prototype["getMostRecentMessage"] = function getMostRecentMessage(id) {
  let tmp2 = null;
  if (null != dependencyMap[id]) {
    if (tmp3) {
      let message = MessageStore.getMessage(id, tmp.mostRecentRawMessage.id);
      if (message == null) {
        message = MessageRecordUtils.createMessageRecord(tmp.mostRecentRawMessage);
      }
      tmp.mostRecentMessage = message;
      tmp.mostRecentRawMessage = null;
    }
    let mostRecentMessage = tmp.mostRecentMessage;
    if (mostRecentMessage == null) {
      mostRecentMessage = null;
    }
    tmp2 = mostRecentMessage;
    tmp3 = null == tmp.mostRecentMessage && null != tmp.mostRecentRawMessage;
  }
  return tmp2;
};
prototype["getChannelThreadsVersion"] = function getChannelThreadsVersion(id) {
  return dependencyMap2[id];
};
prototype["getInitialOverlayState"] = function getInitialOverlayState() {
  return closure_12;
};
ThreadMessageStore.displayName = "ThreadMessageStore";
const threadMessageStore = new ThreadMessageStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    closure_13 = {};
    set.clear();
    guilds = guilds.guilds;
    const item = guilds.forEach(updateFromGuild);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(threadMessages) {
    threadMessages = threadMessages.threadMessages;
    let obj = {};
    const merged = Object.assign(threadMessages);
    closure_12 = obj;
    for (const key10009 in obj) {
      let mostRecentMessage = threadMessages[key10009].mostRecentMessage;
      if (null == mostRecentMessage) {
        continue;
      } else {
        obj = {};
        let merged1 = Object.assign(mostRecentMessage);
        let tmp7 = new.target;
        let tmp8 = new.target;
        let tmp9 = new UserRecord(mostRecentMessage.author);
        obj.author = tmp9;
        let tmp11 = new.target;
        let tmp12 = new.target;
        let tmp14 = new MessageRecord(obj);
        threadMessages[key10009].mostRecentMessage = tmp14;
        continue;
      }
      continue;
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const threads = guild.threads;
    if (threads != null) {
      const item = threads.forEach(updateFromThread);
    }
    const threadMessages = guild.threadMessages;
    if (threadMessages != null) {
      const item1 = threadMessages.forEach(updateFromThreadMessages);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    closure_12 = _modDef12.omitBy(closure_12, (guildId) => {
      if (guildId.guildId === id) {
        const parentId = guildId.parentId;
        delete tmp2[tmp];
      }
      return guildId.guildId === id;
    });
  },
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_UPDATE: handleThreadCreateOrUpdate,
  THREAD_LIST_SYNC: function handleThreadListSync(arg0) {
    ({ threads, mostRecentMessages } = arg0);
    const item = threads.forEach(updateFromThread);
    if (mostRecentMessages != null) {
      const item1 = mostRecentMessages.forEach((channel_id) => {
        const mostRecentRawMessage = channel_id;
        channel = channel.getChannel(channel_id.channel_id);
        let tmp2 = null != channel;
        if (tmp2) {
          tmp2 = channel_id.type !== constants.THREAD_STARTER_MESSAGE;
        }
        if (tmp2) {
          if (set.has(channel.type)) {
            if (!(channel.id in dependencyMap)) {
              const obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
              ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = channel);
              if (messageCount == null) {
                messageCount = 0;
              }
              obj.count = messageCount;
              dependencyMap[channel.id] = obj;
            }
            let num = dependencyMap2[tmp8.parentId];
            if (num == null) {
              num = 0;
            }
            dependencyMap2[dependencyMap[channel.id].parentId] = num + 1;
            ((dependencyMap) => {
              dependencyMap.mostRecentRawMessage = mostRecentRawMessage;
              dependencyMap.mostRecentMessage = null;
            })(dependencyMap[channel.id]);
          }
        }
      });
    }
  },
  LOAD_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  THREAD_DELETE: function handleThreadDelete(arg0) {
    delete tmp2[tmp];
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    closure_12 = _modDef12.omitBy(closure_12, (parentId) => parentId.parentId === id);
    delete tmp[tmp2];
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    if (!message.optimistic) {
      if (!message.isPushNotification) {
        if (null == tmp) {
          const channel = ChannelStore.getChannel(message.channel_id);
          let tmp4 = null == channel;
          if (!tmp4) {
            tmp4 = !set2.has(channel.type);
          }
          let tmp5 = !tmp4;
          if (!tmp4) {
            let tmp7 = message.type !== MessageTypes.THREAD_STARTER_MESSAGE;
            if (tmp7) {
              const isForumPostResult = channel.isForumPost();
              let tmp9 = !isForumPostResult;
              if (isForumPostResult) {
                let obj = SnowflakeUtilsDefault;
                tmp9 = message.id !== obj.castChannelIdAsMessageId(channel.id);
              }
              tmp7 = tmp9;
            }
            if (tmp7) {
              if (set.has(channel.type)) {
                if (!(channel.id in dependencyMap)) {
                  obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
                  ({ guild_id: obj2.guildId, parent_id: obj2.parentId, messageCount } = channel);
                  if (messageCount == null) {
                    messageCount = 0;
                  }
                  obj.count = messageCount;
                  dependencyMap[channel.id] = obj;
                }
                let num = dependencyMap2[tmp17.parentId];
                if (num == null) {
                  num = 0;
                }
                dependencyMap2[dependencyMap[channel.id].parentId] = num + 1;
                ((count) => {
                  count.count = Math.min(count.count + 1, MAX_THREAD_MESSAGE_COUNT);
                  count.mostRecentRawMessage = message;
                  count.mostRecentMessage = null;
                })(dependencyMap[channel.id]);
              }
            }
            tmp5 = tmp12;
          }
          return tmp5;
        }
      }
    }
    return false;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    let mostRecentRawMessage;
    if (dependencyMap[message.channel_id] != null) {
      mostRecentRawMessage = tmp.mostRecentRawMessage;
    }
    if (mostRecentRawMessage == null) {
      let mostRecentMessage;
      if (tmp != null) {
        mostRecentMessage = tmp.mostRecentMessage;
      }
      mostRecentRawMessage = mostRecentMessage;
    }
    if (null != dependencyMap[message.channel_id]) {
      if (null != mostRecentRawMessage) {
        if (mostRecentRawMessage.id === message.id) {
          let num = dependencyMap2[tmp.parentId];
          if (num == null) {
            num = 0;
          }
          dependencyMap2[tmp.parentId] = num + 1;
          if (null != tmp.mostRecentMessage) {
            tmp.mostRecentMessage = MessageRecordUtils.updateMessageRecord(tmp.mostRecentMessage, message);
          }
          if (null != tmp.mostRecentRawMessage) {
            tmp.mostRecentRawMessage = MessageRecordUtils.updateServerMessage(tmp.mostRecentRawMessage, message);
          }
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    ({ id, channelId } = arg0);
    if (null == dependencyMap[channelId]) {
      return false;
    } else {
      const result = SnowflakeUtilsDefault.castChannelIdAsMessageId(channelId);
      const hasItem = set.has(id);
      let num = dependencyMap2[tmp.parentId];
      if (num == null) {
        num = 0;
      }
      dependencyMap2[tmp.parentId] = num + 1;
      let mostRecentMessage = tmp.mostRecentRawMessage;
      if (mostRecentMessage == null) {
        mostRecentMessage = tmp.mostRecentMessage;
      }
      if (tmp3) {
        tmp.mostRecentMessage = null;
        tmp.mostRecentRawMessage = null;
      }
      if (result !== id) {
        if (!hasItem) {
          const _Math = Math;
          let count = Math.max(tmp.count - 1, 0);
        }
        tmp.count = count;
        set.add(id);
      }
      count = tmp.count;
      tmp3 = null != mostRecentMessage && mostRecentMessage.id === id;
    }
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(arg0) {
    ({ ids, channelId } = arg0);
    if (null == dependencyMap[channelId]) {
      return false;
    } else {
      const length = ids.filter((item) => {
        let tmp = SnowflakeUtilsDefault.castChannelIdAsMessageId(channelId) !== item;
        if (tmp) {
          tmp = !set.has(item);
        }
        return tmp;
      }).length;
      if (length > 0) {
        let num = dependencyMap2[tmp.parentId];
        if (num == null) {
          num = 0;
        }
        dependencyMap2[tmp.parentId] = num + 1;
        let mostRecentMessage = tmp.mostRecentRawMessage;
        if (mostRecentMessage == null) {
          mostRecentMessage = tmp.mostRecentMessage;
        }
        if (tmp3) {
          tmp.mostRecentMessage = null;
          tmp.mostRecentRawMessage = null;
        }
        tmp.count = tmp.count - length;
        const item = ids.forEach((item) => set.add(item));
        tmp3 = null != mostRecentMessage && ids.includes(mostRecentMessage.id);
      }
    }
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(isAfter) {
    let flag = false;
    for (const item10007 of tmp) {
      let tmp3 = updateFromServerThread(item10007.thread);
      if (!tmp3) {
        tmp3 = flag;
      }
      flag = tmp3;
      continue;
    }
    if (!isAfter.isAfter) {
      if (!isAfter.isBefore) {
        if (!isAfter.hasMoreAfter) {
          const channel = ChannelStore.getChannel(isAfter.channelId);
          if (null != channel) {
            if (set2.has(channel.type)) {
              updateState(channel, (count) => {
                if (0 === isAfter.messages.length) {
                  count.mostRecentRawMessage = null;
                  count.mostRecentMessage = null;
                  count.count = 0;
                } else {
                  let first = isAfter.messages[0];
                  if (first == null) {
                    first = null;
                  }
                  count.count = isAfter.messages.length >= MAX_THREAD_MESSAGE_COUNT ? MAX_THREAD_MESSAGE_COUNT : count.count;
                  let type;
                  if (first != null) {
                    type = first.type;
                  }
                  if (type !== MessageTypes.THREAD_STARTER_MESSAGE) {
                    count.mostRecentRawMessage = first;
                    count.mostRecentMessage = null;
                  }
                }
              });
            }
          }
          return flag;
        }
      }
    }
    return flag;
  }
});
let result = size.fileFinishedImporting("modules/threads/ThreadMessageStore.tsx");

export default threadMessageStore;