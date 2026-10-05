// discord_app/stores/ChannelPinsStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import MessageRecordUtils from "../modules/messages/MessageRecordUtils.tsx";
import ExplicitMediaRedactionUtils from "../modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import LocaleStore from "../modules/user_settings/LocaleStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildMemberStore from "GuildMemberStore.tsx";
import GuildStore from "GuildStore.tsx";
import MessageStore from "MessageStore.tsx";
import RelationshipStore from "RelationshipStore.tsx";
import UserStore from "UserStore.tsx";
import size from "../../_runtime/metro/00002__.js";

function handleChannelDelete(arg0) {
  delete closure_11[arg0.channel.id];
}
function handleRelationshipUpdate() {
  const arr = _modDef12;
  let item = arr.forEach(closure_11, (items) => {
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
const FetchState = {
  LOADING: "LOADING",
  LOADED_HAS_MORE: "LOADED_HAS_MORE",
  LOADED_FINISHED: "LOADING_FINISHED",
  FAILED: "FAILED",
};
const unpackModuleId = {};
const Store = get_initializedDefault.Store;
class ChannelPinsStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildMemberStore, GuildStore, LocaleStore, MessageStore, RelationshipStore, UserStore);
  }
  getPins(channelId) {
    return closure_11[channelId];
  }
}
const prototype = ChannelPinsStore.prototype;
ChannelPinsStore.displayName = "ChannelPinsStore";
let obj2 = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_11 = {};
  },
  LOAD_PINNED_MESSAGES: function handleLoadStart(channelId) {
    let obj;
    channelId = channelId.channelId;
    if (!channelId.reset) {
      if (null != closure_11[channelId]) {
        closure_11[channelId].state = obj.LOADING;
      }
    }
    const channel = ChannelStore.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    obj = { id: channelId, items: [], state: obj.LOADING, guildId };
    closure_11[channelId] = obj;
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadSuccess(pins) {
    let obj;
    pins = pins.pins;
    if (null == closure_11[pins.channelId]) {
      return false;
    } else {
      const mapped = pins.map((message) => {
        let obj2;
        const obj = { pinnedAt: new Date(Date.parse(message.pinned_at)), message: obj2.createMessageRecord(message) };
        message = message.message;
        new Date(Date.parse(message.pinned_at));
        obj2 = MessageRecordUtils;
        return obj;
      });
      const items = [];
      HermesBuiltin.arraySpread(items, mapped, HermesBuiltin.arraySpread(items, closure_11[pins.channelId].items, 0));
      closure_11[pins.channelId].items = items;
      closure_11[pins.channelId].state = tmp2 ? obj.LOADED_HAS_MORE : obj.LOADED_FINISHED;
    }
  },
  LOAD_PINNED_MESSAGES_FAILURE: function handleLoadFail(arg0) {
    if (null == closure_11[arg0.channelId]) {
      return false;
    } else {
      closure_11[arg0.channelId].state = obj.FAILED;
    }
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const arr = _modDef12(closure_11);
    const found = arr.filter((guildId) => guildId.guildId !== guild.id);
    const iter = found.keyBy("id");
    closure_11 = iter.value();
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    let channelId;
    let closure_129_0;
    ({ id: closure_129_0, channelId } = arg0);
    let tmp2 = null != tmp;
    if (tmp2) {
      const obj = _modDef12;
      const tmp5 =
        0 !== obj.remove(closure_11[channelId].items, (message) => message.message.id === closure_1_0).length;
      if (tmp5) {
        const items = tmp.items;
        closure_11[channelId].items = items.slice();
        closure_11[channelId] = closure_11[channelId];
      }
      tmp2 = tmp5;
    }
    return tmp2;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    ids = ids.ids;
    if (null == closure_11[ids.channelId]) {
      return false;
    } else {
      const items = tmp.items;
      closure_11[ids.channelId].items = items.filter((message) => !ids.includes(message.message.id));
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let date;
    let obj6;
    const id = message.message.id;
    const channel_id = message.message.channel_id;
    if (null == channel_id) {
      return false;
    } else if (null == closure_11[channel_id]) {
      return false;
    } else if (null != message.message.author) {
      if (message.message.pinned) {
        const items = tmp19.items;
        closure_11[channel_id].items = items.slice();
        const obj3 = _modDef12;
        const findIndexResult = obj3.findIndex(closure_11[channel_id].items, (message) => message.message.id === id);
        if (-1 === findIndexResult) {
          const items1 = tmp19.items;
          const unshift = items1.unshift;
          const obj5 = { message: obj6.createMessageRecord(message.message), pinnedAt: date };
          const _Date = Date;
          const self = this;
          const self2 = this;
          obj6 = MessageRecordUtils;
          date = new Date();
          unshift(obj5);
        } else {
          const tmp11 = closure_11[channel_id].items[findIndexResult];
          const obj4 = MessageRecordUtils;
          tmp11.message = obj4.updateMessageRecord(
            closure_11[channel_id].items[findIndexResult].message,
            message.message,
          );
        }
      } else {
        const obj2 = _modDef12;
        const findIndexResult1 = obj2.findIndex(closure_11[channel_id].items, (message) => message.message.id === id);
        if (-1 === findIndexResult1) {
          return false;
        } else {
          const items2 = tmp19.items;
          closure_11[channel_id].items = items2.slice();
          const items3 = tmp19.items;
          items3.splice(findIndexResult1, 1);
        }
      }
    } else {
      const obj7 = _modDef12;
      const findIndexResult2 = obj7.findIndex(closure_11[channel_id].items, (message) => message.message.id === id);
      if (-1 !== findIndexResult2) {
        message = tmp.message;
        const pinnedAt = tmp.pinnedAt;
        const obj = MessageRecordUtils;
        const updateMessageRecordResult = obj.updateMessageRecord(message, message.message);
        if (updateMessageRecordResult !== message) {
          const items4 = tmp19.items;
          const substr = items4.slice();
          const obj8 = { pinnedAt, message: updateMessageRecordResult };
          substr[findIndexResult2] = obj8;
          closure_11[channel_id].items = substr;
        }
      }
    }
  },
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleScanTimeout(messageId) {
    messageId = messageId.messageId;
    if (null == closure_11[messageId.channelId]) {
      return false;
    } else {
      const obj2 = _modDef12;
      const findIndexResult = obj2.findIndex(
        closure_11[messageId.channelId].items,
        (message) => message.message.id === messageId,
      );
      if (-1 === findIndexResult) {
        return false;
      } else {
        const items = tmp.items;
        closure_11[messageId.channelId].items = items.slice();
        const tmp2 = closure_11[messageId.channelId].items[findIndexResult];
        const obj = ExplicitMediaRedactionUtils;
        tmp2.message = obj.handleExplicitMediaScanTimeoutForMessage(
          closure_11[messageId.channelId].items[findIndexResult].message,
        );
      }
    }
  },
};
const channelPinsStore = new ChannelPinsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("stores/ChannelPinsStore.tsx");

export default channelPinsStore;
export { FetchState };
