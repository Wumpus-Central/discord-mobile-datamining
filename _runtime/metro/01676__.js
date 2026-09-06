// === Module 1676: ? ===

// Module 1676
import runWorkletOnJS from "runWorkletOnJS" /* 1643 */;
import _mod1647 from "module_1647" /* 1647 */;
import _mod1661 from "module_1661" /* 1661 */;
import _mod1677 from "module_1677" /* 1677 */;
import _mod1678 from "module_1678" /* 1678 */;
import _mod1679 from "module_1679" /* 1679 */;
import module_1639 from "module_1639" /* 1639 */;

const React2 = false;
module_1639 = module_1639.shouldBeUseWeb();
const size = { originX: true, originY: true, width: true, height: true, borderRadius: true, globalOriginX: true, globalOriginY: true, opacity: true, transform: true, backgroundColor: true };
function isValidLayoutAnimationProp(arg0) {
  return arg0 in size;
}
isValidLayoutAnimationProp.__closure = { LAYOUT_ANIMATION_SUPPORTED_PROPS: size };
isValidLayoutAnimationProp.__workletHash = 13235833688548;
isValidLayoutAnimationProp.__initData = { code: "function isValidLayoutAnimationProp_Pnpm_utilTs1(prop){const{LAYOUT_ANIMATION_SUPPORTED_PROPS}=this.__closure;return prop in LAYOUT_ANIMATION_SUPPORTED_PROPS;}" };
function assertEasingIsWorklet(factory) {
  if (!globalThis._WORKLET) {
    if (!module_1639) {
      factory = undefined;
      if (factory != null) {
        factory = factory.factory;
      }
      if (!factory) {
        if (!obj.isWorkletFunction(factory)) {
          const reanimatedError = new _mod1647.ReanimatedError("The easing function is not a worklet. Please make sure you import `Easing` from react-native-reanimated.");
          throw reanimatedError;
        }
        obj = _mod1661;
      }
    }
  }
}
let obj = { SHOULD_BE_USE_WEB: module_1639, isWorkletFunction: _mod1661.isWorkletFunction };
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
      let obj = { prefix: match[1], suffix: match[4], strippedValue: null };
      const _parseFloat = parseFloat;
      obj.strippedValue = parseFloat(match[2] + str2);
      return obj;
    } else {
      const reanimatedError = new _mod1647.ReanimatedError("Couldn't parse animation value.");
      throw reanimatedError;
    }
  } else {
    obj = { strippedValue: current };
    return obj;
  }
}
recognizePrefixSuffix.__closure = {};
recognizePrefixSuffix.__workletHash = 11076682371077;
recognizePrefixSuffix.__initData = { code: "function recognizePrefixSuffix_Pnpm_utilTs3(value){if(typeof value==='string'){var _match$;const match=value.match(/([A-Za-z]*)(-?\\d*\\.?\\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);if(!match){throw new ReanimatedError(\"Couldn't parse animation value.\");}const prefix=match[1];const suffix=match[4];const number=match[2]+((_match$=match[3])!==null&&_match$!==void 0?_match$:'');return{prefix:prefix,suffix:suffix,strippedValue:parseFloat(number)};}else{return{strippedValue:value};}}" };
const uiValue = _mod1677.ReducedMotionManager.uiValue;
function getReduceMotionFromConfig(reduceMotion) {
  if (reduceMotion) {
    if (reduceMotion !== _mod1661.ReduceMotion.System) {
      value = reduceMotion === _mod1661.ReduceMotion.Always;
    }
    return value;
  }
  value = uiValue.value;
}
obj = { ReduceMotion: _mod1661.ReduceMotion, isReduceMotionOnUI: uiValue };
getReduceMotionFromConfig.__closure = obj;
getReduceMotionFromConfig.__workletHash = 7977910521960;
getReduceMotionFromConfig.__initData = { code: "function getReduceMotionFromConfig_Pnpm_utilTs4(config){const{ReduceMotion,isReduceMotionOnUI}=this.__closure;return!config||config===ReduceMotion.System?isReduceMotionOnUI.value:config===ReduceMotion.Always;}" };
function getReduceMotionForAnimation(reduceMotion) {
  if (reduceMotion) {
    if (typeof getReduceMotionFromConfig === "function") {
      if (reduceMotion) {
        if (reduceMotion !== _mod1661.ReduceMotion.System) {
          value = reduceMotion === _mod1661.ReduceMotion.Always;
        }
        return value;
      }
      value = uiValue.value;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
getReduceMotionForAnimation.__closure = { getReduceMotionFromConfig };
getReduceMotionForAnimation.__workletHash = 10866808344662;
getReduceMotionForAnimation.__initData = { code: "function getReduceMotionForAnimation_Pnpm_utilTs5(config){const{getReduceMotionFromConfig}=this.__closure;if(!config){return undefined;}return getReduceMotionFromConfig(config);}" };
function applyProgressToMatrix(arg0, arr, arr) {
  const obj = _mod1678;
  const obj2 = _mod1678;
  return obj.addMatrices(arr, obj2.scaleMatrix(_mod1678.subtractMatrices(arr, arr), arg0));
}
applyProgressToMatrix.__closure = { addMatrices: _mod1678.addMatrices, scaleMatrix: _mod1678.scaleMatrix, subtractMatrices: _mod1678.subtractMatrices };
applyProgressToMatrix.__workletHash = 4822273347900;
applyProgressToMatrix.__initData = { code: "function applyProgressToMatrix_Pnpm_utilTs6(progress,a,b){const{addMatrices,scaleMatrix,subtractMatrices}=this.__closure;return addMatrices(a,scaleMatrix(subtractMatrices(b,a),progress));}" };
function applyProgressToNumber(arg0, arg1, arg2) {
  return arg1 + arg0 * (arg2 - arg1);
}
applyProgressToNumber.__closure = {};
applyProgressToNumber.__workletHash = 954128472665;
applyProgressToNumber.__initData = { code: "function applyProgressToNumber_Pnpm_utilTs7(progress,a,b){return a+progress*(b-a);}" };
function decorateAnimation(isHigherOrder) {
  ({ onStart: require, onFrame: dependencyMap } = isHigherOrder);
  if (isHigherOrder.isHigherOrder) {
    isHigherOrder.onStart = (reduceMotion, keys, length, height) => {
      if (undefined === reduceMotion.reduceMotion) {
        if (typeof getReduceMotionFromConfig === "function") {
          reduceMotion.reduceMotion = value.value;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return fn(reduceMotion, keys, length, height);
    };
  } else {
    const _Object = Object;
    closure_2 = Object.assign({}, isHigherOrder);
    delete tmp2[tmp];
    function prefNumberSuffOnFrame(strippedCurrent, arg1) {
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
    closure_4 = ["R", "G", "B", "A"];
    function colorOnFrame(nonscaledCurrent, arg1) {
      closure_1 = arg1;
      const items = [];
      c3 = true;
      nonscaledCurrent.current = nonscaledCurrent.nonscaledCurrent;
      const item = closure_4.forEach((item) => {
        let onFrameResult = c3;
        if (c3) {
          onFrameResult = obj.onFrame(nonscaledCurrent[item], closure_1);
        }
        c3 = onFrameResult;
        items.push(nonscaledCurrent[item].current);
        obj = nonscaledCurrent[item];
      });
      nonscaledCurrent(1679).clampRGBA(items);
      nonscaledCurrent.nonscaledCurrent = items;
      let obj = nonscaledCurrent(1679);
      const obj2 = nonscaledCurrent(1679);
      nonscaledCurrent.current = obj2.rgbaArrayToRGBAColor(nonscaledCurrent(1679).toGammaSpace(items));
      return c3;
    }
    function transformationMatrixOnFrame(arg0, arg1) {
      const stopMatrices = arg0;
      const first = arg0[0];
      dependencyMap = arg0[0].current / 100;
      const items = [];
      const items1 = ["translationMatrix", "scaleMatrix", "skewMatrix"];
      const item = items1.forEach((item, index) => {
        if (typeof objectOnFrame === "function") {
          const obj = fn(1678);
          const obj2 = fn(1678);
          return tmp2(obj.addMatrices(tmp4, obj2.scaleMatrix(fn(1678).subtractMatrices(tmp5, tmp4), tmp3)));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      const items2 = [];
      const items3 = ["x", "y", "z"];
      [tmp3, tmp4, tmp5] = items;
      const item1 = items3.forEach((item, index) => {
        if (typeof closure_2_9 === "function") {
          const sum = tmp2 + tmp * (stopMatrices.stopMatrices["r" + item] - tmp2);
          items2.push(fn(1678).getRotationMatrix(sum, item));
          const obj = fn(1678);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      [tmp7, tmp8, tmp9] = items2;
      const onFrameResult = first.onFrame(arg0[0], arg1);
      let obj2 = stopMatrices(1678);
      const obj3 = stopMatrices(1678);
      const multiplyMatricesResult = obj2.multiplyMatrices(tmp7, stopMatrices(1678).multiplyMatrices(tmp8, tmp9));
      const obj4 = stopMatrices(1678);
      const obj5 = stopMatrices(1678);
      const obj6 = stopMatrices(1678);
      arg0.current = obj4.flatten(obj5.multiplyMatrices(obj6.multiplyMatrices(tmp4, stopMatrices(1678).multiplyMatrices(tmp5, multiplyMatricesResult)), tmp3));
      return onFrameResult;
    }
    function arrayOnFrame(current, arg1) {
      dependencyMap = current;
      closure_1 = arg1;
      c2 = true;
      current = current.current;
      const item = current.forEach((item, index) => {
        let onFrameResult = c2;
        if (c2) {
          onFrameResult = obj.onFrame(dependencyMap[index], closure_1);
        }
        c2 = onFrameResult;
        dependencyMap.current[index] = dependencyMap[index].current;
        obj = dependencyMap[index];
      });
      return c2;
    }
    function objectOnFrame(current, arg1) {
      const obj = {};
      let flag = true;
      let flag2 = true;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag2 = flag;
        while (keys[tmp] !== undefined) {
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
      if (undefined === reduceMotion.reduceMotion) {
        if (typeof arrayOnFrame === "function") {
          reduceMotion.reduceMotion = transformationMatrixOnFrame.value;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (reduceMotion.reduceMotion) {
        if (undefined !== reduceMotion.toValue) {
          reduceMotion.current = reduceMotion.toValue;
        } else {
          toValue(reduceMotion, current, arg2, current2);
        }
        reduceMotion.startTime = 0;
        reduceMotion.onFrame = () => true;
      } else {
        let obj = fn(1679);
        if (obj.isColor(current)) {
          closure_129_0 = reduceMotion;
          closure_129_1 = arg2;
          closure_129_2 = current2;
          const items = [];
          closure_129_6 = items;
          let tmp3Result = fn(1679);
          if (tmp3Result.isColor(current)) {
            tmp3Result = fn(1679);
            closure_129_4 = tmp3Result.toLinearSpace(fn(1679).convertToRGBA(reduceMotion.current));
            const tmp3Result1 = fn(1679);
            const tmp3Result2 = fn(1679);
            closure_129_3 = tmp3Result2.toLinearSpace(fn(1679).convertToRGBA(current));
            if (reduceMotion.toValue) {
              const tmp3Result4 = fn(1679);
              closure_129_5 = tmp3Result4.toLinearSpace(fn(1679).convertToRGBA(reduceMotion.toValue));
              const tmp3Result5 = fn(1679);
            }
            const tmp3Result3 = fn(1679);
          }
          const item = closure_4.forEach((item, index) => {
            toValue[item] = Object.assign({}, dependencyMap);
            toValue[item].current = closure_1_4[index];
            let tmp2;
            if (colorOnFrame) {
              tmp2 = colorOnFrame[index];
            }
            toValue[item].toValue = tmp2;
            let tmp4;
            if (dependencyMap) {
              tmp4 = dependencyMap[item];
            }
            toValue[item].onStart(toValue[item], prefNumberSuffOnFrame[index], closure_1, tmp4);
            transformationMatrixOnFrame.push(toValue[item].current);
          });
          reduceMotion.unroundedCurrent = items;
          fn(1679).clampRGBA(items);
          const tmp3Result6 = fn(1679);
          const tmp3Result7 = fn(1679);
          reduceMotion.current = tmp3Result7.rgbaArrayToRGBAColor(fn(1679).toGammaSpace(items));
          reduceMotion.onFrame = colorOnFrame;
          const tmp3Result8 = fn(1679);
        } else {
          if (tmp3Result9.isAffineMatrixFlat(current)) {
            reduceMotion.startMatrices = fn(1678).decomposeMatrixIntoMatricesAndAngles(current);
            const tmp3Result10 = fn(1678);
            reduceMotion.stopMatrices = fn(1678).decomposeMatrixIntoMatricesAndAngles(reduceMotion.toValue);
            const _Object = Object;
            reduceMotion[0] = Object.assign({}, dependencyMap);
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
            reduceMotion.onFrame = transformationMatrixOnFrame;
            const tmp3Result11 = fn(1678);
          } else {
            prefix = globalThis;
            const _Array = Array;
            if (Array.isArray(current)) {
              toValue = reduceMotion;
              closure_1 = arg2;
              dependencyMap = current2;
              const item1 = current.forEach((current, index) => {
                toValue[index] = Object.assign({}, dependencyMap);
                toValue[index].current = current;
                toValue[index].toValue = toValue.toValue[index];
                let tmp2;
                if (dependencyMap) {
                  tmp2 = dependencyMap[index];
                }
                toValue[index].onStart(toValue[index], current, closure_1, tmp2);
              });
              const items1 = [];
              HermesBuiltin.arraySpread(current, 0);
              reduceMotion.current = items1;
              reduceMotion.onFrame = arrayOnFrame;
            } else if (typeof current === "string") {
              if (typeof colorOnFrame === "function") {
                if (typeof current === "string") {
                  const match = current.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                  if (match) {
                    let str2 = match[3];
                    if (str2 == null) {
                      str2 = "";
                    }
                    obj = { prefix: match[1], suffix: match[4], strippedValue: null };
                    const _parseFloat = parseFloat;
                    obj.strippedValue = parseFloat(match[2] + str2);
                  } else {
                    const reanimatedError = new fn(1647).ReanimatedError("Couldn't parse animation value.");
                    throw reanimatedError;
                  }
                } else {
                  obj = { strippedValue: current };
                }
                ({ strippedValue, prefix: reduceMotion.__prefix, suffix: reduceMotion.__suffix } = obj);
                reduceMotion.strippedCurrent = strippedValue;
                if (typeof colorOnFrame === "function") {
                  if (typeof str3 === "string") {
                    const match1 = str3.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                    if (match1) {
                      let str5 = match1[3];
                      if (str5 == null) {
                        str5 = "";
                      }
                      const obj1 = { prefix: match1[1], suffix: match1[4], strippedValue: null };
                      const _parseFloat2 = parseFloat;
                      obj1.strippedValue = parseFloat(match1[2] + str5);
                      let obj2 = obj1;
                    } else {
                      const reanimatedError1 = new fn(1647).ReanimatedError("Couldn't parse animation value.");
                      throw reanimatedError1;
                    }
                  } else {
                    obj2 = { strippedValue: str3 };
                  }
                  reduceMotion.current = strippedValue;
                  reduceMotion.startValue = strippedValue;
                  reduceMotion.toValue = obj2.strippedValue;
                  if (current2) {
                    if (current2 !== reduceMotion) {
                      if (typeof colorOnFrame === "function") {
                        if (typeof str7 === "string") {
                          const match2 = str7.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                          if (match2) {
                            let str8 = match2[3];
                            if (str8 == null) {
                              str8 = "";
                            }
                            const obj3 = { prefix: match2[1], suffix: match2[4], strippedValue: prefix.parseFloat(match2[2] + str8) };
                            let obj4 = obj3;
                          } else {
                            const reanimatedError2 = new fn(1647).ReanimatedError("Couldn't parse animation value.");
                            throw reanimatedError2;
                          }
                        } else {
                          obj4 = { strippedValue: str7 };
                        }
                        ({ prefix, strippedValue: current2.current } = obj4);
                        current2.__prefix = prefix;
                        current2.__suffix = obj4.suffix;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  }
                  toValue(reduceMotion, strippedValue, arg2, current2);
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
                  reduceMotion.onFrame = prefNumberSuffOnFrame;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              if (typeof current === "object") {
                if (null !== current) {
                  for (const key10034 in arg1) {
                    let _Object2 = Object;
                    arg0[key10034] = Object.assign({}, dependencyMap);
                    arg0[key10034].onStart = arg0.onStart;
                    arg0[key10034].current = arg1[key10034];
                    arg0[key10034].toValue = arg0.toValue[key10034];
                    let obj22 = arg0[key10034];
                    let tmp79 = arg0[key10034];
                    let tmp80 = arg1[key10034];
                    let tmp13;
                    if (arg3) {
                      tmp13 = arg3[key10034];
                    }
                    let onStartResult1 = obj22.onStart(tmp79, tmp80, arg2, tmp13);
                    continue;
                  }
                  reduceMotion.current = current;
                  reduceMotion.onFrame = objectOnFrame;
                }
              }
              toValue(reduceMotion, current, arg2, current2);
            }
          }
          tmp3Result9 = fn(1678);
        }
        return tmp11;
      }
    };
  }
}
let obj1 = { addMatrices: _mod1678.addMatrices, scaleMatrix: _mod1678.scaleMatrix, subtractMatrices: _mod1678.subtractMatrices };
decorateAnimation.__closure = { getReduceMotionFromConfig, recognizePrefixSuffix, isColor: _mod1679.isColor, toLinearSpace: _mod1679.toLinearSpace, convertToRGBA: _mod1679.convertToRGBA, clampRGBA: _mod1679.clampRGBA, rgbaArrayToRGBAColor: _mod1679.rgbaArrayToRGBAColor, toGammaSpace: _mod1679.toGammaSpace, decomposeMatrixIntoMatricesAndAngles: _mod1678.decomposeMatrixIntoMatricesAndAngles, applyProgressToMatrix, applyProgressToNumber, getRotationMatrix: _mod1678.getRotationMatrix, multiplyMatrices: _mod1678.multiplyMatrices, flatten: _mod1678.flatten, isAffineMatrixFlat: _mod1678.isAffineMatrixFlat };
decorateAnimation.__workletHash = 6240615473022;
decorateAnimation.__initData = { code: "function decorateAnimation_Pnpm_utilTs8(animation){const{getReduceMotionFromConfig,recognizePrefixSuffix,isColor,toLinearSpace,convertToRGBA,clampRGBA,rgbaArrayToRGBAColor,toGammaSpace,decomposeMatrixIntoMatricesAndAngles,applyProgressToMatrix,applyProgressToNumber,getRotationMatrix,multiplyMatrices,flatten,isAffineMatrixFlat}=this.__closure;const baseOnStart=animation.onStart;const baseOnFrame=animation.onFrame;if(animation.isHigherOrder){animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}return baseOnStart(animation,value,timestamp,previousAnimation);};return;}const animationCopy=Object.assign({},animation);delete animationCopy.callback;const prefNumberSuffOnStart=function(animation,value,timestamp,previousAnimation){var _animation$__prefix,_animation$__suffix;const{prefix:prefix,suffix:suffix,strippedValue:strippedValue}=recognizePrefixSuffix(value);animation.__prefix=prefix;animation.__suffix=suffix;animation.strippedCurrent=strippedValue;const{strippedValue:strippedToValue}=recognizePrefixSuffix(animation.toValue);animation.current=strippedValue;animation.startValue=strippedValue;animation.toValue=strippedToValue;if(previousAnimation&&previousAnimation!==animation){const{prefix:paPrefix,suffix:paSuffix,strippedValue:paStrippedValue}=recognizePrefixSuffix(previousAnimation.current);previousAnimation.current=paStrippedValue;previousAnimation.__prefix=paPrefix;previousAnimation.__suffix=paSuffix;}baseOnStart(animation,strippedValue,timestamp,previousAnimation);animation.current=((_animation$__prefix=animation.__prefix)!==null&&_animation$__prefix!==void 0?_animation$__prefix:'')+animation.current+((_animation$__suffix=animation.__suffix)!==null&&_animation$__suffix!==void 0?_animation$__suffix:'');if(previousAnimation&&previousAnimation!==animation){var _previousAnimation$__,_previousAnimation$__2;previousAnimation.current=((_previousAnimation$__=previousAnimation.__prefix)!==null&&_previousAnimation$__!==void 0?_previousAnimation$__:'')+previousAnimation.current+((_previousAnimation$__2=previousAnimation.__suffix)!==null&&_previousAnimation$__2!==void 0?_previousAnimation$__2:'');}};const prefNumberSuffOnFrame=function(animation,timestamp){var _animation$__prefix2,_animation$__suffix2;animation.current=animation.strippedCurrent;const res=baseOnFrame(animation,timestamp);animation.strippedCurrent=animation.current;animation.current=((_animation$__prefix2=animation.__prefix)!==null&&_animation$__prefix2!==void 0?_animation$__prefix2:'')+animation.current+((_animation$__suffix2=animation.__suffix)!==null&&_animation$__suffix2!==void 0?_animation$__suffix2:'');return res;};const tab=['R','G','B','A'];const colorOnStart=function(animation,value,timestamp,previousAnimation){let RGBAValue;let RGBACurrent;let RGBAToValue;const res=[];if(isColor(value)){RGBACurrent=toLinearSpace(convertToRGBA(animation.current));RGBAValue=toLinearSpace(convertToRGBA(value));if(animation.toValue){RGBAToValue=toLinearSpace(convertToRGBA(animation.toValue));}}tab.forEach(function(i,index){animation[i]=Object.assign({},animationCopy);animation[i].current=RGBACurrent[index];animation[i].toValue=RGBAToValue?RGBAToValue[index]:undefined;animation[i].onStart(animation[i],RGBAValue[index],timestamp,previousAnimation?previousAnimation[i]:undefined);res.push(animation[i].current);});animation.unroundedCurrent=res;clampRGBA(res);animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));};const colorOnFrame=function(animation,timestamp){const res=[];let finished=true;animation.current=animation.nonscaledCurrent;tab.forEach(function(i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;res.push(animation[i].current);});clampRGBA(res);animation.nonscaledCurrent=res;animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));return finished;};const transformationMatrixOnStart=function(animation,value,timestamp,previousAnimation){const toValue=animation.toValue;animation.startMatrices=decomposeMatrixIntoMatricesAndAngles(value);animation.stopMatrices=decomposeMatrixIntoMatricesAndAngles(toValue);animation[0]=Object.assign({},animationCopy);animation[0].current=0;animation[0].toValue=100;animation[0].onStart(animation[0],0,timestamp,previousAnimation?previousAnimation[0]:undefined);animation.current=value;};const transformationMatrixOnFrame=function(animation,timestamp){let finished=true;const result=animation[0].onFrame(animation[0],timestamp);finished=finished&&result;const progress=animation[0].current/100;const transforms=['translationMatrix','scaleMatrix','skewMatrix'];const mappedTransforms=[];transforms.forEach(function(key,_){return mappedTransforms.push(applyProgressToMatrix(progress,animation.startMatrices[key],animation.stopMatrices[key]));});const[currentTranslation,currentScale,skewMatrix]=mappedTransforms;const rotations=['x','y','z'];const mappedRotations=[];rotations.forEach(function(key,_){const angle=applyProgressToNumber(progress,animation.startMatrices['r'+key],animation.stopMatrices['r'+key]);mappedRotations.push(getRotationMatrix(angle,key));});const[rotationMatrixX,rotationMatrixY,rotationMatrixZ]=mappedRotations;const rotationMatrix=multiplyMatrices(rotationMatrixX,multiplyMatrices(rotationMatrixY,rotationMatrixZ));const updated=flatten(multiplyMatrices(multiplyMatrices(currentScale,multiplyMatrices(skewMatrix,rotationMatrix)),currentTranslation));animation.current=updated;return finished;};const arrayOnStart=function(animation,value,timestamp,previousAnimation){value.forEach(function(v,i){animation[i]=Object.assign({},animationCopy);animation[i].current=v;animation[i].toValue=animation.toValue[i];animation[i].onStart(animation[i],v,timestamp,previousAnimation?previousAnimation[i]:undefined);});animation.current=[...value];};const arrayOnFrame=function(animation,timestamp){let finished=true;animation.current.forEach(function(_,i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;animation.current[i]=animation[i].current;});return finished;};const objectOnStart=function(animation,value,timestamp,previousAnimation){for(const key in value){animation[key]=Object.assign({},animationCopy);animation[key].onStart=animation.onStart;animation[key].current=value[key];animation[key].toValue=animation.toValue[key];animation[key].onStart(animation[key],value[key],timestamp,previousAnimation?previousAnimation[key]:undefined);}animation.current=value;};const objectOnFrame=function(animation,timestamp){let finished=true;const newObject={};for(const key in animation.current){const result=animation[key].onFrame(animation[key],timestamp);finished=finished&&result;newObject[key]=animation[key].current;}animation.current=newObject;return finished;};animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}if(animation.reduceMotion){if(animation.toValue!==undefined){animation.current=animation.toValue;}else{baseOnStart(animation,value,timestamp,previousAnimation);}animation.startTime=0;animation.onFrame=function(){return true;};return;}if(isColor(value)){colorOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=colorOnFrame;return;}else if(isAffineMatrixFlat(value)){transformationMatrixOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=transformationMatrixOnFrame;return;}else if(Array.isArray(value)){arrayOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=arrayOnFrame;return;}else if(typeof value==='string'){prefNumberSuffOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=prefNumberSuffOnFrame;return;}else if(typeof value==='object'&&value!==null){objectOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=objectOnFrame;return;}baseOnStart(animation,value,timestamp,previousAnimation);};}" };
const __initData = { code: "function pnpm_utilTs10(){const{factory,decorateAnimation}=this.__closure;const animation=factory();decorateAnimation(animation);return animation;}" };
function defineAnimation(substr, fn) {
  if (c2) {
    return substr;
  } else {
    let factory = function o() {
      const tmp3 = closure_0();
      if (typeof decorateAnimation === "function") {
        ({ onStart: closure_0, onFrame: closure_1 } = tmp3);
        if (tmp3.isHigherOrder) {
          tmp3.onStart = (reduceMotion, keys, length, height) => {
            if (undefined === reduceMotion.reduceMotion) {
              if (typeof getReduceMotionFromConfig === "function") {
                reduceMotion.reduceMotion = value.value;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            return fn(reduceMotion, keys, length, height);
          };
        } else {
          let _Object = Object;
          closure_2 = Object.assign({}, tmp3);
          delete tmp2[tmp];
          function prefNumberSuffOnFrame(strippedCurrent, arg1) {
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
          closure_4 = ["R", "G", "B", "A"];
          function colorOnFrame(nonscaledCurrent, arg1) {
            closure_1 = arg1;
            const items = [];
            c3 = true;
            nonscaledCurrent.current = nonscaledCurrent.nonscaledCurrent;
            const item = closure_4.forEach((item) => {
              let onFrameResult = c3;
              if (c3) {
                onFrameResult = obj.onFrame(nonscaledCurrent[item], closure_1);
              }
              c3 = onFrameResult;
              items.push(nonscaledCurrent[item].current);
              obj = nonscaledCurrent[item];
            });
            nonscaledCurrent(1679).clampRGBA(items);
            nonscaledCurrent.nonscaledCurrent = items;
            let obj = nonscaledCurrent(1679);
            const obj2 = nonscaledCurrent(1679);
            nonscaledCurrent.current = obj2.rgbaArrayToRGBAColor(nonscaledCurrent(1679).toGammaSpace(items));
            return c3;
          }
          function transformationMatrixOnFrame(arg0, arg1) {
            const stopMatrices = arg0;
            const first = arg0[0];
            dependencyMap = arg0[0].current / 100;
            const items = [];
            const items1 = ["translationMatrix", "scaleMatrix", "skewMatrix"];
            const item = items1.forEach((item, index) => {
              if (typeof objectOnFrame === "function") {
                const obj = fn(1678);
                const obj2 = fn(1678);
                return tmp2(obj.addMatrices(tmp4, obj2.scaleMatrix(fn(1678).subtractMatrices(tmp5, tmp4), tmp3)));
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
            const items2 = [];
            const items3 = ["x", "y", "z"];
            [tmp3, tmp4, tmp5] = items;
            const item1 = items3.forEach((item, index) => {
              if (typeof closure_2_9 === "function") {
                const sum = tmp2 + tmp * (stopMatrices.stopMatrices["r" + item] - tmp2);
                items2.push(fn(1678).getRotationMatrix(sum, item));
                const obj = fn(1678);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
            [tmp7, tmp8, tmp9] = items2;
            const onFrameResult = first.onFrame(arg0[0], arg1);
            let obj2 = stopMatrices(1678);
            const obj3 = stopMatrices(1678);
            const multiplyMatricesResult = obj2.multiplyMatrices(tmp7, stopMatrices(1678).multiplyMatrices(tmp8, tmp9));
            const obj4 = stopMatrices(1678);
            const obj5 = stopMatrices(1678);
            const obj6 = stopMatrices(1678);
            arg0.current = obj4.flatten(obj5.multiplyMatrices(obj6.multiplyMatrices(tmp4, stopMatrices(1678).multiplyMatrices(tmp5, multiplyMatricesResult)), tmp3));
            return onFrameResult;
          }
          function arrayOnFrame(current, arg1) {
            dependencyMap = current;
            closure_1 = arg1;
            c2 = true;
            current = current.current;
            const item = current.forEach((item, index) => {
              let onFrameResult = c2;
              if (c2) {
                onFrameResult = obj.onFrame(dependencyMap[index], closure_1);
              }
              c2 = onFrameResult;
              dependencyMap.current[index] = dependencyMap[index].current;
              obj = dependencyMap[index];
            });
            return c2;
          }
          function objectOnFrame(current, arg1) {
            const obj = {};
            let flag = true;
            let flag2 = true;
            const keys = Object.keys();
            if (keys !== undefined) {
              flag2 = flag;
              while (keys[tmp] !== undefined) {
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
            if (undefined === reduceMotion.reduceMotion) {
              if (typeof arrayOnFrame === "function") {
                reduceMotion.reduceMotion = transformationMatrixOnFrame.value;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (reduceMotion.reduceMotion) {
              if (undefined !== reduceMotion.toValue) {
                reduceMotion.current = reduceMotion.toValue;
              } else {
                toValue(reduceMotion, current, arg2, current2);
              }
              reduceMotion.startTime = 0;
              reduceMotion.onFrame = () => true;
            } else {
              let obj = fn(1679);
              if (obj.isColor(current)) {
                closure_129_0 = reduceMotion;
                closure_129_1 = arg2;
                closure_129_2 = current2;
                const items = [];
                closure_129_6 = items;
                let tmp3Result = fn(1679);
                if (tmp3Result.isColor(current)) {
                  tmp3Result = fn(1679);
                  closure_129_4 = tmp3Result.toLinearSpace(fn(1679).convertToRGBA(reduceMotion.current));
                  const tmp3Result1 = fn(1679);
                  const tmp3Result2 = fn(1679);
                  closure_129_3 = tmp3Result2.toLinearSpace(fn(1679).convertToRGBA(current));
                  if (reduceMotion.toValue) {
                    const tmp3Result4 = fn(1679);
                    closure_129_5 = tmp3Result4.toLinearSpace(fn(1679).convertToRGBA(reduceMotion.toValue));
                    const tmp3Result5 = fn(1679);
                  }
                  const tmp3Result3 = fn(1679);
                }
                const item = closure_4.forEach((item, index) => {
                  toValue[item] = Object.assign({}, dependencyMap);
                  toValue[item].current = closure_1_4[index];
                  let tmp2;
                  if (colorOnFrame) {
                    tmp2 = colorOnFrame[index];
                  }
                  toValue[item].toValue = tmp2;
                  let tmp4;
                  if (dependencyMap) {
                    tmp4 = dependencyMap[item];
                  }
                  toValue[item].onStart(toValue[item], prefNumberSuffOnFrame[index], closure_1, tmp4);
                  transformationMatrixOnFrame.push(toValue[item].current);
                });
                reduceMotion.unroundedCurrent = items;
                fn(1679).clampRGBA(items);
                const tmp3Result6 = fn(1679);
                const tmp3Result7 = fn(1679);
                reduceMotion.current = tmp3Result7.rgbaArrayToRGBAColor(fn(1679).toGammaSpace(items));
                reduceMotion.onFrame = colorOnFrame;
                const tmp3Result8 = fn(1679);
              } else {
                if (tmp3Result9.isAffineMatrixFlat(current)) {
                  reduceMotion.startMatrices = fn(1678).decomposeMatrixIntoMatricesAndAngles(current);
                  const tmp3Result10 = fn(1678);
                  reduceMotion.stopMatrices = fn(1678).decomposeMatrixIntoMatricesAndAngles(reduceMotion.toValue);
                  const _Object = Object;
                  reduceMotion[0] = Object.assign({}, dependencyMap);
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
                  reduceMotion.onFrame = transformationMatrixOnFrame;
                  const tmp3Result11 = fn(1678);
                } else {
                  prefix = globalThis;
                  const _Array = Array;
                  if (Array.isArray(current)) {
                    toValue = reduceMotion;
                    closure_1 = arg2;
                    dependencyMap = current2;
                    const item1 = current.forEach((current, index) => {
                      toValue[index] = Object.assign({}, dependencyMap);
                      toValue[index].current = current;
                      toValue[index].toValue = toValue.toValue[index];
                      let tmp2;
                      if (dependencyMap) {
                        tmp2 = dependencyMap[index];
                      }
                      toValue[index].onStart(toValue[index], current, closure_1, tmp2);
                    });
                    const items1 = [];
                    HermesBuiltin.arraySpread(current, 0);
                    reduceMotion.current = items1;
                    reduceMotion.onFrame = arrayOnFrame;
                  } else if (typeof current === "string") {
                    if (typeof colorOnFrame === "function") {
                      if (typeof current === "string") {
                        const match = current.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                        if (match) {
                          let str2 = match[3];
                          if (str2 == null) {
                            str2 = "";
                          }
                          obj = { prefix: match[1], suffix: match[4], strippedValue: null };
                          const _parseFloat = parseFloat;
                          obj.strippedValue = parseFloat(match[2] + str2);
                        } else {
                          const reanimatedError = new fn(1647).ReanimatedError("Couldn't parse animation value.");
                          throw reanimatedError;
                        }
                      } else {
                        obj = { strippedValue: current };
                      }
                      ({ strippedValue, prefix: reduceMotion.__prefix, suffix: reduceMotion.__suffix } = obj);
                      reduceMotion.strippedCurrent = strippedValue;
                      if (typeof colorOnFrame === "function") {
                        if (typeof str3 === "string") {
                          const match1 = str3.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                          if (match1) {
                            let str5 = match1[3];
                            if (str5 == null) {
                              str5 = "";
                            }
                            const obj1 = { prefix: match1[1], suffix: match1[4], strippedValue: null };
                            const _parseFloat2 = parseFloat;
                            obj1.strippedValue = parseFloat(match1[2] + str5);
                            let obj2 = obj1;
                          } else {
                            const reanimatedError1 = new fn(1647).ReanimatedError("Couldn't parse animation value.");
                            throw reanimatedError1;
                          }
                        } else {
                          obj2 = { strippedValue: str3 };
                        }
                        reduceMotion.current = strippedValue;
                        reduceMotion.startValue = strippedValue;
                        reduceMotion.toValue = obj2.strippedValue;
                        if (current2) {
                          if (current2 !== reduceMotion) {
                            if (typeof colorOnFrame === "function") {
                              if (typeof str7 === "string") {
                                const match2 = str7.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                                if (match2) {
                                  let str8 = match2[3];
                                  if (str8 == null) {
                                    str8 = "";
                                  }
                                  const obj3 = { prefix: match2[1], suffix: match2[4], strippedValue: prefix.parseFloat(match2[2] + str8) };
                                  let obj4 = obj3;
                                } else {
                                  const reanimatedError2 = new fn(1647).ReanimatedError("Couldn't parse animation value.");
                                  throw reanimatedError2;
                                }
                              } else {
                                obj4 = { strippedValue: str7 };
                              }
                              ({ prefix, strippedValue: current2.current } = obj4);
                              current2.__prefix = prefix;
                              current2.__suffix = obj4.suffix;
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        }
                        toValue(reduceMotion, strippedValue, arg2, current2);
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
                        reduceMotion.onFrame = prefNumberSuffOnFrame;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    if (typeof current === "object") {
                      if (null !== current) {
                        for (const key10034 in arg1) {
                          let _Object2 = Object;
                          arg0[key10034] = Object.assign({}, dependencyMap);
                          arg0[key10034].onStart = arg0.onStart;
                          arg0[key10034].current = arg1[key10034];
                          arg0[key10034].toValue = arg0.toValue[key10034];
                          let obj22 = arg0[key10034];
                          let tmp79 = arg0[key10034];
                          let tmp80 = arg1[key10034];
                          let tmp13;
                          if (arg3) {
                            tmp13 = arg3[key10034];
                          }
                          let onStartResult1 = obj22.onStart(tmp79, tmp80, arg2, tmp13);
                          continue;
                        }
                        reduceMotion.current = current;
                        reduceMotion.onFrame = objectOnFrame;
                      }
                    }
                    toValue(reduceMotion, current, arg2, current2);
                  }
                }
                tmp3Result9 = fn(1678);
              }
              return tmp11;
            }
          };
        }
        return tmp3;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let obj = { factory, decorateAnimation };
    factory.__closure = obj;
    factory.__workletHash = 9825023081203;
    factory.__initData = __initData;
    if (!globalThis._WORKLET) {
      if (!module_1639) {
        factory.__isAnimationDefinition = true;
      }
      return factory;
    }
    const tmp7 = factory();
    if (typeof decorateAnimation === "function") {
      ({ onStart: closure_129_0, onFrame: closure_129_1 } = tmp7);
      if (tmp7.isHigherOrder) {
        tmp7.onStart = (reduceMotion, keys, length, height) => {
          if (undefined === reduceMotion.reduceMotion) {
            if (typeof getReduceMotionFromConfig === "function") {
              reduceMotion.reduceMotion = value.value;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          return fn(reduceMotion, keys, length, height);
        };
        factory = tmp7;
      } else {
        let _Object = Object;
        closure_129_2 = Object.assign({}, tmp7);
        delete tmp2[tmp];
        closure_129_3 = function prefNumberSuffOnFrame(strippedCurrent, arg1) {
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
        closure_129_4 = ["R", "G", "B", "A"];
        closure_129_5 = function colorOnFrame(nonscaledCurrent, arg1) {
          closure_1 = arg1;
          const items = [];
          c3 = true;
          nonscaledCurrent.current = nonscaledCurrent.nonscaledCurrent;
          const item = closure_4.forEach((item) => {
            let onFrameResult = c3;
            if (c3) {
              onFrameResult = obj.onFrame(nonscaledCurrent[item], closure_1);
            }
            c3 = onFrameResult;
            items.push(nonscaledCurrent[item].current);
            obj = nonscaledCurrent[item];
          });
          nonscaledCurrent(1679).clampRGBA(items);
          nonscaledCurrent.nonscaledCurrent = items;
          let obj = nonscaledCurrent(1679);
          const obj2 = nonscaledCurrent(1679);
          nonscaledCurrent.current = obj2.rgbaArrayToRGBAColor(nonscaledCurrent(1679).toGammaSpace(items));
          return c3;
        };
        closure_129_6 = function transformationMatrixOnFrame(arg0, arg1) {
          const stopMatrices = arg0;
          const first = arg0[0];
          dependencyMap = arg0[0].current / 100;
          const items = [];
          const items1 = ["translationMatrix", "scaleMatrix", "skewMatrix"];
          const item = items1.forEach((item, index) => {
            if (typeof objectOnFrame === "function") {
              const obj = fn(1678);
              const obj2 = fn(1678);
              return tmp2(obj.addMatrices(tmp4, obj2.scaleMatrix(fn(1678).subtractMatrices(tmp5, tmp4), tmp3)));
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
          const items2 = [];
          const items3 = ["x", "y", "z"];
          [tmp3, tmp4, tmp5] = items;
          const item1 = items3.forEach((item, index) => {
            if (typeof closure_2_9 === "function") {
              const sum = tmp2 + tmp * (stopMatrices.stopMatrices["r" + item] - tmp2);
              items2.push(fn(1678).getRotationMatrix(sum, item));
              const obj = fn(1678);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
          [tmp7, tmp8, tmp9] = items2;
          const onFrameResult = first.onFrame(arg0[0], arg1);
          let obj2 = stopMatrices(1678);
          const obj3 = stopMatrices(1678);
          const multiplyMatricesResult = obj2.multiplyMatrices(tmp7, stopMatrices(1678).multiplyMatrices(tmp8, tmp9));
          const obj4 = stopMatrices(1678);
          const obj5 = stopMatrices(1678);
          const obj6 = stopMatrices(1678);
          arg0.current = obj4.flatten(obj5.multiplyMatrices(obj6.multiplyMatrices(tmp4, stopMatrices(1678).multiplyMatrices(tmp5, multiplyMatricesResult)), tmp3));
          return onFrameResult;
        };
        closure_129_7 = function arrayOnFrame(current, arg1) {
          dependencyMap = current;
          closure_1 = arg1;
          c2 = true;
          current = current.current;
          const item = current.forEach((item, index) => {
            let onFrameResult = c2;
            if (c2) {
              onFrameResult = obj.onFrame(dependencyMap[index], closure_1);
            }
            c2 = onFrameResult;
            dependencyMap.current[index] = dependencyMap[index].current;
            obj = dependencyMap[index];
          });
          return c2;
        };
        closure_129_8 = function objectOnFrame(current, arg1) {
          const obj = {};
          let flag = true;
          let flag2 = true;
          const keys = Object.keys();
          if (keys !== undefined) {
            flag2 = flag;
            while (keys[tmp] !== undefined) {
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
        };
        tmp7.onStart = (reduceMotion, current, arg2, current2) => {
          if (undefined === reduceMotion.reduceMotion) {
            if (typeof arrayOnFrame === "function") {
              reduceMotion.reduceMotion = transformationMatrixOnFrame.value;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (reduceMotion.reduceMotion) {
            if (undefined !== reduceMotion.toValue) {
              reduceMotion.current = reduceMotion.toValue;
            } else {
              toValue(reduceMotion, current, arg2, current2);
            }
            reduceMotion.startTime = 0;
            reduceMotion.onFrame = () => true;
          } else {
            let obj = fn(1679);
            if (obj.isColor(current)) {
              closure_129_0 = reduceMotion;
              closure_129_1 = arg2;
              closure_129_2 = current2;
              const items = [];
              closure_129_6 = items;
              let tmp3Result = fn(1679);
              if (tmp3Result.isColor(current)) {
                tmp3Result = fn(1679);
                closure_129_4 = tmp3Result.toLinearSpace(fn(1679).convertToRGBA(reduceMotion.current));
                const tmp3Result1 = fn(1679);
                const tmp3Result2 = fn(1679);
                closure_129_3 = tmp3Result2.toLinearSpace(fn(1679).convertToRGBA(current));
                if (reduceMotion.toValue) {
                  const tmp3Result4 = fn(1679);
                  closure_129_5 = tmp3Result4.toLinearSpace(fn(1679).convertToRGBA(reduceMotion.toValue));
                  const tmp3Result5 = fn(1679);
                }
                const tmp3Result3 = fn(1679);
              }
              const item = closure_4.forEach((item, index) => {
                toValue[item] = Object.assign({}, dependencyMap);
                toValue[item].current = closure_1_4[index];
                let tmp2;
                if (colorOnFrame) {
                  tmp2 = colorOnFrame[index];
                }
                toValue[item].toValue = tmp2;
                let tmp4;
                if (dependencyMap) {
                  tmp4 = dependencyMap[item];
                }
                toValue[item].onStart(toValue[item], prefNumberSuffOnFrame[index], closure_1, tmp4);
                transformationMatrixOnFrame.push(toValue[item].current);
              });
              reduceMotion.unroundedCurrent = items;
              fn(1679).clampRGBA(items);
              const tmp3Result6 = fn(1679);
              const tmp3Result7 = fn(1679);
              reduceMotion.current = tmp3Result7.rgbaArrayToRGBAColor(fn(1679).toGammaSpace(items));
              reduceMotion.onFrame = colorOnFrame;
              const tmp3Result8 = fn(1679);
            } else {
              if (tmp3Result9.isAffineMatrixFlat(current)) {
                reduceMotion.startMatrices = fn(1678).decomposeMatrixIntoMatricesAndAngles(current);
                const tmp3Result10 = fn(1678);
                reduceMotion.stopMatrices = fn(1678).decomposeMatrixIntoMatricesAndAngles(reduceMotion.toValue);
                const _Object = Object;
                reduceMotion[0] = Object.assign({}, dependencyMap);
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
                reduceMotion.onFrame = transformationMatrixOnFrame;
                const tmp3Result11 = fn(1678);
              } else {
                prefix = globalThis;
                const _Array = Array;
                if (Array.isArray(current)) {
                  toValue = reduceMotion;
                  closure_1 = arg2;
                  dependencyMap = current2;
                  const item1 = current.forEach((current, index) => {
                    toValue[index] = Object.assign({}, dependencyMap);
                    toValue[index].current = current;
                    toValue[index].toValue = toValue.toValue[index];
                    let tmp2;
                    if (dependencyMap) {
                      tmp2 = dependencyMap[index];
                    }
                    toValue[index].onStart(toValue[index], current, closure_1, tmp2);
                  });
                  const items1 = [];
                  HermesBuiltin.arraySpread(current, 0);
                  reduceMotion.current = items1;
                  reduceMotion.onFrame = arrayOnFrame;
                } else if (typeof current === "string") {
                  if (typeof colorOnFrame === "function") {
                    if (typeof current === "string") {
                      const match = current.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                      if (match) {
                        let str2 = match[3];
                        if (str2 == null) {
                          str2 = "";
                        }
                        obj = { prefix: match[1], suffix: match[4], strippedValue: null };
                        const _parseFloat = parseFloat;
                        obj.strippedValue = parseFloat(match[2] + str2);
                      } else {
                        const reanimatedError = new fn(1647).ReanimatedError("Couldn't parse animation value.");
                        throw reanimatedError;
                      }
                    } else {
                      obj = { strippedValue: current };
                    }
                    ({ strippedValue, prefix: reduceMotion.__prefix, suffix: reduceMotion.__suffix } = obj);
                    reduceMotion.strippedCurrent = strippedValue;
                    if (typeof colorOnFrame === "function") {
                      if (typeof str3 === "string") {
                        const match1 = str3.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                        if (match1) {
                          let str5 = match1[3];
                          if (str5 == null) {
                            str5 = "";
                          }
                          const obj1 = { prefix: match1[1], suffix: match1[4], strippedValue: null };
                          const _parseFloat2 = parseFloat;
                          obj1.strippedValue = parseFloat(match1[2] + str5);
                          let obj2 = obj1;
                        } else {
                          const reanimatedError1 = new fn(1647).ReanimatedError("Couldn't parse animation value.");
                          throw reanimatedError1;
                        }
                      } else {
                        obj2 = { strippedValue: str3 };
                      }
                      reduceMotion.current = strippedValue;
                      reduceMotion.startValue = strippedValue;
                      reduceMotion.toValue = obj2.strippedValue;
                      if (current2) {
                        if (current2 !== reduceMotion) {
                          if (typeof colorOnFrame === "function") {
                            if (typeof str7 === "string") {
                              const match2 = str7.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                              if (match2) {
                                let str8 = match2[3];
                                if (str8 == null) {
                                  str8 = "";
                                }
                                const obj3 = { prefix: match2[1], suffix: match2[4], strippedValue: prefix.parseFloat(match2[2] + str8) };
                                let obj4 = obj3;
                              } else {
                                const reanimatedError2 = new fn(1647).ReanimatedError("Couldn't parse animation value.");
                                throw reanimatedError2;
                              }
                            } else {
                              obj4 = { strippedValue: str7 };
                            }
                            ({ prefix, strippedValue: current2.current } = obj4);
                            current2.__prefix = prefix;
                            current2.__suffix = obj4.suffix;
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                      }
                      toValue(reduceMotion, strippedValue, arg2, current2);
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
                      reduceMotion.onFrame = prefNumberSuffOnFrame;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  if (typeof current === "object") {
                    if (null !== current) {
                      for (const key10034 in arg1) {
                        let _Object2 = Object;
                        arg0[key10034] = Object.assign({}, dependencyMap);
                        arg0[key10034].onStart = arg0.onStart;
                        arg0[key10034].current = arg1[key10034];
                        arg0[key10034].toValue = arg0.toValue[key10034];
                        let obj22 = arg0[key10034];
                        let tmp79 = arg0[key10034];
                        let tmp80 = arg1[key10034];
                        let tmp13;
                        if (arg3) {
                          tmp13 = arg3[key10034];
                        }
                        let onStartResult1 = obj22.onStart(tmp79, tmp80, arg2, tmp13);
                        continue;
                      }
                      reduceMotion.current = current;
                      reduceMotion.onFrame = objectOnFrame;
                    }
                  }
                  toValue(reduceMotion, current, arg2, current2);
                }
              }
              tmp3Result9 = fn(1678);
            }
            return tmp11;
          }
        };
        factory = tmp7;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
defineAnimation.__closure = { IN_STYLE_UPDATER: React2, decorateAnimation, SHOULD_BE_USE_WEB: module_1639 };
defineAnimation.__workletHash = 8998026617746;
defineAnimation.__initData = { code: "function defineAnimation_Pnpm_utilTs9(starting,factory){const{IN_STYLE_UPDATER,decorateAnimation,SHOULD_BE_USE_WEB}=this.__closure;if(IN_STYLE_UPDATER){return starting;}const create=function(){'worklet';const animation=factory();decorateAnimation(animation);return animation;};if(_WORKLET||SHOULD_BE_USE_WEB){return create();}create.__isAnimationDefinition=true;return create;}" };
const __initData2 = { code: "function pnpm_utilTs12(){const{sharedValue}=this.__closure;sharedValue.value=sharedValue.value;}" };
let cancelAnimationWeb = function cancelAnimationNative(current) {
  value = current;
  if (globalThis._WORKLET) {
    current.value = current.value;
  } else {
    const fn = function n() {
      value.value = value.value;
    };
    const obj = { sharedValue: current };
    fn.__closure = obj;
    fn.__workletHash = 14261344384038;
    fn.__initData = __initData2;
    obj.runOnUI(fn)();
  }
};
let obj2 = { getReduceMotionFromConfig, recognizePrefixSuffix, isColor: _mod1679.isColor, toLinearSpace: _mod1679.toLinearSpace, convertToRGBA: _mod1679.convertToRGBA, clampRGBA: _mod1679.clampRGBA, rgbaArrayToRGBAColor: _mod1679.rgbaArrayToRGBAColor, toGammaSpace: _mod1679.toGammaSpace, decomposeMatrixIntoMatricesAndAngles: _mod1678.decomposeMatrixIntoMatricesAndAngles, applyProgressToMatrix, applyProgressToNumber, getRotationMatrix: _mod1678.getRotationMatrix, multiplyMatrices: _mod1678.multiplyMatrices, flatten: _mod1678.flatten, isAffineMatrixFlat: _mod1678.isAffineMatrixFlat };
let obj3 = { IN_STYLE_UPDATER: React2, decorateAnimation, SHOULD_BE_USE_WEB: module_1639 };
cancelAnimationWeb.__closure = { runOnUI: runWorkletOnJS.runOnUI };
cancelAnimationWeb.__workletHash = 796831326214;
cancelAnimationWeb.__initData = { code: "function cancelAnimationNative_Pnpm_utilTs11(sharedValue){const{runOnUI}=this.__closure;if(_WORKLET){sharedValue.value=sharedValue.value;}else{runOnUI(function(){'worklet';sharedValue.value=sharedValue.value;})();}}" };
if (module_1639) {
  cancelAnimationWeb = function cancelAnimationWeb(value) {
    value.value = value.value;
  };
}

export { isValidLayoutAnimationProp };
export { assertEasingIsWorklet };
export const initialUpdaterRun = function initialUpdaterRun(updater) {
  c2 = false;
  return updater();
};
export { recognizePrefixSuffix };
export { getReduceMotionFromConfig };
export { getReduceMotionForAnimation };
export { defineAnimation };
export const cancelAnimation = cancelAnimationWeb;