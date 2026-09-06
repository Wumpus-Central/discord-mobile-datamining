// discord_app/modules/forums/ForumPostDataLoader.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import ForumPostMessagesStore from "ForumPostMessagesStore.tsx";
import ForumPostRecentMessageStore from "ForumPostRecentMessageStore.tsx";

const require = fn;
function loadForumPostData() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _loadForumPostData() {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = tmp3;
          c3 = 1;
          if (size.hasNext()) {
            c1 = 2;
            c4 = 1;
            const obj1 = { value: closure_128_14(closure_128_10.next()), done: false };
            return obj1;
          } else {
            c3 = 0;
            closure_128_11 = null;
            c4 = 3;
          }
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_11 = null;
        throw closure_2;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      }
      c3 = 0;
      closure_128_11 = null;
      c4 = 3;
      obj = { value, done: true };
      return obj;
    } catch (tmp19) {
      closure_2 = tmp19;
      if (tmp4 === c3) {
        c4 = tmp2;
        throw tmp19;
      } else {
        c1 = tmp;
      }
    }
  }
};
function loadForumPostDataForChannelId() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _loadForumPostDataForChannelId(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp4;
          closure_1 = tmp6;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          let threads;
          const nextBatch = size.getNextBatch(closure_0, 10);
          closure_129_1 = nextBatch;
          c4 = 2;
          if (0 === nextBatch.length) {
            c4 = 0;
            size.finishRequesting(closure_0, nextBatch);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            channel = channel.getChannel(closure_0);
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            closure_129_2 = guild_id;
            if (null == guild_id) {
              c4 = 0;
              size.finishRequesting(closure_0, nextBatch);
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const HTTP = require("HTTPUtils").HTTP;
              const request = { url: Endpoints.FORUM_POSTS(closure_0), body: null, rejectWithError: true };
              const obj1 = { thread_ids: nextBatch };
              request.body = obj1;
              c5 = 3;
              c6 = 1;
              const obj2 = { value: HTTP.post(request), done: false };
              return obj2;
            }
          }
        }
      } else if (1 === tmp9) {
        c4 = 0;
        closure_130_10.finishRequesting(closure_129_0, closure_129_1);
        throw closure_3;
      } else {
        if (2 === tmp9) {
          c4 = 1;
          c4 = 0;
          closure_130_10.finishRequesting(closure_129_0, closure_129_1);
          c6 = 3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          threads = value.body.threads;
          obj = closure_130_1(closure_130_2[10]);
          const obj3 = { type: "LOAD_FORUM_POSTS", guildId: closure_129_2, threads };
          obj.dispatch(obj3);
          c4 = 1;
        }
        c4 = 0;
        closure_130_10.finishRequesting(closure_129_0, closure_129_1);
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      }
    } catch (tmp46) {
      closure_3 = tmp46;
      if (tmp5 === c4) {
        c6 = tmp3;
        throw tmp46;
      } else if (tmp2 === tmp48) {
        c5 = tmp2;
      } else {
        c5 = tmp;
      }
    }
  }
};
const computeThreadIdsSnapshot = fn(7305).computeThreadIdsSnapshot;
const Endpoints = fn(1074).Endpoints;
class DefaultDict {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj._set = {};
    obj._defaultValueFunc = global;
    return obj;
  }
}
const prototype = DefaultDict.prototype;
prototype["get"] = function get(key10009) {
  const self = this;
  const _set = this._set;
  if (!_set.hasOwnProperty(key10009)) {
    self._set[key10009] = self._defaultValueFunc();
  }
  return self._set[key10009];
};
prototype["delete"] = function delete(arg0) {
  delete tmp2[tmp];
};
prototype["hasNext"] = function hasNext() {
  return !_modDef12.isEmpty(this._set);
};
prototype["next"] = function next() {
  return SnowflakeUtilsDefault.keys(this._set)[0];
};
class RequestQueue {
  constructor() {
    if (typeof DefaultDict === "function") {
      obj = Object.create(new.target.prototype);
      fn = () => new Set();
      obj1 = Object.create(tmp.prototype);
      obj1._set = {};
      obj1._defaultValueFunc = fn;
      obj.requested = obj1;
      return obj;
    } else {
      str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype2 = RequestQueue.prototype;
prototype2["request"] = function request(arg0, arg1) {
  const requested = this.requested;
  value = requested.get(arg0);
  value.add(arg1);
};
prototype2["hasRequested"] = function hasRequested(id, id2) {
  const requested = this.requested;
  value = requested.get(id);
  return value.has(id2);
};
prototype2["finishRequesting"] = function finishRequesting(arg0, nextBatch) {
  const requested = this.requested;
  requested.get(arg0);
  const item = nextBatch.forEach((item) => set.delete(item));
  size.compact(arg0);
};
prototype2["getRequested"] = function getRequested(arg0) {
  const requested = this.requested;
  return requested.get(arg0);
};
prototype2["getNextBatch"] = function getNextBatch(arg0, arg1) {
  const requested = this.requested;
  return Array.from(requested.get(arg0)).slice(0, arg1);
};
prototype2["hasNext"] = function hasNext() {
  const requested = this.requested;
  return requested.hasNext();
};
prototype2["next"] = function next() {
  return this.requested.next();
};
prototype2["compact"] = function compact(arg0) {
  const requested = this.requested;
  if (0 === requested.get(arg0).size) {
    const requested2 = this.requested;
    requested2.delete(arg0);
  }
};
Object.create(RequestQueue.prototype);
let size = Object.create(DefaultDict.prototype);
size._set = {};
size._defaultValueFunc = () => new Set();
size.requested = size;
let c11 = null;
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/ForumPostDataLoader.tsx");

export const BATCH_SIZE = 10;
export const useFirstForumPostMessage = function useFirstForumPostMessage(stateFromStores, arg1) {
  _require = stateFromStores;
  let obj = arg1;
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
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ForumPostMessagesStore.getMessage(stateFromStores.id));
  ({ loaded, firstMessage } = stateFromStoresObject);
  const obj2 = require("initialize");
  const items1 = [ChannelStore];
  stateFromStores = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(stateFromStores.parent_id));
  let tmp3 = flag;
  if (flag) {
    tmp3 = null != stateFromStores;
  }
  if (tmp3) {
    let tmp5 = !loaded;
    if (!loaded) {
      tmp5 = null == firstMessage;
    }
    tmp3 = tmp5;
  }
  if (tmp3) {
    const id = stateFromStores.id;
    if (flag2) {
      const items2 = [id];
      closure_131_0 = stateFromStores;
      closure_131_1 = false;
      const item = items2.forEach((item) => {
        const message = ForumPostMessagesStore.getMessage(item);
        const loaded = message.loaded;
        let tmp3 = !loaded;
        if (!loaded) {
          tmp3 = null == tmp2;
        }
        if (tmp3) {
          size.request(id.id, item);
          c1 = true;
        }
      });
      let tmp17 = closure_131_1;
      if (closure_131_1) {
        tmp17 = null == timeout;
      }
      if (tmp17) {
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(loadForumPostData, 0);
      }
    } else {
      closure_129_0 = stateFromStores;
      closure_129_1 = id;
      if (!size.hasRequested(stateFromStores.id, id)) {
        const arr3 = computeThreadIdsSnapshot(stateFromStores.id);
        const findIndexResult = arr3.findIndex((item) => item === importDefault);
        const substr = arr3.slice(findIndexResult, findIndexResult + 5);
        const found = substr.filter((item) => !size.hasRequested(stateFromStores.id, item));
        closure_130_0 = stateFromStores;
        closure_130_1 = false;
        const item1 = found.forEach((item) => {
          const message = ForumPostMessagesStore.getMessage(item);
          const loaded = message.loaded;
          let tmp3 = !loaded;
          if (!loaded) {
            tmp3 = null == tmp2;
          }
          if (tmp3) {
            size.request(id.id, item);
            c1 = true;
          }
        });
        let tmp11 = closure_130_1;
        if (closure_130_1) {
          tmp11 = null == timeout;
        }
        if (tmp11) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(loadForumPostData, 0);
        }
      }
    }
  }
  obj = { loaded, firstMessage: null };
  let tmp22 = null;
  if (flag) {
    tmp22 = firstMessage;
  }
  obj.firstMessage = tmp22;
  return obj;
};
export const useMostRecentForumMessage = function useMostRecentForumMessage(arg0, arg1) {
  _require = arg1;
  let obj = require("initialize");
  const items = [ForumPostRecentMessageStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ForumPostRecentMessageStore.getMessageState(id.id));
  obj = { loaded: stateFromStoresObject.loaded, mostRecentMessage: stateFromStoresObject.message };
  return obj;
};
export const preloadForumThreads = function preloadForumThreads(channel) {
  const substr = computeThreadIdsSnapshot(channel.id).slice(0, 10);
  const id = channel;
  c1 = false;
  const item = substr.forEach((item) => {
    const message = ForumPostMessagesStore.getMessage(item);
    const loaded = message.loaded;
    let tmp3 = !loaded;
    if (!loaded) {
      tmp3 = null == tmp2;
    }
    if (tmp3) {
      size.request(id.id, item);
      c1 = true;
    }
  });
  let tmp2 = c1;
  if (c1) {
    tmp2 = null == timeout;
  }
  if (tmp2) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(loadForumPostData, 0);
  }
  const arr = computeThreadIdsSnapshot(channel.id);
};