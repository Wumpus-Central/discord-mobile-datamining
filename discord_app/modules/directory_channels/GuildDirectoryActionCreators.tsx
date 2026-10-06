// discord_app/modules/directory_channels/GuildDirectoryActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import GuildDirectoryConstants from "GuildDirectoryConstants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import GuildDirectorySearchStore from "GuildDirectorySearchStore.tsx";
import debounce_mod from "../../../_runtime/00551_debounce.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_2;

let obj = function _addDirectoryGuildEntry() {
  obj = _asyncToGenerator(async (arg0, guild_id, description) => {
    let UNCATEGORIZED;
    let c6;
    let c7;
    let closure_0;
    let closure_5;
    let obj12;
    let obj5;
    let obj6;
    let obj7;
    let closure_3 = arg3;
    const request = {
      url: closure_133_6.DIRECTORY_CHANNEL_ENTRY(channelId, guild_id),
      body: obj5,
      trackedActionData: obj6,
      rejectWithError: obj12.rejectWithMigratedError(),
    };
    const post = closure_133_1(closure_133_2[7]).post;
    const tmp25 = closure_133_1(closure_133_2[7]);
    obj5 = { description, primary_category_id: UNCATEGORIZED };
    obj6 = { event: closure_133_0(closure_133_2[8]).NetworkActionNames.DIRECTORY_GUILD_ENTRY_CREATE, properties: obj7 };
    obj7 = { directory_channel_id: channelId, guild_id, primary_category_id: UNCATEGORIZED };
    obj12 = closure_133_0(closure_133_2[6]);
    await post(request);
    let body = value;
    const obj10 = { type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId, entry: body.body };
    obj = closure_133_1(closure_133_2[5]);
    obj.dispatch(obj10);
    await "IconComponent";
    body = tmp;
    UNCATEGORIZED = closure_3;
    if (closure_3 === undefined) {
      UNCATEGORIZED = constants.UNCATEGORIZED;
    }
    return "Reflect";
  });
  return obj(...arguments);
};
obj = function _updateDirectoryEntry() {
  obj = _asyncToGenerator(async (channelId, arg1, description) => {
    let UNCATEGORIZED;
    let c6;
    let c7;
    let closure_5;
    let obj10;
    let obj5;
    let closure_1 = arg1;
    let closure_3 = arg3;
    const HTTP = closure_133_0(closure_133_2[6]).HTTP;
    const request = {
      url: closure_133_6.DIRECTORY_CHANNEL_ENTRY(channelId, closure_1),
      body: obj5,
      rejectWithError: obj10.rejectWithMigratedError(),
    };
    const patch = HTTP.patch;
    obj5 = { description, primary_category_id: UNCATEGORIZED };
    obj10 = closure_133_0(closure_133_2[6]);
    await patch(request);
    let body = value;
    const obj8 = { type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId, entry: body.body };
    obj = closure_133_1(closure_133_2[5]);
    obj.dispatch(obj8);
    await "IconComponent";
    body = tmp;
    UNCATEGORIZED = closure_3;
    if (closure_3 === undefined) {
      UNCATEGORIZED = constants.UNCATEGORIZED;
    }
    return "Reflect";
  });
  return obj(...arguments);
};
obj = function _fetchGuildEntriesForIds() {
  obj = _asyncToGenerator(async (channelId, entity_ids) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj4;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              entity_ids = undefined;
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = {
                url: Endpoints.DIRECTORY_CHANNEL_LIST_BY_ID(channelId),
                query: obj4,
                rejectWithError: true,
              };
              const get = HTTP.get;
              c6 = 2;
              c7 = 1;
              obj4 = { entity_ids };
              const obj5 = { value: get(request), done: false };
              return obj5;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              entity_ids = value;
              const obj7 = { type: "GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS", channelId, entries: entity_ids.body };
              obj = closure_131_1(closure_131_2[5]);
              obj.dispatch(obj7);
              c5 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          closure_4 = tmp13;
          if (0 === c5) {
            c7 = 3;
            throw tmp13;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const DirectoryEntryCategories = GuildDirectoryConstants.DirectoryEntryCategories;
const Endpoints = Constants.Endpoints;
let debounce = debounce_mod;
_asyncToGenerator(async (channelId, category_id) => {
  let c6 = 0;
  let c7 = 0;
  let c5 = 0;
  return (async (arg0, value) => {
    let obj5;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
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
            return { value, done: true };
          } else {
            closure_3 = tmp;
            closure_2 = tmp4;
            category_id = undefined;
            c5 = 1;
            const obj8 = category_id(closure_2[5]);
            obj8.dispatch({ type: "GUILD_DIRECTORY_FETCH_START" });
            const HTTP = channelId(closure_2[6]).HTTP;
            const request = { url: c6.DIRECTORY_CHANNEL_ENTRIES(channelId), query: obj5, rejectWithError: true };
            const get = HTTP.get;
            c6 = 2;
            c7 = 1;
            obj5 = { category_id };
            const obj6 = { value: get(request), done: false };
            return obj6;
          }
        } else {
          if (1 === c6) {
            c5 = 0;
            const obj4 = category_id(closure_2[5]);
            obj4.dispatch({ type: "GUILD_DIRECTORY_FETCH_FAILURE" });
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            category_id = value;
            const obj9 = { type: "GUILD_DIRECTORY_FETCH_SUCCESS", channelId, entries: category_id.body };
            obj = category_id(closure_2[5]);
            obj.dispatch(obj9);
            c5 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp17) {
        closure_4 = tmp17;
        if (0 === c5) {
          c7 = 3;
          throw tmp17;
        } else {
          c6 = 1;
        }
      }
    }
  })();
});
const importDefaultResult1Result = debounce(function () {
  return closure_0(...arguments);
}, 200);
debounce = debounce_mod;
_asyncToGenerator(async (channelId) => {
  let c5 = 0;
  let c6 = 0;
  let c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_2 = tmp;
            closure_1 = undefined;
            c4 = 1;
            const HTTP = channelId(closure_2[6]).HTTP;
            const get = HTTP.get;
            c5 = 2;
            const obj4 = { url: c6.DIRECTORY_CHANNEL_CATEGORY_COUNTS(channelId), rejectWithError: true };
            c6 = 1;
            const obj5 = { value: get(obj4), done: false };
            return obj5;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            const obj7 = { type: "GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS", channelId, counts: closure_1.body };
            obj = closure_1(closure_2[5]);
            obj.dispatch(obj7);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp17) {
        closure_3 = tmp17;
        if (0 === c4) {
          c6 = 3;
          throw tmp17;
        } else {
          c5 = 1;
        }
      }
    }
  })();
});
const importDefaultResult2Result = debounce(function () {
  return closure_0(...arguments);
}, 200);
debounce = debounce_mod;
let closure_0 = _asyncToGenerator(async (channelId, query) => {
  let closure_4;
  let c6 = 0;
  let c7 = 0;
  let c5 = 0;
  return (async (arg0, value) => {
    let obj8;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
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
            return { value, done: true };
          } else {
            closure_3 = tmp;
            body = undefined;
            if (tmp27.shouldFetch(channelId, query)) {
              c5 = 1;
              const obj6 = { type: "GUILD_DIRECTORY_SEARCH_START", channelId, query };
              const obj7 = query(body[5]);
              obj7.dispatch(obj6);
              const HTTP = channelId(body[6]).HTTP;
              const request = { url: c6.DIRECTORY_ENTRIES_SEARCH(channelId), query: obj8, rejectWithError: true };
              const get = HTTP.get;
              c6 = 2;
              c7 = 1;
              obj8 = { query };
              const obj9 = { value: get(request), done: false };
              return obj9;
            } else {
              const obj10 = { type: "GUILD_DIRECTORY_CACHED_SEARCH", channelId, query };
              const obj5 = query(body[5]);
              obj5.dispatch(obj10);
            }
          }
        } else if (1 === c6) {
          c5 = 0;
          const obj4 = query(body[5]);
          obj4.dispatch({ type: "GUILD_DIRECTORY_FETCH_FAILURE" });
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          return { value, done: true };
        } else {
          body = value;
          const obj12 = { type: "GUILD_DIRECTORY_SEARCH_SUCCESS", channelId, query, results: body.body };
          obj = query(body[5]);
          obj.dispatch(obj12);
          c5 = 0;
        }
        c7 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp27) {
        if (0 === c5) {
          c7 = 3;
          throw tmp27;
        } else {
          c6 = 1;
        }
      }
    }
  })();
});
const importDefaultResult3Result = debounce(function () {
  return closure_0(...arguments);
}, 200);
const result = size.fileFinishedImporting("modules/directory_channels/GuildDirectoryActionCreators.tsx");

