// === Module 15500: sortCategoryList ===

// Module 15500 (sortCategoryList)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getFlattenedChannelListDefault from "getFlattenedChannelList" /* 5361 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import comparator from "comparator" /* 1982 */;
import closure_9 from "comparator" /* 1982 */;
import closure_10 from "getUncachedChannelPermissions" /* 4025 */;
import ME from "ME" /* 676 */;
import importDefaultResult from "apply" /* 12 */;

const require = arg1;
function sortCategoryList(channel, channel2) {
  channel = channel.channel;
  const type = channel.type;
  channel2 = channel2.channel;
  const type2 = channel2.type;
  if (type !== type2) {
    if (!callback(type)) {
      if (callback2(type)) {
        return num;
      }
      num = 1;
      if (type === constants.GUILD_TEXT) {
        num = -1;
      }
      const tmp2 = callback2;
    }
    const tmp = callback;
  }
  num = channel.position - channel2.position;
}
function setIndex(arg0, index) {
  arg0.index = index;
}
function buildSortedChannels() {
  const _null = { _categories: [], null: [] };
  const keys = Object.keys(closure_19);
  const item = keys.forEach((arg0) => {
    if (null != table[arg0]) {
      if (null != _categories) {
        if (tmp.type === constants.GUILD_CATEGORY) {
          _categories = _categories._categories;
          let obj = { channel: null, index: -1 };
          obj[0] = tmp;
          let arr = _categories.push(obj);
          if (null == _categories[tmp.id]) {
            _categories[tmp.id] = [];
          }
        } else {
          let str = tmp.parent_id;
          if (str == null) {
            str = "null";
          }
          const StringResult = String(str);
          if (null == _categories[StringResult]) {
            _categories[StringResult] = [];
          }
          arr = _categories[StringResult];
          obj = { channel: null, index: -1 };
          obj[0] = tmp;
          arr = arr.push(obj);
        }
      }
    }
  });
  let _categories = _null._categories;
  let sorted = _categories.sort(sortCategoryList);
  _categories = _null._categories;
  const item1 = _categories.forEach((channel) => {
    channel = channel.channel;
    if (null != _categories) {
      if (null != channel) {
        if (null != _categories[channel.id]) {
          const sorted = obj.sort(closure_20);
        }
      }
    }
  });
  const item2 = getFlattenedChannelListDefault(_null._categories, _null).forEach(setIndex);
  if (null != _null) {
    const arr4 = getFlattenedChannelListDefault(_null._categories, _null, (channel) => {
      channel = channel.channel;
      let tmp = channel.type === constants.GUILD_CATEGORY;
      if (!tmp) {
        let hasItem = null != _null;
        if (hasItem) {
          hasItem = _null.has(channel.type);
        }
        tmp = hasItem;
      }
      return tmp;
    });
    closure_14 = arr4.map((channel) => channel.channel.id);
  }
}
let closure_3 = ["lock_permissions", "id"];
({ isGuildSelectableChannelType: c5, isGuildVocalChannelType: closure_6 } = createChannelRecord);
({ GUILD_SELECTABLE_CHANNELS_KEY: error, GUILD_VOCAL_CHANNELS_KEY: closure_8 } = comparator);
({ ChannelTypes: unpackModuleId, Permissions: closure_12 } = ME);
let c13 = null;
let c14 = null;
let c15 = null;
let c16 = null;
let c17 = null;
let c18 = null;
let closure_19 = {};
let closure_23 = importDefaultResult.debounce(() => {
  const channels = store.getChannels(c13);
  if (channels !== channels) {
    closure_19 = {};
    const item = channels[closure_7].forEach((channel) => {
      channel = channel.channel;
      closure_19[channel.id] = channel;
      return channel;
    });
    const item1 = channels[closure_8].forEach((channel) => {
      channel = channel.channel;
      closure_19[channel.id] = channel;
      return channel;
    });
    _require = _require(1913).isFavoritesGuildId(c13);
    const item2 = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      let canResult = "null" === channel.id || closure_0;
      if (!canResult) {
        canResult = closure_1_10.can(closure_1_12.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        closure_19[channel.id] = channel;
      }
    });
    buildSortedChannels();
    const arr = channels[closure_7];
    const arr2 = channels[closure_8];
    const arr3 = channels[constants.GUILD_CATEGORY];
    const obj = _require(1913);
  }
  guildSettingsModalChannelsStoreClass.emitChange();
}, 500);
const Store = initializeDefault.Store;
class GuildSettingsModalChannelsStoreClass extends Store {
}
const prototype = GuildSettingsModalChannelsStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_9, closure_10);
  const items = [closure_9];
  this.syncWith(items, () => {
    callback();
    return false;
  });
};
prototype["initGuild"] = function initGuild(closure_6) {
  closure_13 = closure_6;
  let _require;
  const channels = store.getChannels(closure_13);
  if (channels !== channels) {
    closure_19 = {};
    const item = channels[closure_7].forEach((channel) => {
      channel = channel.channel;
      closure_19[channel.id] = channel;
      return channel;
    });
    const item1 = channels[closure_8].forEach((channel) => {
      channel = channel.channel;
      closure_19[channel.id] = channel;
      return channel;
    });
    _require = _require(1913).isFavoritesGuildId(closure_13);
    const item2 = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      let canResult = "null" === channel.id || closure_0;
      if (!canResult) {
        canResult = closure_1_10.can(closure_1_12.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        closure_19[channel.id] = channel;
      }
    });
    buildSortedChannels();
    const arr = channels[closure_7];
    const arr2 = channels[closure_8];
    const arr3 = channels[constants.GUILD_CATEGORY];
    const obj = _require(1913);
  }
};
Object.defineProperty(prototype, "channels", {
  get: function channels(c0) {
    return c15;
  },
  set: undefined
});
Object.defineProperty(prototype, "order", {
  get: function order() {
    return c14;
  },
  set: undefined
});
Object.defineProperty(prototype, "sortingType", {
  get: function sortingType(arg0) {
    return c17;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelList", {
  get: function channelList() {
    return c18;
  },
  set: undefined
});
prototype["getLocalChannel"] = function getLocalChannel(id) {
  return table[id];
};
GuildSettingsModalChannelsStoreClass.displayName = "GuildSettingsModalChannelsStore";
const guildSettingsModalChannelsStoreClass = new GuildSettingsModalChannelsStoreClass(dispatcherDefault, {
  GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE: function handleTerminate() {
    c13 = null;
    c14 = null;
    c15 = null;
    c17 = null;
    c18 = null;
    c16 = null;
  },
  GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER: function handleStartReorder(sortingType) {
    sortingType = sortingType.sortingType;
    if (null == _null) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(sortingType);
      if (null != _null) {
        const arr = getFlattenedChannelListDefault(_null._categories, _null, (channel) => {
          channel = channel.channel;
          let tmp = channel.type === constants.GUILD_CATEGORY;
          if (!tmp) {
            let hasItem = null != _null;
            if (hasItem) {
              hasItem = _null.has(channel.type);
            }
            tmp = hasItem;
          }
          return tmp;
        });
        closure_14 = arr.map((channel) => channel.channel.id);
      }
    }
  },
  GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER: function handleStopReorder() {
    c17 = null;
    if (null != _null) {
      const arr = getFlattenedChannelListDefault(_null._categories, _null, (channel) => {
        channel = channel.channel;
        let tmp = channel.type === constants.GUILD_CATEGORY;
        if (!tmp) {
          let hasItem = null != _null;
          if (hasItem) {
            hasItem = _null.has(channel.type);
          }
          tmp = hasItem;
        }
        return tmp;
      });
      closure_14 = arr.map((channel) => channel.channel.id);
    }
  },
  GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE: function handleLocalSortChange(updates) {
    updates = updates.updates;
    const item = updates.forEach((id) => {
      if (null != dependencyMap[id.id]) {
        ({ lock_permissions, id } = id);
        dependencyMap[id.id] = dependencyMap[id.id].merge(callback(id, closure_3));
        const obj = dependencyMap[id.id];
      }
    });
    buildSortedChannels();
  }
});
let obj = {
  GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE: function handleTerminate() {
    c13 = null;
    c14 = null;
    c15 = null;
    c17 = null;
    c18 = null;
    c16 = null;
  },
  GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER: function handleStartReorder(sortingType) {
    sortingType = sortingType.sortingType;
    if (null == _null) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(sortingType);
      if (null != _null) {
        const arr = getFlattenedChannelListDefault(_null._categories, _null, (channel) => {
          channel = channel.channel;
          let tmp = channel.type === constants.GUILD_CATEGORY;
          if (!tmp) {
            let hasItem = null != _null;
            if (hasItem) {
              hasItem = _null.has(channel.type);
            }
            tmp = hasItem;
          }
          return tmp;
        });
        closure_14 = arr.map((channel) => channel.channel.id);
      }
    }
  },
  GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER: function handleStopReorder() {
    c17 = null;
    if (null != _null) {
      const arr = getFlattenedChannelListDefault(_null._categories, _null, (channel) => {
        channel = channel.channel;
        let tmp = channel.type === constants.GUILD_CATEGORY;
        if (!tmp) {
          let hasItem = null != _null;
          if (hasItem) {
            hasItem = _null.has(channel.type);
          }
          tmp = hasItem;
        }
        return tmp;
      });
      closure_14 = arr.map((channel) => channel.channel.id);
    }
  },
  GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE: function handleLocalSortChange(updates) {
    updates = updates.updates;
    const item = updates.forEach((id) => {
      if (null != dependencyMap[id.id]) {
        ({ lock_permissions, id } = id);
        dependencyMap[id.id] = dependencyMap[id.id].merge(callback(id, closure_3));
        const obj = dependencyMap[id.id];
      }
    });
    buildSortedChannels();
  }
};
const result = require("set").fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsStore.tsx");

export default guildSettingsModalChannelsStoreClass;