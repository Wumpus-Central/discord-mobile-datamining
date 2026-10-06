// discord_app/stores/GuildMemberRequesterStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import GuildMemberRequesterDefault from "../lib/guild/GuildMemberRequester.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildMemberStore from "GuildMemberStore.tsx";
import size from "../../_runtime/metro/00002__.js";

const f35479 = (arg0, userIds) => {
  let items;
  const obj2 = { type: "GUILD_MEMBERS_REQUEST", guildIds: items, userIds };
  items = [arg0];
  const obj = DispatcherDefault;
  obj.dispatch(obj2);
};
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
      let author;
      let mentions;
      ({ author, mentions } = item);
      if (null != author) {
        navigation.request(guild_id, author.id);
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
  let data;
  let guildId;
  ({ guildId, data } = arg0);
  let items;
  if (null == guildId) {
    return false;
  } else {
    items = [];
    let item = data.forEach((messages) => {
      messages = messages.messages;
      let item = messages.forEach((arr) => {
        const item = arr.forEach((item) => {
          closure_1_0.push(item);
        });
      });
    });
    const item1 = items.forEach((item) => {
      let author;
      let mentions;
      ({ author, mentions } = item);
      if (null != author) {
        navigation.request(guild_id, author.id);
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
const React3 = new GuildMemberRequesterDefault(GuildMemberStore.isMember, f35479);
new GuildMemberRequesterDefault(GuildMemberStore.isMember, f35479);
const Store = get_initializedDefault.Store;
class GuildMemberRequesterStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildMemberStore);
  }
  requestMember(guild_id, id) {
    navigation.request(guild_id, id);
  }
  getDebugState(arg0) {
    return navigation.getDebugState(arg0);
  }
}
const prototype = GuildMemberRequesterStore.prototype;
GuildMemberRequesterStore.displayName = "GuildMemberRequesterStore";
let obj = {
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
    let iter = arg0.chunks[Symbol.iterator]();
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
    const item = messages.forEach((item) => {
      let author;
      let mentions;
      ({ author, mentions } = item);
      if (null != author) {
        navigation.request(guild_id, author.id);
      }
      if (mentions != null) {
        item = mentions.forEach((id) => {
          navigation.request(guild_id, id.id);
          return false;
        });
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
      const guild_id = channel.guild_id;
      const mapped = pins.map((message) => message.message);
      const item = mapped.forEach((item) => {
        let author;
        let mentions;
        ({ author, mentions } = item);
        if (null != author) {
          navigation.request(guild_id, author.id);
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
  CONVERSATION_MESSAGES_FETCH_SUCCESS: function handleConversationMessagesFetchSuccess(messages) {
    messages = messages.messages;
    const messageReferences = messages.messageReferences;
    const channel = ChannelStore.getChannel(messages.channelId);
    let flag = null != channel && null != channel.guild_id;
    if (flag) {
      const guild_id = channel.guild_id;
      const combined = messages.concat(messageReferences);
      const item = combined.forEach((item) => {
        let author;
        let mentions;
        ({ author, mentions } = item);
        if (null != author) {
          navigation.request(guild_id, author.id);
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
        const flatResult = mapped.flat();
        let item = flatResult.forEach((item) => {
          let author;
          let mentions;
          ({ author, mentions } = item);
          if (null != author) {
            navigation.request(guild_id, author.id);
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
};
const guildMemberRequesterStore = new GuildMemberRequesterStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/GuildMemberRequesterStore.tsx");

export default guildMemberRequesterStore;
