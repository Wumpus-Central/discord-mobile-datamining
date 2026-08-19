// discord_app/stores/GuildMemberRequesterStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import acknowledgeDefault from "../lib/guild/GuildMemberRequester.tsx";
import ensureGuildLoaded from "ChannelStore.tsx";
import importDefaultResult from "GuildMemberStore.tsx";

function handleConnectionReset() {
  navigation.reset();
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const channel = store.getChannel(messages.channelId);
  let flag = null != channel && null != channel.guild_id;
  if (flag) {
    const guild_id = channel.guild_id;
    const item = messages.forEach((item, index) => {
      ({ author, mentions } = item);
      if (null != author) {
        closure_1_4.request(guild_id, author.id);
      }
      if (mentions != null) {
        item = mentions.forEach((item, index) => {
          closure_1_4.request(closure_0, item.id);
          return false;
        });
      }
    });
    flag = false;
  }
  return flag;
}
function handleLoadSearchResults(arg0) {
  ({ guildId, data } = arg0);
  guildId = undefined;
  if (null == guildId) {
    return false;
  } else {
    const items = [];
    guildId = items;
    let item = data.forEach((item, index) => {
      const messages = item.messages;
      item = messages.forEach((item, index) => {
        item = item.forEach((item, index) => {

        });
      });
    });
    const item1 = items.forEach((item, index) => {
      ({ author, mentions } = item);
      if (null != author) {
        closure_1_4.request(guild_id, author.id);
      }
      if (mentions != null) {
        item = mentions.forEach((item, index) => {
          closure_1_4.request(closure_0, item.id);
          return false;
        });
      }
    });
    return false;
  }
}
let c3 = importDefaultResult;
let closure_4 = new acknowledgeDefault(importDefaultResult.isMember, (arg0, userIds) => {
  const obj = { type: "GUILD_MEMBERS_REQUEST", guildIds: items, userIds };
  items = [arg0];
  obj.dispatch(obj);
});
const Store = initializeDefault.Store;
class GuildMemberRequesterStore extends Store {
}
const prototype = GuildMemberRequesterStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_3);
};
prototype["requestMember"] = function requestMember(closure_0, id) {
  navigation.request(closure_0, id);
};
prototype["getDebugState"] = function getDebugState(arg0) {
  return navigation.getDebugState(arg0);
};
GuildMemberRequesterStore.displayName = "GuildMemberRequesterStore";
const guildMemberRequesterStore = new GuildMemberRequesterStore(dispatcherDefault, {
  CONNECTION_CLOSED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  CONNECTION_RESUMED: function handleConnectionResumed() {
    const unacknowledged = navigation.requestUnacknowledged();
    return false;
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    function _loop(iter) {
      closure_0 = iter;
      const members = iter.members;
      const item = members.forEach((item, index) => {
        closure_1_4.acknowledge(iter.guildId, item.user.id);
      });
      if (null != iter.notFound) {
        const notFound = iter.notFound;
        const item1 = notFound.forEach((item, index) => closure_1_4.acknowledge(iter.guildId, item));
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
      const mapped = pins.map((item, index) => item.message);
      const guild_id = channel.guild_id;
      const item = mapped.forEach((item, index) => {
        ({ author, mentions } = item);
        if (null != author) {
          closure_1_4.request(guild_id, author.id);
        }
        if (mentions != null) {
          item = mentions.forEach((item, index) => {
            closure_1_4.request(closure_0, item.id);
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
      const item = combined.forEach((item, index) => {
        ({ author, mentions } = item);
        if (null != author) {
          closure_1_4.request(guild_id, author.id);
        }
        if (mentions != null) {
          item = mentions.forEach((item, index) => {
            closure_1_4.request(closure_0, item.id);
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
        const mapped = rawConversations.map((item, index) => {
          let messages = item.messages;
          if (messages == null) {
            messages = [];
          }
          return messages;
        });
        const guild_id = channel.guild_id;
        let item = mapped.flat().forEach((item, index) => {
          ({ author, mentions } = item);
          if (null != author) {
            closure_1_4.request(guild_id, author.id);
          }
          if (mentions != null) {
            item = mentions.forEach((item, index) => {
              closure_1_4.request(closure_0, item.id);
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
const tmp3 = new acknowledgeDefault(importDefaultResult.isMember, (arg0, userIds) => {
  const obj = { type: "GUILD_MEMBERS_REQUEST", guildIds: items, userIds };
  items = [arg0];
  obj.dispatch(obj);
});
const result = require("obj132").fileFinishedImporting("stores/GuildMemberRequesterStore.tsx");

export default guildMemberRequesterStore;