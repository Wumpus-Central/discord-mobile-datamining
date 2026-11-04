// === Module 19832: InterestGuildsResource ===

// Module 19832 (InterestGuildsResource)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

function availableInterestGuilds(degraded) {
  if (degraded.degraded) {
    return [];
  } else {
    const _Set = Set;
    const set = new Set();
    const guilds = degraded.guilds;
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildsResource.tsx");
class InterestGuildsResource {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.snapshot = { key: "", status: "idle", guilds: [] };
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
        const substr = Array.from(set).slice(0, 5);
        const sorted = substr.sort();
        const joined = sorted.join(",");
        if (tmp9) {
          const _Array2 = Array;
          const _Set2 = Set;
          const set1 = new Set(items);
          obj.gameIds = Array.from(set1).slice(0, 5);
          obj.requestId = obj.requestId + 1;
          if ("" !== joined) {
            const obj2 = { key: joined, status: "loading", guilds: [] };
            obj.publish(obj2);
            items = [];
            ({ load, requestId } = obj);
            HermesBuiltin.arraySpread(obj.gameIds, 0);
            load(requestId, joined, items);
          } else {
            const obj3 = { key: joined, status: "idle", guilds: [] };
            obj.publish(obj3);
          }
          const arr2 = Array.from(set1);
        }
        const arr = Array.from(set);
        tmp9 = joined !== obj.snapshot.key || flag;
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
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            c3 = 1;
            closure_0 = closure_1;
            c4 = 2;
            c5 = 1;
            const obj4 = { value: self.fetchGuilds(closure_2), done: false };
            return obj4;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            const obj5 = { key: closure_130_1, guilds: [], status: "unavailable" };
            closure_129_0 = obj5;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_129_1 = closure_0(value);
            const obj = { key: closure_130_1, guilds: closure_129_1, status: null };
            let str = "unavailable";
            if (closure_129_1.length > 0) {
              str = "ready";
            }
            obj.status = str;
            closure_129_0 = obj;
            c3 = 0;
          }
          let disposed = closure_130_3.disposed;
          if (!disposed) {
            disposed = closure_130_0 !== closure_130_3.requestId;
          }
          if (!disposed) {
            closure_130_3.publish(closure_129_0);
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp31) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp31;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};

export function interestGuildsKey(items) {
  const set = new Set(items);
  const substr = Array.from(new Set(items)).slice(0, 5);
  const sorted = substr.sort();
  return sorted.join(",");
}
export { availableInterestGuilds };
export { InterestGuildsResource };