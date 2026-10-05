// === Module 6809: ThreadMessageStore ===

// Module 6809 (ThreadMessageStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5112 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import MessageRecord from "MessageRecord" /* 4520 */;
import UserRecord from "UserRecord" /* 1391 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5110 */;
import size from "module_2" /* 2 */;

let closure_13, thread;

let c3;
let closure_4;
function updateState(type, fn) {
  let messageCount;
  if (set.has(type.type)) {
    if (!(type.id in closure_12)) {
      const obj = { guildId: null, parentId: null, count: messageCount, mostRecentRawMessage: null, mostRecentMessage: null };
      ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = type);
      const id = type.id;
      if (messageCount == null) {
        messageCount = 0;
      }
      closure_12[id] = obj;
    }
    let num = closure_13[tmp5.parentId];
    if (num == null) {
      num = 0;
    }
    closure_13[closure_12[type.id].parentId] = num + 1;
    fn(closure_12[type.id]);
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
  let messageCount;
  let closure_0 = type;
  if (type.type !== MessageTypes.THREAD_STARTER_MESSAGE) {
    const channel = ChannelStore.getChannel(type.channel_id);
    if (null != channel) {
      if (set.has(channel.type)) {
        if (!(channel.id in closure_12)) {
          const obj = { guildId: null, parentId: null, count: messageCount, mostRecentRawMessage: null, mostRecentMessage: null };
          ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = channel);
          const id = channel.id;
          if (messageCount == null) {
            messageCount = 0;
          }
          closure_12[id] = obj;
        }
        let num = closure_13[tmp4.parentId];
        if (num == null) {
          num = 0;
        }
        closure_13[closure_12[channel.id].parentId] = num + 1;
        ((arg0) => {
          arg0.mostRecentRawMessage = mostRecentRawMessage;
          arg0.mostRecentMessage = null;
        })(closure_12[channel.id]);
      }
    }
  }
}
function updateFromThread(type) {
  let messageCount;
  let closure_0 = type;
  if (set.has(type.type)) {
    if (!(type.id in closure_12)) {
      const obj = { guildId: null, parentId: null, count: messageCount, mostRecentRawMessage: null, mostRecentMessage: null };
      ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = type);
      const id = type.id;
      if (messageCount == null) {
        messageCount = 0;
      }
      closure_12[id] = obj;
    }
    let num = closure_13[tmp5.parentId];
    if (num == null) {
      num = 0;
    }
    closure_13[closure_12[type.id].parentId] = num + 1;
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
    })(closure_12[type.id]);
  }
}
function updateFromServerThread(id) {
  let messageCount;
  if (null != id) {
    if (!(id.id in closure_12)) {
      const channel = ChannelStore.getChannel(id.id);
      if (null != channel) {
        if (set.has(channel.type)) {
          if (!(channel.id in closure_12)) {
            const obj = { guildId: null, parentId: null, count: messageCount, mostRecentRawMessage: null, mostRecentMessage: null };
            ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = channel);
            id = channel.id;
            if (messageCount == null) {
              messageCount = 0;
            }
            closure_12[id] = obj;
          }
          let num = closure_13[tmp6.parentId];
          if (num == null) {
            num = 0;
          }
          closure_13[closure_12[channel.id].parentId] = num + 1;
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
          })(closure_12[channel.id]);
        }
        return true;
      }
    }
  }
  return false;
}
function handleThreadCreateOrUpdate(channel) {
  let messageCount;
  channel = channel.channel;
  if (set.has(channel.type)) {
    if (!(channel.id in closure_12)) {
      const obj = { guildId: null, parentId: null, count: messageCount, mostRecentRawMessage: null, mostRecentMessage: null };
      ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = channel);
      const id = channel.id;
      if (messageCount == null) {
        messageCount = 0;
      }
      closure_12[id] = obj;
    }
    let num = closure_13[tmp5.parentId];
    if (num == null) {
      num = 0;
    }
    closure_13[closure_12[channel.id].parentId] = num + 1;
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
    })(closure_12[channel.id]);
  }
}
function handleLoadArchivedThreadsSuccess(threads) {
  threads = threads.threads;
  const item = threads.forEach(updateFromServerThread);
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let item = data.forEach((item) => {
    let messages;
    let threads;
    ({ messages, threads } = item);
    item = messages.forEach((arr) => {
      const item = arr.forEach((thread) => {
        let messageCount;
        thread = thread.thread;
        if (null != thread) {
          if (!(thread.id in closure_1_12)) {
            channel = channel.getChannel(thread.id);
            if (null != channel) {
              if (set.has(channel.type)) {
                if (!(channel.id in closure_1_12)) {
                  const obj = { guildId: null, parentId: null, count: messageCount, mostRecentRawMessage: null, mostRecentMessage: null };
                  ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = channel);
                  let id = channel.id;
                  if (messageCount == null) {
                    messageCount = 0;
                  }
                  closure_1_12[id] = obj;
                }
                let num = closure_1_13[tmp6.parentId];
                if (num == null) {
                  num = 0;
                }
                closure_1_13[closure_1_12[channel.id].parentId] = num + 1;
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
                })(closure_1_12[channel.id]);
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
    let tmp5 = closure_12[key10003];
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
let closure_12 = {};
const Store = get_initializedDefault.Store;
class ThreadMessageStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, MessageStore);
  }
  getCount(arg0) {
    let count;
    if (closure_12[arg0] != null) {
      count = tmp.count;
    }
    if (count == null) {
      count = null;
    }
    return count;
  }
  getMostRecentMessage(id) {
    let tmp2 = null;
    if (null != closure_12[id]) {
      const tmp3 = null == closure_12[id].mostRecentMessage && null != closure_12[id].mostRecentRawMessage;
      if (tmp3) {
        let message = MessageStore.getMessage(id, tmp.mostRecentRawMessage.id);
        if (message == null) {
          const obj = MessageRecordUtils;
          message = obj.createMessageRecord(tmp.mostRecentRawMessage);
        }
        closure_12[id].mostRecentMessage = message;
        closure_12[id].mostRecentRawMessage = null;
      }
      let mostRecentMessage = tmp.mostRecentMessage;
      if (mostRecentMessage == null) {
        mostRecentMessage = null;
      }
      tmp2 = mostRecentMessage;
    }
    return tmp2;
  }
  getChannelThreadsVersion(id) {
    return closure_13[id];
  }
  getInitialOverlayState() {
    return closure_12;
  }
}
const prototype = ThreadMessageStore.prototype;
ThreadMessageStore.displayName = "ThreadMessageStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    closure_13 = {};
    set.clear();
    guilds = guilds.guilds;
    const item = guilds.forEach(updateFromGuild);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(threadMessages) {
    threadMessages = threadMessages.threadMessages;
    const obj = {};
    const merged = Object.assign(threadMessages);
    closure_12 = obj;
    for (const key10009 in obj) {
      let mostRecentMessage = threadMessages[key10009].mostRecentMessage;
      if (null == mostRecentMessage) {
        continue;
      } else {
        let obj2 = { author: tmp8 };
        let tmp2 = threadMessages[key10009];
        let merged1 = Object.assign(mostRecentMessage);
        let self = this;
        let self2 = this;
        let tmp8 = new UserRecord(mostRecentMessage.author);
        let self3 = this;
        let self4 = this;
        let tmp11 = new MessageRecord(obj2);
        tmp2.mostRecentMessage = tmp11;
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
    const obj = _modDef12;
    closure_12 = obj.omitBy(closure_12, (guildId) => {
      if (guildId.guildId === id) {
        delete closure_13[guildId.parentId];
      }
      return guildId.guildId === id;
    });
  },
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_UPDATE: handleThreadCreateOrUpdate,
  THREAD_LIST_SYNC: function handleThreadListSync(arg0) {
    let mostRecentMessages;
    let threads;
    ({ threads, mostRecentMessages } = arg0);
    const item = threads.forEach(updateFromThread);
    if (mostRecentMessages != null) {
      const item1 = mostRecentMessages.forEach((channel_id) => {
        let messageCount;
        let closure_0 = channel_id;
        channel = channel.getChannel(channel_id.channel_id);
        const tmp2 = null != channel && channel_id.type !== constants.THREAD_STARTER_MESSAGE;
        if (tmp2) {
          if (set.has(channel.type)) {
            if (!(channel.id in closure_1_12)) {
              const obj = { guildId: null, parentId: null, count: messageCount, mostRecentRawMessage: null, mostRecentMessage: null };
              ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = channel);
              const id = channel.id;
              if (messageCount == null) {
                messageCount = 0;
              }
              closure_1_12[id] = obj;
            }
            let num = closure_1_13[tmp8.parentId];
            if (num == null) {
              num = 0;
            }
            closure_1_13[closure_1_12[channel.id].parentId] = num + 1;
            ((arg0) => {
              arg0.mostRecentRawMessage = mostRecentRawMessage;
              arg0.mostRecentMessage = null;
            })(closure_1_12[channel.id]);
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
    delete closure_12[arg0.channel.id];
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    const obj = _modDef12;
    closure_12 = obj.omitBy(closure_12, (parentId) => parentId.parentId === id);
    delete closure_13[id];
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    let messageCount;
    message = message.message;
    if (!message.optimistic) {
      if (!message.isPushNotification) {
        if (null == tmp) {
          const channel = ChannelStore.getChannel(message.channel_id);
          let tmp5 = !(null == channel || !set2.has(channel.type));
          const tmp4 = null == channel || !set2.has(channel.type);
          if (tmp5) {
            let tmp7 = message.type !== MessageTypes.THREAD_STARTER_MESSAGE;
            if (tmp7) {
              const isForumPostResult = channel.isForumPost();
              let tmp9 = !isForumPostResult;
              if (isForumPostResult) {
                const id = message.id;
                const obj = SnowflakeUtilsDefault;
                tmp9 = id !== obj.castChannelIdAsMessageId(channel.id);
              }
              tmp7 = tmp9;
            }
            if (tmp7) {
              if (set.has(channel.type)) {
                if (!(channel.id in closure_12)) {
                  const obj3 = { guildId: null, parentId: null, count: messageCount, mostRecentRawMessage: null, mostRecentMessage: null };
                  ({ guild_id: obj2.guildId, parent_id: obj2.parentId, messageCount } = channel);
                  const id2 = channel.id;
                  if (messageCount == null) {
                    messageCount = 0;
                  }
                  closure_12[id2] = obj3;
                }
                let num = closure_13[tmp17.parentId];
                if (num == null) {
                  num = 0;
                }
                closure_13[closure_12[channel.id].parentId] = num + 1;
                ((count) => {
                  count.count = Math.min(count.count + 1, MAX_THREAD_MESSAGE_COUNT);
                  count.mostRecentRawMessage = message;
                  count.mostRecentMessage = null;
                })(closure_12[channel.id]);
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
    if (closure_12[message.channel_id] != null) {
      mostRecentRawMessage = tmp.mostRecentRawMessage;
    }
    if (mostRecentRawMessage == null) {
      let mostRecentMessage;
      if (closure_12[message.channel_id] != null) {
        mostRecentMessage = tmp.mostRecentMessage;
      }
      mostRecentRawMessage = mostRecentMessage;
    }
    if (null != closure_12[message.channel_id]) {
      if (null != mostRecentRawMessage) {
        if (mostRecentRawMessage.id === message.id) {
          let num = closure_13[tmp.parentId];
          if (num == null) {
            num = 0;
          }
          closure_13[closure_12[message.channel_id].parentId] = num + 1;
          if (null != closure_12[message.channel_id].mostRecentMessage) {
            const obj = MessageRecordUtils;
            closure_12[message.channel_id].mostRecentMessage = obj.updateMessageRecord(closure_12[message.channel_id].mostRecentMessage, message);
          }
          if (null != closure_12[message.channel_id].mostRecentRawMessage) {
            const obj2 = MessageRecordUtils;
            closure_12[message.channel_id].mostRecentRawMessage = obj2.updateServerMessage(closure_12[message.channel_id].mostRecentRawMessage, message);
          }
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    let channelId;
    let id;
    ({ id, channelId } = arg0);
    if (null == closure_12[channelId]) {
      return false;
    } else {
      const obj = SnowflakeUtilsDefault;
      const result = obj.castChannelIdAsMessageId(channelId);
      const hasItem = set.has(id);
      let num = closure_13[tmp.parentId];
      if (num == null) {
        num = 0;
      }
      closure_13[closure_12[channelId].parentId] = num + 1;
      let mostRecentMessage = tmp.mostRecentRawMessage;
      if (mostRecentMessage == null) {
        mostRecentMessage = tmp.mostRecentMessage;
      }
      const tmp3 = null != mostRecentMessage && mostRecentMessage.id === id;
      if (tmp3) {
        closure_12[channelId].mostRecentMessage = null;
        closure_12[channelId].mostRecentRawMessage = null;
      }
      if (result !== id) {
        let count;
        if (!hasItem) {
          const _Math = Math;
          count = Math.max(tmp.count - 1, 0);
        }
        closure_12[channelId].count = count;
        set.add(id);
      }
      count = tmp.count;
    }
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(arg0) {
    let channelId;
    let ids;
    ({ ids, channelId } = arg0);
    let tmp = closure_12[channelId];
    if (null == tmp) {
      return false;
    } else {
      const length = ids.filter((item) => {
        const obj = SnowflakeUtilsDefault;
        const tmp = obj.castChannelIdAsMessageId(channelId) !== item && !set.has(item);
        return tmp;
      }).length;
      if (length > 0) {
        let num = closure_13[tmp.parentId];
        if (num == null) {
          num = 0;
        }
        closure_13[tmp.parentId] = num + 1;
        let mostRecentMessage = tmp.mostRecentRawMessage;
        if (mostRecentMessage == null) {
          mostRecentMessage = tmp.mostRecentMessage;
        }
        const tmp3 = null != mostRecentMessage && ids.includes(mostRecentMessage.id);
        if (tmp3) {
          tmp.mostRecentMessage = null;
          tmp.mostRecentRawMessage = null;
        }
        tmp.count = tmp.count - length;
        const item = ids.forEach((item) => set.add(item));
      }
    }
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(messages) {
    let flag = false;
    messages = messages.messages;
    for (const item10007 of messages) {
      let tmp2 = updateFromServerThread(item10007.thread) || flag;
      flag = tmp2;
      continue;
    }
    if (!messages.isAfter) {
      if (!messages.isBefore) {
        if (!messages.hasMoreAfter) {
          const channel = ChannelStore.getChannel(messages.channelId);
          if (null != channel) {
            if (set2.has(channel.type)) {
              updateState(channel, (count) => {
                if (0 === messages.messages.length) {
                  count.mostRecentRawMessage = null;
                  count.mostRecentMessage = null;
                  count.count = 0;
                } else {
                  let first = messages.messages[0];
                  if (first == null) {
                    first = null;
                  }
                  count.count = messages.messages.length >= MAX_THREAD_MESSAGE_COUNT ? MAX_THREAD_MESSAGE_COUNT : count.count;
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
};
const threadMessageStore = new ThreadMessageStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/threads/ThreadMessageStore.tsx");

export default threadMessageStore;