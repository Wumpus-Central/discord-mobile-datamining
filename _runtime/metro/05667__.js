// === Module 5667: ? ===

// Module 5667
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _classCallCheck_mod from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

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
let _classCallCheck = _classCallCheck_mod;
_possibleConstructorReturnDefault;
let items = [{ code: "(function changeEventCalculator_Pnpm_panGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={changeX:current.translationX,changeY:current.translationY};}else{changePayload={changeX:current.translationX-previous.translationX,changeY:current.translationY-previous.translationY};}return{...current,...changePayload};})" }];
[tmp4] = items;
function changeEventCalculator(translationX, translationX2) {
  if (undefined === translationX2) {
    ({ translationX: obj2.changeX, translationY: obj2.changeY } = translationX);
    let obj = { changeX: null, changeY: null };
    const obj3 = { changeX: null, changeY: null };
  } else {
    obj = { changeX: translationX.translationX - translationX2.translationX, changeY: translationX.translationY - translationX2.translationY };
  }
  const merged = Object.assign(translationX);
  const merged1 = Object.assign(obj);
  return {};
}
changeEventCalculator.__workletHash = 9504511538526;
changeEventCalculator.__initData = tmp4;
class PanGesture {
  constructor() {
    self = this;
    tmp = closure_0(this, PanGesture);
    tmp2 = c2;
    obj = c2(PanGesture);
    tmp3 = closure_1;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.config = {};
    tmp3Result.handlerName = "PanGestureHandler";
    return tmp3Result;
  }
}
_classCallCheck = PanGesture;
_inherits(PanGesture, fn(5555).ContinousBaseGesture);
const entry = {
  key: "activeOffsetY",
  value: function activeOffsetY(items23) {
    const self = this;
    if (Array.isArray(items23)) {
      [self.config.activeOffsetYStart, self.config.activeOffsetYEnd] = items23;
    } else if (items23 < 0) {
      self.config.activeOffsetYStart = items23;
    } else {
      self.config.activeOffsetYEnd = items23;
    }
    return self;
  }
};
const items1 = [
  entry,
  {
    key: "activeOffsetX",
    value: function activeOffsetX(items18) {
      const self = this;
      if (Array.isArray(items18)) {
        [self.config.activeOffsetXStart, self.config.activeOffsetXEnd] = items18;
      } else if (items18 < 0) {
        self.config.activeOffsetXStart = items18;
      } else {
        self.config.activeOffsetXEnd = items18;
      }
      return self;
    }
  },
  {
    key: "failOffsetY",
    value: function failOffsetY(GestureDetector) {
      const self = this;
      if (Array.isArray(GestureDetector)) {
        [self.config.failOffsetYStart, self.config.failOffsetYEnd] = GestureDetector;
      } else if (GestureDetector < 0) {
        self.config.failOffsetYStart = GestureDetector;
      } else {
        self.config.failOffsetYEnd = GestureDetector;
      }
      return self;
    }
  },
  {
    key: "failOffsetX",
    value: function failOffsetX(items) {
      const self = this;
      if (Array.isArray(items)) {
        [self.config.failOffsetXStart, self.config.failOffsetXEnd] = items;
      } else if (items < 0) {
        self.config.failOffsetXStart = items;
      } else {
        self.config.failOffsetXEnd = items;
      }
      return self;
    }
  },
  {
    key: "minPointers",
    value: function minPointers(minPointers) {
      this.config.minPointers = minPointers;
      return this;
    }
  },
  {
    key: "maxPointers",
    value: function maxPointers(maxPointers) {
      this.config.maxPointers = maxPointers;
      return this;
    }
  },
  {
    key: "minDistance",
    value: function minDistance(MIN_PAN_GESTURE_MOVE) {
      this.config.minDist = MIN_PAN_GESTURE_MOVE;
      return this;
    }
  },
  {
    key: "minVelocity",
    value: function minVelocity(minVelocity) {
      this.config.minVelocity = minVelocity;
      return this;
    }
  },
  {
    key: "minVelocityX",
    value: function minVelocityX(minVelocityX) {
      this.config.minVelocityX = minVelocityX;
      return this;
    }
  },
  {
    key: "minVelocityY",
    value: function minVelocityY(minVelocityY) {
      this.config.minVelocityY = minVelocityY;
      return this;
    }
  },
  {
    key: "averageTouches",
    value: function averageTouches(avgTouches) {
      this.config.avgTouches = avgTouches;
      return this;
    }
  },
  {
    key: "enableTrackpadTwoFingerGesture",
    value: function enableTrackpadTwoFingerGesture(enableTrackpadTwoFingerGesture) {
      this.config.enableTrackpadTwoFingerGesture = enableTrackpadTwoFingerGesture;
      return this;
    }
  },
  {
    key: "activateAfterLongPress",
    value: function activateAfterLongPress(activateAfterLongPress) {
      this.config.activateAfterLongPress = activateAfterLongPress;
      return this;
    }
  },
  {
    key: "onChange",
    value: function onChange(arg0) {
      this.handlers.changeEventCalculator = hasOwnProperty;
      const self = this;
      let fn = _get(_getPrototypeOf(_classCallCheck.prototype), "onChange", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      items = [arg0];
      return fn(items);
    }
  }
];

export const PanGesture = _createClass(PanGesture, items1);