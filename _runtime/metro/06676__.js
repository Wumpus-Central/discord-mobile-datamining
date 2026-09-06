// _runtime/metro/06676__.js
import c2 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";

let ContinousBaseGesture = arg1;
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
const CALLBACK_TYPE = {
  UNDEFINED: 0,
  BEGAN: 1,
  START: 2,
  UPDATE: 3,
  CHANGE: 4,
  END: 5,
  FINALIZE: 6,
  TOUCHES_DOWN: 7,
  TOUCHES_MOVE: 8,
  TOUCHES_UP: 9,
  TOUCHES_CANCEL: 10,
};
class Gesture {
  constructor() {
    tmp = closure_4(this, Gesture);
    return;
  }
}
const importDefaultResult1Result = _createClass(Gesture);
let c7 = 0;
class BaseGesture {
  constructor() {
    self = this;
    tmp = closure_4(this, ContinousBaseGesture);
    tmp2 = closure_3;
    obj = closure_3(ContinousBaseGesture);
    tmp3 = c2;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.gestureId = -1;
    tmp3Result.handlerTag = -1;
    tmp3Result.handlerName = "";
    tmp3Result.config = {};
    tmp3Result.handlers = { gestureId: -1, handlerTag: -1, isWorklet: [] };
    tmp7 = +closure_7;
    closure_7 = tmp7 + 1;
    tmp3Result.gestureId = tmp7;
    tmp3Result.handlers.gestureId = tmp3Result.gestureId;
    return tmp3Result;
  }
}
ContinousBaseGesture = BaseGesture;
_inherits(BaseGesture, importDefaultResult1Result);
const entry = {
  key: "addDependency",
  value: function addDependency(arg0, arg1) {
    if (this.config[arg0]) {
      const _Array = Array;
      let combined = Array().concat(tmp, arg1);
      const ArrayResult = Array();
    } else {
      combined = [arg1];
    }
    this.config[arg0] = combined;
  },
};
let items = [
  entry,
  {
    key: "withRef",
    value: function withRef(ref) {
      this.config.ref = ref;
      return this;
    },
  },
  {
    key: "isWorklet",
    value: function isWorklet(__workletHash) {
      return undefined !== __workletHash.__workletHash;
    },
  },
  {
    key: "onBegin",
    value: function onBegin(onBegin) {
      this.handlers.onBegin = onBegin;
      this.handlers.isWorklet[obj.BEGAN] = this.isWorklet(onBegin);
      return this;
    },
  },
  {
    key: "onStart",
    value: function onStart(onStart) {
      this.handlers.onStart = onStart;
      this.handlers.isWorklet[obj.START] = this.isWorklet(onStart);
      return this;
    },
  },
  {
    key: "onEnd",
    value: function onEnd(onEnd) {
      this.handlers.onEnd = onEnd;
      this.handlers.isWorklet[obj.END] = this.isWorklet(onEnd);
      return this;
    },
  },
  {
    key: "onFinalize",
    value: function onFinalize(onFinalize) {
      this.handlers.onFinalize = onFinalize;
      this.handlers.isWorklet[obj.FINALIZE] = this.isWorklet(onFinalize);
      return this;
    },
  },
  {
    key: "onTouchesDown",
    value: function onTouchesDown(onTouchesDown) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesDown = onTouchesDown;
      this.handlers.isWorklet[obj.TOUCHES_DOWN] = this.isWorklet(onTouchesDown);
      return this;
    },
  },
  {
    key: "onTouchesMove",
    value: function onTouchesMove(fn2) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesMove = fn2;
      this.handlers.isWorklet[obj.TOUCHES_MOVE] = this.isWorklet(fn2);
      return this;
    },
  },
  {
    key: "onTouchesUp",
    value: function onTouchesUp(onTouchesUp) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesUp = onTouchesUp;
      this.handlers.isWorklet[obj.TOUCHES_UP] = this.isWorklet(onTouchesUp);
      return this;
    },
  },
  {
    key: "onTouchesCancelled",
    value: function onTouchesCancelled(fn5) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesCancelled = fn5;
      this.handlers.isWorklet[obj.TOUCHES_CANCEL] = this.isWorklet(fn5);
      return this;
    },
  },
  {
    key: "enabled",
    value: function enabled(enabled) {
      this.config.enabled = enabled;
      return this;
    },
  },
  {
    key: "shouldCancelWhenOutside",
    value: function shouldCancelWhenOutside(shouldCancelWhenOutside) {
      this.config.shouldCancelWhenOutside = shouldCancelWhenOutside;
      return this;
    },
  },
  {
    key: "hitSlop",
    value: function hitSlop(pressRetentionOffset) {
      this.config.hitSlop = pressRetentionOffset;
      return this;
    },
  },
  {
    key: "activeCursor",
    value: function activeCursor(activeCursor) {
      this.config.activeCursor = activeCursor;
      return this;
    },
  },
  {
    key: "mouseButton",
    value: function mouseButton(mouseButton) {
      this.config.mouseButton = mouseButton;
      return this;
    },
  },
  {
    key: "runOnJS",
    value: function runOnJS(runOnJS) {
      this.config.runOnJS = runOnJS;
      return this;
    },
  },
  {
    key: "simultaneousWithExternalGesture",
    value: function simultaneousWithExternalGesture() {
      const self = this;
      const items = [...arguments];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let addDependencyResult = self.addDependency("simultaneousWith", tmp2);
        }
        continue;
      }
      return self;
    },
  },
  {
    key: "requireExternalGestureToFail",
    value: function requireExternalGestureToFail() {
      const self = this;
      const items = [...arguments];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let addDependencyResult = self.addDependency("requireToFail", tmp2);
        }
        continue;
      }
      return self;
    },
  },
  {
    key: "blocksExternalGesture",
    value: function blocksExternalGesture() {
      const self = this;
      const items = [...arguments];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let addDependencyResult = self.addDependency("blocksHandlers", tmp2);
        }
        continue;
      }
      return self;
    },
  },
  {
    key: "withTestId",
    value: function withTestId(testId) {
      this.config.testId = testId;
      return this;
    },
  },
  {
    key: "cancelsTouchesInView",
    value: function cancelsTouchesInView(cancelsTouchesInView) {
      this.config.cancelsTouchesInView = cancelsTouchesInView;
      return this;
    },
  },
  {
    key: "initialize",
    value: function initialize() {
      const self = this;
      let handlers = ContinousBaseGesture(6677);
      this.handlerTag = handlers.getNextHandlerTag();
      handlers = {};
      const merged = Object.assign(this.handlers);
      handlers.handlerTag = this.handlerTag;
      this.handlers = handlers;
      if (this.config.ref) {
        self.config.ref.current = self;
      }
    },
  },
  {
    key: "toGestureArray",
    value: function toGestureArray() {
      const items = [this];
      return items;
    },
  },
  {
    key: "prepare",
    value: function prepare() {},
  },
  {
    key: "shouldUseReanimated",
    get() {
      let tmp = true !== this.config.runOnJS;
      if (tmp) {
        const isWorklet = this.handlers.isWorklet;
        tmp = !isWorklet.includes(false);
      }
      if (tmp) {
        tmp = !ContinousBaseGesture(6660).isRemoteDebuggingEnabled();
        obj = ContinousBaseGesture(6660);
      }
      return tmp;
    },
  },
];
const importDefaultResult1Result1 = _createClass(BaseGesture, items);
class ContinousBaseGesture {
  constructor() {
    self = this;
    tmp = closure_4(this, ContinousBaseGesture);
    tmp2 = closure_3;
    obj = closure_3(ContinousBaseGesture);
    tmp3 = c2;
    if (hasOwnProperty()) {
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
_inherits(ContinousBaseGesture, importDefaultResult1Result1);
const entry1 = {
  key: "onUpdate",
  value: function onUpdate(onUpdate) {
    this.handlers.onUpdate = onUpdate;
    this.handlers.isWorklet[obj.UPDATE] = this.isWorklet(onUpdate);
    return this;
  },
};
const items1 = [
  entry1,
  {
    key: "onChange",
    value: function onChange(onChange) {
      this.handlers.onChange = onChange;
      this.handlers.isWorklet[obj.CHANGE] = this.isWorklet(onChange);
      return this;
    },
  },
  {
    key: "manualActivation",
    value: function manualActivation(tmp4Result) {
      this.config.manualActivation = tmp4Result;
      return this;
    },
  },
];

export { CALLBACK_TYPE };
export const Gesture = importDefaultResult1Result;
export const BaseGesture = importDefaultResult1Result1;
export const ContinousBaseGesture = _createClass(ContinousBaseGesture, items1);
