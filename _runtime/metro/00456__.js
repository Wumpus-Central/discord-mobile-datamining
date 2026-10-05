// _runtime/metro/00456__.js
import _createClassDefault from "00042__createClass.js";
import _modDef209 from "00209__.js";
import AppStateDefault from "../00457_AppState.js";
import _modDef459 from "00459__.js";
import _classCallCheck from "00041__classCallCheck.js";

class AppStateImpl {
  constructor() {
    const self = this;
    let tmp = _classCallCheck(this, AppStateImpl);
    this.currentState = null;
    if (null == AppStateDefault) {
      self.isAvailable = false;
    } else {
      self.isAvailable = true;
      const self2 = this;
      const self3 = this;
      const obj = new _modDef209(null);
      self._emitter = obj;
      const tmp2Result = AppStateDefault;
      self.currentState = tmp2Result.getConstants().initialAppState;
      let c0 = false;
      obj.addListener("appStateDidChange", (app_state) => {
        c0 = true;
        self.currentState = app_state.app_state;
      });
      const tmp2Result2 = AppStateDefault;
      const currentAppState = tmp2Result2.getCurrentAppState((app_state) => {
        const tmp = c0 || self.currentState === app_state.app_state;
        if (!tmp) {
          self.currentState = app_state.app_state;
          obj.emit("appStateDidChange", app_state);
        }
      }, _modDef459);
    }
  }
}
const entry = {
  key: "addEventListener",
  value: function addEventListener(arg0, arg1) {
    let closure_0 = arg0;
    const _emitter = this._emitter;
    if (null == _emitter) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("Cannot use AppState when `isAvailable` is false.");
      throw error;
    } else if ("change" === arg0) {
      let closure_1 = arg1;
      return _emitter.addListener("appStateDidChange", (app_state) => {
        closure_1(app_state.app_state);
      });
    } else if ("memoryWarning" === arg0) {
      return _emitter.addListener("memoryWarning", arg1);
    } else {
      if ("blur" !== arg0) {
        if ("focus" !== arg0) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error1 = new Error("Trying to subscribe to unknown event: " + arg0);
          throw error1;
        }
      }
      let closure_2 = arg1;
      return _emitter.addListener("appStateFocusChange", (arg0) => {
        const tmp2 = "blur" !== closure_0 || arg0;
        if (!tmp2) {
          closure_2();
        }
        const tmp5 = "focus" === closure_0 && arg0;
        if (tmp5) {
          closure_2();
        }
      });
    }
  },
};
const items = [entry];
let tmp2 = new _createClassDefault(AppStateImpl, items)();

export default tmp2;
