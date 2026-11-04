// _runtime/01871_SharedTransition.js
import _possibleConstructorReturnDefault from "metro/00093__possibleConstructorReturn.js";
import _slicedToArray from "metro/00032__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const SharedTransition = fn;
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
  } catch (err) {}
}
_possibleConstructorReturnDefault;
let closure_7 = {
  code: "(function pnpm_SharedTransitionTs1(valuesUntyped){let[delayFunction,delay,animation,config,logger,callback]=this.__closure;const values=valuesUntyped;const animationFactory=function(value){return delayFunction(delay,animation(value,config));};const initialValues={};const animations={};for(let key in values.source){initialValues[key]=values.source[key];const target=values.target[key];if(Array.isArray(target)){if(key==='transform'){animations[key]=target.map(function(item){key=Object.keys(item)[0];return{[key]:animationFactory(item[key])};});}else if(key==='boxShadow'){animations[key]=target.map(function(item){const boxShadow={};for(const shadowKey of Object.keys(item)){boxShadow[shadowKey]=animationFactory(item[shadowKey]);}return boxShadow;});}else if(key==='transformOrigin'){animations[key]=target.map(animationFactory);}else{logger.error(\"Unexpected array in SharedTransition: \"+key);}}else{animations[key]=animationFactory(values.target[key]);}}return{initialValues:initialValues,animations:animations,callback:callback};})",
};
class SharedTransition {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, SharedTransition);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(SharedTransition);
    tmp3 = closure_4;
    if (closure_6()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      delayFunction = delayFunction.getDelayFunction();
      if (!delayFunction.durationV) {
        obj.durationV = 500;
      }
      [tmp3, tmp4] = delayFunction.getAnimationAndConfig();
      items = [
        closure_7,
        delayFunction,
        delayFunction.getDelay(),
        tmp3,
        tmp4,
        SharedTransition(1665).logger,
        delayFunction.callbackV,
      ];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
      function pnpm_SharedTransitionTs1(source) {
        function animationFactory(item) {
          return first(closure_1_1, _undefined(item, closure_1_3));
        }
        let first = animationFactory;
        let obj = {};
        const obj2 = {};
        for (const key10012 in arg0.source) {
          first = key10012;
          obj[key10012] = arg0.source[first];
          let arr = arg0.target[first];
          let _Array = Array;
          let tmp12 = first;
          if (Array.isArray(arr)) {
            if ("transform" === tmp12) {
              obj2[tmp12] = arr.map((item) => {
                first = Object.keys(item)[0];
                return { [first]: first(closure_1_1, _undefined(item[first], closure_1_3)) };
              });
              continue;
            } else {
              if ("boxShadow" === tmp12) {
                obj2[tmp12] = arr.map((item) => {
                  const obj = {};
                  const keys = Object.keys(item);
                  for (const item10010 of keys) {
                    obj[item10010] = first(arg0[item10010]);
                    continue;
                  }
                  return obj;
                });
                continue;
              } else {
                if ("transformOrigin" === tmp12) {
                  obj2[tmp12] = arr.map(animationFactory);
                  continue;
                } else {
                  let _HermesInternal = HermesInternal;
                  let errorResult = _undefined2.error("Unexpected array in SharedTransition: " + first);
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          } else {
            obj2[tmp12] = first(c1, _undefined(arg0.target[first], c3));
            continue;
          }
          continue;
        }
        return { initialValues: obj, animations: obj2, callback };
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
      pnpm_SharedTransitionTs1.__closure = items1;
      pnpm_SharedTransitionTs1.__workletHash = 2064494406202;
      pnpm_SharedTransitionTs1.__initData = tmp5;
      return pnpm_SharedTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(SharedTransition, fn(1872).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return SharedTransition();
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(SharedTransition, null, items);
importDefaultResultResult.presetName = "SharedTransition";

export const SharedTransition = importDefaultResultResult;
