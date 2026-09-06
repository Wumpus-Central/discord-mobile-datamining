// === Module 1774: ? ===

// Module 1774
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const LayoutAnimationConfig = fn;
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
function SkipEntering(children) {
  const tmp = React5(children.shouldSkip);
  closure_0 = tmp;
  const tmp2 = React5(children.itemKey);
  if (children.itemKey !== tmp2.current) {
    ({ shouldSkip: tmp.current, itemKey: tmp2.current } = children);
  }
  const items = [tmp, children.itemKey];
  timestampProducer(() => {
    closure_0.current = false;
  }, items);
  return jsx(closure_10 ? context : context.Provider, { value: tmp, children: children.children });
}
let noop = fn(19);
({ Children: hasOwnProperty, useEffect: metroRequire, useRef: closure_7, Component, createContext } = noop);
const jsx = fn(21).jsx;
const module_1639 = fn(1639);
let closure_10 = module_1639.isReact19();
const context = createContext(null);
class LayoutAnimationConfig {
  constructor() {
    self = this;
    tmp = c2(this, LayoutAnimationConfig);
    tmp2 = closure_4;
    obj = closure_4(LayoutAnimationConfig);
    tmp3 = closure_3;
    if (closure_9()) {
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
_inherits(LayoutAnimationConfig, Component);
const entry = {
  key: "getMaybeWrappedChildren",
  value: function getMaybeWrappedChildren() {
    const self = this;
    if (hasOwnProperty.count(this.props.children) > 1) {
      if (self.props.skipExiting) {
        let children = hasOwnProperty.map(self.props.children, (children) => closure_8(LayoutAnimationConfig, { itemKey: self.props.itemKey, skipExiting: true, children }));
      }
      return children;
    }
    children = self.props.children;
  }
};
let items = [
  entry,
  {
    key: "setShouldAnimateExiting",
    value: function setShouldAnimateExiting() {
      const self = this;
      if (1 === hasOwnProperty.count(this.props.children)) {
        const findNodeHandleResult = LayoutAnimationConfig(1744).findNodeHandle(self);
        if (findNodeHandleResult) {
          const result = LayoutAnimationConfig(1680).setShouldAnimateExitingForTag(findNodeHandleResult, !self.props.skipExiting);
          const tmpResult = LayoutAnimationConfig(1680);
        }
        const obj = LayoutAnimationConfig(1744);
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
        const obj = { itemKey: self.props.itemKey, shouldSkip: self.props.skipEntering, children: maybeWrappedChildren };
        tmp2 = <SkipEntering itemKey={self.props.itemKey} shouldSkip={self.props.skipEntering}>{maybeWrappedChildren}</SkipEntering>;
      }
      return tmp2;
    }
  }
];

export const SkipEnteringContext = context;
export const LayoutAnimationConfig = _createClass(LayoutAnimationConfig, items);