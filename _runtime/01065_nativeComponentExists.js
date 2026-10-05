// _runtime/01065_nativeComponentExists.js
import ReactNativeLibraries from "00873_ReactNativeLibraries.js";
import _mod878 from "metro/00878__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";
import react_native from "00017_react-native.js";

let result;

let UIManager;
let metroRequire;
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
({ UIManager, View: metroRequire } = react_native);
const RNSentryOnDrawReporter = "RNSentryOnDrawReporter";
const tmp6 = UIManager.hasViewManagerConfig && UIManager.hasViewManagerConfig("RNSentryOnDrawReporter");
let closure_10 = tmp6;
class RNSentryOnDrawReporterNoop {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RNSentryOnDrawReporterNoop);
    const obj = _getPrototypeOf(RNSentryOnDrawReporterNoop);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(RNSentryOnDrawReporterNoop, react.Component);
const entry = {
  key: "render",
  value: function render() {
    return <metroRequire {...Object.assign({}, this.props)} />;
  },
};
const items = [entry];
let closure_11 = _createClass(RNSentryOnDrawReporterNoop, items);

export const nativeComponentExists = tmp6;
export const getRNSentryOnDrawReporter = () => {
  let tmp = result;
  if (!tmp) {
    const obj = _mod878;
    if (!obj.isExpoGo()) {
      if (closure_10) {
        const ReactNative = ReactNativeLibraries.ReactNativeLibraries.ReactNative;
        let prop;
        if (null !== ReactNative) {
          if (undefined !== ReactNative) {
            prop = ReactNative.requireNativeComponent;
          }
        }
        if (prop) {
          const ReactNative2 = ReactNativeLibraries.ReactNativeLibraries.ReactNative;
          result = ReactNative2.requireNativeComponent(RNSentryOnDrawReporter);
        }
        tmp = result;
      }
    }
    result = closure_11;
  }
  return tmp;
};
