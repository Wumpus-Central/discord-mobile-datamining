// === Module 1728: Keyframe ===

// Module 1728 (Keyframe)
import _createClassDefault from "_createClass" /* 42 */;
import ReanimatedError from "ReanimatedError" /* 1654 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1668 */;
import _mod1683 from "module_1683" /* 1683 */;
import _mod1715 from "module_1715" /* 1715 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let closure_3 = { code: "function pnpm_KeyframeTs1(){const{keyframes,delayFunction,delay,withTiming,Easing,withSequence,initialValues,makeKeyframeKey,callback}=this.__closure;const animations={};const addAnimation=function(key){const keyframePoints=keyframes[key];if(keyframePoints.length===0){return;}const animation=delayFunction(delay,keyframePoints.length===1?withTiming(keyframePoints[0].value,{duration:keyframePoints[0].duration,easing:keyframePoints[0].easing?keyframePoints[0].easing:Easing.linear}):withSequence(...keyframePoints.map(function(keyframePoint){return withTiming(keyframePoint.value,{duration:keyframePoint.duration,easing:keyframePoint.easing?keyframePoint.easing:Easing.linear});})));if(key.includes('transform')){if(!('transform'in animations)){animations.transform=[];}animations.transform.push({[key.split(':')[1]]:animation});}else{animations[key]=animation;}};Object.keys(initialValues).forEach(function(key){if(key.includes('transform')){initialValues[key].forEach(function(transformProp,index){Object.keys(transformProp).forEach(function(transformPropKey){addAnimation(makeKeyframeKey(index,transformPropKey));});});}else{addAnimation(key);}});return{animations:animations,initialValues:initialValues,callback:callback};}" };
const __initData = { code: "function pnpm_KeyframeTs2(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}" };
const __initData2 = { code: "function pnpm_KeyframeTs3(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;}" };
class InnerKeyframe {
  constructor(definitions) {
    const self = this;
    const tmp = _classCallCheck(this, InnerKeyframe);
    this.reduceMotionV = LayoutAnimationType.ReduceMotion.System;
    this.build = () => {
      const delayV = self.delayV;
      const delayFunction = self.getDelayFunction();
      const parseDefinitionsResult = self.parseDefinitions();
      const keyframes = parseDefinitionsResult.keyframes;
      const initialValues = parseDefinitionsResult.initialValues;
      const callbackV = self.callbackV;
      if (!self.parsedAnimation) {
        const fn = function n() {
          const animations = {};
          function addAnimation(arr) {
            let linear;
            if (0 !== keyframes[arr].length) {
              let obj;
              let withTimingResult;
              if (1 === keyframes[arr].length) {
                obj = { duration: keyframes[arr][0].duration, easing: linear };
                let withTiming = self(closure_3_1[3]).withTiming;
                let value = arr[0].value;
                self(closure_3_1[3]);
                if (keyframes[arr][0].easing) {
                  linear = arr[0].easing;
                } else {
                  linear = self(closure_3_1[4]).Easing.linear;
                }
                withTimingResult = withTiming(value, obj);
              } else {
                const tmp4 = self(closure_3_1[3]);
                const withSequence = tmp4.withSequence;
                const items = [];
                HermesBuiltin.arraySpread(items, keyframes[arr].map((duration) => {
                  const obj = { duration: duration.duration, easing: duration.easing || animations(addAnimation[4]).Easing.linear };
                  const withTiming = animations(addAnimation[3]).withTiming;
                  const value = duration.value;
                  animations(addAnimation[3]);
                  duration.easing || animations(addAnimation[4]).Easing.linear;
                  return withTiming(value, obj);
                }), 0);
                withTimingResult = HermesBuiltin.apply(withSequence, items, tmp4);
              }
              const tmp19Result = delayFunction(delayV, withTimingResult);
              if (keyframes[arr].includes("transform")) {
                if (!("transform" in obj)) {
                  obj.transform = [];
                }
                const transform = tmp17.transform;
                const obj2 = {};
                obj2[keyframes[arr].split(":")[1]] = tmp19Result;
                transform.push(obj2);
              } else {
                obj[keyframes[arr]] = tmp19Result;
              }
            }
          }
          let keys = Object.keys(initialValues);
          let item = keys.forEach((arr) => {
            if (arr.includes("transform")) {
              let item = arr.forEach((item, index) => {
                let closure_0 = index;
                const keys = Object.keys(item);
                item = keys.forEach((item) => {
                  if (typeof closure_4_6 === "function") {
                    const _HermesInternal = HermesInternal;
                    tmp("" + tmp2 + "_transform:" + item);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                });
              });
            } else {
              const tmp2 = addAnimation(arr);
            }
          });
          let obj2 = { animations, initialValues, callback: callbackV };
          return obj2;
        };
        let obj = { keyframes, delayFunction, delay: delayV, withTiming: InnerKeyframe(closure_2_1[3]).withTiming, Easing: InnerKeyframe(closure_2_1[4]).Easing, withSequence: InnerKeyframe(closure_2_1[3]).withSequence, initialValues, makeKeyframeKey, callback: callbackV };
        fn.__closure = obj;
        fn.__workletHash = 2209924843920;
        fn.__initData = __initData;
        self.parsedAnimation = fn;
      }
      return self.parsedAnimation;
    };
    this.definitions = definitions;
  }
}
const entry = {
  key: "parseDefinitions",
  value: function parseDefinitions() {
    let getAnimationDuration;
    let self = this;
    const keyframes = {};
    if (this.definitions.from) {
      if (self.definitions[0]) {
        const self6 = this;
        const str3 = "You cannot provide both keyframe 0 and 'from' as they both specified initial values.";
        const self7 = this;
        let reanimatedError = new getAnimationDuration(keyframes[5]).ReanimatedError("You cannot provide both keyframe 0 and 'from' as they both specified initial values.");
        const tmp16 = reanimatedError;
        throw reanimatedError;
      } else {
        let num = 0;
        self.definitions[0] = self.definitions.from;
        delete self.definitions["from"];
      }
    }
    if (self.definitions.to) {
      if (self.definitions[100]) {
        const tmp9 = getAnimationDuration;
        const self4 = this;
        const str2 = "You cannot provide both keyframe 100 and 'to' as they both specified values at the end of the animation.";
        const self5 = this;
        const reanimatedError1 = new getAnimationDuration(keyframes[5]).ReanimatedError("You cannot provide both keyframe 100 and 'to' as they both specified values at the end of the animation.");
        throw reanimatedError1;
      } else {
        self.definitions[100] = self.definitions.to;
        delete self.definitions["to"];
      }
    }
    if (self.definitions[0]) {
      const initialValues = self.definitions[0];
      let _Object = Object;
      let keys = Object.keys(initialValues);
      let item = keys.forEach((item) => {
        if ("transform" === item) {
          const tmp2 = globalThis;
          const _Array = Array;
          if (Array.isArray(first.transform)) {
            const transform = first.transform;
            item = transform.forEach((item, index) => {
              let closure_0 = index;
              const keys = Object.keys(item);
              item = keys.forEach((item) => {
                if (typeof makeKeyframeKey === "function") {
                  const _HermesInternal = HermesInternal;
                  tmp["" + tmp2 + "_transform:" + item] = [];
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
            });
          }
        } else {
          obj[item] = [];
        }
      });
      let num3 = 500;
      if (self.durationV) {
        num3 = self.durationV;
      }
      let _Array = Array;
      const _Object2 = Object;
      let arr = Array.from(Object.keys(self.definitions));
      const _Number = Number;
      const mapped = arr.map(Number);
      getAnimationDuration = function getAnimationDuration(keyframes, arg1) {

      };
      const found = mapped.filter((item) => 0 !== item);
      const sorted = found.sort((arg0, arg1) => arg0 - arg1);
      const item1 = sorted.forEach((item) => {
        let obj;
        let closure_0 = item;
        if (item >= 0) {
          if (item <= 100) {
            const tmp2 = self.definitions[item];
            let transform = tmp2;
            const easing = tmp2.easing;
            delete tmp2["easing"];
            function addKeyPointWith(arg0, arg1) {

            }
            const tmp3 = globalThis;
            const _Object = Object;
            let keys = Object.keys(tmp2);
            item = keys.forEach(function(item) {
              let arr;
              let obj;
              let result;
              const f150166 = (acc, duration) => acc + duration.duration;
              if ("transform" === item) {
                const _Array = Array;
                const tmp15 = transform;
                if (Array.isArray(transform.transform)) {
                  transform = tmp15.transform;
                  item = transform.forEach((item, index) => {
                    let closure_0 = item;
                    const keys = Object.keys(item);
                    item = keys.forEach(function(item) {
                      let arr;
                      let result;
                      if (typeof makeKeyframeKey === "function") {
                        const _HermesInternal = HermesInternal;
                        const combined = "" + tmp2 + "_transform:" + item;
                        if (typeof tmp === "function") {
                          if (combined in index) {
                            if (typeof closure_0 === "function") {
                              const obj = { duration: result - arr.reduce(f150166, 0), value: tmp7, easing: tmp9 };
                              result = tmp8 / 100 * closure_1_3;
                              arr = index[combined];
                              tmp16(obj);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            self = this;
                            const self2 = this;
                            const reanimatedError = new closure_2_0(transform[5]).ReanimatedError("Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
                            throw reanimatedError;
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    });
                  });
                }
              } else if (typeof addKeyPointWith === "function") {
                if (item in obj) {
                  const tmp8 = tmp3[item];
                  if (typeof getAnimationDuration === "function") {
                    obj = { duration: result - arr.reduce(f150166, 0), value: tmp19, easing: tmp2 };
                    arr = tmp3[item];
                    result = tmp / 100 * num3;
                    tmp9(obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  self = this;
                  let self2 = this;
                  let reanimatedError = new ReanimatedError.ReanimatedError("Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
                  const tmp7 = reanimatedError;
                  throw reanimatedError;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
          }
        }
        let reanimatedError = new getAnimationDuration(obj[5]).ReanimatedError("Keyframe should be in between range 0 - 100.");
        throw reanimatedError;
      });
      return { initialValues, keyframes };
    } else {
      const tmp = getAnimationDuration;
      let tmp2 = keyframes;
      let self2 = this;
      const str = "Please provide 0 or 'from' keyframe with initial state of your object.";
      const self3 = this;
      const reanimatedError2 = new getAnimationDuration(keyframes[5]).ReanimatedError("Please provide 0 or 'from' keyframe with initial state of your object.");
      throw reanimatedError2;
    }
  }
};
let items = [
  entry,
  {
    key: "duration",
    value: function duration(durationV) {
      this.durationV = durationV;
      return this;
    }
  },
  {
    key: "delay",
    value: function delay(delayV) {
      this.delayV = delayV;
      return this;
    }
  },
  {
    key: "withCallback",
    value: function withCallback(callbackV) {
      this.callbackV = callbackV;
      return this;
    }
  },
  {
    key: "reduceMotion",
    value: function reduceMotion(reduceMotionV) {
      this.reduceMotionV = reduceMotionV;
      return this;
    }
  },
  {
    key: "getDelayFunction",
    value: function getDelayFunction() {
      let fn;
      const reduceMotionV = this.reduceMotionV;
      if (this.delayV) {
        const fn2 = function t(c10, withSpringResult) {
          const obj = _mod1715;
          return obj.withDelay(c10, withSpringResult, reduceMotionV);
        };
        fn2.__closure = { withDelay: reduceMotionV(1715).withDelay, reduceMotion: reduceMotionV };
        fn2.__workletHash = 6884672498893;
        fn2.__initData = __initData;
        fn = fn2;
        const obj2 = { withDelay: reduceMotionV(1715).withDelay, reduceMotion: reduceMotionV };
      } else {
        fn = function n(arg0, arg1) {
          const obj = _mod1683;
          arg1.reduceMotion = obj.getReduceMotionFromConfig(reduceMotionV);
          return arg1;
        };
        let obj = { getReduceMotionFromConfig: reduceMotionV(1683).getReduceMotionFromConfig, reduceMotion: reduceMotionV };
        fn.__closure = obj;
        fn.__workletHash = 14632587413843;
        fn.__initData = __initData2;
      }
      return fn;
    }
  }
];
function makeKeyframeKey(arg0, arg1) {
  return "" + arg0 + "_transform:" + arg1;
}
makeKeyframeKey.__closure = {};
makeKeyframeKey.__workletHash = 11090453666227;
makeKeyframeKey.__initData = { code: "function makeKeyframeKey_Pnpm_KeyframeTs4(index,transformProp){return index+\"_transform:\"+transformProp;}" };

export const Keyframe = _createClassDefault(InnerKeyframe, items);