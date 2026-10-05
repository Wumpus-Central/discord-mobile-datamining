// _runtime/01773_EntryExitTransition.js
import BaseAnimationBuilder from "01713_BaseAnimationBuilder.js";
import FadeIn from "01762_FadeIn.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

let size;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let closure_6 = {
  code: "function pnpm_EntryExitTransitionTs1(values){const{enteringAnimation,exitingAnimation,delayFunction,delay,withSequence,withTiming,exitingDuration,logger,callback}=this.__closure;const enteringValues=enteringAnimation(values);const exitingValues=exitingAnimation(values);const animations={transform:[]};for(const prop of Object.keys(exitingValues.animations)){if(prop==='transform'){if(!Array.isArray(exitingValues.animations.transform)){continue;}exitingValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay,withSequence(value[transformProp],withTiming(exitingValues.initialValues.transform?exitingValues.initialValues.transform[index][transformProp]:0,{duration:0})))});}});}else{const sequence=enteringValues.animations[prop]!==undefined?[exitingValues.animations[prop],withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]]:[exitingValues.animations[prop],withTiming(Object.keys(values).includes(prop)?values[prop]:exitingValues.initialValues[prop],{duration:0})];animations[prop]=delayFunction(delay,withSequence(...sequence));}}for(const prop of Object.keys(enteringValues.animations)){if(prop==='transform'){if(!Array.isArray(enteringValues.animations.transform)){continue;}enteringValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay+exitingDuration,withSequence(withTiming(enteringValues.initialValues.transform?enteringValues.initialValues.transform[index][transformProp]:0,{duration:exitingDuration}),value[transformProp]))});}});}else if(animations[prop]!==undefined){continue;}else{animations[prop]=delayFunction(delay,withSequence(withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]));}}const mergedTransform=(Array.isArray(exitingValues.initialValues.transform)?exitingValues.initialValues.transform:[]).concat((Array.isArray(enteringValues.animations.transform)?enteringValues.animations.transform:[]).map(function(value){const objectKeys=Object.keys(value);if((objectKeys===null||objectKeys===void 0?void 0:objectKeys.length)<1){logger.error(\"${value} is not a valid Transform object\");return value;}const transformProp=objectKeys[0];const current=value[transformProp].current;if(typeof current==='string'){if(current.includes('deg')){return{[transformProp]:'0deg'};}else{return{[transformProp]:'0'};}}else if(transformProp.includes('translate')){return{[transformProp]:0};}else{return{[transformProp]:1};}}));return{initialValues:{...exitingValues.initialValues,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight,transform:mergedTransform},animations:{originX:delayFunction(delay+exitingDuration,withTiming(values.targetOriginX,{duration:exitingDuration})),originY:delayFunction(delay+exitingDuration,withTiming(values.targetOriginY,{duration:exitingDuration})),width:delayFunction(delay+exitingDuration,withTiming(values.targetWidth,{duration:exitingDuration})),height:delayFunction(delay+exitingDuration,withTiming(values.targetHeight,{duration:exitingDuration})),...animations},callback:callback};}",
};
class EntryExitTransition {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, EntryExitTransition);
    let items1 = [...items];
    let obj = _getPrototypeOf(EntryExitTransition);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.enteringV = FadeIn.FadeIn;
    tmp3Result.exitingV = FadeIn.FadeOut;
    tmp3Result.build = () => {
      let delayFunction = closure_0.getDelayFunction();
      const callbackV = closure_0.callbackV;
      const delay = closure_0.getDelay();
      const enteringV = closure_0.enteringV;
      const buildResult = enteringV.build();
      const exitingV = closure_0.exitingV;
      const buildResult1 = exitingV.build();
      const exitingV2 = closure_0.exitingV;
      const duration = exitingV2.getDuration();
      const fn = function n(targetOriginX) {
        let closure_1;
        let combined;
        let obj10;
        let obj11;
        let obj12;
        let obj13;
        let obj14;
        let obj5;
        let obj7;
        let obj8;
        let obj9;
        let sum;
        let sum1;
        let sum2;
        let sum3;
        let transform2;
        let transform3;
        let tmp2 = buildResult(targetOriginX);
        delayFunction = tmp2;
        let tmp3 = buildResult1(targetOriginX);
        callback = tmp3;
        let obj = { transform: [] };
        let keys = Object.keys(tmp3.animations);
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp6 = nextResult;
          if ("transform" === nextResult) {
            let _Array = Array;
            if (Array.isArray(tmp3.animations.transform)) {
              let transform = tmp3.animations.transform;
              let item = transform.forEach((item, index) => {
                const keys = Object.keys(item);
                for (const item10011 of keys) {
                  let transform = obj.transform;
                  let push = transform.push;
                  let tmp8 = closure_3_0(closure_3_1[6]);
                  let withSequence = tmp8.withSequence;
                  let tmp9 = item[item10011];
                  let tmp10 = closure_3_0(closure_3_1[6]);
                  let num = 0;
                  let withTiming = tmp10.withTiming;
                  if (closure_1.initialValues.transform) {
                    num = closure_1.initialValues.transform[index][item10011];
                  }
                  obj = {};
                  obj[item10011] = delayFunction(delay, withSequence(tmp9, withTiming(num, { duration: 0 })));
                  let arr = push(obj);
                  continue;
                }
              });
            }
            continue;
          } else {
            let items1;
            if (undefined !== tmp2.animations[tmp6]) {
              let items = [tmp3.animations[tmp6], ,];
              let obj3 = delayFunction(callbackV[6]);
              items[1] = obj3.withTiming(tmp2.initialValues[tmp6], { duration: 0 });
              items[2] = tmp2.animations[tmp6];
              items1 = items;
            } else {
              let tmp12;
              items1 = [tmp3.animations[tmp6]];
              let tmp8 = delayFunction;
              let tmp10 = delayFunction(callbackV[6]);
              let _Object = Object;
              let withTiming = tmp10.withTiming;
              let keys1 = Object.keys(targetOriginX);
              if (keys1.includes(tmp6)) {
                tmp12 = targetOriginX[tmp6];
              } else {
                let tmp11 = nextResult;
                tmp12 = tmp3.initialValues[tmp6];
              }
              items1[1] = withTiming(tmp12, { duration: 0 });
            }
            let tmp22 = delayFunction(callbackV[6]);
            let withSequence = tmp22.withSequence;
            let items2 = [];
            let num = 0;
            let arraySpreadResult = HermesBuiltin.arraySpread(items2, items1, 0);
            obj[tmp6] = delayFunction(obj, HermesBuiltin.apply(withSequence, items2, tmp22));
          }
          continue;
        }
        const keys2 = Object.keys(tmp2.animations);
        for (const item10093 of keys2) {
          if ("transform" === item10093) {
            let _Array2 = Array;
            if (Array.isArray(tmp2.animations.transform)) {
              let transform1 = tmp2.animations.transform;
              let item1 = transform1.forEach((item, index) => {
                const keys = Object.keys(item);
                for (const item10011 of keys) {
                  let transform = obj.transform;
                  let push = transform.push;
                  let sum = delay + duration;
                  let tmp10 = closure_3_0(closure_3_1[6]);
                  let withSequence = tmp10.withSequence;
                  let tmp11 = closure_3_0(closure_3_1[6]);
                  let num = 0;
                  let withTiming = tmp11.withTiming;
                  if (closure_0.initialValues.transform) {
                    num = closure_0.initialValues.transform[index][item10011];
                  }
                  obj = {};
                  let obj2 = { duration };
                  obj[item10011] = delayFunction(sum, withSequence(withTiming(num, obj2), item[item10011]));
                  let arr = push(obj);
                  continue;
                }
              });
              continue;
            }
            continue;
          } else if (undefined !== obj[item10093]) {
            continue;
          } else {
            let tmp37 = delayFunction(callbackV[6]);
            let withSequence2 = tmp37.withSequence;
            let obj4 = delayFunction(callbackV[6]);
            obj[item10093] = delayFunction(
              obj,
              withSequence2(
                obj4.withTiming(tmp2.initialValues[item10093], { duration: 0 }),
                tmp2.animations[item10093],
              ),
            );
          }
          continue;
        }
        if (Array.isArray(tmp3.initialValues.transform)) {
          transform2 = tmp3.initialValues.transform;
        } else {
          transform2 = [];
        }
        const concat = transform2.concat;
        if (Array.isArray(tmp2.animations.transform)) {
          transform3 = tmp2.animations.transform;
        } else {
          transform3 = [];
        }
        let obj2 = { initialValues: obj5, animations: size, callback };
        obj5 = { transform: combined };
        combined = concat(
          transform3.map((item) => {
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
              let tmp2;
              const first = keys[0];
              const current = item[first].current;
              if (typeof current === "string") {
                let tmp3;
                obj = {};
                if (current.includes("deg")) {
                  obj[first] = "0deg";
                  tmp3 = obj;
                } else {
                  obj[first] = "0";
                  tmp3 = obj;
                }
                tmp2 = tmp3;
              } else {
                const obj2 = {};
                if (first.includes("translate")) {
                  obj2[first] = 0;
                  tmp2 = obj2;
                } else {
                  obj2[first] = 1;
                  tmp2 = obj2;
                }
              }
              return tmp2;
            }
          }),
        );
        const merged = Object.assign(tmp3.initialValues);
        ({
          currentOriginX: obj6.originX,
          currentOriginY: obj6.originY,
          currentWidth: obj6.width,
          currentHeight: obj6.height,
        } = targetOriginX);
        size = {
          originX: delayFunction(sum, obj8.withTiming(targetOriginX.targetOriginX, obj7)),
          originY: delayFunction(sum1, obj10.withTiming(targetOriginX.targetOriginY, obj9)),
          width: delayFunction(sum2, obj12.withTiming(targetOriginX.targetWidth, obj11)),
          height: delayFunction(sum3, obj14.withTiming(targetOriginX.targetHeight, obj13)),
        };
        sum = obj + duration;
        obj7 = { duration };
        sum1 = obj + duration;
        obj8 = delayFunction(callbackV[6]);
        sum2 = obj + duration;
        obj10 = delayFunction(callbackV[6]);
        obj11 = { duration };
        obj9 = { duration };
        sum3 = obj + duration;
        obj12 = delayFunction(callbackV[6]);
        obj13 = { duration };
        obj14 = delayFunction(callbackV[6]);
        const merged1 = Object.assign(obj);
        return obj2;
      };
      let obj = {
        enteringAnimation: buildResult,
        exitingAnimation: buildResult1,
        delayFunction,
        delay,
        withSequence: EntryExitTransition(closure_2_1[6]).withSequence,
        withTiming: EntryExitTransition(closure_2_1[6]).withTiming,
        exitingDuration: duration,
        logger: EntryExitTransition(closure_2_1[7]).logger,
        callback: callbackV,
      };
      fn.__closure = obj;
      fn.__workletHash = 15677837188414;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(EntryExitTransition, BaseAnimationBuilder.BaseAnimationBuilder);
const entry = {
  key: "entering",
  value: function entering(enteringV) {
    this.enteringV = enteringV;
    return this;
  },
};
let items = [
  entry,
  {
    key: "exiting",
    value: function exiting(exitingV) {
      this.exitingV = exitingV;
      return this;
    },
  },
];
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = EntryExitTransition();
    return tmp;
  },
};
let items1 = [
  entry1,
  {
    key: "entering",
    value: function entering(arg0) {
      const instance = this.createInstance();
      return instance.entering(arg0);
    },
  },
  {
    key: "exiting",
    value: function exiting(arg0) {
      const instance = this.createInstance();
      return instance.exiting(arg0);
    },
  },
];
const importDefaultResultResult = _createClass(EntryExitTransition, items, items1);
const metroImportDefault = importDefaultResultResult;
importDefaultResultResult.presetName = "EntryExitTransition";
const EntryExitTransition_export = importDefaultResultResult;

export { EntryExitTransition_export as EntryExitTransition };
export const combineTransition = function combineTransition(arg0, arg1) {
  const enteringResult = metroImportDefault.entering(arg1);
  return enteringResult.exiting(arg0);
};
