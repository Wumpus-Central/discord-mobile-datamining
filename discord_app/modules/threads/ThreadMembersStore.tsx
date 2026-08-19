// === Module 7517: updateFromGuild ===

// Module 7517 (updateFromGuild)
import obj132 from "obj132" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;

function updateFromGuild(threads) {
  threads = threads.threads;
  if (threads != null) {
    const item = threads.forEach(updateFromThread);
  }
}
function updateFromThread(type) {
  if (ALL_CHANNEL_TYPES.has(type.type)) {
    if (!(type.id in dependencyMap)) {
      const obj = { guildId: null, parentId: null, memberCount: null, memberIdsPreview: null };
      ({ guild_id: obj[0], parent_id: obj[1], memberCount } = type);
      if (memberCount == null) {
        memberCount = 0;
      }
      obj[2] = memberCount;
      let memberIdsPreview = type.memberIdsPreview;
      if (memberIdsPreview == null) {
        memberIdsPreview = [];
      }
      obj[3] = memberIdsPreview;
      dependencyMap[type.id] = obj;
    }
    if (null != type.memberCount) {
      tmp5.memberCount = type.memberCount;
    }
    if (null != type.memberIdsPreview) {
      tmp5.memberIdsPreview = type.memberIdsPreview;
    }
  } else {
    return false;
  }
}
function handleThreadCreateOrUpdate(channel) {
  channel = channel.channel;
  if (ALL_CHANNEL_TYPES.has(channel.type)) {
    if (!(channel.id in dependencyMap)) {
      const obj = { guildId: null, parentId: null, memberCount: null, memberIdsPreview: null };
      ({ guild_id: obj[0], parent_id: obj[1], memberCount } = channel);
      if (memberCount == null) {
        memberCount = 0;
      }
      obj[2] = memberCount;
      let memberIdsPreview = channel.memberIdsPreview;
      if (memberIdsPreview == null) {
        memberIdsPreview = [];
      }
      obj[3] = memberIdsPreview;
      dependencyMap[channel.id] = obj;
    }
    if (null != channel.memberCount) {
      tmp5.memberCount = channel.memberCount;
    }
    if (null != channel.memberIdsPreview) {
      tmp5.memberIdsPreview = channel.memberIdsPreview;
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
  c0 = false;
  let item = data.forEach((item, index) => {
    ({ threads, messages } = item);
    item = messages.forEach((item, index) => {
      item = item.forEach((item, index) => {
        const thread = item.thread;
        if (null != thread) {
          if (!(thread.id in closure_1_4)) {
            const channel = closure_1_3.getChannel(thread.id);
            if (null != channel) {
              if (closure_1_2.has(channel.type)) {
                if (!(channel.id in closure_1_4)) {
                  const obj = { guildId: null, parentId: null, memberCount: null, memberIdsPreview: null };
                  ({ guild_id: obj[0], parent_id: obj[1], memberCount } = channel);
                  if (memberCount == null) {
                    memberCount = 0;
                  }
                  obj[2] = memberCount;
                  let memberIdsPreview = channel.memberIdsPreview;
                  if (memberIdsPreview == null) {
                    memberIdsPreview = [];
                  }
                  obj[3] = memberIdsPreview;
                  closure_1_4[channel.id] = obj;
                }
                if (null != channel.memberCount) {
                  tmp8.memberCount = channel.memberCount;
                }
                if (null != channel.memberIdsPreview) {
                  tmp8.memberIdsPreview = channel.memberIdsPreview;
                }
              }
            }
          }
        }
      });
    });
    const item1 = threads.forEach((item, index) => {
      if (null != item) {
        if (!(item.id in closure_1_4)) {
          const channel = closure_1_3.getChannel(item.id);
          if (null != channel) {
            if (closure_1_2.has(channel.type)) {
              if (!(channel.id in closure_1_4)) {
                const obj = { guildId: null, parentId: null, memberCount: null, memberIdsPreview: null };
                ({ guild_id: obj[0], parent_id: obj[1], memberCount } = channel);
                if (memberCount == null) {
                  memberCount = 0;
                }
                obj[2] = memberCount;
                let memberIdsPreview = channel.memberIdsPreview;
                if (memberIdsPreview == null) {
                  memberIdsPreview = [];
                }
                obj[3] = memberIdsPreview;
                closure_1_4[channel.id] = obj;
              }
              if (null != channel.memberCount) {
                tmp8.memberCount = channel.memberCount;
              }
              if (null != channel.memberIdsPreview) {
                tmp8.memberIdsPreview = channel.memberIdsPreview;
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
  if (null != id) {
    if (!(id.id in dependencyMap)) {
      channel = channel.getChannel(id.id);
      if (null != channel) {
        if (ALL_CHANNEL_TYPES.has(channel.type)) {
          if (!(channel.id in dependencyMap)) {
            const obj = { guildId: null, parentId: null, memberCount: null, memberIdsPreview: null };
            ({ guild_id: obj[0], parent_id: obj[1], memberCount } = channel);
            if (memberCount == null) {
              memberCount = 0;
            }
            obj[2] = memberCount;
            let memberIdsPreview = channel.memberIdsPreview;
            if (memberIdsPreview == null) {
              memberIdsPreview = [];
            }
            obj[3] = memberIdsPreview;
            dependencyMap[channel.id] = obj;
          }
          if (null != channel.memberCount) {
            tmp6.memberCount = channel.memberCount;
          }
          if (null != channel.memberIdsPreview) {
            tmp6.memberIdsPreview = channel.memberIdsPreview;
          }
        }
        return true;
      }
    }
  }
  return false;
}
const ALL_CHANNEL_TYPES = createChannelRecord.ALL_CHANNEL_TYPES;
let closure_4 = {};
const Store = initializeDefault.Store;
class ThreadMembersStore extends Store {
}
const prototype = ThreadMembersStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3);
};
prototype["getMemberCount"] = function getMemberCount(arg0) {
  let memberCount;
  if (dependencyMap[arg0] != null) {
    memberCount = tmp.memberCount;
  }
  if (memberCount == null) {
    memberCount = null;
  }
  return memberCount;
};
prototype["getMemberIdsPreview"] = function getMemberIdsPreview(arg0) {
  let memberIdsPreview;
  if (dependencyMap[arg0] != null) {
    memberIdsPreview = tmp.memberIdsPreview;
  }
  if (memberIdsPreview == null) {
    memberIdsPreview = null;
  }
  return memberIdsPreview;
};
prototype["getInitialOverlayState"] = function getInitialOverlayState() {
  return closure_4;
};
ThreadMembersStore.displayName = "ThreadMembersStore";
const threadMembersStore = new ThreadMembersStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    closure_4 = {};
    guilds = guilds.guilds;
    const item = guilds.forEach(updateFromGuild);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(threadMembers) {
    const merged = Object.assign(threadMembers.threadMembers);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    const threads = guild.guild.threads;
    if (threads != null) {
      const item = threads.forEach(updateFromThread);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    closure_4 = id(12).omitBy(closure_4, (guildId) => guildId.guildId === id);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    closure_4 = id(12).omitBy(closure_4, (parentId) => parentId.parentId === id);
  },
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_UPDATE: handleThreadCreateOrUpdate,
  THREAD_LIST_SYNC: function handleThreadListSync(threads) {
    threads = threads.threads;
    const item = threads.forEach(updateFromThread);
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(memberIdsPreview) {
    if (null == dependencyMap[memberIdsPreview.id]) {
      return false;
    } else {
      if (null != memberIdsPreview.memberIdsPreview) {
        tmp.memberIdsPreview = memberIdsPreview.memberIdsPreview;
      }
      tmp.memberCount = memberIdsPreview.memberCount;
    }
  },
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  LOAD_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  THREAD_DELETE: function handleThreadDelete(arg0) {
    delete tmp2[tmp];
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(arg0) {
    let flag = false;
    for (const item10007 of tmp) {
      let tmp3 = updateFromServerThread(item10007.thread);
      if (!tmp3) {
        tmp3 = flag;
      }
      flag = tmp3;
      continue;
    }
    return flag;
  }
});
const result = obj132.fileFinishedImporting("modules/threads/ThreadMembersStore.tsx");

export default threadMembersStore;