// discord_app/stores/ChannelPinsStore.tsx
import _getSystemLocale from "_getSystemLocale";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import reinjectEphemerals from "reinjectEphemerals";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Store } from "initialize";
import { apply } from "../../_runtime/00012_apply.js";

const require = arg1;
function handleChannelDelete(arg0) {
  delete tmp2[tmp];
}
function handleRelationshipUpdate() {
  let item = apply.forEach(closure_11, (items) => {
    items = items.items;
    const item = items.forEach((message) => {
      message = message.message;
      const result = message.set("blocked", upsertRelationship.isBlockedForMessage(message));
      const result1 = message.set("ignored", upsertRelationship.isIgnoredForMessage(message));
    });
    const items1 = items.items;
    items.items = items1.slice();
  });
}
let obj = { LOADING: "LOADING", LOADED_HAS_MORE: "LOADED_HAS_MORE", LOADED_FINISHED: "LOADING_FINISHED", FAILED: "FAILED" };
let closure_11 = {};
class ChannelPinsStore extends Store {
}
const prototype = ChannelPinsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded, trackCommunicationDisabled, createGuildRecordFromRust, _getSystemLocale, reinjectEphemerals, upsertRelationship, mergeGuildAvatar);
};
prototype["getPins"] = function getPins(channelId) {
  return dependencyMap[channelId];
};
ChannelPinsStore.displayName = "ChannelPinsStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_11 = {};
  },
  LOAD_PINNED_MESSAGES: function handleLoadStart(channelId) {
    channelId = channelId.channelId;
    if (!channelId.reset) {
      if (null != dependencyMap[channelId]) {
        dependencyMap[channelId].state = obj.LOADING;
      }
    }
    channel = channel.getChannel(channelId);
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
        const obj = { pinnedAt: null, message: null };
        obj[0] = new Date(Date.parse(pinned_at.pinned_at));
        const date = new Date(Date.parse(pinned_at.pinned_at));
        obj[1] = callback(table[7]).createMessageRecord(pinned_at.message);
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
    const found = apply(closure_11).filter((guildId) => guildId.guildId !== guild.id);
    const arr = apply(closure_11);
    closure_11 = found.keyBy("id").value();
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    let channelId;
    let require;
    ({ id: require, channelId } = arg0);
    let tmp2 = null != tmp;
    if (tmp2) {
      const tmp5 = 0 !== apply.remove(tmp.items, (message) => message.message.id === closure_0).length;
      if (tmp5) {
        const items = tmp.items;
        tmp.items = items.slice();
        dependencyMap[channelId] = tmp;
      }
      tmp2 = tmp5;
      const obj = apply;
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
        const findIndexResult = apply.findIndex(tmp20.items, (message) => message.message.id === id);
        if (-1 === findIndexResult) {
          const items1 = tmp20.items;
          let obj = { message: null, pinnedAt: null };
          obj[0] = id(4523).createMessageRecord(message.message);
          const _Date = Date;
          const date = new Date();
          obj[1] = date;
          items1.unshift(obj);
          const obj6 = id(4523);
        } else {
          tmp20.items[findIndexResult].message = id(4523).updateMessageRecord(tmp20.items[findIndexResult].message, message.message);
          const obj4 = id(4523);
        }
        const obj3 = apply;
      } else {
        const findIndexResult1 = apply.findIndex(tmp20.items, (message) => message.message.id === id);
        if (-1 === findIndexResult1) {
          return false;
        } else {
          const items2 = tmp20.items;
          tmp20.items = items2.slice();
          const items3 = tmp20.items;
          items3.splice(findIndexResult1, 1);
        }
        const obj2 = apply;
      }
    } else {
      const findIndexResult2 = apply.findIndex(tmp20.items, (message) => message.message.id === id);
      if (-1 !== findIndexResult2) {
        message = tmp.message;
        obj = id(4523);
        const updateMessageRecordResult = obj.updateMessageRecord(message, message.message);
        if (updateMessageRecordResult !== message) {
          const items4 = tmp20.items;
          const substr = items4.slice();
          obj = { pinnedAt: null, message: null };
          obj[0] = tmp.pinnedAt;
          obj[1] = updateMessageRecordResult;
          substr[findIndexResult2] = obj;
          dependencyMap[channel_id].items = substr;
        }
      }
      const obj7 = apply;
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
      const findIndexResult = apply.findIndex(tmp.items, (message) => message.message.id === messageId);
      if (-1 === findIndexResult) {
        return false;
      } else {
        const items = tmp.items;
        tmp.items = items.slice();
        tmp.items[findIndexResult].message = messageId(7059).handleExplicitMediaScanTimeoutForMessage(tmp.items[findIndexResult].message);
      }
      const obj2 = apply;
    }
  }
};
const channelPinsStore = new ChannelPinsStore(require("dispatcher"), obj);
let result = require("trackCommunicationDisabled").fileFinishedImporting("stores/ChannelPinsStore.tsx");

export default channelPinsStore;
export const FetchState = obj;