// _runtime/01693_isValidLayoutAnimationProp.js
import isJest from "isJest";
import { runWorkletOnJS } from "01660_runWorkletOnJS.js";
import { t } from "01664_t.js";
import { isWorkletFunction } from "01678_isWorkletFunction.js";
import { isAffineMatrixFlat } from "01695_isAffineMatrixFlat.js";

let c2 = false;
isJest = isJest.shouldBeUseWeb();
let obj = { originX: true, originY: true, width: true, height: true, borderRadius: true, globalOriginX: true, globalOriginY: true, opacity: true, transform: true, backgroundColor: true };
function isValidLayoutAnimationProp(arg0) {
  return arg0 in obj;
}
isValidLayoutAnimationProp.__closure = { LAYOUT_ANIMATION_SUPPORTED_PROPS: obj };
isValidLayoutAnimationProp.__workletHash = 13235833688548;
isValidLayoutAnimationProp.__initData = { code: "function isValidLayoutAnimationProp_Pnpm_utilTs1(prop){const{LAYOUT_ANIMATION_SUPPORTED_PROPS}=this.__closure;return prop in LAYOUT_ANIMATION_SUPPORTED_PROPS;}" };
function assertEasingIsWorklet(factory) {
  if (!globalThis._WORKLET) {
    if (!isJest) {
      factory = undefined;
      if (factory != null) {
        factory = factory.factory;
      }
      if (!factory) {
        if (!obj.isWorkletFunction(factory)) {
          const reanimatedError = new tmp5(1664).ReanimatedError("The easing function is not a worklet. Please make sure you import `Easing` from react-native-reanimated.");
          throw reanimatedError;
        }
        obj = isWorkletFunction;
        tmp5 = require;
      }
    }
  }
}
obj = { SHOULD_BE_USE_WEB: isJest, isWorkletFunction: require("isWorkletFunction").isWorkletFunction };
assertEasingIsWorklet.__closure = obj;
assertEasingIsWorklet.__workletHash = 8431488219943;
assertEasingIsWorklet.__initData = { code: "function assertEasingIsWorklet_Pnpm_utilTs2(easing){const{SHOULD_BE_USE_WEB,isWorkletFunction}=this.__closure;if(_WORKLET){return;}if(SHOULD_BE_USE_WEB){return;}if(easing!==null&&easing!==void 0&&easing.factory){return;}if(!isWorkletFunction(easing)){throw new ReanimatedError('The easing function is not a worklet. Please make sure you import `Easing` from react-native-reanimated.');}}" };
function recognizePrefixSuffix(current) {
  if (typeof current === "string") {
    const match = current.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
    if (match) {
      let str2 = match[3];
      if (str2 == null) {
        str2 = "";
      }
      let obj = { prefix: null, suffix: null, strippedValue: null };
      obj[0] = match[1];
      obj[1] = match[4];
      const _parseFloat = parseFloat;
      obj[2] = parseFloat(match[2] + str2);
      return obj;
    } else {
      const reanimatedError = new t.ReanimatedError("Couldn't parse animation value.");
      throw reanimatedError;
    }
  } else {
    obj = { strippedValue: null };
    obj[0] = current;
    return obj;
  }
}
recognizePrefixSuffix.__closure = {};
recognizePrefixSuffix.__workletHash = 11076682371077;
recognizePrefixSuffix.__initData = { code: "function recognizePrefixSuffix_Pnpm_utilTs3(value){if(typeof value==='string'){var _match$;const match=value.match(/([A-Za-z]*)(-?\\d*\\.?\\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);if(!match){throw new ReanimatedError(\"Couldn't parse animation value.\");}const prefix=match[1];const suffix=match[4];const number=match[2]+((_match$=match[3])!==null&&_match$!==void 0?_match$:'');return{prefix:prefix,suffix:suffix,strippedValue:parseFloat(number)};}else{return{strippedValue:value};}}" };
const uiValue = require("isReducedMotionEnabledInSystem").ReducedMotionManager.uiValue;
function getReduceMotionFromConfig(reduceMotion) {
  if (reduceMotion) {
    if (reduceMotion !== isWorkletFunction.ReduceMotion.System) {
      let value = reduceMotion === isWorkletFunction.ReduceMotion.Always;
    }
    return value;
  }
  value = uiValue.value;
}
getReduceMotionFromConfig.__closure = { ReduceMotion: require("isWorkletFunction").ReduceMotion, isReduceMotionOnUI: uiValue };
getReduceMotionFromConfig.__workletHash = 7977910521960;
getReduceMotionFromConfig.__initData = { code: "function getReduceMotionFromConfig_Pnpm_utilTs4(config){const{ReduceMotion,isReduceMotionOnUI}=this.__closure;return!config||config===ReduceMotion.System?isReduceMotionOnUI.value:config===ReduceMotion.Always;}" };
function getReduceMotionForAnimation(reduceMotion) {
  if (reduceMotion) {
    if (typeof getReduceMotionFromConfig !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (reduceMotion) {
      if (reduceMotion !== isWorkletFunction.ReduceMotion.System) {
        let value = reduceMotion === isWorkletFunction.ReduceMotion.Always;
      }
      return value;
    }
    value = uiValue.value;
  }
}
getReduceMotionForAnimation.__closure = { getReduceMotionFromConfig };
getReduceMotionForAnimation.__workletHash = 10866808344662;
getReduceMotionForAnimation.__initData = { code: "function getReduceMotionForAnimation_Pnpm_utilTs5(config){const{getReduceMotionFromConfig}=this.__closure;if(!config){return undefined;}return getReduceMotionFromConfig(config);}" };
function applyProgressToMatrix(arg0, arr, arr) {
  const obj = isAffineMatrixFlat;
  const obj2 = isAffineMatrixFlat;
  return obj.addMatrices(arr, obj2.scaleMatrix(isAffineMatrixFlat.subtractMatrices(arr, arr), arg0));
}
let obj1 = { ReduceMotion: require("isWorkletFunction").ReduceMotion, isReduceMotionOnUI: uiValue };
applyProgressToMatrix.__closure = { addMatrices: require("isAffineMatrixFlat").addMatrices, scaleMatrix: require("isAffineMatrixFlat").scaleMatrix, subtractMatrices: require("isAffineMatrixFlat").subtractMatrices };
applyProgressToMatrix.__workletHash = 4822273347900;
applyProgressToMatrix.__initData = { code: "function applyProgressToMatrix_Pnpm_utilTs6(progress,a,b){const{addMatrices,scaleMatrix,subtractMatrices}=this.__closure;return addMatrices(a,scaleMatrix(subtractMatrices(b,a),progress));}" };
function applyProgressToNumber(arg0, arg1, arg2) {
  return arg1 + arg0 * (arg2 - arg1);
}
applyProgressToNumber.__closure = {};
applyProgressToNumber.__workletHash = 954128472665;
applyProgressToNumber.__initData = { code: "function applyProgressToNumber_Pnpm_utilTs7(progress,a,b){return a+progress*(b-a);}" };
function decorateAnimation(isHigherOrder) {
  let dependencyMap;
  let require;
  ({ onStart: require, onFrame: dependencyMap } = isHigherOrder);
  if (isHigherOrder.isHigherOrder) {
    isHigherOrder.onStart = (reduceMotion) => {
      if (undefined === reduceMotion.reduceMotion) {
        if (typeof arrayOnFrame !== "function") {
          HermesBuiltin.throwTypeError();
        }
        reduceMotion.reduceMotion = transformationMatrixOnFrame.value;
      }
      return callback(reduceMotion, arg1, arg2, arg3);
    };
  } else {
    const _Object = Object;
    let closure_2 = Object.assign({}, isHigherOrder);
    delete tmp2[tmp];
    function prefNumberSuffOnFrame(strippedCurrent) {
      let __prefix;
      strippedCurrent.current = strippedCurrent.strippedCurrent;
      ({ current: strippedCurrent.strippedCurrent, __prefix } = strippedCurrent);
      if (__prefix == null) {
        __prefix = "";
      }
      let str = strippedCurrent.__suffix;
      const sum = __prefix + strippedCurrent.current;
      if (str == null) {
        str = "";
      }
      strippedCurrent.current = sum + str;
      return dependencyMap(strippedCurrent, arg1);
    }
    let closure_4 = ["R", "G", "B", "A"];
    function colorOnFrame(nonscaledCurrent) {
      let closure_0 = nonscaledCurrent;
      let closure_1 = arg1;
      const items = [];
      let c3 = true;
      nonscaledCurrent.current = nonscaledCurrent.nonscaledCurrent;
      const item = closure_4.forEach((arg0) => {
        let onFrameResult = c3;
        if (c3) {
          onFrameResult = obj.onFrame(nonscaledCurrent[arg0], closure_1);
        }
        c3 = onFrameResult;
        items.push(nonscaledCurrent[arg0].current);
      });
      outer1_0(outer1_1[5]).clampRGBA(items);
      nonscaledCurrent.nonscaledCurrent = items;
      const obj = outer1_0(outer1_1[5]);
      const obj2 = outer1_0(outer1_1[5]);
      nonscaledCurrent.current = obj2.rgbaArrayToRGBAColor(outer1_0(outer1_1[5]).toGammaSpace(items));
      return c3;
    }
    function transformationMatrixOnFrame(arg0, arg1) {
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      let tmp9;
      const callback = arg0;
      const first = arg0[0];
      const dependencyMap = arg0[0].current / 100;
      const items = [];
      const items1 = ["translationMatrix", "scaleMatrix", "skewMatrix"];
      const item = items1.forEach((arg0, arg1) => {
        if (typeof outer1_8 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const obj = lib(1695);
        const tmp2 = dependencyMap;
        const obj2 = lib(1695);
        return items.push(obj.addMatrices(lib.startMatrices[arg0], obj2.scaleMatrix(lib(1695).subtractMatrices(lib.stopMatrices[arg0], lib.startMatrices[arg0]), tmp2)));
      });
      const items2 = [];
      const items3 = ["x", "y", "z"];
      [tmp3, tmp4, tmp5] = items;
      const item1 = items3.forEach((arg0, arg1) => {
        if (typeof outer1_9 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const sum = tmp2 + dependencyMap * (lib.stopMatrices["r" + arg0] - tmp2);
        items2.push(lib(1695).getRotationMatrix(sum, arg0));
      });
      [tmp7, tmp8, tmp9] = items2;
      const onFrameResult = first.onFrame(arg0[0], arg1);
      let obj2 = callback(1695);
      const obj3 = callback(1695);
      const multiplyMatricesResult = obj2.multiplyMatrices(tmp7, callback(1695).multiplyMatrices(tmp8, tmp9));
      const obj4 = callback(1695);
      const obj5 = callback(1695);
      const obj6 = callback(1695);
      arg0.current = obj4.flatten(obj5.multiplyMatrices(obj6.multiplyMatrices(tmp4, callback(1695).multiplyMatrices(tmp5, multiplyMatricesResult)), tmp3));
      return onFrameResult;
    }
    function arrayOnFrame(current) {
      let closure_0 = current;
      let closure_1 = arg1;
      let c2 = true;
      current = current.current;
      const item = current.forEach((arg0, arg1) => {
        let onFrameResult = c2;
        if (c2) {
          onFrameResult = obj.onFrame(dependencyMap[arg1], closure_1);
        }
        c2 = onFrameResult;
        dependencyMap.current[arg1] = dependencyMap[arg1].current;
      });
      return c2;
    }
    function objectOnFrame(current) {
      const obj = {};
      let flag = true;
      let flag2 = true;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag2 = flag;
        while (keys[tmp] !== undefined) {
          let tmp6 = tmp4;
          let obj2 = current[tmp4];
          let onFrameResult = flag;
          if (flag) {
            onFrameResult = obj2.onFrame(current[tmp4], arg1);
          }
          obj[tmp4] = current[tmp4].current;
          flag = onFrameResult;
          continue;
        }
      }
      current.current = obj;
      return flag2;
    }
    isHigherOrder.onStart = (reduceMotion, current, arg2, current2) => {
      let prefix;
      let strippedValue;
      if (undefined === reduceMotion.reduceMotion) {
        if (typeof arrayOnFrame !== "function") {
          HermesBuiltin.throwTypeError();
        }
        reduceMotion.reduceMotion = transformationMatrixOnFrame.value;
      }
      if (reduceMotion.reduceMotion) {
        if (undefined !== reduceMotion.toValue) {
          reduceMotion.current = reduceMotion.toValue;
        } else {
          callback(reduceMotion, current, arg2, current2);
        }
        reduceMotion.startTime = 0;
        reduceMotion.onFrame = () => true;
      } else {
        let obj = outer1_0(outer1_1[5]);
        if (obj.isColor(current)) {
          callback = reduceMotion;
          let closure_1 = arg2;
          let closure_2 = current2;
          const items = [];
          let tmp3Result = tmp3(tmp4[5]);
          if (tmp3Result.isColor(current)) {
            tmp3Result = tmp3(tmp4[5]);
            let closure_4 = tmp3Result.toLinearSpace(tmp3(tmp4[5]).convertToRGBA(reduceMotion.current));
            const tmp3Result1 = tmp3(tmp4[5]);
            const tmp3Result2 = tmp3(tmp4[5]);
            let closure_3 = tmp3Result2.toLinearSpace(tmp3(tmp4[5]).convertToRGBA(current));
            if (reduceMotion.toValue) {
              const tmp3Result4 = tmp3(tmp4[5]);
              let closure_5 = tmp3Result4.toLinearSpace(tmp3(tmp4[5]).convertToRGBA(reduceMotion.toValue));
              const tmp3Result5 = tmp3(tmp4[5]);
            }
            const tmp3Result3 = tmp3(tmp4[5]);
          }
          const item = closure_4.forEach((arg0, arg1) => {
            toValue[arg0] = Object.assign({}, dependencyMap);
            toValue[arg0].current = table2[arg1];
            let tmp2;
            if (table3) {
              tmp2 = table3[arg1];
            }
            toValue[arg0].toValue = tmp2;
            let tmp4;
            if (dependencyMap) {
              tmp4 = dependencyMap[arg0];
            }
            toValue[arg0].onStart(toValue[arg0], table[arg1], closure_1, tmp4);
            items.push(toValue[arg0].current);
          });
          reduceMotion.unroundedCurrent = items;
          tmp3(tmp4[5]).clampRGBA(items);
          const tmp3Result6 = tmp3(tmp4[5]);
          const tmp3Result7 = tmp3(tmp4[5]);
          reduceMotion.current = tmp3Result7.rgbaArrayToRGBAColor(tmp3(tmp4[5]).toGammaSpace(items));
          reduceMotion.onFrame = closure_5;
          const tmp3Result8 = tmp3(tmp4[5]);
        } else {
          if (tmp3Result9.isAffineMatrixFlat(current)) {
            reduceMotion.startMatrices = tmp3(tmp4[4]).decomposeMatrixIntoMatricesAndAngles(current);
            const tmp3Result10 = tmp3(tmp4[4]);
            reduceMotion.stopMatrices = tmp3(tmp4[4]).decomposeMatrixIntoMatricesAndAngles(reduceMotion.toValue);
            const _Object = Object;
            reduceMotion[0] = Object.assign({}, closure_2);
            reduceMotion[0].current = 0;
            reduceMotion[0].toValue = 100;
            const first = reduceMotion[0];
            const first1 = reduceMotion[0];
            let first2;
            if (current2) {
              first2 = current2[0];
            }
            first.onStart(first1, 0, arg2, first2);
            reduceMotion.current = current;
            reduceMotion.onFrame = items;
            const tmp3Result11 = tmp3(tmp4[4]);
          } else {
            prefix = globalThis;
            const _Array = Array;
            if (Array.isArray(current)) {
              callback = reduceMotion;
              closure_1 = arg2;
              closure_2 = current2;
              const item1 = current.forEach((current) => {
                toValue[arg1] = Object.assign({}, dependencyMap);
                toValue[arg1].current = current;
                toValue[arg1].toValue = toValue.toValue[arg1];
                let tmp2;
                if (dependencyMap) {
                  tmp2 = dependencyMap[arg1];
                }
                toValue[arg1].onStart(toValue[arg1], current, closure_1, tmp2);
              });
              const items1 = [];
              HermesBuiltin.arraySpread(current, 0);
              reduceMotion.current = items1;
              reduceMotion.onFrame = arrayOnFrame;
            } else if (typeof current === "string") {
              if (typeof colorOnFrame !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof current === "string") {
                const match = current.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                if (match) {
                  let str2 = match[3];
                  if (str2 == null) {
                    str2 = "";
                  }
                  obj = { prefix: null, suffix: null, strippedValue: null };
                  obj[0] = match[1];
                  obj[1] = match[4];
                  const _parseFloat = parseFloat;
                  obj[2] = parseFloat(match[2] + str2);
                } else {
                  const reanimatedError = new tmp3(tmp4[2]).ReanimatedError("Couldn't parse animation value.");
                  throw reanimatedError;
                }
              } else {
                obj = { strippedValue: null };
                obj[0] = current;
              }
              ({ strippedValue, prefix: reduceMotion.__prefix, suffix: reduceMotion.__suffix } = obj);
              reduceMotion.strippedCurrent = strippedValue;
              if (typeof colorOnFrame !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof reduceMotion.toValue === "string") {
                const match1 = str3.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                if (match1) {
                  let str5 = match1[3];
                  if (str5 == null) {
                    str5 = "";
                  }
                  const obj1 = { prefix: null, suffix: null, strippedValue: null };
                  obj1[0] = match1[1];
                  obj1[1] = match1[4];
                  const _parseFloat2 = parseFloat;
                  obj1[2] = parseFloat(match1[2] + str5);
                  let obj2 = obj1;
                } else {
                  const reanimatedError1 = new tmp3(tmp4[2]).ReanimatedError("Couldn't parse animation value.");
                  throw reanimatedError1;
                }
              } else {
                obj2 = { strippedValue: null };
                obj2[0] = str3;
              }
              reduceMotion.current = strippedValue;
              reduceMotion.startValue = strippedValue;
              reduceMotion.toValue = obj2.strippedValue;
              if (current2) {
                if (current2 !== reduceMotion) {
                  if (typeof tmp21 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof current2.current === "string") {
                    const match2 = str7.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                    if (match2) {
                      let str8 = match2[3];
                      if (str8 == null) {
                        str8 = "";
                      }
                      const obj3 = { prefix: null, suffix: null, strippedValue: null };
                      obj3[0] = match2[1];
                      obj3[1] = match2[4];
                      obj3[2] = prefix.parseFloat(match2[2] + str8);
                      let obj4 = obj3;
                    } else {
                      const reanimatedError2 = new tmp3(tmp4[2]).ReanimatedError("Couldn't parse animation value.");
                      throw reanimatedError2;
                    }
                  } else {
                    obj4 = { strippedValue: null };
                    obj4[0] = str7;
                  }
                  ({ prefix, strippedValue: current2.current } = obj4);
                  current2.__prefix = prefix;
                  current2.__suffix = obj4.suffix;
                }
              }
              callback(reduceMotion, strippedValue, arg2, current2);
              let str9 = reduceMotion.__prefix;
              if (str9 == null) {
                str9 = "";
              }
              let str10 = reduceMotion.__suffix;
              const sum = str9 + reduceMotion.current;
              if (str10 == null) {
                str10 = "";
              }
              reduceMotion.current = sum + str10;
              let tmp48 = current2;
              if (current2) {
                tmp48 = current2 !== reduceMotion;
              }
              if (tmp48) {
                let str11 = current2.__prefix;
                if (str11 == null) {
                  str11 = "";
                }
                let str12 = current2.__suffix;
                const sum1 = str11 + current2.current;
                if (str12 == null) {
                  str12 = "";
                }
                current2.current = sum1 + str12;
              }
              reduceMotion.onFrame = closure_3;
            } else {
              if (typeof current === "object") {
                if (null !== current) {
                  for (const key10034 in arg1) {
                    let tmp78 = key10034;
                    let _Object2 = Object;
                    let tmp79 = closure_2;
                    arg0[key10034] = Object.assign({}, closure_2);
                    arg0[key10034].onStart = arg0.onStart;
                    arg0[key10034].current = arg1[key10034];
                    arg0[key10034].toValue = arg0.toValue[key10034];
                    let obj22 = arg0[key10034];
                    let tmp80 = arg0[key10034];
                    let tmp81 = arg1[key10034];
                    let tmp13;
                    if (arg3) {
                      tmp13 = arg3[key10034];
                    }
                    let tmp14 = obj22;
                    let tmp15 = tmp80;
                    let tmp16 = tmp81;
                    let tmp17 = arg2;
                    let tmp18 = tmp13;
                    let onStartResult1 = obj22.onStart(tmp80, tmp81, arg2, tmp13);
                    continue;
                  }
                  reduceMotion.current = current;
                  reduceMotion.onFrame = objectOnFrame;
                }
              }
              callback(reduceMotion, current, arg2, current2);
            }
          }
          tmp3Result9 = tmp3(tmp4[4]);
        }
        return tmp11;
      }
    };
  }
}
let obj2 = { addMatrices: require("isAffineMatrixFlat").addMatrices, scaleMatrix: require("isAffineMatrixFlat").scaleMatrix, subtractMatrices: require("isAffineMatrixFlat").subtractMatrices };
decorateAnimation.__closure = { getReduceMotionFromConfig, recognizePrefixSuffix, isColor: require("call").isColor, toLinearSpace: require("call").toLinearSpace, convertToRGBA: require("call").convertToRGBA, clampRGBA: require("call").clampRGBA, rgbaArrayToRGBAColor: require("call").rgbaArrayToRGBAColor, toGammaSpace: require("call").toGammaSpace, decomposeMatrixIntoMatricesAndAngles: require("isAffineMatrixFlat").decomposeMatrixIntoMatricesAndAngles, applyProgressToMatrix, applyProgressToNumber, getRotationMatrix: require("isAffineMatrixFlat").getRotationMatrix, multiplyMatrices: require("isAffineMatrixFlat").multiplyMatrices, flatten: require("isAffineMatrixFlat").flatten, isAffineMatrixFlat: require("isAffineMatrixFlat").isAffineMatrixFlat };
decorateAnimation.__workletHash = 6240615473022;
decorateAnimation.__initData = { code: "function decorateAnimation_Pnpm_utilTs8(animation){const{getReduceMotionFromConfig,recognizePrefixSuffix,isColor,toLinearSpace,convertToRGBA,clampRGBA,rgbaArrayToRGBAColor,toGammaSpace,decomposeMatrixIntoMatricesAndAngles,applyProgressToMatrix,applyProgressToNumber,getRotationMatrix,multiplyMatrices,flatten,isAffineMatrixFlat}=this.__closure;const baseOnStart=animation.onStart;const baseOnFrame=animation.onFrame;if(animation.isHigherOrder){animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}return baseOnStart(animation,value,timestamp,previousAnimation);};return;}const animationCopy=Object.assign({},animation);delete animationCopy.callback;const prefNumberSuffOnStart=function(animation,value,timestamp,previousAnimation){var _animation$__prefix,_animation$__suffix;const{prefix:prefix,suffix:suffix,strippedValue:strippedValue}=recognizePrefixSuffix(value);animation.__prefix=prefix;animation.__suffix=suffix;animation.strippedCurrent=strippedValue;const{strippedValue:strippedToValue}=recognizePrefixSuffix(animation.toValue);animation.current=strippedValue;animation.startValue=strippedValue;animation.toValue=strippedToValue;if(previousAnimation&&previousAnimation!==animation){const{prefix:paPrefix,suffix:paSuffix,strippedValue:paStrippedValue}=recognizePrefixSuffix(previousAnimation.current);previousAnimation.current=paStrippedValue;previousAnimation.__prefix=paPrefix;previousAnimation.__suffix=paSuffix;}baseOnStart(animation,strippedValue,timestamp,previousAnimation);animation.current=((_animation$__prefix=animation.__prefix)!==null&&_animation$__prefix!==void 0?_animation$__prefix:'')+animation.current+((_animation$__suffix=animation.__suffix)!==null&&_animation$__suffix!==void 0?_animation$__suffix:'');if(previousAnimation&&previousAnimation!==animation){var _previousAnimation$__,_previousAnimation$__2;previousAnimation.current=((_previousAnimation$__=previousAnimation.__prefix)!==null&&_previousAnimation$__!==void 0?_previousAnimation$__:'')+previousAnimation.current+((_previousAnimation$__2=previousAnimation.__suffix)!==null&&_previousAnimation$__2!==void 0?_previousAnimation$__2:'');}};const prefNumberSuffOnFrame=function(animation,timestamp){var _animation$__prefix2,_animation$__suffix2;animation.current=animation.strippedCurrent;const res=baseOnFrame(animation,timestamp);animation.strippedCurrent=animation.current;animation.current=((_animation$__prefix2=animation.__prefix)!==null&&_animation$__prefix2!==void 0?_animation$__prefix2:'')+animation.current+((_animation$__suffix2=animation.__suffix)!==null&&_animation$__suffix2!==void 0?_animation$__suffix2:'');return res;};const tab=['R','G','B','A'];const colorOnStart=function(animation,value,timestamp,previousAnimation){let RGBAValue;let RGBACurrent;let RGBAToValue;const res=[];if(isColor(value)){RGBACurrent=toLinearSpace(convertToRGBA(animation.current));RGBAValue=toLinearSpace(convertToRGBA(value));if(animation.toValue){RGBAToValue=toLinearSpace(convertToRGBA(animation.toValue));}}tab.forEach(function(i,index){animation[i]=Object.assign({},animationCopy);animation[i].current=RGBACurrent[index];animation[i].toValue=RGBAToValue?RGBAToValue[index]:undefined;animation[i].onStart(animation[i],RGBAValue[index],timestamp,previousAnimation?previousAnimation[i]:undefined);res.push(animation[i].current);});animation.unroundedCurrent=res;clampRGBA(res);animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));};const colorOnFrame=function(animation,timestamp){const res=[];let finished=true;animation.current=animation.nonscaledCurrent;tab.forEach(function(i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;res.push(animation[i].current);});clampRGBA(res);animation.nonscaledCurrent=res;animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));return finished;};const transformationMatrixOnStart=function(animation,value,timestamp,previousAnimation){const toValue=animation.toValue;animation.startMatrices=decomposeMatrixIntoMatricesAndAngles(value);animation.stopMatrices=decomposeMatrixIntoMatricesAndAngles(toValue);animation[0]=Object.assign({},animationCopy);animation[0].current=0;animation[0].toValue=100;animation[0].onStart(animation[0],0,timestamp,previousAnimation?previousAnimation[0]:undefined);animation.current=value;};const transformationMatrixOnFrame=function(animation,timestamp){let finished=true;const result=animation[0].onFrame(animation[0],timestamp);finished=finished&&result;const progress=animation[0].current/100;const transforms=['translationMatrix','scaleMatrix','skewMatrix'];const mappedTransforms=[];transforms.forEach(function(key,_){return mappedTransforms.push(applyProgressToMatrix(progress,animation.startMatrices[key],animation.stopMatrices[key]));});const[currentTranslation,currentScale,skewMatrix]=mappedTransforms;const rotations=['x','y','z'];const mappedRotations=[];rotations.forEach(function(key,_){const angle=applyProgressToNumber(progress,animation.startMatrices['r'+key],animation.stopMatrices['r'+key]);mappedRotations.push(getRotationMatrix(angle,key));});const[rotationMatrixX,rotationMatrixY,rotationMatrixZ]=mappedRotations;const rotationMatrix=multiplyMatrices(rotationMatrixX,multiplyMatrices(rotationMatrixY,rotationMatrixZ));const updated=flatten(multiplyMatrices(multiplyMatrices(currentScale,multiplyMatrices(skewMatrix,rotationMatrix)),currentTranslation));animation.current=updated;return finished;};const arrayOnStart=function(animation,value,timestamp,previousAnimation){value.forEach(function(v,i){animation[i]=Object.assign({},animationCopy);animation[i].current=v;animation[i].toValue=animation.toValue[i];animation[i].onStart(animation[i],v,timestamp,previousAnimation?previousAnimation[i]:undefined);});animation.current=[...value];};const arrayOnFrame=function(animation,timestamp){let finished=true;animation.current.forEach(function(_,i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;animation.current[i]=animation[i].current;});return finished;};const objectOnStart=function(animation,value,timestamp,previousAnimation){for(const key in value){animation[key]=Object.assign({},animationCopy);animation[key].onStart=animation.onStart;animation[key].current=value[key];animation[key].toValue=animation.toValue[key];animation[key].onStart(animation[key],value[key],timestamp,previousAnimation?previousAnimation[key]:undefined);}animation.current=value;};const objectOnFrame=function(animation,timestamp){let finished=true;const newObject={};for(const key in animation.current){const result=animation[key].onFrame(animation[key],timestamp);finished=finished&&result;newObject[key]=animation[key].current;}animation.current=newObject;return finished;};animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}if(animation.reduceMotion){if(animation.toValue!==undefined){animation.current=animation.toValue;}else{baseOnStart(animation,value,timestamp,previousAnimation);}animation.startTime=0;animation.onFrame=function(){return true;};return;}if(isColor(value)){colorOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=colorOnFrame;return;}else if(isAffineMatrixFlat(value)){transformationMatrixOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=transformationMatrixOnFrame;return;}else if(Array.isArray(value)){arrayOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=arrayOnFrame;return;}else if(typeof value==='string'){prefNumberSuffOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=prefNumberSuffOnFrame;return;}else if(typeof value==='object'&&value!==null){objectOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=objectOnFrame;return;}baseOnStart(animation,value,timestamp,previousAnimation);};}" };
let closure_11 = { code: "function pnpm_utilTs10(){const{factory,decorateAnimation}=this.__closure;const animation=factory();decorateAnimation(animation);return animation;}" };
function defineAnimation(toValue, fn) {
  let closure_0;
  let dependencyMap;
  closure_0 = fn;
  if (closure_2) {
    return toValue;
  } else {
    fn = function o() {
      let closure_0;
      let closure_1;
      const tmp3 = callback();
      if (typeof outer1_10 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      ({ onStart: closure_0, onFrame: closure_1 } = tmp3);
      if (tmp3.isHigherOrder) {
        tmp3.onStart = (reduceMotion) => {
          if (undefined === reduceMotion.reduceMotion) {
            if (typeof arrayOnFrame !== "function") {
              HermesBuiltin.throwTypeError();
            }
            reduceMotion.reduceMotion = transformationMatrixOnFrame.value;
          }
          return callback(reduceMotion, arg1, arg2, arg3);
        };
      } else {
        let _Object = Object;
        let closure_2 = Object.assign({}, tmp3);
        delete tmp2[tmp];
        function prefNumberSuffOnFrame(strippedCurrent) {
          let __prefix;
          strippedCurrent.current = strippedCurrent.strippedCurrent;
          ({ current: strippedCurrent.strippedCurrent, __prefix } = strippedCurrent);
          if (__prefix == null) {
            __prefix = "";
          }
          let str = strippedCurrent.__suffix;
          const sum = __prefix + strippedCurrent.current;
          if (str == null) {
            str = "";
          }
          strippedCurrent.current = sum + str;
          return dependencyMap(strippedCurrent, arg1);
        }
        let closure_4 = ["R", "G", "B", "A"];
        function colorOnFrame(nonscaledCurrent) {
          let closure_0 = nonscaledCurrent;
          let closure_1 = arg1;
          const items = [];
          let c3 = true;
          nonscaledCurrent.current = nonscaledCurrent.nonscaledCurrent;
          const item = closure_4.forEach((arg0) => {
            let onFrameResult = c3;
            if (c3) {
              onFrameResult = obj.onFrame(nonscaledCurrent[arg0], closure_1);
            }
            c3 = onFrameResult;
            items.push(nonscaledCurrent[arg0].current);
          });
          outer1_0(outer1_1[5]).clampRGBA(items);
          nonscaledCurrent.nonscaledCurrent = items;
          const obj = outer1_0(outer1_1[5]);
          const obj2 = outer1_0(outer1_1[5]);
          nonscaledCurrent.current = obj2.rgbaArrayToRGBAColor(outer1_0(outer1_1[5]).toGammaSpace(items));
          return c3;
        }
        function transformationMatrixOnFrame(arg0, arg1) {
          let tmp3;
          let tmp4;
          let tmp5;
          let tmp7;
          let tmp8;
          let tmp9;
          const callback = arg0;
          const first = arg0[0];
          const dependencyMap = arg0[0].current / 100;
          const items = [];
          const items1 = ["translationMatrix", "scaleMatrix", "skewMatrix"];
          const item = items1.forEach((arg0, arg1) => {
            if (typeof outer1_8 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const obj = lib(1695);
            const tmp2 = dependencyMap;
            const obj2 = lib(1695);
            return items.push(obj.addMatrices(lib.startMatrices[arg0], obj2.scaleMatrix(lib(1695).subtractMatrices(lib.stopMatrices[arg0], lib.startMatrices[arg0]), tmp2)));
          });
          const items2 = [];
          const items3 = ["x", "y", "z"];
          [tmp3, tmp4, tmp5] = items;
          const item1 = items3.forEach((arg0, arg1) => {
            if (typeof outer1_9 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const sum = tmp2 + dependencyMap * (lib.stopMatrices["r" + arg0] - tmp2);
            items2.push(lib(1695).getRotationMatrix(sum, arg0));
          });
          [tmp7, tmp8, tmp9] = items2;
          const onFrameResult = first.onFrame(arg0[0], arg1);
          let obj2 = callback(1695);
          const obj3 = callback(1695);
          const multiplyMatricesResult = obj2.multiplyMatrices(tmp7, callback(1695).multiplyMatrices(tmp8, tmp9));
          const obj4 = callback(1695);
          const obj5 = callback(1695);
          const obj6 = callback(1695);
          arg0.current = obj4.flatten(obj5.multiplyMatrices(obj6.multiplyMatrices(tmp4, callback(1695).multiplyMatrices(tmp5, multiplyMatricesResult)), tmp3));
          return onFrameResult;
        }
        function arrayOnFrame(current) {
          let closure_0 = current;
          let closure_1 = arg1;
          let c2 = true;
          current = current.current;
          const item = current.forEach((arg0, arg1) => {
            let onFrameResult = c2;
            if (c2) {
              onFrameResult = obj.onFrame(dependencyMap[arg1], closure_1);
            }
            c2 = onFrameResult;
            dependencyMap.current[arg1] = dependencyMap[arg1].current;
          });
          return c2;
        }
        function objectOnFrame(current) {
          const obj = {};
          let flag = true;
          let flag2 = true;
          const keys = Object.keys();
          if (keys !== undefined) {
            flag2 = flag;
            while (keys[tmp] !== undefined) {
              let tmp6 = tmp4;
              let obj2 = current[tmp4];
              let onFrameResult = flag;
              if (flag) {
                onFrameResult = obj2.onFrame(current[tmp4], arg1);
              }
              obj[tmp4] = current[tmp4].current;
              flag = onFrameResult;
              continue;
            }
          }
          current.current = obj;
          return flag2;
        }
        tmp3.onStart = (reduceMotion, current, arg2, current2) => {
          let prefix;
          let strippedValue;
          if (undefined === reduceMotion.reduceMotion) {
            if (typeof arrayOnFrame !== "function") {
              HermesBuiltin.throwTypeError();
            }
            reduceMotion.reduceMotion = transformationMatrixOnFrame.value;
          }
          if (reduceMotion.reduceMotion) {
            if (undefined !== reduceMotion.toValue) {
              reduceMotion.current = reduceMotion.toValue;
            } else {
              callback(reduceMotion, current, arg2, current2);
            }
            reduceMotion.startTime = 0;
            reduceMotion.onFrame = () => true;
          } else {
            let obj = outer1_0(outer1_1[5]);
            if (obj.isColor(current)) {
              callback = reduceMotion;
              let closure_1 = arg2;
              let closure_2 = current2;
              const items = [];
              let tmp3Result = tmp3(tmp4[5]);
              if (tmp3Result.isColor(current)) {
                tmp3Result = tmp3(tmp4[5]);
                let closure_4 = tmp3Result.toLinearSpace(tmp3(tmp4[5]).convertToRGBA(reduceMotion.current));
                const tmp3Result1 = tmp3(tmp4[5]);
                const tmp3Result2 = tmp3(tmp4[5]);
                let closure_3 = tmp3Result2.toLinearSpace(tmp3(tmp4[5]).convertToRGBA(current));
                if (reduceMotion.toValue) {
                  const tmp3Result4 = tmp3(tmp4[5]);
                  let closure_5 = tmp3Result4.toLinearSpace(tmp3(tmp4[5]).convertToRGBA(reduceMotion.toValue));
                  const tmp3Result5 = tmp3(tmp4[5]);
                }
                const tmp3Result3 = tmp3(tmp4[5]);
              }
              const item = closure_4.forEach((arg0, arg1) => {
                toValue[arg0] = Object.assign({}, dependencyMap);
                toValue[arg0].current = table2[arg1];
                let tmp2;
                if (table3) {
                  tmp2 = table3[arg1];
                }
                toValue[arg0].toValue = tmp2;
                let tmp4;
                if (dependencyMap) {
                  tmp4 = dependencyMap[arg0];
                }
                toValue[arg0].onStart(toValue[arg0], table[arg1], closure_1, tmp4);
                items.push(toValue[arg0].current);
              });
              reduceMotion.unroundedCurrent = items;
              tmp3(tmp4[5]).clampRGBA(items);
              const tmp3Result6 = tmp3(tmp4[5]);
              const tmp3Result7 = tmp3(tmp4[5]);
              reduceMotion.current = tmp3Result7.rgbaArrayToRGBAColor(tmp3(tmp4[5]).toGammaSpace(items));
              reduceMotion.onFrame = closure_5;
              const tmp3Result8 = tmp3(tmp4[5]);
            } else {
              if (tmp3Result9.isAffineMatrixFlat(current)) {
                reduceMotion.startMatrices = tmp3(tmp4[4]).decomposeMatrixIntoMatricesAndAngles(current);
                const tmp3Result10 = tmp3(tmp4[4]);
                reduceMotion.stopMatrices = tmp3(tmp4[4]).decomposeMatrixIntoMatricesAndAngles(reduceMotion.toValue);
                const _Object = Object;
                reduceMotion[0] = Object.assign({}, closure_2);
                reduceMotion[0].current = 0;
                reduceMotion[0].toValue = 100;
                const first = reduceMotion[0];
                const first1 = reduceMotion[0];
                let first2;
                if (current2) {
                  first2 = current2[0];
                }
                first.onStart(first1, 0, arg2, first2);
                reduceMotion.current = current;
                reduceMotion.onFrame = items;
                const tmp3Result11 = tmp3(tmp4[4]);
              } else {
                prefix = globalThis;
                const _Array = Array;
                if (Array.isArray(current)) {
                  callback = reduceMotion;
                  closure_1 = arg2;
                  closure_2 = current2;
                  const item1 = current.forEach((current) => {
                    toValue[arg1] = Object.assign({}, dependencyMap);
                    toValue[arg1].current = current;
                    toValue[arg1].toValue = toValue.toValue[arg1];
                    let tmp2;
                    if (dependencyMap) {
                      tmp2 = dependencyMap[arg1];
                    }
                    toValue[arg1].onStart(toValue[arg1], current, closure_1, tmp2);
                  });
                  const items1 = [];
                  HermesBuiltin.arraySpread(current, 0);
                  reduceMotion.current = items1;
                  reduceMotion.onFrame = arrayOnFrame;
                } else if (typeof current === "string") {
                  if (typeof colorOnFrame !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof current === "string") {
                    const match = current.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                    if (match) {
                      let str2 = match[3];
                      if (str2 == null) {
                        str2 = "";
                      }
                      obj = { prefix: null, suffix: null, strippedValue: null };
                      obj[0] = match[1];
                      obj[1] = match[4];
                      const _parseFloat = parseFloat;
                      obj[2] = parseFloat(match[2] + str2);
                    } else {
                      const reanimatedError = new tmp3(tmp4[2]).ReanimatedError("Couldn't parse animation value.");
                      throw reanimatedError;
                    }
                  } else {
                    obj = { strippedValue: null };
                    obj[0] = current;
                  }
                  ({ strippedValue, prefix: reduceMotion.__prefix, suffix: reduceMotion.__suffix } = obj);
                  reduceMotion.strippedCurrent = strippedValue;
                  if (typeof colorOnFrame !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof reduceMotion.toValue === "string") {
                    const match1 = str3.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                    if (match1) {
                      let str5 = match1[3];
                      if (str5 == null) {
                        str5 = "";
                      }
                      const obj1 = { prefix: null, suffix: null, strippedValue: null };
                      obj1[0] = match1[1];
                      obj1[1] = match1[4];
                      const _parseFloat2 = parseFloat;
                      obj1[2] = parseFloat(match1[2] + str5);
                      let obj2 = obj1;
                    } else {
                      const reanimatedError1 = new tmp3(tmp4[2]).ReanimatedError("Couldn't parse animation value.");
                      throw reanimatedError1;
                    }
                  } else {
                    obj2 = { strippedValue: null };
                    obj2[0] = str3;
                  }
                  reduceMotion.current = strippedValue;
                  reduceMotion.startValue = strippedValue;
                  reduceMotion.toValue = obj2.strippedValue;
                  if (current2) {
                    if (current2 !== reduceMotion) {
                      if (typeof tmp21 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      if (typeof current2.current === "string") {
                        const match2 = str7.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                        if (match2) {
                          let str8 = match2[3];
                          if (str8 == null) {
                            str8 = "";
                          }
                          const obj3 = { prefix: null, suffix: null, strippedValue: null };
                          obj3[0] = match2[1];
                          obj3[1] = match2[4];
                          obj3[2] = prefix.parseFloat(match2[2] + str8);
                          let obj4 = obj3;
                        } else {
                          const reanimatedError2 = new tmp3(tmp4[2]).ReanimatedError("Couldn't parse animation value.");
                          throw reanimatedError2;
                        }
                      } else {
                        obj4 = { strippedValue: null };
                        obj4[0] = str7;
                      }
                      ({ prefix, strippedValue: current2.current } = obj4);
                      current2.__prefix = prefix;
                      current2.__suffix = obj4.suffix;
                    }
                  }
                  callback(reduceMotion, strippedValue, arg2, current2);
                  let str9 = reduceMotion.__prefix;
                  if (str9 == null) {
                    str9 = "";
                  }
                  let str10 = reduceMotion.__suffix;
                  const sum = str9 + reduceMotion.current;
                  if (str10 == null) {
                    str10 = "";
                  }
                  reduceMotion.current = sum + str10;
                  let tmp48 = current2;
                  if (current2) {
                    tmp48 = current2 !== reduceMotion;
                  }
                  if (tmp48) {
                    let str11 = current2.__prefix;
                    if (str11 == null) {
                      str11 = "";
                    }
                    let str12 = current2.__suffix;
                    const sum1 = str11 + current2.current;
                    if (str12 == null) {
                      str12 = "";
                    }
                    current2.current = sum1 + str12;
                  }
                  reduceMotion.onFrame = closure_3;
                } else {
                  if (typeof current === "object") {
                    if (null !== current) {
                      for (const key10034 in arg1) {
                        let tmp78 = key10034;
                        let _Object2 = Object;
                        let tmp79 = closure_2;
                        arg0[key10034] = Object.assign({}, closure_2);
                        arg0[key10034].onStart = arg0.onStart;
                        arg0[key10034].current = arg1[key10034];
                        arg0[key10034].toValue = arg0.toValue[key10034];
                        let obj22 = arg0[key10034];
                        let tmp80 = arg0[key10034];
                        let tmp81 = arg1[key10034];
                        let tmp13;
                        if (arg3) {
                          tmp13 = arg3[key10034];
                        }
                        let tmp14 = obj22;
                        let tmp15 = tmp80;
                        let tmp16 = tmp81;
                        let tmp17 = arg2;
                        let tmp18 = tmp13;
                        let onStartResult1 = obj22.onStart(tmp80, tmp81, arg2, tmp13);
                        continue;
                      }
                      reduceMotion.current = current;
                      reduceMotion.onFrame = objectOnFrame;
                    }
                  }
                  callback(reduceMotion, current, arg2, current2);
                }
              }
              tmp3Result9 = tmp3(tmp4[4]);
            }
            return tmp11;
          }
        };
      }
      return tmp3;
    };
    let obj = { factory: null, decorateAnimation: null };
    obj[0] = fn;
    obj[1] = decorateAnimation;
    fn.__closure = obj;
    fn.__workletHash = 9825023081203;
    fn.__initData = closure_11;
    if (!globalThis._WORKLET) {
      if (!prefNumberSuffOnFrame) {
        fn.__isAnimationDefinition = true;
      }
      return fn;
    }
    const tmp7 = fn();
    if (typeof tmp3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    ({ onStart: closure_0, onFrame: dependencyMap } = tmp7);
    if (tmp7.isHigherOrder) {
      tmp7.onStart = (reduceMotion) => {
        if (undefined === reduceMotion.reduceMotion) {
          if (typeof arrayOnFrame !== "function") {
            HermesBuiltin.throwTypeError();
          }
          reduceMotion.reduceMotion = transformationMatrixOnFrame.value;
        }
        return callback(reduceMotion, arg1, arg2, arg3);
      };
      fn = tmp7;
    } else {
      let _Object = Object;
      closure_2 = Object.assign({}, tmp7);
      delete tmp2[tmp];
      prefNumberSuffOnFrame = function prefNumberSuffOnFrame(strippedCurrent) {
        let __prefix;
        strippedCurrent.current = strippedCurrent.strippedCurrent;
        ({ current: strippedCurrent.strippedCurrent, __prefix } = strippedCurrent);
        if (__prefix == null) {
          __prefix = "";
        }
        let str = strippedCurrent.__suffix;
        const sum = __prefix + strippedCurrent.current;
        if (str == null) {
          str = "";
        }
        strippedCurrent.current = sum + str;
        return dependencyMap(strippedCurrent, arg1);
      };
      let closure_4 = ["R", "G", "B", "A"];
      function colorOnFrame(nonscaledCurrent) {
        let closure_0 = nonscaledCurrent;
        let closure_1 = arg1;
        const items = [];
        let c3 = true;
        nonscaledCurrent.current = nonscaledCurrent.nonscaledCurrent;
        const item = closure_4.forEach((arg0) => {
          let onFrameResult = c3;
          if (c3) {
            onFrameResult = obj.onFrame(nonscaledCurrent[arg0], closure_1);
          }
          c3 = onFrameResult;
          items.push(nonscaledCurrent[arg0].current);
        });
        outer1_0(outer1_1[5]).clampRGBA(items);
        nonscaledCurrent.nonscaledCurrent = items;
        const obj = outer1_0(outer1_1[5]);
        const obj2 = outer1_0(outer1_1[5]);
        nonscaledCurrent.current = obj2.rgbaArrayToRGBAColor(outer1_0(outer1_1[5]).toGammaSpace(items));
        return c3;
      }
      function transformationMatrixOnFrame(arg0, arg1) {
        let tmp3;
        let tmp4;
        let tmp5;
        let tmp7;
        let tmp8;
        let tmp9;
        const callback = arg0;
        const first = arg0[0];
        const dependencyMap = arg0[0].current / 100;
        const items = [];
        const items1 = ["translationMatrix", "scaleMatrix", "skewMatrix"];
        const item = items1.forEach((arg0, arg1) => {
          if (typeof outer1_8 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const obj = lib(1695);
          const tmp2 = dependencyMap;
          const obj2 = lib(1695);
          return items.push(obj.addMatrices(lib.startMatrices[arg0], obj2.scaleMatrix(lib(1695).subtractMatrices(lib.stopMatrices[arg0], lib.startMatrices[arg0]), tmp2)));
        });
        const items2 = [];
        const items3 = ["x", "y", "z"];
        [tmp3, tmp4, tmp5] = items;
        const item1 = items3.forEach((arg0, arg1) => {
          if (typeof outer1_9 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const sum = tmp2 + dependencyMap * (lib.stopMatrices["r" + arg0] - tmp2);
          items2.push(lib(1695).getRotationMatrix(sum, arg0));
        });
        [tmp7, tmp8, tmp9] = items2;
        const onFrameResult = first.onFrame(arg0[0], arg1);
        let obj2 = callback(1695);
        const obj3 = callback(1695);
        const multiplyMatricesResult = obj2.multiplyMatrices(tmp7, callback(1695).multiplyMatrices(tmp8, tmp9));
        const obj4 = callback(1695);
        const obj5 = callback(1695);
        const obj6 = callback(1695);
        arg0.current = obj4.flatten(obj5.multiplyMatrices(obj6.multiplyMatrices(tmp4, callback(1695).multiplyMatrices(tmp5, multiplyMatricesResult)), tmp3));
        return onFrameResult;
      }
      function arrayOnFrame(current) {
        let closure_0 = current;
        let closure_1 = arg1;
        let c2 = true;
        current = current.current;
        const item = current.forEach((arg0, arg1) => {
          let onFrameResult = c2;
          if (c2) {
            onFrameResult = obj.onFrame(dependencyMap[arg1], closure_1);
          }
          c2 = onFrameResult;
          dependencyMap.current[arg1] = dependencyMap[arg1].current;
        });
        return c2;
      }
      function objectOnFrame(current) {
        const obj = {};
        let flag = true;
        let flag2 = true;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag2 = flag;
          while (keys[tmp] !== undefined) {
            let tmp6 = tmp4;
            let obj2 = current[tmp4];
            let onFrameResult = flag;
            if (flag) {
              onFrameResult = obj2.onFrame(current[tmp4], arg1);
            }
            obj[tmp4] = current[tmp4].current;
            flag = onFrameResult;
            continue;
          }
        }
        current.current = obj;
        return flag2;
      }
      tmp7.onStart = (reduceMotion, current, arg2, current2) => {
        let prefix;
        let strippedValue;
        if (undefined === reduceMotion.reduceMotion) {
          if (typeof arrayOnFrame !== "function") {
            HermesBuiltin.throwTypeError();
          }
          reduceMotion.reduceMotion = transformationMatrixOnFrame.value;
        }
        if (reduceMotion.reduceMotion) {
          if (undefined !== reduceMotion.toValue) {
            reduceMotion.current = reduceMotion.toValue;
          } else {
            callback(reduceMotion, current, arg2, current2);
          }
          reduceMotion.startTime = 0;
          reduceMotion.onFrame = () => true;
        } else {
          let obj = outer1_0(outer1_1[5]);
          if (obj.isColor(current)) {
            callback = reduceMotion;
            let closure_1 = arg2;
            let closure_2 = current2;
            const items = [];
            let tmp3Result = tmp3(tmp4[5]);
            if (tmp3Result.isColor(current)) {
              tmp3Result = tmp3(tmp4[5]);
              let closure_4 = tmp3Result.toLinearSpace(tmp3(tmp4[5]).convertToRGBA(reduceMotion.current));
              const tmp3Result1 = tmp3(tmp4[5]);
              const tmp3Result2 = tmp3(tmp4[5]);
              let closure_3 = tmp3Result2.toLinearSpace(tmp3(tmp4[5]).convertToRGBA(current));
              if (reduceMotion.toValue) {
                const tmp3Result4 = tmp3(tmp4[5]);
                let closure_5 = tmp3Result4.toLinearSpace(tmp3(tmp4[5]).convertToRGBA(reduceMotion.toValue));
                const tmp3Result5 = tmp3(tmp4[5]);
              }
              const tmp3Result3 = tmp3(tmp4[5]);
            }
            const item = closure_4.forEach((arg0, arg1) => {
              toValue[arg0] = Object.assign({}, dependencyMap);
              toValue[arg0].current = table2[arg1];
              let tmp2;
              if (table3) {
                tmp2 = table3[arg1];
              }
              toValue[arg0].toValue = tmp2;
              let tmp4;
              if (dependencyMap) {
                tmp4 = dependencyMap[arg0];
              }
              toValue[arg0].onStart(toValue[arg0], table[arg1], closure_1, tmp4);
              items.push(toValue[arg0].current);
            });
            reduceMotion.unroundedCurrent = items;
            tmp3(tmp4[5]).clampRGBA(items);
            const tmp3Result6 = tmp3(tmp4[5]);
            const tmp3Result7 = tmp3(tmp4[5]);
            reduceMotion.current = tmp3Result7.rgbaArrayToRGBAColor(tmp3(tmp4[5]).toGammaSpace(items));
            reduceMotion.onFrame = closure_5;
            const tmp3Result8 = tmp3(tmp4[5]);
          } else {
            if (tmp3Result9.isAffineMatrixFlat(current)) {
              reduceMotion.startMatrices = tmp3(tmp4[4]).decomposeMatrixIntoMatricesAndAngles(current);
              const tmp3Result10 = tmp3(tmp4[4]);
              reduceMotion.stopMatrices = tmp3(tmp4[4]).decomposeMatrixIntoMatricesAndAngles(reduceMotion.toValue);
              const _Object = Object;
              reduceMotion[0] = Object.assign({}, closure_2);
              reduceMotion[0].current = 0;
              reduceMotion[0].toValue = 100;
              const first = reduceMotion[0];
              const first1 = reduceMotion[0];
              let first2;
              if (current2) {
                first2 = current2[0];
              }
              first.onStart(first1, 0, arg2, first2);
              reduceMotion.current = current;
              reduceMotion.onFrame = items;
              const tmp3Result11 = tmp3(tmp4[4]);
            } else {
              prefix = globalThis;
              const _Array = Array;
              if (Array.isArray(current)) {
                callback = reduceMotion;
                closure_1 = arg2;
                closure_2 = current2;
                const item1 = current.forEach((current) => {
                  toValue[arg1] = Object.assign({}, dependencyMap);
                  toValue[arg1].current = current;
                  toValue[arg1].toValue = toValue.toValue[arg1];
                  let tmp2;
                  if (dependencyMap) {
                    tmp2 = dependencyMap[arg1];
                  }
                  toValue[arg1].onStart(toValue[arg1], current, closure_1, tmp2);
                });
                const items1 = [];
                HermesBuiltin.arraySpread(current, 0);
                reduceMotion.current = items1;
                reduceMotion.onFrame = arrayOnFrame;
              } else if (typeof current === "string") {
                if (typeof colorOnFrame !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (typeof current === "string") {
                  const match = current.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                  if (match) {
                    let str2 = match[3];
                    if (str2 == null) {
                      str2 = "";
                    }
                    obj = { prefix: null, suffix: null, strippedValue: null };
                    obj[0] = match[1];
                    obj[1] = match[4];
                    const _parseFloat = parseFloat;
                    obj[2] = parseFloat(match[2] + str2);
                  } else {
                    const reanimatedError = new tmp3(tmp4[2]).ReanimatedError("Couldn't parse animation value.");
                    throw reanimatedError;
                  }
                } else {
                  obj = { strippedValue: null };
                  obj[0] = current;
                }
                ({ strippedValue, prefix: reduceMotion.__prefix, suffix: reduceMotion.__suffix } = obj);
                reduceMotion.strippedCurrent = strippedValue;
                if (typeof colorOnFrame !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (typeof reduceMotion.toValue === "string") {
                  const match1 = str3.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                  if (match1) {
                    let str5 = match1[3];
                    if (str5 == null) {
                      str5 = "";
                    }
                    const obj1 = { prefix: null, suffix: null, strippedValue: null };
                    obj1[0] = match1[1];
                    obj1[1] = match1[4];
                    const _parseFloat2 = parseFloat;
                    obj1[2] = parseFloat(match1[2] + str5);
                    let obj2 = obj1;
                  } else {
                    const reanimatedError1 = new tmp3(tmp4[2]).ReanimatedError("Couldn't parse animation value.");
                    throw reanimatedError1;
                  }
                } else {
                  obj2 = { strippedValue: null };
                  obj2[0] = str3;
                }
                reduceMotion.current = strippedValue;
                reduceMotion.startValue = strippedValue;
                reduceMotion.toValue = obj2.strippedValue;
                if (current2) {
                  if (current2 !== reduceMotion) {
                    if (typeof tmp21 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    if (typeof current2.current === "string") {
                      const match2 = str7.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                      if (match2) {
                        let str8 = match2[3];
                        if (str8 == null) {
                          str8 = "";
                        }
                        const obj3 = { prefix: null, suffix: null, strippedValue: null };
                        obj3[0] = match2[1];
                        obj3[1] = match2[4];
                        obj3[2] = prefix.parseFloat(match2[2] + str8);
                        let obj4 = obj3;
                      } else {
                        const reanimatedError2 = new tmp3(tmp4[2]).ReanimatedError("Couldn't parse animation value.");
                        throw reanimatedError2;
                      }
                    } else {
                      obj4 = { strippedValue: null };
                      obj4[0] = str7;
                    }
                    ({ prefix, strippedValue: current2.current } = obj4);
                    current2.__prefix = prefix;
                    current2.__suffix = obj4.suffix;
                  }
                }
                callback(reduceMotion, strippedValue, arg2, current2);
                let str9 = reduceMotion.__prefix;
                if (str9 == null) {
                  str9 = "";
                }
                let str10 = reduceMotion.__suffix;
                const sum = str9 + reduceMotion.current;
                if (str10 == null) {
                  str10 = "";
                }
                reduceMotion.current = sum + str10;
                let tmp48 = current2;
                if (current2) {
                  tmp48 = current2 !== reduceMotion;
                }
                if (tmp48) {
                  let str11 = current2.__prefix;
                  if (str11 == null) {
                    str11 = "";
                  }
                  let str12 = current2.__suffix;
                  const sum1 = str11 + current2.current;
                  if (str12 == null) {
                    str12 = "";
                  }
                  current2.current = sum1 + str12;
                }
                reduceMotion.onFrame = closure_3;
              } else {
                if (typeof current === "object") {
                  if (null !== current) {
                    for (const key10034 in arg1) {
                      let tmp78 = key10034;
                      let _Object2 = Object;
                      let tmp79 = closure_2;
                      arg0[key10034] = Object.assign({}, closure_2);
                      arg0[key10034].onStart = arg0.onStart;
                      arg0[key10034].current = arg1[key10034];
                      arg0[key10034].toValue = arg0.toValue[key10034];
                      let obj22 = arg0[key10034];
                      let tmp80 = arg0[key10034];
                      let tmp81 = arg1[key10034];
                      let tmp13;
                      if (arg3) {
                        tmp13 = arg3[key10034];
                      }
                      let tmp14 = obj22;
                      let tmp15 = tmp80;
                      let tmp16 = tmp81;
                      let tmp17 = arg2;
                      let tmp18 = tmp13;
                      let onStartResult1 = obj22.onStart(tmp80, tmp81, arg2, tmp13);
                      continue;
                    }
                    reduceMotion.current = current;
                    reduceMotion.onFrame = objectOnFrame;
                  }
                }
                callback(reduceMotion, current, arg2, current2);
              }
            }
            tmp3Result9 = tmp3(tmp4[4]);
          }
          return tmp11;
        }
      };
      fn = tmp7;
    }
    tmp3 = decorateAnimation;
  }
}
defineAnimation.__closure = { IN_STYLE_UPDATER: c2, decorateAnimation, SHOULD_BE_USE_WEB: isJest };
defineAnimation.__workletHash = 8998026617746;
defineAnimation.__initData = { code: "function defineAnimation_Pnpm_utilTs9(starting,factory){const{IN_STYLE_UPDATER,decorateAnimation,SHOULD_BE_USE_WEB}=this.__closure;if(IN_STYLE_UPDATER){return starting;}const create=function(){'worklet';const animation=factory();decorateAnimation(animation);return animation;};if(_WORKLET||SHOULD_BE_USE_WEB){return create();}create.__isAnimationDefinition=true;return create;}" };
let closure_12 = { code: "function pnpm_utilTs12(){const{sharedValue}=this.__closure;sharedValue.value=sharedValue.value;}" };
let cancelAnimationWeb = function cancelAnimationNative(value) {
  const _require = value;
  if (globalThis._WORKLET) {
    value.value = value.value;
  } else {
    let obj = _runWorkletOnJS;
    const fn = function n() {
      value.value = value.value;
    };
    obj = { sharedValue: null };
    obj[0] = value;
    fn.__closure = obj;
    fn.__workletHash = 14261344384038;
    fn.__initData = closure_12;
    obj.runOnUI(fn)();
  }
};
let obj3 = { getReduceMotionFromConfig, recognizePrefixSuffix, isColor: require("call").isColor, toLinearSpace: require("call").toLinearSpace, convertToRGBA: require("call").convertToRGBA, clampRGBA: require("call").clampRGBA, rgbaArrayToRGBAColor: require("call").rgbaArrayToRGBAColor, toGammaSpace: require("call").toGammaSpace, decomposeMatrixIntoMatricesAndAngles: require("isAffineMatrixFlat").decomposeMatrixIntoMatricesAndAngles, applyProgressToMatrix, applyProgressToNumber, getRotationMatrix: require("isAffineMatrixFlat").getRotationMatrix, multiplyMatrices: require("isAffineMatrixFlat").multiplyMatrices, flatten: require("isAffineMatrixFlat").flatten, isAffineMatrixFlat: require("isAffineMatrixFlat").isAffineMatrixFlat };
let obj4 = { IN_STYLE_UPDATER: c2, decorateAnimation, SHOULD_BE_USE_WEB: isJest };
cancelAnimationWeb.__closure = { runOnUI: require("runWorkletOnJS").runOnUI };
cancelAnimationWeb.__workletHash = 796831326214;
cancelAnimationWeb.__initData = { code: "function cancelAnimationNative_Pnpm_utilTs11(sharedValue){const{runOnUI}=this.__closure;if(_WORKLET){sharedValue.value=sharedValue.value;}else{runOnUI(function(){'worklet';sharedValue.value=sharedValue.value;})();}}" };
if (isJest) {
  cancelAnimationWeb = function cancelAnimationWeb(value) {
    value.value = value.value;
  };
}

export { isValidLayoutAnimationProp };
export { assertEasingIsWorklet };
export const initialUpdaterRun = function initialUpdaterRun(updater) {
  let c2 = true;
  c2 = false;
  return updater();
};
export { recognizePrefixSuffix };
export { getReduceMotionFromConfig };
export { getReduceMotionForAnimation };
export { defineAnimation };
export const cancelAnimation = cancelAnimationWeb;