// === Module 12570: GuildDirectoryStore ===

// Module 12570 (GuildDirectoryStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildDirectoryUtils from "GuildDirectoryUtils" /* 12562 */;
import GuildDirectoryConstants from "GuildDirectoryConstants" /* 12563 */;
import size from "module_2" /* 2 */;

const DirectoryEntryCategories = GuildDirectoryConstants.DirectoryEntryCategories;
let closure_3 = Object.freeze({});
let c4 = false;
const dependencyMap = {};
let closure_6 = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
const dependencyMap4 = {};
const Store = initializeDefault.Store;
class GuildDirectoryStore extends Store {
}
const prototype = GuildDirectoryStore.prototype;
prototype["isFetching"] = function isFetching() {
  return c4;
};
prototype["getCurrentCategoryId"] = function getCurrentCategoryId(id) {
  let ALL = closure_6[id];
  if (ALL == null) {
    ALL = DirectoryEntryCategories.ALL;
  }
  return ALL;
};
prototype["getDirectoryEntries"] = function getDirectoryEntries(id, currentCategoryId) {
  if (null != currentCategoryId) {
    let tmp5;
    if (dependencyMap2[id] != null) {
      tmp5 = tmp4[currentCategoryId];
    }
    let tmp2 = tmp5;
  } else {
    tmp2 = dependencyMap[id];
  }
  return tmp2;
};
prototype["getDirectoryEntry"] = function getDirectoryEntry(directoryChannelId, id) {
  let tmp2;
  if (dependencyMap[directoryChannelId] != null) {
    tmp2 = tmp[id];
  }
  return tmp2;
};
prototype["getDirectoryAllEntriesCount"] = function getDirectoryAllEntriesCount(id) {
  let obj = dependencyMap[id];
  if (obj == null) {
    obj = {};
  }
  return Object.keys(obj).length;
};
prototype["getDirectoryCategoryCounts"] = function getDirectoryCategoryCounts(id) {
  let tmp = dependencyMap3[id];
  if (tmp == null) {
    tmp = closure_3;
  }
  return tmp;
};
prototype["getAdminGuildEntryIds"] = function getAdminGuildEntryIds(arg0) {
  return dependencyMap4[arg0];
};
GuildDirectoryStore.displayName = "GuildDirectoryStore";
const guildDirectoryStore = new GuildDirectoryStore(DispatcherDefault, {
  GUILD_DIRECTORY_FETCH_START: function handleFetchStart() {
    c4 = true;
  },
  GUILD_DIRECTORY_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ channelId, entries } = arg0);
    c4 = false;
    let obj = {};
    let obj2 = {};
    const item = entries.forEach((item) => {
      obj = GuildDirectoryUtils;
      const result = obj.guildDirectoryEntryFromServer(item);
      obj[result.guildId] = result;
      if (null != obj2[result.primaryCategoryId]) {
        tmp2[result.primaryCategoryId][result.guildId] = result;
      } else {
        obj2 = {};
        obj2[result.guildId] = result;
        tmp2[result.primaryCategoryId] = obj2;
      }
    });
    closure_5[channelId] = obj;
    closure_7[channelId] = obj2;
  },
  GUILD_DIRECTORY_FETCH_FAILURE: function handleFetchFailure() {
    c4 = false;
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function handleCreateEntry(channelId) {
    channelId = channelId.channelId;
    const result = GuildDirectoryUtils.guildDirectoryEntryFromServer(channelId.entry);
    if (null != result) {
      let tmp2;
      if (dependencyMap[channelId] != null) {
        tmp2 = tmp17[result.guildId];
      }
      if (null == tmp2) {
        const obj2 = {};
        const merged = Object.assign(dependencyMap[channelId]);
        obj2[result.guildId] = result;
        dependencyMap[channelId] = obj2;
        let UNCATEGORIZED = result.primaryCategoryId;
        if (UNCATEGORIZED == null) {
          UNCATEGORIZED = DirectoryEntryCategories.UNCATEGORIZED;
        }
        const obj3 = {};
        const merged1 = Object.assign(dependencyMap2[channelId]);
        let tmp8;
        if (dependencyMap2[channelId] != null) {
          tmp8 = tmp7[UNCATEGORIZED];
        }
        const obj4 = {};
        const merged2 = Object.assign(tmp8);
        obj4[result.guildId] = result;
        obj3[UNCATEGORIZED] = obj4;
        dependencyMap2[channelId] = obj3;
        if (null != dependencyMap3[channelId]) {
          let num;
          if (dependencyMap3[channelId] != null) {
            num = tmp13[UNCATEGORIZED];
          }
          if (num == null) {
            num = 0;
          }
          const obj5 = {};
          const merged3 = Object.assign(dependencyMap3[channelId]);
          obj5[UNCATEGORIZED] = num + 1;
          dependencyMap3[channelId] = obj5;
        }
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function handleDeleteEntry(arg0) {
    ({ channelId, guildId } = arg0);
    let tmp5;
    if (dependencyMap[channelId] != null) {
      tmp5 = tmp4[guildId];
    }
    if (null != tmp5) {
      const primaryCategoryId = tmp5.primaryCategoryId;
      const _Object2 = Object;
      const merged = Object.assign({}, dependencyMap[channelId]);
      delete tmp2[tmp];
      if (dependencyMap4[channelId] != null) {
        obj3.delete(guildId);
      }
      const _Set = Set;
      const set = new Set(dependencyMap4[channelId]);
      dependencyMap4[channelId] = set;
      dependencyMap[channelId] = merged;
      const _Object = Object;
      const merged1 = Object.assign({}, dependencyMap2[channelId][primaryCategoryId]);
      delete tmp2[tmp];
      const obj = {};
      const merged2 = Object.assign(dependencyMap2[channelId]);
      obj[primaryCategoryId] = merged1;
      dependencyMap2[channelId] = obj;
      if (null != dependencyMap3[channelId]) {
        const diff = dependencyMap3[channelId][primaryCategoryId] - 1;
        const obj2 = {};
        const merged3 = Object.assign(dependencyMap3[channelId]);
        let num2 = 0;
        if (0 <= diff) {
          num2 = diff;
        }
        obj2[primaryCategoryId] = num2;
        dependencyMap3[channelId] = obj2;
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function handleUpdateEntry(channelId) {
    channelId = channelId.channelId;
    const result = GuildDirectoryUtils.guildDirectoryEntryFromServer(channelId.entry);
    let tmp6;
    if (dependencyMap[channelId] != null) {
      tmp6 = tmp5[result.guildId];
    }
    const obj2 = {};
    const merged = Object.assign(dependencyMap[channelId]);
    const merged1 = Object.assign(tmp6);
    const merged2 = Object.assign(result);
    obj2[result.guildId] = {};
    dependencyMap[channelId] = obj2;
    let primaryCategoryId;
    if (tmp6 != null) {
      primaryCategoryId = tmp6.primaryCategoryId;
    }
    if (primaryCategoryId == null) {
      primaryCategoryId = DirectoryEntryCategories.UNCATEGORIZED;
    }
    let UNCATEGORIZED = result.primaryCategoryId;
    if (UNCATEGORIZED == null) {
      UNCATEGORIZED = DirectoryEntryCategories.UNCATEGORIZED;
    }
    let tmp16;
    if (dependencyMap2[channelId] != null) {
      tmp16 = tmp15[primaryCategoryId];
    }
    let tmp18 = null != tmp6;
    const merged3 = Object.assign({}, tmp16);
    if (tmp18) {
      tmp18 = primaryCategoryId !== UNCATEGORIZED;
    }
    if (tmp18) {
      const guildId = result.guildId;
      delete tmp2[tmp];
    }
    const obj4 = {};
    const merged4 = Object.assign(dependencyMap2[channelId]);
    obj4[primaryCategoryId] = merged3;
    let tmp21;
    if (dependencyMap2[channelId] != null) {
      tmp21 = tmp20[UNCATEGORIZED];
    }
    const obj5 = {};
    const merged5 = Object.assign(tmp21);
    const merged6 = Object.assign(tmp6);
    const merged7 = Object.assign(result);
    obj5[result.guildId] = {};
    obj4[UNCATEGORIZED] = obj5;
    dependencyMap2[channelId] = obj4;
    let tmp25 = UNCATEGORIZED !== primaryCategoryId;
    if (tmp25) {
      tmp25 = null != dependencyMap3[channelId];
    }
    if (tmp25) {
      const obj7 = {};
      const merged8 = Object.assign(dependencyMap3[channelId]);
      let tmp31;
      if (dependencyMap3[channelId] != null) {
        tmp31 = tmp30[primaryCategoryId];
      }
      let num2 = 0;
      if (tmp31 > 0) {
        let tmp33;
        if (dependencyMap3[channelId] != null) {
          tmp33 = tmp32[primaryCategoryId];
        }
        num2 = tmp33 - 1;
      }
      obj7[primaryCategoryId] = num2;
      let num4;
      if (dependencyMap3[channelId] != null) {
        num4 = tmp34[UNCATEGORIZED];
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj7[UNCATEGORIZED] = num4 + 1;
      dependencyMap3[channelId] = obj7;
    }
    const obj3 = {};
    const obj6 = {};
  },
  GUILD_DIRECTORY_CATEGORY_SELECT: function handleSelectCategory(channelId) {
    closure_6[channelId.channelId] = channelId.categoryId;
  },
  GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function handleFetchCategoryCounts(channelId) {
    closure_8[channelId.channelId] = channelId.counts;
  },
  GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function handleFetchAdminEntries(channelId) {
    const entries = channelId.entries;
    const set = new Set();
    const item = entries.forEach((item) => {
      set.add(GuildDirectoryUtils.guildDirectoryEntryFromServer(item).guildId);
    });
    closure_9[channelId.channelId] = set;
  }
});
let result = size.fileFinishedImporting("modules/directory_channels/GuildDirectoryStore.tsx");

export default guildDirectoryStore;