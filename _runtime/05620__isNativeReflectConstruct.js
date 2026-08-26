// _runtime/05620__isNativeReflectConstruct.js
import closure_2 from "metro/00093__possibleConstructorReturn.js";
import closure_3 from "00095__getPrototypeOf.js";
import importDefaultResult from "00098__inherits.js";
import importDefaultResult1 from "metro/00042__createClass.js";
import closure_4 from "metro/00041__classCallCheck.js";

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
  } catch (err) {
  }
}
let obj = { UNDEFINED: 0, BEGAN: 1, START: 2, UPDATE: 3, CHANGE: 4, END: 5, FINALIZE: 6, TOUCHES_DOWN: 7, TOUCHES_MOVE: 8, TOUCHES_UP: 9, TOUCHES_CANCEL: 10 };
class Gesture {
  constructor() {
    tmp = closure_4(this, Gesture);
    return;
  }
}
const importDefaultResult1Result = importDefaultResult1(Gesture);
let closure_7 = 0;
class BaseGesture {
  constructor() {
    self = this;
    tmp = closure_4(this, ContinousBaseGesture);
    tmp2 = closure_3;
    obj = closure_3(ContinousBaseGesture);
    tmp3 = closure_2;
    if (_isNativeReflectConstruct()) {
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
importDefaultResult(BaseGesture, importDefaultResult1Result);
obj = {
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
  }
};
let items = [
  obj,
  {
    key: "withRef",
    value: function withRef(ref) {
      this.config.ref = ref;
      return this;
    }
  },
  {
    key: "isWorklet",
    value: function isWorklet(__workletHash) {
      return undefined !== __workletHash.__workletHash;
    }
  },
  {
    key: "onBegin",
    value: function onBegin(onBegin) {
      this.handlers.onBegin = onBegin;
      this.handlers.isWorklet[obj.BEGAN] = this.isWorklet(onBegin);
      return this;
    }
  },
  {
    key: "onStart",
    value: function onStart(onStart) {
      this.handlers.onStart = onStart;
      this.handlers.isWorklet[obj.START] = this.isWorklet(onStart);
      return this;
    }
  },
  {
    key: "onEnd",
    value: function onEnd(onEnd) {
      this.handlers.onEnd = onEnd;
      this.handlers.isWorklet[obj.END] = this.isWorklet(onEnd);
      return this;
    }
  },
  {
    key: "onFinalize",
    value: function onFinalize(onFinalize) {
      this.handlers.onFinalize = onFinalize;
      this.handlers.isWorklet[obj.FINALIZE] = this.isWorklet(onFinalize);
      return this;
    }
  },
  {
    key: "onTouchesDown",
    value: function onTouchesDown(onTouchesDown) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesDown = onTouchesDown;
      this.handlers.isWorklet[obj.TOUCHES_DOWN] = this.isWorklet(onTouchesDown);
      return this;
    }
  },
  {
    key: "onTouchesMove",
    value: function onTouchesMove(fn2, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesMove = fn2;
      this.handlers.isWorklet[obj.TOUCHES_MOVE] = this.isWorklet(fn2);
      return this;
    }
  },
  {
    key: "onTouchesUp",
    value: function onTouchesUp(onTouchesUp) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesUp = onTouchesUp;
      this.handlers.isWorklet[obj.TOUCHES_UP] = this.isWorklet(onTouchesUp);
      return this;
    }
  },
  {
    key: "onTouchesCancelled",
    value: function onTouchesCancelled(fn5, value) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesCancelled = fn5;
      this.handlers.isWorklet[obj.TOUCHES_CANCEL] = this.isWorklet(fn5);
      return this;
    }
  },
  {
    key: "enabled",
    value: function enabled(enabled) {
      this.config.enabled = enabled;
      return this;
    }
  },
  {
    key: "shouldCancelWhenOutside",
    value: function shouldCancelWhenOutside(shouldCancelWhenOutside) {
      this.config.shouldCancelWhenOutside = shouldCancelWhenOutside;
      return this;
    }
  },
  {
    key: "hitSlop",
    value: function hitSlop(closure_22) {
      this.config.hitSlop = closure_22;
      return this;
    }
  },
  {
    key: "activeCursor",
    value: function activeCursor(activeCursor) {
      this.config.activeCursor = activeCursor;
      return this;
    }
  },
  {
    key: "mouseButton",
    value: function mouseButton(mouseButton) {
      this.config.mouseButton = mouseButton;
      return this;
    }
  },
  {
    key: "runOnJS",
    value: function runOnJS(runOnJS) {
      this.config.runOnJS = runOnJS;
      return this;
    }
  },
  {
    key: "simultaneousWithExternalGesture",
    value: function simultaneousWithExternalGesture(gesture2, gesture) {
      const self = this;
      const items = [...arguments];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let tmp3 = nextResult;
          let addDependencyResult = self.addDependency("simultaneousWith", tmp2);
        }
        continue;
      }
      return self;
    }
  },
  {
    key: "requireExternalGestureToFail",
    value: function requireExternalGestureToFail(context, flingDownRef) {
      const self = this;
      const items = [...arguments];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let tmp3 = nextResult;
          let addDependencyResult = self.addDependency("requireToFail", tmp2);
        }
        continue;
      }
      return self;
    }
  },
  {
    key: "blocksExternalGesture",
    value: function blocksExternalGesture(closure_0) {
      const self = this;
      const items = [...arguments];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let tmp3 = nextResult;
          let addDependencyResult = self.addDependency("blocksHandlers", tmp2);
        }
        continue;
      }
      return self;
    }
  },
  {
    key: "withTestId",
    value: function withTestId(testId) {
      this.config.testId = testId;
      return this;
    }
  },
  {
    key: "cancelsTouchesInView",
    value: function cancelsTouchesInView(cancelsTouchesInView) {
      this.config.cancelsTouchesInView = cancelsTouchesInView;
      return this;
    }
  },
  {
    key: "initialize",
    value: function initialize() {
      const self = this;
      obj = ContinousBaseGesture(5621);
      this.handlerTag = obj.getNextHandlerTag();
      obj = {};
      const merged = Object.assign(this.handlers);
      obj.handlerTag = this.handlerTag;
      this.handlers = obj;
      if (this.config.ref) {
        self.config.ref.current = self;
      }
    }
  },
  {
    key: "toGestureArray",
    value: function toGestureArray() {
      const items = [this];
      return items;
    }
  },
  {
    key: "prepare",
    value: function prepare() {

    }
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
        tmp = !ContinousBaseGesture(5604).isRemoteDebuggingEnabled();
        obj = ContinousBaseGesture(5604);
      }
      return tmp;
    }
  }
];
const importDefaultResult1Result1 = importDefaultResult1(BaseGesture, items);
class ContinousBaseGesture {
  constructor() {
    self = this;
    tmp = closure_4(this, ContinousBaseGesture);
    tmp2 = closure_3;
    obj = closure_3(ContinousBaseGesture);
    tmp3 = closure_2;
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
importDefaultResult(ContinousBaseGesture, importDefaultResult1Result1);
obj = {
  key: "onUpdate",
  value: function onUpdate(onUpdate) {
    this.handlers.onUpdate = onUpdate;
    this.handlers.isWorklet[obj.UPDATE] = this.isWorklet(onUpdate);
    return this;
  }
};
const items1 = [
  obj,
  {
    key: "onChange",
    value: function onChange(onChange) {
      this.handlers.onChange = onChange;
      this.handlers.isWorklet[obj.CHANGE] = this.isWorklet(onChange);
      return this;
    }
  },
  {
    key: "manualActivation",
    value: function manualActivation(tmp4Result) {
      this.config.manualActivation = tmp4Result;
      return this;
    }
  }
];

export const CALLBACK_TYPE = obj;
export const Gesture = importDefaultResult1Result;
export const BaseGesture = importDefaultResult1Result1;
export const ContinousBaseGesture = importDefaultResult1(ContinousBaseGesture, items1);