// _runtime/metro/01054__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

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
get_ActivityIndicator = fn(17);
({ UIManager, View: metroRequire } = get_ActivityIndicator);
const RNSentryOnDrawReporter = "RNSentryOnDrawReporter";
const tmp6 = UIManager.hasViewManagerConfig && UIManager.hasViewManagerConfig("RNSentryOnDrawReporter");
let closure_10 = tmp6;
class RNSentryOnDrawReporterNoop {
  constructor() {
    self = this;
    tmp = c2(this, RNSentryOnDrawReporterNoop);
    tmp2 = closure_4;
    obj = closure_4(RNSentryOnDrawReporterNoop);
    tmp3 = closure_3;
    if (closure_7()) {
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
_inherits(RNSentryOnDrawReporterNoop, noop.Component);
const entry = {
  key: "render",
  value: function render() {
    return <timestampProducer {......Object.assign({}, this.props)} />;
  }
};
const items = [entry];
let closure_11 = _createClass(RNSentryOnDrawReporterNoop, items);

export const nativeComponentExists = tmp6;
export const getRNSentryOnDrawReporter = () => {
  if (result) {
    return result;
  } else {
    if (!obj.isExpoGo()) {
      if (closure_10) {
        const ReactNative = RNSentryOnDrawReporterNoop(862).ReactNativeLibraries.ReactNative;
        let prop;
        if (null !== ReactNative) {
          if (undefined !== ReactNative) {
            prop = ReactNative.requireNativeComponent;
          }
        }
        if (prop) {
          const ReactNative2 = RNSentryOnDrawReporterNoop(862).ReactNativeLibraries.ReactNative;
          result = ReactNative2.requireNativeComponent(RNSentryOnDrawReporter);
        }
      }
    }
    result = closure_11;
    obj = RNSentryOnDrawReporterNoop(867);
  }
};