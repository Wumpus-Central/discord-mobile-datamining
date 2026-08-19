// discord_app/modules/guild_settings/GuildSettingsModalChannelsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import getFlattenedChannelListDefault from "../channel/getFlattedChannelList.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import createChannelRecord from "../../records/ChannelRecord.tsx";
import comparator from "../../stores/GuildChannelStore.tsx";
import comparator2 from "../../stores/GuildChannelStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import ME from "../../Constants.tsx";
import importDefaultResult from "../../../_runtime/00012_apply.js";
import { getFavoritesAwareGuildName } from "../favorites/FavoritesUtils.tsx";

const require = fn;
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
    }
  }
  num = channel.position - channel2.position;
}
function setIndex(arg0, index) {
  arg0.index = index;
}
function buildSortedChannels() {
  const _null = { _categories: [], null: [] };
  const keys = Object.keys(closure_19);
  const item = keys.forEach((item, index) => {
    if (null != table[item]) {
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
  const item1 = _categories.forEach((item, index) => {
    const channel = item.channel;
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
    closure_14 = getFlattenedChannelListDefault(_null._categories, _null, (channel) => {
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
    }).map((item, index) => item.channel.id);
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
  }
  const arr3 = getFlattenedChannelListDefault(_null._categories, _null);
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
    const item = channels[closure_7].forEach((item, index) => {
      const channel = item.channel;
      closure_19[channel.id] = channel;
      return channel;
    });
    const item1 = channels[closure_8].forEach((item, index) => {
      const channel = item.channel;
      closure_19[channel.id] = channel;
      return channel;
    });
    _require = require("../favorites/FavoritesUtils.tsx").isFavoritesGuildId(c13);
    const item2 = channels[constants.GUILD_CATEGORY].forEach((item, index) => {
      const channel = item.channel;
      let canResult = "null" === channel.id || closure_0;
      if (!canResult) {
        canResult = closure_1_10.can(closure_1_12.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        closure_19[channel.id] = channel;
      }
    });
    buildSortedChannels();
    const obj = getFavoritesAwareGuildName;
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
    const item = channels[closure_7].forEach((item, index) => {
      const channel = item.channel;
      closure_19[channel.id] = channel;
      return channel;
    });
    const item1 = channels[closure_8].forEach((item, index) => {
      const channel = item.channel;
      closure_19[channel.id] = channel;
      return channel;
    });
    _require = require("../favorites/FavoritesUtils.tsx").isFavoritesGuildId(closure_13);
    const item2 = channels[constants.GUILD_CATEGORY].forEach((item, index) => {
      const channel = item.channel;
      let canResult = "null" === channel.id || closure_0;
      if (!canResult) {
        canResult = closure_1_10.can(closure_1_12.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        closure_19[channel.id] = channel;
      }
    });
    buildSortedChannels();
    const obj = getFavoritesAwareGuildName;
  }
};
Object.defineProperty(prototype, "channels", {
  get: function channels(closure_2) {
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
  get: function sortingType(items) {
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
prototype["getLocalChannel"] = function getLocalChannel(order) {
  return table[order];
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
      if (null != _null) {
        closure_14 = getFlattenedChannelListDefault(_null._categories, _null, (channel) => {
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
        }).map((item, index) => item.channel.id);
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
      }
      const set = new Set(sortingType);
    }
  },
  GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER: function handleStopReorder() {
    c17 = null;
    if (null != _null) {
      closure_14 = getFlattenedChannelListDefault(_null._categories, _null, (channel) => {
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
      }).map((item, index) => item.channel.id);
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
    }
  },
  GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE: function handleLocalSortChange(updates) {
    updates = updates.updates;
    const item = updates.forEach((item, index) => {
      if (null != dependencyMap[item.id]) {
        ({ lock_permissions, id } = item);
        dependencyMap[item.id] = dependencyMap[item.id].merge(callback(item, closure_3));
      }
    });
    buildSortedChannels();
  }
});
const result = require("obj132").fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsStore.tsx");

export default guildSettingsModalChannelsStoreClass;