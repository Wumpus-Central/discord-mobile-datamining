// discord_app/modules/message_previews/RemoteFetchData.tsx
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c4, c5, closure_2;

const FetchStatus = { Pending: 0, [0]: "Pending", Fetching: 1, [1]: "Fetching" };
const result = size.fileFinishedImporting("modules/message_previews/RemoteFetchData.tsx");
class RemoteFetchData {
  constructor() {
    const merged = Object.assign({ pending: null, fetching: null });
    merged[0] = new Set();
    new Set();
    merged[1] = new Set();
    new Set();
    return merged;
  }
  empty() {
    return 0 === this.pending.size && 0 === this.fetching.size;
  }
  status(arg0) {
    let Pending;
    const pending = this.pending;
    if (pending.has(arg0)) {
      Pending = obj.Pending;
    } else {
      const fetching = this.fetching;
      Pending = null;
      if (fetching.has(arg0)) {
        Pending = obj.Fetching;
      }
    }
    return Pending;
  }
  addWant(arg0) {
    const fetching = this.fetching;
    if (!fetching.has(arg0)) {
      const pending = this.pending;
      pending.add(arg0);
    }
  }
  removeWant(channel_id) {
    const pending = this.pending;
    pending.delete(channel_id);
    const fetching = this.fetching;
    fetching.delete(channel_id);
  }
  nextWants(arg0) {
    const items = [...this.pending];
    items.length = Math.min(arg0, items.length);
    return items;
  }
  markFetching(value) {
    const self = this;
    const iter = value[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let pending = self.pending;
      let deleteResult = pending.delete(nextResult);
      let fetching = self.fetching;
      let addResult = fetching.add(nextResult);
      continue;
    }
  }
  markCompleted(arg0) {
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
  }
  markFailed(arg0) {
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
  }
  try(nextWantsResult, arg1) {
    let closure_0 = nextWantsResult;
    let closure_1 = arg1;
    const self = this;
    return (async () => {
      let value;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
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
              value = undefined;
              c3 = 1;
              self.markFetching(value);
              c4 = 2;
              c5 = 1;
              const obj4 = { value: tmp(), done: false };
              return obj4;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_2.markFailed(closure_129_0);
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_129_2.markCompleted(closure_129_0);
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp22) {
          closure_2 = tmp22;
          if (0 === c3) {
            c5 = 3;
            throw tmp22;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
}
const prototype = RemoteFetchData.prototype;

export { FetchStatus };
export { RemoteFetchData };
