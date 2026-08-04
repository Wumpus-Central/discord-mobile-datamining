import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";

let StyleSheet;
let closure_6;
const TouchEventBoundary = arg1;
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
({ StyleSheet, View: closure_6 } = get_ActivityIndicator);
const styles = StyleSheet.create({ wrapperView: { flex: 1 } });
let c9 = "sentry-label";
let c10 = "data-sentry-component";
let c11 = "data-sentry-element";
let c12 = "data-sentry-source-file";
class TouchEventBoundary {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, TouchEventBoundary);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(TouchEventBoundary);
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
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.name = "TouchEventBoundary";
    return tmp3Result;
  }
}
require("_inherits")(TouchEventBoundary, importAllResult.Component);
let items = [
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const client = TouchEventBoundary(817).getClient();
      let addIntegration;
      if (null != client) {
        addIntegration = client.addIntegration;
      }
      if (!tmp5) {
        const self = this;
        const call = addIntegration.call;
        const integration = TouchEventBoundary(1192).createIntegration(this.name);
        if (typeof call === "unknown") {
          addIntegration(integration);
        } else {
          call(client, integration);
        }
        const tmpResult = TouchEventBoundary(1192);
      }
    }
  },
  {
    key: "render",
    value: function render() {
      const _onTouchStart = this._onTouchStart;
      return <closure_6 style={wrapperView.wrapperView} onTouchStart={_onTouchStart.bind(this)}>{this.props.children}</closure_6>;
    }
  },
  {
    key: "_logTouchEvent",
    value: function _logTouchEvent(items, label) {
      const first = items[0];
      if (first) {
        let combined = label;
        if (!label) {
          let str3 = "";
          if (first.file) {
            const _HermesInternal = HermesInternal;
            str3 = " (" + first.file + ")";
          }
          const _HermesInternal2 = HermesInternal;
          combined = "" + first.name + str3;
        }
        const self = this;
        let obj = { category: null, data: null, level: "info", message: null, type: null };
        obj[0] = this.props.breadcrumbCategory;
        obj = { path: null };
        obj[0] = items;
        obj[1] = obj;
        const _HermesInternal3 = HermesInternal;
        obj[3] = "Touch event within element: " + combined;
        obj[4] = this.props.breadcrumbType;
        TouchEventBoundary(817).addBreadcrumb(obj);
        const debug2 = TouchEventBoundary(817).debug;
        const _HermesInternal4 = HermesInternal;
        debug2.log("[TouchEvents] " + obj.message);
        const obj3 = TouchEventBoundary(817);
      } else {
        const debug = TouchEventBoundary(817).debug;
        debug.warn("[TouchEvents] No root component found in touch path.");
      }
    }
  },
  {
    key: "_isNameIgnored",
    value: function _isNameIgnored(label) {
      const self = this;
      let closure_0 = label;
      let tmp = this.props.ignoreNames || [];
      let obj = tmp;
      if (self.props.ignoredDisplayNames) {
        const items = [];
        HermesBuiltin.arraySpread(self.props.ignoredDisplayNames, HermesBuiltin.arraySpread(tmp, 0));
        obj = items;
      }
      return obj.some((str) => {
        let tmp = typeof str === "string";
        if (typeof str === "string") {
          tmp = label === str;
        }
        if (!tmp) {
          const _RegExp = RegExp;
          let match = str instanceof RegExp;
          if (match) {
            match = label.match(str);
          }
          tmp = match;
        }
        return tmp;
      });
    }
  },
  {
    key: "_onTouchStart",
    value: function _onTouchStart(_targetInst) {
      let labelName;
      if (_targetInst._targetInst) {
        const self = this;
        _targetInst = _targetInst._targetInst;
        const items = [];
        if (_targetInst) {
          if (self.props.maxComponentTreeSize) {
            if (items.length < self.props.maxComponentTreeSize) {
              const elementType3 = _targetInst.elementType;
              let displayName;
              if (null !== elementType3) {
                if (undefined !== elementType3) {
                  displayName = elementType3.displayName;
                }
              }
              if (displayName !== TouchEventBoundary.displayName) {
                while (true) {
                  labelName = self.props.labelName;
                  let elementType = _targetInst.elementType;
                  let tmp3 = _targetInst;
                  if (null !== elementType) {
                    if (undefined !== elementType) {
                      displayName = elementType.displayName;
                    }
                  }
                  if (_targetInst.memoizedProps) {
                    break;
                  } else {
                    let tmp5;
                    if (displayName) {
                      let obj = { name: null };
                      obj[0] = displayName;
                      tmp5 = obj;
                    }
                    let _pushIfNotIgnoredResult = self._pushIfNotIgnored(items, tmp5);
                    let _return = _targetInst.return;
                    if (_return) {
                      if (self.props.maxComponentTreeSize) {
                        if (items.length < self.props.maxComponentTreeSize) {
                          let elementType2 = _return.elementType;
                          let displayName1;
                          if (null !== elementType2) {
                            if (undefined !== elementType2) {
                              displayName1 = elementType2.displayName;
                            }
                          }
                          let tmp22 = TouchEventBoundary;
                          _targetInst = _return;
                        }
                      }
                    }
                  }
                }
                let tmp10 = typeof tmp9 === "string";
                if (typeof tmp4[c10] === "string") {
                  tmp10 = tmp4[tmp8].length > 0;
                }
                if (tmp10) {
                  tmp10 = "unknown" !== tmp4[tmp8];
                }
                if (tmp10) {
                  tmp10 = tmp4[tmp8];
                }
                if (!tmp10) {
                  tmp10 = displayName;
                }
                obj = { name: null, element: null, file: null, label: null };
                obj[0] = tmp10;
                let tmp13 = typeof tmp12 === "string";
                if (typeof tmp4[c11] === "string") {
                  tmp13 = tmp4[tmp11].length > 0;
                }
                if (tmp13) {
                  tmp13 = "unknown" !== tmp4[tmp11];
                }
                if (tmp13) {
                  tmp13 = tmp4[tmp11];
                }
                obj[1] = tmp13;
                let tmp16 = typeof tmp15 === "string";
                if (typeof tmp4[c12] === "string") {
                  tmp16 = tmp4[tmp14].length > 0;
                }
                if (tmp16) {
                  tmp16 = "unknown" !== tmp4[tmp14];
                }
                if (tmp16) {
                  tmp16 = tmp4[tmp14];
                }
                obj[2] = tmp16;
                if (typeof tmp4[c9] !== "string") {
                  let tmp18;
                  if (typeof labelName === "string") {
                    if (typeof tmp4[labelName] === "string") {
                      if (tmp4[labelName].length > 0) {
                        tmp18 = tmp4[labelName];
                      }
                    }
                  }
                  obj[3] = tmp18;
                  obj2.dropUndefinedKeys(obj);
                }
                tmp18 = tmp4[tmp17];
                obj2 = TouchEventBoundary(817);
              }
            }
          }
        }
        const found = items.find((label) => label.label);
        let label;
        if (null !== found) {
          if (undefined !== found) {
            label = found.label;
          }
        }
        if (items.length > 0) {
          self._logTouchEvent(items, label);
        }
        obj = { elementId: null, op: null };
        obj[0] = label;
        obj[1] = TouchEventBoundary(1155).UI_ACTION_TOUCH;
        const result = TouchEventBoundary(1165).startUserInteractionSpan(obj);
        if (result) {
          const attr = result.setAttribute(TouchEventBoundary(817).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, TouchEventBoundary(1158).SPAN_ORIGIN_AUTO_INTERACTION);
        }
        const obj4 = TouchEventBoundary(1165);
      }
    }
  },
  {
    key: "_pushIfNotIgnored",
    value: function _pushIfNotIgnored(items, name) {
      let tmp = name;
      if (tmp) {
        name = name.name;
        let tmp2 = !name;
        if (!name) {
          tmp2 = !name.label;
        }
        let tmp3 = !tmp2;
        if (!tmp2) {
          const self = this;
          const name2 = name.name;
          let tmp4 = !name2;
          if (name2) {
            tmp4 = !self._isNameIgnored(name.name);
          }
          if (tmp4) {
            const label = name.label;
            let tmp5 = !label;
            if (label) {
              tmp5 = !self._isNameIgnored(name.label);
            }
            if (tmp5) {
              let tmp7 = items.length > 0;
              if (tmp7) {
                const _JSON = JSON;
                const _JSON2 = JSON;
                const json = JSON.stringify(items[items.length - 1]);
                tmp7 = json === JSON.stringify(name);
              }
              let flag = !tmp7;
              if (!tmp7) {
                items.push(name);
                flag = true;
              }
              tmp5 = flag;
            }
            tmp4 = tmp5;
          }
          tmp3 = tmp4;
        }
        tmp = tmp3;
      }
      return tmp;
    }
  }
];
const importDefaultResultResult = importDefaultResult(TouchEventBoundary, items);
importDefaultResultResult.displayName = "__Sentry.TouchEventBoundary";
importDefaultResultResult.defaultProps = { breadcrumbCategory: "touch", breadcrumbType: "user", ignoreNames: [], maxComponentTreeSize: 20 };

export const TouchEventBoundary = importDefaultResultResult;
export const withTouchEventBoundary = (arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  class WrappedComponent {
    constructor(arg0) {
      obj = outer1_5;
      obj = closure_1;
      tmp = outer1_13;
      if (null == closure_1) {
        obj = {};
      }
      merged = Object.assign({}, obj);
      return outer1_5.createElement(tmp, merged, obj.createElement(closure_0, Object.assign({}, arg0)));
    }
  }
  WrappedComponent.displayName = "WithTouchEventBoundary";
  return WrappedComponent;
};