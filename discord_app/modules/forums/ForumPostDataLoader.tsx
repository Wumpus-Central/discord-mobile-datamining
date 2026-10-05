// === Module 6807: ForumPostDataLoader ===

// Module 6807 (ForumPostDataLoader)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import ForumActivePostStore from "ForumActivePostStore" /* 6808 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 6780 */;
import ForumPostRecentMessageStore from "ForumPostRecentMessageStore" /* 6811 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6, closure_3, set;

const _defaultValueFunc = () => {
  set = new Set();
  return set;
};
function loadForumPostData() {
  return obj(...arguments);
}
let obj = function _loadForumPostData() {
  obj = _asyncToGenerator(async () => {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            c3 = 1;
            if (!closure_2_10.hasNext()) {
              c3 = 0;
              c11 = null;
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          c11 = null;
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c11 = null;
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 2;
        c4 = 1;
        const obj4 = { value: closure_128_14(closure_128_10.next()), done: false };
        return obj4;
      } catch (tmp16) {
        closure_2 = tmp16;
        if (0 === c3) {
          c4 = 3;
          throw tmp16;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function loadForumPostDataForChannelId() {
  return obj(...arguments);
}
obj = function _loadForumPostDataForChannelId() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj4;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let guild_id;
        let threads;
        let nextBatch;
        let postResult;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            guild_id = undefined;
            threads = undefined;
            nextBatch = closure_2_10.getNextBatch(closure_0, 10);
            c4 = 2;
            if (0 === nextBatch.length) {
              c4 = 0;
              postResult = closure_2_10;
              closure_2_10.finishRequesting(closure_0, nextBatch);
              c6 = 3;
              return { value: "IconComponent", done: null };
            } else {
              channel = channel.getChannel(closure_0);
              guild_id = undefined;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              if (null == guild_id) {
                c4 = 0;
                postResult = closure_2_10;
                closure_2_10.finishRequesting(closure_0, nextBatch);
                c6 = 3;
                return { value: "IconComponent", done: null };
              } else {
                const HTTP = require("HTTPUtils").HTTP;
                const request = { url: Endpoints.FORUM_POSTS(closure_0), body: obj4, rejectWithError: true };
                const post = HTTP.post;
                obj4 = { thread_ids: nextBatch };
                postResult = post(request);
                c5 = 3;
                c6 = 1;
                const obj5 = { value: postResult, done: false };
                return obj5;
              }
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          postResult = closure_130_10.finishRequesting(closure_0, nextBatch);
          throw closure_3;
        } else {
          if (2 === c5) {
            c4 = 1;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            postResult = closure_0;
            closure_130_10.finishRequesting(closure_0, nextBatch);
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            threads = value.body.threads;
            const obj7 = { type: "LOAD_FORUM_POSTS", guildId: guild_id, threads };
            obj = closure_130_1(closure_130_2[12]);
            obj.dispatch(obj7);
            c4 = 1;
          }
          c4 = 0;
          postResult = closure_0;
          closure_130_10.finishRequesting(closure_0, nextBatch);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp37) {
        closure_3 = tmp37;
        if (0 === c4) {
          c6 = 3;
          throw tmp37;
        } else if (1 === tmp39) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const computeThreadIdsSnapshot = ForumActivePostStore.computeThreadIdsSnapshot;
const Endpoints = Constants.Endpoints;
class DefaultDict {
  constructor(_defaultValueFunc) {
    obj = Object.create(new.target.prototype);
    obj._set = {};
    obj._defaultValueFunc = _defaultValueFunc;
    return obj;
  }
  get(keys) {
    const self = this;
    const _set = this._set;
    if (!_set.hasOwnProperty(keys)) {
      self._set[keys] = self._defaultValueFunc();
    }
    return self._set[keys];
  }
  delete(arg0) {
    delete this._set[arg0];
  }
  hasNext() {
    obj = _modDef12;
    return !obj.isEmpty(this._set);
  }
  next() {
    obj = SnowflakeUtilsDefault;
    return obj.keys(this._set)[0];
  }
}
const prototype = DefaultDict.prototype;
class RequestQueue {
  constructor() {
    if (typeof DefaultDict === "function") {
      obj = Object.create(new.target.prototype);
      const fn = _defaultValueFunc;
      const obj2 = Object.create(tmp.prototype);
      obj2._set = {};
      obj2._defaultValueFunc = fn;
      obj.requested = obj2;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  request(arg0, arg1) {
    const requested = this.requested;
    const value = requested.get(arg0);
    value.add(arg1);
  }
  hasRequested(id, id2) {
    const requested = this.requested;
    const value = requested.get(id);
    return value.has(id2);
  }
  finishRequesting(arg0, nextBatch) {
    const requested = this.requested;
    let closure_0 = requested.get(arg0);
    const item = nextBatch.forEach((item) => set.delete(item));
    obj.compact(arg0);
  }
  getRequested(arg0) {
    const requested = this.requested;
    return requested.get(arg0);
  }
  getNextBatch(arg0, arg1) {
    const requested = this.requested;
    const arr = Array.from(requested.get(arg0));
    return arr.slice(0, arg1);
  }
  hasNext() {
    const requested = this.requested;
    return requested.hasNext();
  }
  next() {
    const iter = this.requested;
    return iter.next();
  }
  compact(arg0) {
    const requested = this.requested;
    if (0 === requested.get(arg0).size) {
      const requested2 = this.requested;
      requested2.delete(arg0);
    }
  }
}
const prototype2 = RequestQueue.prototype;
obj = Object.create(RequestQueue.prototype);
let obj2 = Object.create(DefaultDict.prototype);
obj2._set = {};
obj2._defaultValueFunc = _defaultValueFunc;
obj.requested = obj2;
let c11 = null;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  let allowArchived;
  let closure_11;
  let enabled;
  let first;
  let firstMessage;
  let loaded;
  let obj3;
  let timeout;
  let tmp10;
  let tmp8;
  _require = id;
  obj = arg1;
  const obj2 = require("react");
  const cResult = obj2.c(9);
  if (undefined === arg1) {
    obj = {};
  }
  ({ enabled, allowArchived } = obj);
  const tmp5 = undefined !== allowArchived && allowArchived;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ForumPostMessagesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function l() {
      return ForumPostMessagesStore.getMessage(id.id);
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
  ({ loaded, firstMessage } = stateFromStoresObject);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== id.parent_id) {
    class M {
      constructor() {
        return ChannelStore.getChannel(id.parent_id);
      }
    }
    cResult[4] = id.parent_id;
    cResult[5] = M;
  } else {
    class M {
      constructor() {
        return ChannelStore.getChannel(id.parent_id);
      }
    }
  }
  const tmpResult2 = require("get initialized");
  const stateFromStores = tmpResult2.useStateFromStores(tmp10, M);
  let tmp14 = tmp4;
  if (tmp14) {
    class M {
      constructor() {
        return ChannelStore.getChannel(id.parent_id);
      }
    }
    tmp14 = null != stateFromStores;
  }
  if (tmp14) {
    class M {
      constructor() {
        return ChannelStore.getChannel(id.parent_id);
      }
    }
    if (tmp15) {
      class M {
        constructor() {
          return ChannelStore.getChannel(id.parent_id);
        }
      }
    }
    tmp14 = tmp15;
  }
  if (tmp14) {
    let c1;
    class M {
      constructor() {
        return ChannelStore.getChannel(id.parent_id);
      }
    }
    if (tmp5) {
      class M {
        constructor() {
          return ChannelStore.getChannel(id.parent_id);
        }
      }
      arr6[0] = tmp16;
      c1 = false;
      const item = arr6.forEach((item) => {
        const message = ForumPostMessagesStore.getMessage(item);
        const tmp3 = !message.loaded && null == tmp2;
        if (tmp3) {
          obj.request(channel.id, item);
          c1 = true;
        }
      });
      let tmp24 = c1;
      if (tmp24) {
        class M {
          constructor() {
            return ChannelStore.getChannel(id.parent_id);
          }
        }
        tmp24 = null == timeout;
      }
      if (tmp24) {
        class M {
          constructor() {
            return ChannelStore.getChannel(id.parent_id);
          }
        }
        timeout = setTimeout(loadForumPostData, 0);
      }
    } else {
      class M {
        constructor() {
          return ChannelStore.getChannel(id.parent_id);
        }
      }
      let closure_1 = tmp16;
      if (!obj.hasRequested(stateFromStores.id, tmp16)) {
        class M {
          constructor() {
            return ChannelStore.getChannel(id.parent_id);
          }
        }
        const arr3 = computeThreadIdsSnapshot(stateFromStores.id);
        const findIndexResult = arr3.findIndex((item) => item === id);
        const substr = arr3.slice(findIndexResult, findIndexResult + 5);
        const found = substr.filter((item) => !obj.hasRequested(stateFromStores.id, item));
        c1 = false;
        const item1 = found.forEach((item) => {
          const message = ForumPostMessagesStore.getMessage(item);
          const tmp3 = !message.loaded && null == tmp2;
          if (tmp3) {
            obj.request(channel.id, item);
            c1 = true;
          }
        });
        let tmp20 = c1;
        if (tmp20) {
          class M {
            constructor() {
              return ChannelStore.getChannel(id.parent_id);
            }
          }
          tmp20 = null == timeout;
        }
        if (tmp20) {
          class M {
            constructor() {
              return ChannelStore.getChannel(id.parent_id);
            }
          }
          timeout = setTimeout(loadForumPostData, 0);
        }
      }
    }
  }
  if (undefined === enabled || enabled) {
    class M {
      constructor() {
        return ChannelStore.getChannel(id.parent_id);
      }
    }
  }
  if (cResult[6] === loaded) {
    class M {
      constructor() {
        return ChannelStore.getChannel(id.parent_id);
      }
    }
    return obj3;
  }
  obj3 = { loaded, firstMessage: null };
  cResult[6] = loaded;
  cResult[7] = null;
  cResult[8] = obj3;
}) : ((id) => {
  let closure_11;
  let firstMessage;
  let loaded;
  let timeout;
  let tmp22;
  _require = id;
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.enabled;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = obj.allowArchived;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const items = [ForumPostMessagesStore];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ForumPostMessagesStore.getMessage(id.id));
  ({ loaded, firstMessage } = stateFromStoresObject);
  const items1 = [ChannelStore];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items1, () => ChannelStore.getChannel(id.parent_id));
  let tmp3 = flag && null != stateFromStores;
  if (tmp3) {
    tmp3 = !loaded && null == firstMessage;
    const tmp5 = !loaded && null == firstMessage;
  }
  if (tmp3) {
    let c1;
    id = id.id;
    if (flag2) {
      const items2 = [id];
      c1 = false;
      const item = items2.forEach((item) => {
        const message = ForumPostMessagesStore.getMessage(item);
        const tmp3 = !message.loaded && null == tmp2;
        if (tmp3) {
          obj.request(channel.id, item);
          c1 = true;
        }
      });
      const tmp17 = c1 && null == timeout;
      if (tmp17) {
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(loadForumPostData, 0);
      }
    } else if (!obj.hasRequested(stateFromStores.id, id)) {
      const arr3 = computeThreadIdsSnapshot(stateFromStores.id);
      const findIndexResult = arr3.findIndex((item) => item === id);
      const substr = arr3.slice(findIndexResult, findIndexResult + 5);
      const found = substr.filter((item) => !obj.hasRequested(stateFromStores.id, item));
      c1 = false;
      const item1 = found.forEach((item) => {
        const message = ForumPostMessagesStore.getMessage(item);
        const tmp3 = !message.loaded && null == tmp2;
        if (tmp3) {
          obj.request(channel.id, item);
          c1 = true;
        }
      });
      const tmp11 = c1 && null == timeout;
      if (tmp11) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(loadForumPostData, 0);
      }
    }
  }
  const obj4 = { loaded, firstMessage: tmp22 };
  tmp22 = null;
  if (flag) {
    tmp22 = firstMessage;
  }
  return obj4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, id) => {
  let first;
  let loaded;
  let message;
  let tmp6;
  _require = id;
  obj = require("react");
  const cResult = obj.c(6);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ForumPostRecentMessageStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function o() {
      return ForumPostRecentMessageStore.getMessageState(id.id);
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6);
  ({ loaded, message } = stateFromStoresObject);
  if (cResult[3] === loaded) {
    let tmp8;
    if (cResult[4] === message) {
      tmp8 = cResult[5];
    }
    return tmp8;
  }
  const obj2 = { loaded, mostRecentMessage: message };
  cResult[3] = loaded;
  cResult[4] = message;
  cResult[5] = obj2;
  tmp8 = obj2;
}) : ((arg0, arg1) => {
  let id;
  _require = arg1;
  const items = [ForumPostRecentMessageStore];
  obj = require("get initialized");
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ForumPostRecentMessageStore.getMessageState(id.id));
  return { loaded: stateFromStoresObject.loaded, mostRecentMessage: stateFromStoresObject.message };
});
const result = size.fileFinishedImporting("modules/forums/ForumPostDataLoader.tsx");

export const BATCH_SIZE = 10;
export const useFirstForumPostMessage = tmp4;
export const useMostRecentForumMessage = tmp5;
export const preloadForumThreads = function preloadForumThreads(channel) {
  let closure_11;
  let timeout;
  const arr = computeThreadIdsSnapshot(channel.id);
  const substr = arr.slice(0, 10);
  let c1 = false;
  const item = substr.forEach((item) => {
    const message = ForumPostMessagesStore.getMessage(item);
    const tmp3 = !message.loaded && null == tmp2;
    if (tmp3) {
      obj.request(channel.id, item);
      c1 = true;
    }
  });
  let tmp2 = c1;
  if (tmp2) {
    let tmp3 = timeout;
    tmp2 = null == timeout;
  }
  if (tmp2) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(loadForumPostData, 0);
  }
};