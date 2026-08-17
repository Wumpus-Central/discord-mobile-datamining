// _runtime/00456_AppStateImpl.js
import _createClassDefault from "_createClass" /* 42 */;
import closure_2 from "_classCallCheck" /* 41 */;

const AppStateImpl = importDefault;
class AppStateImpl {
  constructor() {
    self = this;
    self = this;
    tmp = closure_2(this, c0);
    this.currentState = null;
    tmp2 = AppStateImpl;
    tmp3 = closure_1;
    if (null == require("AppState")) {
      flag = false;
      self.isAvailable = false;
    } else {
      flag2 = true;
      self.isAvailable = true;
      tmp4 = new.target;
      tmp5 = new.target;
      tmp6 = null;
      obj = new require("NativeEventEmitter")(null);
      tmp7 = obj;
      closure_1 = obj;
      self._emitter = obj;
      tmp2Result = require("AppState");
      self.currentState = tmp2Result.getConstants().initialAppState;
      flag3 = false;
      c0 = false;
      str = "appStateDidChange";
      addListenerResult = obj.addListener("appStateDidChange", (app_state) => {
        c0 = true;
        self.currentState = app_state.app_state;
      });
      tmp2Result1 = require("AppState");
      currentAppState = tmp2Result1.getCurrentAppState((app_state) => {
        let tmp = c0;
        if (!c0) {
          tmp = self.currentState === app_state.app_state;
        }
        if (!tmp) {
          self.currentState = app_state.app_state;
          obj.emit("appStateDidChange", app_state);
        }
      }, require("module_459"));
    }
    return;
  }
}
const items = [
  {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      closure_0 = arg0;
      const _emitter = this._emitter;
      if (null == _emitter) {
        const _Error2 = Error;
        error = new Error("Cannot use AppState when `isAvailable` is false.");
        throw error;
      } else if ("change" === arg0) {
        closure_1 = arg1;
        return _emitter.addListener("appStateDidChange", (app_state) => {
          callback(app_state.app_state);
        });
      } else if ("memoryWarning" === arg0) {
        return _emitter.addListener("memoryWarning", arg1);
      } else {
        if ("blur" !== arg0) {
          if ("focus" !== arg0) {
            const _Error = Error;
            const error1 = new Error("Trying to subscribe to unknown event: " + arg0);
            throw error1;
          }
        }
        closure_2 = arg1;
        return _emitter.addListener("appStateFocusChange", (arg0) => {
          let tmp2 = "blur" !== closure_0;
          if (!tmp2) {
            tmp2 = arg0;
          }
          if (!tmp2) {
            callback2();
          }
          if (tmp5) {
            callback2();
          }
        });
      }
    }
  }
];

export default new _createClassDefault(AppStateImpl, items)();