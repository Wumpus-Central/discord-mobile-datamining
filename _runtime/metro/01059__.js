// === Module 1059: ? ===

// Module 1059
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const TouchEventBoundary = fn;
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
({ StyleSheet, View: metroRequire } = get_ActivityIndicator);
const wrapperView = StyleSheet.create({ wrapperView: { flex: 1 } });
let c9 = "sentry-label";
let c10 = "data-sentry-component";
let c11 = "data-sentry-element";
let c12 = "data-sentry-source-file";
class TouchEventBoundary {
  constructor() {
    self = this;
    tmp = c2(this, TouchEventBoundary);
    tmp2 = closure_4;
    obj = closure_4(TouchEventBoundary);
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
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.name = "TouchEventBoundary";
    return tmp3Result;
  }
}
_inherits(TouchEventBoundary, noop.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const client = TouchEventBoundary(682).getClient();
    let addIntegration;
    if (null != client) {
      addIntegration = client.addIntegration;
    }
    if (!tmp5) {
      const self = this;
      const call = addIntegration.call;
      const integration = TouchEventBoundary(1057).createIntegration(this.name);
      if (typeof call === "unknown") {
        addIntegration(integration);
      } else {
        call(client, integration);
      }
      const tmpResult = TouchEventBoundary(1057);
    }
  }
};
let items = [
  entry,
  {
    key: "render",
    value: function render() {
      const obj = { style: wrapperView.wrapperView, onTouchStart: null };
      const _onTouchStart = this._onTouchStart;
      obj.onTouchStart = _onTouchStart.bind(this);
      return <timestampProducer style={wrapperView.wrapperView} onTouchStart={null}>{this.props.children}</timestampProducer>;
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
        let obj = { category: this.props.breadcrumbCategory, data: null, level: "info", message: null, type: null };
        obj = { path: items };
        obj.data = obj;
        const _HermesInternal3 = HermesInternal;
        obj.message = "Touch event within element: " + combined;
        obj.type = this.props.breadcrumbType;
        TouchEventBoundary(682).addBreadcrumb(obj);
        const debug2 = TouchEventBoundary(682).debug;
        const _HermesInternal4 = HermesInternal;
        debug2.log("[TouchEvents] " + obj.message);
        const obj3 = TouchEventBoundary(682);
      } else {
        const debug = TouchEventBoundary(682).debug;
        debug.warn("[TouchEvents] No root component found in touch path.");
      }
    }
  },
  {
    key: "_isNameIgnored",
    value: function _isNameIgnored(label) {
      const self = this;
      let tmp = this.props.ignoreNames || [];
      let obj = tmp;
      if (self.props.ignoredDisplayNames) {
        const items = [];
        HermesBuiltin.arraySpread(self.props.ignoredDisplayNames, HermesBuiltin.arraySpread(tmp, 0));
        obj = items;
      }
      return obj.some((item) => {
        let tmp = typeof item === "string";
        if (typeof item === "string") {
          tmp = label === item;
        }
        if (!tmp) {
          const _RegExp = RegExp;
          let match = item instanceof RegExp;
          if (match) {
            match = label.match(item);
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
                      let obj = { name: displayName };
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
                obj = { name: tmp10, element: null, file: null, label: null };
                let tmp13 = typeof tmp12 === "string";
                if (typeof tmp4[closure_11] === "string") {
                  tmp13 = tmp4[tmp11].length > 0;
                }
                if (tmp13) {
                  tmp13 = "unknown" !== tmp4[tmp11];
                }
                if (tmp13) {
                  tmp13 = tmp4[tmp11];
                }
                obj.element = tmp13;
                let tmp16 = typeof tmp15 === "string";
                if (typeof tmp4[closure_12] === "string") {
                  tmp16 = tmp4[tmp14].length > 0;
                }
                if (tmp16) {
                  tmp16 = "unknown" !== tmp4[tmp14];
                }
                if (tmp16) {
                  tmp16 = tmp4[tmp14];
                }
                obj.file = tmp16;
                if (typeof tmp4[closure_9] !== "string") {
                  let tmp18;
                  if (typeof labelName === "string") {
                    if (typeof tmp4[labelName] === "string") {
                      if (tmp4[labelName].length > 0) {
                        tmp18 = tmp4[labelName];
                      }
                    }
                  }
                  obj.label = tmp18;
                  obj2.dropUndefinedKeys(obj);
                }
                tmp18 = tmp4[tmp17];
                obj2 = TouchEventBoundary(682);
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
        obj = { elementId: label, op: TouchEventBoundary(1020).UI_ACTION_TOUCH };
        const result = TouchEventBoundary(1030).startUserInteractionSpan(obj);
        if (result) {
          const attr = result.setAttribute(TouchEventBoundary(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, TouchEventBoundary(1023).SPAN_ORIGIN_AUTO_INTERACTION);
        }
        const obj4 = TouchEventBoundary(1030);
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
const importDefaultResultResult = _createClass(TouchEventBoundary, items);
importDefaultResultResult.displayName = "__Sentry.TouchEventBoundary";
importDefaultResultResult.defaultProps = { breadcrumbCategory: "touch", breadcrumbType: "user", ignoreNames: [], maxComponentTreeSize: 20 };

export const TouchEventBoundary = importDefaultResultResult;
export const withTouchEventBoundary = (arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  class WrappedComponent {
    constructor(arg0) {
      obj = closure_5;
      obj = closure_1;
      tmp = closure_13;
      if (null == closure_1) {
        obj = {};
      }
      merged = Object.assign({}, obj);
      return closure_5.createElement(tmp, merged, obj.createElement(closure_0, Object.assign({}, arg0)));
    }
  }
  WrappedComponent.displayName = "WithTouchEventBoundary";
  return WrappedComponent;
};