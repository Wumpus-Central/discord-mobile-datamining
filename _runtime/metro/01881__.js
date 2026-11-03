// === Module 1881: ? ===

// Module 1881
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
  const tmp = closure_1_10(children.shouldSkip);
  closure_0 = tmp;
  items = [tmp];
  React7(() => {
    closure_0.current = false;
  }, items);
  return <context value={tmp}>{children.children}</context>;
}
const noop = fn(19);
({ Children: hasOwnProperty, cloneElement: metroRequire, Fragment: closure_7, isValidElement: closure_8, useEffect: closure_9, useRef: closure_10, Component, createContext } = noop);
const jsx = fn(21).jsx;
const context = createContext(null);
class LayoutAnimationConfig {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, LayoutAnimationConfig);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(LayoutAnimationConfig);
    tmp3 = closure_3;
    if (closure_12()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._childInstance = null;
    tmp3Result._setChildInstance = (_childInstance) => {
      closure_0._childInstance = _childInstance;
    };
    return tmp3Result;
  }
}
_inherits(LayoutAnimationConfig, Component);
const entry = {
  key: "_getMergedRef",
  value: function _getMergedRef(ref) {
    const self = this;
    if (!tmp) {
      self._mergedRefSource = ref;
      self._mergedRef = LayoutAnimationConfig(1877).mergeRefs(ref, self._setChildInstance);
      const obj = LayoutAnimationConfig(1877);
    }
    return self._mergedRef;
  }
};
let items = [
  entry,
  {
    key: "getComponentViewTag",
    value: function getComponentViewTag() {
      let num = LayoutAnimationConfig(1878).getViewTagFromInstance(this._childInstance);
      if (num == null) {
        num = -1;
      }
      return num;
    }
  },
  {
    key: "getMaybeWrappedChildren",
    value: function getMaybeWrappedChildren() {
      const self = this;
      if (hasOwnProperty.count(this.props.children) > 1) {
        if (self.props.skipExiting) {
          let mapped = hasOwnProperty.map(self.props.children, (children) => <LayoutAnimationConfig skipExiting>{children}</LayoutAnimationConfig>);
        }
        return mapped;
      }
      mapped = self.getMaybeRefTrackedChild();
    }
  },
  {
    key: "getMaybeRefTrackedChild",
    value: function getMaybeRefTrackedChild() {
      const self = this;
      const children = this.props.children;
      let tmp = children;
      if (undefined !== this.props.skipExiting) {
        tmp = children;
        if (React6(children)) {
          tmp = children;
          if (children.type !== React5) {
            const obj = { ref: self._getMergedRef(children.props.ref) };
            tmp = timestampProducer(children, obj);
          }
        }
      }
      return tmp;
    }
  },
  {
    key: "setShouldAnimateExiting",
    value: function setShouldAnimateExiting() {
      const self = this;
      if (1 === hasOwnProperty.count(this.props.children)) {
        let viewTagFromInstance = LayoutAnimationConfig(1878).getViewTagFromInstance(self._childInstance);
        if (viewTagFromInstance == null) {
          viewTagFromInstance = LayoutAnimationConfig(1866).findNodeHandle(self);
          const tmpResult = LayoutAnimationConfig(1866);
        }
        if (viewTagFromInstance) {
          const result = LayoutAnimationConfig(1827).setShouldAnimateExitingForTag(viewTagFromInstance, !self.props.skipExiting);
          const tmpResult2 = LayoutAnimationConfig(1827);
        }
        const obj = LayoutAnimationConfig(1878);
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
      const maybeWrappedChildren = this.getMaybeWrappedChildren();
      let tmp2 = maybeWrappedChildren;
      if (undefined !== this.props.skipEntering) {
        const obj = { shouldSkip: this.props.skipEntering, children: maybeWrappedChildren };
        tmp2 = <SkipEntering shouldSkip={this.props.skipEntering}>{maybeWrappedChildren}</SkipEntering>;
      }
      return tmp2;
    }
  }
];

export const SkipEnteringContext = context;
export const LayoutAnimationConfig = _createClass(LayoutAnimationConfig, items);