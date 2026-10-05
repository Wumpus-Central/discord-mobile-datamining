// === Module 343: ? ===

// Module 343
import _createClassDefault from "_createClass" /* 42 */;
import _modDef209 from "module_209" /* 209 */;
import dismissKeyboardDefault from "dismissKeyboard" /* 303 */;
import _modDef342 from "module_342" /* 342 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class KeyboardImpl {
  constructor() {
    const self = this;
    _classCallCheck(this, KeyboardImpl);
    this._emitter = new _modDef209(null);
    new _modDef209(null);
    this.addListener("keyboardDidShow", (_currentlyShowing) => {
      self._currentlyShowing = _currentlyShowing;
    });
    this.addListener("keyboardDidHide", (arg0) => {
      self._currentlyShowing = null;
    });
  }
}
const entry = {
  key: "addListener",
  value: function addListener(arg0, arg1, arg2) {
    const _emitter = this._emitter;
    return _emitter.addListener(arg0, arg1);
  }
};
const items = [
  entry,
  {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const _emitter = this._emitter;
      _emitter.removeAllListeners(arg0);
    }
  },
  {
    key: "dismiss",
    value: function dismiss() {
      dismissKeyboardDefault();
    }
  },
  {
    key: "isVisible",
    value: function isVisible() {
      return this._currentlyShowing;
    }
  },
  {
    key: "metrics",
    value: function metrics() {
      const _currentlyShowing = this._currentlyShowing;
      let endCoordinates;
      if (_currentlyShowing != null) {
        endCoordinates = _currentlyShowing.endCoordinates;
      }
      return endCoordinates;
    }
  },
  {
    key: "scheduleLayoutAnimation",
    value: function scheduleLayoutAnimation(arg0) {
      let duration;
      let easing;
      let obj2;
      let str;
      ({ duration, easing } = arg0);
      const tmp = null != duration && 0 !== duration;
      if (tmp) {
        const obj = { duration, update: obj2 };
        obj2 = { duration, type: str };
        str = null != easing;
        const configureNext = _modDef342.configureNext;
        _modDef342;
        if (str) {
          str = _modDef342.Types[easing];
        }
        if (!str) {
          str = "keyboard";
        }
        configureNext(obj);
      }
    }
  }
];
const tmp2 = new _createClassDefault(KeyboardImpl, items)();

export default tmp2;