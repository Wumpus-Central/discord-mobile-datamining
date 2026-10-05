// === Module 11940: GuildDirectoryStore ===

// Module 11940 (GuildDirectoryStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildDirectoryUtils from "GuildDirectoryUtils" /* 11932 */;
import GuildDirectoryConstants from "GuildDirectoryConstants" /* 11933 */;
import size from "module_2" /* 2 */;

let set;

const DirectoryEntryCategories = GuildDirectoryConstants.DirectoryEntryCategories;
let closure_3 = Object.freeze({});
let c4 = false;
const hasOwnProperty = {};
const metroRequire = {};
const metroImportDefault = {};
const metroImportAll = {};
const React4 = {};
const Store = get_initializedDefault.Store;
class GuildDirectoryStore extends Store {
  isFetching() {
    return c4;
  }
  getCurrentCategoryId(id) {
    let ALL = closure_6[id];
    if (ALL == null) {
      ALL = DirectoryEntryCategories.ALL;
    }
    return ALL;
  }
  getDirectoryEntries(id, currentCategoryId) {
    let tmp2;
    if (null != currentCategoryId) {
      let tmp5;
      if (closure_7[id] != null) {
        tmp5 = tmp4[currentCategoryId];
      }
      tmp2 = tmp5;
    } else {
      tmp2 = closure_5[id];
    }
    return tmp2;
  }
  getDirectoryEntry(directoryChannelId, id) {
    let tmp2;
    if (closure_5[directoryChannelId] != null) {
      tmp2 = tmp[id];
    }
    return tmp2;
  }
  getDirectoryAllEntriesCount(id) {
    let obj = closure_5[id];
    const _Object = Object;
    if (obj == null) {
      obj = {};
    }
    return keys(obj).length;
  }
  getDirectoryCategoryCounts(id) {
    let tmp = closure_8[id];
    if (tmp == null) {
      tmp = closure_3;
    }
    return tmp;
  }
  getAdminGuildEntryIds(arg0) {
    return closure_9[arg0];
  }
}
const prototype = GuildDirectoryStore.prototype;
GuildDirectoryStore.displayName = "GuildDirectoryStore";
let obj = {
  GUILD_DIRECTORY_FETCH_START: function handleFetchStart() {
    c4 = true;
  },
  GUILD_DIRECTORY_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let channelId;
    let entries;
    ({ channelId, entries } = arg0);
    c4 = false;
    let obj = {};
    let obj2 = {};
    const item = entries.forEach((item) => {
      obj = GuildDirectoryUtils;
      const result = obj.guildDirectoryEntryFromServer(item);
      obj[result.guildId] = result;
      if (null != obj2[result.primaryCategoryId]) {
        obj2[result.primaryCategoryId][result.guildId] = result;
      } else {
        obj2 = {};
        obj2[result.guildId] = result;
        obj2[result.primaryCategoryId] = obj2;
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
    const entry = channelId.entry;
    const obj = GuildDirectoryUtils;
    const result = obj.guildDirectoryEntryFromServer(entry);
    if (null != result) {
      let tmp2;
      if (closure_5[channelId] != null) {
        tmp2 = tmp17[result.guildId];
      }
      if (null == tmp2) {
        const obj2 = {};
        const merged = Object.assign(closure_5[channelId]);
        obj2[result.guildId] = result;
        closure_5[channelId] = obj2;
        let UNCATEGORIZED = result.primaryCategoryId;
        if (UNCATEGORIZED == null) {
          UNCATEGORIZED = DirectoryEntryCategories.UNCATEGORIZED;
        }
        const obj3 = {};
        const merged1 = Object.assign(closure_7[channelId]);
        let tmp8;
        if (closure_7[channelId] != null) {
          tmp8 = tmp7[UNCATEGORIZED];
        }
        const obj4 = {};
        const merged2 = Object.assign(tmp8);
        obj4[result.guildId] = result;
        obj3[UNCATEGORIZED] = obj4;
        closure_7[channelId] = obj3;
        if (null != closure_8[channelId]) {
          let num;
          if (closure_8[channelId] != null) {
            num = tmp13[UNCATEGORIZED];
          }
          if (num == null) {
            num = 0;
          }
          const obj5 = {};
          const merged3 = Object.assign(closure_8[channelId]);
          obj5[UNCATEGORIZED] = num + 1;
          closure_8[channelId] = obj5;
        }
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function handleDeleteEntry(arg0) {
    let channelId;
    let guildId;
    ({ channelId, guildId } = arg0);
    let tmp3;
    if (closure_5[channelId] != null) {
      tmp3 = tmp2[guildId];
    }
    if (null != tmp3) {
      const primaryCategoryId = tmp3.primaryCategoryId;
      const _Object2 = Object;
      const merged = Object.assign({}, closure_5[channelId]);
      delete tmp16[guildId];
      if (closure_9[channelId] != null) {
        closure_9[channelId].delete(guildId);
      }
      const _Set = Set;
      const self = this;
      const self2 = this;
      closure_9[channelId] = new Set(closure_9[channelId]);
      closure_5[channelId] = merged;
      const _Object = Object;
      set = new Set(closure_9[channelId]);
      const merged1 = Object.assign({}, closure_7[channelId][primaryCategoryId]);
      delete tmp8[guildId];
      const obj = {};
      const merged2 = Object.assign(closure_7[channelId]);
      obj[primaryCategoryId] = merged1;
      closure_7[channelId] = obj;
      if (null != closure_8[channelId]) {
        const diff = closure_8[channelId][primaryCategoryId] - 1;
        const obj2 = {};
        const merged3 = Object.assign(closure_8[channelId]);
        let num2 = 0;
        if (0 <= diff) {
          num2 = diff;
        }
        obj2[primaryCategoryId] = num2;
        closure_8[channelId] = obj2;
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function handleUpdateEntry(channelId) {
    channelId = channelId.channelId;
    const entry = channelId.entry;
    const obj = GuildDirectoryUtils;
    const result = obj.guildDirectoryEntryFromServer(entry);
    let tmp4;
    if (closure_5[channelId] != null) {
      tmp4 = tmp3[result.guildId];
    }
    const obj2 = {};
    const merged = Object.assign(closure_5[channelId]);
    const guildId = result.guildId;
    const obj3 = {};
    const merged1 = Object.assign(tmp4);
    const merged2 = Object.assign(result);
    obj2[guildId] = obj3;
    closure_5[channelId] = obj2;
    let primaryCategoryId;
    const tmp8 = tmp4;
    if (tmp4 != null) {
      primaryCategoryId = tmp4.primaryCategoryId;
    }
    if (primaryCategoryId == null) {
      primaryCategoryId = DirectoryEntryCategories.UNCATEGORIZED;
    }
    let UNCATEGORIZED = result.primaryCategoryId;
    if (UNCATEGORIZED == null) {
      UNCATEGORIZED = DirectoryEntryCategories.UNCATEGORIZED;
    }
    let tmp14;
    const _Object = Object;
    if (closure_7[channelId] != null) {
      tmp14 = tmp13[primaryCategoryId];
    }
    const obj4 = assign({}, tmp14);
    const tmp16 = null != tmp4 && primaryCategoryId !== UNCATEGORIZED;
    if (tmp16) {
      delete tmp15[tmp.guildId];
    }
    const obj5 = {};
    const merged3 = Object.assign(closure_7[channelId]);
    obj5[primaryCategoryId] = obj4;
    let tmp19;
    if (closure_7[channelId] != null) {
      tmp19 = tmp18[UNCATEGORIZED];
    }
    const obj6 = {};
    const merged4 = Object.assign(tmp19);
    const guildId2 = result.guildId;
    const obj7 = {};
    const merged5 = Object.assign(tmp8);
    const merged6 = Object.assign(result);
    obj6[guildId2] = obj7;
    obj5[UNCATEGORIZED] = obj6;
    closure_7[channelId] = obj5;
    const tmp23 = UNCATEGORIZED !== primaryCategoryId && null != closure_8[channelId];
    if (tmp23) {
      const obj14 = {};
      const merged7 = Object.assign(closure_8[channelId]);
      let tmp29;
      if (closure_8[channelId] != null) {
        tmp29 = tmp28[primaryCategoryId];
      }
      let num2 = 0;
      if (tmp29 > 0) {
        let tmp31;
        if (closure_8[channelId] != null) {
          tmp31 = tmp30[primaryCategoryId];
        }
        num2 = tmp31 - 1;
      }
      obj14[primaryCategoryId] = num2;
      let num4;
      if (closure_8[channelId] != null) {
        num4 = tmp32[UNCATEGORIZED];
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj14[UNCATEGORIZED] = num4 + 1;
      closure_8[channelId] = obj14;
    }
  },
  GUILD_DIRECTORY_CATEGORY_SELECT: function handleSelectCategory(channelId) {
    closure_6[channelId.channelId] = channelId.categoryId;
  },
  GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function handleFetchCategoryCounts(channelId) {
    closure_8[channelId.channelId] = channelId.counts;
  },
  GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function handleFetchAdminEntries(channelId) {
    const entries = channelId.entries;
    channelId = channelId.channelId;
    set = new Set();
    const item = entries.forEach((item) => {
      const obj = GuildDirectoryUtils;
      set.add(obj.guildDirectoryEntryFromServer(item).guildId);
    });
    closure_9[channelId] = set;
  }
};
const guildDirectoryStore = new GuildDirectoryStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/directory_channels/GuildDirectoryStore.tsx");

export default guildDirectoryStore;