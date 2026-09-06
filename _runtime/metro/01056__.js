// _runtime/metro/01056__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

const ReactNativeProfiler = fn;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let closure_7 = {
  appStartReported: false,
  onRunApplicationHook() {
    closure_7.appStartReported = false;
  },
};
class ReactNativeProfiler {
  constructor(arg0) {
    self = this;
    tmp = c2(this, ReactNativeProfiler);
    obj = closure_0(closure_1[6]);
    obj2 = closure_0(closure_1[7]);
    result = obj._setRootComponentCreationTimestampMs(1000 * obj2.timestampInSeconds());
    items = [];
    items[0] = global;
    tmp3 = closure_4;
    obj3 = closure_4(ReactNativeProfiler);
    tmp4 = closure_3;
    if (metroRequire()) {
      tmp6 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj3, items, tmp3(self).constructor);
    } else {
      constructResult = obj3.apply(self, items);
    }
    tmp4Result = tmp4(self, constructResult);
    tmp4Result.name = "ReactNativeProfiler";
    return tmp4Result;
  }
}
_inherits(ReactNativeProfiler, fn(1000).Profiler);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    let fn = hasOwnProperty(_getPrototypeOf(ReactNativeProfiler.prototype), "componentDidMount", this);
    if (typeof fn === "function") {
      fn = (arg0) => fn.apply(self, arg0);
    }
    !fn([]);
    if (!closure_7.appStartReported) {
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
      let _captureAppStart = ReactNativeProfiler;
      const client = ReactNativeProfiler(1000).getClient();
      if (client) {
        const addIntegration = client.addIntegration;
        if (!tmp4) {
          const self = this;
          const call = addIntegration.call;
          const integration = _captureAppStart(1057).createIntegration(this.name);
          if (typeof call === "unknown") {
            addIntegration(integration);
          } else {
            call(client, integration);
          }
          const _captureAppStartResult = _captureAppStart(1057);
        }
        const appRegistryIntegration = _captureAppStart(1018).getAppRegistryIntegration(client);
        if (!appRegistryIntegration) {
          const debug = _captureAppStart(682).debug;
          debug.warn("AppRegistryIntegration.onRunApplication not found or invalid.");
          _captureAppStart = _captureAppStart(1017)._captureAppStart;
          _captureAppStart({ isManual: false });
          const _captureAppStartResult2 = _captureAppStart(1017);
        }
        appRegistryIntegration.onRunApplication(closure_7.onRunApplicationHook);
        const _captureAppStartResult1 = _captureAppStart(1018);
        tmp4 = null === addIntegration || undefined === addIntegration;
      }
    },
  },
];

export const ReactNativeProfiler = _createClass(ReactNativeProfiler, items);
