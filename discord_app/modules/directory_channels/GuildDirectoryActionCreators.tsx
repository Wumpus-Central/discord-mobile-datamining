// discord_app/modules/directory_channels/GuildDirectoryActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GuildDirectorySearchStore from "GuildDirectorySearchStore.tsx";
import "debounce";
import debounce_mod from "../../../_runtime/00551_debounce.js";

const require = globalThis.__r;

let closure_7 = async function _addDirectoryGuildEntry() {
  const request = {
    url: closure_133_6.DIRECTORY_CHANNEL_ENTRY(closure_132_0, closure_132_1),
    body: { description: closure_132_2, primary_category_id: closure_132_3 },
    trackedActionData: {
      event: closure_133_0(closure_133_2[8]).NetworkActionNames.DIRECTORY_GUILD_ENTRY_CREATE,
      properties: { directory_channel_id: closure_132_0, guild_id: closure_132_1, primary_category_id: closure_132_3 },
    },
    rejectWithError: closure_133_0(closure_133_2[6]).rejectWithMigratedError(),
  };
  await closure_133_1(closure_133_2[7]).post(request);
  closure_132_4 = value;
  closure_133_1(closure_133_2[5]).dispatch({
    type: "GUILD_DIRECTORY_ENTRY_CREATE",
    channelId: closure_132_0,
    entry: closure_132_4.body,
  });
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
  return "flex";
};
let closure_8 = async function _updateDirectoryEntry() {
  const HTTP = closure_133_0(closure_133_2[6]).HTTP;
  const request = {
    url: closure_133_6.DIRECTORY_CHANNEL_ENTRY(closure_132_0, closure_132_1),
    body: { description: closure_132_2, primary_category_id: closure_132_3 },
    rejectWithError: closure_133_0(closure_133_2[6]).rejectWithMigratedError(),
  };
  await HTTP.patch(request);
  closure_132_4 = value;
  closure_133_1(closure_133_2[5]).dispatch({
    type: "GUILD_DIRECTORY_ENTRY_UPDATE",
    channelId: closure_132_0,
    entry: closure_132_4.body,
  });
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
  return "flex";
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
    const request = {
      url: Endpoints.DIRECTORY_CHANNEL_LIST_BY_ID(closure_0),
      query: { entity_ids },
      rejectWithError: true,
    };
    await HTTP.get(request);
    if (1 === tmp7) {
      c5 = 0;
      c7 = 3;
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_130_1 = value;
      closure_131_1(closure_131_2[5]).dispatch({
        type: "GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS",
        channelId: closure_130_0,
        entries: closure_130_1.body,
      });
      c5 = 0;
      closure_131_1(closure_131_2[5]);
    }
    return value;
  })();
};
const DirectoryEntryCategories = fn(12639).DirectoryEntryCategories;
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
    const HTTP = closure_0(1271).HTTP;
    const request = { url: c6.DIRECTORY_CHANNEL_ENTRIES(closure_0), query: { category_id }, rejectWithError: true };
    await HTTP.get(request);
    if (1 === tmp7) {
      c5 = 0;
      category_id(573).dispatch({ type: "GUILD_DIRECTORY_FETCH_FAILURE" });
      c7 = 3;
      category_id(573);
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_130_1 = value;
      category_id(573).dispatch({
        type: "GUILD_DIRECTORY_FETCH_SUCCESS",
        channelId: closure_130_0,
        entries: closure_130_1.body,
      });
      c5 = 0;
      category_id(573);
    }
    return value;
  })();
});
let debounce = debounce_mod;
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
    require("Dispatcher").dispatch({
      type: "GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS",
      channelId: closure_129_0,
      counts: closure_129_1.body,
    });
    c4 = 0;
    require("Dispatcher");
  }
  return value;
});
const importDefaultResult1Result = debounce(function () {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}, 200);
let debounce = debounce_mod;
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp3;
            dependencyMap = tmp7;
            closure_130_0 = channelId;
            closure_130_1 = query;
            closure_130_2 = undefined;
            if (tmp30.shouldFetch(channelId, query)) {
              c5 = 1;
              const obj6 = { type: "GUILD_DIRECTORY_SEARCH_START", channelId, query };
              query(573).dispatch(obj6);
              const HTTP = channelId(1271).HTTP;
              const request = { url: c6.DIRECTORY_ENTRIES_SEARCH(channelId), query: null, rejectWithError: true };
              const obj8 = { query };
              request.query = obj8;
              c6 = 2;
              c7 = 1;
              const obj9 = { value: HTTP.get(request), done: false };
              return obj9;
            } else {
              const obj10 = { type: "GUILD_DIRECTORY_CACHED_SEARCH", channelId, query };
              query(573).dispatch(obj10);
              const obj5 = query(573);
            }
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            query(573).dispatch({ type: "GUILD_DIRECTORY_FETCH_FAILURE" });
            const obj4 = query(573);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_2 = value;
            const obj11 = {
              type: "GUILD_DIRECTORY_SEARCH_SUCCESS",
              channelId: closure_130_0,
              query: closure_130_1,
              results: closure_130_2.body,
            };
            query(573).dispatch(obj11);
            c5 = 0;
            const obj = query(573);
          }
          c5 = 0;
          c7 = 3;
          const obj12 = { value, done: true };
          return obj12;
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
const importDefaultResult2Result = debounce(function () {
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
  const obj2 = {
    url: Endpoints.DIRECTORY_CHANNEL_ENTRY(channelId, guildId),
    trackedActionData: null,
    rejectWithError: true,
  };
  const obj = TrackedHTTPUtilsDefault;
  obj2.trackedActionData = {
    event: closure_0(1249).NetworkActionNames.DIRECTORY_GUILD_ENTRY_DELETE,
    properties: { directory_channel_id: channelId, guild_id: guildId },
  };
  obj.delete(obj2);
  const obj3 = {
    event: closure_0(1249).NetworkActionNames.DIRECTORY_GUILD_ENTRY_DELETE,
    properties: { directory_channel_id: channelId, guild_id: guildId },
  };
  DispatcherDefault.dispatch({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId, guildId });
};
export const searchDirectoryEntries = debounce(function () {
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
  DispatcherDefault.dispatch({ type: "GUILD_DIRECTORY_SEARCH_CLEAR", channelId: id });
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
  DispatcherDefault.dispatch({ type: "GUILD_DIRECTORY_CATEGORY_SELECT", channelId: id, categoryId: value });
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
