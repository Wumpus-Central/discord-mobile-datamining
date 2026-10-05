// _runtime/metro/00040__.js
import _createClassDefault from "00042__createClass.js";
import _mod46 from "00046__.js";
import _mod47 from "00047__.js";
import stringifySafe from "../00048_stringifySafe.js";
import _classCallCheck from "00041__classCallCheck.js";

class MessageQueue {
  constructor() {
    _classCallCheck(this, MessageQueue);
    this._lazyCallableModules = {};
    const items = [[], [], [], 0];
    this._queue = items;
    this._successCallbacks = new Map();
    new Map();
    this._failureCallbacks = new Map();
    this._callID = 0;
    this._lastFlush = 0;
    new Map();
    this._eventLoopStartTime = Date.now();
    this._reactNativeMicrotasksCallback = null;
    const callFunctionReturnFlushedQueue = this.callFunctionReturnFlushedQueue;
    this.callFunctionReturnFlushedQueue = callFunctionReturnFlushedQueue.bind(this);
    const flushedQueue = this.flushedQueue;
    this.flushedQueue = flushedQueue.bind(this);
    const invokeCallbackAndReturnFlushedQueue = this.invokeCallbackAndReturnFlushedQueue;
    this.invokeCallbackAndReturnFlushedQueue = invokeCallbackAndReturnFlushedQueue.bind(this);
  }
}
const entry = {
  key: "callFunctionReturnFlushedQueue",
  value: function callFunctionReturnFlushedQueue(arg0, arg1, arg2) {
    const self = this;
    let closure_1 = arg0;
    let closure_2 = arg1;
    let closure_0 = arg2;
    this.__guard(() => {
      self.__callFunction(closure_1, closure_2, closure_0);
    });
    return this.flushedQueue();
  },
};
let items = [
  entry,
  {
    key: "invokeCallbackAndReturnFlushedQueue",
    value: function invokeCallbackAndReturnFlushedQueue(arg0, arg1) {
      const self = this;
      let closure_1 = arg0;
      let closure_0 = arg1;
      this.__guard(() => {
        self.__invokeCallback(closure_1, closure_0);
      });
      return this.flushedQueue();
    },
  },
  {
    key: "flushedQueue",
    value: function flushedQueue() {
      const self = this;
      this.__guard(() => {
        const result = self.__callReactNativeMicrotasks();
      });
      const _queue = this._queue;
      const items = [[], [], [], this._callID];
      this._queue = items;
      let tmp2 = null;
      if (_queue[0].length) {
        tmp2 = _queue;
      }
      return tmp2;
    },
  },
  {
    key: "getEventLoopRunningTime",
    value: function getEventLoopRunningTime() {
      return Date.now() - this._eventLoopStartTime;
    },
  },
  {
    key: "registerCallableModule",
    value: function registerCallableModule(ReactFabric, module_117) {
      let closure_0 = module_117;
      this._lazyCallableModules[ReactFabric] = () => module_117;
    },
  },
  {
    key: "registerLazyCallableModule",
    value: function registerLazyCallableModule(ReactFabric, fn) {
      let c1 = fn;
      this._lazyCallableModules[ReactFabric] = () => {
        if (c1) {
          closure_0 = tmp();
          c1 = null;
        }
        return closure_0;
      };
    },
  },
  {
    key: "getCallableModule",
    value: function getCallableModule(module) {
      let tmpResult = null;
      if (this._lazyCallableModules[module]) {
        tmpResult = tmp();
      }
      return tmpResult;
    },
  },
  {
    key: "callNativeSyncHook",
    value: function callNativeSyncHook(arg0, arg1, substr, items, items2) {
      this.processCallbacks(arg0, arg1, substr, items, items2);
      return global.nativeCallSyncHook(arg0, arg1, substr);
    },
  },
  {
    key: "processCallbacks",
    value: function processCallbacks(arg0, arg1, arr, arg3, arg4) {
      const self = this;
      const tmp = arg3 || arg4;
      if (tmp) {
        if (arg3) {
          arr = arr.push(self._callID << 1);
        }
        if (arg4) {
          arr.push((self._callID << 1) | 1);
        }
        const _successCallbacks = self._successCallbacks;
        const result = _successCallbacks.set(self._callID, arg4);
        const _failureCallbacks = self._failureCallbacks;
        const result1 = _failureCallbacks.set(self._callID, arg3);
      }
      self._callID = self._callID + 1;
    },
  },
  {
    key: "enqueueNativeCall",
    value: function enqueueNativeCall(substr, error, substr2, items, items2) {
      const self = this;
      this.processCallbacks(substr, error, substr, items, items2);
      const first = this._queue[0];
      first.push(substr);
      const arr2 = this._queue[1];
      arr2.push(error);
      const arr3 = this._queue[2];
      arr3.push(substr);
      const timestamp = Date.now();
      if (global.nativeFlushQueueImmediate) {
        if (timestamp - self._lastFlush >= 5) {
          items = [[], [], [], self._callID];
          self._queue = items;
          self._lastFlush = timestamp;
          const result = global.nativeFlushQueueImmediate(self._queue);
        }
      }
      const obj2 = _mod46;
      obj2.counterEvent("pending_js_to_native_queue", self._queue[0].length);
      if (self.__spy) {
        const obj3 = { type: 1, module: "" + substr, method: error, args: substr };
        self.__spy(obj3);
      }
    },
  },
  {
    key: "createDebugLookup",
    value: function createDebugLookup(arg0, arg1, arg2) {},
  },
  {
    key: "setReactNativeMicrotasksCallback",
    value: function setReactNativeMicrotasksCallback(callReactNativeMicrotasks) {
      this._reactNativeMicrotasksCallback = callReactNativeMicrotasks;
    },
  },
  {
    key: "__guard",
    value: function __guard(fn) {
      if (this.__shouldPauseOnThrow()) {
        fn();
      } else {
        try {
          fn();
        } catch (tmp2) {
          const _default = _mod47.default;
          _default.reportFatalError(tmp2);
        }
      }
    },
  },
  {
    key: "__shouldPauseOnThrow",
    value: function __shouldPauseOnThrow() {
      let tmp = typeof globalThis.DebuggerInternal !== "undefined";
      if (typeof globalThis.DebuggerInternal !== "undefined") {
        tmp = true === globalThis.DebuggerInternal.shouldPauseOnThrow;
      }
      return tmp;
    },
  },
  {
    key: "__callReactNativeMicrotasks",
    value: function __callReactNativeMicrotasks() {
      const obj = _mod46;
      obj.beginEvent("JSTimers.callReactNativeMicrotasks()");
      try {
        const self = this;
        if (null != this._reactNativeMicrotasksCallback) {
          const result = self._reactNativeMicrotasksCallback();
        }
        const tmpResult = _mod46;
        tmpResult.endEvent();
      } catch (tmp7) {
        const tmpResult2 = _mod46;
        tmpResult2.endEvent();
        throw tmp7;
      }
    },
  },
  {
    key: "__callFunction",
    value: function __callFunction(module, method, args) {
      let tmp8;
      const self = this;
      this._lastFlush = Date.now();
      this._eventLoopStartTime = this._lastFlush;
      const __spy = this.__spy;
      const beginEvent = _mod46.beginEvent;
      _mod46;
      if (__spy) {
        const _HermesInternal2 = HermesInternal;
        const tmpResult = stringifySafe;
        beginEvent("" + module + "." + method + "(" + tmpResult.default(args) + ")");
        tmp8 = require;
      } else {
        const _HermesInternal = HermesInternal;
        beginEvent("" + module + "." + method + "(...)");
        tmp8 = require;
      }
      try {
        if (self.__spy) {
          const obj = { type: 0, module, method, args };
          self.__spy(obj);
        }
        const callableModule = self.getCallableModule(module);
        if (!callableModule) {
          const _Object = Object;
          const keys = Object.keys(self._lazyCallableModules);
          const joined = keys.join(", ");
          let str9 = "false";
          if (true === global.RN$Bridgeless) {
            str9 = "true";
          }
          const _HermesInternal3 = HermesInternal;
          const tmp8Result = tmp8(38);
          tmp8Result(
            false,
            "Failed to call into JavaScript module method " +
              module +
              "." +
              method +
              "(). Module has not been registered as callable. Bridgeless Mode: " +
              str9 +
              ". Registered callable JavaScript modules (n = " +
              keys.length +
              "): " +
              joined +
              ".\n          A frequent cause of the error is that the application entry file path is incorrect. This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native.",
          );
        }
        if (!callableModule[method]) {
          const _HermesInternal4 = HermesInternal;
          const tmp8Result4 = tmp8(38);
          tmp8Result4(
            false,
            "Failed to call into JavaScript module method " +
              module +
              "." +
              method +
              "(). Module exists, but the method is undefined.",
          );
        }
        const obj3 = callableModule[method];
        obj3.apply(callableModule, args);
        const tmp8Result5 = tmp8(46);
        tmp8Result5.endEvent();
      } catch (tmp32) {
        const tmp8Result6 = tmp8(46);
        tmp8Result6.endEvent();
        throw tmp32;
      }
    },
  },
  {
    key: "__invokeCallback",
    value: function __invokeCallback(arg0, arg1) {
      let value;
      const self = this;
      this._lastFlush = Date.now();
      this._eventLoopStartTime = this._lastFlush;
      if (1 & arg0) {
        const _successCallbacks = self._successCallbacks;
        value = _successCallbacks.get(tmp2);
      } else {
        const _failureCallbacks = self._failureCallbacks;
        value = _failureCallbacks.get(tmp2);
      }
      if (value) {
        const _successCallbacks2 = self._successCallbacks;
        _successCallbacks2.delete(arg0 >>> 1);
        const _failureCallbacks2 = self._failureCallbacks;
        _failureCallbacks2.delete(arg0 >>> 1);
        const items = [];
        HermesBuiltin.arraySpread(items, arg1, 0);
        HermesBuiltin.apply(value, items, undefined);
      }
    },
  },
];
const entry1 = {
  key: "spy",
  value: function spy(arg0) {
    let tmp;
    const prototype = MessageQueue.prototype;
    if (true === arg0) {
      tmp = (type) => {
        let str = "JS->N";
        const _console = console;
        if (0 === type.type) {
          str = "N->JS";
        }
        let str2 = "";
        if (null != type.module) {
          str2 = `${type.module}.`;
        }
        const text = `${str} : ${"" + str2 + type.method}`;
        log(`${str} : ${"" + str2 + type.method}` + "(" + JSON.stringify(type.args) + ")");
      };
    } else {
      tmp = null;
      if (false !== arg0) {
        tmp = arg0;
      }
    }
    prototype.__spy = tmp;
  },
};
const items1 = [entry1];

export default _createClassDefault(MessageQueue, items, items1);
