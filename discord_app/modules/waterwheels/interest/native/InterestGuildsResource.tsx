// === Module 19881: InterestGuildsResource ===

// Module 19881 (InterestGuildsResource)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

function availableInterestGuilds(guilds) {
  const set = new Set();
  guilds = guilds.guilds;
  const found = guilds.filter((joined) => {
    joined = joined.joined;
    let flag = !joined;
    if (!joined) {
      flag = !set.has(joined.id);
    }
    if (flag) {
      set.add(joined.id);
      flag = true;
    }
    return flag;
  });
  return found.slice(0, 15);
}
const MAX_SELECTIONS = fn(18715).MAX_SELECTIONS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildsResource.tsx");
class InterestGuildsResource {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.snapshot = { key: "", status: "idle", guilds: [], failed: false };
    set = new Set();
    obj.listeners = set;
    obj.disposed = false;
    obj.requestId = 0;
    obj.gameIds = [];
    obj.getSnapshot = function getSnapshot() {
      return obj.snapshot;
    };
    obj.subscribe = function subscribe(arg0) {
      closure_0 = arg0;
      let listeners = closure_0.listeners;
      listeners.add(arg0);
      return () => {
        const listeners = obj.listeners;
        return listeners.delete(closure_0);
      };
    };
    obj.setPicks = function setPicks(items) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      if (!obj.disposed) {
        const _Array = Array;
        const _Set = Set;
        const set = new Set(items);
        const substr = Array.from(set).slice(0, MAX_SELECTIONS);
        const sorted = substr.sort();
        const joined = sorted.join(",");
        if (tmp10) {
          const _Array2 = Array;
          const _Set2 = Set;
          const set1 = new Set(items);
          obj.gameIds = Array.from(set1).slice(0, MAX_SELECTIONS);
          obj.requestId = obj.requestId + 1;
          if ("" !== joined) {
            const obj2 = { key: joined, status: "loading", guilds: [], failed: false };
            obj.publish(obj2);
            items = [];
            ({ load, requestId } = obj);
            HermesBuiltin.arraySpread(obj.gameIds, 0);
            load(requestId, joined, items);
          } else {
            const obj3 = { key: joined, status: "idle", guilds: [], failed: false };
            obj.publish(obj3);
          }
          const arr2 = Array.from(set1);
        }
        const arr = Array.from(set);
        tmp10 = joined !== obj.snapshot.key || flag;
      }
    };
    obj.retry = function retry() {
      return obj.setPicks(obj.gameIds, true);
    };
    obj.fetchGuilds = global;
    return obj;
  }
}
const prototype = InterestGuildsResource.prototype;
prototype["dispose"] = function dispose() {
  this.disposed = true;
  const listeners = this.listeners;
  listeners.clear();
};
prototype["publish"] = function publish(snapshot) {
  this.snapshot = snapshot;
  const listeners = this.listeners;
  const item = listeners.forEach((fn) => fn());
};
prototype["load"] = function load(arg0, arg1, arg2) {
  asyncGeneratorStep = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const self = this;
  return (async () => {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            let v0 = 1;
            c3 = 2;
            c4 = 1;
            const obj4 = { value: self.fetchGuilds(closure_2), done: false };
            return obj4;
          }
        } else {
          if (1 === tmp7) {
            v0 = 0;
            const obj5 = { key: closure_129_1, guilds: [], status: "unavailable", failed: true };
            closure_128_0 = obj5;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_1 = value;
            closure_128_2 = v0(closure_128_1);
            const obj = { key: closure_129_1, guilds: closure_128_2, status: null, failed: null };
            let str = "unavailable";
            if (closure_128_2.length > 0) {
              str = "ready";
            }
            obj.status = str;
            obj.failed = closure_128_1.degraded;
            closure_128_0 = obj;
            v0 = 0;
          }
          let disposed = closure_129_3.disposed;
          if (!disposed) {
            disposed = closure_129_0 !== closure_129_3.requestId;
          }
          if (!disposed) {
            closure_129_3.publish(closure_128_0);
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp32) {
        if (tmp4 === v0) {
          c4 = tmp2;
          throw tmp32;
        } else {
          c3 = tmp;
        }
      }
    }
  })();
};

export function interestGuildsKey(items) {
  const set = new Set(items);
  const substr = Array.from(new Set(items)).slice(0, MAX_SELECTIONS);
  const sorted = substr.sort();
  return sorted.join(",");
}
export { availableInterestGuilds };
export { InterestGuildsResource };