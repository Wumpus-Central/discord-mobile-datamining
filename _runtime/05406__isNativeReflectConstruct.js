// _runtime/05406__isNativeReflectConstruct.js
import PanGesture from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import importDefaultResult from "_createClass";

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
function changeEventCalculator(translationX, translationX2) {
  if (undefined === translationX2) {
    let obj = { changeX: null, changeY: null };
    ({ translationX: obj2[0], translationY: obj2[1] } = translationX);
  } else {
    obj = { changeX: null, changeY: null };
    obj[0] = translationX.translationX - translationX2.translationX;
    obj[1] = translationX.translationY - translationX2.translationY;
  }
  obj = {};
  const merged = Object.assign(translationX);
  const merged1 = Object.assign(obj);
  return obj;
}
changeEventCalculator.__closure = {};
changeEventCalculator.__workletHash = 1947784830943;
changeEventCalculator.__initData = { code: "function changeEventCalculator_Pnpm_panGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={changeX:current.translationX,changeY:current.translationY};}else{changePayload={changeX:current.translationX-previous.translationX,changeY:current.translationY-previous.translationY};}return{...current,...changePayload};}" };
class PanGesture {
  constructor() {
    self = this;
    tmp = PanGesture(this, PanGesture);
    tmp2 = __esModule;
    obj = __esModule(PanGesture);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
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
require("_inherits")(PanGesture, require("_isNativeReflectConstruct").ContinousBaseGesture);
let items = [
  {
    key: "activeOffsetY",
    value: function activeOffsetY(items, items2) {
      const self = this;
      if (Array.isArray(items)) {
        [self.config.activeOffsetYStart, self.config.activeOffsetYEnd] = items;
      } else if (items < 0) {
        self.config.activeOffsetYStart = items;
      } else {
        self.config.activeOffsetYEnd = items;
      }
      return self;
    }
  },
  {
    key: "activeOffsetX",
    value: function activeOffsetX(items, items2) {
      const self = this;
      if (Array.isArray(items)) {
        [self.config.activeOffsetXStart, self.config.activeOffsetXEnd] = items;
      } else if (items < 0) {
        self.config.activeOffsetXStart = items;
      } else {
        self.config.activeOffsetXEnd = items;
      }
      return self;
    }
  },
  {
    key: "failOffsetY",
    value: function failOffsetY(GestureDetector, arg1, BottomSheetHandleContainer) {
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
    value: function minDistance(minDist) {
      this.config.minDist = minDist;
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
      this.handlers.changeEventCalculator = changeEventCalculator;
      const self = this;
      let fn;
      fn = callback2(callback(self.prototype), "onChange", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      return fn(items);
    }
  }
];

export const PanGesture = importDefaultResult(PanGesture, items);