// === Module 15320: RemoteFetchData ===

// Module 15320 (RemoteFetchData)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const FetchStatus = { Pending: 0, [0]: "Pending", Fetching: 1, [1]: "Fetching" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_previews/RemoteFetchData.tsx");
class RemoteFetchData {
  constructor() {
    merged = Object.assign({ pending: null, fetching: null });
    set = new Set();
    merged[0] = set;
    set1 = new Set();
    merged[1] = set1;
    return merged;
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
prototype["markFetching"] = function markFetching(arg0) {
  const self = this;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let pending = self.pending;
    let deleteResult = pending.delete(nextResult);
    let fetching = self.fetching;
    let addResult = fetching.add(nextResult);
    continue;
  }
};
prototype["markCompleted"] = function markCompleted(arg0) {
  const self = this;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let pending = self.pending;
    let deleteResult = pending.delete(nextResult);
    let fetching = self.fetching;
    let deleteResult1 = fetching.delete(nextResult);
    continue;
  }
};
prototype["markFailed"] = function markFailed(arg0) {
  const self = this;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let pending = self.pending;
    let addResult = pending.add(nextResult);
    let fetching = self.fetching;
    let deleteResult = fetching.delete(nextResult);
    continue;
  }
};
prototype["try"] = function try(nextWantsResult, string) {
  closure_0 = nextWantsResult;
  closure_1 = string;
  const self = this;
  return (async () => {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp7;
            closure_128_0 = undefined;
            c3 = 1;
            self.markFetching(closure_0);
            c4 = 2;
            c5 = 1;
            const obj1 = { value: tmp3(), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_1 = closure_2;
          closure_129_2.markFailed(closure_129_0);
          throw closure_128_1;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_128_0 = value;
          closure_129_2.markCompleted(closure_129_0);
          c3 = 0;
          c5 = 3;
          obj = { value: closure_128_0, done: true };
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

export { FetchStatus };
export { RemoteFetchData };