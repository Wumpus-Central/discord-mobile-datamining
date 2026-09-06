// _runtime/00456_AppStateImpl.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const AppStateImpl = importDefault;
class AppStateImpl {
  constructor() {
    self = this;
    self = this;
    tmp = c2(this, AppStateImpl);
    this.currentState = null;
    tmp2 = closure_0;
    tmp3 = closure_1;
    if (null == closure_0(closure_1[2])) {
      flag = false;
      self.isAvailable = false;
    } else {
      flag2 = true;
      self.isAvailable = true;
      tmp4 = new.target;
      tmp5 = new.target;
      tmp6 = null;
      obj = new tmp2(tmp3[3])(null);
      tmp7 = obj;
      closure_1 = obj;
      self._emitter = obj;
      tmp2Result = tmp2(tmp3[2]);
      self.currentState = tmp2Result.getConstants().initialAppState;
      flag3 = false;
      c0 = false;
      str = "appStateDidChange";
      addListenerResult = obj.addListener("appStateDidChange", (app_state) => {
        c0 = true;
        self.currentState = app_state.app_state;
      });
      tmp2Result1 = tmp2(tmp3[2]);
      currentAppState = tmp2Result1.getCurrentAppState((app_state) => {
        let tmp = c0;
        if (!c0) {
          tmp = self.currentState === app_state.app_state;
        }
        if (!tmp) {
          self.currentState = app_state.app_state;
          obj.emit("appStateDidChange", app_state);
        }
      }, tmp2(tmp3[4]));
    }
    return;
  }
}
const entry = {
  key: "addEventListener",
  value: function addEventListener(arg0, arg1) {
    closure_0 = arg0;
    const _emitter = this._emitter;
    if (null == _emitter) {
      const _Error2 = Error;
      const error = new Error("Cannot use AppState when `isAvailable` is false.");
      throw error;
    } else if ("change" === arg0) {
      closure_1 = arg1;
      return _emitter.addListener("appStateDidChange", (app_state) => {
        closure_1(app_state.app_state);
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
          closure_2();
        }
        if (tmp5) {
          closure_2();
        }
      });
    }
  },
};
const items = [entry];

export default new _createClassDefault(AppStateImpl, items)();
