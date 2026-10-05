// === Module 209: ? ===

// Module 209
import _modDef38 from "module_38" /* 38 */;
import _createClassDefault from "_createClass" /* 42 */;
import _modDef92 from "module_92" /* 92 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let _null;

class NativeEventEmitter {
  constructor(MediaPlayerManager) {
    _classCallCheck(this, NativeEventEmitter);
    if (MediaPlayerManager) {
      if (MediaPlayerManager && typeof MediaPlayerManager.addListener === "function") {
        if (MediaPlayerManager && typeof MediaPlayerManager.removeListeners === "function") {
          this._nativeModule = MediaPlayerManager;
        }
      }
    }
    if (null != MediaPlayerManager) {
      if (!(MediaPlayerManager && typeof MediaPlayerManager.addListener === "function")) {
        const _console = console;
        console.warn("`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.");
      }
      if (!(MediaPlayerManager && typeof MediaPlayerManager.removeListeners === "function")) {
        const _console2 = console;
        console.warn("`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.");
      }
    }
  }
}
const entry = {
  key: "addListener",
  value: function addListener(arg0, arg1, arg2) {
    const self = this;
    let _nativeModule = this._nativeModule;
    if (_nativeModule != null) {
      _nativeModule.addListener(arg0);
    }
    const obj = _modDef92;
    let c0 = obj.addListener(arg0, arg1, arg2);
    return {
      remove() {
        if (null != _null) {
          const _nativeModule = self._nativeModule;
          if (_nativeModule != null) {
            _nativeModule.removeListeners(1);
          }
          _null.remove();
          _null = null;
        }
      }
    };
  }
};
let items = [
  entry,
  {
    key: "emit",
    value: function emit(arg0) {
      const substr = [...arguments].slice();
      const items = [arg0, ...substr];
      const tmp2 = _modDef92;
      tmp2.emit.apply(items);
    }
  },
  {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const self = this;
      _modDef38(null != arg0, "`NativeEventEmitter.removeAllListener()` requires a non-null argument.");
      const _nativeModule = this._nativeModule;
      if (_nativeModule != null) {
        _nativeModule.removeListeners(self.listenerCount(arg0));
      }
      const tmpResult = _modDef92;
      tmpResult.removeAllListeners(arg0);
    }
  },
  {
    key: "listenerCount",
    value: function listenerCount(arg0) {
      const obj = _modDef92;
      return obj.listenerCount(arg0);
    }
  }
];

export default _createClassDefault(NativeEventEmitter, items);