import importDefaultResult from "dispatcher";
import getSearchState from "getSearchState";
import { DirectoryEntryCategories } from "DirectoryEntryTypes";
import { Endpoints } from "ME";
import importDefaultResult1 from "debounce";
import importDefaultResult2 from "debounce";
import importDefaultResult3 from "debounce";

let closure_0 = arg1;
function _addDirectoryGuildEntry() {
  const self = this;
  const tmp = importDefaultResult((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    const iter = (function*(arg0, arg1, arg2) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_5 = tmp3;
              let body = tmp2;
              let UNCATEGORIZED;
              if (UNCATEGORIZED === undefined) {
                UNCATEGORIZED = outer1_5.UNCATEGORIZED;
              }
              body = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj7 = callback2(5094);
              const obj2 = { url: null, body: null, trackedActionData: null, rejectWithError: null };
              obj2[0] = c6.DIRECTORY_CHANNEL_ENTRY(callback, callback2);
              const obj3 = { description: null, primary_category_id: null };
              obj3[0] = dependencyMap;
              obj3[1] = UNCATEGORIZED;
              obj2[1] = obj3;
              const obj4 = { event: null, properties: null };
              obj4[0] = callback(503).NetworkActionNames.DIRECTORY_GUILD_ENTRY_CREATE;
              const obj5 = { directory_channel_id: null, guild_id: null, primary_category_id: null };
              obj5[0] = callback;
              obj5[1] = callback2;
              obj5[2] = UNCATEGORIZED;
              obj4[1] = obj5;
              obj2[2] = obj4;
              obj2[3] = callback(530).rejectWithMigratedError();
              c6 = 2;
              c7 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = obj7.post(obj2);
              return obj6;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            body = arg1;
            obj = callback2(709);
            const obj8 = { type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: null, entry: null };
            obj8[1] = callback;
            obj8[2] = body.body;
            obj.dispatch(obj8);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          c7 = tmp;
          throw tmp18;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _addDirectoryGuildEntry = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateDirectoryEntry() {
  const self = this;
  const tmp = importDefaultResult((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    const iter = (function*(arg0, arg1, arg2) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_5 = tmp3;
              let body = tmp2;
              let UNCATEGORIZED;
              if (UNCATEGORIZED === undefined) {
                UNCATEGORIZED = outer1_5.UNCATEGORIZED;
              }
              body = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const HTTP = callback(530).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: null };
              obj2[0] = c6.DIRECTORY_CHANNEL_ENTRY(callback, callback2);
              const obj3 = { description: null, primary_category_id: null };
              obj3[0] = dependencyMap;
              obj3[1] = UNCATEGORIZED;
              obj2[1] = obj3;
              obj2[2] = callback(530).rejectWithMigratedError();
              c6 = 2;
              c7 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.patch(obj2);
              return obj4;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            body = arg1;
            obj = callback2(709);
            const obj6 = { type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: null, entry: null };
            obj6[1] = callback;
            obj6[2] = body.body;
            obj.dispatch(obj6);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          c7 = tmp;
          throw tmp18;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _updateDirectoryEntry = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchGuildEntriesForIds() {
  const self = this;
  const tmp = importDefaultResult((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_3 = tmp3;
              const table = tmp7;
              let lib;
              let c5 = 1;
              const HTTP = callback(outer1_2[6]).HTTP;
              const obj1 = { url: null, query: null, rejectWithError: true };
              obj1[0] = c6.DIRECTORY_CHANNEL_LIST_BY_ID(callback);
              const obj2 = { entity_ids: null };
              obj2[0] = lib;
              obj1[1] = obj2;
              c6 = 2;
              c7 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              c7 = 3;
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              obj = lib(table[5]);
              const obj4 = { type: "GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS", channelId: null, entries: null };
              obj4[1] = callback;
              obj4[2] = lib.body;
              obj.dispatch(obj4);
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
        } catch (tmp16) {
          let getSearchState = tmp16;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp16;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _fetchGuildEntriesForIds = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c3 = importDefaultResult;
closure_0 = undefined;
closure_0 = importDefaultResult((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let c6 = 0;
  let c7 = 0;
  let c5 = 0;
  return (function*(arg0, arg1) {
    if (c7 === 2) {
      c7 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_3 = tmp3;
            let closure_2 = tmp7;
            let lib;
            let c5 = 1;
            lib(outer1_2[5]).dispatch({ type: "GUILD_DIRECTORY_FETCH_START" });
            const HTTP = callback(outer1_2[6]).HTTP;
            const obj1 = { url: null, query: null, rejectWithError: true };
            obj1[0] = c6.DIRECTORY_CHANNEL_ENTRIES(callback);
            const obj2 = { category_id: null };
            obj2[0] = lib;
            obj1[1] = obj2;
            c6 = 2;
            c7 = 1;
            let obj3 = { value: null, done: false };
            obj3[0] = HTTP.get(obj1);
            return obj3;
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            obj3 = lib(outer1_2[5]);
            obj3.dispatch({ type: "GUILD_DIRECTORY_FETCH_FAILURE" });
            c7 = 3;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            lib = arg1;
            obj = lib(outer1_2[5]);
            const obj4 = { type: "GUILD_DIRECTORY_FETCH_SUCCESS", channelId: null, entries: null };
            obj4[1] = callback;
            obj4[2] = lib.body;
            obj.dispatch(obj4);
            c5 = 0;
          }
          c5 = 0;
          c7 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        }
      } catch (tmp20) {
        let getSearchState = tmp20;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp20;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
});
closure_0 = undefined;
const importDefaultResult1Result = require("debounce")(function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}, 200);
closure_0 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c5 = 0;
  let c6 = 0;
  let c4 = 0;
  return (function*(arg0) {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp3;
            let body = tmp7;
            body = undefined;
            let c4 = 1;
            const HTTP = callback(outer1_2[6]).HTTP;
            const obj1 = { url: null, rejectWithError: true };
            obj1[0] = c6.DIRECTORY_CHANNEL_CATEGORY_COUNTS(callback);
            c5 = 2;
            c6 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            body = arg1;
            obj = outer1_1(outer1_2[5]);
            const obj3 = { type: "GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS", channelId: null, counts: null };
            obj3[1] = callback;
            obj3[2] = body.body;
            obj.dispatch(obj3);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        }
      } catch (tmp20) {
        let closure_3 = tmp20;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp20;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
});
closure_0 = undefined;
const importDefaultResult2Result = require("debounce")(function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}, 200);
closure_0 = importDefaultResult((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let c6 = 0;
  let c7 = 0;
  let c5 = 0;
  return (function*(arg0, arg1) {
    if (c7 === 2) {
      c7 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_3 = tmp3;
            let body = tmp7;
            body = undefined;
            if (outer1_4.shouldFetch(callback, callback2)) {
              let c5 = 1;
              let obj6 = callback2(outer1_2[5]);
              const obj1 = { type: "GUILD_DIRECTORY_SEARCH_START", channelId: null, query: null };
              obj1[1] = tmp38;
              obj1[2] = tmp39;
              obj6.dispatch(obj1);
              const HTTP = callback(outer1_2[6]).HTTP;
              const obj2 = { url: null, query: null, rejectWithError: true };
              obj2[0] = c6.DIRECTORY_ENTRIES_SEARCH(tmp38);
              let obj3 = { query: null };
              obj3[0] = tmp39;
              obj2[1] = obj3;
              c6 = 2;
              c7 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = HTTP.get(obj2);
              return obj4;
            } else {
              obj4 = callback2(outer1_2[5]);
              const obj5 = { type: "GUILD_DIRECTORY_CACHED_SEARCH", channelId: null, query: null };
              obj5[1] = tmp38;
              obj5[2] = tmp39;
              obj4.dispatch(obj5);
            }
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            obj3 = callback2(outer1_2[5]);
            obj3.dispatch({ type: "GUILD_DIRECTORY_FETCH_FAILURE" });
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            body = arg1;
            obj = callback2(outer1_2[5]);
            obj6 = { type: "GUILD_DIRECTORY_SEARCH_SUCCESS", channelId: null, query: null, results: null };
            obj6[1] = callback;
            obj6[2] = callback2;
            obj6[3] = body.body;
            obj.dispatch(obj6);
            c5 = 0;
          }
          c5 = 0;
          c7 = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = arg1;
          return obj7;
        }
        c7 = 3;
      } catch (tmp30) {
        let getSearchState = tmp30;
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
const importDefaultResult3Result = require("debounce")(function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}, 200);
const result = require("DirectoryEntryTypes").fileFinishedImporting("modules/directory_channels/GuildDirectoryActionCreators.tsx");

export const fetchDirectoryEntries = importDefaultResult1Result;
export const fetchDirectoryCounts = importDefaultResult2Result;
export const addDirectoryGuildEntry = function addDirectoryGuildEntry(c0, id, c3, c4) {
  const self = this;
  const apply = _addDirectoryGuildEntry.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeDirectoryGuildEntry = function removeDirectoryGuildEntry(channelId, guildId) {
  let obj = importDefault(5094);
  obj = { url: Endpoints.DIRECTORY_CHANNEL_ENTRY(channelId, guildId), trackedActionData: null, rejectWithError: true };
  obj = { event: callback(503).NetworkActionNames.DIRECTORY_GUILD_ENTRY_DELETE, properties: obj1 };
  obj[1] = obj;
  obj.delete(obj);
  importDefault(709).dispatch({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId, guildId });
};
export const searchDirectoryEntries = importDefaultResult3Result;
export const clearDirectorySearch = function clearDirectorySearch(id) {
  let obj = importDefault(709);
  obj = { type: "GUILD_DIRECTORY_SEARCH_CLEAR", channelId: id };
  obj.dispatch(obj);
};
export const updateDirectoryEntry = function updateDirectoryEntry(channelId, guildId, closure_0, closure_1) {
  const self = this;
  const apply = _updateDirectoryEntry.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const selectDirectoryCategory = function selectDirectoryCategory(id, value) {
  let obj = importDefault(709);
  obj = { type: "GUILD_DIRECTORY_CATEGORY_SELECT", channelId: id, categoryId: value };
  obj.dispatch(obj);
};
export const fetchGuildEntriesForIds = function fetchGuildEntriesForIds(c1, outer1_4) {
  const self = this;
  const apply = _fetchGuildEntriesForIds.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};