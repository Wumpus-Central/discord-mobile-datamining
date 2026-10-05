// _runtime/01067_ReactNativeProfiler.js
import _mod693 from "metro/00693__.js";
import init from "01011_init.js";
import captureAppStart from "01028_captureAppStart.js";
import _mod1029 from "metro/01029__.js";
import _mod1068 from "metro/01068__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _get from "metro/00096__get.js";
import _inherits from "00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const onRunApplicationHook = {
  appStartReported: false,
  onRunApplicationHook() {
    onRunApplicationHook.appStartReported = false;
  },
};
class ReactNativeProfiler {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ReactNativeProfiler);
    const _setRootComponentCreationTimestampMs = captureAppStart._setRootComponentCreationTimestampMs;
    captureAppStart;
    const obj = _mod693;
    const result = _setRootComponentCreationTimestampMs(1000 * obj.timestampInSeconds());
    const items = [arg0];
    const obj2 = _getPrototypeOf(ReactNativeProfiler);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj2, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj2.apply(self, items);
    }
    const tmp5Result = c3(self, constructResult);
    tmp5Result.name = "ReactNativeProfiler";
    return tmp5Result;
  }
}
_inherits(ReactNativeProfiler, init.Profiler);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    let fn = _get(_getPrototypeOf(ReactNativeProfiler.prototype), "componentDidMount", this);
    if (typeof fn === "function") {
      fn = (arg0) => fn.apply(self, arg0);
    }
    !fn([]);
    if (!appStartReported.appStartReported) {
      self._reportAppStart();
      tmp2.appStartReported = true;
    }
  },
};
let items = [
  entry,
  {
    key: "_reportAppStart",
    value: function _reportAppStart() {
      const obj = init;
      const client = obj.getClient();
      if (client) {
        const addIntegration = client.addIntegration;
        const tmp5 = null === addIntegration || undefined === addIntegration;
        if (!tmp5) {
          const self = this;
          const call = addIntegration.call;
          const tmpResult = _mod1068;
          call(client, tmpResult.createIntegration(this.name));
        }
        const tmpResult3 = _mod1029;
        const appRegistryIntegration = tmpResult3.getAppRegistryIntegration(client);
        if (appRegistryIntegration) {
          if (typeof appRegistryIntegration.onRunApplication === "function") {
            appRegistryIntegration.onRunApplication(onRunApplicationHook.onRunApplicationHook);
          }
          const tmpResult4 = captureAppStart;
          tmpResult4._captureAppStart({ isManual: false });
        }
        const debug = _mod693.debug;
        debug.warn("AppRegistryIntegration.onRunApplication not found or invalid.");
      }
    },
  },
];
const ReactNativeProfiler_export = _createClass(ReactNativeProfiler, items);

export { ReactNativeProfiler_export as ReactNativeProfiler };
