// _runtime/06161_CALLBACK_TYPE.js
import _mod6162 from "metro/06162__.js";
import c2 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const require = globalThis.__r;

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
    _classCallCheck(this, Gesture);
  }
}
const importDefaultResult1Result = _createClass(Gesture);
let closure_7 = 0;
class BaseGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, BaseGesture);
    const obj = _getPrototypeOf(BaseGesture);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = c2(self, constructResult);
    tmp3Result.gestureId = -1;
    tmp3Result.handlerTag = -1;
    tmp3Result.handlerName = "";
    tmp3Result.config = {};
    tmp3Result.handlers = { gestureId: -1, handlerTag: -1, isWorklet: [] };
    closure_7 = tmp7 + 1;
    tmp3Result.gestureId = +closure_7;
    tmp3Result.handlers.gestureId = tmp3Result.gestureId;
    return tmp3Result;
  }
}
_inherits(BaseGesture, importDefaultResult1Result);
const entry = {
  key: "addDependency",
  value: function addDependency(blocksHandlers, arg1) {
    let combined;
    const config = this.config;
    if (this.config[blocksHandlers]) {
      const _Array = Array;
      const ArrayResult = Array();
      combined = ArrayResult.concat(tmp, arg1);
    } else {
      combined = [arg1];
    }
    config[blocksHandlers] = combined;
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
    value: function onTouchesCancelled(fn3) {
      this.config.needsPointerData = true;
      this.handlers.onTouchesCancelled = fn3;
      this.handlers.isWorklet[obj.TOUCHES_CANCEL] = this.isWorklet(fn3);
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
      const obj = _mod6162;
      this.handlerTag = obj.getNextHandlerTag();
      const obj2 = { handlerTag: this.handlerTag };
      const merged = Object.assign(this.handlers);
      this.handlers = obj2;
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
        const obj = require("tagMessage");
        tmp = !obj.isRemoteDebuggingEnabled();
      }
      return tmp;
    },
  },
];
const importDefaultResult1Result1 = _createClass(BaseGesture, items);
class ContinousBaseGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ContinousBaseGesture);
    const obj = _getPrototypeOf(ContinousBaseGesture);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c2(self, constructResult);
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
const Gesture_export = importDefaultResult1Result;
const BaseGesture_export = importDefaultResult1Result1;
const ContinousBaseGesture_export = _createClass(ContinousBaseGesture, items1);

export { CALLBACK_TYPE };
export { Gesture_export as Gesture };
export { BaseGesture_export as BaseGesture };
export { ContinousBaseGesture_export as ContinousBaseGesture };
