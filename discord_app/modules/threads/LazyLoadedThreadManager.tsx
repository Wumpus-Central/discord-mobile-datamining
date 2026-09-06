// discord_app/modules/threads/LazyLoadedThreadManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

const require = fn;
function initialize() {
  if (!c12) {
    c12 = true;
    const subscription = DispatcherDefault.subscribe("CONNECTION_OPEN", () => {
      closure_11 = {};
      channelId = channelId.getChannelId();
      if (tmp2) {
        loadThread(channelId);
      }
    });
  }
}
function dispatchLoadedThread(nextResult, arg1) {
  const tmp = React4(nextResult);
  DispatcherDefault.dispatch({ type: "THREAD_CREATE", channel: tmp, messageId: undefined });
}
function loadThread(channelId) {
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
    if (!c12) {
      c12 = true;
      let obj = DispatcherDefault;
      const subscription = obj.subscribe("CONNECTION_OPEN", () => {
        closure_11 = {};
        channelId = channelId.getChannelId();
        if (tmp2) {
          loadThread(channelId);
        }
      });
    }
    if (GatewayConnectionStore.isConnected()) {
      if (null != dependencyMap[channelId]) {
        if ("LOADING" === tmp7.type) {
          let resolved = tmp7.promise;
        } else {
          resolved = Promise.resolve();
        }
        return resolved;
      } else {
        let tmp13Result = tmp13(4386);
        const _location = location;
        obj = { path: null, exact: true };
        const RouteParam = tmp13(4399).RouteParam;
        const RouteParam2 = tmp13(4399).RouteParam;
        obj.path = closure_9.CHANNEL(RouteParam.guildId(), RouteParam2.channelId(), ":messageId");
        importDefault = tmp13Result.matchPath(location.pathname, obj);
        const HTTP = tmp13(1272).HTTP;
        obj = { url: closure_8.CHANNEL(channelId), rejectWithError: null };
        tmp13Result = tmp13(1272);
        obj.rejectWithError = tmp13Result.rejectWithMigratedError();
        value = HTTP.get(obj);
        const guildIdResult = RouteParam.guildId();
        const catchPromise = value
          .then((body) => {
            body = body.body;
            closure_11[closure_0] = { type: "LOADED" };
            if (set.has(body.type)) {
              let messageId;
              if (closure_1 != null) {
                const params = closure_1.params;
                if (params != null) {
                  messageId = params.messageId;
                }
              }
              const obj = { type: "THREAD_CREATE", channel: React4(body), messageId };
              obj.dispatch(obj);
              const tmp4 = React4(body);
            }
          })
          .catch(() => {
            closure_11[id] = { type: "NOT_FOUND" };
            const obj = { id, guild_id: null, parent_id: "Array" };
            let guildId;
            if (closure_1 != null) {
              const params = closure_1.params;
              if (params != null) {
                guildId = params.guildId;
              }
            }
            obj.guild_id = guildId;
            obj.dispatch({ type: "CHANNEL_DELETE", channel: obj });
          });
        const obj1 = { type: "LOADING", promise: catchPromise };
        dependencyMap[channelId] = obj1;
        return catchPromise;
      }
    } else {
      return Promise.resolve();
    }
  }
}
const ChannelRecord = fn(1961);
({ createChannelRecordFromServer: closure_4, THREAD_CHANNEL_TYPES: hasOwnProperty } = ChannelRecord);
const Constants = fn(1074);
({ Endpoints: closure_8, Routes: closure_9 } = Constants);
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
const dependencyMap = {};
let c12 = false;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/LazyLoadedThreadManager.tsx");

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
    if (GatewayConnectionStore.isConnected()) {
      const items = [];
      const items1 = [];
      let iter = arr[Symbol.iterator]();
      let nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = nextResult;
        if (nextResult !== items1(7221).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          if (!isStaticChannelRoute(tmp9)) {
            if (null == ChannelStore.getChannel(tmp9)) {
              let tmp18 = dependencyMap[tmp9];
              let tmp19 = tmp18;
              if (null == tmp18) {
                arr = items1.push(tmp9);
              } else if ("LOADING" === tmp19.type) {
                arr = items.push(tmp19.promise);
              }
            }
          }
        }
        continue;
      }
      if (0 === items1.length) {
        return Promise.all(items).then(() => {});
      } else {
        const HTTP = items1(1272).HTTP;
        const request = { url: closure_8.THREADS_BULK, body: null, rejectWithError: null };
        let obj = { thread_ids: items1 };
        request.body = obj;
        request.rejectWithError = items1(1272).rejectWithMigratedError();
        const obj4 = items1(1272);
        const postResult = HTTP.post(request);
        const catchPromise = HTTP.post(request)
          .then((result) => {
            set = new Set();
            const iter = result.body.items[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let id = nextResult.id;
              let addResult = set.add(id);
              closure_11[id] = { type: "LOADED" };
              let tmp5 = dispatchLoadedThread(nextResult);
              continue;
            }
            for (const item10029 of items1) {
              let tmp6 = item10029;
              if (!set.has(item10029)) {
                closure_11[tmp6] = { type: "NOT_FOUND" };
              }
              continue;
            }
          })
          .catch(() => {
            for (const item10005 of items1) {
              delete tmp[tmp2];
              continue;
            }
          });
        for (const item10052 of items1) {
          obj = { type: "LOADING", promise: catchPromise };
          dependencyMap[item10052] = obj;
          continue;
        }
        let nextPromise1 = catchPromise;
        if (0 !== items.length) {
          const items2 = [];
          items2[HermesBuiltin.arraySpread(items, 0)] = catchPromise;
          nextPromise1 = Promise.all(items2).then(() => {});
          const allPromises1 = Promise.all(items2);
        }
        return nextPromise1;
      }
    } else {
      return Promise.resolve();
    }
  },
};
