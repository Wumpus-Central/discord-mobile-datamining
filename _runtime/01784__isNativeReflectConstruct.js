// === Module 1784: _isNativeReflectConstruct ===

// Module 1784 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;

const EntryExitTransition = fn;
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
let closure_6 = { code: "function pnpm_EntryExitTransitionTs1(values){const{enteringAnimation,exitingAnimation,delayFunction,delay,withSequence,withTiming,exitingDuration,logger,callback}=this.__closure;const enteringValues=enteringAnimation(values);const exitingValues=exitingAnimation(values);const animations={transform:[]};for(const prop of Object.keys(exitingValues.animations)){if(prop==='transform'){if(!Array.isArray(exitingValues.animations.transform)){continue;}exitingValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay,withSequence(value[transformProp],withTiming(exitingValues.initialValues.transform?exitingValues.initialValues.transform[index][transformProp]:0,{duration:0})))});}});}else{const sequence=enteringValues.animations[prop]!==undefined?[exitingValues.animations[prop],withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]]:[exitingValues.animations[prop],withTiming(Object.keys(values).includes(prop)?values[prop]:exitingValues.initialValues[prop],{duration:0})];animations[prop]=delayFunction(delay,withSequence(...sequence));}}for(const prop of Object.keys(enteringValues.animations)){if(prop==='transform'){if(!Array.isArray(enteringValues.animations.transform)){continue;}enteringValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay+exitingDuration,withSequence(withTiming(enteringValues.initialValues.transform?enteringValues.initialValues.transform[index][transformProp]:0,{duration:exitingDuration}),value[transformProp]))});}});}else if(animations[prop]!==undefined){continue;}else{animations[prop]=delayFunction(delay,withSequence(withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]));}}const mergedTransform=(Array.isArray(exitingValues.initialValues.transform)?exitingValues.initialValues.transform:[]).concat((Array.isArray(enteringValues.animations.transform)?enteringValues.animations.transform:[]).map(function(value){const objectKeys=Object.keys(value);if((objectKeys===null||objectKeys===void 0?void 0:objectKeys.length)<1){logger.error(\"${value} is not a valid Transform object\");return value;}const transformProp=objectKeys[0];const current=value[transformProp].current;if(typeof current==='string'){if(current.includes('deg')){return{[transformProp]:'0deg'};}else{return{[transformProp]:'0'};}}else if(transformProp.includes('translate')){return{[transformProp]:0};}else{return{[transformProp]:1};}}));return{initialValues:{...exitingValues.initialValues,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight,transform:mergedTransform},animations:{originX:delayFunction(delay+exitingDuration,withTiming(values.targetOriginX,{duration:exitingDuration})),originY:delayFunction(delay+exitingDuration,withTiming(values.targetOriginY,{duration:exitingDuration})),width:delayFunction(delay+exitingDuration,withTiming(values.targetWidth,{duration:exitingDuration})),height:delayFunction(delay+exitingDuration,withTiming(values.targetHeight,{duration:exitingDuration})),...animations},callback:callback};}" };
class EntryExitTransition {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.enteringV = require("_isNativeReflectConstruct").FadeIn;
    tmp3Result.exitingV = require("_isNativeReflectConstruct").FadeOut;
    tmp3Result.build = () => {
      delayFunction = delayFunction.getDelayFunction();
      const callbackV = delayFunction.callbackV;
      const delay = delayFunction.getDelay();
      const enteringV = delayFunction.enteringV;
      const buildResult = enteringV.build();
      closure_3 = buildResult;
      const exitingV = delayFunction.exitingV;
      const buildResult1 = exitingV.build();
      const exitingV2 = delayFunction.exitingV;
      const duration = exitingV2.getDuration();
      const fn = function n(targetOriginX) {
        const tmp = buildResult(targetOriginX);
        delayFunction = tmp;
        let tmp2 = buildResult1(targetOriginX);
        closure_1 = tmp2;
        let obj = { transform: [] };
        let keys = Object.keys(tmp2.animations);
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if ("transform" === nextResult) {
            let _Array = Array;
            if (Array.isArray(tmp2.animations.transform)) {
              let transform = tmp2.animations.transform;
              let item = transform.forEach((item, index) => {
                const keys = Object.keys(item);
                for (const item10011 of keys) {
                  let transform = obj.transform;
                  let tmp5 = obj;
                  obj = delayFunction(callbackV[6]);
                  let obj2 = delayFunction(callbackV[6]);
                  let num = 0;
                  if (closure_1.initialValues.transform) {
                    num = closure_1.initialValues.transform[arg1][item10011];
                  }
                  obj = {};
                  obj[item10011] = callback(tmp5, obj.withSequence(arg0[item10011], obj2.withTiming(num, { duration: 0 })));
                  let arr = transform.push(obj);
                  continue;
                }
              });
            }
            continue;
          } else {
            if (undefined !== tmp.animations[tmp5]) {
              let items = [tmp2.animations[tmp5], , ];
              let obj3 = delayFunction(callbackV[6]);
              items[1] = obj3.withTiming(tmp.initialValues[tmp5], { duration: 0 });
              items[2] = tmp.animations[tmp5];
              let items1 = items;
            } else {
              items1 = [tmp2.animations[tmp5], ];
              obj1 = delayFunction(callbackV[6]);
              let _Object = Object;
              let keys1 = Object.keys(targetOriginX);
              if (keys1.includes(tmp5)) {
                let tmp10 = targetOriginX[tmp5];
              } else {
                tmp10 = tmp2.initialValues[tmp5];
              }
              items1[1] = obj1.withTiming(tmp10, { duration: 0 });
            }
            let tmp20 = delayFunction(callbackV[6]);
            let withSequence = tmp20.withSequence;
            let items2 = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
            obj[tmp5] = delayFunction(obj, HermesBuiltin.apply(items2, tmp20));
          }
          continue;
        }
        const keys2 = Object.keys(tmp.animations);
        for (const item10093 of keys2) {
          if ("transform" === item10093) {
            let _Array2 = Array;
            if (Array.isArray(tmp.animations.transform)) {
              let transform1 = tmp.animations.transform;
              let item1 = transform1.forEach((item, index) => {
                const keys = Object.keys(item);
                for (const item10011 of keys) {
                  let transform = obj.transform;
                  let sum = obj + duration;
                  obj = delayFunction(callbackV[6]);
                  let obj2 = delayFunction(callbackV[6]);
                  let num = 0;
                  if (lib.initialValues.transform) {
                    num = lib.initialValues.transform[arg1][item10011];
                  }
                  obj = {};
                  obj = { duration: null };
                  obj[0] = duration;
                  obj[item10011] = lib(sum, obj.withSequence(obj2.withTiming(num, obj), arg0[item10011]));
                  let arr = transform.push(obj);
                  continue;
                }
              });
              continue;
            }
            continue;
          } else if (undefined !== obj[item10093]) {
            continue;
          } else {
            let obj4 = delayFunction(callbackV[6]);
            let obj5 = delayFunction(callbackV[6]);
            obj[item10093] = delayFunction(obj, obj4.withSequence(obj5.withTiming(tmp.initialValues[item10093], { duration: 0 }), tmp.animations[item10093]));
          }
          continue;
        }
        if (Array.isArray(tmp2.initialValues.transform)) {
          let transform2 = tmp2.initialValues.transform;
        } else {
          transform2 = [];
        }
        if (Array.isArray(tmp.animations.transform)) {
          let transform3 = tmp.animations.transform;
        } else {
          transform3 = [];
        }
        obj = {};
        const combined = transform2.concat(transform3.map((item, index) => {
          const keys = Object.keys(item);
          let length;
          if (keys != null) {
            length = keys.length;
          }
          if (length < 1) {
            const logger = lib(closure_1[7]).logger;
            logger.error("${value} is not a valid Transform object");
            return item;
          } else {
            const first = keys[0];
            const current = item[first].current;
            if (typeof current === "string") {
              obj = {};
              if (current.includes("deg")) {
                obj[first] = "0deg";
              } else {
                obj[first] = "0";
              }
            } else {
              obj = {};
              if (first.includes("translate")) {
                obj[first] = 0;
                let tmp2 = obj;
              } else {
                obj[first] = 1;
                tmp2 = obj;
              }
              return tmp2;
            }
          }
        }));
        const merged = Object.assign(tmp2.initialValues);
        ({ currentOriginX: obj8.originX, currentOriginY: obj8.originY, currentWidth: obj8.width, currentHeight: obj8.height } = targetOriginX);
        obj.transform = combined;
        obj[0] = obj;
        obj1 = { originX: delayFunction(sum, delayFunction(callbackV[6]).withTiming(targetOriginX.targetOriginX, { duration })), originY: null, width: null, height: null };
        sum = obj + duration;
        const sum1 = obj + duration;
        const obj10 = delayFunction(callbackV[6]);
        obj3 = { duration };
        obj1[1] = delayFunction(sum1, delayFunction(callbackV[6]).withTiming(targetOriginX.targetOriginY, obj3));
        const sum2 = obj + duration;
        const obj12 = delayFunction(callbackV[6]);
        obj4 = { duration };
        obj1[2] = delayFunction(sum2, delayFunction(callbackV[6]).withTiming(targetOriginX.targetWidth, obj4));
        const sum3 = obj + duration;
        const obj14 = delayFunction(callbackV[6]);
        obj5 = { duration };
        obj1[3] = delayFunction(sum3, delayFunction(callbackV[6]).withTiming(targetOriginX.targetHeight, obj5));
        const merged1 = Object.assign(obj);
        obj[1] = obj1;
        obj[2] = closure_1;
        return obj;
      };
      fn.__closure = { enteringAnimation: buildResult, exitingAnimation: buildResult1, delayFunction, delay, withSequence: callback(dependencyMap[6]).withSequence, withTiming: callback(dependencyMap[6]).withTiming, exitingDuration: duration, logger: callback(dependencyMap[7]).logger, callback: callbackV };
      fn.__workletHash = 15677837188414;
      fn.__initData = closure_1_6;
      return fn;
    };
    return tmp3Result;
  }
}
_inheritsDefault(EntryExitTransition, require("BaseAnimationBuilder").BaseAnimationBuilder);
let obj = {
  key: "entering",
  value: function entering(enteringV) {
    this.enteringV = enteringV;
    return this;
  }
};
let items = [
  obj,
  {
    key: "exiting",
    value: function exiting(exitingV) {
      this.exitingV = exitingV;
      return this;
    }
  }
];
obj = {
  key: "createInstance",
  value: function createInstance() {
    return EntryExitTransition();
  }
};
let items1 = [
  obj,
  {
    key: "entering",
    value: function entering(arg0) {
      const instance = this.createInstance();
      return instance.entering(arg0);
    }
  },
  {
    key: "exiting",
    value: function exiting(arg0) {
      const instance = this.createInstance();
      return instance.exiting(arg0);
    }
  }
];
const importDefaultResultResult = importDefaultResult(EntryExitTransition, items, items1);
const error = importDefaultResultResult;
importDefaultResultResult.presetName = "EntryExitTransition";

export const EntryExitTransition = importDefaultResultResult;
export const combineTransition = function combineTransition(arg0, arg1) {
  return importDefaultResultResult.entering(arg1).exiting(arg0);
};