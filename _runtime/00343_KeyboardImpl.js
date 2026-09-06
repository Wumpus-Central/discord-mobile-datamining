// === Module 343: KeyboardImpl ===

// Module 343 (KeyboardImpl)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const KeyboardImpl = importDefault;
class KeyboardImpl {
  constructor() {
    self = this;
    tmp = c2(this, KeyboardImpl);
    tmp2 = new closure_0(closure_1[2])(null);
    this._emitter = tmp2;
    addListenerResult = this.addListener("keyboardDidShow", (_currentlyShowing) => {
      self._currentlyShowing = _currentlyShowing;
    });
    addListenerResult1 = this.addListener("keyboardDidHide", (arg0) => {
      self._currentlyShowing = null;
    });
    return;
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
      KeyboardImpl(303)();
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
      ({ duration, easing } = arg0);
      let tmp = null != duration;
      if (tmp) {
        tmp = 0 !== duration;
      }
      if (tmp) {
        KeyboardImpl(342);
        let obj = { duration, update: null };
        obj = { duration, type: null };
        let str = null != easing;
        if (str) {
          str = tmp2(342).Types[easing];
        }
        if (!str) {
          str = "keyboard";
        }
        obj.type = str;
        obj.update = obj;
        obj.configureNext(obj);
        tmp2 = KeyboardImpl;
      }
    }
  }
];

export default new _createClassDefault(KeyboardImpl, items)();