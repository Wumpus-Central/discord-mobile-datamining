// === Module 5493: incrementVersion ===

// Module 5493 (incrementVersion)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import create from "create" /* 1305 */;
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1911 */;
import closure_2 from "handleConnectionClosedOrResumed" /* 1339 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "handleConnectionOpen" /* 4855 */;
import closure_5 from "comparator" /* 1981 */;
import { ChannelTypes } from "ME" /* 673 */;

require = arg1;
function incrementVersion() {
  closure_8 = closure_8 + 1;
}
function syncFavoriteCategoryCollapse() {
  const favorites = closure_2.settings.favorites;
  let favoriteChannels;
  if (favorites != null) {
    favoriteChannels = favorites.favoriteChannels;
  }
  if (null == favoriteChannels) {
    return false;
  } else {
    let flag4 = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      let flag = flag4;
      flag2 = flag4;
      while (keys[tmp] !== undefined) {
        let tmp12 = tmp5;
        let tmp13 = favoriteChannels[tmp5];
        let tmp14 = require;
        let tmp15 = dependencyMap;
        flag4 = flag;
        if (tmp13.type !== create.FavoriteChannelType.CATEGORY) {
          continue;
        } else {
          let tmp6 = dependencyMap;
          let tmp7 = dependencyMap[tmp5];
          if (tmp13.collapsed) {
            if (!tmp7) {
              let tmp9 = dependencyMap;
              dependencyMap[tmp5] = true;
              flag = true;
            }
            let flag3 = flag;
          } else {
            flag3 = flag;
            if (tmp7) {
              let tmp8 = dependencyMap;
              delete tmp3[tmp2];
              flag3 = true;
            }
          }
          flag4 = flag3;
          continue;
        }
        continue;
      }
    }
    return flag2;
  }
}
let closure_7 = {};
let c8 = 0;
const PersistedStore = initializeDefault.PersistedStore;
class CategoryCollapseStore extends PersistedStore {
}
const prototype = CategoryCollapseStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const self = this;
  let obj = arg0;
  this.waitFor(closure_3, closure_4, closure_5, closure_2);
  this.removeChangeListener(incrementVersion);
  this.addChangeListener(incrementVersion);
  if (arg0 == null) {
    obj = {};
  }
  const items = [closure_2];
  self.syncWith(items, syncFavoriteCategoryCollapse);
};
prototype["getState"] = function getState() {
  return closure_7;
};
prototype["isCollapsed"] = function isCollapsed(arg0) {
  let tmp = null == arg0;
  if (!tmp) {
    tmp = "null" === arg0;
  }
  if (!tmp) {
    tmp = !dependencyMap[arg0];
  }
  let tmp3 = !tmp;
  if (!tmp) {
    tmp3 = dependencyMap[arg0];
  }
  return tmp3;
};
prototype["getCollapsedCategories"] = function getCollapsedCategories() {
  return closure_7;
};
Object.defineProperty(prototype, "version", {
  get: function version() {
    return c8;
  },
  set: undefined
});
CategoryCollapseStore.displayName = "CategoryCollapseStore";
CategoryCollapseStore.persistKey = "collapsedCategories";
const categoryCollapseStore = new CategoryCollapseStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(userGuildSettings) {
    if (!userGuildSettings.userGuildSettings.partial) {
      closure_7 = {};
    }
    const iter = userGuildSettings.userGuildSettings.entries[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.channel_overrides) {
        let tmp5 = nextResult;
        let channel_overrides = tmp4.channel_overrides;
        let tmp6 = channel_overrides;
        let tmp7 = channel_overrides;
        for (const item10023 of channel_overrides) {
          let tmp8 = item10023;
          let tmp9 = item10023;
          if (item10023.collapsed) {
            closure_7[item10023.channel_id] = true;
          } else {
            delete tmp2[tmp];
          }
          continue;
        }
      }
      continue;
    }
    syncFavoriteCategoryCollapse();
  },
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const mapped = userGuildSettings.map((guild_id) => guild_id.guild_id);
    for (const key10023 in closure_7) {
      let tmp10 = key10023;
      let tmp11 = channel;
      let channel = channel.getChannel(key10023);
      let hasItem = null != channel;
      if (hasItem) {
        hasItem = null != channel.guild_id;
      }
      if (hasItem) {
        hasItem = set.has(channel.guild_id);
      }
      if (!hasItem) {
        continue;
      } else {
        let tmp4 = closure_7;
        let id = channel.id;
        delete tmp2[tmp];
        continue;
      }
      continue;
    }
    const iter = userGuildSettings[Symbol.iterator]();
    while (iter !== undefined) {
      let channel_overrides = iter.next().channel_overrides;
      let tmp5 = channel_overrides;
      let tmp6 = channel_overrides;
      for (const item10040 of channel_overrides) {
        if (item10040.collapsed) {
          let tmp8 = closure_7;
          let tmp9 = item10040;
          closure_7[tmp7.channel_id] = true;
        }
        continue;
      }
      continue;
    }
  },
  CATEGORY_COLLAPSE: function handleCategoryCollapse(id) {
    id = id.id;
    const favorites = closure_2.settings.favorites;
    let favoriteChannels;
    if (favorites != null) {
      favoriteChannels = favorites.favoriteChannels;
    }
    let type;
    if (favoriteChannels != null) {
      if (favoriteChannels[id] != null) {
        type = tmp3.type;
      }
    }
    const tmp4 = type === create.FavoriteChannelType.CATEGORY;
    let tmp5 = !tmp4;
    if (!tmp4) {
      if (!dependencyMap[id]) {
        dependencyMap[id] = true;
      }
      tmp5 = !dependencyMap[id];
      const tmp8 = !dependencyMap[id];
    }
    return tmp5;
  },
  CATEGORY_EXPAND: function handleCategoryExpand(id) {
    id = id.id;
    const favorites = closure_2.settings.favorites;
    let favoriteChannels;
    if (favorites != null) {
      favoriteChannels = favorites.favoriteChannels;
    }
    let type;
    if (favoriteChannels != null) {
      if (favoriteChannels[id] != null) {
        type = tmp5.type;
      }
    }
    const tmp6 = type === create.FavoriteChannelType.CATEGORY;
    let tmp7 = !tmp6;
    if (!tmp6) {
      if (null != dependencyMap[id]) {
        delete tmp[tmp2];
      }
      tmp7 = flag;
    }
    return tmp7;
  },
  CATEGORY_COLLAPSE_ALL: function handleCategoryCollapseAll(guildId) {
    guildId = guildId.guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      return false;
    } else {
      const item = store.getChannels(guildId)[ChannelTypes.GUILD_CATEGORY].forEach((channel) => {
        channel = channel.channel;
        if ("null" !== channel.id) {
          closure_7[channel.id] = true;
        }
      });
    }
    obj = getFavoritesAwareGuildName;
  },
  CATEGORY_EXPAND_ALL: function handleCategoryExpandAll(guildId) {
    guildId = guildId.guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      return false;
    } else {
      const item = store.getChannels(guildId)[ChannelTypes.GUILD_CATEGORY].forEach((arg0) => {
        delete tmp2[tmp];
      });
    }
    obj = getFavoritesAwareGuildName;
  },
  CHANNEL_DELETE: function handleChannelDelete(arg0) {
    if (null != dependencyMap[arg0.channel.id]) {
      delete tmp[tmp2];
    }
    return false;
  }
});
const result = require("set").fileFinishedImporting("stores/CategoryCollapseStore.tsx");

export default categoryCollapseStore;