// === Module 1947: EntryExitTransition ===

// Module 1947 (EntryExitTransition)
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
let closure_6 = { code: "(function pnpm_EntryExitTransitionTs1(values){let[enteringAnimation,exitingAnimation,delayFunction,delay,withSequence,withTiming,exitingDuration,logger,callback]=this.__closure;const enteringValues=enteringAnimation(values);const exitingValues=exitingAnimation(values);const animations={transform:[]};for(const prop of Object.keys(exitingValues.animations)){if(prop==='transform'){if(!Array.isArray(exitingValues.animations.transform)){continue;}exitingValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay,withSequence(value[transformProp],withTiming(exitingValues.initialValues.transform?exitingValues.initialValues.transform[index][transformProp]:0,{duration:0})))});}});}else{const sequence=enteringValues.animations[prop]!==undefined?[exitingValues.animations[prop],withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]]:[exitingValues.animations[prop],withTiming(Object.keys(values).includes(prop)?values[prop]:exitingValues.initialValues[prop],{duration:0})];animations[prop]=delayFunction(delay,withSequence(...sequence));}}for(const prop of Object.keys(enteringValues.animations)){if(prop==='transform'){if(!Array.isArray(enteringValues.animations.transform)){continue;}enteringValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay+exitingDuration,withSequence(withTiming(enteringValues.initialValues.transform?enteringValues.initialValues.transform[index][transformProp]:0,{duration:exitingDuration}),value[transformProp]))});}});}else if(animations[prop]!==undefined){continue;}else{animations[prop]=delayFunction(delay,withSequence(withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]));}}const mergedTransform=(Array.isArray(exitingValues.initialValues.transform)?exitingValues.initialValues.transform:[]).concat((Array.isArray(enteringValues.animations.transform)?enteringValues.animations.transform:[]).map(function(value){const objectKeys=Object.keys(value);if((objectKeys===null||objectKeys===void 0?void 0:objectKeys.length)<1){logger.error(\"${value} is not a valid Transform object\");return value;}const transformProp=objectKeys[0];const current=value[transformProp].current;if(typeof current==='string'){if(current.includes('deg')){return{[transformProp]:'0deg'};}else{return{[transformProp]:'0'};}}else if(transformProp.includes('translate')){return{[transformProp]:0};}else{return{[transformProp]:1};}}));return{initialValues:{...exitingValues.initialValues,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight,transform:mergedTransform},animations:{originX:delayFunction(delay+exitingDuration,withTiming(values.targetOriginX,{duration:exitingDuration})),originY:delayFunction(delay+exitingDuration,withTiming(values.targetOriginY,{duration:exitingDuration})),width:delayFunction(delay+exitingDuration,withTiming(values.targetWidth,{duration:exitingDuration})),height:delayFunction(delay+exitingDuration,withTiming(values.targetHeight,{duration:exitingDuration})),...animations},callback:callback};})" };
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
      const delayFunction = _undefined.getDelayFunction();
      ({ callbackV, enteringV } = _undefined);
      const delay = _undefined.getDelay();
      const exitingV = _undefined.exitingV;
      const exitingV2 = _undefined.exitingV;
      const buildResult = enteringV.build();
      items = [duration, buildResult, exitingV.build(), delayFunction, delay, , , , , ];
      duration = exitingV2.getDuration();
      items[5] = EntryExitTransition(1839).withSequence;
      items[6] = EntryExitTransition(1839).withTiming;
      items[7] = duration;
      items[8] = EntryExitTransition(1665).logger;
      items[9] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
      function pnpm_EntryExitTransitionTs1(targetOriginX) {
        const tmp = _undefined(targetOriginX);
        _undefined = tmp;
        let tmp2 = _undefined2(targetOriginX);
        _undefined2 = tmp2;
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
                  let num = 0;
                  if (closure_1.initialValues.transform) {
                    num = closure_1.initialValues.transform[arg1][tmp2];
                  }
                  obj = {};
                  obj[item10011] = c2(c3, c4(arg0[item10011], c5(num, { duration: 0 })));
                  let arr = transform.push(obj);
                  continue;
                }
              });
            }
            continue;
          } else {
            if (undefined !== tmp.animations[tmp5]) {
              items = [tmp2.animations[tmp5], _undefined4(tmp.initialValues[tmp5], { duration: 0 }), tmp.animations[tmp5]];
              let items1 = items;
            } else {
              items1 = [tmp2.animations[tmp5], ];
              let _Object = Object;
              let keys1 = Object.keys(targetOriginX);
              if (keys1.includes(tmp5)) {
                let tmp9 = targetOriginX[tmp5];
              } else {
                tmp9 = tmp2.initialValues[tmp5];
              }
              items1[1] = _undefined4(tmp9, { duration: 0 });
            }
            let items2 = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
            obj[tmp5] = obj(c3, HermesBuiltin.apply(items2, undefined));
          }
          continue;
        }
        const keys2 = Object.keys(tmp.animations);
        for (const item10081 of keys2) {
          if ("transform" === item10081) {
            let _Array2 = Array;
            if (Array.isArray(tmp.animations.transform)) {
              let transform1 = tmp.animations.transform;
              let item1 = transform1.forEach((item, index) => {
                const keys = Object.keys(item);
                for (const item10011 of keys) {
                  let transform = obj.transform;
                  let num = 0;
                  let sum = c3 + duration;
                  if (closure_0.initialValues.transform) {
                    num = closure_0.initialValues.transform[arg1][item10011];
                  }
                  obj = {};
                  let obj2 = { duration };
                  obj[item10011] = c2(sum, c4(c5(num, obj2), arg0[item10011]));
                  let arr = transform.push(obj);
                  continue;
                }
              });
              continue;
            }
            continue;
          } else if (undefined !== obj[item10081]) {
            continue;
          } else {
            obj[item10081] = obj(c3, _undefined3(_undefined4(tmp.initialValues[item10081], { duration: 0 }), tmp.animations[item10081]));
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
        let obj2 = { initialValues: null, animations: null, callback: null };
        const obj3 = {};
        const combined = transform2.concat(transform3.map((item) => {
          const keys = Object.keys(item);
          let length;
          if (keys != null) {
            length = keys.length;
          }
          if (length < 1) {
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
              const obj2 = {};
              if (first.includes("translate")) {
                obj2[first] = 0;
                let tmp2 = obj2;
              } else {
                obj2[first] = 1;
                tmp2 = obj2;
              }
              return tmp2;
            }
          }
        }));
        const merged = Object.assign(tmp2.initialValues);
        ({ currentOriginX: obj4.originX, currentOriginY: obj4.originY, currentWidth: obj4.width, currentHeight: obj4.height } = targetOriginX);
        obj3.transform = combined;
        obj2.initialValues = obj3;
        const size = { originX: null, originY: null, width: null, height: null };
        let sum = c3 + duration;
        size.originX = obj(sum, _undefined4(targetOriginX.targetOriginX, { duration }));
        const sum1 = c3 + duration;
        size.originY = obj(sum1, _undefined4(targetOriginX.targetOriginY, { duration }));
        const sum2 = c3 + duration;
        size.width = obj(sum2, _undefined4(targetOriginX.targetWidth, { duration }));
        const sum3 = c3 + duration;
        size.height = obj(sum3, _undefined4(targetOriginX.targetHeight, { duration }));
        const merged1 = Object.assign(obj);
        obj2.animations = size;
        obj2.callback = callback;
        return obj2;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
      pnpm_EntryExitTransitionTs1.__closure = items1;
      pnpm_EntryExitTransitionTs1.__workletHash = 14458531784903;
      pnpm_EntryExitTransitionTs1.__initData = tmp6;
      return pnpm_EntryExitTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(EntryExitTransition, fn(1872).BaseAnimationBuilder);
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