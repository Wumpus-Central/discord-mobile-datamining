// === Module 16143: GuildSettingsModalChannelsStore ===

// Module 16143 (GuildSettingsModalChannelsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 7112 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import apply from "module_12" /* 12 */;

const require = fn;
function sortCategoryList(channel, channel2) {
  channel = channel.channel;
  const type = channel.type;
  channel2 = channel2.channel;
  const type2 = channel2.type;
  if (type !== type2) {
    if (!hasOwnProperty(type)) {
      if (timestampProducer(type)) {
        return num;
      }
      num = 1;
      if (type === constants.GUILD_TEXT) {
        num = -1;
      }
    }
  }
  num = channel.position - channel2.position;
}
function setIndex(arg0, index) {
  arg0.index = index;
}
function buildSortedChannels() {
  _null = { _categories: [], null: [] };
  const keys = Object.keys(closure_19);
  const item = keys.forEach((item) => {
    if (null != closure_1_19[item]) {
      if (null != _categories) {
        if (tmp.type === constants.GUILD_CATEGORY) {
          _categories = _categories._categories;
          let obj = { channel: tmp, index: -1 };
          arr = _categories.push(obj);
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
          obj = { channel: tmp, index: -1 };
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
          const sorted = obj.sort(sortCategoryList);
        }
      }
    }
  });
  const item2 = getFlattedChannelListDefault(_null._categories, _null).forEach(setIndex);
  if (null != _null) {
    const arr4 = getFlattedChannelListDefault(_null._categories, _null, (channel) => {
      channel = channel.channel;
      let tmp = channel.type === constants.GUILD_CATEGORY;
      if (!tmp) {
        let hasItem = null != set;
        if (hasItem) {
          hasItem = set.has(channel.type);
        }
        tmp = hasItem;
      }
      return tmp;
    });
    closure_14 = arr4.map((channel) => channel.channel.id);
  }
  const arr3 = getFlattedChannelListDefault(_null._categories, _null);
}
let closure_3 = ["lock_permissions", "id"];
const ChannelRecord = fn(1961);
({ isGuildSelectableChannelType: hasOwnProperty, isGuildVocalChannelType: metroRequire } = ChannelRecord);
let GuildChannelStore = fn(2012);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_7, GUILD_VOCAL_CHANNELS_KEY: closure_8 } = GuildChannelStore);
const Constants = fn(1074);
({ ChannelTypes: closure_11, Permissions: closure_12 } = Constants);
let c13 = null;
let closure_14 = null;
let c15 = null;
let c16 = null;
let c17 = null;
let closure_19 = {};
let closure_23 = apply.debounce(() => {
  const channels = GuildChannelStore.getChannels(c13);
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
    _require = require("FavoritesUtils").isFavoritesGuildId(c13);
    const item2 = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      let canResult = "null" === channel.id || closure_0;
      if (!canResult) {
        canResult = PermissionStore.can(constants2.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        closure_19[channel.id] = channel;
      }
    });
    buildSortedChannels();
    const obj = require("FavoritesUtils");
  }
  guildSettingsModalChannelsStoreClass.emitChange();
}, 500);
const Store = initializeDefault.Store;
class GuildSettingsModalChannelsStoreClass extends Store {
}
const prototype = GuildSettingsModalChannelsStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildChannelStore, PermissionStore);
  const items = [GuildChannelStore];
  this.syncWith(items, () => {
    closure_1_23();
    return false;
  });
};
prototype["initGuild"] = function initGuild(id) {
  closure_13 = id;
  _require = undefined;
  const channels = GuildChannelStore.getChannels(closure_13);
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
    _require = require("FavoritesUtils").isFavoritesGuildId(closure_13);
    const item2 = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      let canResult = "null" === channel.id || closure_0;
      if (!canResult) {
        canResult = PermissionStore.can(constants2.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        closure_19[channel.id] = channel;
      }
    });
    buildSortedChannels();
    const obj = require("FavoritesUtils");
  }
};
Object.defineProperty(prototype, "channels", {
  get: function channels() {
    return c15;
  },
  set: undefined
});
Object.defineProperty(prototype, "order", {
  get: function order() {
    return closure_14;
  },
  set: undefined
});
Object.defineProperty(prototype, "sortingType", {
  get: function sortingType() {
    return c17;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelList", {
  get: function channelList() {
    return arr;
  },
  set: undefined
});
prototype["getLocalChannel"] = function getLocalChannel(order) {
  return closure_19[order];
};
GuildSettingsModalChannelsStoreClass.displayName = "GuildSettingsModalChannelsStore";
const guildSettingsModalChannelsStoreClass = new GuildSettingsModalChannelsStoreClass(DispatcherDefault, {
  GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE: function handleTerminate() {
    c13 = null;
    closure_14 = null;
    c15 = null;
    c17 = null;
    c16 = null;
  },
  GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER: function handleStartReorder(sortingType) {
    sortingType = sortingType.sortingType;
    if (null == _null) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(sortingType);
      c17 = set;
      if (null != _null) {
        closure_14 = getFlattedChannelListDefault(_null._categories, _null, (channel) => {
          channel = channel.channel;
          let tmp = channel.type === constants.GUILD_CATEGORY;
          if (!tmp) {
            let hasItem = null != set;
            if (hasItem) {
              hasItem = set.has(channel.type);
            }
            tmp = hasItem;
          }
          return tmp;
        }).map((channel) => channel.channel.id);
        arr = getFlattedChannelListDefault(_null._categories, _null, (channel) => {
          channel = channel.channel;
          let tmp = channel.type === constants.GUILD_CATEGORY;
          if (!tmp) {
            let hasItem = null != set;
            if (hasItem) {
              hasItem = set.has(channel.type);
            }
            tmp = hasItem;
          }
          return tmp;
        });
      }
    }
  },
  GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER: function handleStopReorder() {
    c17 = null;
    if (null != _null) {
      closure_14 = getFlattedChannelListDefault(_null._categories, _null, (channel) => {
        channel = channel.channel;
        let tmp = channel.type === constants.GUILD_CATEGORY;
        if (!tmp) {
          let hasItem = null != set;
          if (hasItem) {
            hasItem = set.has(channel.type);
          }
          tmp = hasItem;
        }
        return tmp;
      }).map((channel) => channel.channel.id);
      arr = getFlattedChannelListDefault(_null._categories, _null, (channel) => {
        channel = channel.channel;
        let tmp = channel.type === constants.GUILD_CATEGORY;
        if (!tmp) {
          let hasItem = null != set;
          if (hasItem) {
            hasItem = set.has(channel.type);
          }
          tmp = hasItem;
        }
        return tmp;
      });
    }
  },
  GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE: function handleLocalSortChange(updates) {
    updates = updates.updates;
    const item = updates.forEach((id) => {
      if (null != dependencyMap[id.id]) {
        ({ lock_permissions, id } = id);
        dependencyMap[id.id] = dependencyMap[id.id].merge(_objectWithoutProperties(id, closure_1_3));
      }
    });
    buildSortedChannels();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsStore.tsx");

export default guildSettingsModalChannelsStoreClass;