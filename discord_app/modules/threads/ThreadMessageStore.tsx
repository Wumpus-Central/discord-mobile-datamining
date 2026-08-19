// === Module 7271: updateState ===

// Module 7271 (updateState)
import obj132 from "obj132" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import AbortCodes from "AbortCodes" /* 1235 */;
import createMinimalMessageRecord from "createMinimalMessageRecord" /* 4803 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import hasFlag from "hasFlag" /* 4031 */;
import createdAt from "createdAt" /* 1930 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;

function updateState(type, fn) {
  if (set.has(type.type)) {
    if (!(type.id in dependencyMap)) {
      const obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
      ({ guild_id: obj[0], parent_id: obj[1], messageCount } = type);
      if (messageCount == null) {
        messageCount = 0;
      }
      obj[2] = messageCount;
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
  closure_0 = type;
  if (type.type !== MessageTypes.THREAD_STARTER_MESSAGE) {
    const channel = store.getChannel(type.channel_id);
    if (null != channel) {
      if (set.has(channel.type)) {
        if (!(channel.id in dependencyMap)) {
          const obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
          ({ guild_id: obj[0], parent_id: obj[1], messageCount } = channel);
          if (messageCount == null) {
            messageCount = 0;
          }
          obj[2] = messageCount;
          dependencyMap[channel.id] = obj;
        }
        let num = dependencyMap2[tmp4.parentId];
        if (num == null) {
          num = 0;
        }
        dependencyMap2[dependencyMap[channel.id].parentId] = num + 1;
        ((closure_12) => {
          closure_12.mostRecentRawMessage = closure_0;
          closure_12.mostRecentMessage = null;
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
      ({ guild_id: obj[0], parent_id: obj[1], messageCount } = type);
      if (messageCount == null) {
        messageCount = 0;
      }
      obj[2] = messageCount;
      dependencyMap[type.id] = obj;
    }
    let num = dependencyMap2[tmp5.parentId];
    if (num == null) {
      num = 0;
    }
    dependencyMap2[dependencyMap[type.id].parentId] = num + 1;
    ((closure_12) => {
      if (null != channel.messageCount) {
        closure_12.count = channel.messageCount;
      }
      let mostRecentMessage = closure_12.mostRecentRawMessage;
      if (mostRecentMessage == null) {
        mostRecentMessage = closure_12.mostRecentMessage;
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
        closure_12.mostRecentRawMessage = null;
        closure_12.mostRecentMessage = null;
      }
    })(dependencyMap[type.id]);
  }
}
function updateFromServerThread(id) {
  if (null != id) {
    if (!(id.id in dependencyMap)) {
      const channel = store.getChannel(id.id);
      if (null != channel) {
        if (set.has(channel.type)) {
          if (!(channel.id in dependencyMap)) {
            const obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
            ({ guild_id: obj[0], parent_id: obj[1], messageCount } = channel);
            if (messageCount == null) {
              messageCount = 0;
            }
            obj[2] = messageCount;
            dependencyMap[channel.id] = obj;
          }
          let num = dependencyMap2[tmp6.parentId];
          if (num == null) {
            num = 0;
          }
          dependencyMap2[dependencyMap[channel.id].parentId] = num + 1;
          ((closure_12) => {
            if (null != channel.messageCount) {
              closure_12.count = channel.messageCount;
            }
            let mostRecentMessage = closure_12.mostRecentRawMessage;
            if (mostRecentMessage == null) {
              mostRecentMessage = closure_12.mostRecentMessage;
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
              closure_12.mostRecentRawMessage = null;
              closure_12.mostRecentMessage = null;
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
      ({ guild_id: obj[0], parent_id: obj[1], messageCount } = channel);
      if (messageCount == null) {
        messageCount = 0;
      }
      obj[2] = messageCount;
      dependencyMap[channel.id] = obj;
    }
    let num = dependencyMap2[tmp5.parentId];
    if (num == null) {
      num = 0;
    }
    dependencyMap2[dependencyMap[channel.id].parentId] = num + 1;
    ((closure_12) => {
      if (null != channel.messageCount) {
        closure_12.count = channel.messageCount;
      }
      let mostRecentMessage = closure_12.mostRecentRawMessage;
      if (mostRecentMessage == null) {
        mostRecentMessage = closure_12.mostRecentMessage;
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
        closure_12.mostRecentRawMessage = null;
        closure_12.mostRecentMessage = null;
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
  let item = data.forEach((item, index) => {
    ({ messages, threads } = item);
    item = messages.forEach((item, index) => {
      item = item.forEach((item, index) => {
        const thread = item.thread;
        if (null != thread) {
          if (!(thread.id in table)) {
            channel = channel.getChannel(thread.id);
            if (null != channel) {
              if (set.has(channel.type)) {
                if (!(channel.id in table)) {
                  const obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
                  ({ guild_id: obj[0], parent_id: obj[1], messageCount } = channel);
                  if (messageCount == null) {
                    messageCount = 0;
                  }
                  obj[2] = messageCount;
                  table[channel.id] = obj;
                }
                let num = table2[tmp6.parentId];
                if (num == null) {
                  num = 0;
                }
                table2[table[channel.id].parentId] = num + 1;
                ((closure_12) => {
                  if (null != channel.messageCount) {
                    closure_12.count = channel.messageCount;
                  }
                  let mostRecentMessage = closure_12.mostRecentRawMessage;
                  if (mostRecentMessage == null) {
                    mostRecentMessage = closure_12.mostRecentMessage;
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
                    closure_12.mostRecentRawMessage = null;
                    closure_12.mostRecentMessage = null;
                  }
                })(table[channel.id]);
              }
            }
          }
        }
      });
    });
    const item1 = threads.forEach(closure_18);
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
        let message = store2.getMessage(key10003, tmp5.mostRecentMessage.id);
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
({ ALL_CHANNEL_TYPES: c3, THREAD_CHANNEL_TYPES: c4 } = createChannelRecord);
const MAX_THREAD_MESSAGE_COUNT = AbortCodes.MAX_THREAD_MESSAGE_COUNT;
const MessageTypes = ME.MessageTypes;
const set = new Set();
let closure_12 = {};
let closure_13 = {};
const Store = initializeDefault.Store;
class ThreadMessageStore extends Store {
}
const prototype = ThreadMessageStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_7, closure_8);
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
      let message = store2.getMessage(id, tmp.mostRecentRawMessage.id);
      if (message == null) {
        message = createMinimalMessageRecord.createMessageRecord(tmp.mostRecentRawMessage);
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
prototype["getChannelThreadsVersion"] = function getChannelThreadsVersion(memo1) {
  return dependencyMap2[memo1];
};
prototype["getInitialOverlayState"] = function getInitialOverlayState() {
  return closure_12;
};
ThreadMessageStore.displayName = "ThreadMessageStore";
const threadMessageStore = new ThreadMessageStore(dispatcherDefault, {
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
    for (const key10009 in obj) {
      let mostRecentMessage = threadMessages[key10009].mostRecentMessage;
      if (null == mostRecentMessage) {
        continue;
      } else {
        obj = {};
        let merged1 = Object.assign(mostRecentMessage);
        let tmp9 = new closure_6(mostRecentMessage.author);
        obj.author = tmp9;
        let tmp14 = new closure_5(obj);
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
    closure_12 = applyDefault.omitBy(closure_12, (guildId) => {
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
      const item1 = mostRecentMessages.forEach((item, index) => {
        closure_0 = item;
        channel = channel.getChannel(item.channel_id);
        let tmp2 = null != channel;
        if (tmp2) {
          tmp2 = item.type !== constants.THREAD_STARTER_MESSAGE;
        }
        if (tmp2) {
          if (set.has(channel.type)) {
            if (!(channel.id in table)) {
              const obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
              ({ guild_id: obj[0], parent_id: obj[1], messageCount } = channel);
              if (messageCount == null) {
                messageCount = 0;
              }
              obj[2] = messageCount;
              table[channel.id] = obj;
            }
            let num = table2[tmp8.parentId];
            if (num == null) {
              num = 0;
            }
            table2[table[channel.id].parentId] = num + 1;
            ((closure_12) => {
              closure_12.mostRecentRawMessage = closure_0;
              closure_12.mostRecentMessage = null;
            })(table[channel.id]);
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
    closure_12 = applyDefault.omitBy(closure_12, (parentId) => parentId.parentId === id);
    delete tmp[tmp2];
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    if (!message.optimistic) {
      if (!message.isPushNotification) {
        if (null == tmp) {
          const channel = store.getChannel(message.channel_id);
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
                let obj = DISCORD_EPOCHDefault;
                tmp9 = message.id !== obj.castChannelIdAsMessageId(channel.id);
              }
              tmp7 = tmp9;
            }
            if (tmp7) {
              if (set.has(channel.type)) {
                if (!(channel.id in dependencyMap)) {
                  obj = { guildId: null, parentId: null, count: null, mostRecentRawMessage: null, mostRecentMessage: null };
                  ({ guild_id: obj2[0], parent_id: obj2[1], messageCount } = channel);
                  if (messageCount == null) {
                    messageCount = 0;
                  }
                  obj[2] = messageCount;
                  dependencyMap[channel.id] = obj;
                }
                let num = dependencyMap2[tmp17.parentId];
                if (num == null) {
                  num = 0;
                }
                dependencyMap2[dependencyMap[channel.id].parentId] = num + 1;
                ((closure_12) => {
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
            tmp.mostRecentMessage = createMinimalMessageRecord.updateMessageRecord(tmp.mostRecentMessage, message);
          }
          if (null != tmp.mostRecentRawMessage) {
            tmp.mostRecentRawMessage = createMinimalMessageRecord.updateServerMessage(tmp.mostRecentRawMessage, message);
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
      const result = DISCORD_EPOCHDefault.castChannelIdAsMessageId(channelId);
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
      const length = ids.filter((item, index) => {
        let tmp = DISCORD_EPOCHDefault.castChannelIdAsMessageId(channelId) !== item;
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
        const item = ids.forEach((item, index) => set.add(item));
        tmp3 = null != mostRecentMessage && ids.includes(mostRecentMessage.id);
      }
    }
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(isAfter) {
    closure_0 = isAfter;
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
          const channel = store.getChannel(isAfter.channelId);
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
let result = obj132.fileFinishedImporting("modules/threads/ThreadMessageStore.tsx");

export default threadMessageStore;