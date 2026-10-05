// === Module 7266: ThreadMembersStore ===

// Module 7266 (ThreadMembersStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

let thread;

function updateFromGuild(threads) {
  threads = threads.threads;
  if (threads != null) {
    const item = threads.forEach(updateFromThread);
  }
}
function updateFromThread(type) {
  let memberCount;
  let memberIdsPreview;
  if (ALL_CHANNEL_TYPES.has(type.type)) {
    if (!(type.id in closure_4)) {
      const obj = { guildId: null, parentId: null, memberCount, memberIdsPreview };
      ({ guild_id: obj.guildId, parent_id: obj.parentId, memberCount } = type);
      const id = type.id;
      if (memberCount == null) {
        memberCount = 0;
      }
      memberIdsPreview = type.memberIdsPreview;
      if (memberIdsPreview == null) {
        memberIdsPreview = [];
      }
      closure_4[id] = obj;
    }
    if (null != type.memberCount) {
      closure_4[type.id].memberCount = type.memberCount;
    }
    if (null != type.memberIdsPreview) {
      closure_4[type.id].memberIdsPreview = type.memberIdsPreview;
    }
  } else {
    return false;
  }
}
function handleThreadCreateOrUpdate(channel) {
  let memberCount;
  let memberIdsPreview;
  channel = channel.channel;
  if (ALL_CHANNEL_TYPES.has(channel.type)) {
    if (!(channel.id in closure_4)) {
      const obj = { guildId: null, parentId: null, memberCount, memberIdsPreview };
      ({ guild_id: obj.guildId, parent_id: obj.parentId, memberCount } = channel);
      const id = channel.id;
      if (memberCount == null) {
        memberCount = 0;
      }
      memberIdsPreview = channel.memberIdsPreview;
      if (memberIdsPreview == null) {
        memberIdsPreview = [];
      }
      closure_4[id] = obj;
    }
    if (null != channel.memberCount) {
      closure_4[channel.id].memberCount = channel.memberCount;
    }
    if (null != channel.memberIdsPreview) {
      closure_4[channel.id].memberIdsPreview = channel.memberIdsPreview;
    }
  }
  return false;
}
function handleLoadArchivedThreadsSuccess(threads) {
  threads = threads.threads;
  const item = threads.forEach(updateFromServerThread);
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let c0 = false;
  let item = data.forEach((item) => {
    let flag;
    let messages;
    let threads;
    ({ threads, messages } = item);
    item = messages.forEach((arr) => {
      const item = arr.forEach((thread) => {
        let memberCount;
        let memberIdsPreview;
        thread = thread.thread;
        if (null != thread) {
          if (!(thread.id in closure_2_4)) {
            channel = channel.getChannel(thread.id);
            if (null != channel) {
              if (set.has(channel.type)) {
                if (!(channel.id in closure_2_4)) {
                  const obj = { guildId: null, parentId: null, memberCount, memberIdsPreview };
                  ({ guild_id: obj.guildId, parent_id: obj.parentId, memberCount } = channel);
                  const id = channel.id;
                  if (memberCount == null) {
                    memberCount = 0;
                  }
                  memberIdsPreview = channel.memberIdsPreview;
                  if (memberIdsPreview == null) {
                    memberIdsPreview = [];
                  }
                  closure_2_4[id] = obj;
                }
                if (null != channel.memberCount) {
                  closure_2_4[channel.id].memberCount = channel.memberCount;
                }
                if (null != channel.memberIdsPreview) {
                  closure_2_4[channel.id].memberIdsPreview = channel.memberIdsPreview;
                }
              }
            }
          }
        }
      });
    });
    const item1 = threads.forEach((id) => {
      let memberCount;
      let memberIdsPreview;
      if (null != id) {
        if (!(id.id in closure_2_4)) {
          channel = channel.getChannel(id.id);
          if (null != channel) {
            if (set.has(channel.type)) {
              if (!(channel.id in closure_2_4)) {
                const obj = { guildId: null, parentId: null, memberCount, memberIdsPreview };
                ({ guild_id: obj.guildId, parent_id: obj.parentId, memberCount } = channel);
                id = channel.id;
                if (memberCount == null) {
                  memberCount = 0;
                }
                memberIdsPreview = channel.memberIdsPreview;
                if (memberIdsPreview == null) {
                  memberIdsPreview = [];
                }
                closure_2_4[id] = obj;
              }
              if (null != channel.memberCount) {
                closure_2_4[channel.id].memberCount = channel.memberCount;
              }
              if (null != channel.memberIdsPreview) {
                closure_2_4[channel.id].memberIdsPreview = channel.memberIdsPreview;
              }
            }
          }
        }
      }
    });
  });
  return c0;
}
function updateFromServerThread(id) {
  let memberCount;
  let memberIdsPreview;
  if (null != id) {
    if (!(id.id in closure_4)) {
      const channel = ChannelStore.getChannel(id.id);
      if (null != channel) {
        if (ALL_CHANNEL_TYPES.has(channel.type)) {
          if (!(channel.id in closure_4)) {
            const obj = { guildId: null, parentId: null, memberCount, memberIdsPreview };
            ({ guild_id: obj.guildId, parent_id: obj.parentId, memberCount } = channel);
            id = channel.id;
            if (memberCount == null) {
              memberCount = 0;
            }
            memberIdsPreview = channel.memberIdsPreview;
            if (memberIdsPreview == null) {
              memberIdsPreview = [];
            }
            closure_4[id] = obj;
          }
          if (null != channel.memberCount) {
            closure_4[channel.id].memberCount = channel.memberCount;
          }
          if (null != channel.memberIdsPreview) {
            closure_4[channel.id].memberIdsPreview = channel.memberIdsPreview;
          }
        }
        return true;
      }
    }
  }
  return false;
}
const ALL_CHANNEL_TYPES = ChannelRecord.ALL_CHANNEL_TYPES;
const React3 = {};
const Store = get_initializedDefault.Store;
class ThreadMembersStore extends Store {
  initialize() {
    this.waitFor(ChannelStore);
  }
  getMemberCount(arg0) {
    let memberCount;
    if (closure_4[arg0] != null) {
      memberCount = tmp.memberCount;
    }
    if (memberCount == null) {
      memberCount = null;
    }
    return memberCount;
  }
  getMemberIdsPreview(arg0) {
    let memberIdsPreview;
    if (closure_4[arg0] != null) {
      memberIdsPreview = tmp.memberIdsPreview;
    }
    if (memberIdsPreview == null) {
      memberIdsPreview = null;
    }
    return memberIdsPreview;
  }
  getInitialOverlayState() {
    return closure_4;
  }
}
const prototype = ThreadMembersStore.prototype;
ThreadMembersStore.displayName = "ThreadMembersStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    closure_4 = {};
    guilds = guilds.guilds;
    const item = guilds.forEach(updateFromGuild);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(threadMembers) {
    const obj = {};
    const merged = Object.assign(threadMembers.threadMembers);
    closure_4 = obj;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    const threads = guild.guild.threads;
    if (threads != null) {
      const item = threads.forEach(updateFromThread);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    const obj = _modDef12;
    closure_4 = obj.omitBy(closure_4, (guildId) => guildId.guildId === id);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    const obj = _modDef12;
    closure_4 = obj.omitBy(closure_4, (parentId) => parentId.parentId === id);
  },
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_UPDATE: handleThreadCreateOrUpdate,
  THREAD_LIST_SYNC: function handleThreadListSync(threads) {
    threads = threads.threads;
    const item = threads.forEach(updateFromThread);
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(memberIdsPreview) {
    if (null == closure_4[memberIdsPreview.id]) {
      return false;
    } else {
      if (null != memberIdsPreview.memberIdsPreview) {
        closure_4[memberIdsPreview.id].memberIdsPreview = memberIdsPreview.memberIdsPreview;
      }
      closure_4[memberIdsPreview.id].memberCount = memberIdsPreview.memberCount;
    }
  },
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  LOAD_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  THREAD_DELETE: function handleThreadDelete(arg0) {
    delete closure_4[arg0.channel.id];
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(messages) {
    let flag = false;
    messages = messages.messages;
    for (const item10007 of messages) {
      let tmp2 = updateFromServerThread(item10007.thread) || flag;
      flag = tmp2;
      continue;
    }
    return flag;
  }
};
const threadMembersStore = new ThreadMembersStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/threads/ThreadMembersStore.tsx");

export default threadMembersStore;