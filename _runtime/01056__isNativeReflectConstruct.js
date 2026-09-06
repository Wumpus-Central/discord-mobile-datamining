// === Module 1056: _isNativeReflectConstruct ===

// Module 1056 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import closure_5 from "_get" /* 96 */;
import importDefaultResult from "_createClass" /* 42 */;

const ReactNativeProfiler = arg1;
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
  } catch (err) {
  }
}
let closure_7 = {
  appStartReported: false,
  onRunApplicationHook() {
    closure_7.appStartReported = false;
  }
};
class ReactNativeProfiler {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, ReactNativeProfiler);
    obj = require("setSpanDurationAsMeasurementOnTransactionEvent");
    obj2 = require("registerSpanErrorInstrumentation");
    result = obj._setRootComponentCreationTimestampMs(1000 * obj2.timestampInSeconds());
    items = [];
    items[0] = global;
    tmp3 = closure_4;
    obj3 = closure_4(ReactNativeProfiler);
    tmp4 = closure_3;
    if (_isNativeReflectConstruct()) {
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
_inheritsDefault(ReactNativeProfiler, require("init").Profiler);
let items = [
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      let self = this;
      self = this;
      let fn = callback3(callback2(self.prototype), "componentDidMount", this);
      if (typeof fn === "function") {
        fn = (arg0) => fn.apply(self, arg0);
      }
      !fn([]);
      if (!closure_7.appStartReported) {
        self._reportAppStart();
        tmp2.appStartReported = true;
      }
    }
  },
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
    }
  }
];

export const ReactNativeProfiler = importDefaultResult(ReactNativeProfiler, items);