// === Module 1014: Profiler ===

// Module 1014 (Profiler)
import _mod693 from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;
import REACT_MOUNT_OP from "REACT_MOUNT_OP" /* 1015 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, createElement, createElement2, dependencyMap, merged1, obj1;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
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
    let constructResult;
    let disabled;
    const self = this;
    _classCallCheck(this, Profiler);
    const items = [arg0];
    const obj = _getPrototypeOf(Profiler);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    ({ name, disabled } = tmp3Result.props);
    if (undefined !== disabled) {
      let tmp3Result2;
      if (disabled) {
        tmp3Result2 = _possibleConstructorReturn(tmp3Result);
      }
      return tmp3Result2;
    }
    const startInactiveSpan = feedbackAsyncIntegration.startInactiveSpan;
    const obj2 = { name: "<" + name + ">", onlyIfParent: true, op: REACT_MOUNT_OP.REACT_MOUNT_OP, attributes: { [closure_2_0(closure_2_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.react.profiler", "ui.component_name": name } };
    tmp3Result._mountSpan = startInactiveSpan(obj2);
    tmp3Result2 = tmp3Result;
  }
}
_inherits(Profiler, react.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    if (this._mountSpan) {
      const _mountSpan = this._mountSpan;
      _mountSpan.end();
    }
  }
};
let items = [
  entry,
  {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(updateProps) {
      let startTime;
      const self = this;
      updateProps = updateProps.updateProps;
      let flag = updateProps.includeUpdates;
      if (flag === undefined) {
        flag = true;
      }
      let found;
      _require = undefined;
      if (flag) {
        if (self._mountSpan) {
          if (updateProps !== self.props.updateProps) {
            const _Object = Object;
            const keys = Object.keys(updateProps);
            found = keys.filter((item) => updateProps[item] !== self.props.updateProps[item]);
            if (found.length > 0) {
              let tmp = _require;
              let obj = require("module_693");
              _require = obj.timestampInSeconds();
              const obj2 = require("module_693");
              self._updateSpan = obj2.withActiveSpan(self._mountSpan, () => {
                const tmp = feedbackAsyncIntegration;
                const startInactiveSpan = tmp.startInactiveSpan;
                const obj = { name: "<" + self.props.name + ">", onlyIfParent: true, op: REACT_MOUNT_OP.REACT_UPDATE_OP, startTime, attributes: { [closure_2_0(closure_2_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.react.profiler", "ui.component_name": self.props.name, "ui.react.changed_props": found } };
                ({ [closure_2_0(closure_2_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.react.profiler", "ui.component_name": self.props.name, "ui.react.changed_props": found });
                return startInactiveSpan(obj);
              });
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
      let closure_0;
      let includeRender;
      const self = this;
      let tmp = _require;
      let obj = require("module_693");
      _require = obj.timestampInSeconds();
      ({ name: dependencyMap, includeRender } = this.props);
      const tmp3 = undefined === includeRender || includeRender;
      if (self._mountSpan) {
        if (tmp3) {
          const tmpResult = tmp(693);
          const timestamp = tmpResult.spanToJSON(self._mountSpan).timestamp;
          const tmpResult2 = tmp(693);
          tmpResult2.withActiveSpan(self._mountSpan, () => {
            const tmp = feedbackAsyncIntegration;
            const startInactiveSpan = tmp.startInactiveSpan;
            const obj = { onlyIfParent: true, name: "<" + dependencyMap + ">", op: REACT_MOUNT_OP.REACT_RENDER_OP, startTime: timestamp, attributes: { [closure_2_0(closure_2_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.react.profiler", "ui.component_name": dependencyMap } };
            ({ [closure_2_0(closure_2_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.react.profiler", "ui.component_name": dependencyMap });
            const startInactiveSpanResult = startInactiveSpan(obj);
            if (startInactiveSpanResult) {
              startInactiveSpanResult.end(closure_0);
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
const Profiler_export = _moduleResult;

export { Profiler_export as Profiler };
export const UNKNOWN_COMPONENT = "unknown";
export const useProfiler = function useProfiler(arg0) {
  let closure_2;
  let closure_0 = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { disabled: false, hasRenderSpan: true };
  }
  name = undefined;
  name = name(react.useState(() => {
    let obj2;
    let disabled;
    if (obj != null) {
      disabled = obj.disabled;
    }
    if (!disabled) {
      obj = { name: "<" + closure_0 + ">", onlyIfParent: true, op: REACT_MOUNT_OP.REACT_MOUNT_OP, attributes: obj2 };
      const _HermesInternal = HermesInternal;
      const startInactiveSpan = feedbackAsyncIntegration.startInactiveSpan;
      feedbackAsyncIntegration;
      obj2 = { "ui.component_name": closure_0 };
      obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.react.profiler";
      return startInactiveSpan(obj);
    }
  }), 1)[0];
  const effect = react.useEffect(() => {
    let hasRenderSpan;
    if (closure_2) {
      closure_2.end();
    }
    return () => {
      let obj4;
      if (closure_1_2) {
        if (hasRenderSpan.hasRenderSpan) {
          obj = closure_0(obj[9]);
          const timestamp = obj.spanToJSON(tmp).timestamp;
          const obj2 = closure_0(obj[9]);
          const timestampInSecondsResult = obj2.timestampInSeconds();
          const _HermesInternal = HermesInternal;
          const obj3 = { name: "<" + closure_1_0 + ">", onlyIfParent: true, op: closure_0(obj[8]).REACT_RENDER_OP, startTime: timestamp, attributes: obj4 };
          const startInactiveSpan = closure_0(obj[7]).startInactiveSpan;
          closure_0(obj[7]);
          obj4 = { "ui.component_name": closure_1_0 };
          obj4[closure_0(obj[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.react.profiler";
          const startInactiveSpanResult = startInactiveSpan(obj3);
          if (startInactiveSpanResult) {
            startInactiveSpanResult.end(timestampInSecondsResult);
          }
        }
      }
    };
  }, []);
};
export const withProfiler = function withProfiler(displayName, name) {
  _require = displayName;
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
      createElement = closure_7.createElement;
      merged = Object.assign(closure_1);
      obj.name = closure_2;
      obj.updateProps = displayName;
      obj1 = {};
      createElement2 = closure_7.createElement;
      merged1 = Object.assign(displayName);
      return createElement(closure_9, obj, createElement2(closure_0, obj1));
    }
  }
  Wrapped.displayName = "profiler(" + name + ")";
  const obj = require("module_1016");
  obj.hoistNonReactStatics(Wrapped, displayName);
  return Wrapped;
};