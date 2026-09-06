// _runtime/metro/06777__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

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
_possibleConstructorReturnDefault;
function changeEventCalculator(translationX, translationX2) {
  if (undefined === translationX2) {
    let obj = { changeX: null, changeY: null };
    ({ translationX: obj2.changeX, translationY: obj2.changeY } = translationX);
  } else {
    obj = {
      changeX: translationX.translationX - translationX2.translationX,
      changeY: translationX.translationY - translationX2.translationY,
    };
  }
  obj = {};
  const merged = Object.assign(translationX);
  const merged1 = Object.assign(obj);
  return obj;
}
changeEventCalculator.__closure = {};
changeEventCalculator.__workletHash = 1947784830943;
changeEventCalculator.__initData = {
  code: "function changeEventCalculator_Pnpm_panGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={changeX:current.translationX,changeY:current.translationY};}else{changePayload={changeX:current.translationX-previous.translationX,changeY:current.translationY-previous.translationY};}return{...current,...changePayload};}",
};
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
_inherits(PanGesture, fn(6676).ContinousBaseGesture);
const entry = {
  key: "activeOffsetY",
  value: function activeOffsetY(items) {
    const self = this;
    if (Array.isArray(items)) {
      [self.config.activeOffsetYStart, self.config.activeOffsetYEnd] = items;
    } else if (items < 0) {
      self.config.activeOffsetYStart = items;
    } else {
      self.config.activeOffsetYEnd = items;
    }
    return self;
  },
};
let items = [
  entry,
  {
    key: "activeOffsetX",
    value: function activeOffsetX(items) {
      const self = this;
      if (Array.isArray(items)) {
        [self.config.activeOffsetXStart, self.config.activeOffsetXEnd] = items;
      } else if (items < 0) {
        self.config.activeOffsetXStart = items;
      } else {
        self.config.activeOffsetXEnd = items;
      }
      return self;
    },
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
    },
  },
  {
    key: "failOffsetX",
    value: function failOffsetX(items1) {
      const self = this;
      if (Array.isArray(items1)) {
        [self.config.failOffsetXStart, self.config.failOffsetXEnd] = items1;
      } else if (items1 < 0) {
        self.config.failOffsetXStart = items1;
      } else {
        self.config.failOffsetXEnd = items1;
      }
      return self;
    },
  },
  {
    key: "minPointers",
    value: function minPointers(minPointers) {
      this.config.minPointers = minPointers;
      return this;
    },
  },
  {
    key: "maxPointers",
    value: function maxPointers(maxPointers) {
      this.config.maxPointers = maxPointers;
      return this;
    },
  },
  {
    key: "minDistance",
    value: function minDistance(minDist) {
      this.config.minDist = minDist;
      return this;
    },
  },
  {
    key: "minVelocity",
    value: function minVelocity(minVelocity) {
      this.config.minVelocity = minVelocity;
      return this;
    },
  },
  {
    key: "minVelocityX",
    value: function minVelocityX(minVelocityX) {
      this.config.minVelocityX = minVelocityX;
      return this;
    },
  },
  {
    key: "minVelocityY",
    value: function minVelocityY(minVelocityY) {
      this.config.minVelocityY = minVelocityY;
      return this;
    },
  },
  {
    key: "averageTouches",
    value: function averageTouches(avgTouches) {
      this.config.avgTouches = avgTouches;
      return this;
    },
  },
  {
    key: "enableTrackpadTwoFingerGesture",
    value: function enableTrackpadTwoFingerGesture(enableTrackpadTwoFingerGesture) {
      this.config.enableTrackpadTwoFingerGesture = enableTrackpadTwoFingerGesture;
      return this;
    },
  },
  {
    key: "activateAfterLongPress",
    value: function activateAfterLongPress(activateAfterLongPress) {
      this.config.activateAfterLongPress = activateAfterLongPress;
      return this;
    },
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
      const items = [arg0];
      return fn(items);
    },
  },
];

export const PanGesture = _createClass(PanGesture, items);
