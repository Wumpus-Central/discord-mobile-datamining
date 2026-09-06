// === Module 12316: GuildDirectoryActionCreators ===

// Module 12316 (GuildDirectoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildDirectorySearchStore from "GuildDirectorySearchStore" /* 12303 */;
import "debounce";
import debounce from "debounce" /* 551 */;

let closure_7 = async function _addDirectoryGuildEntry() {
  let obj7 = closure_133_1(closure_133_2[7]);
  const request = { url: closure_133_6.DIRECTORY_CHANNEL_ENTRY(closure_132_0, closure_132_1), body: { description: closure_132_2, primary_category_id: closure_132_3 }, trackedActionData: { event: closure_133_0(closure_133_2[8]).NetworkActionNames.DIRECTORY_GUILD_ENTRY_CREATE, properties: { directory_channel_id: closure_132_0, guild_id: closure_132_1, primary_category_id: closure_132_3 } }, rejectWithError: closure_133_0(closure_133_2[6]).rejectWithMigratedError() };
  await obj7.post(request);
  closure_132_4 = value;
  obj7 = { type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: closure_132_0, entry: closure_132_4.body };
  closure_133_1(closure_133_2[5]).dispatch(obj7);
  await "HermesInternal";
  closure_5 = tmp3;
  closure_4 = tmp2;
  closure_132_0 = closure_0;
  closure_132_1 = closure_1;
  closure_132_2 = closure_2;
  let UNCATEGORIZED = closure_3;
  if (closure_3 === undefined) {
    UNCATEGORIZED = constants.UNCATEGORIZED;
  }
  closure_132_3 = UNCATEGORIZED;
  return "PX_16";
};
let closure_8 = async function _updateDirectoryEntry() {
  const HTTP = closure_133_0(closure_133_2[6]).HTTP;
  const request = { url: closure_133_6.DIRECTORY_CHANNEL_ENTRY(closure_132_0, closure_132_1), body: { description: closure_132_2, primary_category_id: closure_132_3 }, rejectWithError: closure_133_0(closure_133_2[6]).rejectWithMigratedError() };
  await HTTP.patch(request);
  closure_132_4 = value;
  closure_133_1(closure_133_2[5]).dispatch({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: closure_132_0, entry: closure_132_4.body });
  await "HermesInternal";
  closure_5 = tmp3;
  closure_4 = tmp2;
  closure_132_0 = closure_0;
  closure_132_1 = closure_1;
  closure_132_2 = closure_2;
  let UNCATEGORIZED = closure_3;
  if (closure_3 === undefined) {
    UNCATEGORIZED = constants.UNCATEGORIZED;
  }
  closure_132_3 = UNCATEGORIZED;
  return "PX_16";
};
let closure_9 = async function _fetchGuildEntriesForIds(arg0) {
  closure_0 = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp3;
    closure_130_0 = closure_0;
    const HTTP = closure_2_0(dependencyMap[6]).HTTP;
    const request = { url: Endpoints.DIRECTORY_CHANNEL_LIST_BY_ID(closure_0), query: { entity_ids }, rejectWithError: true };
    await HTTP.get(request);
    if (1 === tmp7) {
      c5 = 0;
      c7 = 3;
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_130_1 = value;
      closure_131_1(closure_131_2[5]).dispatch({ type: "GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS", channelId: closure_130_0, entries: closure_130_1.body });
      c5 = 0;
      closure_131_1(closure_131_2[5]);
    }
    return value;
  })();
};
const DirectoryEntryCategories = fn(12305).DirectoryEntryCategories;
let Endpoints = fn(1074).Endpoints;
asyncGeneratorStep(async (arg0, category_id) => {
  closure_0 = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp3;
    closure_130_0 = closure_0;
    category_id(573).dispatch({ type: "GUILD_DIRECTORY_FETCH_START" });
    const HTTP = closure_0(1272).HTTP;
    const request = { url: c6.DIRECTORY_CHANNEL_ENTRIES(closure_0), query: { category_id }, rejectWithError: true };
    await HTTP.get(request);
    if (1 === tmp7) {
      c5 = 0;
      let obj3 = category_id(573);
      obj3.dispatch({ type: "GUILD_DIRECTORY_FETCH_FAILURE" });
      c7 = 3;
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_130_1 = value;
      obj3 = { type: "GUILD_DIRECTORY_FETCH_SUCCESS", channelId: closure_130_0, entries: closure_130_1.body };
      category_id(573).dispatch(obj3);
      c5 = 0;
      category_id(573);
    }
    return value;
  })();
});
asyncGeneratorStep(async (arg0) => {
  closure_129_0 = closure_0;
  const HTTP = closure_0(tmp3[6]).HTTP;
  await HTTP.get({ url: c6.DIRECTORY_CHANNEL_CATEGORY_COUNTS(closure_0), rejectWithError: true });
  if (1 === tmp7) {
    c4 = 0;
    Endpoints = 3;
  } else if (arg0 === 1) {
    Endpoints = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_129_1 = value;
    require("Dispatcher").dispatch({ type: "GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS", channelId: closure_129_0, counts: closure_129_1.body });
    c4 = 0;
    require("Dispatcher");
  }
  return value;
});
const importDefaultResult1Result = debounce(function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}, 200);
let closure_0 = asyncGeneratorStep(async (channelId, query) => {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            dependencyMap = tmp7;
            closure_130_0 = channelId;
            closure_130_1 = query;
            closure_130_2 = undefined;
            if (tmp30.shouldFetch(channelId, query)) {
              c5 = 1;
              let obj6 = query(573);
              const obj1 = { type: "GUILD_DIRECTORY_SEARCH_START", channelId, query };
              obj6.dispatch(obj1);
              const HTTP = channelId(1272).HTTP;
              const request = { url: c6.DIRECTORY_ENTRIES_SEARCH(channelId), query: null, rejectWithError: true };
              const obj2 = { query };
              request.query = obj2;
              c6 = 2;
              c7 = 1;
              let obj3 = { value: HTTP.get(request), done: false };
              return obj3;
            } else {
              let obj4 = query(573);
              obj4 = { type: "GUILD_DIRECTORY_CACHED_SEARCH", channelId, query };
              obj4.dispatch(obj4);
            }
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            obj3 = query(573);
            obj3.dispatch({ type: "GUILD_DIRECTORY_FETCH_FAILURE" });
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_2 = value;
            obj = query(573);
            const obj5 = { type: "GUILD_DIRECTORY_SEARCH_SUCCESS", channelId: closure_130_0, query: closure_130_1, results: closure_130_2.body };
            obj.dispatch(obj5);
            c5 = 0;
          }
          c5 = 0;
          c7 = 3;
          obj6 = { value, done: true };
          return obj6;
        }
        c7 = 3;
      } catch (tmp30) {
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp30;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
});
const importDefaultResult2Result = debounce(function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}, 200);
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/GuildDirectoryActionCreators.tsx");

