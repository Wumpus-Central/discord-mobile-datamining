// _runtime/metro/00040__.js
import _createClassDefault from "00042__createClass.js";
import _mod46 from "00046__.js";
import _mod47 from "00047__.js";
import replacer from "../00048_replacer.js";
import _classCallCheck from "00041__classCallCheck.js";

const MessageQueue = global;
require = arg1;
class MessageQueue {
  constructor() {
    tmp = closure_3(this, MessageQueue);
    this._lazyCallableModules = {};
    items = [, , ,];
    items[0] = [];
    items[1] = [];
    items[2] = [];
    items[3] = 0;
    this._queue = items;
    map = new Map();
    this._successCallbacks = map;
    map1 = new Map();
    this._failureCallbacks = map1;
    this._callID = 0;
    this._lastFlush = 0;
    this._eventLoopStartTime = Date.now();
    this._reactNativeMicrotasksCallback = null;
    callFunctionReturnFlushedQueue = this.callFunctionReturnFlushedQueue;
    this.callFunctionReturnFlushedQueue = callFunctionReturnFlushedQueue.bind(this);
    flushedQueue = this.flushedQueue;
    this.flushedQueue = flushedQueue.bind(this);
    invokeCallbackAndReturnFlushedQueue = this.invokeCallbackAndReturnFlushedQueue;
    this.invokeCallbackAndReturnFlushedQueue = invokeCallbackAndReturnFlushedQueue.bind(this);
    return;
  }
}
const entry = {
  key: "callFunctionReturnFlushedQueue",
  value: function callFunctionReturnFlushedQueue(arg0, arg1, arg2) {
    const self = this;
    closure_1 = arg0;
    closure_2 = arg1;
    closure_0 = arg2;
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
      closure_1 = arg0;
      closure_0 = arg1;
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
    value: function registerCallableModule(ReactFabric, describeBuiltInComponentFrame) {
      closure_0 = describeBuiltInComponentFrame;
      this._lazyCallableModules[ReactFabric] = () => closure_0;
    },
  },
  {
    key: "registerLazyCallableModule",
    value: function registerLazyCallableModule(ReactFabric, fn) {
      c1 = fn;
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
    value: function callNativeSyncHook(arg0, index, substr, items, items2) {
      this.processCallbacks(arg0, index, substr, items, items2);
      return MessageQueue.nativeCallSyncHook(arg0, index, substr);
    },
  },
  {
    key: "processCallbacks",
    value: function processCallbacks(arg0, arg1, arr, arg3, arg4) {
      let tmp = arg3;
      if (!arg3) {
        tmp = arg4;
      }
      const self = this;
      if (tmp) {
        if (arg3) {
          arr = arr.push(self._callID << 1);
        }
        if (arg4) {
          arr = arr.push((self._callID << 1) | 1);
        }
        const result = self._successCallbacks.set(self._callID, arg4);
        const result1 = self._failureCallbacks.set(self._callID, arg3);
        const _failureCallbacks = self._failureCallbacks;
        const _successCallbacks = self._successCallbacks;
      }
      self._callID = self._callID + 1;
    },
  },
  {
    key: "enqueueNativeCall",
    value: function enqueueNativeCall(substr, error, substr, items, items2) {
      const self = this;
      this.processCallbacks(substr, error, substr, items, items2);
      const first = this._queue[0];
      first.push(substr);
      let arr1 = this._queue[1];
      arr1.push(error);
      arr1 = this._queue[2].push(substr);
      const timestamp = Date.now();
      let obj = MessageQueue;
      if (MessageQueue.nativeFlushQueueImmediate) {
        if (timestamp - self._lastFlush >= 5) {
          items = [[], [], [], self._callID];
          self._queue = items;
          self._lastFlush = timestamp;
          const result = obj.nativeFlushQueueImmediate(self._queue);
        }
      }
      _mod46.counterEvent("pending_js_to_native_queue", self._queue[0].length);
      if (self.__spy) {
        obj = { type: 1, module: "" + substr, method: error, args: substr };
        self.__spy(obj);
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
          _mod47.default.reportFatalError(tmp2);
          const _default = _mod47.default;
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
      _mod46.beginEvent("JSTimers.callReactNativeMicrotasks()");
      try {
        const self = this;
        if (null != this._reactNativeMicrotasksCallback) {
          const result = self._reactNativeMicrotasksCallback();
        }
        _mod46.endEvent();
        const tmp4Result = _mod46;
      } catch (tmp10) {
        tmp3(tmp[2]).endEvent();
        throw tmp10;
      }
    },
  },
  {
    key: "__callFunction",
    value: function __callFunction(module, method, args) {
      const self = this;
      this._lastFlush = Date.now();
      this._eventLoopStartTime = this._lastFlush;
      const beginEvent = _mod46.beginEvent;
      if (this.__spy) {
        const _HermesInternal2 = HermesInternal;
        beginEvent("" + module + "." + method + "(" + replacer.default(args) + ")");
        let tmp11 = require;
        const tmp4Result = replacer;
      } else {
        const _HermesInternal = HermesInternal;
        beginEvent("" + module + "." + method + "(...)");
        tmp11 = require;
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
          if (true === MessageQueue.RN$Bridgeless) {
            str9 = "true";
          }
          const _HermesInternal3 = HermesInternal;
          let tmp11Result = tmp11(38);
          tmp11Result(
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
          tmp11Result = tmp11(38);
          tmp11Result(
            false,
            "Failed to call into JavaScript module method " +
              module +
              "." +
              method +
              "(). Module exists, but the method is undefined.",
          );
        }
        callableModule[method].apply(callableModule, args);
        tmp11(46).endEvent();
        const tmp11Result1 = tmp11(46);
      } catch (tmp35) {
        tmp2(tmp[2]).endEvent();
        throw tmp35;
      }
    },
  },
  {
    key: "__invokeCallback",
    value: function __invokeCallback(arg0, arg1) {
      const self = this;
      this._lastFlush = Date.now();
      this._eventLoopStartTime = this._lastFlush;
      if (1 & arg0) {
        value = self._successCallbacks.get(tmp);
        const _successCallbacks = self._successCallbacks;
      } else {
        value = self._failureCallbacks.get(tmp);
        const _failureCallbacks = self._failureCallbacks;
      }
      if (value) {
        self._successCallbacks.delete(tmp);
        self._failureCallbacks.delete(tmp);
        const items = [];
        HermesBuiltin.arraySpread(arg1, 0);
        HermesBuiltin.apply(items, undefined);
      }
    },
  },
];
const entry1 = {
  key: "spy",
  value: function spy(arg0) {
    if (true === arg0) {
      let tmp = (type) => {
        let str = "JS->N";
        if (0 === type.type) {
          str = "N->JS";
        }
        let str2 = "";
        if (null != type.module) {
          str2 = `${type.module}.`;
        }
        const text = `${str} : ${"" + str2 + type.method}`;
        console.log(`${str} : ${"" + str2 + type.method}` + "(" + JSON.stringify(type.args) + ")");
      };
    } else {
      tmp = null;
      if (false !== arg0) {
        tmp = arg0;
      }
    }
    MessageQueue.prototype.__spy = tmp;
  },
};
const items1 = [entry1];

export default _createClassDefault(MessageQueue, items, items1);
