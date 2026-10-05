// _runtime/01070_TouchEventBoundary.js
import _mod693 from "metro/00693__.js";
import DEFAULT from "01031_DEFAULT.js";
import SPAN_ORIGIN_AUTO_INTERACTION from "01034_SPAN_ORIGIN_AUTO_INTERACTION.js";
import userInteractionIntegration from "01041_userInteractionIntegration.js";
import _mod1068 from "metro/01068__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";
import react_native from "00017_react-native.js";

let _Object, assign, obj1;

let StyleSheet;
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
({ StyleSheet, View: metroRequire } = react_native);
const wrapperView = StyleSheet.create({ wrapperView: { flex: 1 } });
let c9 = "sentry-label";
let c10 = "data-sentry-component";
let c11 = "data-sentry-element";
let c12 = "data-sentry-source-file";
class TouchEventBoundary {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, TouchEventBoundary);
    const obj = _getPrototypeOf(TouchEventBoundary);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result.name = "TouchEventBoundary";
    return tmp3Result;
  }
}
_inherits(TouchEventBoundary, react.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const obj = _mod693;
    const client = obj.getClient();
    let addIntegration;
    if (null != client) {
      addIntegration = client.addIntegration;
    }
    const tmp5 = null === addIntegration || undefined === addIntegration;
    if (!tmp5) {
      const self = this;
      const call = addIntegration.call;
      const tmpResult = _mod1068;
      call(client, tmpResult.createIntegration(this.name));
    }
  },
};
let items = [
  entry,
  {
    key: "render",
    value: function render() {
      const _onTouchStart = this._onTouchStart;
      const createElement = react.createElement;
      return (
        <metroRequire style={wrapperView.wrapperView} onTouchStart={_onTouchStart.bind(this)}>
          {this.props.children}
        </metroRequire>
      );
    },
  },
  {
    key: "_logTouchEvent",
    value: function _logTouchEvent(items, label) {
      let obj2;
      const first = items[0];
      if (first) {
        let combined = label;
        if (!combined) {
          let str3 = "";
          const name = first.name;
          if (first.file) {
            const _HermesInternal = HermesInternal;
            str3 = " (" + first.file + ")";
          }
          const _HermesInternal2 = HermesInternal;
          combined = "" + name + str3;
        }
        const self = this;
        const obj = {
          category: this.props.breadcrumbCategory,
          data: obj2,
          level: "info",
          message: "Touch event within element: " + combined,
          type: this.props.breadcrumbType,
        };
        const _HermesInternal3 = HermesInternal;
        obj2 = { path: items };
        const obj3 = _mod693;
        obj3.addBreadcrumb(obj);
        const debug2 = _mod693.debug;
        const _HermesInternal4 = HermesInternal;
        debug2.log("[TouchEvents] " + obj.message);
      } else {
        const debug = _mod693.debug;
        debug.warn("[TouchEvents] No root component found in touch path.");
      }
    },
  },
  {
    key: "_isNameIgnored",
    value: function _isNameIgnored(label) {
      const self = this;
      const tmp2 = this.props.ignoreNames || [];
      let obj = tmp2;
      if (self.props.ignoredDisplayNames) {
        const items = [];
        HermesBuiltin.arraySpread(items, self.props.ignoredDisplayNames, HermesBuiltin.arraySpread(items, tmp2, 0));
        obj = items;
      }
      return obj.some((item) => {
        let tmp = typeof item === "string";
        if (typeof item === "string") {
          tmp = label === item;
        }
        if (!tmp) {
          const _RegExp = RegExp;
          const match = item instanceof RegExp && label.match(item);
          tmp = match;
        }
        return tmp;
      });
    },
  },
  {
    key: "_onTouchStart",
    value: function _onTouchStart(_targetInst) {
      let tmp13;
      let tmp16;
      if (_targetInst._targetInst) {
        const self = this;
        _targetInst = _targetInst._targetInst;
        const items = [];
        if (_targetInst) {
          if (self.props.maxComponentTreeSize) {
            if (items.length < self.props.maxComponentTreeSize) {
              const elementType3 = _targetInst.elementType;
              let displayName1;
              if (null !== elementType3) {
                if (undefined !== elementType3) {
                  displayName1 = elementType3.displayName;
                }
              }
              if (displayName1 !== TouchEventBoundary.displayName) {
                while (true) {
                  let displayName;
                  let dropUndefinedKeysResult;
                  let labelName = self.props.labelName;
                  let elementType = _targetInst.elementType;
                  if (null !== elementType) {
                    if (undefined !== elementType) {
                      displayName = elementType.displayName;
                    }
                  }
                  let memoizedProps = _targetInst.memoizedProps;
                  if (memoizedProps) {
                    let tmp7 = _mod693;
                    let tmp9 = memoizedProps[c10];
                    let tmp10 = typeof tmp9 === "string";
                    let dropUndefinedKeys = tmp7.dropUndefinedKeys;
                    if (typeof tmp9 === "string") {
                      tmp10 = memoizedProps[c10].length > 0;
                    }
                    if (tmp10) {
                      tmp10 = "unknown" !== memoizedProps[c10];
                    }
                    if (tmp10) {
                      tmp10 = memoizedProps[c10];
                    }
                    if (!tmp10) {
                      tmp10 = displayName;
                    }
                    let obj2 = { name: tmp10, element: tmp13, file: tmp16, label: null };
                    let tmp12 = memoizedProps[c11];
                    tmp13 = typeof tmp12 === "string";
                    if (typeof tmp12 === "string") {
                      tmp13 = memoizedProps[c11].length > 0;
                    }
                    if (tmp13) {
                      tmp13 = "unknown" !== memoizedProps[c11];
                    }
                    if (tmp13) {
                      tmp13 = memoizedProps[c11];
                    }
                    let tmp15 = memoizedProps[c12];
                    tmp16 = typeof tmp15 === "string";
                    if (typeof tmp15 === "string") {
                      tmp16 = memoizedProps[c12].length > 0;
                    }
                    if (tmp16) {
                      tmp16 = "unknown" !== memoizedProps[c12];
                    }
                    if (tmp16) {
                      tmp16 = memoizedProps[c12];
                    }
                    if (typeof memoizedProps[c9] === "string") {
                      if (memoizedProps[c9].length > 0) {
                        obj2.label = memoizedProps[c9];
                        dropUndefinedKeysResult = dropUndefinedKeys(obj2);
                      }
                    }
                    if (typeof labelName === "string") {
                      if (typeof memoizedProps[labelName] === "string") {
                      }
                    }
                  } else if (displayName) {
                    let obj = { name: displayName };
                    dropUndefinedKeysResult = obj;
                  }
                  let _pushIfNotIgnoredResult = self._pushIfNotIgnored(items, dropUndefinedKeysResult);
                  let _return = _targetInst.return;
                  if (!_return) {
                    break;
                  } else if (!self.props.maxComponentTreeSize) {
                    break;
                  } else if (items.length >= self.props.maxComponentTreeSize) {
                    break;
                  } else {
                    let elementType2 = _return.elementType;
                    let displayName2;
                    if (null !== elementType2) {
                      if (undefined !== elementType2) {
                        displayName2 = elementType2.displayName;
                      }
                    }
                    _targetInst = _return;
                    if (displayName2 === TouchEventBoundary.displayName) {
                      break;
                    }
                  }
                }
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
        const obj3 = { elementId: label, op: DEFAULT.UI_ACTION_TOUCH };
        const startUserInteractionSpan = userInteractionIntegration.startUserInteractionSpan;
        userInteractionIntegration;
        const result = startUserInteractionSpan(obj3);
        if (result) {
          const setAttribute = result.setAttribute;
          const attr = setAttribute(
            _mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
            SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_INTERACTION,
          );
        }
      }
    },
  },
  {
    key: "_pushIfNotIgnored",
    value: function _pushIfNotIgnored(items, dropUndefinedKeysResult) {
      let tmp = dropUndefinedKeysResult;
      if (tmp) {
        let tmp3 = !(!dropUndefinedKeysResult.name && !dropUndefinedKeysResult.label);
        if (tmp3) {
          const self = this;
          const name = dropUndefinedKeysResult.name;
          let tmp4 = !name;
          if (name) {
            tmp4 = !self._isNameIgnored(dropUndefinedKeysResult.name);
          }
          if (tmp4) {
            const label = dropUndefinedKeysResult.label;
            let tmp5 = !label;
            if (label) {
              tmp5 = !self._isNameIgnored(dropUndefinedKeysResult.label);
            }
            if (tmp5) {
              let tmp7 = items.length > 0;
              if (tmp7) {
                const _JSON = JSON;
                const _JSON2 = JSON;
                const json = JSON.stringify(items[items.length - 1]);
                tmp7 = json === JSON.stringify(dropUndefinedKeysResult);
              }
              let flag = !tmp7;
              if (flag) {
                items.push(dropUndefinedKeysResult);
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
    },
  },
];
const importDefaultResultResult = _createClass(TouchEventBoundary, items);
importDefaultResultResult.displayName = "__Sentry.TouchEventBoundary";
importDefaultResultResult.defaultProps = {
  breadcrumbCategory: "touch",
  breadcrumbType: "user",
  ignoreNames: [],
  maxComponentTreeSize: 20,
};
const TouchEventBoundary_export = importDefaultResultResult;

export { TouchEventBoundary_export as TouchEventBoundary };
export const withTouchEventBoundary = (arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  class WrappedComponent {
    constructor(arg0) {
      obj = closure_5;
      obj1 = closure_1;
      createElement = closure_5.createElement;
      tmp = closure_13;
      _Object = Object;
      assign = Object.assign;
      if (null == closure_1) {
        obj1 = {};
      }
      obj3 = assign({}, obj1);
      return createElement(tmp, obj3, obj.createElement(closure_0, Object.assign({}, arg0)));
    }
  }
  WrappedComponent.displayName = "WithTouchEventBoundary";
  return WrappedComponent;
};
