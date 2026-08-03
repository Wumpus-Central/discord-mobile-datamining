// === Module 209: NativeEventEmitter ===

// Module 209 (NativeEventEmitter)
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

let NativeEventEmitter = importDefault;
class NativeEventEmitter {
  constructor(arg0) {
    tmp = outer1_2(this, NativeEventEmitter);
    tmp2 = global && typeof global.addListener === "fileFinishedImporting";
    tmp3 = global && typeof global.removeListeners === "fileFinishedImporting";
    if (global) {
      if (tmp2) {
        if (tmp3) {
          this._nativeModule = global;
        }
        return;
      }
    }
    if (null != global) {
      if (!tmp2) {
        tmp4 = globalThis;
        _console = console;
        str = "`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.";
        warnResult = console.warn("`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.");
      }
      if (!tmp3) {
        tmp6 = globalThis;
        _console2 = console;
        str2 = "`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.";
        warnResult1 = console.warn("`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.");
      }
    }
    return;
  }
}
let items = [
  {
    key: "addListener",
    value: function addListener(arg0, arg1, arg2) {
      const self = this;
      let _nativeModule = this._nativeModule;
      if (_nativeModule != null) {
        _nativeModule.addListener(arg0);
      }
      let obj = NativeEventEmitter(self[2]);
      NativeEventEmitter = obj.addListener(arg0, arg1, arg2);
      obj = {
        remove() {
          if (null != c0) {
            const _nativeModule = self._nativeModule;
            if (_nativeModule != null) {
              _nativeModule.removeListeners(1);
            }
            c0.remove();
            c0 = null;
          }
        }
      };
      return obj;
    }
  },
  {
    key: "emit",
    value: function emit(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      NativeEventEmitter(92).emit.apply(items);
    }
  },
  {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const self = this;
      NativeEventEmitter(38)(null != arg0, "`NativeEventEmitter.removeAllListener()` requires a non-null argument.");
      const _nativeModule = this._nativeModule;
      if (_nativeModule != null) {
        _nativeModule.removeListeners(self.listenerCount(arg0));
      }
      NativeEventEmitter(92).removeAllListeners(arg0);
    }
  },
  {
    key: "listenerCount",
    value: function listenerCount(arg0) {
      return NativeEventEmitter(92).listenerCount(arg0);
    }
  }
];

export default _createClass(NativeEventEmitter, items);