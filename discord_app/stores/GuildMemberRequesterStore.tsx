// discord_app/stores/GuildMemberRequesterStore.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import importDefaultResult from "trackCommunicationDisabled";
import { Store } from "initialize";

function handleConnectionReset() {
  tmp3.reset();
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const channel = store.getChannel(messages.channelId);
  let flag = null != channel && null != channel.guild_id;
  if (flag) {
    const guild_id = channel.guild_id;
    const item = messages.forEach((arg0) => {
      let author;
      let mentions;
      ({ author, mentions } = arg0);
      if (null != author) {
        outer1_4.request(guild_id, author.id);
      }
      if (mentions != null) {
        const item = mentions.forEach((id) => {
          outer1_4.request(closure_0, id.id);
          return false;
        });
      }
    });
    flag = false;
  }
  return flag;
}
function handleLoadSearchResults(arg0) {
  let data;
  let guildId;
  ({ guildId, data } = arg0);
  guildId = undefined;
  if (null == guildId) {
    return false;
  } else {
    const items = [];
    guildId = items;
    let item = data.forEach((messages) => {
      messages = messages.messages;
      let item = messages.forEach((arr) => {
        const item = arr.forEach((arg0) => {

        });
      });
    });
    const item1 = items.forEach((arg0) => {
      let author;
      let mentions;
      ({ author, mentions } = arg0);
      if (null != author) {
        outer1_4.request(guild_id, author.id);
      }
      if (mentions != null) {
        const item = mentions.forEach((id) => {
          outer1_4.request(closure_0, id.id);
          return false;
        });
      }
    });
    return false;
  }
}
let c3 = importDefaultResult;
let c4 = new require("acknowledge")(importDefaultResult.isMember, (arg0, userIds) => {
  let obj = importDefault(709);
  obj = { type: "GUILD_MEMBERS_REQUEST", guildIds: items, userIds };
  items = [arg0];
  obj.dispatch(obj);
});
class GuildMemberRequesterStore extends Store {
}
const prototype = GuildMemberRequesterStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded, closure_3);
};
prototype["requestMember"] = function requestMember(closure_0, id) {
  tmp3.request(closure_0, id);
};
prototype["getDebugState"] = function getDebugState(arg0) {
  return tmp3.getDebugState(arg0);
};
GuildMemberRequesterStore.displayName = "GuildMemberRequesterStore";
const guildMemberRequesterStore = new GuildMemberRequesterStore(require("dispatcher"), {
  CONNECTION_CLOSED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  CONNECTION_RESUMED: function handleConnectionResumed() {
    const unacknowledged = tmp3.requestUnacknowledged();
    return false;
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    function _loop(iter) {
      let closure_0 = iter;
      const members = iter.members;
      const item = members.forEach((user) => {
        outer1_4.acknowledge(iter.guildId, user.user.id);
      });
      if (null != iter.notFound) {
        const notFound = iter.notFound;
        const item1 = notFound.forEach((arg0) => outer1_4.acknowledge(iter.guildId, arg0));
      }
    }
    const iter = arg0.chunks[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
    return false;
  },
  SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: handleLoadMessages,
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const channel = store.getChannel(pins.channelId);
    let flag = null != channel && null != channel.guild_id;
    if (flag) {
      const mapped = pins.map((message) => message.message);
      const guild_id = channel.guild_id;
      const item = mapped.forEach((arg0) => {
        let author;
        let mentions;
        ({ author, mentions } = arg0);
        if (null != author) {
          outer1_4.request(guild_id, author.id);
        }
        if (mentions != null) {
          const item = mentions.forEach((id) => {
            outer1_4.request(closure_0, id.id);
            return false;
          });
        }
      });
      flag = false;
    }
    return flag;
  },
  CONVERSATION_FETCH_SUCCESS: function handleConversationFetchSuccess(messages) {
    messages = messages.messages;
    const channel = store.getChannel(messages.channelId);
    let flag = null != channel && null != channel.guild_id;
    if (flag) {
      const combined = messages.concat(messages.messageReferences);
      const guild_id = channel.guild_id;
      const item = combined.forEach((arg0) => {
        let author;
        let mentions;
        ({ author, mentions } = arg0);
        if (null != author) {
          outer1_4.request(guild_id, author.id);
        }
        if (mentions != null) {
          const item = mentions.forEach((id) => {
            outer1_4.request(closure_0, id.id);
            return false;
          });
        }
      });
      flag = false;
    }
    return flag;
  },
  CONVERSATIONS_FETCH_SUCCESS: function handleConversationsFetchSuccess(rawConversations) {
    rawConversations = rawConversations.rawConversations;
    const channel = store.getChannel(rawConversations.channelId);
    if (null != channel) {
      if (null != channel.guild_id) {
        const mapped = rawConversations.map((messages) => {
          messages = messages.messages;
          if (messages == null) {
            messages = [];
          }
          return messages;
        });
        const guild_id = channel.guild_id;
        let item = mapped.flat().forEach((arg0) => {
          let author;
          let mentions;
          ({ author, mentions } = arg0);
          if (null != author) {
            outer1_4.request(guild_id, author.id);
          }
          if (mentions != null) {
            const item = mentions.forEach((id) => {
              outer1_4.request(closure_0, id.id);
              return false;
            });
          }
        });
        return false;
      }
    }
    return false;
  }
});
let obj = {
  CONNECTION_CLOSED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  CONNECTION_RESUMED: function handleConnectionResumed() {
    const unacknowledged = tmp3.requestUnacknowledged();
    return false;
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    function _loop(iter) {
      let closure_0 = iter;
      const members = iter.members;
      const item = members.forEach((user) => {
        outer1_4.acknowledge(iter.guildId, user.user.id);
      });
      if (null != iter.notFound) {
        const notFound = iter.notFound;
        const item1 = notFound.forEach((arg0) => outer1_4.acknowledge(iter.guildId, arg0));
      }
    }
    const iter = arg0.chunks[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
    return false;
  },
  SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: handleLoadMessages,
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const channel = store.getChannel(pins.channelId);
    let flag = null != channel && null != channel.guild_id;
    if (flag) {
      const mapped = pins.map((message) => message.message);
      const guild_id = channel.guild_id;
      const item = mapped.forEach((arg0) => {
        let author;
        let mentions;
        ({ author, mentions } = arg0);
        if (null != author) {
          outer1_4.request(guild_id, author.id);
        }
        if (mentions != null) {
          const item = mentions.forEach((id) => {
            outer1_4.request(closure_0, id.id);
            return false;
          });
        }
      });
      flag = false;
    }
    return flag;
  },
  CONVERSATION_FETCH_SUCCESS: function handleConversationFetchSuccess(messages) {
    messages = messages.messages;
    const channel = store.getChannel(messages.channelId);
    let flag = null != channel && null != channel.guild_id;
    if (flag) {
      const combined = messages.concat(messages.messageReferences);
      const guild_id = channel.guild_id;
      const item = combined.forEach((arg0) => {
        let author;
        let mentions;
        ({ author, mentions } = arg0);
        if (null != author) {
          outer1_4.request(guild_id, author.id);
        }
        if (mentions != null) {
          const item = mentions.forEach((id) => {
            outer1_4.request(closure_0, id.id);
            return false;
          });
        }
      });
      flag = false;
    }
    return flag;
  },
  CONVERSATIONS_FETCH_SUCCESS: function handleConversationsFetchSuccess(rawConversations) {
    rawConversations = rawConversations.rawConversations;
    const channel = store.getChannel(rawConversations.channelId);
    if (null != channel) {
      if (null != channel.guild_id) {
        const mapped = rawConversations.map((messages) => {
          messages = messages.messages;
          if (messages == null) {
            messages = [];
          }
          return messages;
        });
        const guild_id = channel.guild_id;
        let item = mapped.flat().forEach((arg0) => {
          let author;
          let mentions;
          ({ author, mentions } = arg0);
          if (null != author) {
            outer1_4.request(guild_id, author.id);
          }
          if (mentions != null) {
            const item = mentions.forEach((id) => {
              outer1_4.request(closure_0, id.id);
              return false;
            });
          }
        });
        return false;
      }
    }
    return false;
  }
};
const tmp3 = new require("acknowledge")(importDefaultResult.isMember, (arg0, userIds) => {
  let obj = importDefault(709);
  obj = { type: "GUILD_MEMBERS_REQUEST", guildIds: items, userIds };
  items = [arg0];
  obj.dispatch(obj);
});
const result = require("acknowledge").fileFinishedImporting("stores/GuildMemberRequesterStore.tsx");

export default guildMemberRequesterStore;