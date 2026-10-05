// _runtime/metro/00343__.js
import _createClassDefault from "00042__createClass.js";
import _modDef209 from "00209__.js";
import dismissKeyboardDefault from "../00303_dismissKeyboard.js";
import _modDef342 from "00342__.js";
import _classCallCheck from "00041__classCallCheck.js";

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
  },
};
const items = [
  entry,
  {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const _emitter = this._emitter;
      _emitter.removeAllListeners(arg0);
    },
  },
  {
    key: "dismiss",
    value: function dismiss() {
      dismissKeyboardDefault();
    },
  },
  {
    key: "isVisible",
    value: function isVisible() {
      return this._currentlyShowing;
    },
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
    },
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
    },
  },
];
const tmp2 = new _createClassDefault(KeyboardImpl, items)();

export default tmp2;
