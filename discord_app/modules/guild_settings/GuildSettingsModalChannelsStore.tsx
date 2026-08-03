import _objectWithoutProperties from "_objectWithoutProperties";
import createChannelRecord from "createChannelRecord";
import comparator from "comparator";
import closure_8 from "comparator";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import { Store } from "initialize";
import importDefaultResult from "apply";

let c10;
let c4;
let c5;
let closure_6;
let error;
let unpackModuleId;
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
  const keys = Object.keys(closure_18);
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
          const sorted = obj.sort(closure_19);
        }
      }
    }
  });
  const item2 = importDefault(5132)(_null._categories, _null).forEach(setIndex);
  if (null != _null) {
    const arr4 = importDefault(5132)(_null._categories, _null, (channel) => {
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
    let closure_13 = arr4.map((channel) => channel.channel.id);
  }
}
let closure_2 = ["lock_permissions", "id"];
({ isGuildSelectableChannelType: c4, isGuildVocalChannelType: c5 } = createChannelRecord);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_6, GUILD_VOCAL_CHANNELS_KEY: error } = comparator);
({ ChannelTypes: c10, Permissions: unpackModuleId } = ME);
let c12 = null;
let c13 = null;
let c14 = null;
let c15 = null;
let c16 = null;
let c17 = null;
let closure_18 = {};
let closure_22 = require("apply").debounce(() => {
  const channels = store.getChannels(c12);
  if (channels !== channels) {
    let closure_18 = {};
    const item = channels[closure_6].forEach((channel) => {
      channel = channel.channel;
      closure_18[channel.id] = channel;
      return channel;
    });
    const item1 = channels[closure_7].forEach((channel) => {
      channel = channel.channel;
      closure_18[channel.id] = channel;
      return channel;
    });
    const item2 = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      let canResult = "null" === channel.id;
      if (!canResult) {
        canResult = getUncachedChannelPermissions.can(constants.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        closure_18[channel.id] = channel;
      }
    });
    buildSortedChannels();
    const arr = channels[closure_6];
    const arr2 = channels[closure_7];
    const arr3 = channels[constants.GUILD_CATEGORY];
  }
  guildSettingsModalChannelsStoreClass.emitChange();
}, 500);
class GuildSettingsModalChannelsStoreClass extends Store {
}
const prototype = GuildSettingsModalChannelsStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_8, getUncachedChannelPermissions);
  const items = [closure_8];
  this.syncWith(items, () => {
    callback();
    return false;
  });
};
prototype["initGuild"] = function initGuild(id) {
  let closure_12 = id;
  const channels = store.getChannels(closure_12);
  if (channels !== channels) {
    let closure_18 = {};
    const item = channels[closure_6].forEach((channel) => {
      channel = channel.channel;
      closure_18[channel.id] = channel;
      return channel;
    });
    const item1 = channels[closure_7].forEach((channel) => {
      channel = channel.channel;
      closure_18[channel.id] = channel;
      return channel;
    });
    const item2 = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      let canResult = "null" === channel.id;
      if (!canResult) {
        canResult = getUncachedChannelPermissions.can(constants.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        closure_18[channel.id] = channel;
      }
    });
    buildSortedChannels();
    const arr = channels[closure_6];
    const arr2 = channels[closure_7];
    const arr3 = channels[constants.GUILD_CATEGORY];
  }
};
Object.defineProperty(prototype, "channels", {
  get: function channels(c0) {
    return c14;
  },
  set: undefined
});
Object.defineProperty(prototype, "order", {
  get: function order() {
    return c13;
  },
  set: undefined
});
Object.defineProperty(prototype, "sortingType", {
  get: function sortingType(arg0) {
    return c16;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelList", {
  get: function channelList() {
    return c17;
  },
  set: undefined
});
prototype["getLocalChannel"] = function getLocalChannel(id) {
  return table[id];
};
GuildSettingsModalChannelsStoreClass.displayName = "GuildSettingsModalChannelsStore";
const guildSettingsModalChannelsStoreClass = new GuildSettingsModalChannelsStoreClass(require("dispatcher"), {
  GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE: function handleTerminate() {
    let c12 = null;
    let c13 = null;
    let c14 = null;
    let c16 = null;
    let c17 = null;
    let c15 = null;
  },
  GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER: function handleStartReorder(sortingType) {
    sortingType = sortingType.sortingType;
    if (null == _null) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(sortingType);
      if (null != _null) {
        const arr = importDefault(5132)(_null._categories, _null, (channel) => {
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
        let closure_13 = arr.map((channel) => channel.channel.id);
      }
    }
  },
  GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER: function handleStopReorder() {
    let c16 = null;
    if (null != _null) {
      const arr = importDefault(5132)(_null._categories, _null, (channel) => {
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
      let closure_13 = arr.map((channel) => channel.channel.id);
    }
  },
  GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE: function handleLocalSortChange(updates) {
    updates = updates.updates;
    const item = updates.forEach((id) => {
      let lock_permissions;
      if (null != dependencyMap[id.id]) {
        ({ lock_permissions, id } = id);
        dependencyMap[id.id] = dependencyMap[id.id].merge(callback(id, closure_2));
        const obj = dependencyMap[id.id];
      }
    });
    buildSortedChannels();
  }
});
let obj = {
  GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE: function handleTerminate() {
    let c12 = null;
    let c13 = null;
    let c14 = null;
    let c16 = null;
    let c17 = null;
    let c15 = null;
  },
  GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER: function handleStartReorder(sortingType) {
    sortingType = sortingType.sortingType;
    if (null == _null) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(sortingType);
      if (null != _null) {
        const arr = importDefault(5132)(_null._categories, _null, (channel) => {
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
        let closure_13 = arr.map((channel) => channel.channel.id);
      }
    }
  },
  GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER: function handleStopReorder() {
    let c16 = null;
    if (null != _null) {
      const arr = importDefault(5132)(_null._categories, _null, (channel) => {
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
      let closure_13 = arr.map((channel) => channel.channel.id);
    }
  },
  GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE: function handleLocalSortChange(updates) {
    updates = updates.updates;
    const item = updates.forEach((id) => {
      let lock_permissions;
      if (null != dependencyMap[id.id]) {
        ({ lock_permissions, id } = id);
        dependencyMap[id.id] = dependencyMap[id.id].merge(callback(id, closure_2));
        const obj = dependencyMap[id.id];
      }
    });
    buildSortedChannels();
  }
};
const result = require("comparator").fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsStore.tsx");

export default guildSettingsModalChannelsStoreClass;