// === Module 1766: ? ===

// Module 1766
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let EntryExitTransition = fn;
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
    tmp = c2(this, EntryExitTransition);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(EntryExitTransition);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.enteringV = closure_0(closure_1[5]).FadeIn;
    tmp3Result.exitingV = closure_0(closure_1[5]).FadeOut;
    tmp3Result.build = () => {
      delayFunction = delayFunction.getDelayFunction();
      const callbackV = delayFunction.callbackV;
      const delay = delayFunction.getDelay();
      const enteringV = delayFunction.enteringV;
      const buildResult = enteringV.build();
      const exitingV = delayFunction.exitingV;
      const buildResult1 = exitingV.build();
      const exitingV2 = delayFunction.exitingV;
      const duration = exitingV2.getDuration();
      const fn = function n(targetOriginX) {
        const tmp = buildResult(targetOriginX);
        delayFunction = tmp;
        let tmp2 = buildResult1(targetOriginX);
        callback = tmp2;
        let initialValues = { transform: [] };
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
                  let tmp2 = item10011;
                  let tmp4 = delayFunction;
                  let tmp5 = delay;
                  let obj = closure_0(1708);
                  let obj2 = closure_0(1708);
                  let num = 0;
                  if (closure_1.initialValues.transform) {
                    num = closure_1.initialValues.transform[arg1][tmp2];
                  }
                  obj = {};
                  obj[item10011] = tmp4(tmp5, obj.withSequence(arg0[item10011], obj2.withTiming(num, { duration: 0 })));
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
              let obj1 = delayFunction(callbackV[6]);
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
            initialValues[tmp5] = delayFunction(initialValues, HermesBuiltin.apply(items2, tmp20));
          }
          continue;
        }
        const keys2 = Object.keys(tmp.animations);
        for (const item10093 of keys2) {
          let tmp29 = item10093;
          if ("transform" === item10093) {
            let _Array2 = Array;
            if (Array.isArray(tmp.animations.transform)) {
              let transform1 = tmp.animations.transform;
              let item1 = transform1.forEach((item, index) => {
                const keys = Object.keys(item);
                for (const item10011 of keys) {
                  let tmp2 = item10011;
                  let transform = obj.transform;
                  let tmp4 = delayFunction;
                  let tmp6 = duration;
                  let sum = delay + duration;
                  let obj = closure_0(1708);
                  let obj2 = closure_0(1708);
                  let num = 0;
                  if (closure_0.initialValues.transform) {
                    num = closure_0.initialValues.transform[arg1][tmp2];
                  }
                  obj = {};
                  obj = { duration: tmp6 };
                  obj[item10011] = tmp4(sum, obj.withSequence(obj2.withTiming(num, obj), arg0[tmp2]));
                  let arr = transform.push(obj);
                  continue;
                }
              });
              continue;
            }
            continue;
          } else if (undefined !== initialValues[tmp29]) {
            continue;
          } else {
            let obj4 = delayFunction(callbackV[6]);
            let obj6 = delayFunction(callbackV[6]);
            initialValues[tmp29] = delayFunction(initialValues, obj4.withSequence(obj6.withTiming(tmp.initialValues[tmp29], { duration: 0 }), tmp.animations[tmp29]));
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
        initialValues = { initialValues: null, animations: null, callback: null };
        initialValues = {};
        const combined = transform2.concat(transform3.map((item) => {
          const keys = Object.keys(item);
          let length;
          if (keys != null) {
            length = keys.length;
          }
          if (length < 1) {
            const logger = closure_0(closure_1[7]).logger;
            logger.error("${value} is not a valid Transform object");
            return item;
          } else {
            const first = keys[0];
            const current = item[first].current;
            if (typeof current === "string") {
              let obj = {};
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
        initialValues.transform = combined;
        initialValues.initialValues = initialValues;
        const size = { originX: null, originY: null, width: null, height: null };
        let sum = initialValues + duration;
        obj1 = { duration };
        size.originX = delayFunction(sum, delayFunction(callbackV[6]).withTiming(targetOriginX.targetOriginX, obj1));
        const sum1 = initialValues + duration;
        const obj10 = delayFunction(callbackV[6]);
        size.originY = delayFunction(sum1, delayFunction(callbackV[6]).withTiming(targetOriginX.targetOriginY, { duration }));
        const sum2 = initialValues + duration;
        const obj12 = delayFunction(callbackV[6]);
        let obj2 = { duration };
        obj3 = { duration };
        size.width = delayFunction(sum2, delayFunction(callbackV[6]).withTiming(targetOriginX.targetWidth, obj3));
        const sum3 = initialValues + duration;
        const obj14 = delayFunction(callbackV[6]);
        obj4 = { duration };
        size.height = delayFunction(sum3, delayFunction(callbackV[6]).withTiming(targetOriginX.targetHeight, obj4));
        const merged1 = Object.assign(initialValues);
        initialValues.animations = size;
        initialValues.callback = callback;
        return initialValues;
      };
      fn.__closure = { enteringAnimation: buildResult, exitingAnimation: buildResult1, delayFunction, delay, withSequence: EntryExitTransition(1708).withSequence, withTiming: EntryExitTransition(1708).withTiming, exitingDuration: duration, logger: EntryExitTransition(1640).logger, callback: callbackV };
      fn.__workletHash = 15677837188414;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(EntryExitTransition, fn(1706).BaseAnimationBuilder);
const entry = {
  key: "entering",
  value: function entering(enteringV) {
    this.enteringV = enteringV;
    return this;
  }
};
let items = [
  entry,
  {
    key: "exiting",
    value: function exiting(exitingV) {
      this.exitingV = exitingV;
      return this;
    }
  }
];
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return EntryExitTransition();
  }
};
let items1 = [
  entry1,
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
const importDefaultResultResult = _createClass(EntryExitTransition, items, items1);
importDefaultResultResult.presetName = "EntryExitTransition";

export const EntryExitTransition = importDefaultResultResult;
export const combineTransition = function combineTransition(arg0, arg1) {
  return importDefaultResultResult.entering(arg1).exiting(arg0);
};