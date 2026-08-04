// _runtime/00343_KeyboardImpl.js
import _classCallCheck from "_classCallCheck";

const KeyboardImpl = importDefault;
class KeyboardImpl {
  constructor() {
    self = this;
    tmp = outer1_2(this, self);
    tmp2 = new require("NativeEventEmitter")(null);
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
const items = [
  {
    key: "addListener",
    value: function addListener(arg0, arg1, arg2) {
      const _emitter = this._emitter;
      return _emitter.addListener(arg0, arg1);
    }
  },
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
      let duration;
      let easing;
      ({ duration, easing } = arg0);
      let tmp = null != duration;
      if (tmp) {
        tmp = 0 !== duration;
      }
      if (tmp) {
        let obj = KeyboardImpl(342);
        obj = { duration: null, update: null };
        obj[0] = duration;
        obj = { duration: null, type: null };
        obj[0] = duration;
        let str = null != easing;
        if (str) {
          str = tmp2(342).Types[easing];
        }
        if (!str) {
          str = "keyboard";
        }
        obj[1] = str;
        obj[1] = obj;
        obj.configureNext(obj);
        tmp2 = KeyboardImpl;
      }
    }
  }
];

export default new require("_createClass")(KeyboardImpl, items)();