// === Module 5487: ? ===

// Module 5487
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const Wrap = fn;
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
class Wrap {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, Wrap);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(Wrap);
    tmp3 = closure_3;
    if (closure_6()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.childInstance = null;
    tmp3Result.hostInstance = null;
    tmp3Result.childRef = undefined;
    tmp3Result.attachedChildRef = undefined;
    tmp3Result.childRefCleanup = undefined;
    tmp3Result.handleChildRef = (childInstance) => {
      closure_0.childInstance = childInstance;
      const preferHostInstanceResult = Wrap(5478).preferHostInstance(childInstance);
      const obj2 = Wrap(5478);
      let tmp2 = null;
      if (obj3.isHostInstance(preferHostInstanceResult)) {
        tmp2 = preferHostInstanceResult;
      }
      closure_0.hostInstance = tmp2;
      closure_0.detachChildRef();
      if (null != childInstance) {
        closure_0.attachChildRef(childInstance);
      }
      obj3 = Wrap(5478);
    };
    return tmp3Result;
  }
}
_inherits(Wrap, noop.Component);
const entry = {
  key: "getHostInstance",
  value: function getHostInstance() {
    return this.hostInstance;
  }
};
let items = [
  entry,
  {
    key: "getAnimatableRef",
    value: function getAnimatableRef() {
      let self = this;
      if (obj.reanimatedRefreshesAnimatableRef()) {
        self = Wrap(5478).resolveHostInstance(this);
        const tmpResult = Wrap(5478);
      }
      return self;
    }
  },
  {
    key: "detachChildRef",
    value: function detachChildRef() {
      const self = this;
      if (undefined !== this.childRefCleanup) {
        self.childRefCleanup();
      } else if (self.attachedChildRef) {
        Wrap(5478).assignRef(self.attachedChildRef, null);
        const obj = Wrap(5478);
      }
      self.childRefCleanup = undefined;
      self.attachedChildRef = undefined;
    }
  },
  {
    key: "attachChildRef",
    value: function attachChildRef(childInstance) {
      this.attachedChildRef = this.childRef;
      this.childRefCleanup = Wrap(5478).assignRef(this.attachedChildRef, childInstance);
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      const self = this;
      let tmp = this.childRef !== this.attachedChildRef;
      if (tmp) {
        tmp = null !== self.childInstance;
      }
      if (tmp) {
        self.detachChildRef();
        self.attachChildRef(self.childInstance);
      }
    }
  },
  {
    key: "render",
    value: function render() {
      try {
        const self = this;
        const Children = noop.Children;
        const onlyResult = Children.only(this.props.children);
        self.childRef = onlyResult.props.ref;
        const obj2 = { collapsable: false, ref: self.handleChildRef };
        return noop.cloneElement(onlyResult, obj2, onlyResult.props.children);
      } catch (err) {
        const _Error = Error;
        const error = new Error(Wrap(5434).tagMessage("GestureDetector got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view."));
        throw error;
      }
    }
  }
];
const importDefaultResultResult = _createClass(Wrap, items);
const Reanimated = fn(5474).Reanimated;
let animatedComponent;
if (Reanimated != null) {
  if (Reanimated.default != null) {
    animatedComponent = _default.createAnimatedComponent(importDefaultResultResult);
  }
}
if (animatedComponent == null) {
  animatedComponent = importDefaultResultResult;
}

export const Wrap = importDefaultResultResult;
export const AnimatedWrap = animatedComponent;