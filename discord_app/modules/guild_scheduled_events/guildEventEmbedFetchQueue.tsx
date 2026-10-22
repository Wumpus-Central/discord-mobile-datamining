// === Module 8863: guildEventEmbedFetchQueue ===

// Module 8863 (guildEventEmbedFetchQueue)
import size from "module_2" /* 2 */;

class GuildEventEmbedFetchQueueError extends Error {
}
function drain() {
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = undefined;
  }
  const timestamp = Date.now();
  let arr = closure_6;
  if (closure_6.length > 0) {
    arr = closure_6;
    if (closure_6[0] <= timestamp - obj2) {
      closure_6.shift();
      arr = closure_6;
      while (closure_6.length > 0) {
        arr = closure_6;
        if (closure_6[0] > timestamp - obj2) {
          break;
        }
      }
    }
  }
  if (c8 < c0) {
    if (arr.length < c1) {
      const arr6 = length.shift();
      if (null != arr6) {
        closure_6.push(timestamp);
        c8 = c8 + 1;
        try {
          let runResult = arr6.run();
          runResult.then(arr6.resolve, arr6.reject).finally(() => {
            closure_8 = closure_8 - 1;
            drain();
          });
          const nextPromise = runResult.then(arr6.resolve, arr6.reject);
        } catch (tmp12) {
          runResult = tmp.Promise.reject(tmp12);
          const _Promise = tmp.Promise;
        }
      }
    }
  }
  let tmp18 = length.length > 0;
  if (tmp18) {
    tmp18 = closure_6.length >= c1;
  }
  if (tmp18) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(drain, closure_6[0] + obj2 - timestamp);
  }
  (function notifyCapacity() {
    let diff = closure_1_3 - length.length;
    const iter = set[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (diff <= 0) {
        iter.return();
        break;
      } else {
        let deleteResult = set.delete(tmp4);
        diff = diff - 1;
        let tmp4Result = tmp4();
        continue;
      }
    }
  })();
}
let closure_5 = [];
let closure_6 = [];
new Set();
const obj = {
  schedule(run) {
    if (closure_5.length >= c3) {
      let rejectResult = Promise.reject(new c0("guild event embed fetch queue is full"));
    } else {
      rejectResult = new Promise((arg0, reject) => {
        run = arg0;
        closure_5.push({
          run,
          resolve(arg0) {
            return closure_0(arg0);
          },
          reject
        });
        drain();
      });
    }
    return rejectResult;
  },
  onCapacity(arg0) {
    closure_0 = arg0;
    set1.add(arg0);
    return () => set1.delete(closure_0);
  },
  reset() {
    if (null != c4) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c4);
    }
    c4 = undefined;
    set1.clear();
    const item = closure_5.splice(0).forEach((reject) => reject.reject(new closure_1_0("guild event embed fetch queue reset")));
    closure_6.splice(0);
    c8 = 0;
  }
};
let c0 = 4;
let c1 = 20;
let c3 = 64;
let c4;
drain = function drain() {
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = undefined;
  }
  const timestamp = Date.now();
  let arr = closure_6;
  if (closure_6.length > 0) {
    arr = closure_6;
    if (closure_6[0] <= timestamp - obj2) {
      closure_6.shift();
      arr = closure_6;
      while (closure_6.length > 0) {
        arr = closure_6;
        if (closure_6[0] > timestamp - obj2) {
          break;
        }
      }
    }
  }
  if (c8 < c0) {
    if (arr.length < c1) {
      const arr6 = length.shift();
      if (null != arr6) {
        closure_6.push(timestamp);
        c8 = c8 + 1;
        try {
          let runResult = arr6.run();
          runResult.then(arr6.resolve, arr6.reject).finally(() => {
            closure_8 = closure_8 - 1;
            drain();
          });
          const nextPromise = runResult.then(arr6.resolve, arr6.reject);
        } catch (tmp12) {
          runResult = tmp.Promise.reject(tmp12);
          const _Promise = tmp.Promise;
        }
      }
    }
  }
  let tmp18 = length.length > 0;
  if (tmp18) {
    tmp18 = closure_6.length >= c1;
  }
  if (tmp18) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(drain, closure_6[0] + obj2 - timestamp);
  }
  (function notifyCapacity() {
    let diff = closure_1_3 - length.length;
    const iter = set[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (diff <= 0) {
        iter.return();
        break;
      } else {
        let deleteResult = set.delete(tmp4);
        diff = diff - 1;
        let tmp4Result = tmp4();
        continue;
      }
    }
  })();
};
closure_5 = [];
closure_6 = [];
const set1 = new Set();
let c8 = 0;
const obj2 = {
  schedule(run) {
    if (closure_5.length >= c3) {
      let rejectResult = Promise.reject(new c0("guild event embed fetch queue is full"));
    } else {
      rejectResult = new Promise((arg0, reject) => {
        run = arg0;
        closure_5.push({
          run,
          resolve(arg0) {
            return closure_0(arg0);
          },
          reject
        });
        drain();
      });
    }
    return rejectResult;
  },
  onCapacity(arg0) {
    closure_0 = arg0;
    set1.add(arg0);
    return () => set1.delete(closure_0);
  },
  reset() {
    if (null != c4) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c4);
    }
    c4 = undefined;
    set1.clear();
    const item = closure_5.splice(0).forEach((reject) => reject.reject(new closure_1_0("guild event embed fetch queue reset")));
    closure_6.splice(0);
    c8 = 0;
  }
};
({ schedule, onCapacity } = obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventEmbedFetchQueue.tsx");

export const GUILD_EVENT_EMBED_MAX_ACTIVE = 4;
export const GUILD_EVENT_EMBED_MAX_WAITING = 64;
export const GUILD_EVENT_FETCH_MAX_STARTS = 5;
export const GUILD_EVENT_FETCH_WINDOW_MS = 5000;
export const GUILD_EVENT_EMBED_MAX_STARTS = 20;
export const GUILD_EVENT_EMBED_WINDOW_MS = 10000;
export { GuildEventEmbedFetchQueueError };
export const scheduleGuildEventFetch = schedule;
export const onGuildEventFetchCapacity = onCapacity;
export const scheduleGuildEventEmbedFetch = obj2.schedule;
export const resetGuildEventEmbedFetchQueueForTest = function resetGuildEventEmbedFetchQueueForTest() {
  navigation.reset();
  obj2.reset();
};