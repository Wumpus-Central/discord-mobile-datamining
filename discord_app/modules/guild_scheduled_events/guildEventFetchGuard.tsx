// === Module 8853: guildEventFetchGuard ===

// Module 8853 (guildEventFetchGuard)
import DurationsDefault from "Durations" /* 1104 */;

let map4 = fn;
let map5 = importDefault;
let set2 = dependencyMap;
let map6 = 1024;
const UTCResult = Date.UTC(2021, 0, 1);
let map7 = UTCResult;
let result = 15 * DurationsDefault.Millis.MINUTE;
let notifyRetryable = result;
const prototype = function GuildEventUnavailableError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
let set = new Set([400, 403, 404]);
notifyRetryable = function notifyRetryable(arg0) {
  value = map7.get(arg0);
  if (null != value) {
    map7.delete(arg0);
    const item = value.forEach((fn) => fn());
  }
};
new Map();
const map = new Map();
new Map();
const map1 = new Map();
new Set();
const set1 = new Set();
new Map();
const map2 = new Map();
new Map();
const navigation = {
  guard(arg0, arg1, arg2) {
    obj = arg3;
    if (arg3 === undefined) {
      obj = {};
    }
    let str = obj.priority;
    if (str === undefined) {
      str = "background";
    }
    let value18;
    let cleanupPromise;
    const combined = "" + arg0 + "/" + arg1;
    value2 = combined.get(combined);
    if (null != value2) {
      if ("foreground" === str) {
        const request2 = value2.request;
        value3 = map6.get(combined);
        map6.delete(combined);
        let request1;
        if (value3 != null) {
          request1 = value3.request;
        }
        if (request1 !== request2) {
          const obj6 = { startedAt: null, request: null };
          const _Date4 = Date;
          obj6.startedAt = Date.now();
          obj6.request = request2;
          value3 = obj6;
        }
        let result = map6.set(combined, value3);
        if (map6.size > map6) {
          value4 = map6.keys().next().value;
          while (null != value4) {
            let deleteResult1 = map6.delete(value4);
            if (map6.size <= map6) {
              break;
            }
          }
          const iter4 = map6.keys();
        }
      }
      return value2.request;
    }
    const value15 = map6.get(combined);
    if ("foreground" === str) {
      if (null != value15) {
        const _Date = Date;
        if (Date.now() - value15.startedAt < 2000) {
          let request = value15.request;
          let value16 = map6.get(combined);
          map6.delete(combined);
          let request3;
          if (value16 != null) {
            request3 = value16.request;
          }
          if (request3 !== request) {
            const obj8 = { startedAt: null, request: null };
            const _Date3 = Date;
            obj8.startedAt = Date.now();
            obj8.request = request;
            value16 = obj8;
          }
          let result1 = map6.set(combined, value16);
          if (map6.size > map6) {
            const value17 = map6.keys().next().value;
            while (null != value17) {
              let deleteResult3 = map6.delete(value17);
              if (map6.size <= map6) {
                break;
              }
            }
            const iter3 = map6.keys();
          }
          return value15.request;
        }
      }
    }
    if ("background" === str) {
      if (cleanupPromise.has(combined)) {
        return Promise.reject(new prototype("guild event is unavailable"));
      }
    }
    value18 = value18.get(combined);
    if (null != value18) {
      obj4.delete(combined);
      const result2 = obj4.set(combined, value18);
      if (obj4.size > map6) {
        value = value18.keys().next().value;
        while (null != value) {
          let value19 = obj5.get(value);
          if (value19 != null) {
            let cancelResult = value19.cancel();
          }
          let deleteResult5 = obj5.delete(value);
          let value20 = map7.get(value);
          if (null != value20) {
            let deleteResult6 = map7.delete(value);
            let item = value20.forEach((fn) => fn());
          }
          if (obj5.size <= map6) {
            break;
          }
        }
        let iter = value18.keys();
      }
      if (tmp5) {
        if (value18.pending) {
          const _Error2 = Error;
          const error = new Error("guild event fetch is backing off");
          return Promise.reject(error);
        }
      }
    }
    if ("background" === str) {
      if (obj2.size >= map6) {
        const _Error = Error;
        const error1 = new Error("too many pending guild event fetches");
        return Promise.reject(error1);
      }
    }
    const resolved = Promise.resolve();
    const nextPromise = resolved.then(arg2);
    const nextPromise1 = resolved.then(arg2).then((result) => {
      value = map4.get(combined);
      let request;
      if (value != null) {
        request = value.request;
      }
      if (request === cleanupPromise) {
        value2 = map5.get(combined);
        if (value2 != null) {
          value2.succeed();
        }
        map5.delete(combined);
        set2.delete(combined);
      }
      return result;
    });
    cleanupPromise = resolved.then(arg2).then((result) => {
      value = map4.get(combined);
      let request;
      if (value != null) {
        request = value.request;
      }
      if (request === cleanupPromise) {
        value2 = map5.get(combined);
        if (value2 != null) {
          value2.succeed();
        }
        map5.delete(combined);
        set2.delete(combined);
      }
      return result;
    }).catch((error) => {
      if (!(error instanceof combined(dependencyMap[2]).GuildEventEmbedFetchQueueError)) {
        value2 = map4.get(combined);
        let request;
        if (value2 != null) {
          request = value2.request;
        }
        if (request === cleanupPromise) {
          let flag = true;
          if (!(error instanceof metroRequire)) {
            let status;
            if (typeof error === "object") {
              if (null != error) {
                if ("status" in error) {
                  status = error.status;
                }
              }
            }
            let hasItem = typeof status === "number";
            if (typeof status === "number") {
              hasItem = set.has(status);
            }
            flag = hasItem;
          }
          if (flag) {
            const value7 = map5.get(combined);
            if (value7 != null) {
              value7.cancel();
            }
            map5.delete(combined);
            set2.delete(combined);
            set2.add(combined);
            if (set2.size > c3) {
              const value8 = set2.values().next().value;
              while (null != value8) {
                let deleteResult2 = set2.delete(value8);
                if (set2.size <= c3) {
                  break;
                }
              }
              const iter2 = set2.values();
            }
            throw error;
          } else {
            let tmp112 = value18;
            if (value18 == null) {
              const result = 10 * value18(dependencyMap[0]).Millis.SECOND;
              tmp112 = new value18(dependencyMap[3])(result, 10 * value18(dependencyMap[0]).Millis.MINUTE, true);
              const tmp11 = value18(dependencyMap[3]);
            }
            map5.delete(combined);
            const result1 = map5.set(combined, tmp112);
            if (map5.size > map6) {
              value = map5.keys().next().value;
              while (null != value) {
                let value9 = map5.get(value);
                if (value9 != null) {
                  let cancelResult1 = value9.cancel();
                }
                let deleteResult4 = map5.delete(value);
                let value10 = map7.get(value);
                if (null != value10) {
                  let deleteResult5 = map7.delete(value);
                  let item = value10.forEach((fn) => fn());
                }
                if (map5.size <= map6) {
                  break;
                }
              }
              const iter = map5.keys();
            }
            tmp112.cancel();
            tmp112.fail(() => queueMicrotask(() => {
              value = map.get(closure_1_0);
              if (null != value) {
                map.delete(closure_1_0);
                const item = value.forEach((fn) => fn());
              }
            }));
            throw error;
          }
        }
      }
      throw error;
    }).finally(() => {
      value = map4.get(combined);
      let request;
      if (value != null) {
        request = value.request;
      }
      if (request === cleanupPromise) {
        map4.delete(combined);
      }
    });
    const result3 = obj2.set(combined, { request: cleanupPromise, priority: str });
    if ("foreground" === str) {
      let value21 = map6.get(combined);
      map6.delete(combined);
      let request4;
      if (value21 != null) {
        request4 = value21.request;
      }
      if (request4 !== cleanupPromise) {
        const obj10 = { startedAt: null, request: null };
        const _Date2 = Date;
        obj10.startedAt = Date.now();
        obj10.request = cleanupPromise;
        value21 = obj10;
      }
      const result4 = map6.set(combined, value21);
      if (map6.size > map6) {
        const value22 = map6.keys().next().value;
        while (null != value22) {
          let deleteResult8 = map6.delete(value22);
          if (map6.size <= map6) {
            break;
          }
        }
        let iter2 = map6.keys();
      }
    }
    return cleanupPromise;
  },
  onRetryable(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    value = map7.get(arg0);
    set = value;
    let obj2 = value;
    if (null == value) {
      const _Set = Set;
      set = new Set();
      const result = map7.set(arg0, set);
      obj2 = set;
    }
    obj2.add(arg1);
    return () => {
      set.delete(closure_1);
      let tmp3 = 0 === set.size;
      if (tmp3) {
        tmp3 = map7.get(closure_0) === set;
      }
      if (tmp3) {
        map7.delete(closure_0);
      }
    };
  },
  forgetTransientFailures() {
    const items = [...map5.keys()];
    const values = map5.values();
    for (const item10013 of values) {
      let cancelResult = item10013.cancel();
      continue;
    }
    map5.clear();
    const item = items.forEach(notifyRetryable);
  },
  reset() {
    map4.clear();
    map6.clear();
    set2.clear();
    map7.clear();
    const values = map5.values();
    for (const item10019 of values) {
      let cancelResult = item10019.cancel();
      continue;
    }
    map5.clear();
  }
};
notifyRetryable = function notifyRetryable(arg0) {
  value = map7.get(arg0);
  if (null != value) {
    map7.delete(arg0);
    const item = value.forEach((fn) => fn());
  }
};
map4 = new Map();
map5 = new Map();
set2 = new Set();
map6 = new Map();
map7 = new Map();
let obj = {
  guard(arg0, arg1, arg2) {
    obj = arg3;
    if (arg3 === undefined) {
      obj = {};
    }
    let str = obj.priority;
    if (str === undefined) {
      str = "background";
    }
    let value18;
    let cleanupPromise;
    const combined = "" + arg0 + "/" + arg1;
    value2 = combined.get(combined);
    if (null != value2) {
      if ("foreground" === str) {
        const request2 = value2.request;
        value3 = map6.get(combined);
        map6.delete(combined);
        let request1;
        if (value3 != null) {
          request1 = value3.request;
        }
        if (request1 !== request2) {
          const obj6 = { startedAt: null, request: null };
          const _Date4 = Date;
          obj6.startedAt = Date.now();
          obj6.request = request2;
          value3 = obj6;
        }
        let result = map6.set(combined, value3);
        if (map6.size > map6) {
          value4 = map6.keys().next().value;
          while (null != value4) {
            let deleteResult1 = map6.delete(value4);
            if (map6.size <= map6) {
              break;
            }
          }
          const iter4 = map6.keys();
        }
      }
      return value2.request;
    }
    const value15 = map6.get(combined);
    if ("foreground" === str) {
      if (null != value15) {
        const _Date = Date;
        if (Date.now() - value15.startedAt < 2000) {
          let request = value15.request;
          let value16 = map6.get(combined);
          map6.delete(combined);
          let request3;
          if (value16 != null) {
            request3 = value16.request;
          }
          if (request3 !== request) {
            const obj8 = { startedAt: null, request: null };
            const _Date3 = Date;
            obj8.startedAt = Date.now();
            obj8.request = request;
            value16 = obj8;
          }
          let result1 = map6.set(combined, value16);
          if (map6.size > map6) {
            const value17 = map6.keys().next().value;
            while (null != value17) {
              let deleteResult3 = map6.delete(value17);
              if (map6.size <= map6) {
                break;
              }
            }
            const iter3 = map6.keys();
          }
          return value15.request;
        }
      }
    }
    if ("background" === str) {
      if (cleanupPromise.has(combined)) {
        return Promise.reject(new prototype("guild event is unavailable"));
      }
    }
    value18 = value18.get(combined);
    if (null != value18) {
      obj4.delete(combined);
      const result2 = obj4.set(combined, value18);
      if (obj4.size > map6) {
        value = value18.keys().next().value;
        while (null != value) {
          let value19 = obj5.get(value);
          if (value19 != null) {
            let cancelResult = value19.cancel();
          }
          let deleteResult5 = obj5.delete(value);
          let value20 = map7.get(value);
          if (null != value20) {
            let deleteResult6 = map7.delete(value);
            let item = value20.forEach((fn) => fn());
          }
          if (obj5.size <= map6) {
            break;
          }
        }
        let iter = value18.keys();
      }
      if (tmp5) {
        if (value18.pending) {
          const _Error2 = Error;
          const error = new Error("guild event fetch is backing off");
          return Promise.reject(error);
        }
      }
    }
    if ("background" === str) {
      if (obj2.size >= map6) {
        const _Error = Error;
        const error1 = new Error("too many pending guild event fetches");
        return Promise.reject(error1);
      }
    }
    const resolved = Promise.resolve();
    const nextPromise = resolved.then(arg2);
    const nextPromise1 = resolved.then(arg2).then((result) => {
      value = map4.get(combined);
      let request;
      if (value != null) {
        request = value.request;
      }
      if (request === cleanupPromise) {
        value2 = map5.get(combined);
        if (value2 != null) {
          value2.succeed();
        }
        map5.delete(combined);
        set2.delete(combined);
      }
      return result;
    });
    cleanupPromise = resolved.then(arg2).then((result) => {
      value = map4.get(combined);
      let request;
      if (value != null) {
        request = value.request;
      }
      if (request === cleanupPromise) {
        value2 = map5.get(combined);
        if (value2 != null) {
          value2.succeed();
        }
        map5.delete(combined);
        set2.delete(combined);
      }
      return result;
    }).catch((error) => {
      if (!(error instanceof combined(dependencyMap[2]).GuildEventEmbedFetchQueueError)) {
        value2 = map4.get(combined);
        let request;
        if (value2 != null) {
          request = value2.request;
        }
        if (request === cleanupPromise) {
          let flag = true;
          if (!(error instanceof metroRequire)) {
            let status;
            if (typeof error === "object") {
              if (null != error) {
                if ("status" in error) {
                  status = error.status;
                }
              }
            }
            let hasItem = typeof status === "number";
            if (typeof status === "number") {
              hasItem = set.has(status);
            }
            flag = hasItem;
          }
          if (flag) {
            const value7 = map5.get(combined);
            if (value7 != null) {
              value7.cancel();
            }
            map5.delete(combined);
            set2.delete(combined);
            set2.add(combined);
            if (set2.size > c3) {
              const value8 = set2.values().next().value;
              while (null != value8) {
                let deleteResult2 = set2.delete(value8);
                if (set2.size <= c3) {
                  break;
                }
              }
              const iter2 = set2.values();
            }
            throw error;
          } else {
            let tmp112 = value18;
            if (value18 == null) {
              const result = 10 * value18(dependencyMap[0]).Millis.SECOND;
              tmp112 = new value18(dependencyMap[3])(result, 10 * value18(dependencyMap[0]).Millis.MINUTE, true);
              const tmp11 = value18(dependencyMap[3]);
            }
            map5.delete(combined);
            const result1 = map5.set(combined, tmp112);
            if (map5.size > map6) {
              value = map5.keys().next().value;
              while (null != value) {
                let value9 = map5.get(value);
                if (value9 != null) {
                  let cancelResult1 = value9.cancel();
                }
                let deleteResult4 = map5.delete(value);
                let value10 = map7.get(value);
                if (null != value10) {
                  let deleteResult5 = map7.delete(value);
                  let item = value10.forEach((fn) => fn());
                }
                if (map5.size <= map6) {
                  break;
                }
              }
              const iter = map5.keys();
            }
            tmp112.cancel();
            tmp112.fail(() => queueMicrotask(() => {
              value = map.get(closure_1_0);
              if (null != value) {
                map.delete(closure_1_0);
                const item = value.forEach((fn) => fn());
              }
            }));
            throw error;
          }
        }
      }
      throw error;
    }).finally(() => {
      value = map4.get(combined);
      let request;
      if (value != null) {
        request = value.request;
      }
      if (request === cleanupPromise) {
        map4.delete(combined);
      }
    });
    const result3 = obj2.set(combined, { request: cleanupPromise, priority: str });
    if ("foreground" === str) {
      let value21 = map6.get(combined);
      map6.delete(combined);
      let request4;
      if (value21 != null) {
        request4 = value21.request;
      }
      if (request4 !== cleanupPromise) {
        const obj10 = { startedAt: null, request: null };
        const _Date2 = Date;
        obj10.startedAt = Date.now();
        obj10.request = cleanupPromise;
        value21 = obj10;
      }
      const result4 = map6.set(combined, value21);
      if (map6.size > map6) {
        const value22 = map6.keys().next().value;
        while (null != value22) {
          let deleteResult8 = map6.delete(value22);
          if (map6.size <= map6) {
            break;
          }
        }
        let iter2 = map6.keys();
      }
    }
    return cleanupPromise;
  },
  onRetryable(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    value = map7.get(arg0);
    set = value;
    let obj2 = value;
    if (null == value) {
      const _Set = Set;
      set = new Set();
      const result = map7.set(arg0, set);
      obj2 = set;
    }
    obj2.add(arg1);
    return () => {
      set.delete(closure_1);
      let tmp3 = 0 === set.size;
      if (tmp3) {
        tmp3 = map7.get(closure_0) === set;
      }
      if (tmp3) {
        map7.delete(closure_0);
      }
    };
  },
  forgetTransientFailures() {
    const items = [...map5.keys()];
    const values = map5.values();
    for (const item10013 of values) {
      let cancelResult = item10013.cancel();
      continue;
    }
    map5.clear();
    const item = items.forEach(notifyRetryable);
  },
  reset() {
    map4.clear();
    map6.clear();
    set2.clear();
    map7.clear();
    const values = map5.values();
    for (const item10019 of values) {
      let cancelResult = item10019.cancel();
      continue;
    }
    map5.clear();
  }
};
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventFetchGuard.tsx");

