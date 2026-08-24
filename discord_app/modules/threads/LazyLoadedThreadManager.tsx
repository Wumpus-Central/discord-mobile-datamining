// === Module 7315: initialize ===

// Module 7315 (initialize)
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "_handleConnectionOpen" /* 4499 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "handleConnectionOpen" /* 1980 */;
import ME from "ME" /* 676 */;
import { isStaticChannelRoute } from "set" /* 1398 */;

const require = arg1;
function initialize() {
  if (!c12) {
    c12 = true;
    const subscription = dispatcherDefault.subscribe("CONNECTION_OPEN", () => {
      closure_11 = {};
      channelId = channelId.getChannelId();
      if (tmp2) {
        callback(channelId);
      }
    });
    const obj = dispatcherDefault;
  }
}
function dispatchLoadedThread(arg0, arg1) {
  const tmp = callback(arg0);
  dispatcherDefault.dispatch({ type: "THREAD_CREATE", channel: tmp, messageId: undefined });
}
function loadThread(channelId) {
  const _require = channelId;
  if (null == channelId) {
    return Promise.resolve();
  } else if (channelId === _require(5394).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return Promise.resolve();
  } else if (isStaticChannelRoute(channelId)) {
    return Promise.resolve();
  } else if (null != store.getChannel(channelId)) {
    return Promise.resolve();
  } else {
    if (!c12) {
      c12 = true;
      let obj = dispatcherDefault;
      const subscription = obj.subscribe("CONNECTION_OPEN", () => {
        closure_11 = {};
        channelId = channelId.getChannelId();
        if (tmp2) {
          callback(channelId);
        }
      });
    }
    if (closure_3.isConnected()) {
      if (null != dependencyMap[channelId]) {
        if ("LOADING" === tmp7.type) {
          let resolved = tmp7.promise;
        } else {
          resolved = Promise.resolve();
        }
        return resolved;
      } else {
        let tmp13Result = tmp13(4206);
        const _location = location;
        obj = { path: null, exact: true };
        const RouteParam = tmp13(4219).RouteParam;
        const RouteParam2 = tmp13(4219).RouteParam;
        obj[0] = closure_9.CHANNEL(RouteParam.guildId(), RouteParam2.channelId(), ":messageId");
        importDefault = tmp13Result.matchPath(location.pathname, obj);
        const HTTP = tmp13(530).HTTP;
        obj = { url: null, rejectWithError: null };
        obj[0] = closure_8.CHANNEL(channelId);
        tmp13Result = tmp13(530);
        obj[1] = tmp13Result.rejectWithMigratedError();
        const value = HTTP.get(obj);
        const guildIdResult = RouteParam.guildId();
        const catchPromise = value.then((body) => {
          body = body.body;
          closure_1_11[closure_0] = { type: "LOADED" };
          if (closure_1_5.has(body.type)) {
            let messageId;
            if (lib != null) {
              const params = lib.params;
              if (params != null) {
                messageId = params.messageId;
              }
            }
            let obj = lib(closure_1_2[6]);
            obj = { type: "THREAD_CREATE", channel: null, messageId: null };
            obj[1] = closure_1_4(body);
            obj[2] = messageId;
            obj.dispatch(obj);
            const tmp4 = closure_1_4(body);
          }
        }).catch(() => {
          closure_1_11[closure_0] = { type: "NOT_FOUND" };
          let obj = lib(closure_1_2[6]);
          obj = { id: closure_0, guild_id: null, parent_id: "Array" };
          let guildId;
          if (lib != null) {
            const params = lib.params;
            if (params != null) {
              guildId = params.guildId;
            }
          }
          obj[1] = guildId;
          obj.dispatch({ type: "CHANNEL_DELETE", channel: obj });
        });
        obj1 = { type: "LOADING", promise: null };
        obj1[1] = catchPromise;
        dependencyMap[channelId] = obj1;
        return catchPromise;
      }
    } else {
      return Promise.resolve();
    }
  }
}
({ createChannelRecordFromServer: c4, THREAD_CHANNEL_TYPES: c5 } = createChannelRecord);
({ Endpoints: closure_8, Routes: c9 } = ME);
let closure_11 = {};
let c12 = false;
const result = require("set").fileFinishedImporting("modules/threads/LazyLoadedThreadManager.tsx");

export default {
  getLoadState(key10013) {
    let type;
    if (dependencyMap[key10013] != null) {
      type = tmp.type;
    }
    return type;
  },
  loadThread,
  loadThreadsBulk(arr) {
    initialize();
    if (closure_3.isConnected()) {
      const items = [];
      const items1 = [];
      let iter = arr[Symbol.iterator]();
      let nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = nextResult;
        let tmp10 = items1;
        let tmp11 = dependencyMap;
        if (nextResult !== items1(5394).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          let tmp12 = isStaticChannelRoute;
          let tmp13 = nextResult;
          if (!isStaticChannelRoute(tmp9)) {
            let tmp14 = store;
            let tmp15 = nextResult;
            if (null == store.getChannel(tmp9)) {
              let tmp16 = dependencyMap;
              let tmp17 = nextResult;
              let tmp18 = dependencyMap[tmp9];
              let tmp19 = tmp18;
              if (null == tmp18) {
                let tmp23 = nextResult;
                arr = items1.push(tmp9);
              } else {
                let tmp20 = tmp18;
                if ("LOADING" === tmp19.type) {
                  let tmp21 = tmp18;
                  arr = items.push(tmp19.promise);
                }
              }
            }
          }
        }
        continue;
      }
      if (0 === items1.length) {
        return Promise.all(items).then(() => {

        });
      } else {
        const HTTP = items1(530).HTTP;
        let obj = { url: null, body: null, rejectWithError: null };
        obj[0] = closure_8.THREADS_BULK;
        obj = { thread_ids: null };
        obj[0] = items1;
        obj[1] = obj;
        obj[2] = items1(530).rejectWithMigratedError();
        const obj4 = items1(530);
        const postResult = HTTP.post(obj);
        const catchPromise = HTTP.post(obj).then((arg0) => {
          const set = new Set();
          const iter = arg0.body.items[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let id = nextResult.id;
            let addResult = set.add(id);
            let tmp3 = closure_1_11;
            closure_1_11[id] = { type: "LOADED" };
            let tmp4 = closure_1_14;
            let tmp5 = closure_1_14(nextResult);
            continue;
          }
          for (const item10029 of items1) {
            let tmp6 = item10029;
            if (!set.has(item10029)) {
              let tmp7 = closure_1_11;
              let tmp8 = item10029;
              closure_1_11[tmp6] = { type: "NOT_FOUND" };
            }
            continue;
          }
        }).catch(() => {
          for (const item10005 of items1) {
            let tmp3 = closure_1_11;
            delete tmp[tmp2];
            continue;
          }
        });
        for (const item10052 of items1) {
          let tmp26 = dependencyMap;
          obj = { type: "LOADING", promise: null };
          obj[1] = catchPromise;
          dependencyMap[item10052] = obj;
          continue;
        }
        let nextPromise1 = catchPromise;
        if (0 !== items.length) {
          const items2 = [];
          items2[HermesBuiltin.arraySpread(items, 0)] = catchPromise;
          nextPromise1 = Promise.all(items2).then(() => {

          });
          const allPromises1 = Promise.all(items2);
        }
        return nextPromise1;
      }
    } else {
      return Promise.resolve();
    }
  }
};