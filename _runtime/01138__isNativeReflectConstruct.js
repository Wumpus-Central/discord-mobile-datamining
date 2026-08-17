// _runtime/01138__isNativeReflectConstruct.js
import closure_2 from "metro/00032__slicedToArray.js";
import closure_3 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_4 from "metro/00093__possibleConstructorReturn.js";
import closure_5 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import noop from "00019_noop.js";

let Profiler = require;
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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const unknown = "unknown";
class Profiler {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, Profiler);
    items = [];
    items[0] = global;
    tmp2 = closure_5;
    obj = closure_5(Profiler);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    ({ name, disabled } = tmp3Result.props);
    if (undefined !== disabled) {
      if (disabled) {
        tmp3Result1 = tmp3(tmp3Result);
      }
      return tmp3Result1;
    }
    obj2 = require("feedbackAsyncIntegration");
    obj = { name: "<" + name + ">", onlyIfParent: true, op: require("module_1139").REACT_MOUNT_OP, attributes: { [closure_1_0(closure_1_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.react.profiler", "ui.component_name": name } };
    tmp3Result._mountSpan = obj2.startInactiveSpan(obj);
    tmp3Result1 = tmp3Result;
    return;
  }
}
_inherits(Profiler, noop.Component);
let items = [
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._mountSpan) {
        const _mountSpan = this._mountSpan;
        _mountSpan.end();
      }
    }
  },
  {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(updateProps) {
      let self = this;
      self = this;
      updateProps = updateProps.updateProps;
      let flag = updateProps.includeUpdates;
      if (flag === undefined) {
        flag = true;
      }
      let found;
      Profiler = undefined;
      if (flag) {
        if (self._mountSpan) {
          if (updateProps !== self.props.updateProps) {
            const _Object = Object;
            const keys = Object.keys(updateProps);
            found = keys.filter((arg0) => updateProps[arg0] !== self.props.updateProps[arg0]);
            if (found.length > 0) {
              Profiler = Profiler(updateProps[9]).timestampInSeconds();
              let obj = Profiler(updateProps[9]);
              self._updateSpan = Profiler(updateProps[9]).withActiveSpan(self._mountSpan, () => {
                let obj = callback(updateProps[7]);
                obj = { name: "<" + self.props.name + ">", onlyIfParent: true, op: callback(updateProps[8]).REACT_UPDATE_OP, startTime: callback, attributes: obj };
                obj = { [closure_1_0(closure_1_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.react.profiler", "ui.component_name": self.props.name, "ui.react.changed_props": found };
                return obj.startInactiveSpan(obj);
              });
              const obj2 = Profiler(updateProps[9]);
            }
          }
        }
      }
      return true;
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      const self = this;
      if (this._updateSpan) {
        const _updateSpan = self._updateSpan;
        _updateSpan.end();
        self._updateSpan = undefined;
      }
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      Profiler = Profiler(817).timestampInSeconds();
      ({ name: dependencyMap, includeRender } = this.props);
      if (self._mountSpan) {
        if (tmp3) {
          let tmpResult = tmp(817);
          const timestamp = tmpResult.spanToJSON(self._mountSpan).timestamp;
          tmpResult = tmp(817);
          tmpResult.withActiveSpan(self._mountSpan, () => {
            let obj = callback(closure_1_1[7]);
            obj = { onlyIfParent: true, name: "<" + closure_1 + ">", op: callback(closure_1_1[8]).REACT_RENDER_OP, startTime: timestamp, attributes: obj };
            obj = { [closure_1_0(closure_1_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.react.profiler", "ui.component_name": closure_1 };
            const startInactiveSpanResult = obj.startInactiveSpan(obj);
            if (startInactiveSpanResult) {
              startInactiveSpanResult.end(callback);
            }
          });
        }
      }
    }
  },
  {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }
];
const _moduleResult = _createClass(Profiler, items);
let c9 = _moduleResult;
let merged = Object.assign(_moduleResult, { defaultProps: { disabled: false, includeRender: true, includeUpdates: true } });

export const Profiler = _moduleResult;
export const UNKNOWN_COMPONENT = "unknown";
export const useProfiler = function useProfiler(arg0) {
  closure_0 = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { disabled: false, hasRenderSpan: true };
  }
  let callback;
  callback = callback(noop.useState(() => {
    let disabled;
    if (obj != null) {
      disabled = obj.disabled;
    }
    if (!disabled) {
      obj = callback(obj[7]);
      obj = { name: null, onlyIfParent: true, op: null, attributes: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "<" + callback + ">";
      obj[2] = callback(obj[8]).REACT_MOUNT_OP;
      obj = {};
      obj[callback(obj[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.react.profiler";
      obj["ui.component_name"] = callback;
      obj[3] = obj;
      return obj.startInactiveSpan(obj);
    }
  }), 1)[0];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      closure_2.end();
    }
    return () => {
      if (closure_2) {
        if (hasRenderSpan.hasRenderSpan) {
          obj = closure_1_0(closure_1_1[9]);
          const obj2 = closure_1_0(closure_1_1[9]);
          const timestampInSecondsResult = closure_1_0(closure_1_1[9]).timestampInSeconds();
          obj = { name: null, onlyIfParent: true, op: null, startTime: null, attributes: null };
          const _HermesInternal = HermesInternal;
          obj[0] = "<" + closure_0 + ">";
          obj[2] = closure_1_0(closure_1_1[8]).REACT_RENDER_OP;
          obj[3] = obj.spanToJSON(tmp).timestamp;
          obj = {};
          obj[closure_1_0(closure_1_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.react.profiler";
          obj["ui.component_name"] = closure_0;
          obj[4] = obj;
          const startInactiveSpanResult = closure_1_0(closure_1_1[7]).startInactiveSpan(obj);
          if (startInactiveSpanResult) {
            startInactiveSpanResult.end(timestampInSecondsResult);
          }
          const obj3 = closure_1_0(closure_1_1[7]);
        }
      }
    };
  }, []);
};
export const withProfiler = function withProfiler(displayName, name) {
  Profiler = displayName;
  dependencyMap = name;
  name = undefined;
  if (name != null) {
    name = name.name;
  }
  if (!name) {
    name = displayName.displayName;
  }
  if (!name) {
    name = displayName.name;
  }
  if (!name) {
    name = unknown;
  }
  class Wrapped {
    constructor(arg0) {
      obj = {};
      merged = Object.assign(closure_1);
      obj.name = closure_2;
      obj.updateProps = displayName;
      obj = {};
      merged1 = Object.assign(displayName);
      return closure_1_7.createElement(closure_1_9, obj, closure_1_7.createElement(closure_0, obj));
    }
  }
  Wrapped.displayName = "profiler(" + name + ")";
  Profiler(1140).hoistNonReactStatics(Wrapped, displayName);
  return Wrapped;
};