// === Module 6640: GuildMemberRequesterStore ===

// Module 6640 (GuildMemberRequesterStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import MessageTypes from "MessageTypes" /* 1103 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4868 */;
import GuildMemberRequesterDefault from "GuildMemberRequester" /* 6641 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import GuildMemberStore from "GuildMemberStore" /* 4860 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4851 */;

require = fn;
function handleConnectionReset() {
  navigation.reset();
}
function requestMember(arg0, arg1) {
  navigation.request(arg0, arg1);
  return false;
}
function requestLeaderboardMembers(guildId, message) {
  const guild_space_data = message.guild_space_data;
  let leaderboard;
  if (guild_space_data != null) {
    leaderboard = guild_space_data.leaderboard;
  }
  const guildSpaceLeaderboardUserIds = GuildLeaderboardTypes.getGuildSpaceLeaderboardUserIds(leaderboard);
  while (tmp3 !== undefined) {
    let tmp6 = requestMember(guildId, tmp4);
    continue;
  }
  tmp3 = guildSpaceLeaderboardUserIds[Symbol.iterator]();
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const channel = ChannelStore.getChannel(messages.channelId);
  let flag = null != channel && null != channel.guild_id;
  if (flag) {
    const guild_id = channel.guild_id;
    const item = messages.forEach((type) => {
      ({ author, mentions } = type);
      if (null != author) {
        closure_6.request(guild_id, author.id);
      }
      if (mentions != null) {
        const item = mentions.forEach((id) => {
          navigation.request(guild_id, id.id);
          return false;
        });
      }
      if (type.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
        requestLeaderboardMembers(guild_id, type);
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
    const item1 = items.forEach((type) => {
      ({ author, mentions } = type);
      if (null != author) {
        closure_6.request(guild_id, author.id);
      }
      if (mentions != null) {
        const item = mentions.forEach((id) => {
          navigation.request(guild_id, id.id);
          return false;
        });
      }
      if (type.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
        requestLeaderboardMembers(guild_id, type);
      }
    });
    return false;
  }
}
const navigation = new GuildMemberRequesterDefault(GuildMemberStore.isMember, (arg0, userIds) => {
  const obj2 = { type: "GUILD_MEMBERS_REQUEST", guildIds: null, userIds };
  const items = [arg0];
  obj2.guildIds = items;
  DispatcherDefault.dispatch(obj2);
});
const Store = initializeDefault.Store;
class GuildMemberRequesterStore extends Store {
}
const prototype = GuildMemberRequesterStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildMemberStore, SelectedChannelStore);
};
prototype["requestMember"] = function requestMember(arg0, arg1) {
  navigation.request(arg0, arg1);
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
  SMART_SEARCH_FETCH_SUCCESS: function handleSmartSearchFetchSuccess(messages) {
    messages = messages.messages;
    const guildId = messages.smartSearchQuery.guildId;
    const item = messages.forEach((type) => {
      ({ author, mentions } = type);
      if (null != author) {
        closure_6.request(guild_id, author.id);
      }
      if (mentions != null) {
        const item = mentions.forEach((id) => {
          navigation.request(guild_id, id.id);
          return false;
        });
      }
      if (type.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
        requestLeaderboardMembers(guild_id, type);
      }
    });
    return false;
  },
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
      const item = mapped.forEach((type) => {
        ({ author, mentions } = type);
        if (null != author) {
          closure_6.request(guild_id, author.id);
        }
        if (mentions != null) {
          const item = mentions.forEach((id) => {
            navigation.request(guild_id, id.id);
            return false;
          });
        }
        if (type.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
          requestLeaderboardMembers(guild_id, type);
        }
      });
      flag = false;
    }
    return flag;
  },
  MESSAGE_CREATE: function handleMessageCreate(arg0) {
    ({ guildId, channelId, message } = arg0);
    if (channelId !== SelectedChannelStore.getCurrentlySelectedChannelId()) {
      return false;
    } else {
      if (guildId == null) {
        const channel = ChannelStore.getChannel(channelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        guildId = guild_id;
      }
      if (null != guildId) {
        if (message.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
          requestLeaderboardMembers(guildId, message);
        }
      }
      return false;
    }
  },
  CONVERSATION_MESSAGES_FETCH_SUCCESS: function handleConversationMessagesFetchSuccess(messages) {
    messages = messages.messages;
    const channel = ChannelStore.getChannel(messages.channelId);
    let flag = null != channel && null != channel.guild_id;
    if (flag) {
      const combined = messages.concat(messages.messageReferences);
      const guild_id = channel.guild_id;
      const item = combined.forEach((type) => {
        ({ author, mentions } = type);
        if (null != author) {
          closure_6.request(guild_id, author.id);
        }
        if (mentions != null) {
          const item = mentions.forEach((id) => {
            navigation.request(guild_id, id.id);
            return false;
          });
        }
        if (type.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
          requestLeaderboardMembers(guild_id, type);
        }
      });
      flag = false;
    }
    return flag;
  },
  CHANNEL_CONVERSATIONS_FETCH_SUCCESS: function handleChannelConversationsFetchSuccess(rawConversations) {
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
        let item = mapped.flat().forEach((type) => {
          ({ author, mentions } = type);
          if (null != author) {
            closure_6.request(guild_id, author.id);
          }
          if (mentions != null) {
            const item = mentions.forEach((id) => {
              navigation.request(guild_id, id.id);
              return false;
            });
          }
          if (type.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
            requestLeaderboardMembers(guild_id, type);
          }
        });
        return false;
      }
    }
    return false;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/GuildMemberRequesterStore.tsx");

export default guildMemberRequesterStore;