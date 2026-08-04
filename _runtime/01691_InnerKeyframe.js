import _classCallCheck from "_classCallCheck";

const InnerKeyframe = arg1;
let closure_3 = { code: "function pnpm_KeyframeTs1(){const{keyframes,delayFunction,delay,withTiming,Easing,withSequence,initialValues,makeKeyframeKey,callback}=this.__closure;const animations={};const addAnimation=function(key){const keyframePoints=keyframes[key];if(keyframePoints.length===0){return;}const animation=delayFunction(delay,keyframePoints.length===1?withTiming(keyframePoints[0].value,{duration:keyframePoints[0].duration,easing:keyframePoints[0].easing?keyframePoints[0].easing:Easing.linear}):withSequence(...keyframePoints.map(function(keyframePoint){return withTiming(keyframePoint.value,{duration:keyframePoint.duration,easing:keyframePoint.easing?keyframePoint.easing:Easing.linear});})));if(key.includes('transform')){if(!('transform'in animations)){animations.transform=[];}animations.transform.push({[key.split(':')[1]]:animation});}else{animations[key]=animation;}};Object.keys(initialValues).forEach(function(key){if(key.includes('transform')){initialValues[key].forEach(function(transformProp,index){Object.keys(transformProp).forEach(function(transformPropKey){addAnimation(makeKeyframeKey(index,transformPropKey));});});}else{addAnimation(key);}});return{animations:animations,initialValues:initialValues,callback:callback};}" };
let closure_4 = { code: "function pnpm_KeyframeTs2(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}" };
let closure_5 = { code: "function pnpm_KeyframeTs3(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;}" };
class InnerKeyframe {
  constructor(arg0) {
    self = this;
    tmp = outer1_2(this, self);
    this.reduceMotionV = require("isWorkletFunction").ReduceMotion.System;
    this.build = () => {
      delayV = delayV.delayV;
      const delayFunction = delayV.getDelayFunction();
      const parseDefinitionsResult = delayV.parseDefinitions();
      const keyframes = parseDefinitionsResult.keyframes;
      const initialValues = parseDefinitionsResult.initialValues;
      const callbackV = delayV.callbackV;
      if (!delayV.parsedAnimation) {
        const fn = function n() {
          let obj = {};
          function addAnimation(arr) {
            let first = outer1_2[arr];
            if (0 !== first.length) {
              if (1 === first.length) {
                let obj = delayV(delayFunction[3]);
                obj = { duration: null, easing: null };
                obj[0] = first[0].duration;
                if (first[0].easing) {
                  first = first[0];
                  let linear = first.easing;
                } else {
                  linear = delayV(delayFunction[4]).Easing.linear;
                }
                obj[1] = linear;
                obj.withTiming(first[0].value, obj);
              } else {
                const tmp3 = delayV(delayFunction[3]);
                const withSequence = tmp3.withSequence;
                const items = [];
                HermesBuiltin.arraySpread(first.map((duration) => {
                  let obj = callback(table[3]);
                  obj = { duration: duration.duration, easing: null };
                  obj[1] = duration.easing || callback(table[4]).Easing.linear;
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
                  transform.push(obj);
                } else {
                  tmp15[arr] = tmp17Result;
                }
              }
            }
          }
          let keys = Object.keys(initialValues);
          let item = keys.forEach((arr) => {
            if (arr.includes("transform")) {
              let item = outer1_3[arr].forEach((arg0, arg1) => {
                let closure_0 = arg1;
                const keys = Object.keys(arg0);
                const item = keys.forEach((arg0) => {
                  if (typeof outer3_6 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  outer1_1("" + closure_0 + "_transform:" + arg0);
                });
              });
              arr = outer1_3[arr];
            } else {
              addAnimation(arr);
            }
          });
          obj = { animations: obj, initialValues, callback: callbackV };
          return obj;
        };
        let obj = { keyframes: null, delayFunction: null, delay: null, withTiming: null, Easing: null, withSequence: null, initialValues: null, makeKeyframeKey: null, callback: null };
        obj[0] = keyframes;
        obj[1] = delayFunction;
        obj[2] = delayV;
        obj[3] = self(outer1_1[3]).withTiming;
        obj[4] = self(outer1_1[4]).Easing;
        obj[5] = self(outer1_1[3]).withSequence;
        obj[6] = initialValues;
        obj[7] = outer1_6;
        obj[8] = callbackV;
        fn.__closure = obj;
        fn.__workletHash = 2209924843920;
        fn.__initData = outer1_3;
        tmp.parsedAnimation = fn;
      }
      return delayV.parsedAnimation;
    };
    this.definitions = global;
    return;
  }
}
let items = [
  {
    key: "parseDefinitions",
    value: function parseDefinitions() {
      let self = this;
      self = this;
      let obj = {};
      if (this.definitions.from) {
        if (self.definitions[0]) {
          let reanimatedError = new getAnimationDuration(obj[5]).ReanimatedError("You cannot provide both keyframe 0 and 'from' as they both specified initial values.");
          throw reanimatedError;
        } else {
          self.definitions[0] = self.definitions.from;
          const definitions = self.definitions;
          delete tmp2[tmp];
        }
      }
      if (self.definitions.to) {
        if (self.definitions[100]) {
          const reanimatedError1 = new getAnimationDuration(obj[5]).ReanimatedError("You cannot provide both keyframe 100 and 'to' as they both specified values at the end of the animation.");
          throw reanimatedError1;
        } else {
          self.definitions[100] = self.definitions.to;
          const definitions2 = self.definitions;
          delete tmp2[tmp];
        }
      }
      if (self.definitions[0]) {
        const first = self.definitions[0];
        let _Object = Object;
        let keys = Object.keys(first);
        let item = keys.forEach((arg0) => {
          if ("transform" === arg0) {
            const _Array = Array;
            if (Array.isArray(first.transform)) {
              const transform = tmp3.transform;
              let item = transform.forEach((arg0, arg1) => {
                let closure_0 = arg1;
                const keys = Object.keys(arg0);
                const item = keys.forEach((arg0) => {
                  if (typeof outer2_6 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  outer1_1["" + closure_0 + "_transform:" + arg0] = [];
                });
              });
            }
            tmp3 = first;
          } else {
            obj[arg0] = [];
          }
        });
        let num3 = 500;
        if (self.durationV) {
          num3 = self.durationV;
        }
        let _Array = Array;
        const _Object2 = Object;
        const _Number = Number;
        const mapped = Array.from(Object.keys(self.definitions)).map(Number);
        getAnimationDuration = function getAnimationDuration(arg0) {

        };
        const found = mapped.filter((arg0) => 0 !== arg0);
        const sorted = found.sort((arg0, arg1) => arg0 - arg1);
        const item1 = sorted.forEach((arg0) => {
          let closure_0 = arg0;
          if (arg0 >= 0) {
            if (arg0 <= 100) {
              const easing = tmp4.easing;
              delete tmp2[tmp];
              function addKeyPointWith(arg0, arg1) {

              }
              const _Object = Object;
              let keys = Object.keys(tmp4);
              let item = keys.forEach((arg0) => {
                if ("transform" === arg0) {
                  const _Array = Array;
                  if (Array.isArray(tmp4.transform)) {
                    const transform = tmp15.transform;
                    let item = transform.forEach((arg0, arg1) => {
                      let closure_0 = arg0;
                      let closure_1 = arg1;
                      const keys = Object.keys(arg0);
                      const item = keys.forEach((arg0) => {
                        if (typeof outer3_6 !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        const combined = "" + closure_1 + "_transform:" + arg0;
                        if (typeof tmp !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        if (combined in closure_1) {
                          let arr = tmp6[combined];
                          if (typeof table !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          const obj = { duration: null, value: null, easing: null };
                          const result = tmp4 / 100 * outer1_3;
                          obj[0] = result - tmp6[combined].reduce(() => { ... }, 0);
                          obj[1] = table[arg0];
                          obj[2] = tmp5;
                          arr = arr.push(obj);
                        } else {
                          const reanimatedError = new outer2_0(outer2_1[5]).ReanimatedError("Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
                          throw reanimatedError;
                        }
                        tmp = outer1_3;
                        const tmp2 = closure_1;
                      });
                    });
                  }
                  tmp15 = tmp4;
                } else {
                  if (typeof addKeyPointWith !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (arg0 in tmp4) {
                    let arr = tmp3[arg0];
                    if (typeof closure_0 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    let obj = { duration: null, value: null, easing: null };
                    let result = tmp / 100 * addKeyPointWith;
                    obj[0] = result - tmp3[arg0].reduce((arg0, duration) => arg0 + duration.duration, 0);
                    obj[1] = tmp4[arg0];
                    obj[2] = tmp2;
                    arr = arr.push(obj);
                    const arr2 = tmp3[arg0];
                  } else {
                    let reanimatedError = new getAnimationDuration(obj[5]).ReanimatedError("Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
                    throw reanimatedError;
                  }
                }
              });
            }
          }
          let reanimatedError = new getAnimationDuration(obj[5]).ReanimatedError("Keyframe should be in between range 0 - 100.");
          throw reanimatedError;
        });
        obj = { initialValues: null, keyframes: null };
        obj[0] = first;
        obj[1] = obj;
        return obj;
      } else {
        const reanimatedError2 = new getAnimationDuration(obj[5]).ReanimatedError("Please provide 0 or 'from' keyframe with initial state of your object.");
        throw reanimatedError2;
      }
    }
  },
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
        const fn2 = function t(arg0, arg1) {
          return reduceMotionV(outer1_1[3]).withDelay(arg0, arg1, reduceMotionV);
        };
        let obj = { withDelay: null, reduceMotion: null };
        obj[0] = reduceMotionV(1678).withDelay;
        obj[1] = reduceMotionV;
        fn2.__closure = obj;
        fn2.__workletHash = 6884672498893;
        fn2.__initData = closure_4;
        let fn = fn2;
      } else {
        fn = function n(arg0, arg1) {
          arg1.reduceMotion = reduceMotionV(outer1_1[6]).getReduceMotionFromConfig(reduceMotionV);
          return arg1;
        };
        obj = { getReduceMotionFromConfig: null, reduceMotion: null };
        obj[0] = reduceMotionV(1646).getReduceMotionFromConfig;
        obj[1] = reduceMotionV;
        fn.__closure = obj;
        fn.__workletHash = 14632587413843;
        fn.__initData = closure_5;
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

export const Keyframe = require("_createClass")(InnerKeyframe, items);