// discord_app/modules/guild_settings/GuildSettingsModalChannelsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import getFlattedChannelListDefault from "../channel/getFlattedChannelList.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import apply from "../../../_runtime/metro/00012__.js";

const require = fn;
function sortCategoryList(channel, channel2) {
  channel = channel.channel;
  const type = channel.type;
  channel2 = channel2.channel;
  const type2 = channel2.type;
  if (type !== type2) {
    if (!timestampProducer(type)) {
      if (React5(type)) {
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
  _require = require("FavoritesUtils").isFavoritesGuildId(c14);
  _null = { _categories: [], null: [] };
  const keys = Object.keys(dependencyMap);
  const item = keys.forEach((item) => {
    let obj = dependencyMap[item];
    if (null != obj) {
      if (null != _categories) {
        if (obj.type === constants.GUILD_CATEGORY) {
          _categories = _categories._categories;
          obj = { channel: null, index: -1 };
          obj.channel = obj;
          arr = _categories.push(obj);
          if (null == _categories[obj.id]) {
            _categories[obj.id] = [];
          }
        } else {
          let tmp = closure_0;
          if (closure_0) {
            tmp = null != obj.parent_id;
          }
          if (tmp) {
            let type;
            if (dependencyMap[obj.parent_id] != null) {
              type = tmp3.type;
            }
            tmp = type !== tmp22.GUILD_CATEGORY;
          }
          let tmp5 = obj;
          if (tmp) {
            obj = {};
            const merged = Object.assign(obj.toJS());
            obj.parent_id = null;
            const tmp9 = hasOwnProperty(obj);
            dependencyMap[item] = tmp9;
            tmp5 = tmp9;
          }
          let str = tmp5.parent_id;
          if (str == null) {
            str = "null";
          }
          const StringResult = String(str);
          if (null == _categories[StringResult]) {
            _categories[StringResult] = [];
          }
          arr = _categories[StringResult];
          const obj1 = { channel: tmp5, index: -1 };
          arr = arr.push(obj1);
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
  let obj = require("FavoritesUtils");
  const item2 = getFlattedChannelListDefault(_null._categories, _null).forEach(setIndex);
  if (null != _null) {
    closure_15 = getFlattedChannelListDefault(_null._categories, _null, (channel) => {
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
  }
  const arr3 = getFlattedChannelListDefault(_null._categories, _null);
}
let closure_3 = ["lock_permissions", "id"];
const ChannelRecord = fn(1961);
({
  castChannelRecord: hasOwnProperty,
  isGuildSelectableChannelType: metroRequire,
  isGuildVocalChannelType: closure_7,
} = ChannelRecord);
let GuildChannelStore = fn(2012);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_8, GUILD_VOCAL_CHANNELS_KEY: closure_9 } = GuildChannelStore);
const Constants = fn(1074);
({ ChannelTypes: closure_12, Permissions: map1 } = Constants);
let c14 = null;
let closure_15 = null;
let c16 = null;
let c17 = null;
let c18 = null;
let closure_20 = {};
let closure_24 = apply.debounce(() => {
  const channels = GuildChannelStore.getChannels(c14);
  if (channels !== channels) {
    closure_20 = {};
    const item = channels[closure_8].forEach((channel) => {
      channel = channel.channel;
      closure_20[channel.id] = channel;
      return channel;
    });
    const item1 = channels[closure_9].forEach((channel) => {
      channel = channel.channel;
      closure_20[channel.id] = channel;
      return channel;
    });
    _require = require("FavoritesUtils").isFavoritesGuildId(c14);
    const item2 = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      let canResult = "null" === channel.id || closure_0;
      if (!canResult) {
        canResult = PermissionStore.can(constants2.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        closure_20[channel.id] = channel;
      }
    });
    buildSortedChannels();
    const obj = require("FavoritesUtils");
  }
  guildSettingsModalChannelsStoreClass.emitChange();
}, 500);
const Store = initializeDefault.Store;
class GuildSettingsModalChannelsStoreClass extends Store {}
const prototype = GuildSettingsModalChannelsStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildChannelStore, PermissionStore);
  const items = [GuildChannelStore];
  this.syncWith(items, () => {
    closure_1_24();
    return false;
  });
};
prototype["initGuild"] = function initGuild(id) {
  closure_14 = id;
  _require = undefined;
  const channels = GuildChannelStore.getChannels(closure_14);
  if (channels !== channels) {
    closure_20 = {};
    const item = channels[closure_8].forEach((channel) => {
      channel = channel.channel;
      closure_20[channel.id] = channel;
      return channel;
    });
    const item1 = channels[closure_9].forEach((channel) => {
      channel = channel.channel;
      closure_20[channel.id] = channel;
      return channel;
    });
    _require = require("FavoritesUtils").isFavoritesGuildId(closure_14);
    const item2 = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      let canResult = "null" === channel.id || closure_0;
      if (!canResult) {
        canResult = PermissionStore.can(constants2.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        closure_20[channel.id] = channel;
      }
    });
    buildSortedChannels();
    const obj = require("FavoritesUtils");
  }
};
Object.defineProperty(prototype, "channels", {
  get: function channels() {
    return c16;
  },
  set: undefined,
});
Object.defineProperty(prototype, "order", {
  get: function order() {
    return closure_15;
  },
  set: undefined,
});
Object.defineProperty(prototype, "sortingType", {
  get: function sortingType() {
    return c18;
  },
  set: undefined,
});
Object.defineProperty(prototype, "channelList", {
  get: function channelList() {
    return arr;
  },
  set: undefined,
});
prototype["getLocalChannel"] = function getLocalChannel(order) {
  return closure_20[order];
};
GuildSettingsModalChannelsStoreClass.displayName = "GuildSettingsModalChannelsStore";
const guildSettingsModalChannelsStoreClass = new GuildSettingsModalChannelsStoreClass(DispatcherDefault, {
  GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE: function handleTerminate() {
    c14 = null;
    closure_15 = null;
    c16 = null;
    c18 = null;
    c17 = null;
  },
  GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER: function handleStartReorder(sortingType) {
    sortingType = sortingType.sortingType;
    if (null == _null) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(sortingType);
      c18 = set;
      if (null != _null) {
        closure_15 = getFlattedChannelListDefault(_null._categories, _null, (channel) => {
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
    c18 = null;
    if (null != _null) {
      closure_15 = getFlattedChannelListDefault(_null._categories, _null, (channel) => {
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
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsStore.tsx");

export default guildSettingsModalChannelsStoreClass;