export const fetchDirectoryEntries = importDefaultResult1Result;
export const fetchDirectoryCounts = importDefaultResult2Result;
export const addDirectoryGuildEntry = function addDirectoryGuildEntry() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeDirectoryGuildEntry = function removeDirectoryGuildEntry(channelId, guildId) {
  let obj = { url: Endpoints.DIRECTORY_CHANNEL_ENTRY(channelId, guildId), trackedActionData: null, rejectWithError: true };
  obj = { event: closure_0(1250).NetworkActionNames.DIRECTORY_GUILD_ENTRY_DELETE, properties: { directory_channel_id: channelId, guild_id: guildId } };
  obj.trackedActionData = obj;
  obj.delete(obj);
  DispatcherDefault.dispatch({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId, guildId });
};
export const searchDirectoryEntries = debounce(function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}, 200);
export const clearDirectorySearch = function clearDirectorySearch(id) {
  const obj = { type: "GUILD_DIRECTORY_SEARCH_CLEAR", channelId: id };
  obj.dispatch(obj);
};
export const updateDirectoryEntry = function updateDirectoryEntry() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const selectDirectoryCategory = function selectDirectoryCategory(id, value) {
  const obj = { type: "GUILD_DIRECTORY_CATEGORY_SELECT", channelId: id, categoryId: value };
  obj.dispatch(obj);
};
export const fetchGuildEntriesForIds = function fetchGuildEntriesForIds() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};