export const fetchDirectoryEntries = importDefaultResult1Result;
export const fetchDirectoryCounts = importDefaultResult2Result;
export const addDirectoryGuildEntry = function addDirectoryGuildEntry() {
  return obj(...arguments);
};
export const removeDirectoryGuildEntry = function removeDirectoryGuildEntry(channelId, guildId) {
  const tmp = TrackedHTTPUtilsDefault;
  const _delete = tmp.delete;
  obj = {
    url: Endpoints.DIRECTORY_CHANNEL_ENTRY(channelId, guildId),
    trackedActionData: {
      event: discord_common_AnalyticsUtils.NetworkActionNames.DIRECTORY_GUILD_ENTRY_DELETE,
      properties: { directory_channel_id: channelId, guild_id: guildId },
    },
    rejectWithError: true,
  };
  ({
    event: discord_common_AnalyticsUtils.NetworkActionNames.DIRECTORY_GUILD_ENTRY_DELETE,
    properties: { directory_channel_id: channelId, guild_id: guildId },
  });
  _delete(obj);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId, guildId };
  obj3.dispatch(obj4);
};
export const searchDirectoryEntries = importDefaultResult3Result;
export const clearDirectorySearch = function clearDirectorySearch(id) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_DIRECTORY_SEARCH_CLEAR", channelId: id };
  obj.dispatch(obj2);
};
export const updateDirectoryEntry = function updateDirectoryEntry() {
  return obj(...arguments);
};
export const selectDirectoryCategory = function selectDirectoryCategory(id, value) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_DIRECTORY_CATEGORY_SELECT", channelId: id, categoryId: value };
  obj.dispatch(obj2);
};
export const fetchGuildEntriesForIds = function fetchGuildEntriesForIds() {
  return obj(...arguments);
};
