// _runtime/01189__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";

let UIManager;
let closure_6;
const RNSentryOnDrawReporterNoop = arg1;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let c5 = importAllResult;
({ UIManager, View: closure_6 } = get_ActivityIndicator);
const RNSentryOnDrawReporter = "RNSentryOnDrawReporter";
const tmp6 = UIManager.hasViewManagerConfig && UIManager.hasViewManagerConfig("RNSentryOnDrawReporter");
let c10 = tmp6;
class RNSentryOnDrawReporterNoop {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, RNSentryOnDrawReporterNoop);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(RNSentryOnDrawReporterNoop);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
require("_inherits")(RNSentryOnDrawReporterNoop, importAllResult.Component);
const items = [
  {
    key: "render",
    value: function render() {
      return <closure_6 {......Object.assign({}, this.props)} />;
    }
  }
];
let closure_11 = importDefaultResult(RNSentryOnDrawReporterNoop, items);

export const nativeComponentExists = tmp6;
export const getRNSentryOnDrawReporter = () => {
  if (closure_8) {
    return closure_8;
  } else {
    if (!obj.isExpoGo()) {
      if (closure_10) {
        const ReactNative = tmp(997).ReactNativeLibraries.ReactNative;
        let prop;
        if (null !== ReactNative) {
          if (undefined !== ReactNative) {
            prop = ReactNative.requireNativeComponent;
          }
        }
        if (prop) {
          const ReactNative2 = tmp(997).ReactNativeLibraries.ReactNative;
          let result = ReactNative2.requireNativeComponent(RNSentryOnDrawReporter);
        }
        closure_8 = result;
      }
    }
    result = closure_11;
    obj = RNSentryOnDrawReporterNoop(1002);
  }
};