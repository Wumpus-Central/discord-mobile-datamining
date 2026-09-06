// discord_app/stores/GuildMemberRequesterStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import GuildMemberRequesterDefault from "../lib/guild/GuildMemberRequester.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildMemberStore from "GuildMemberStore.tsx";

function handleConnectionReset() {
  navigation.reset();
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const channel = ChannelStore.getChannel(messages.channelId);
  let flag = null != channel && null != channel.guild_id;
  if (flag) {
    const guild_id = channel.guild_id;
    const item = messages.forEach((item) => {
      ({ author, mentions } = item);
      if (null != author) {
        closure_4.request(guild_id, author.id);
      }
      if (mentions != null) {
        item = mentions.forEach((id) => {
          navigation.request(guild_id, id.id);
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
    let item = data.forEach((messages) => {
      messages = messages.messages;
      let item = messages.forEach((arr) => {
        const item = arr.forEach((item) => {
          closure_1_0.push(item);
        });
      });
    });
    const item1 = items.forEach((item) => {
      ({ author, mentions } = item);
      if (null != author) {
        closure_4.request(guild_id, author.id);
      }
      if (mentions != null) {
        item = mentions.forEach((id) => {
          navigation.request(guild_id, id.id);
          return false;
        });
      }
    });
    return false;
  }
}
const navigation = new GuildMemberRequesterDefault(GuildMemberStore.isMember, (arg0, userIds) => {
  const obj = { type: "GUILD_MEMBERS_REQUEST", guildIds: null, userIds };
  const items = [arg0];
  obj.guildIds = items;
  obj.dispatch(obj);
});
const Store = initializeDefault.Store;
class GuildMemberRequesterStore extends Store {}
const prototype = GuildMemberRequesterStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildMemberStore);
};
prototype["requestMember"] = function requestMember(guildId, id) {
  navigation.request(guildId, id);
};
prototype["getDebugState"] = function getDebugState(arg0) {
  return navigation.getDebugState(arg0);
};
GuildMemberRequesterStore.displayName = "GuildMemberRequesterStore";
const guildMemberRequesterStore = new GuildMemberRequesterStore(DispatcherDefault, {
  CONNECTION_CLOSED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  CONNECTION_RESUMED: function handleConnectionResumed() {
    const unacknowledged = navigation.requestUnacknowledged();
    return false;
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    function _loop(iter) {
      const members = iter.members;
      const item = members.forEach((user) => {
        navigation.acknowledge(iter.guildId, user.user.id);
      });
      if (null != iter.notFound) {
        const notFound = iter.notFound;
        const item1 = notFound.forEach((item) => navigation.acknowledge(iter.guildId, item));
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
    const channel = ChannelStore.getChannel(pins.channelId);
    let flag = null != channel && null != channel.guild_id;
    if (flag) {
      const mapped = pins.map((message) => message.message);
      const guild_id = channel.guild_id;
      const item = mapped.forEach((item) => {
        ({ author, mentions } = item);
        if (null != author) {
          closure_4.request(guild_id, author.id);
        }
        if (mentions != null) {
          item = mentions.forEach((id) => {
            navigation.request(guild_id, id.id);
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
    const channel = ChannelStore.getChannel(messages.channelId);
    let flag = null != channel && null != channel.guild_id;
    if (flag) {
      const combined = messages.concat(messages.messageReferences);
      const guild_id = channel.guild_id;
      const item = combined.forEach((item) => {
        ({ author, mentions } = item);
        if (null != author) {
          closure_4.request(guild_id, author.id);
        }
        if (mentions != null) {
          item = mentions.forEach((id) => {
            navigation.request(guild_id, id.id);
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
    const channel = ChannelStore.getChannel(rawConversations.channelId);
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
        let item = mapped.flat().forEach((item) => {
          ({ author, mentions } = item);
          if (null != author) {
            closure_4.request(guild_id, author.id);
          }
          if (mentions != null) {
            item = mentions.forEach((id) => {
              navigation.request(guild_id, id.id);
              return false;
            });
          }
        });
        return false;
      }
    }
    return false;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/GuildMemberRequesterStore.tsx");

export default guildMemberRequesterStore;
