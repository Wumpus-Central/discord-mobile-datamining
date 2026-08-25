// === Module 14764: FetchStatus ===

// Module 14764 (FetchStatus)
import closure_0 from "asyncGeneratorStep" /* 5 */;

let obj = { Pending: 0, [0]: "Pending", Fetching: 1, [1]: "Fetching" };
const result = require("set").fileFinishedImporting("modules/message_previews/RemoteFetchData.tsx");
class RemoteFetchData {
  constructor() {
    obj = Object.create(new.target.prototype);
    set = new Set();
    obj[0] = set;
    set1 = new Set();
    obj[1] = set1;
    return obj;
  }
}
const prototype = RemoteFetchData.prototype;
prototype["empty"] = function empty() {
  return 0 === this.pending.size && 0 === this.fetching.size;
};
prototype["status"] = function status(arg0) {
  const pending = this.pending;
  if (pending.has(arg0)) {
    let Pending = obj.Pending;
  } else {
    const fetching = this.fetching;
    Pending = null;
    if (fetching.has(arg0)) {
      Pending = obj.Fetching;
    }
  }
  return Pending;
};
prototype["addWant"] = function addWant(arg0) {
  const fetching = this.fetching;
  if (!fetching.has(arg0)) {
    const pending = this.pending;
    pending.add(arg0);
  }
};
prototype["removeWant"] = function removeWant(channel_id) {
  const pending = this.pending;
  pending.delete(channel_id);
  const fetching = this.fetching;
  fetching.delete(channel_id);
};
prototype["nextWants"] = function nextWants(arg0) {
  const items = [...this.pending];
  items.length = Math.min(arg0, items.length);
  return items;
};
prototype["markFetching"] = function markFetching(closure_1_0) {
  const self = this;
  const iter = closure_1_0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let pending = self.pending;
    let deleteResult = pending.delete(nextResult);
    let fetching = self.fetching;
    let addResult = fetching.add(nextResult);
    continue;
  }
};
prototype["markCompleted"] = function markCompleted(closure_0) {
  const self = this;
  const iter = closure_0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let pending = self.pending;
    let deleteResult = pending.delete(nextResult);
    let fetching = self.fetching;
    let deleteResult1 = fetching.delete(nextResult);
    continue;
  }
};
prototype["markFailed"] = function markFailed(closure_0) {
  const self = this;
  const iter = closure_0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let pending = self.pending;
    let addResult = pending.add(nextResult);
    let fetching = self.fetching;
    let deleteResult = fetching.delete(nextResult);
    continue;
  }
};
prototype["try"] = function try(nextWantsResult, arg1) {
  const callback = nextWantsResult;
  closure_1 = arg1;
  const self = this;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_0 = undefined;
            c3 = 1;
            closure_1_2.markFetching(closure_1_0);
            c4 = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_1();
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_1 = closure_2;
          closure_2.markFailed(closure_0);
          throw closure_1;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1;
          closure_2.markCompleted(closure_0);
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = closure_0;
          return obj;
        }
      } catch (tmp25) {
        closure_2 = tmp25;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp25;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};

export const FetchStatus = obj;
export { RemoteFetchData };