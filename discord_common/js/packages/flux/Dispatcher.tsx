// discord_common/js/packages/flux/Dispatcher.tsx
import logger_Logger from "../logger/Logger.tsx";
import AppStartPerformanceDefault from "../app-start-performance/AppStartPerformance.tsx";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import flux_EmitterDefault from "Emitter.tsx";
import LastFewActionsAll from "LastFewActions.tsx";
import LoggingUtils from "LoggingUtils.tsx";
import profiling from "../../shared/utils/profiling.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function setDisplayName(arg0, displayName) {
  arg0.displayName = displayName;
}
let set = new Set([
  "APP_STATE_UPDATE",
  "CLEAR_CACHES",
  "CONNECTION_CLOSED",
  "CONNECTION_OPEN",
  "CONNECTION_RESUMED",
  "LOGIN_SUCCESS",
  "LOGIN",
  "LOGOUT",
  "MESSAGE_SEND_FAILED",
  "PUSH_NOTIFICATION_CLICK",
  "RESET_SOCKET",
  "SESSION_START",
  "UPLOAD_FAIL",
  "WRITE_CACHES",
]);
const logger = new logger_Logger.Logger("Flux");
const DispatchBand = { Early: 0, [0]: "Early", Database: 1, [1]: "Database", Default: 2, [2]: "Default" };
let items = [, ,];
({ Early: arr[0], Database: arr[1], Default: arr[2] } = DispatchBand);
class ActionHandlersGraph {
  constructor() {
    merged = Object.assign({
      _nodes: null,
      _orderedActionHandlers: null,
      _tokensByBand: null,
      _tokensByActionType: null,
      _callbackTokenPositions: null,
      _lastID: 1,
    });
    map = new Map();
    merged[0] = map;
    merged[1] = {};
    map1 = new Map(
      closure_7.map((item) => {
        items = [item, []];
        return items;
      }),
    );
    merged[2] = map1;
    merged[3] = {};
    return merged;
  }
}
const prototype = ActionHandlersGraph.prototype;
prototype["getOrderedActionHandlers"] = function getOrderedActionHandlers(type) {
  const self = this;
  let result = this._orderedActionHandlers[type.type];
  if (result == null) {
    result = self._computeOrderedActionHandlers(type.type);
  }
  return result;
};
prototype["register"] = function register(name, obj, storeDidChange, band) {
  const self = this;
  _modDef38(items.includes(band), "band must be a DispatchBand, got %s.", band);
  this._lastID = +this._lastID + 1;
  const text = `ID_${tmp3}`;
  const actionHandler = {};
  for (const key10026 in arg1) {
    let _tokensByActionType = self._tokensByActionType;
    let arr2 = _tokensByActionType[key10026];
    if (arr2 == null) {
      items = [];
      _tokensByActionType[key10026] = items;
      arr2 = items;
    }
    let arr = arr2.push(text);
    closure_0 = arg1[key10026];
    function wrapper(arg0) {
      return closure_0(arg0);
    }
    let _HermesInternal = HermesInternal;
    wrapper.displayName = "" + arg0 + "_" + key10026;
    actionHandler[key10026] = wrapper;
    continue;
  }
  const _nodes = self._nodes;
  const result = _nodes.set(text, { name, band, actionHandler, storeDidChange, dependencies: [] });
  const _tokensByBand = self._tokensByBand;
  value = _tokensByBand.get(band);
  value.push(text);
  self._invalidateCaches();
  return text;
};
prototype["addDependencies"] = function addDependencies(arg0, arg1) {
  const self = this;
  const _nodes = this._nodes;
  value = _nodes.get(arg0);
  if (null == value) {
    const _Error4 = Error;
    const _HermesInternal4 = HermesInternal;
    const error = new Error("cannot add dependencies to " + arg0 + " because " + arg0 + " is not registered.");
    throw error;
  } else {
    const iter = arg1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (nextResult === arg0) {
        let tmp19 = globalThis;
        let _Error3 = Error;
        let _HermesInternal3 = HermesInternal;
        let str13 = " because a store cannot wait for itself.";
        let str14 = " \u2192 ";
        let str15 = "cannot add dependency ";
        let tmp20 = new.target;
        let tmp21 = new.target;
        let error1 = new Error(
          "cannot add dependency " + value.name + " \u2192 " + value.name + " because a store cannot wait for itself.",
        );
        throw error1;
      } else {
        let _nodes2 = self._nodes;
        value2 = _nodes2.get(tmp5);
        if (null == value2) {
          let tmp11 = globalThis;
          let _Error2 = Error;
          let _HermesInternal2 = HermesInternal;
          let str9 = " is not registered.";
          let str10 = " because ";
          let str11 = " \u2192 ";
          let str12 = "cannot add dependency ";
          let tmp15 = new.target;
          let tmp16 = new.target;
          let error2 = new Error(
            "cannot add dependency " +
              value.name +
              " \u2192 " +
              nextResult +
              " because " +
              nextResult +
              " is not registered.",
          );
          throw error2;
        } else if (tmp43.band > value.band) {
          let tmp6 = globalThis;
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          let str = ").";
          let str2 = " (band ";
          let str3 = ") will never execute before ";
          let str4 = " because ";
          let str5 = " \u2192 ";
          let str6 = "cannot add dependency ";
          let str7 = " (band ";
          let str8 = " (band ";
          let tmp7 = new.target;
          let tmp8 = new.target;
          let error3 = new Error(
            "cannot add dependency " +
              value.name +
              " \u2192 " +
              value2.name +
              " because " +
              value2.name +
              " (band " +
              value2.band +
              ") will never execute before " +
              value.name +
              " (band " +
              value.band +
              ").",
          );
          throw error3;
        }
      }
    }
    const dependencies = value.dependencies;
    const push = dependencies.push;
    items = [];
    HermesBuiltin.arraySpread(arg1, 0);
    HermesBuiltin.apply(items, dependencies);
    self._invalidateCaches();
  }
};
prototype["_invalidateCaches"] = function _invalidateCaches() {
  this._callbackTokenPositions = null;
  this._orderedActionHandlers = {};
};
prototype["_computeOrderedActionHandlers"] = function _computeOrderedActionHandlers(type) {
  const self = this;
  items = this._tokensByActionType[type];
  if (items == null) {
    items = [];
  }
  const substr = items.slice();
  if (substr.length > 1) {
    let _callbackTokenPositions = self._callbackTokenPositions;
    if (_callbackTokenPositions == null) {
      _callbackTokenPositions = self._computeCallbackTokenPositions();
    }
    const sorted = substr.sort((arg0, arg1) => {
      value = _callbackTokenPositions.get(arg0);
      return value - _callbackTokenPositions.get(arg1);
    });
  }
  const items1 = [];
  for (let num = 0; num < length; num = num + 1) {
    let _nodes = self._nodes;
    value = _nodes.get(substr[num]);
    let tmp5 = value.actionHandler[type];
    if (null != tmp5) {
      obj = { name: tmp3, actionHandler: tmp5, storeDidChange: tmp4 };
      let arr = items1.push(obj);
    }
  }
  self._orderedActionHandlers[type] = items1;
  return items1;
};
prototype["_computeCallbackTokenPositions"] = function _computeCallbackTokenPositions() {
  const self = this;
  const map = new Map();
  set = new Set();
  function visit(arg0) {
    if (!map.has(arg0)) {
      if (set.has(arg0)) {
        items = [];
        items[HermesBuiltin.arraySpread(set, 0)] = arg0;
        const mapped = items.map((item) => {
          _nodes = _nodes._nodes;
          return "" + _nodes.get(item).name + "(" + item + ")";
        });
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Dependency Cycle Found: " + mapped.join(" -> "));
        throw error;
      } else {
        set.add(arg0);
        let _nodes = self._nodes;
        const dependencies = _nodes.get(arg0).dependencies;
        const item = dependencies.forEach(visit);
        set.delete(arg0);
        const result = map.set(arg0, map.size);
      }
    }
  }
  let item = items.forEach((item) => {
    const _tokensByBand = self._tokensByBand;
    value = _tokensByBand.get(item);
    return value.forEach(visit);
  });
  this._callbackTokenPositions = map;
  return map;
};
let result = size.fileFinishedImporting("../discord_common/js/packages/flux/Dispatcher.tsx");
class Dispatcher {
  constructor(arg0, arg1) {
    merged = Object.assign({
      _interceptors: null,
      _subscriptions: null,
      _waitQueue: null,
      _processingWaitQueue: false,
      _currentDispatchActionType: null,
      _actionHandlers: null,
      _sentryUtils: "Array",
      functionCache: false,
    });
    merged[0] = [];
    merged[1] = {};
    merged[2] = [];
    if (typeof ActionHandlersGraph === "function") {
      actionLogger1 = global;
      tmp4 = require;
      merged1 = Object.assign({
        _nodes: null,
        _orderedActionHandlers: null,
        _tokensByBand: null,
        _tokensByActionType: null,
        _callbackTokenPositions: null,
        _lastID: 1,
      });
      tmp6 = globalThis;
      _Map = Map;
      tmp7 = new.target;
      tmp8 = new.target;
      map = new Map();
      tmp10 = map;
      merged1[0] = map;
      merged1[1] = {};
      _Map2 = Map;
      tmp11 = closure_7;
      tmp12 = new.target;
      tmp13 = new.target;
      map1 = new Map(
        closure_7.map((item) => {
          items = [item, []];
          return items;
        }),
      );
      tmp15 = map1;
      merged1[2] = map1;
      merged1[3] = {};
      merged[5] = merged1;
      merged[7] = {};
      merged._sentryUtils = require;
      tmp16 = null;
      if (null == global) {
        tmp17 = closure_0;
        tmp18 = closure_3;
        tmp19 = new.target;
        tmp20 = new.target;
        actionLogger1 = new closure_0(closure_3[1]).ActionLogger();
      }
      merged.actionLogger = actionLogger1;
      actionLogger = merged.actionLogger;
      str = "trace";
      onResult = actionLogger.on("trace", (arg0, arg1, arg2) => {
        let isTracing = AppStartPerformanceDefault.isTracing;
        if (isTracing) {
          isTracing = arg2 >= 10;
        }
        if (isTracing) {
          AppStartPerformanceDefault.mark("\u{1F9A5}", arg1, arg2);
          const tmpResult = AppStartPerformanceDefault;
        }
      });
      return merged;
    } else {
      str2 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype2 = Dispatcher.prototype;
prototype2["isDispatching"] = function isDispatching() {
  return null != this._currentDispatchActionType;
};
prototype2["dispatch"] = function dispatch(arg0) {
  const self = this;
  closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    _self = arg1;
    const _waitQueue = _self._waitQueue;
    _waitQueue.push(() => {
      try {
        if (null == self.functionCache[closure_0.type]) {
          self.functionCache[closure_0.type] = (type) => closure_1_1._dispatchWithDevtools(type);
          setDisplayName(self.functionCache[closure_0.type], "dispatch_" + closure_0.type);
        }
        const functionCache = self.functionCache;
        functionCache[closure_0.type](closure_0);
        closure_0();
      } catch (tmp9) {
        closure_1(tmp9);
      }
    });
    _self.flushWaitQueue();
  });
};
prototype2["dispatchForStoreTest"] = function dispatchForStoreTest(type, arg1) {
  _modDef38(false, "dispatchForTest cannot be called in: production");
  for (const item10019 of orderedActionHandlers) {
    ({ actionHandler, storeDidChange } = item10019);
    let tmp3 = item10019.name === arg1;
    if (tmp3) {
      tmp3 = false !== actionHandler(arg0);
    }
    if (tmp3) {
      let storeDidChangeResult = storeDidChange(arg0);
    }
    continue;
  }
  const _actionHandlers = this._actionHandlers;
  const orderedActionHandlers = this._actionHandlers.getOrderedActionHandlers(type);
};
prototype2["flushWaitQueue"] = function flushWaitQueue() {
  const self = this;
  if (!this._processingWaitQueue) {
    try {
      self._processingWaitQueue = true;
      let tmp4 = importDefault;
      flux_EmitterDefault.isDispatching = true;
      let num2 = 0;
      if (self._waitQueue.length > 0) {
        const sum = num2 + 1;
        num2 = sum;
        while (100 >= sum) {
          if (self._waitQueue.length > 0) {
            do {
              let _waitQueue = self._waitQueue;
              let tmp9 = _waitQueue.shift()();
              length = self._waitQueue.length;
            } while (length > 0);
          }
          tmp4 = importDefault;
          obj = flux_EmitterDefault;
          let emitResult = obj.emit();
        }
        const serializer = LastFewActionsAll;
        const serializeResult = serializer.serialize();
        logger.error("LastFewActions", serializeResult);
        const _sentryUtils = self._sentryUtils;
        if (_sentryUtils != null) {
          const obj2 = { message: "Dispatcher: Dispatch loop detected", data: null };
          const obj3 = { lastFewActions: serializeResult };
          obj2.data = obj3;
          _sentryUtils.addBreadcrumb(obj2);
        }
        const _Error = Error;
        throw Error("Dispatch loop detected, aborting");
      }
      self._processingWaitQueue = false;
      tmp4(508).isDispatching = false;
    } catch (tmp25) {
      tmp2._processingWaitQueue = false;
      flux_EmitterDefault.isDispatching = false;
      throw tmp25;
    }
  }
};
prototype2["_dispatchWithDevtools"] = function _dispatchWithDevtools(type) {
  this._dispatchWithLogging(type);
};
prototype2["_dispatchWithLogging"] = function _dispatchWithLogging(type) {
  const self = this;
  _modDef38(
    null == this._currentDispatchActionType,
    "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: " +
      type.type +
      " Already dispatching: " +
      this._currentDispatchActionType,
  );
  let tmp6 = null != type.type;
  const tmp3 = null == this._currentDispatchActionType;
  if (tmp6) {
    tmp6 = "" !== type.type;
  }
  _modDef38(tmp6, "Dispatch.dispatch(...) called without an action type");
  if (set.has(type.type)) {
    const _HermesInternal = HermesInternal;
    logger.log("Dispatching " + type.type);
  }
  profiling.mark(type.type);
  LastFewActionsAll.add(type.type);
  const actionLogger = this.actionLogger;
  const logResult1 = actionLogger.log(type, (fn) => {
    try {
      self._currentDispatchActionType = type.type;
      self._dispatch(type, fn);
      self._currentDispatchActionType = null;
    } catch (tmp8) {
      self._currentDispatchActionType = null;
      throw tmp8;
    }
  });
  if (logResult1.totalTime > 100) {
    const _HermesInternal2 = HermesInternal;
    logger.verbose("Slow dispatch on " + type.type + ": " + logResult1.totalTime + "ms");
  }
  try {
    const _HermesInternal3 = HermesInternal;
    profiling.measure("DISPATCH[" + type.type + "]", type.type);
    const tmp10Result = profiling;
  } catch (err) {}
};
prototype2["_dispatch"] = function _dispatch(type, fn) {
  let sum;
  const self = this;
  closure_0 = type;
  closure_1 = fn;
  for (const item10008 of tmp) {
    if (item10008(arg0)) {
      obj.return();
      let flag = false;
      return false;
    }
  }
  c3 = 0;
  const length = self._actionHandlers.getOrderedActionHandlers(type).length;
  let num = 0;
  if (0 < length) {
    do {
      let tmp3 = (function _loop() {
        if (false !== closure_1(orderedActionHandlers[c3].name, () => actionHandler(closure_0))) {
          obj.storeDidChange(actionHandler);
        }
      })();
      sum = num + 1;
      c3 = sum;
      num = sum;
    } while (sum < length);
  }
  closure_4 = tmp5;
  if (null != self._subscriptions[type.type]) {
    fn("__subscriptions", () => {
      const item = closure_4.forEach((fn) => fn(type));
    });
  }
  const _actionHandlers = self._actionHandlers;
  const orderedActionHandlers = self._actionHandlers.getOrderedActionHandlers(type);
};
prototype2["addInterceptor"] = function addInterceptor(handleAction) {
  const _interceptors = this._interceptors;
  _interceptors.push(handleAction);
};
prototype2["wait"] = function wait(arg0) {
  const _waitQueue = this._waitQueue;
  _waitQueue.push(arg0);
  this.flushWaitQueue();
};
prototype2["subscribe"] = function subscribe(arg0, arg1) {
  obj = this._subscriptions[arg0];
  if (null == obj) {
    const _Set = Set;
    set = new Set();
    this._subscriptions[arg0] = set;
    obj = set;
  }
  obj.add(arg1);
};
prototype2["unsubscribe"] = function unsubscribe(arg0, arg1) {
  if (null != this._subscriptions[arg0]) {
    obj.delete(arg1);
    if (0 === obj.size) {
      const _subscriptions = tmp3._subscriptions;
      delete tmp[tmp2];
    }
  }
};
prototype2["register"] = function register(arg0, arg1, arg2, arg3) {
  let Default = arg3;
  if (arg3 == null) {
    Default = obj.Default;
  }
  return this._actionHandlers.register(arg0, arg1, arg2, Default);
};
prototype2["addDependencies"] = function addDependencies(arg0, arg1) {
  this._actionHandlers.addDependencies(arg0, arg1);
};

export { DispatchBand };
export { Dispatcher };
