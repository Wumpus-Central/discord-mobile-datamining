// _runtime/01773_SharedTransition.js
import _createClassDefault from "metro/00042__createClass.js";
import _mod1647 from "metro/01647__.js";
import _mod1708 from "metro/01708__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const SharedTransition = global;
require = fn;
const SUPPORTED_PROPS = [
  "width",
  "height",
  "originX",
  "originY",
  "transform",
  "borderRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
];
const __initData = {
  code: "function pnpm_SharedTransitionTs1(viewTag,values,progress){const{progressAnimationCallback}=this.__closure;const newStyles=progressAnimationCallback(values,progress);global._notifyAboutProgress(viewTag,newStyles,true);}",
};
const __initData2 = {
  code: 'function pnpm_SharedTransitionTs2(values){const{animationFactory,SUPPORTED_PROPS,withTiming,reduceMotion,transitionDuration}=this.__closure;let animations={};const initialValues={};if(animationFactory){animations=animationFactory(values);for(const key in animations){if(!SUPPORTED_PROPS.includes(key)){throw new ReanimatedError("The prop \'"+key+"\' is not supported yet.");}}}else{for(const propName of SUPPORTED_PROPS){if(propName===\'transform\'){const matrix=values.targetTransformMatrix;animations.transformMatrix=withTiming(matrix,{reduceMotion:reduceMotion,duration:transitionDuration});}else{const capitalizedPropName=""+propName.charAt(0).toUpperCase()+propName.slice(1);const keyToTargetValue="target"+capitalizedPropName;animations[propName]=withTiming(values[keyToTargetValue],{reduceMotion:reduceMotion,duration:transitionDuration});}}}for(const propName in animations){if(propName===\'transform\'){initialValues.transformMatrix=values.currentTransformMatrix;}else{const capitalizedPropName=propName.charAt(0).toUpperCase()+propName.slice(1);const keyToCurrentValue="current"+capitalizedPropName;initialValues[propName]=values[keyToCurrentValue];}}return{initialValues:initialValues,animations:animations};}',
};
const __initData3 = {
  code: 'function pnpm_SharedTransitionTs3(viewTag,values,progress){const{SUPPORTED_PROPS}=this.__closure;const newStyles={};for(const propertyName of SUPPORTED_PROPS){if(propertyName===\'transform\'){const currentMatrix=values.currentTransformMatrix;const targetMatrix=values.targetTransformMatrix;const newMatrix=new Array(9);for(let i=0;i<9;i++){newMatrix[i]=progress*(targetMatrix[i]-currentMatrix[i])+currentMatrix[i];}newStyles.transformMatrix=newMatrix;}else{const PropertyName=propertyName.charAt(0).toUpperCase()+propertyName.slice(1);const currentPropertyName="current"+PropertyName;const targetPropertyName="target"+PropertyName;const currentValue=values[currentPropertyName];const targetValue=values[targetPropertyName];newStyles[propertyName]=progress*(targetValue-currentValue)+currentValue;}}global._notifyAboutProgress(viewTag,newStyles,true);}',
};
class SharedTransition {
  constructor() {
    tmp = closure_3(this, SharedTransition);
    this._customAnimationFactory = null;
    this._animation = null;
    this._transitionDuration = 500;
    this._reduceMotion = closure_1(c2[2]).ReduceMotion.System;
    this._customProgressAnimation = undefined;
    this._progressAnimation = undefined;
    this._defaultTransitionType = undefined;
    return;
  }
}
const entry = {
  key: "custom",
  value: function custom(_customAnimationFactory) {
    this._customAnimationFactory = _customAnimationFactory;
    return this;
  },
};
const items = [
  entry,
  {
    key: "progressAnimation",
    value: function progressAnimation(progressAnimationCallback) {
      const fn = function i(arg0, arg1, arg2) {
        SharedTransition._notifyAboutProgress(arg0, progressAnimationCallback(arg1, arg2), true);
      };
      fn.__closure = { progressAnimationCallback };
      fn.__workletHash = 10649853891033;
      fn.__initData = __initData;
      this._customProgressAnimation = fn;
      return this;
    },
  },
  {
    key: "duration",
    value: function duration(_transitionDuration) {
      this._transitionDuration = _transitionDuration;
      return this;
    },
  },
  {
    key: "reduceMotion",
    value: function reduceMotion(_reduceMotion) {
      this._reduceMotion = _reduceMotion;
      return this;
    },
  },
  {
    key: "defaultTransitionType",
    value: function defaultTransitionType(_defaultTransitionType) {
      this._defaultTransitionType = _defaultTransitionType;
      return this;
    },
  },
  {
    key: "registerTransition",
    value: function registerTransition(componentViewTag, sharedTransitionTag) {
      if (flag === undefined) {
        flag = false;
      }
      const self = this;
      let obj = _require;
      let _progressTransitionManager = dependencyMap;
      if (!obj2.getReduceMotionFromConfig(this.getReduceMotion())) {
        const transitionAnimation = self.getTransitionAnimation();
        const progressAnimation = self.getProgressAnimation();
        if (!self._defaultTransitionType) {
          if (self._customAnimationFactory) {
            if (!self._customProgressAnimation) {
              self._defaultTransitionType = obj(1661).SharedTransitionType.ANIMATION;
            }
          }
          self._defaultTransitionType = obj(1661).SharedTransitionType.PROGRESS_ANIMATION;
        }
        if (self._defaultTransitionType === obj(1661).SharedTransitionType.ANIMATION) {
          let SHARED_ELEMENT_TRANSITION_PROGRESS = obj(1661).LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
        } else {
          SHARED_ELEMENT_TRANSITION_PROGRESS = obj(1661).LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS;
        }
        obj = obj(1750);
        const result = obj.updateLayoutAnimations(
          componentViewTag,
          SHARED_ELEMENT_TRANSITION_PROGRESS,
          transitionAnimation,
          sharedTransitionTag,
          flag,
        );
        _progressTransitionManager = SharedTransition._progressTransitionManager;
        _progressTransitionManager.addProgressAnimation(componentViewTag, progressAnimation);
      }
      obj2 = require("metro/01676__.js");
    },
  },
  {
    key: "unregisterTransition",
    value: function unregisterTransition(componentViewTag) {
      if (flag === undefined) {
        flag = false;
      }
      if (this._defaultTransitionType === require("metro/01661__.js").SharedTransitionType.ANIMATION) {
        let SHARED_ELEMENT_TRANSITION_PROGRESS =
          require("metro/01661__.js").LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
      } else {
        SHARED_ELEMENT_TRANSITION_PROGRESS =
          require("metro/01661__.js").LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS;
      }
      const result = require("metro/01750__.js").updateLayoutAnimations(
        componentViewTag,
        SHARED_ELEMENT_TRANSITION_PROGRESS,
        undefined,
        undefined,
        flag,
      );
      const _progressTransitionManager = SharedTransition._progressTransitionManager;
      const result1 = _progressTransitionManager.removeProgressAnimation(componentViewTag, flag);
      const tmpResult = require("metro/01750__.js");
    },
  },
  {
    key: "getReduceMotion",
    value: function getReduceMotion() {
      return this._reduceMotion;
    },
  },
  {
    key: "getTransitionAnimation",
    value: function getTransitionAnimation() {
      const self = this;
      if (!this._animation) {
        const animation = self.buildAnimation();
      }
      return self._animation;
    },
  },
  {
    key: "getProgressAnimation",
    value: function getProgressAnimation() {
      const self = this;
      if (!this._progressAnimation) {
        const progressAnimation = self.buildProgressAnimation();
      }
      return self._progressAnimation;
    },
  },
  {
    key: "buildAnimation",
    value: function buildAnimation() {
      const _customAnimationFactory = this._customAnimationFactory;
      const _transitionDuration = this._transitionDuration;
      const _reduceMotion = this._reduceMotion;
      const fn = function t(targetTransformMatrix) {
        let obj = {};
        if (_customAnimationFactory) {
          const tmp20 = _customAnimationFactory(targetTransformMatrix);
          let animations = tmp20;
          const keys = Object.keys();
          if (keys !== undefined) {
            animations = tmp20;
            while (keys[tmp] !== undefined) {
              if (closure_4.includes(tmp22)) {
                continue;
              } else {
                let tmp25 = globalThis;
                let _HermesInternal2 = HermesInternal;
                let str5 = "' is not supported yet.";
                let str6 = "The prop '";
                let tmp26 = new.target;
                let tmp27 = new.target;
                let reanimatedError = new _mod1647.ReanimatedError("The prop '" + tmp22 + "' is not supported yet.");
                throw reanimatedError;
              }
            }
          }
        } else {
          const iter = closure_4[Symbol.iterator]();
          const nextResult = iter.next();
          animations = obj;
          while (iter !== undefined) {
            let str3 = nextResult;
            if ("transform" === nextResult) {
              let obj4 = _mod1708;
              obj = { reduceMotion: _reduceMotion, duration: _transitionDuration };
              obj.transformMatrix = obj4.withTiming(targetTransformMatrix.targetTransformMatrix, obj);
            } else {
              let str4 = str3.charAt(0);
              let formatted = str4.toUpperCase();
              let _HermesInternal = HermesInternal;
              let combined = "target" + formatted + str3.slice(1);
              let obj1 = _mod1708;
              obj = { reduceMotion: _reduceMotion, duration: _transitionDuration };
              obj[str3] = obj1.withTiming(targetTransformMatrix[combined], obj);
            }
            continue;
          }
        }
        obj1 = {};
        for (const key10075 in animations) {
          if ("transform" === key10075) {
            obj1.transformMatrix = arg0.currentTransformMatrix;
            continue;
          } else {
            let str7 = key10075.charAt(0);
            let formatted1 = str7.toUpperCase();
            let _HermesInternal3 = HermesInternal;
            obj1[key10075] = arg0["current" + formatted1 + key10075.slice(key10075, 1)];
            continue;
          }
          continue;
        }
        return { initialValues: obj1, animations };
      };
      fn.__closure = {
        animationFactory: _customAnimationFactory,
        SUPPORTED_PROPS,
        withTiming: _transitionDuration(_reduceMotion[6]).withTiming,
        reduceMotion: _reduceMotion,
        transitionDuration: _transitionDuration,
      };
      fn.__workletHash = 5349002490567;
      fn.__initData = __initData2;
      this._animation = fn;
    },
  },
  {
    key: "buildProgressAnimation",
    value: function buildProgressAnimation() {
      const self = this;
      if (this._customProgressAnimation) {
        self._progressAnimation = self._customProgressAnimation;
      } else {
        const fn = function t(arg0, arg1, arg2) {
          const obj = {};
          const iter = dependencyMap[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let str = nextResult;
            if ("transform" === nextResult) {
              ({ currentTransformMatrix, targetTransformMatrix } = arg1);
              let _Array = Array;
              let tmp8 = new.target;
              let tmp9 = new.target;
              let array = new Array(9);
              let tmp11 = array;
              let num2 = 0;
              do {
                tmp11[num2] =
                  arg2 * (targetTransformMatrix[num2] - currentTransformMatrix[num2]) + currentTransformMatrix[num2];
                sum = num2 + 1;
                num2 = sum;
              } while (sum < 9);
              obj.transformMatrix = tmp11;
            } else {
              let str2 = str.charAt(0);
              let formatted = str2.toUpperCase();
              let sum1 = formatted + str.slice(1);
              let _HermesInternal = HermesInternal;
              let _HermesInternal2 = HermesInternal;
              let combined = "target" + sum1;
              let tmp7 = arg1["current" + sum1];
              obj[str] = arg2 * (arg1[combined] - tmp7) + tmp7;
            }
            continue;
          }
          SharedTransition._notifyAboutProgress(arg0, obj, true);
        };
        let obj = { SUPPORTED_PROPS };
        fn.__closure = obj;
        fn.__workletHash = 11460342543363;
        fn.__initData = __initData3;
        self._progressAnimation = fn;
      }
    },
  },
];
const entry1 = {
  key: "custom",
  value: function custom(arg0) {
    const obj = Object.create(SharedTransition.prototype);
    _classCallCheck(obj, SharedTransition);
    obj._customAnimationFactory = null;
    obj._animation = null;
    obj._transitionDuration = 500;
    obj._reduceMotion = require("metro/01661__.js").ReduceMotion.System;
    obj._customProgressAnimation = undefined;
    obj._progressAnimation = undefined;
    obj._defaultTransitionType = undefined;
    return obj.custom(arg0);
  },
};
const items1 = [
  entry1,
  {
    key: "duration",
    value: function duration(arg0) {
      const obj = Object.create(SharedTransition.prototype);
      _classCallCheck(obj, SharedTransition);
      obj._customAnimationFactory = null;
      obj._animation = null;
      obj._transitionDuration = 500;
      obj._reduceMotion = require("metro/01661__.js").ReduceMotion.System;
      obj._customProgressAnimation = undefined;
      obj._progressAnimation = undefined;
      obj._defaultTransitionType = undefined;
      return obj.duration(arg0);
    },
  },
  {
    key: "progressAnimation",
    value: function progressAnimation(arg0) {
      const obj = Object.create(SharedTransition.prototype);
      _classCallCheck(obj, SharedTransition);
      obj._customAnimationFactory = null;
      obj._animation = null;
      obj._transitionDuration = 500;
      obj._reduceMotion = require("metro/01661__.js").ReduceMotion.System;
      obj._customProgressAnimation = undefined;
      obj._progressAnimation = undefined;
      obj._defaultTransitionType = undefined;
      return obj.progressAnimation(arg0);
    },
  },
  {
    key: "defaultTransitionType",
    value: function defaultTransitionType(arg0) {
      const obj = Object.create(SharedTransition.prototype);
      _classCallCheck(obj, SharedTransition);
      obj._customAnimationFactory = null;
      obj._animation = null;
      obj._transitionDuration = 500;
      obj._reduceMotion = require("metro/01661__.js").ReduceMotion.System;
      obj._customProgressAnimation = undefined;
      obj._progressAnimation = undefined;
      obj._defaultTransitionType = undefined;
      return obj.defaultTransitionType(arg0);
    },
  },
  {
    key: "reduceMotion",
    value: function reduceMotion(arg0) {
      const obj = Object.create(SharedTransition.prototype);
      _classCallCheck(obj, SharedTransition);
      obj._customAnimationFactory = null;
      obj._animation = null;
      obj._transitionDuration = 500;
      obj._reduceMotion = require("metro/01661__.js").ReduceMotion.System;
      obj._customProgressAnimation = undefined;
      obj._progressAnimation = undefined;
      obj._defaultTransitionType = undefined;
      return obj.reduceMotion(arg0);
    },
  },
];
const tmp2 = _createClassDefault(SharedTransition, items, items1);
const progressTransitionManager = new fn(1772).ProgressTransitionManager();
tmp2._progressTransitionManager = progressTransitionManager;

export const SharedTransition = tmp2;
