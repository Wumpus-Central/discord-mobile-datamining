// discord_app/modules/forums/ForumPostDataLoader.tsx
import ME from "ME";
import ensureGuildLoaded from "ensureGuildLoaded";
import { computeThreadIdsSnapshot } from "maybeRebuildState";
import handleLoadThreadsSuccess from "handleLoadThreadsSuccess";
import closure_7 from "handleLoadThreadsSuccess";
import { Endpoints } from "ME";
import set from "maybeRebuildState";
import { apply } from "../../../_runtime/00012_apply.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";

const require = arg1;
function loadForumPostData() {
  const self = this;
  const apply = _loadForumPostData.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadForumPostData() {
  const self = this;
  const tmp = callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp3;
            let c3 = 1;
            if (outer1_10.hasNext()) {
              c1 = 2;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback(closure_10.next());
              return obj1;
            } else {
              c3 = 0;
              let c11 = null;
              c4 = 3;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          c11 = null;
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        }
        c3 = 0;
        c11 = null;
        c4 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
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
  });
  const _loadForumPostData = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function loadForumPostDataForChannelId() {
  const self = this;
  const apply = _loadForumPostDataForChannelId.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadForumPostDataForChannelId() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let guild_id = tmp4;
              let nextBatch = tmp6;
              nextBatch = undefined;
              guild_id = undefined;
              let threads;
              nextBatch = outer1_10.getNextBatch(callback, 10);
              let channel = 2;
              if (0 === nextBatch.length) {
                channel = 0;
                outer1_10.finishRequesting(tmp55, nextBatch);
                c6 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } else {
                channel = channel.getChannel(tmp55);
                guild_id = undefined;
                if (channel != null) {
                  guild_id = channel.guild_id;
                }
                if (null == guild_id) {
                  channel = 0;
                  outer1_10.finishRequesting(tmp55, nextBatch);
                  c6 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else {
                  const HTTP = callback(outer1_2[9]).HTTP;
                  const obj1 = { url: null, body: null, rejectWithError: true };
                  obj1[0] = outer1_8.FORUM_POSTS(tmp55);
                  const obj2 = { thread_ids: null };
                  obj2[0] = nextBatch;
                  obj1[1] = obj2;
                  c5 = 3;
                  c6 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = HTTP.post(obj1);
                  return obj3;
                }
              }
            }
          } else if (1 === tmp9) {
            channel = 0;
            closure_10.finishRequesting(callback, nextBatch);
            throw threads;
          } else {
            if (2 === tmp9) {
              channel = 1;
              channel = 0;
              closure_10.finishRequesting(callback, nextBatch);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 !== 2) {
              threads = body.body.threads;
              obj = nextBatch(guild_id[10]);
              const obj4 = { type: "LOAD_FORUM_POSTS", guildId: null, threads: null };
              obj4[1] = guild_id;
              obj4[2] = threads;
              obj.dispatch(obj4);
              channel = 1;
            }
            channel = 0;
            closure_10.finishRequesting(callback, nextBatch);
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          }
        } catch (tmp46) {
          threads = tmp46;
          if (tmp5 === channel) {
            c6 = tmp3;
            throw tmp46;
          } else if (tmp2 === tmp48) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _loadForumPostDataForChannelId = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
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
  return !apply.isEmpty(this._set);
};
prototype["next"] = function next() {
  return DISCORD_EPOCH.keys(this._set)[0];
};
class RequestQueue {
  constructor() {
    tmp = DefaultDict;
    if (typeof DefaultDict !== "function") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    obj = Object.create(new.target.prototype);
    fn = () => new Set();
    obj1 = Object.create(tmp.prototype);
    obj1._set = {};
    obj1._defaultValueFunc = fn;
    obj.requested = obj1;
    return obj;
  }
}
const prototype2 = RequestQueue.prototype;
prototype2["request"] = function request(arg0, arg1) {
  const requested = this.requested;
  const value = requested.get(arg0);
  value.add(arg1);
};
prototype2["hasRequested"] = function hasRequested(id, id2) {
  const requested = this.requested;
  const value = requested.get(id);
  return value.has(id2);
};
prototype2["finishRequesting"] = function finishRequesting(closure_0, nextBatch) {
  const requested = this.requested;
  closure_0 = requested.get(closure_0);
  const item = nextBatch.forEach((arg0) => set.delete(arg0));
  obj.compact(closure_0);
};
prototype2["getRequested"] = function getRequested(arg0) {
  const requested = this.requested;
  return requested.get(arg0);
};
prototype2["getNextBatch"] = function getNextBatch(closure_0, arg1) {
  const requested = this.requested;
  return Array.from(requested.get(closure_0)).slice(0, arg1);
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
let set = Object.create(RequestQueue.prototype);
set = Object.create(DefaultDict.prototype);
set._set = {};
set._defaultValueFunc = () => new Set();
set.requested = set;
let c11 = null;
const result = set.fileFinishedImporting("modules/forums/ForumPostDataLoader.tsx");

export const BATCH_SIZE = 10;
export const useFirstForumPostMessage = function useFirstForumPostMessage(stateFromStores, arg1) {
  let firstMessage;
  let loaded;
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
  const items = [handleLoadThreadsSuccess];
  const stateFromStoresObject = stateFromStores(589).useStateFromStoresObject(items, () => outer1_6.getMessage(stateFromStores.id));
  ({ loaded, firstMessage } = stateFromStoresObject);
  const obj2 = stateFromStores(589);
  const items1 = [ensureGuildLoaded];
  stateFromStores = stateFromStores(589).useStateFromStores(items1, () => outer1_4.getChannel(stateFromStores.parent_id));
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
      let c1 = false;
      const item = items2.forEach((arg0) => {
        const message = outer1_6.getMessage(arg0);
        const loaded = message.loaded;
        let tmp3 = !loaded;
        if (!loaded) {
          tmp3 = null == tmp2;
        }
        if (tmp3) {
          outer1_10.request(id.id, arg0);
          let c1 = true;
        }
      });
      let tmp17 = c1;
      if (c1) {
        tmp17 = null == timeout;
      }
      if (tmp17) {
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(loadForumPostData, 0);
      }
    } else {
      c1 = id;
      if (!obj.hasRequested(stateFromStores.id, id)) {
        const arr3 = computeThreadIdsSnapshot(stateFromStores.id);
        const findIndexResult = arr3.findIndex((arg0) => arg0 === c1);
        const substr = arr3.slice(findIndexResult, findIndexResult + 5);
        const found = substr.filter((id2) => !outer1_10.hasRequested(stateFromStores.id, id2));
        c1 = false;
        const item1 = found.forEach((arg0) => {
          const message = outer1_6.getMessage(arg0);
          const loaded = message.loaded;
          let tmp3 = !loaded;
          if (!loaded) {
            tmp3 = null == tmp2;
          }
          if (tmp3) {
            outer1_10.request(id.id, arg0);
            let c1 = true;
          }
        });
        let tmp11 = c1;
        if (c1) {
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
  obj[1] = tmp22;
  return obj;
};
export const useMostRecentForumMessage = function useMostRecentForumMessage(arg0, arg1) {
  const _require = arg1;
  let obj = _initialize;
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => outer1_7.getMessageState(id.id));
  obj = { loaded: stateFromStoresObject.loaded, mostRecentMessage: stateFromStoresObject.message };
  return obj;
};
export const preloadForumThreads = function preloadForumThreads(channel) {
  const substr = computeThreadIdsSnapshot(channel.id).slice(0, 10);
  let closure_0 = channel;
  let c1 = false;
  const item = substr.forEach((arg0) => {
    const message = outer1_6.getMessage(arg0);
    const loaded = message.loaded;
    let tmp3 = !loaded;
    if (!loaded) {
      tmp3 = null == tmp2;
    }
    if (tmp3) {
      outer1_10.request(id.id, arg0);
      let c1 = true;
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
};