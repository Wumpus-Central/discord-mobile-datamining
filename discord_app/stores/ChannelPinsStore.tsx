// === Module 11675: ChannelPinsStore ===

// Module 11675 (ChannelPinsStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4783 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7600 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import MessageStore from "MessageStore" /* 4781 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function handleChannelDelete(arg0) {
  delete tmp2[tmp];
}
function handleRelationshipUpdate() {
  let item = _modDef12.forEach(closure_11, (items) => {
    items = items.items;
    const item = items.forEach((message) => {
      message = message.message;
      const result = message.set("blocked", closure_1_8.isBlockedForMessage(message));
      const result1 = message.set("ignored", closure_1_8.isIgnoredForMessage(message));
    });
    const items1 = items.items;
    items.items = items1.slice();
  });
}
let FetchState = { LOADING: "LOADING", LOADED_HAS_MORE: "LOADED_HAS_MORE", LOADED_FINISHED: "LOADING_FINISHED", FAILED: "FAILED" };
const dependencyMap = {};
const Store = initializeDefault.Store;
class ChannelPinsStore extends Store {
}
const prototype = ChannelPinsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildMemberStore, GuildStore, LocaleStore, MessageStore, RelationshipStore, UserStore);
};
prototype["getPins"] = function getPins(channelId) {
  return dependencyMap[channelId];
};
ChannelPinsStore.displayName = "ChannelPinsStore";
FetchState = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_11 = {};
  },
  LOAD_PINNED_MESSAGES: function handleLoadStart(channelId) {
    channelId = channelId.channelId;
    if (!channelId.reset) {
      if (null != dependencyMap[channelId]) {
        dependencyMap[channelId].state = obj.LOADING;
      }
    }
    const channel = ChannelStore.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    obj = { id: channelId, items: [], state: obj.LOADING, guildId };
    dependencyMap[channelId] = obj;
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadSuccess(pins) {
    pins = pins.pins;
    if (null == dependencyMap[pins.channelId]) {
      return false;
    } else {
      const mapped = pins.map((pinned_at) => {
        const obj = { pinnedAt: new Date(Date.parse(pinned_at.pinned_at)), message: null };
        const date = new Date(Date.parse(pinned_at.pinned_at));
        obj.message = MessageRecordUtils.createMessageRecord(pinned_at.message);
        return obj;
      });
      const items = [];
      HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(tmp2.items, 0));
      tmp2.items = items;
      tmp2.state = tmp ? obj.LOADED_HAS_MORE : obj.LOADED_FINISHED;
    }
  },
  LOAD_PINNED_MESSAGES_FAILURE: function handleLoadFail(arg0) {
    if (null == dependencyMap[arg0.channelId]) {
      return false;
    } else {
      tmp.state = obj.FAILED;
    }
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const found = _modDef12(closure_11).filter((guildId) => guildId.guildId !== guild.id);
    const arr = _modDef12(closure_11);
    closure_11 = found.keyBy("id").value();
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    ({ id: require, channelId } = arg0);
    let tmp2 = null != tmp;
    if (tmp2) {
      const tmp5 = 0 !== _modDef12.remove(tmp.items, (message) => message.message.id === require).length;
      if (tmp5) {
        const items = tmp.items;
        tmp.items = items.slice();
        dependencyMap[channelId] = tmp;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    ids = ids.ids;
    if (null == dependencyMap[ids.channelId]) {
      return false;
    } else {
      const items = tmp.items;
      tmp.items = items.filter((message) => !ids.includes(message.message.id));
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    const channel_id = message.message.channel_id;
    if (null == channel_id) {
      return false;
    } else if (null == dependencyMap[channel_id]) {
      return false;
    } else if (null != message.message.author) {
      if (message.message.pinned) {
        const items = tmp20.items;
        tmp20.items = items.slice();
        const findIndexResult = _modDef12.findIndex(tmp20.items, (message) => message.message.id === id);
        if (-1 === findIndexResult) {
          const items1 = tmp20.items;
          let obj = { message: MessageRecordUtils.createMessageRecord(message.message), pinnedAt: null };
          const _Date = Date;
          const date = new Date();
          obj.pinnedAt = date;
          items1.unshift(obj);
        } else {
          tmp20.items[findIndexResult].message = MessageRecordUtils.updateMessageRecord(tmp20.items[findIndexResult].message, message.message);
        }
      } else {
        const findIndexResult1 = _modDef12.findIndex(tmp20.items, (message) => message.message.id === id);
        if (-1 === findIndexResult1) {
          return false;
        } else {
          const items2 = tmp20.items;
          tmp20.items = items2.slice();
          const items3 = tmp20.items;
          items3.splice(findIndexResult1, 1);
        }
      }
    } else {
      const findIndexResult2 = _modDef12.findIndex(tmp20.items, (message) => message.message.id === id);
      if (-1 !== findIndexResult2) {
        message = tmp.message;
        obj = MessageRecordUtils;
        const updateMessageRecordResult = obj.updateMessageRecord(message, message.message);
        if (updateMessageRecordResult !== message) {
          const items4 = tmp20.items;
          const substr = items4.slice();
          obj = { pinnedAt: tmp.pinnedAt, message: updateMessageRecordResult };
          substr[findIndexResult2] = obj;
          dependencyMap[channel_id].items = substr;
        }
      }
    }
  },
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleScanTimeout(messageId) {
    messageId = messageId.messageId;
    if (null == dependencyMap[messageId.channelId]) {
      return false;
    } else {
      const findIndexResult = _modDef12.findIndex(tmp.items, (message) => message.message.id === messageId);
      if (-1 === findIndexResult) {
        return false;
      } else {
        const items = tmp.items;
        tmp.items = items.slice();
        tmp.items[findIndexResult].message = ExplicitMediaRedactionUtils.handleExplicitMediaScanTimeoutForMessage(tmp.items[findIndexResult].message);
      }
    }
  }
};
const channelPinsStore = new ChannelPinsStore(DispatcherDefault, FetchState);
const size = fn(2);
let result = size.fileFinishedImporting("stores/ChannelPinsStore.tsx");

export default channelPinsStore;
export { FetchState };