// _runtime/01790__isNativeReflectConstruct.js
import noopDefault from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";
import isJest from "01655_isJest.js";

const LayoutAnimationConfig = arg1;
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
function SkipEntering(children) {
  const tmp = callback4(children.shouldSkip);
  closure_0 = tmp;
  const tmp2 = callback4(children.itemKey);
  if (children.itemKey !== tmp2.current) {
    ({ shouldSkip: tmp.current, itemKey: tmp2.current } = children);
  }
  const items = [tmp, children.itemKey];
  callback3(() => {
    closure_0.current = false;
  }, items);
  return jsx(closure_10 ? context : context.Provider, { value: tmp, children: children.children });
}
({ Children: c5, useEffect: closure_6, useRef: error, Component, createContext } = noop);
noopDefault;
let closure_10 = isJest.isReact19();
const context = createContext(null);
class LayoutAnimationConfig {
  constructor() {
    self = this;
    tmp = closure_2(this, LayoutAnimationConfig);
    tmp2 = closure_4;
    obj = closure_4(LayoutAnimationConfig);
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
_inheritsDefault(LayoutAnimationConfig, Component);
isJest = {
  key: "getMaybeWrappedChildren",
  value: function getMaybeWrappedChildren() {
    let self = this;
    self = this;
    if (closure_1_5.count(this.props.children) > 1) {
      if (self.props.skipExiting) {
        let children = closure_1_5.map(self.props.children, (children) => (
          <self itemKey={self.props.itemKey} skipExiting>
            {arg0}
          </self>
        ));
      }
      return children;
    }
    children = self.props.children;
  },
};
let items = [
  isJest,
  {
    key: "setShouldAnimateExiting",
    value: function setShouldAnimateExiting() {
      const self = this;
      if (1 === closure_5.count(this.props.children)) {
        const findNodeHandleResult = LayoutAnimationConfig(1760).findNodeHandle(self);
        if (findNodeHandleResult) {
          const result = tmp(1696).setShouldAnimateExitingForTag(findNodeHandleResult, !self.props.skipExiting);
          const tmpResult = tmp(1696);
        }
        const obj = LayoutAnimationConfig(1760);
        tmp = LayoutAnimationConfig;
      }
    },
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (undefined !== this.props.skipExiting) {
        const result = self.setShouldAnimateExiting();
      }
    },
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      const maybeWrappedChildren = this.getMaybeWrappedChildren();
      let tmp2 = maybeWrappedChildren;
      if (undefined !== this.props.skipEntering) {
        const obj = { itemKey: null, shouldSkip: null, children: null };
        obj[0] = self.props.itemKey;
        obj[1] = self.props.skipEntering;
        obj[2] = maybeWrappedChildren;
        tmp2 = (
          <SkipEntering itemKey={null} shouldSkip={null}>
            {null}
          </SkipEntering>
        );
      }
      return tmp2;
    },
  },
];

export const SkipEnteringContext = context;
export const LayoutAnimationConfig = importDefaultResult(LayoutAnimationConfig, items);
