// === Module 1875: Keyframe ===

// Module 1875 (Keyframe)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const InnerKeyframe = arg1;
let closure_3 = { code: "(function pnpm_KeyframeTs1(){let[keyframes,delayFunction,delay,withTiming,Easing,withSequence,initialValues,makeKeyframeKey,callback]=this.__closure;const animations={};const addAnimation=function(key){const keyframePoints=keyframes[key];if(keyframePoints.length===0){return;}const animation=delayFunction(delay,keyframePoints.length===1?withTiming(keyframePoints[0].value,{duration:keyframePoints[0].duration,easing:keyframePoints[0].easing?keyframePoints[0].easing:Easing.linear}):withSequence(...keyframePoints.map(function(keyframePoint){return withTiming(keyframePoint.value,{duration:keyframePoint.duration,easing:keyframePoint.easing?keyframePoint.easing:Easing.linear});})));if(key.includes('transform')){if(!('transform'in animations)){animations.transform=[];}animations.transform.push({[key.split(':')[1]]:animation});}else{animations[key]=animation;}};Object.keys(initialValues).forEach(function(key){if(key.includes('transform')){initialValues[key].forEach(function(transformProp,index){Object.keys(transformProp).forEach(function(transformPropKey){addAnimation(makeKeyframeKey(index,transformPropKey));});});}else{addAnimation(key);}});return{animations:animations,initialValues:initialValues,callback:callback};})" };
let closure_4 = { code: "(function pnpm_KeyframeTs2(delay,animation){let[withDelay,reduceMotion]=this.__closure;return withDelay(delay,animation,reduceMotion);})" };
let closure_5 = { code: "(function pnpm_KeyframeTs3(_,animation){let[getReduceMotionFromConfig,reduceMotion]=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;})" };
class InnerKeyframe {
  constructor(arg0) {
    self = this;
    tmp = c2(this, InnerKeyframe);
    this.reduceMotionV = closure_0(closure_1[2]).ReduceMotion.System;
    this.build = () => {
      const delayFunction = self.getDelayFunction();
      self.parseDefinitions();
      if (!self.parsedAnimation) {
        items = [closure_3, tmp4, delayFunction, self.delayV, InnerKeyframe(1839).withTiming, InnerKeyframe(1861).Easing, InnerKeyframe(1839).withSequence, tmp5, makeKeyframeKey, tmp6];
        c0 = undefined;
        c1 = undefined;
        c2 = undefined;
        c3 = undefined;
        c4 = undefined;
        c5 = undefined;
        c6 = undefined;
        c7 = undefined;
        c8 = undefined;
        [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items;
        function pnpm_KeyframeTs1() {
          const animations = {};
          function addAnimation(arr) {
            let first = animations[arr];
            if (0 !== first.length) {
              if (1 === first.length) {
                let obj = { duration: first[0].duration, easing: null };
                if (first[0].easing) {
                  first = first[0];
                  linear = first.easing;
                } else {
                  linear = linear.linear;
                }
                obj.easing = linear;
                c3(first[0].value, obj);
              } else {
                items = [];
                HermesBuiltin.arraySpread(first.map((duration) => {
                  const obj = { duration: duration.duration, easing: null };
                  if (duration.easing) {
                    linear = duration.easing;
                  } else {
                    linear = linear.linear;
                  }
                  obj.easing = linear;
                  return closure_1_3(duration.value, obj);
                }), 0);
                const tmp12Result = tmp12(tmp13, HermesBuiltin.apply(items, undefined));
                if (arr.includes("transform")) {
                  if (!("transform" in tmp10)) {
                    tmp10.transform = [];
                  }
                  const transform = tmp10.transform;
                  const obj2 = {};
                  obj2[arr.split(":")[1]] = tmp12Result;
                  arr = transform.push(obj2);
                } else {
                  tmp10[arr] = tmp12Result;
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
                  addAnimation(closure_3_7(closure_0, item));
                });
              });
            } else {
              addAnimation(arr);
            }
          });
          return { animations, initialValues, callback };
        }
        const items1 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
        pnpm_KeyframeTs1.__closure = items1;
        pnpm_KeyframeTs1.__workletHash = 2421918238825;
        pnpm_KeyframeTs1.__initData = tmp12;
        self.parsedAnimation = pnpm_KeyframeTs1;
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
    const keyframes = {};
    if (this.definitions.from) {
      if (self.definitions[0]) {
        const _Error3 = Error;
        let error = new Error("[Reanimated] You cannot provide both keyframe 0 and 'from' as they both specified initial values.");
        throw error;
      } else {
        self.definitions[0] = self.definitions.from;
        const definitions = self.definitions;
        delete tmp2[tmp];
      }
    }
    if (self.definitions.to) {
      if (self.definitions[100]) {
        const _Error2 = Error;
        const error1 = new Error("[Reanimated] You cannot provide both keyframe 100 and 'to' as they both specified values at the end of the animation.");
        throw error1;
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
      function getAnimationDuration(arg0, arg1) {

      }
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
                  transform = tmp15.transform;
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
                              obj.duration = result - index[combined].reduce(/* F136951 */ function() { ... }, 0);
                              obj.value = tmp7;
                              obj.easing = tmp9;
                              tmp15(obj);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            const _Error = Error;
                            const error = new Error("[Reanimated] Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
                            throw error;
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
                tmp15 = transform;
              } else if (typeof addKeyPointWith === "function") {
                if (item in obj) {
                  if (typeof getAnimationDuration === "function") {
                    obj = { duration: null, value: null, easing: null };
                    let result = tmp / 100 * num3;
                    obj.duration = result - tmp3[item].reduce((acc, duration) => acc + duration.duration, 0);
                    obj.value = tmp19;
                    obj.easing = tmp2;
                    tmp9(obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let _Error = Error;
                  let error = new Error("[Reanimated] Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
                  throw error;
                }
                tmp3 = obj;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
          }
        }
        let error = new Error("[Reanimated] Keyframe should be in between range 0 - 100.");
        throw error;
      });
      const obj2 = { initialValues, keyframes };
      return obj2;
    } else {
      let _Error = Error;
      const error2 = new Error("[Reanimated] Please provide 0 or 'from' keyframe with initial state of your object.");
      throw error2;
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
        items = [closure_4, InnerKeyframe(1839).withDelay, reduceMotionV];
        c0 = undefined;
        c1 = undefined;
        [tmp12, tmp13, tmp14] = items;
        function pnpm_KeyframeTs2(arg0, arg1) {
          return _undefined(arg0, arg1, c1);
        }
        const items1 = [tmp13, tmp14];
        pnpm_KeyframeTs2.__closure = items1;
        pnpm_KeyframeTs2.__workletHash = 11603357749076;
        pnpm_KeyframeTs2.__initData = tmp12;
        let pnpm_KeyframeTs3 = pnpm_KeyframeTs2;
      } else {
        const items2 = [closure_5, InnerKeyframe(1841).getReduceMotionFromConfig, reduceMotionV];
        c0 = undefined;
        c1 = undefined;
        [tmp5, tmp6, tmp7] = items2;
        pnpm_KeyframeTs3 = function pnpm_KeyframeTs3(arg0, arg1) {
          arg1.reduceMotion = _undefined(c1);
          return arg1;
        };
        const items3 = [tmp6, tmp7];
        pnpm_KeyframeTs3.__closure = items3;
        pnpm_KeyframeTs3.__workletHash = 15303259028586;
        pnpm_KeyframeTs3.__initData = tmp5;
      }
      return pnpm_KeyframeTs3;
    }
  }
];
let items1 = [{ code: "(function makeKeyframeKey_Pnpm_KeyframeTs4(index,transformProp){return index+\"_transform:\"+transformProp;})" }];
[tmp2] = items1;
function makeKeyframeKey(arg0, arg1) {
  return "" + arg0 + "_transform:" + arg1;
}
makeKeyframeKey.__workletHash = 8190490332018;
makeKeyframeKey.__initData = tmp2;

export const Keyframe = _createClassDefault(InnerKeyframe, items);