export const MAX_TRACKED_GUILD_EVENT_FETCHES = 1024;
export const GUILD_EVENT_FOREGROUND_THROTTLE_MS = 2000;
export const GUILD_EVENT_MIN_TIMESTAMP = UTCResult;
export const GUILD_EVENT_FUTURE_SKEW_MS = result;
export const isPlausibleGuildEventTarget = function isPlausibleGuildEventTarget(arg0, arg1) {
  let timestamp = arg2;
  if (arg2 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (obj.isProbablyAValidSnowflake(arg0)) {
    if (tmp3Result.isProbablyAValidSnowflake(arg1)) {
      const extractTimestampResult = map5(set2[1]).extractTimestamp(arg1);
      let tmp8 = extractTimestampResult >= map7;
      if (tmp8) {
        tmp8 = extractTimestampResult <= timestamp + notifyRetryable;
      }
      return tmp8;
    }
    tmp3Result = map5(set2[1]);
  }
  return false;
};
export const GuildEventUnavailableError = prototype;
export const isGuildEventUnavailableError = function isGuildEventUnavailableError(status) {
  if (status instanceof prototype) {
    return true;
  } else {
    status = undefined;
    if (typeof status === "object") {
      if (null != status) {
        if ("status" in status) {
          status = status.status;
        }
      }
    }
    let hasItem = typeof status === "number";
    if (typeof status === "number") {
      hasItem = set.has(status);
    }
    return hasItem;
  }
};
export const guardGuildEventFetch = function guardGuildEventFetch(arg0, arg1, arg2, arg3) {
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let str = obj.priority;
  if (str == null) {
    str = "background";
  }
  if ("background" === str) {
    const _Date = Date;
    const timestamp = Date.now();
    let flag = false;
    if (obj4.isProbablyAValidSnowflake(arg0)) {
      flag = false;
      if (tmp10Result.isProbablyAValidSnowflake(arg1)) {
        const extractTimestampResult = map5(set2[1]).extractTimestamp(arg1);
        let tmp3 = extractTimestampResult >= map7;
        if (tmp3) {
          tmp3 = extractTimestampResult <= timestamp + notifyRetryable;
        }
        flag = tmp3;
        const tmp10Result2 = map5(set2[1]);
      }
      tmp10Result = map5(set2[1]);
    }
    if (!flag) {
      let rejectResult = Promise.reject(new prototype("guild event id is not plausible"));
    }
    return rejectResult;
  }
  rejectResult = navigation.guard(arg0, arg1, arg2, obj);
};
export const guardGuildEventUserCountFetch = obj.guard;
export const onGuildEventFetchRetryable = function onGuildEventFetchRetryable(arg0, arg1, arg2) {
  return navigation.onRetryable("" + arg0 + "/" + arg1, arg2);
};
export const forgetTransientGuildEventFetchFailures = function forgetTransientGuildEventFetchFailures() {
  const result = navigation.forgetTransientFailures();
  const result1 = obj.forgetTransientFailures();
};
export const resetGuildEventFetchGuardForTest = function resetGuildEventFetchGuardForTest() {
  navigation.reset();
  obj.reset();
};