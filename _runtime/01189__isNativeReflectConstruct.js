// _runtime/01189__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import importAllResult from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const RNSentryOnDrawReporterNoop = fn;
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
let c5 = importAllResult;
({ UIManager, View: closure_6 } = get_ActivityIndicator);
const RNSentryOnDrawReporter = "RNSentryOnDrawReporter";
const tmp6 = UIManager.hasViewManagerConfig && UIManager.hasViewManagerConfig("RNSentryOnDrawReporter");
let closure_10 = tmp6;
class RNSentryOnDrawReporterNoop {
  constructor() {
    self = this;
    tmp = closure_2(this, RNSentryOnDrawReporterNoop);
    tmp2 = closure_4;
    obj = closure_4(RNSentryOnDrawReporterNoop);
    tmp3 = closure_3;
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
_inheritsDefault(RNSentryOnDrawReporterNoop, importAllResult.Component);
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
  if (result) {
    return result;
  } else {
    if (!obj.isExpoGo()) {
      if (closure_10) {
        const ReactNative = RNSentryOnDrawReporterNoop(997).ReactNativeLibraries.ReactNative;
        let prop;
        if (null !== ReactNative) {
          if (undefined !== ReactNative) {
            prop = ReactNative.requireNativeComponent;
          }
        }
        if (prop) {
          const ReactNative2 = RNSentryOnDrawReporterNoop(997).ReactNativeLibraries.ReactNative;
          result = ReactNative2.requireNativeComponent(RNSentryOnDrawReporter);
        }
      }
    }
    result = closure_11;
    obj = RNSentryOnDrawReporterNoop(1002);
  }
};