// _runtime/01791__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import noop from "noop";
import "noop";
import { jsx } from "jsxProd";
import isJest from "isJest";

let Component;
let c5;
let closure_6;
let createContext;
let error;
let LayoutAnimationConfig = arg1;
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
function SkipEntering(children) {
  const tmp = callback4(children.shouldSkip);
  const LayoutAnimationConfig = tmp;
  const tmp2 = callback4(children.itemKey);
  if (children.itemKey !== tmp2.current) {
    ({ shouldSkip: tmp.current, itemKey: tmp2.current } = children);
  }
  const items = [tmp, children.itemKey];
  callback3(() => {
    closure_0.current = false;
  }, items);
  return jsx(isJest ? context : context.Provider, { value: tmp, children: children.children });
}
({ Children: c5, useEffect: closure_6, useRef: error, Component, createContext } = noop);
isJest = isJest.isReact19();
const context = createContext(null);
class LayoutAnimationConfig {
  constructor() {
    self = this;
    tmp = SkipEntering(this, LayoutAnimationConfig);
    tmp2 = SkipEntering;
    obj = SkipEntering(LayoutAnimationConfig);
    tmp3 = SkipEntering;
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
require("_inherits")(LayoutAnimationConfig, Component);
isJest = {
  key: "getMaybeWrappedChildren",
  value: function getMaybeWrappedChildren() {
    let self = this;
    self = this;
    if (outer1_5.count(this.props.children) > 1) {
      if (self.props.skipExiting) {
        let children = outer1_5.map(self.props.children, (children) => <self itemKey={self.props.itemKey} skipExiting>{arg0}</self>);
      }
      return children;
    }
    children = self.props.children;
  }
};
let items = [
  isJest,
  {
    key: "setShouldAnimateExiting",
    value: function setShouldAnimateExiting() {
      const self = this;
      if (1 === closure_5.count(this.props.children)) {
        const findNodeHandleResult = LayoutAnimationConfig(1761).findNodeHandle(self);
        if (findNodeHandleResult) {
          const result = tmp(1697).setShouldAnimateExitingForTag(findNodeHandleResult, !self.props.skipExiting);
          const tmpResult = tmp(1697);
        }
        const obj = LayoutAnimationConfig(1761);
        tmp = LayoutAnimationConfig;
      }
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (undefined !== this.props.skipExiting) {
        const result = self.setShouldAnimateExiting();
      }
    }
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
        tmp2 = <SkipEntering itemKey={null} shouldSkip={null}>{null}</SkipEntering>;
      }
      return tmp2;
    }
  }
];

export const SkipEnteringContext = context;
export const LayoutAnimationConfig = importDefaultResult(LayoutAnimationConfig, items);