// === Module 1780: SharedTransition ===

// Module 1780 (SharedTransition)
import _createClassDefault from "_createClass" /* 42 */;
import ReanimatedError from "ReanimatedError" /* 1654 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1668 */;
import _mod1683 from "module_1683" /* 1683 */;
import _mod1715 from "module_1715" /* 1715 */;
import _mod1757 from "module_1757" /* 1757 */;
import _mod1779 from "module_1779" /* 1779 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const SUPPORTED_PROPS = ["width", "height", "originX", "originY", "transform", "borderRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"];
const __initData = { code: "function pnpm_SharedTransitionTs1(viewTag,values,progress){const{progressAnimationCallback}=this.__closure;const newStyles=progressAnimationCallback(values,progress);global._notifyAboutProgress(viewTag,newStyles,true);}" };
const __initData2 = { code: "function pnpm_SharedTransitionTs2(values){const{animationFactory,SUPPORTED_PROPS,withTiming,reduceMotion,transitionDuration}=this.__closure;let animations={};const initialValues={};if(animationFactory){animations=animationFactory(values);for(const key in animations){if(!SUPPORTED_PROPS.includes(key)){throw new ReanimatedError(\"The prop '\"+key+\"' is not supported yet.\");}}}else{for(const propName of SUPPORTED_PROPS){if(propName==='transform'){const matrix=values.targetTransformMatrix;animations.transformMatrix=withTiming(matrix,{reduceMotion:reduceMotion,duration:transitionDuration});}else{const capitalizedPropName=\"\"+propName.charAt(0).toUpperCase()+propName.slice(1);const keyToTargetValue=\"target\"+capitalizedPropName;animations[propName]=withTiming(values[keyToTargetValue],{reduceMotion:reduceMotion,duration:transitionDuration});}}}for(const propName in animations){if(propName==='transform'){initialValues.transformMatrix=values.currentTransformMatrix;}else{const capitalizedPropName=propName.charAt(0).toUpperCase()+propName.slice(1);const keyToCurrentValue=\"current\"+capitalizedPropName;initialValues[propName]=values[keyToCurrentValue];}}return{initialValues:initialValues,animations:animations};}" };
const __initData3 = { code: "function pnpm_SharedTransitionTs3(viewTag,values,progress){const{SUPPORTED_PROPS}=this.__closure;const newStyles={};for(const propertyName of SUPPORTED_PROPS){if(propertyName==='transform'){const currentMatrix=values.currentTransformMatrix;const targetMatrix=values.targetTransformMatrix;const newMatrix=new Array(9);for(let i=0;i<9;i++){newMatrix[i]=progress*(targetMatrix[i]-currentMatrix[i])+currentMatrix[i];}newStyles.transformMatrix=newMatrix;}else{const PropertyName=propertyName.charAt(0).toUpperCase()+propertyName.slice(1);const currentPropertyName=\"current\"+PropertyName;const targetPropertyName=\"target\"+PropertyName;const currentValue=values[currentPropertyName];const targetValue=values[targetPropertyName];newStyles[propertyName]=progress*(targetValue-currentValue)+currentValue;}}global._notifyAboutProgress(viewTag,newStyles,true);}" };
class SharedTransition {
  constructor() {
    _classCallCheck(this, SharedTransition);
    this._customAnimationFactory = null;
    this._animation = null;
    this._transitionDuration = 500;
    this._reduceMotion = LayoutAnimationType.ReduceMotion.System;
    this._customProgressAnimation = undefined;
    this._progressAnimation = undefined;
    this._defaultTransitionType = undefined;
  }
}
const entry = {
  key: "custom",
  value: function custom(_customAnimationFactory) {
    this._customAnimationFactory = _customAnimationFactory;
    return this;
  }
};
const items = [
  entry,
  {
    key: "progressAnimation",
    value: function progressAnimation(progressAnimationCallback) {
      const fn = function i(arg0, arg1, arg2) {
        global._notifyAboutProgress(arg0, progressAnimationCallback(arg1, arg2), true);
      };
      fn.__closure = { progressAnimationCallback };
      fn.__workletHash = 10649853891033;
      fn.__initData = __initData;
      this._customProgressAnimation = fn;
      return this;
    }
  },
  {
    key: "duration",
    value: function duration(_transitionDuration) {
      this._transitionDuration = _transitionDuration;
      return this;
    }
  },
  {
    key: "reduceMotion",
    value: function reduceMotion(_reduceMotion) {
      this._reduceMotion = _reduceMotion;
      return this;
    }
  },
  {
    key: "defaultTransitionType",
    value: function defaultTransitionType(_defaultTransitionType) {
      this._defaultTransitionType = _defaultTransitionType;
      return this;
    }
  },
  {
    key: "registerTransition",
    value: function registerTransition(componentViewTag, sharedTransitionTag) {
      const self = this;
      const obj = _mod1683;
      if (!obj.getReduceMotionFromConfig(this.getReduceMotion())) {
        let SHARED_ELEMENT_TRANSITION_PROGRESS;
        const transitionAnimation = self.getTransitionAnimation();
        const progressAnimation = self.getProgressAnimation();
        if (!self._defaultTransitionType) {
          if (self._customAnimationFactory) {
            if (!self._customProgressAnimation) {
              self._defaultTransitionType = LayoutAnimationType.SharedTransitionType.ANIMATION;
            }
          }
          self._defaultTransitionType = LayoutAnimationType.SharedTransitionType.PROGRESS_ANIMATION;
        }
        if (self._defaultTransitionType === LayoutAnimationType.SharedTransitionType.ANIMATION) {
          SHARED_ELEMENT_TRANSITION_PROGRESS = LayoutAnimationType.LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
        } else {
          SHARED_ELEMENT_TRANSITION_PROGRESS = LayoutAnimationType.LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS;
        }
        const tmpResult = _mod1757;
        const result = tmpResult.updateLayoutAnimations(componentViewTag, SHARED_ELEMENT_TRANSITION_PROGRESS, transitionAnimation, sharedTransitionTag, flag);
        const _progressTransitionManager = SharedTransition._progressTransitionManager;
        _progressTransitionManager.addProgressAnimation(componentViewTag, progressAnimation);
      }
    }
  },
  {
    key: "unregisterTransition",
    value: function unregisterTransition(componentViewTag) {
      let SHARED_ELEMENT_TRANSITION_PROGRESS;
      if (this._defaultTransitionType === LayoutAnimationType.SharedTransitionType.ANIMATION) {
        SHARED_ELEMENT_TRANSITION_PROGRESS = LayoutAnimationType.LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
      } else {
        SHARED_ELEMENT_TRANSITION_PROGRESS = LayoutAnimationType.LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS;
      }
      const tmpResult = _mod1757;
      const result = tmpResult.updateLayoutAnimations(componentViewTag, SHARED_ELEMENT_TRANSITION_PROGRESS, undefined, undefined, flag);
      const _progressTransitionManager = SharedTransition._progressTransitionManager;
      const result1 = _progressTransitionManager.removeProgressAnimation(componentViewTag, flag);
    }
  },
  {
    key: "getReduceMotion",
    value: function getReduceMotion() {
      return this._reduceMotion;
    }
  },
  {
    key: "getTransitionAnimation",
    value: function getTransitionAnimation() {
      const self = this;
      if (!this._animation) {
        const animation = self.buildAnimation();
      }
      return self._animation;
    }
  },
  {
    key: "getProgressAnimation",
    value: function getProgressAnimation() {
      const self = this;
      if (!this._progressAnimation) {
        const progressAnimation = self.buildProgressAnimation();
      }
      return self._progressAnimation;
    }
  },
  {
    key: "buildAnimation",
    value: function buildAnimation() {
      const _customAnimationFactory = this._customAnimationFactory;
      const _transitionDuration = this._transitionDuration;
      const _reduceMotion = this._reduceMotion;
      const fn = function t(targetTransformMatrix) {
        let animations;
        const obj = {};
        if (_customAnimationFactory) {
          const tmp20 = _customAnimationFactory(targetTransformMatrix);
          animations = tmp20;
          const keys = Object.keys();
          if (keys !== undefined) {
            animations = tmp20;
            while (keys[tmp] !== undefined) {
              if (SUPPORTED_PROPS.includes(tmp22)) {
                continue;
              } else {
                let tmp25 = globalThis;
                let _HermesInternal2 = HermesInternal;
                let str5 = "' is not supported yet.";
                let str6 = "The prop '";
                let self = this;
                let self2 = this;
                let reanimatedError = new ReanimatedError.ReanimatedError("The prop '" + tmp22 + "' is not supported yet.");
                throw reanimatedError;
              }
            }
          }
        } else {
          const iter = SUPPORTED_PROPS[Symbol.iterator]();
          const nextResult = iter.next();
          animations = obj;
          while (iter !== undefined) {
            let str3 = nextResult;
            if ("transform" === nextResult) {
              targetTransformMatrix = targetTransformMatrix.targetTransformMatrix;
              let obj4 = _mod1715;
              let obj3 = { reduceMotion: _reduceMotion, duration: _transitionDuration };
              obj.transformMatrix = obj4.withTiming(targetTransformMatrix, obj3);
            } else {
              let str4 = str3.charAt(0);
              let formatted = str4.toUpperCase();
              let _HermesInternal = HermesInternal;
              let combined = "target" + formatted + str3.slice(1);
              let obj2 = _mod1715;
              let obj5 = { reduceMotion: _reduceMotion, duration: _transitionDuration };
              obj[str3] = obj2.withTiming(targetTransformMatrix[combined], obj5);
            }
            continue;
          }
        }
        const obj6 = {};
        for (const key10075 in animations) {
          if ("transform" === key10075) {
            obj6.transformMatrix = targetTransformMatrix.currentTransformMatrix;
            continue;
          } else {
            let str7 = key10075.charAt(0);
            let formatted1 = str7.toUpperCase();
            let _HermesInternal3 = HermesInternal;
            obj6[key10075] = targetTransformMatrix["current" + formatted1 + key10075.slice(key10075, 1)];
            continue;
          }
          continue;
        }
        return { initialValues: obj6, animations };
      };
      let obj = { animationFactory: _customAnimationFactory, SUPPORTED_PROPS, withTiming: _transitionDuration(_reduceMotion[6]).withTiming, reduceMotion: _reduceMotion, transitionDuration: _transitionDuration };
      fn.__closure = obj;
      fn.__workletHash = 5349002490567;
      fn.__initData = __initData2;
      this._animation = fn;
    }
  },
  {
    key: "buildProgressAnimation",
    value: function buildProgressAnimation() {
      let self = this;
      if (this._customProgressAnimation) {
        self._progressAnimation = self._customProgressAnimation;
      } else {
        const fn = function t(arg0, arg1, arg2) {
          let currentTransformMatrix;
          let sum;
          let targetTransformMatrix;
          const obj = {};
          const iter = SUPPORTED_PROPS[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let str = nextResult;
            if ("transform" === nextResult) {
              ({ currentTransformMatrix, targetTransformMatrix } = arg1);
              let _Array = Array;
              let self = this;
              let self2 = this;
              let array = new Array(9);
              let tmp9 = array;
              let num2 = 0;
              do {
                tmp9[num2] = arg2 * (targetTransformMatrix[num2] - currentTransformMatrix[num2]) + currentTransformMatrix[num2];
                sum = num2 + 1;
                num2 = sum;
              } while (sum < 9);
              obj.transformMatrix = tmp9;
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
          global._notifyAboutProgress(arg0, obj, true);
        };
        let obj = { SUPPORTED_PROPS };
        fn.__closure = obj;
        let num = 11460342543363;
        fn.__workletHash = 11460342543363;
        fn.__initData = __initData3;
        self._progressAnimation = fn;
      }
    }
  }
];
const entry1 = {
  key: "custom",
  value: function custom(arg0) {
    const obj = Object.create(SharedTransition.prototype);
    _classCallCheck(obj, SharedTransition);
    obj._customAnimationFactory = null;
    obj._animation = null;
    obj._transitionDuration = 500;
    obj._reduceMotion = LayoutAnimationType.ReduceMotion.System;
    obj._customProgressAnimation = undefined;
    obj._progressAnimation = undefined;
    obj._defaultTransitionType = undefined;
    return obj.custom(arg0);
  }
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
      obj._reduceMotion = LayoutAnimationType.ReduceMotion.System;
      obj._customProgressAnimation = undefined;
      obj._progressAnimation = undefined;
      obj._defaultTransitionType = undefined;
      return obj.duration(arg0);
    }
  },
  {
    key: "progressAnimation",
    value: function progressAnimation(arg0) {
      const obj = Object.create(SharedTransition.prototype);
      _classCallCheck(obj, SharedTransition);
      obj._customAnimationFactory = null;
      obj._animation = null;
      obj._transitionDuration = 500;
      obj._reduceMotion = LayoutAnimationType.ReduceMotion.System;
      obj._customProgressAnimation = undefined;
      obj._progressAnimation = undefined;
      obj._defaultTransitionType = undefined;
      return obj.progressAnimation(arg0);
    }
  },
  {
    key: "defaultTransitionType",
    value: function defaultTransitionType(arg0) {
      const obj = Object.create(SharedTransition.prototype);
      _classCallCheck(obj, SharedTransition);
      obj._customAnimationFactory = null;
      obj._animation = null;
      obj._transitionDuration = 500;
      obj._reduceMotion = LayoutAnimationType.ReduceMotion.System;
      obj._customProgressAnimation = undefined;
      obj._progressAnimation = undefined;
      obj._defaultTransitionType = undefined;
      return obj.defaultTransitionType(arg0);
    }
  },
  {
    key: "reduceMotion",
    value: function reduceMotion(arg0) {
      const obj = Object.create(SharedTransition.prototype);
      _classCallCheck(obj, SharedTransition);
      obj._customAnimationFactory = null;
      obj._animation = null;
      obj._transitionDuration = 500;
      obj._reduceMotion = LayoutAnimationType.ReduceMotion.System;
      obj._customProgressAnimation = undefined;
      obj._progressAnimation = undefined;
      obj._defaultTransitionType = undefined;
      return obj.reduceMotion(arg0);
    }
  }
];
const tmp2 = _createClassDefault(SharedTransition, items, items1);
const progressTransitionManager = new _mod1779.ProgressTransitionManager();
tmp2._progressTransitionManager = progressTransitionManager;
const SharedTransition_export = tmp2;

export { SharedTransition_export as SharedTransition };