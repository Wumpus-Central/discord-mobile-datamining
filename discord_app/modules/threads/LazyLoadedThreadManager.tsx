// === Module 6817: LazyLoadedThreadManager ===

// Module 6817 (LazyLoadedThreadManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, body, importDefault, set;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
const f93344 = () => {
  closure_11 = {};
  channelId = channelId.getChannelId();
  const tmp2 = null != channelId && null == channel.getChannel(channelId);
  if (tmp2) {
    loadThread(channelId);
  }
};
function initialize() {
  const tmp = c12;
  if (!tmp) {
    c12 = true;
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("CONNECTION_OPEN", f93344);
  }
}
function dispatchLoadedThread(nextResult, arg1) {
  const tmp = React3(nextResult);
  const obj = DispatcherDefault;
  obj.dispatch({ type: "THREAD_CREATE", channel: tmp, messageId: undefined });
}
function loadThread(channelId) {
  let CHANNEL;
  let RouteParam2;
  let channel;
  let closure_1;
  let guildIdResult;
  let id;
  let tmp13Result2;
  _require = channelId;
  if (null == channelId) {
    return Promise.resolve();
  } else if (channelId === require("FakePlaceholderPrivateChannel").FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return Promise.resolve();
  } else if (isStaticChannelRoute(channelId)) {
    return Promise.resolve();
  } else if (null != ChannelStore.getChannel(channelId)) {
    return Promise.resolve();
  } else {
    const tmp16 = c12;
    if (!tmp16) {
      c12 = true;
      let tmp2 = importDefault;
      let obj = DispatcherDefault;
      const subscription = obj.subscribe("CONNECTION_OPEN", f93344);
    }
    if (GatewayConnectionStore.isConnected()) {
      if (null != closure_11[channelId]) {
        let resolved;
        if ("LOADING" === closure_11[channelId].type) {
          resolved = tmp7.promise;
        } else {
          resolved = Promise.resolve();
        }
        return resolved;
      } else {
        const _location = location;
        let obj2 = { path: CHANNEL(guildIdResult, RouteParam2.channelId(), ":messageId"), exact: true };
        const matchPath = require("matchPathCompat").matchPath;
        CHANNEL = constants.CHANNEL;
        require("matchPathCompat");
        const RouteParam = tmp13(4717).RouteParam;
        guildIdResult = RouteParam.guildId();
        RouteParam2 = tmp13(4717).RouteParam;
        importDefault = matchPath(pathname, obj2);
        const HTTP = tmp13(1282).HTTP;
        const get = HTTP.get;
        const obj3 = { url: closure_8.CHANNEL(channelId), rejectWithError: tmp13Result2.rejectWithMigratedError() };
        tmp13Result2 = require("HTTPUtils");
        const value = get(obj3);
        const nextPromise = value.then((body) => {
          body = body.body;
          closure_11[id] = { type: "LOADED" };
          if (hasOwnProperty.has(body.type)) {
            let messageId;
            if (closure_1 != null) {
              const params = closure_1.params;
              if (params != null) {
                messageId = params.messageId;
              }
            }
            const obj2 = { type: "THREAD_CREATE", channel: React3(body), messageId };
            const obj = DispatcherDefault;
            obj.dispatch(obj2);
          }
        });
        const catchPromise = nextPromise.catch(() => {
          let guildId;
          closure_11[id] = { type: "NOT_FOUND" };
          const obj = { id, guild_id: guildId, parent_id: "r" };
          guildId = undefined;
          const dispatch = DispatcherDefault.dispatch;
          DispatcherDefault;
          if (closure_1 != null) {
            const params = closure_1.params;
            if (params != null) {
              guildId = params.guildId;
            }
          }
          dispatch({ type: "CHANNEL_DELETE", channel: obj });
        });
        const obj4 = { type: "LOADING", promise: catchPromise };
        closure_11[channelId] = obj4;
        return catchPromise;
      }
    } else {
      return Promise.resolve();
    }
  }
}
({ createChannelRecordFromServer: closure_4, THREAD_CHANNEL_TYPES: hasOwnProperty } = ChannelRecord);
({ Endpoints: metroImportAll, Routes: c9 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
let closure_11 = {};
let c12 = false;
let obj = {
  getLoadState(key10013) {
    let type;
    if (closure_11[key10013] != null) {
      type = tmp.type;
    }
    return type;
  },
  loadThread,
  loadThreadsBulk(arr) {
    let obj2;
    let obj4;
    initialize();
    if (GatewayConnectionStore.isConnected()) {
      const items = [];
      const items1 = [];
      let tmp5 = arr;
      let iter = arr[Symbol.iterator]();
      let nextResult = iter.next();
      while (iter !== undefined) {
        let tmp10 = nextResult;
        if (nextResult !== items1(6722).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          if (!isStaticChannelRoute(tmp10)) {
            if (null == ChannelStore.getChannel(tmp10)) {
              let tmp19 = closure_11[tmp10];
              let tmp20 = tmp19;
              if (null == tmp19) {
                arr = items1.push(tmp10);
              } else if ("LOADING" === tmp20.type) {
                let arr2 = items.push(tmp20.promise);
              }
            }
          }
        }
        continue;
      }
      if (0 === items1.length) {
        const allPromises = Promise.all(items);
        return allPromises.then(() => {

        });
      } else {
        const HTTP = items1(1282).HTTP;
        const request = { url: closure_8.THREADS_BULK, body: obj2, rejectWithError: obj4.rejectWithMigratedError() };
        const post = HTTP.post;
        obj2 = { thread_ids: items1 };
        obj4 = items1(1282);
        const postResult = post(request);
        const nextPromise = postResult.then((body) => {
          body = body.body;
          set = new Set();
          const iter = body.items[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let id = nextResult.id;
            let addResult = set.add(id);
            closure_11[id] = { type: "LOADED" };
            let tmp5 = dispatchLoadedThread(nextResult);
            continue;
          }
          for (const item10029 of items1) {
            if (!set.has(item10029)) {
              closure_11[item10029] = { type: "NOT_FOUND" };
            }
            continue;
          }
        });
        const catchPromise = nextPromise.catch(() => {
          for (const item10005 of items1) {
            delete closure_11[item10005];
            continue;
          }
        });
        for (const item10052 of items1) {
          let obj = { type: "LOADING", promise: catchPromise };
          closure_11[item10052] = obj;
          continue;
        }
        let nextPromise1 = catchPromise;
        if (0 !== items.length) {
          const items2 = [];
          items2[HermesBuiltin.arraySpread(items2, items, 0)] = catchPromise;
          const allPromises1 = Promise.all(items2);
          nextPromise1 = allPromises1.then(() => {

          });
        }
        return nextPromise1;
      }
    } else {
      return Promise.resolve();
    }
  }
};
const result = size.fileFinishedImporting("modules/threads/LazyLoadedThreadManager.tsx");

export default obj;