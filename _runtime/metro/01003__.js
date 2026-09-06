// _runtime/metro/01003__.js
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _slicedToArray from "00032__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

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
  } catch (err) {}
}
_possibleConstructorReturn;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const unknown = "unknown";
class Profiler {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, Profiler);
    items = [];
    items[0] = global;
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Profiler);
    tmp3 = closure_4;
    if (metroRequire()) {
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
    obj2 = closure_0(closure_1[7]);
    obj = {
      name: "<" + name + ">",
      onlyIfParent: true,
      op: closure_0(closure_1[8]).REACT_MOUNT_OP,
      attributes: {
        [closure_2_0(closure_2_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.react.profiler",
        "ui.component_name": name,
      },
    };
    tmp3Result._mountSpan = obj2.startInactiveSpan(obj);
    tmp3Result1 = tmp3Result;
    return;
  }
}
_inherits(Profiler, noop.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    if (this._mountSpan) {
      const _mountSpan = this._mountSpan;
      _mountSpan.end();
    }
  },
};
let items = [
  entry,
  {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(updateProps) {
      const self = this;
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
            found = keys.filter((item) => updateProps[item] !== self.props.updateProps[item]);
            if (found.length > 0) {
              Profiler = Profiler(updateProps[9]).timestampInSeconds();
              let obj = Profiler(updateProps[9]);
              self._updateSpan = Profiler(updateProps[9]).withActiveSpan(self._mountSpan, () => {
                Profiler(889);
                let obj = {
                  name: "<" + self.props.name + ">",
                  onlyIfParent: true,
                  op: Profiler(1004).REACT_UPDATE_OP,
                  startTime,
                  attributes: null,
                };
                obj = {
                  [closure_2_0(closure_2_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.react.profiler",
                  "ui.component_name": self.props.name,
                  "ui.react.changed_props": found,
                };
                obj.attributes = obj;
                return obj.startInactiveSpan(obj);
              });
              const obj2 = Profiler(updateProps[9]);
            }
          }
        }
      }
      return true;
    },
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
    },
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      Profiler = Profiler(682).timestampInSeconds();
      ({ name: dependencyMap, includeRender } = this.props);
      if (self._mountSpan) {
        if (tmp3) {
          let tmpResult = tmp(682);
          const timestamp = tmpResult.spanToJSON(self._mountSpan).timestamp;
          tmpResult = tmp(682);
          tmpResult.withActiveSpan(self._mountSpan, () => {
            Profiler(889);
            let obj = {
              onlyIfParent: true,
              name: "<" + dependencyMap + ">",
              op: Profiler(1004).REACT_RENDER_OP,
              startTime: timestamp,
              attributes: null,
            };
            obj = {
              [closure_2_0(closure_2_1[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.react.profiler",
              "ui.component_name": dependencyMap,
            };
            obj.attributes = obj;
            const startInactiveSpanResult = obj.startInactiveSpan(obj);
            if (startInactiveSpanResult) {
              startInactiveSpanResult.end(closure_0);
            }
          });
        }
      }
      let obj = Profiler(682);
      tmp3 = undefined === includeRender || includeRender;
    },
  },
  {
    key: "render",
    value: function render() {
      return this.props.children;
    },
  },
];
const _moduleResult = _createClass(Profiler, items);
let merged = Object.assign(_moduleResult, {
  defaultProps: { disabled: false, includeRender: true, includeUpdates: true },
});

export const Profiler = _moduleResult;
export const UNKNOWN_COMPONENT = "unknown";
export const useProfiler = function useProfiler(arg0) {
  closure_0 = arg0;
  if (attributes === undefined) {
    attributes = { disabled: false, hasRenderSpan: true };
  }
  name = undefined;
  name = name(
    noop.useState(() => {
      let disabled;
      if (attributes != null) {
        disabled = attributes.disabled;
      }
      if (!disabled) {
        Profiler(889);
        attributes = { name: null, onlyIfParent: true, op: null, attributes: null };
        const _HermesInternal = HermesInternal;
        attributes.name = "<" + closure_0 + ">";
        attributes.op = Profiler(1004).REACT_MOUNT_OP;
        attributes = {};
        attributes[Profiler(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.react.profiler";
        attributes["ui.component_name"] = closure_0;
        attributes.attributes = attributes;
        return attributes.startInactiveSpan(attributes);
      }
    }),
    1,
  )[0];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      closure_2.end();
    }
    return () => {
      if (closure_1_2) {
        if (hasRenderSpan.hasRenderSpan) {
          attributes = closure_0(attributes[9]);
          const obj2 = closure_0(attributes[9]);
          const timestampInSecondsResult = closure_0(attributes[9]).timestampInSeconds();
          attributes = { name: null, onlyIfParent: true, op: null, startTime: null, attributes: null };
          const _HermesInternal = HermesInternal;
          attributes.name = "<" + closure_1_0 + ">";
          attributes.op = closure_0(attributes[8]).REACT_RENDER_OP;
          attributes.startTime = attributes.spanToJSON(tmp).timestamp;
          attributes = {};
          attributes[closure_0(attributes[9]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.react.profiler";
          attributes["ui.component_name"] = closure_1_0;
          attributes.attributes = attributes;
          const startInactiveSpanResult = closure_0(attributes[7]).startInactiveSpan(attributes);
          if (startInactiveSpanResult) {
            startInactiveSpanResult.end(timestampInSecondsResult);
          }
          const obj3 = closure_0(attributes[7]);
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
      return closure_7.createElement(closure_9, obj, closure_7.createElement(closure_0, obj));
    }
  }
  Wrapped.displayName = "profiler(" + name + ")";
  Profiler(1005).hoistNonReactStatics(Wrapped, displayName);
  return Wrapped;
};
