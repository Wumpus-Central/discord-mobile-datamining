// === Module 16069: GuildSettingsModalChannelsStore ===

// Module 16069 (GuildSettingsModalChannelsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 6607 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4507 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import Constants from "Constants" /* 1085 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f122847 = (channel) => channel.channel.id;
function sortCategoryList(channel, channel2) {
  let num;
  channel = channel.channel;
  const type = channel.type;
  channel2 = channel2.channel;
  const type2 = channel2.type;
  const position = channel.position;
  const position2 = channel2.position;
  if (type !== type2) {
    if (!metroRequire(type)) {
      if (metroImportDefault(type)) {
        return num;
      }
      num = 1;
      if (type === constants.GUILD_TEXT) {
        num = -1;
      }
    }
  }
  num = position - position2;
}
function setIndex(arg0, index) {
  arg0.index = index;
}
function buildSortedChannels() {
  let closure_0;
  const obj = require("FavoritesUtils");
  _require = obj.isFavoritesGuildId(c14);
  _null = { _categories: [], null: [] };
  const keys = Object.keys(closure_20);
  const item = keys.forEach((item) => {
    if (null != closure_20[item]) {
      if (null != _categories) {
        if (closure_20[item].type === constants.GUILD_CATEGORY) {
          _categories = _categories._categories;
          const obj2 = { channel: closure_20[item], index: -1 };
          _categories.push(obj2);
          if (null == _categories[closure_20[item].id]) {
            _categories[closure_20[item].id] = [];
          }
        } else {
          let tmp = closure_0 && null != obj.parent_id;
          if (tmp) {
            let type;
            if (closure_20[closure_20[item].parent_id] != null) {
              type = tmp3.type;
            }
            tmp = type !== tmp22.GUILD_CATEGORY;
          }
          let tmp5 = obj;
          if (tmp) {
            const obj3 = { parent_id: null };
            const merged = Object.assign(obj.toJS());
            const tmp9 = hasOwnProperty(obj3);
            closure_20[item] = tmp9;
            tmp5 = tmp9;
          }
          let str = tmp5.parent_id;
          const _String = String;
          if (str == null) {
            str = "null";
          }
          const _StringResult = _String(str);
          if (null == _categories[_StringResult]) {
            _categories[_StringResult] = [];
          }
          arr = _categories[_StringResult];
          const obj4 = { channel: tmp5, index: -1 };
          arr.push(obj4);
        }
      }
    }
  });
  let _categories = _null._categories;
  let sorted = _categories.sort(sortCategoryList);
  const _categories1 = _null._categories;
  const item1 = _categories1.forEach((channel) => {
    channel = channel.channel;
    if (null != _categories) {
      if (null != channel) {
        if (null != _categories[channel.id]) {
          const sorted = obj.sort(sortCategoryList);
        }
      }
    }
  });
  const arr3 = getFlattedChannelListDefault(_null._categories, _null);
  const item2 = arr3.forEach(setIndex);
  if (null != _null) {
    const arr4 = getFlattedChannelListDefault(_null._categories, _null, (channel) => {
      channel = channel.channel;
      let tmp = channel.type === constants.GUILD_CATEGORY;
      if (!tmp) {
        const hasItem = null != set && set.has(channel.type);
        tmp = hasItem;
      }
      return tmp;
    });
    closure_15 = arr4.map(f122847);
  }
}
let closure_3 = ["lock_permissions", "id"];
({ castChannelRecord: hasOwnProperty, isGuildSelectableChannelType: metroRequire, isGuildVocalChannelType: metroImportDefault } = ChannelRecord);
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: metroImportAll, GUILD_VOCAL_CHANNELS_KEY: c9 } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
({ ChannelTypes: closure_12, Permissions: map1 } = Constants);
let c14 = null;
let closure_15 = null;
let c16 = null;
let c17 = null;
let c18 = null;
let arr = null;
let closure_20 = {};
let closure_24 = module_12.debounce(() => {
  let closure_0;
  const channels = GuildChannelStore.getChannels(c14);
  if (channels !== channels) {
    closure_20 = {};
    arr = channels[closure_8];
    const item = arr.forEach((channel) => {
      channel = channel.channel;
      closure_20[channel.id] = channel;
      return channel;
    });
    const arr2 = channels[closure_9];
    const item1 = arr2.forEach((channel) => {
      channel = channel.channel;
      closure_20[channel.id] = channel;
      return channel;
    });
    const obj = require("FavoritesUtils");
    _require = obj.isFavoritesGuildId(c14);
    const arr3 = channels[constants.GUILD_CATEGORY];
    const item2 = arr3.forEach((channel) => {
      channel = channel.channel;
      const canResult = "null" === channel.id || closure_0 || PermissionStore.can(map1.VIEW_CHANNEL, channel);
      if (canResult) {
        closure_20[channel.id] = channel;
      }
    });
    buildSortedChannels();
  }
  guildSettingsModalChannelsStoreClass.emitChange();
}, 500);
const Store = get_initializedDefault.Store;
class GuildSettingsModalChannelsStoreClass extends Store {
  initialize() {
    this.waitFor(GuildChannelStore, PermissionStore);
    const items = [GuildChannelStore];
    this.syncWith(items, () => {
      closure_1_24();
      return false;
    });
  }
  initGuild(id) {
    let closure_0;
    let closure_14 = id;
    _require = undefined;
    const channels = GuildChannelStore.getChannels(closure_14);
    if (channels !== channels) {
      closure_20 = {};
      arr = channels[closure_8];
      const item = arr.forEach((channel) => {
        channel = channel.channel;
        closure_20[channel.id] = channel;
        return channel;
      });
      const arr2 = channels[closure_9];
      const item1 = arr2.forEach((channel) => {
        channel = channel.channel;
        closure_20[channel.id] = channel;
        return channel;
      });
      const obj = require("FavoritesUtils");
      _require = obj.isFavoritesGuildId(closure_14);
      const arr3 = channels[constants.GUILD_CATEGORY];
      const item2 = arr3.forEach((channel) => {
        channel = channel.channel;
        const canResult = "null" === channel.id || closure_0 || PermissionStore.can(map1.VIEW_CHANNEL, channel);
        if (canResult) {
          closure_20[channel.id] = channel;
        }
      });
      buildSortedChannels();
    }
  }
  getLocalChannel(order) {
    return closure_20[order];
  }
}
const prototype = GuildSettingsModalChannelsStoreClass.prototype;
Object.defineProperty(prototype, "channels", {
  get: function channels() {
    return c16;
  },
  set: undefined
});
Object.defineProperty(prototype, "order", {
  get: function order() {
    return closure_15;
  },
  set: undefined
});
Object.defineProperty(prototype, "sortingType", {
  get: function sortingType() {
    return c18;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelList", {
  get: function channelList() {
    return arr;
  },
  set: undefined
});
GuildSettingsModalChannelsStoreClass.displayName = "GuildSettingsModalChannelsStore";
let obj = {
  GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE: function handleTerminate() {
    c14 = null;
    closure_15 = null;
    let c16 = null;
    c18 = null;
    c17 = null;
  },
  GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER: function handleStartReorder(sortingType) {
    sortingType = sortingType.sortingType;
    if (null == _null) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      c18 = new Set(sortingType);
      set = new Set(sortingType);
      if (null != _null) {
        arr = getFlattedChannelListDefault(_null._categories, _null, (channel) => {
          channel = channel.channel;
          let tmp = channel.type === constants.GUILD_CATEGORY;
          if (!tmp) {
            const hasItem = null != set && set.has(channel.type);
            tmp = hasItem;
          }
          return tmp;
        });
        closure_15 = arr.map(f122847);
      }
    }
  },
  GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER: function handleStopReorder() {
    c18 = null;
    if (null != _null) {
      arr = getFlattedChannelListDefault(_null._categories, _null, (channel) => {
        channel = channel.channel;
        let tmp = channel.type === constants.GUILD_CATEGORY;
        if (!tmp) {
          const hasItem = null != set && set.has(channel.type);
          tmp = hasItem;
        }
        return tmp;
      });
      closure_15 = arr.map(f122847);
    }
  },
  GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE: function handleLocalSortChange(updates) {
    updates = updates.updates;
    const item = updates.forEach((id) => {
      let lock_permissions;
      if (null != closure_1_20[id.id]) {
        ({ lock_permissions, id } = id);
        const obj = closure_1_20[id.id];
        closure_1_20[id.id] = obj.merge(_objectWithoutProperties(id, closure_1_3));
      }
    });
    buildSortedChannels();
  }
};
const guildSettingsModalChannelsStoreClass = new GuildSettingsModalChannelsStoreClass(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsStore.tsx");

export default guildSettingsModalChannelsStoreClass;