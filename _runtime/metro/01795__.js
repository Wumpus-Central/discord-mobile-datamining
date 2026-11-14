// _runtime/metro/01795__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

let CSSCallbacksManager = fn;
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
class AnimationCallbacks {
  constructor(arg0) {
    self = this;
    tmp = c2(this, CSSCallbacksManager);
    items = [];
    items[0] = Object.values(closure_0(closure_1[5]).ANIMATION_CALLBACK_PROP_BY_EVENT_TYPE);
    tmp2 = closure_4;
    obj = closure_4(CSSCallbacksManager);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.onMaskChange = global;
    tmp3Result.eventMask = 0;
    return tmp3Result;
  }
}
CSSCallbacksManager = AnimationCallbacks;
_inherits(AnimationCallbacks, fn(1787).CSSCallbackStore);
const entry = {
  key: "getMask",
  value: function getMask() {
    return this.eventMask;
  },
};
let items = [
  entry,
  {
    key: "handleEvent",
    value: function handleEvent(animationName) {
      this.invoke(CSSCallbacksManager(1659).ANIMATION_CALLBACK_PROP_BY_EVENT_TYPE[animationName.type], {
        animationName: animationName.name,
        elapsedTime: animationName.elapsedTime,
      });
    },
  },
  {
    key: "onPresenceChanged",
    value: function onPresenceChanged(arg0) {
      this.eventMask = CSSCallbacksManager(1659).getAnimationEventMaskFromProps(arg0);
      this.onMaskChange();
    },
  },
];
let closure_6 = _createClass(AnimationCallbacks, items);
class TransitionCallbacks {
  constructor(arg0) {
    self = this;
    tmp = c2(this, CSSCallbacksManager);
    items = [];
    items[0] = Object.values(closure_0(closure_1[5]).TRANSITION_CALLBACK_PROP_BY_EVENT_TYPE);
    tmp2 = closure_4;
    obj = closure_4(CSSCallbacksManager);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.onMaskChange = global;
    tmp3Result.eventMask = 0;
    return tmp3Result;
  }
}
CSSCallbacksManager = TransitionCallbacks;
_inherits(TransitionCallbacks, fn(1787).CSSCallbackStore);
const entry1 = {
  key: "getMask",
  value: function getMask() {
    return this.eventMask;
  },
};
const items1 = [
  entry1,
  {
    key: "handleEvent",
    value: function handleEvent(name) {
      this.invoke(CSSCallbacksManager(1659).TRANSITION_CALLBACK_PROP_BY_EVENT_TYPE[name.type], {
        propertyName: name.name,
        elapsedTime: name.elapsedTime,
      });
    },
  },
  {
    key: "onPresenceChanged",
    value: function onPresenceChanged(arg0) {
      this.eventMask = CSSCallbacksManager(1659).getTransitionEventMaskFromProps(arg0);
      this.onMaskChange();
    },
  },
];
let closure_7 = _createClass(TransitionCallbacks, items1);
class CSSCallbacksManager {
  constructor(arg0) {
    self = this;
    tmp = c2(this, CSSCallbacksManager);
    this.viewTag = global;
    updateRegistration = function updateRegistration() {
      return self.updateRegistration();
    };
    tmp2 = new closure_6(updateRegistration);
    this.animationCallbacks = tmp2;
    tmp3 = new metroImportDefault(updateRegistration);
    this.transitionCallbacks = tmp3;
    return;
  }
}
const entry2 = {
  key: "getAnimationEventMask",
  value: function getAnimationEventMask() {
    return this.animationCallbacks.getMask();
  },
};
const items2 = [
  entry2,
  {
    key: "getTransitionEventMask",
    value: function getTransitionEventMask() {
      return this.transitionCallbacks.getMask();
    },
  },
  {
    key: "syncAnimationCallbacks",
    value: function syncAnimationCallbacks(arg0) {
      let obj = arg0;
      if (arg0 == null) {
        obj = {};
      }
      this.animationCallbacks.sync(obj);
    },
  },
  {
    key: "syncTransitionCallbacks",
    value: function syncTransitionCallbacks(arg0) {
      let obj = arg0;
      if (arg0 == null) {
        obj = {};
      }
      this.transitionCallbacks.sync(obj);
    },
  },
  {
    key: "detach",
    value: function detach() {
      this.animationCallbacks.detach();
      this.transitionCallbacks.detach();
    },
  },
  {
    key: "retire",
    value: function retire() {
      const self = this;
      if (-1 !== this.viewTag) {
        CSSCallbacksManager(1659).cssCallbacksRegistry.retire(self.viewTag, self);
        const cssCallbacksRegistry = CSSCallbacksManager(1659).cssCallbacksRegistry;
      }
    },
  },
  {
    key: "handleCSSEvent",
    value: function handleCSSEvent(nextResult) {
      const self = this;
      if (nextResult.type in CSSCallbacksManager(1659).ANIMATION_CALLBACK_PROP_BY_EVENT_TYPE) {
        self.animationCallbacks.handleEvent(nextResult);
        const animationCallbacks = self.animationCallbacks;
      } else if (nextResult.type in CSSCallbacksManager(1659).TRANSITION_CALLBACK_PROP_BY_EVENT_TYPE) {
        self.transitionCallbacks.handleEvent(nextResult);
        const transitionCallbacks = self.transitionCallbacks;
      }
    },
  },
  {
    key: "updateRegistration",
    value: function updateRegistration() {
      const self = this;
      if (-1 !== this.viewTag) {
        const animationEventMask = self.getAnimationEventMask();
        const cssCallbacksRegistry = CSSCallbacksManager(1659).cssCallbacksRegistry;
        if (tmp2) {
          cssCallbacksRegistry.register(self.viewTag, self);
        } else {
          cssCallbacksRegistry.unregister(self.viewTag, self);
        }
        tmp2 = animationEventMask | self.getTransitionEventMask();
      }
    },
  },
];

export default _createClass(CSSCallbacksManager, items2);
