// _runtime/01721_InnerKeyframe.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const InnerKeyframe = arg1;
let closure_3 = { code: "function pnpm_KeyframeTs1(){const{keyframes,delayFunction,delay,withTiming,Easing,withSequence,initialValues,makeKeyframeKey,callback}=this.__closure;const animations={};const addAnimation=function(key){const keyframePoints=keyframes[key];if(keyframePoints.length===0){return;}const animation=delayFunction(delay,keyframePoints.length===1?withTiming(keyframePoints[0].value,{duration:keyframePoints[0].duration,easing:keyframePoints[0].easing?keyframePoints[0].easing:Easing.linear}):withSequence(...keyframePoints.map(function(keyframePoint){return withTiming(keyframePoint.value,{duration:keyframePoint.duration,easing:keyframePoint.easing?keyframePoint.easing:Easing.linear});})));if(key.includes('transform')){if(!('transform'in animations)){animations.transform=[];}animations.transform.push({[key.split(':')[1]]:animation});}else{animations[key]=animation;}};Object.keys(initialValues).forEach(function(key){if(key.includes('transform')){initialValues[key].forEach(function(transformProp,index){Object.keys(transformProp).forEach(function(transformPropKey){addAnimation(makeKeyframeKey(index,transformPropKey));});});}else{addAnimation(key);}});return{animations:animations,initialValues:initialValues,callback:callback};}" };
const __initData = { code: "function pnpm_KeyframeTs2(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}" };
const __initData2 = { code: "function pnpm_KeyframeTs3(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;}" };
class InnerKeyframe {
  constructor(arg0) {
    self = this;
    tmp = c2(this, InnerKeyframe);
    this.reduceMotionV = closure_0(closure_1[2]).ReduceMotion.System;
    this.build = () => {
      const delayV = self.delayV;
      const delayFunction = self.getDelayFunction();
      const parseDefinitionsResult = self.parseDefinitions();
      const keyframes = parseDefinitionsResult.keyframes;
      const initialValues = parseDefinitionsResult.initialValues;
      const callbackV = self.callbackV;
      if (!self.parsedAnimation) {
        const fn = function n() {
          let animations = {};
          function addAnimation(arr) {
            let first = keyframes[arr];
            if (0 !== first.length) {
              if (1 === first.length) {
                self(1708);
                let obj = { duration: first[0].duration, easing: null };
                if (first[0].easing) {
                  first = first[0];
                  let linear = first.easing;
                } else {
                  linear = self(1688).Easing.linear;
                }
                obj.easing = linear;
                obj.withTiming(first[0].value, obj);
              } else {
                const tmp3 = self(1708);
                const withSequence = tmp3.withSequence;
                const items = [];
                HermesBuiltin.arraySpread(first.map((duration) => {
                  animations(addAnimation[3]);
                  const obj = { duration: duration.duration, easing: duration.easing || animations(addAnimation[4]).Easing.linear };
                  return obj.withTiming(duration.value, obj);
                }), 0);
                const tmp17Result = tmp17(tmp18, HermesBuiltin.apply(items, tmp3));
                if (arr.includes("transform")) {
                  if (!("transform" in tmp15)) {
                    tmp15.transform = [];
                  }
                  const transform = tmp15.transform;
                  obj = {};
                  obj[arr.split(":")[1]] = tmp17Result;
                  arr = transform.push(obj);
                } else {
                  tmp15[arr] = tmp17Result;
                }
              }
            }
          }
          let keys = Object.keys(initialValues);
          let item = keys.forEach((arr) => {
            if (arr.includes("transform")) {
              let item = arr.forEach((item, index) => {
                closure_0 = index;
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
              addAnimation(arr);
            }
          });
          animations = { animations, initialValues, callback: callbackV };
          return animations;
        };
        let obj = { keyframes, delayFunction, delay: delayV, withTiming: InnerKeyframe(1708).withTiming, Easing: InnerKeyframe(1688).Easing, withSequence: InnerKeyframe(1708).withSequence, initialValues, makeKeyframeKey, callback: callbackV };
        fn.__closure = obj;
        fn.__workletHash = 2209924843920;
        fn.__initData = __initData;
        self.parsedAnimation = fn;
      }
      return self.parsedAnimation;
    };
    this.definitions = global;
    return;
  }
}
const entry = {
  key: "parseDefinitions",
  value: function parseDefinitions() {
    const self = this;
    let keyframes = {};
    if (this.definitions.from) {
      if (self.definitions[0]) {
        let reanimatedError = new getAnimationDuration(keyframes[5]).ReanimatedError("You cannot provide both keyframe 0 and 'from' as they both specified initial values.");
        throw reanimatedError;
      } else {
        self.definitions[0] = self.definitions.from;
        const definitions = self.definitions;
        delete tmp2[tmp];
      }
    }
    if (self.definitions.to) {
      if (self.definitions[100]) {
        const reanimatedError1 = new getAnimationDuration(keyframes[5]).ReanimatedError("You cannot provide both keyframe 100 and 'to' as they both specified values at the end of the animation.");
        throw reanimatedError1;
      } else {
        self.definitions[100] = self.definitions.to;
        const definitions2 = self.definitions;
        delete tmp2[tmp];
      }
    }
    if (self.definitions[0]) {
      const initialValues = self.definitions[0];
      let _Object = Object;
      let keys = Object.keys(initialValues);
      let item = keys.forEach((item) => {
        if ("transform" === item) {
          const _Array = Array;
          if (Array.isArray(first.transform)) {
            const transform = first.transform;
            item = transform.forEach((item, index) => {
              closure_0 = index;
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
      let _Array = Array;
      const _Object2 = Object;
      const _Number = Number;
      const mapped = Array.from(Object.keys(self.definitions)).map(Number);
      getAnimationDuration = function getAnimationDuration(keyframes, arg1) {

      };
      const found = mapped.filter((item) => 0 !== item);
      const sorted = found.sort((arg0, arg1) => arg0 - arg1);
      const item1 = sorted.forEach((item) => {
        closure_0 = item;
        if (item >= 0) {
          if (item <= 100) {
            let transform = tmp4;
            const easing = tmp4.easing;
            delete tmp2[tmp];
            function addKeyPointWith(arg0, arg1) {

            }
            const _Object = Object;
            let keys = Object.keys(tmp4);
            item = keys.forEach((item) => {
              if ("transform" === item) {
                const _Array = Array;
                if (Array.isArray(transform.transform)) {
                  transform = tmp16.transform;
                  item = transform.forEach((item, index) => {
                    closure_0 = item;
                    const keys = Object.keys(item);
                    item = keys.forEach((item) => {
                      if (typeof makeKeyframeKey === "function") {
                        const _HermesInternal = HermesInternal;
                        const combined = "" + tmp2 + "_transform:" + item;
                        if (typeof tmp === "function") {
                          if (combined in index) {
                            if (typeof closure_0 === "function") {
                              const obj = { duration: null, value: null, easing: null };
                              const result = tmp8 / 100 * closure_1_3;
                              obj.duration = result - index[combined].reduce(() => { ... }, 0);
                              obj.value = tmp7;
                              obj.easing = tmp9;
                              tmp17(obj);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            const reanimatedError = new item(transform[5]).ReanimatedError("Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
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
                tmp16 = transform;
              } else if (typeof addKeyPointWith === "function") {
                if (item in obj) {
                  if (typeof getAnimationDuration === "function") {
                    obj = { duration: null, value: null, easing: null };
                    let result = tmp / 100 * num3;
                    obj.duration = result - tmp3[item].reduce((acc, duration) => acc + duration.duration, 0);
                    obj.value = tmp20;
                    obj.easing = tmp2;
                    tmp10(obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let reanimatedError = new InnerKeyframe(1647).ReanimatedError("Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
                  throw reanimatedError;
                }
                tmp3 = obj;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
          }
        }
        let reanimatedError = new getAnimationDuration(obj[5]).ReanimatedError("Keyframe should be in between range 0 - 100.");
        throw reanimatedError;
      });
      keyframes = { initialValues, keyframes: null };
      keyframes.keyframes = keyframes;
      return keyframes;
    } else {
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
      const reduceMotionV = this.reduceMotionV;
      if (this.delayV) {
        const fn2 = function t(c12, tmpResult) {
          return InnerKeyframe(1708).withDelay(c12, tmpResult, reduceMotionV);
        };
        let obj = { withDelay: reduceMotionV(1708).withDelay, reduceMotion: reduceMotionV };
        fn2.__closure = obj;
        fn2.__workletHash = 6884672498893;
        fn2.__initData = __initData;
        let fn = fn2;
      } else {
        fn = function n(arg0, arg1) {
          arg1.reduceMotion = InnerKeyframe(1676).getReduceMotionFromConfig(reduceMotionV);
          return arg1;
        };
        obj = { getReduceMotionFromConfig: reduceMotionV(1676).getReduceMotionFromConfig, reduceMotion: reduceMotionV };
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