// === Module 9508: DiscoverableGuildsActionCreators ===

// Module 9508 (DiscoverableGuildsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DiscoverableGuildsStore from "DiscoverableGuildsStore" /* 9507 */;

require = fn;
let closure_7 = async function _requestGuilds(arg0) {
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = guild_ids;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          const obj5 = { type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds: guild_ids };
          DispatcherDefault.dispatch(obj5);
          c5 = 1;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.GUILD_DISCOVERY, query: null, oldFormErrors: true, rejectWithError: true };
          const obj6 = { guild_ids };
          request.query = obj6;
          c6 = 2;
          c7 = 1;
          const obj7 = { value: HTTP.get(request), done: false };
          return obj7;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_3 = closure_4;
        const obj8 = { type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds: closure_130_0 };
        closure_131_1(closure_131_2[3]).dispatch(obj8);
        throw closure_130_3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        closure_130_1 = value;
        const body = closure_130_1.body;
        let guilds;
        if (body != null) {
          guilds = body.guilds;
        }
        closure_1 = guilds;
        if (guilds == null) {
          closure_1 = [];
        }
        closure_130_2 = closure_1;
        const obj11 = { type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds: closure_130_0, guilds: closure_130_2 };
        closure_131_1(closure_131_2[3]).dispatch(obj11);
        c5 = 0;
        c7 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp26) {
      closure_4 = tmp26;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp26;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_8 = async function _fetchDiscoverableGuilds(arg0) {
  dependencyMap = arg0;
  c6 = 0;
  c5 = 0;
  c8 = 0;
  return (async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        c5 = 2;
        let tmp3 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            staleGuildIds = staleGuildIds.getStaleGuildIds(dependencyMap);
            let _Set = Set;
            let tmp31 = new.target;
            let tmp32 = new.target;
            let set = new Set();
            closure_2 = dependencyMap;
            closure_1 = dependencyMap[Symbol.iterator]();
            while (closure_1 !== undefined) {
              c8 = 1;
              value = map.get(tmp12);
              if (null != value) {
                let addResult = set.add(value);
              }
              c8 = 0;
              continue;
            }
            if (staleGuildIds.length > 0) {
              let promise = (function requestGuilds() {
                const self = this;
                const apply = closure_1_7.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(staleGuildIds);
              let cleanupPromise = promise.finally(() => {
                for (const item10006 of staleGuildIds) {
                  if (map.get(item10006) === cleanupPromise) {
                    let deleteResult = map.delete(item10006);
                  }
                  continue;
                }
              });
              closure_3 = staleGuildIds[Symbol.iterator]();
              while (closure_3 !== undefined) {
                let result = map.set(tmp20, cleanupPromise);
                c8 = 0;
                continue;
              }
              let addResult1 = set.add(cleanupPromise);
            }
            let _Promise = Promise;
            c6 = 2;
            c5 = 1;
            let obj4 = { value: Promise.all(set), done: false };
            return obj4;
          }
        } else if (1 === tmp3) {
          c8 = 0;
          closure_1.return();
          throw closure_1_7;
        } else if (2 === tmp3) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } else {
          c8 = 0;
          closure_3.return();
          throw closure_1_7;
        }
      }
    }
  })();
};
const Endpoints = fn(1084).Endpoints;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild/DiscoverableGuildsActionCreators.tsx");

export const fetchDiscoverableGuilds = function fetchDiscoverableGuilds() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};