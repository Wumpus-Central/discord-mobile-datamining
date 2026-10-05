// === Module 578: flux/Dispatcher ===

// Module 578 (flux/Dispatcher)
import logger_Logger from "logger/Logger" /* 4 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import _modDef38 from "module_38" /* 38 */;
import EmitterDefault from "Emitter" /* 508 */;
import LastFewActionsAll from "LastFewActions" /* 509 */;
import LoggingUtils from "LoggingUtils" /* 579 */;
import profiling from "profiling" /* 583 */;
import size from "module_2" /* 2 */;

let _self, map, map1;

const f81504 = (item) => {
  items = [item, []];
  return items;
};
function setDisplayName(arg0, displayName) {
  arg0.displayName = displayName;
}
let set = new Set(["APP_STATE_UPDATE", "CLEAR_CACHES", "CONNECTION_CLOSED", "CONNECTION_OPEN", "CONNECTION_RESUMED", "LOGIN_SUCCESS", "LOGIN", "LOGOUT", "MESSAGE_SEND_FAILED", "PUSH_NOTIFICATION_CLICK", "RESET_SOCKET", "SESSION_START", "UPLOAD_FAIL", "WRITE_CACHES"]);
const logger = new logger_Logger.Logger("Flux");
const DispatchBand = { Early: 0, [0]: "Early", Database: 1, [1]: "Database", Default: 2, [2]: "Default" };
let items = [, , ];
({ Early: arr[0], Database: arr[1], Default: arr[2] } = DispatchBand);
class ActionHandlersGraph {
  constructor() {
    const merged = Object.assign({ _nodes: null, _orderedActionHandlers: null, _tokensByBand: null, _tokensByActionType: null, _callbackTokenPositions: null, _lastID: 1 });
    merged[0] = new Map();
    merged[1] = {};
    new Map();
    merged[2] = new Map(items.map(f81504));
    merged[3] = {};
    new Map(items.map(f81504));
    return merged;
  }
  getOrderedActionHandlers(type) {
    const self = this;
    let result = this._orderedActionHandlers[type.type];
    if (result == null) {
      result = self._computeOrderedActionHandlers(type.type);
    }
    return result;
  }
  register(name, obj, storeDidChange, band) {
    const self = this;
    const tmp = _modDef38;
    tmp(items.includes(band), "band must be a DispatchBand, got %s.", band);
    this._lastID = +this._lastID + 1;
    const text = `ID_${tmp3}`;
    const actionHandler = {};
    for (const key10026 in obj) {
      let _tokensByActionType = self._tokensByActionType;
      let arr2 = _tokensByActionType[key10026];
      if (arr2 == null) {
        items = [];
        _tokensByActionType[key10026] = items;
        arr2 = items;
      }
      let arr = arr2.push(text);
      let closure_0 = obj[key10026];
      function wrapper(arg0) {
        return closure_0(arg0);
      }
      let _HermesInternal = HermesInternal;
      wrapper.displayName = "" + name + "_" + key10026;
      actionHandler[key10026] = wrapper;
      continue;
    }
    const _nodes = self._nodes;
    const obj2 = { name, band, actionHandler, storeDidChange, dependencies: [] };
    const result = _nodes.set(text, obj2);
    const _tokensByBand = self._tokensByBand;
    const value = _tokensByBand.get(band);
    value.push(text);
    self._invalidateCaches();
    return text;
  }
  addDependencies(arg0, arg1) {
    const self = this;
    const _nodes = this._nodes;
    const value = _nodes.get(arg0);
    if (null == value) {
      const _Error4 = Error;
      const _HermesInternal4 = HermesInternal;
      const self8 = this;
      const self9 = this;
      const error = new Error("cannot add dependencies to " + arg0 + " because " + arg0 + " is not registered.");
      throw error;
    } else {
      const iter = arg1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp6 = nextResult;
        if (nextResult === arg0) {
          let tmp16 = globalThis;
          let _Error3 = Error;
          let _HermesInternal3 = HermesInternal;
          let str13 = " because a store cannot wait for itself.";
          let str14 = " \u2192 ";
          let str15 = "cannot add dependency ";
          let self6 = this;
          let self7 = this;
          let error1 = new Error("cannot add dependency " + value.name + " \u2192 " + value.name + " because a store cannot wait for itself.");
          throw error1;
        } else {
          let _nodes2 = self._nodes;
          let value2 = _nodes2.get(tmp6);
          if (null == value2) {
            let tmp10 = globalThis;
            let _Error2 = Error;
            let _HermesInternal2 = HermesInternal;
            let str9 = " is not registered.";
            let str10 = " because ";
            let str11 = " \u2192 ";
            let str12 = "cannot add dependency ";
            let self4 = this;
            let self5 = this;
            let error2 = new Error("cannot add dependency " + value.name + " \u2192 " + nextResult + " because " + nextResult + " is not registered.");
            throw error2;
          } else if (tmp36.band > value.band) {
            let tmp7 = globalThis;
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
            let self2 = this;
            let self3 = this;
            let error3 = new Error("cannot add dependency " + value.name + " \u2192 " + value2.name + " because " + value2.name + " (band " + value2.band + ") will never execute before " + value.name + " (band " + value.band + ").");
            throw error3;
          }
        }
      }
      const dependencies = value.dependencies;
      const push = dependencies.push;
      items = [];
      HermesBuiltin.arraySpread(items, arg1, 0);
      HermesBuiltin.apply(push, items, dependencies);
      self._invalidateCaches();
    }
  }
  _invalidateCaches() {
    this._callbackTokenPositions = null;
    this._orderedActionHandlers = {};
  }
  _computeOrderedActionHandlers(type) {
    let num;
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
        const value = _callbackTokenPositions.get(arg0);
        return value - _callbackTokenPositions.get(arg1);
      });
    }
    const items1 = [];
    const length = substr.length;
    for (let num = 0; num < length; num = num + 1) {
      let _nodes = self._nodes;
      let value = _nodes.get(substr[num]);
      let tmp5 = value.actionHandler[type];
      if (null != tmp5) {
        obj = { name: tmp3, actionHandler: tmp5, storeDidChange: tmp4 };
        let arr = items1.push(obj);
      }
    }
    self._orderedActionHandlers[type] = items1;
    return items1;
  }
  _computeCallbackTokenPositions() {
    let self = this;
    map = new Map();
    set = new Set();
    function visit(arg0) {
      if (!map.has(arg0)) {
        if (set.has(arg0)) {
          items = [];
          items[HermesBuiltin.arraySpread(items, set, 0)] = arg0;
          const mapped = items.map((item) => {
            _nodes = _nodes._nodes;
            return "" + _nodes.get(item).name + "(" + item + ")";
          });
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          self = this;
          const self2 = this;
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
      const value = _tokensByBand.get(item);
      return value.forEach(visit);
    });
    this._callbackTokenPositions = map;
    return map;
  }
}
const prototype = ActionHandlersGraph.prototype;
let result = size.fileFinishedImporting("../discord_common/js/packages/flux/Dispatcher.tsx");
class Dispatcher {
  constructor(actionLogger, _sentryUtils) {
    const merged = Object.assign({ _interceptors: null, _subscriptions: null, _waitQueue: null, _processingWaitQueue: false, _currentDispatchActionType: null, _actionHandlers: null, _sentryUtils: "Array", functionCache: "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}" });
    merged[0] = [];
    merged[1] = {};
    merged[2] = [];
    if (typeof ActionHandlersGraph === "function") {
      let actionLogger1 = actionLogger;
      const merged1 = Object.assign({ _nodes: null, _orderedActionHandlers: null, _tokensByBand: null, _tokensByActionType: null, _callbackTokenPositions: null, _lastID: 1 });
      const _Map = Map;
      const self = this;
      const self2 = this;
      merged1[0] = new Map();
      merged1[1] = {};
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map = new Map();
      merged1[2] = new Map(items.map(f81504));
      merged1[3] = {};
      merged[5] = merged1;
      merged[7] = {};
      merged._sentryUtils = _sentryUtils;
      map1 = new Map(items.map(f81504));
      if (null == actionLogger) {
        const self5 = this;
        const self6 = this;
        actionLogger1 = new LoggingUtils.ActionLogger();
      }
      merged.actionLogger = actionLogger1;
      actionLogger = merged.actionLogger;
      actionLogger.on("trace", (arg0, arg1, arg2) => {
        const isTracing = AppStartPerformanceDefault.isTracing && arg2 >= 10;
        if (isTracing) {
          const tmpResult = AppStartPerformanceDefault;
          tmpResult.mark("\u{1F9A5}", arg1, arg2);
        }
      });
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  isDispatching() {
    return null != this._currentDispatchActionType;
  }
  dispatch(arg0) {
    const self = this;
    let closure_0 = arg0;
    const promise = new Promise((arg0, arg1) => {
      let closure_1;
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
          (functionCache)[closure_0.type](closure_0);
          closure_0();
        } catch (tmp9) {
          closure_1(tmp9);
        }
      });
      _self.flushWaitQueue();
    });
    return promise;
  }
  dispatchForStoreTest(type, arg1) {
    let actionHandler;
    let storeDidChange;
    _modDef38(false, "dispatchForTest cannot be called in: production");
    const _actionHandlers = this._actionHandlers;
    const orderedActionHandlers = _actionHandlers.getOrderedActionHandlers(type);
    for (const item10019 of orderedActionHandlers) {
      ({ actionHandler, storeDidChange } = item10019);
      let tmp3 = item10019.name === arg1 && false !== actionHandler(type);
      if (tmp3) {
        let storeDidChangeResult = storeDidChange(type);
      }
      continue;
    }
  }
  flushWaitQueue() {
    let length;
    let obj3;
    const self = this;
    if (!this._processingWaitQueue) {
      try {
        self._processingWaitQueue = true;
        let tmp2 = importDefault;
        EmitterDefault.isDispatching = true;
        let num2 = 0;
        if (self._waitQueue.length > 0) {
          const sum = num2 + 1;
          num2 = sum;
          while (100 >= sum) {
            if (self._waitQueue.length > 0) {
              do {
                let _waitQueue = self._waitQueue;
                let tmp7 = _waitQueue.shift()();
                length = self._waitQueue.length;
              } while (length > 0);
            }
            tmp2 = importDefault;
            obj = EmitterDefault;
            let emitResult = obj.emit();
          }
          const serializer = LastFewActionsAll;
          const serializeResult = serializer.serialize();
          logger.error("LastFewActions", serializeResult);
          const _sentryUtils = self._sentryUtils;
          if (_sentryUtils != null) {
            const obj2 = { message: "Dispatcher: Dispatch loop detected", data: obj3 };
            obj3 = { lastFewActions: serializeResult };
            _sentryUtils.addBreadcrumb(obj2);
          }
          const _Error = Error;
          throw Error("Dispatch loop detected, aborting");
        }
        self._processingWaitQueue = false;
        tmp2(508).isDispatching = false;
      } catch (tmp23) {
        self._processingWaitQueue = false;
        EmitterDefault.isDispatching = false;
        throw tmp23;
      }
    }
  }
  _dispatchWithDevtools(type) {
    this._dispatchWithLogging(type);
  }
  _dispatchWithLogging(type) {
    const self = this;
    let closure_0 = type;
    const tmp2 = _modDef38;
    const tmp3 = null == this._currentDispatchActionType;
    tmp2(tmp3, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: " + type.type + " Already dispatching: " + this._currentDispatchActionType);
    let tmp6 = null != type.type;
    const tmp5 = _modDef38;
    if (tmp6) {
      tmp6 = "" !== type.type;
    }
    tmp5(tmp6, "Dispatch.dispatch(...) called without an action type");
    if (set.has(type.type)) {
      const _HermesInternal = HermesInternal;
      logger.log("Dispatching " + type.type);
    }
    obj = profiling;
    obj.mark(type.type);
    const obj2 = LastFewActionsAll;
    obj2.add(type.type);
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
      const tmp10Result = profiling;
      tmp10Result.measure("DISPATCH[" + type.type + "]", type.type);
    } catch (err) {
    }
  }
  _dispatch(type, fn) {
    let sum;
    function _loop() {
      const actionHandler = tmp.actionHandler;
      const storeDidChange = tmp.storeDidChange;
      if (false !== closure_1(orderedActionHandlers[c3].name, () => actionHandler(type))) {
        storeDidChange(actionHandler);
      }
    }
    const self = this;
    let closure_0 = type;
    let closure_1 = fn;
    const _interceptors = this._interceptors;
    for (const item10008 of _interceptors) {
      if (item10008(type)) {
        obj.return();
        let flag = false;
        return false;
      }
    }
    const _actionHandlers = self._actionHandlers;
    const orderedActionHandlers = _actionHandlers.getOrderedActionHandlers(type);
    let c3 = 0;
    let num = 0;
    if (0 < orderedActionHandlers.length) {
      do {
        let tmp2 = _loop();
        sum = num + 1;
        c3 = sum;
        num = sum;
      } while (sum < orderedActionHandlers.length);
    }
    let closure_4 = tmp4;
    if (null != self._subscriptions[type.type]) {
      fn("__subscriptions", () => {
        const item = closure_4.forEach((fn) => fn(type));
      });
    }
  }
  addInterceptor(handleAction) {
    const _interceptors = this._interceptors;
    _interceptors.push(handleAction);
  }
  wait(arg0) {
    const _waitQueue = this._waitQueue;
    _waitQueue.push(arg0);
    this.flushWaitQueue();
  }
  subscribe(arg0, arg1) {
    obj = this._subscriptions[arg0];
    if (null == obj) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const _subscriptions = this._subscriptions;
      set = new Set();
      _subscriptions[arg0] = set;
      obj = set;
    }
    obj.add(arg1);
  }
  unsubscribe(arg0, arg1) {
    if (null != this._subscriptions[arg0]) {
      this._subscriptions[arg0].delete(arg1);
      if (0 === this._subscriptions[arg0].size) {
        delete tmp._subscriptions[tmp2];
      }
    }
  }
  register(arg0, arg1, arg2, arg3) {
    let Default = arg3;
    const register = this._actionHandlers.register;
    if (arg3 == null) {
      Default = obj.Default;
    }
    return register(arg0, arg1, arg2, Default);
  }
  addDependencies(arg0, arg1) {
    const _actionHandlers = this._actionHandlers;
    _actionHandlers.addDependencies(arg0, arg1);
  }
}

export { DispatchBand };
export { Dispatcher };