// _runtime/metro/01683__.js
import setupMicrotasks from "../01650_setupMicrotasks.js";
import ReanimatedError from "../01654_ReanimatedError.js";
import LayoutAnimationType from "../01668_LayoutAnimationType.js";
import _mod1684 from "01684__.js";
import _mod1685 from "01685__.js";
import clampRGBA from "../01686_clampRGBA.js";
import module_1646_mod from "01646__.js";

let c2;

const onStart = (reduceMotion, arg1, arg2, arg3) => {
  if (undefined === reduceMotion.reduceMotion) {
    if (typeof closure_2_7 === "function") {
      reduceMotion.reduceMotion = value.value;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return closure_1_0(reduceMotion, arg1, arg2, arg3);
};
const prefNumberSuffOnFrame2 = function prefNumberSuffOnFrame(strippedCurrent, arg1) {
  let __prefix;
  strippedCurrent.current = strippedCurrent.strippedCurrent;
  ({ current: strippedCurrent.strippedCurrent, __prefix } = strippedCurrent);
  const tmp = closure_1_1(strippedCurrent, arg1);
  if (__prefix == null) {
    __prefix = "";
  }
  let str = strippedCurrent.__suffix;
  const sum = __prefix + strippedCurrent.current;
  if (str == null) {
    str = "";
  }
  strippedCurrent.current = sum + str;
  return tmp;
};
const arrayOnFrame2 = function arrayOnFrame(current, arg1) {
  let closure_1 = arg1;
  let closure_2 = true;
  current = current.current;
  const item = current.forEach((item, index) => {
    const obj = current[index];
    const tmp2 = closure_2 && obj.onFrame(current[index], closure_1);
    closure_2 = tmp2;
    current.current[index] = current[index].current;
  });
  return closure_2;
};
const React2 = false;
let module_1646 = module_1646_mod;
module_1646 = module_1646.shouldBeUseWeb();
const size = {
  originX: true,
  originY: true,
  width: true,
  height: true,
  borderRadius: true,
  globalOriginX: true,
  globalOriginY: true,
  opacity: true,
  transform: true,
  backgroundColor: true,
};
function isValidLayoutAnimationProp(arg0) {
  return arg0 in size;
}
isValidLayoutAnimationProp.__closure = { LAYOUT_ANIMATION_SUPPORTED_PROPS: size };
isValidLayoutAnimationProp.__workletHash = 13235833688548;
isValidLayoutAnimationProp.__initData = {
  code: "function isValidLayoutAnimationProp_Pnpm_utilTs1(prop){const{LAYOUT_ANIMATION_SUPPORTED_PROPS}=this.__closure;return prop in LAYOUT_ANIMATION_SUPPORTED_PROPS;}",
};
function assertEasingIsWorklet(factory) {
  if (!globalThis._WORKLET) {
    if (!module_1646) {
      factory = undefined;
      if (factory != null) {
        factory = factory.factory;
      }
      if (!factory) {
        const obj = LayoutAnimationType;
        if (!obj.isWorkletFunction(factory)) {
          const self = this;
          const self2 = this;
          const reanimatedError = new ReanimatedError.ReanimatedError(
            "The easing function is not a worklet. Please make sure you import `Easing` from react-native-reanimated.",
          );
          throw reanimatedError;
        }
      }
    }
  }
}
let obj = { SHOULD_BE_USE_WEB: module_1646, isWorkletFunction: LayoutAnimationType.isWorkletFunction };
assertEasingIsWorklet.__closure = obj;
assertEasingIsWorklet.__workletHash = 8431488219943;
assertEasingIsWorklet.__initData = {
  code: "function assertEasingIsWorklet_Pnpm_utilTs2(easing){const{SHOULD_BE_USE_WEB,isWorkletFunction}=this.__closure;if(_WORKLET){return;}if(SHOULD_BE_USE_WEB){return;}if(easing!==null&&easing!==void 0&&easing.factory){return;}if(!isWorkletFunction(easing)){throw new ReanimatedError('The easing function is not a worklet. Please make sure you import `Easing` from react-native-reanimated.');}}",
};
function recognizePrefixSuffix(current) {
  if (typeof current === "string") {
    const match = current.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
    if (match) {
      let str2 = match[3];
      const tmp6 = match[1];
      const tmp7 = match[4];
      const tmp8 = match[2];
      if (str2 == null) {
        str2 = "";
      }
      const _parseFloat = parseFloat;
      const obj = { prefix: tmp6, suffix: tmp7, strippedValue: parseFloat(tmp8 + str2) };
      return obj;
    } else {
      const self = this;
      const self2 = this;
      const reanimatedError = new ReanimatedError.ReanimatedError("Couldn't parse animation value.");
      throw reanimatedError;
    }
  } else {
    return { strippedValue: current };
  }
}
recognizePrefixSuffix.__closure = {};
recognizePrefixSuffix.__workletHash = 11076682371077;
recognizePrefixSuffix.__initData = {
  code: "function recognizePrefixSuffix_Pnpm_utilTs3(value){if(typeof value==='string'){var _match$;const match=value.match(/([A-Za-z]*)(-?\\d*\\.?\\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);if(!match){throw new ReanimatedError(\"Couldn't parse animation value.\");}const prefix=match[1];const suffix=match[4];const number=match[2]+((_match$=match[3])!==null&&_match$!==void 0?_match$:'');return{prefix:prefix,suffix:suffix,strippedValue:parseFloat(number)};}else{return{strippedValue:value};}}",
};
const uiValue = _mod1684.ReducedMotionManager.uiValue;
function getReduceMotionFromConfig(reduceMotion) {
  const tmp = reduceMotion;
  if (tmp) {
    let value;
    if (reduceMotion !== LayoutAnimationType.ReduceMotion.System) {
      value = reduceMotion === LayoutAnimationType.ReduceMotion.Always;
    }
    return value;
  }
  value = uiValue.value;
}
let obj2 = { ReduceMotion: LayoutAnimationType.ReduceMotion, isReduceMotionOnUI: uiValue };
getReduceMotionFromConfig.__closure = obj2;
getReduceMotionFromConfig.__workletHash = 7977910521960;
getReduceMotionFromConfig.__initData = {
  code: "function getReduceMotionFromConfig_Pnpm_utilTs4(config){const{ReduceMotion,isReduceMotionOnUI}=this.__closure;return!config||config===ReduceMotion.System?isReduceMotionOnUI.value:config===ReduceMotion.Always;}",
};
function getReduceMotionForAnimation(reduceMotion) {
  const tmp = reduceMotion;
  if (tmp) {
    if (typeof getReduceMotionFromConfig === "function") {
      if (reduceMotion) {
        let value;
        if (reduceMotion !== LayoutAnimationType.ReduceMotion.System) {
          value = reduceMotion === LayoutAnimationType.ReduceMotion.Always;
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
getReduceMotionForAnimation.__initData = {
  code: "function getReduceMotionForAnimation_Pnpm_utilTs5(config){const{getReduceMotionFromConfig}=this.__closure;if(!config){return undefined;}return getReduceMotionFromConfig(config);}",
};
function applyProgressToMatrix(arg0, arr, arr2) {
  const addMatrices = _mod1685.addMatrices;
  _mod1685;
  const scaleMatrix = _mod1685.scaleMatrix;
  _mod1685;
  const obj = _mod1685;
  return addMatrices(arr, scaleMatrix(obj.subtractMatrices(arr, arr), arg0));
}
let obj3 = {
  addMatrices: _mod1685.addMatrices,
  scaleMatrix: _mod1685.scaleMatrix,
  subtractMatrices: _mod1685.subtractMatrices,
};
applyProgressToMatrix.__closure = obj3;
applyProgressToMatrix.__workletHash = 4822273347900;
applyProgressToMatrix.__initData = {
  code: "function applyProgressToMatrix_Pnpm_utilTs6(progress,a,b){const{addMatrices,scaleMatrix,subtractMatrices}=this.__closure;return addMatrices(a,scaleMatrix(subtractMatrices(b,a),progress));}",
};
function applyProgressToNumber(arg0, arg1, arg2) {
  return arg1 + arg0 * (arg2 - arg1);
}
applyProgressToNumber.__closure = {};
applyProgressToNumber.__workletHash = 954128472665;
applyProgressToNumber.__initData = {
  code: "function applyProgressToNumber_Pnpm_utilTs7(progress,a,b){return a+progress*(b-a);}",
};
function decorateAnimation(isHigherOrder) {
  ({ onStart: require, onFrame: dependencyMap } = isHigherOrder);
  if (isHigherOrder.isHigherOrder) {
    isHigherOrder.onStart = onStart;
  } else {
    const _Object = Object;
    const merged = Object.assign({}, isHigherOrder);
    delete tmp2["callback"];
    const prefNumberSuffOnFrame = prefNumberSuffOnFrame2;
    let closure_4 = ["R", "G", "B", "A"];
    function colorOnFrame(nonscaledCurrent, arg1) {
      let closure_0 = nonscaledCurrent;
      let closure_1 = arg1;
      const items = [];
      let closure_3 = true;
      nonscaledCurrent.current = nonscaledCurrent.nonscaledCurrent;
      const item = closure_4.forEach((item) => {
        const obj = closure_0[item];
        const tmp2 = closure_3 && obj.onFrame(closure_0[item], closure_1);
        closure_3 = tmp2;
        items.push(closure_0[item].current);
      });
      let obj = fn(closure_2_1[5]);
      obj.clampRGBA(items);
      nonscaledCurrent.nonscaledCurrent = items;
      const rgbaArrayToRGBAColor = fn(closure_2_1[5]).rgbaArrayToRGBAColor;
      fn(closure_2_1[5]);
      const obj2 = fn(closure_2_1[5]);
      nonscaledCurrent.current = rgbaArrayToRGBAColor(obj2.toGammaSpace(items));
      return closure_3;
    }
    function transformationMatrixOnFrame(arg0, arg1) {
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      let tmp9;
      let closure_0 = arg0;
      const first = arg0[0];
      let closure_1 = arg0[0].current / 100;
      const items = [];
      const items1 = ["translationMatrix", "scaleMatrix", "skewMatrix"];
      const onFrameResult = first.onFrame(arg0[0], arg1);
      const item = items1.forEach((item, index) => {
        if (typeof objectOnFrame === "function") {
          const addMatrices = closure_2_0(closure_2_1[4]).addMatrices;
          closure_2_0(closure_2_1[4]);
          const scaleMatrix = closure_2_0(closure_2_1[4]).scaleMatrix;
          closure_2_0(closure_2_1[4]);
          const obj = closure_2_0(closure_2_1[4]);
          return tmp2(
            addMatrices(
              closure_0.startMatrices[item],
              scaleMatrix(obj.subtractMatrices(tmp5, closure_0.startMatrices[item]), tmp3),
            ),
          );
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      const items2 = [];
      const items3 = ["x", "y", "z"];
      [tmp3, tmp4, tmp5] = items;
      const item1 = items3.forEach((item, index) => {
        if (typeof closure_2_9 === "function") {
          const sum = tmp2 + tmp * (closure_0.stopMatrices["r" + item] - tmp2);
          const push = items2.push;
          const obj = closure_2_0(closure_2_1[4]);
          push(obj.getRotationMatrix(sum, item));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      [tmp7, tmp8, tmp9] = items2;
      const multiplyMatrices = closure_0(closure_1[4]).multiplyMatrices;
      closure_0(closure_1[4]);
      const obj2 = closure_0(closure_1[4]);
      const multiplyMatricesResult = multiplyMatrices(tmp7, obj2.multiplyMatrices(tmp8, tmp9));
      const flatten = closure_0(closure_1[4]).flatten;
      closure_0(closure_1[4]);
      const multiplyMatrices2 = closure_0(closure_1[4]).multiplyMatrices;
      closure_0(closure_1[4]);
      const multiplyMatrices3 = closure_0(closure_1[4]).multiplyMatrices;
      closure_0(closure_1[4]);
      const obj3 = closure_0(closure_1[4]);
      arg0.current = flatten(
        multiplyMatrices2(multiplyMatrices3(tmp4, obj3.multiplyMatrices(tmp5, multiplyMatricesResult)), tmp3),
      );
      return onFrameResult;
    }
    const arrayOnFrame = arrayOnFrame2;
    function objectOnFrame(current, arg1) {
      const obj = {};
      let flag = true;
      let flag2 = true;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag2 = flag;
        while (keys[tmp] !== undefined) {
          let obj2 = current[tmp4];
          let tmp5 = flag && obj2.onFrame(current[tmp4], arg1);
          obj[tmp4] = current[tmp4].current;
          flag = tmp5;
          continue;
        }
      }
      current.current = obj;
      return flag2;
    }
    isHigherOrder.onStart = function (reduceMotion, current, arg2, current2) {
      let strippedValue;
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
          reduceMotion(reduceMotion, current, arg2, current2);
        }
        reduceMotion.startTime = 0;
        reduceMotion.onFrame = () => true;
      } else {
        const obj = closure_1_0(closure_1_1[5]);
        if (obj.isColor(current)) {
          let closure_1 = arg2;
          const items = [];
          const tmp4Result = closure_1_0(closure_1_1[5]);
          if (tmp4Result.isColor(current)) {
            const toLinearSpace = closure_1_0(closure_1_1[5]).toLinearSpace;
            closure_1_0(closure_1_1[5]);
            const tmp4Result14 = closure_1_0(closure_1_1[5]);
            closure_4 = toLinearSpace(tmp4Result14.convertToRGBA(reduceMotion.current));
            const toLinearSpace2 = closure_1_0(closure_1_1[5]).toLinearSpace;
            closure_1_0(closure_1_1[5]);
            const tmp4Result16 = closure_1_0(closure_1_1[5]);
            let closure_3 = toLinearSpace2(tmp4Result16.convertToRGBA(current));
            if (reduceMotion.toValue) {
              const toLinearSpace3 = closure_1_0(closure_1_1[5]).toLinearSpace;
              closure_1_0(closure_1_1[5]);
              const tmp4Result18 = closure_1_0(closure_1_1[5]);
              let closure_5 = toLinearSpace3(tmp4Result18.convertToRGBA(reduceMotion.toValue));
            }
          }
          const item = closure_4.forEach((item, index) => {
            closure_0[item] = Object.assign({}, current2);
            closure_0[item].current = closure_4[index];
            let tmp3;
            const tmp2 = closure_0[item];
            if (closure_5) {
              tmp3 = closure_5[index];
            }
            tmp2.toValue = tmp3;
            let tmp8;
            const onStart = closure_0[item].onStart;
            const tmp5 = closure_0[item];
            const tmp6 = closure_3[index];
            if (current2) {
              tmp8 = current2[item];
            }
            onStart(tmp5, tmp6, closure_1, tmp8);
            items.push(closure_0[item].current);
          });
          reduceMotion.unroundedCurrent = items;
          const tmp4Result19 = closure_1_0(closure_1_1[5]);
          tmp4Result19.clampRGBA(items);
          const rgbaArrayToRGBAColor = closure_1_0(closure_1_1[5]).rgbaArrayToRGBAColor;
          closure_1_0(closure_1_1[5]);
          const tmp4Result21 = closure_1_0(closure_1_1[5]);
          reduceMotion.current = rgbaArrayToRGBAColor(tmp4Result21.toGammaSpace(items));
          reduceMotion.onFrame = colorOnFrame;
        } else {
          const tmp4Result22 = closure_1_0(closure_1_1[4]);
          if (tmp4Result22.isAffineMatrixFlat(current)) {
            const toValue = reduceMotion.toValue;
            const tmp4Result23 = closure_1_0(closure_1_1[4]);
            reduceMotion.startMatrices = tmp4Result23.decomposeMatrixIntoMatricesAndAngles(current);
            const tmp4Result24 = closure_1_0(closure_1_1[4]);
            reduceMotion.stopMatrices = tmp4Result24.decomposeMatrixIntoMatricesAndAngles(toValue);
            const _Object = Object;
            reduceMotion[0] = Object.assign({}, current2);
            reduceMotion[0].current = 0;
            reduceMotion[0].toValue = 100;
            const first = reduceMotion[0];
            const first1 = reduceMotion[0];
            let first2;
            let onStart = first.onStart;
            if (current2) {
              first2 = current2[0];
            }
            onStart(first1, 0, arg2, first2);
            reduceMotion.current = current;
            reduceMotion.onFrame = transformationMatrixOnFrame;
          } else {
            let tmp6 = globalThis;
            const _Array = Array;
            if (Array.isArray(current)) {
              closure_1 = arg2;
              const item1 = current.forEach((current, index) => {
                reduceMotion[index] = Object.assign({}, merged);
                reduceMotion[index].current = current;
                reduceMotion[index].toValue = reduceMotion.toValue[index];
                let tmp4;
                const onStart = reduceMotion[index].onStart;
                const tmp2 = reduceMotion[index];
                if (current2) {
                  tmp4 = current2[index];
                }
                onStart(tmp2, current, closure_1, tmp4);
              });
              const items1 = [];
              HermesBuiltin.arraySpread(items1, current, 0);
              reduceMotion.current = items1;
              reduceMotion.onFrame = arrayOnFrame;
            } else if (typeof current === "string") {
              if (typeof colorOnFrame === "function") {
                let obj3;
                if (typeof current === "string") {
                  const match = current.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                  if (match) {
                    let str2 = match[3];
                    const tmp27 = match[1];
                    const tmp28 = match[4];
                    const tmp29 = match[2];
                    if (str2 == null) {
                      str2 = "";
                    }
                    const _parseFloat = parseFloat;
                    obj3 = { prefix: tmp27, suffix: tmp28, strippedValue: parseFloat(tmp29 + str2) };
                    const obj2 = { prefix: tmp27, suffix: tmp28, strippedValue: parseFloat(tmp29 + str2) };
                  } else {
                    const self = this;
                    const self2 = this;
                    const reanimatedError = new closure_1_0(closure_1_1[2]).ReanimatedError(
                      "Couldn't parse animation value.",
                    );
                    throw reanimatedError;
                  }
                } else {
                  obj3 = { strippedValue: current };
                }
                ({ strippedValue, prefix: reduceMotion.__prefix, suffix: reduceMotion.__suffix } = obj3);
                reduceMotion.strippedCurrent = strippedValue;
                if (typeof colorOnFrame === "function") {
                  let obj5;
                  if (typeof reduceMotion.toValue === "string") {
                    const match1 = str3.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                    if (match1) {
                      let str5 = match1[3];
                      const tmp34 = match1[1];
                      const tmp35 = match1[4];
                      const tmp36 = match1[2];
                      if (str5 == null) {
                        str5 = "";
                      }
                      const _parseFloat2 = parseFloat;
                      obj5 = { prefix: tmp34, suffix: tmp35, strippedValue: parseFloat(tmp36 + str5) };
                      const obj4 = { prefix: tmp34, suffix: tmp35, strippedValue: parseFloat(tmp36 + str5) };
                    } else {
                      const self3 = this;
                      const self4 = this;
                      const reanimatedError1 = new closure_1_0(closure_1_1[2]).ReanimatedError(
                        "Couldn't parse animation value.",
                      );
                      throw reanimatedError1;
                    }
                  } else {
                    obj5 = { strippedValue: reduceMotion.toValue };
                  }
                  reduceMotion.current = strippedValue;
                  reduceMotion.startValue = strippedValue;
                  reduceMotion.toValue = obj5.strippedValue;
                  if (current2) {
                    if (current2 !== reduceMotion) {
                      if (typeof colorOnFrame === "function") {
                        let obj7;
                        if (typeof current2.current === "string") {
                          const match2 = str15.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                          if (match2) {
                            let str7 = match2[3];
                            const tmp41 = match2[1];
                            const tmp42 = match2[4];
                            const tmp43 = match2[2];
                            if (str7 == null) {
                              str7 = "";
                            }
                            const _parseFloat3 = parseFloat;
                            obj7 = { prefix: tmp41, suffix: tmp42, strippedValue: parseFloat(tmp43 + str7) };
                            const obj6 = { prefix: tmp41, suffix: tmp42, strippedValue: parseFloat(tmp43 + str7) };
                          } else {
                            const self5 = this;
                            const self6 = this;
                            const reanimatedError2 = new closure_1_0(closure_1_1[2]).ReanimatedError(
                              "Couldn't parse animation value.",
                            );
                            throw reanimatedError2;
                          }
                        } else {
                          obj7 = { strippedValue: current2.current };
                        }
                        ({
                          strippedValue: current2.current,
                          prefix: current2.__prefix,
                          suffix: current2.__suffix,
                        } = obj7);
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  }
                  reduceMotion(reduceMotion, strippedValue, arg2, current2);
                  let str8 = reduceMotion.__prefix;
                  if (str8 == null) {
                    str8 = "";
                  }
                  let str9 = reduceMotion.__suffix;
                  const sum = str8 + reduceMotion.current;
                  if (str9 == null) {
                    str9 = "";
                  }
                  reduceMotion.current = sum + str9;
                  const tmp53 = current2 && current2 !== reduceMotion;
                  if (tmp53) {
                    let str10 = current2.__prefix;
                    if (str10 == null) {
                      str10 = "";
                    }
                    let str11 = current2.__suffix;
                    const sum1 = str10 + current2.current;
                    if (str11 == null) {
                      str11 = "";
                    }
                    current2.current = sum1 + str11;
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
                  for (const key10034 in current) {
                    let _Object2 = Object;
                    reduceMotion[key10034] = Object.assign({}, current2);
                    reduceMotion[key10034].onStart = reduceMotion.onStart;
                    reduceMotion[key10034].current = current[key10034];
                    reduceMotion[key10034].toValue = reduceMotion.toValue[key10034];
                    let tmp89 = reduceMotion[key10034];
                    let tmp90 = reduceMotion[key10034];
                    let tmp91 = current[key10034];
                    let tmp15;
                    let onStart2 = tmp89.onStart;
                    if (current2) {
                      tmp15 = current2[key10034];
                    }
                    let onStart2Result = onStart2(tmp90, tmp91, arg2, tmp15);
                    continue;
                  }
                  reduceMotion.current = current;
                  reduceMotion.onFrame = objectOnFrame;
                }
              }
              let tmp8 = reduceMotion;
              reduceMotion(reduceMotion, current, arg2, current2);
            }
          }
        }
      }
      return tmp13;
    };
  }
}
let obj4 = {
  getReduceMotionFromConfig,
  recognizePrefixSuffix,
  isColor: clampRGBA.isColor,
  toLinearSpace: clampRGBA.toLinearSpace,
  convertToRGBA: clampRGBA.convertToRGBA,
  clampRGBA: clampRGBA.clampRGBA,
  rgbaArrayToRGBAColor: clampRGBA.rgbaArrayToRGBAColor,
  toGammaSpace: clampRGBA.toGammaSpace,
  decomposeMatrixIntoMatricesAndAngles: _mod1685.decomposeMatrixIntoMatricesAndAngles,
  applyProgressToMatrix,
  applyProgressToNumber,
  getRotationMatrix: _mod1685.getRotationMatrix,
  multiplyMatrices: _mod1685.multiplyMatrices,
  flatten: _mod1685.flatten,
  isAffineMatrixFlat: _mod1685.isAffineMatrixFlat,
};
decorateAnimation.__closure = obj4;
decorateAnimation.__workletHash = 6240615473022;
decorateAnimation.__initData = {
  code: "function decorateAnimation_Pnpm_utilTs8(animation){const{getReduceMotionFromConfig,recognizePrefixSuffix,isColor,toLinearSpace,convertToRGBA,clampRGBA,rgbaArrayToRGBAColor,toGammaSpace,decomposeMatrixIntoMatricesAndAngles,applyProgressToMatrix,applyProgressToNumber,getRotationMatrix,multiplyMatrices,flatten,isAffineMatrixFlat}=this.__closure;const baseOnStart=animation.onStart;const baseOnFrame=animation.onFrame;if(animation.isHigherOrder){animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}return baseOnStart(animation,value,timestamp,previousAnimation);};return;}const animationCopy=Object.assign({},animation);delete animationCopy.callback;const prefNumberSuffOnStart=function(animation,value,timestamp,previousAnimation){var _animation$__prefix,_animation$__suffix;const{prefix:prefix,suffix:suffix,strippedValue:strippedValue}=recognizePrefixSuffix(value);animation.__prefix=prefix;animation.__suffix=suffix;animation.strippedCurrent=strippedValue;const{strippedValue:strippedToValue}=recognizePrefixSuffix(animation.toValue);animation.current=strippedValue;animation.startValue=strippedValue;animation.toValue=strippedToValue;if(previousAnimation&&previousAnimation!==animation){const{prefix:paPrefix,suffix:paSuffix,strippedValue:paStrippedValue}=recognizePrefixSuffix(previousAnimation.current);previousAnimation.current=paStrippedValue;previousAnimation.__prefix=paPrefix;previousAnimation.__suffix=paSuffix;}baseOnStart(animation,strippedValue,timestamp,previousAnimation);animation.current=((_animation$__prefix=animation.__prefix)!==null&&_animation$__prefix!==void 0?_animation$__prefix:'')+animation.current+((_animation$__suffix=animation.__suffix)!==null&&_animation$__suffix!==void 0?_animation$__suffix:'');if(previousAnimation&&previousAnimation!==animation){var _previousAnimation$__,_previousAnimation$__2;previousAnimation.current=((_previousAnimation$__=previousAnimation.__prefix)!==null&&_previousAnimation$__!==void 0?_previousAnimation$__:'')+previousAnimation.current+((_previousAnimation$__2=previousAnimation.__suffix)!==null&&_previousAnimation$__2!==void 0?_previousAnimation$__2:'');}};const prefNumberSuffOnFrame=function(animation,timestamp){var _animation$__prefix2,_animation$__suffix2;animation.current=animation.strippedCurrent;const res=baseOnFrame(animation,timestamp);animation.strippedCurrent=animation.current;animation.current=((_animation$__prefix2=animation.__prefix)!==null&&_animation$__prefix2!==void 0?_animation$__prefix2:'')+animation.current+((_animation$__suffix2=animation.__suffix)!==null&&_animation$__suffix2!==void 0?_animation$__suffix2:'');return res;};const tab=['R','G','B','A'];const colorOnStart=function(animation,value,timestamp,previousAnimation){let RGBAValue;let RGBACurrent;let RGBAToValue;const res=[];if(isColor(value)){RGBACurrent=toLinearSpace(convertToRGBA(animation.current));RGBAValue=toLinearSpace(convertToRGBA(value));if(animation.toValue){RGBAToValue=toLinearSpace(convertToRGBA(animation.toValue));}}tab.forEach(function(i,index){animation[i]=Object.assign({},animationCopy);animation[i].current=RGBACurrent[index];animation[i].toValue=RGBAToValue?RGBAToValue[index]:undefined;animation[i].onStart(animation[i],RGBAValue[index],timestamp,previousAnimation?previousAnimation[i]:undefined);res.push(animation[i].current);});animation.unroundedCurrent=res;clampRGBA(res);animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));};const colorOnFrame=function(animation,timestamp){const res=[];let finished=true;animation.current=animation.nonscaledCurrent;tab.forEach(function(i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;res.push(animation[i].current);});clampRGBA(res);animation.nonscaledCurrent=res;animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));return finished;};const transformationMatrixOnStart=function(animation,value,timestamp,previousAnimation){const toValue=animation.toValue;animation.startMatrices=decomposeMatrixIntoMatricesAndAngles(value);animation.stopMatrices=decomposeMatrixIntoMatricesAndAngles(toValue);animation[0]=Object.assign({},animationCopy);animation[0].current=0;animation[0].toValue=100;animation[0].onStart(animation[0],0,timestamp,previousAnimation?previousAnimation[0]:undefined);animation.current=value;};const transformationMatrixOnFrame=function(animation,timestamp){let finished=true;const result=animation[0].onFrame(animation[0],timestamp);finished=finished&&result;const progress=animation[0].current/100;const transforms=['translationMatrix','scaleMatrix','skewMatrix'];const mappedTransforms=[];transforms.forEach(function(key,_){return mappedTransforms.push(applyProgressToMatrix(progress,animation.startMatrices[key],animation.stopMatrices[key]));});const[currentTranslation,currentScale,skewMatrix]=mappedTransforms;const rotations=['x','y','z'];const mappedRotations=[];rotations.forEach(function(key,_){const angle=applyProgressToNumber(progress,animation.startMatrices['r'+key],animation.stopMatrices['r'+key]);mappedRotations.push(getRotationMatrix(angle,key));});const[rotationMatrixX,rotationMatrixY,rotationMatrixZ]=mappedRotations;const rotationMatrix=multiplyMatrices(rotationMatrixX,multiplyMatrices(rotationMatrixY,rotationMatrixZ));const updated=flatten(multiplyMatrices(multiplyMatrices(currentScale,multiplyMatrices(skewMatrix,rotationMatrix)),currentTranslation));animation.current=updated;return finished;};const arrayOnStart=function(animation,value,timestamp,previousAnimation){value.forEach(function(v,i){animation[i]=Object.assign({},animationCopy);animation[i].current=v;animation[i].toValue=animation.toValue[i];animation[i].onStart(animation[i],v,timestamp,previousAnimation?previousAnimation[i]:undefined);});animation.current=[...value];};const arrayOnFrame=function(animation,timestamp){let finished=true;animation.current.forEach(function(_,i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;animation.current[i]=animation[i].current;});return finished;};const objectOnStart=function(animation,value,timestamp,previousAnimation){for(const key in value){animation[key]=Object.assign({},animationCopy);animation[key].onStart=animation.onStart;animation[key].current=value[key];animation[key].toValue=animation.toValue[key];animation[key].onStart(animation[key],value[key],timestamp,previousAnimation?previousAnimation[key]:undefined);}animation.current=value;};const objectOnFrame=function(animation,timestamp){let finished=true;const newObject={};for(const key in animation.current){const result=animation[key].onFrame(animation[key],timestamp);finished=finished&&result;newObject[key]=animation[key].current;}animation.current=newObject;return finished;};animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}if(animation.reduceMotion){if(animation.toValue!==undefined){animation.current=animation.toValue;}else{baseOnStart(animation,value,timestamp,previousAnimation);}animation.startTime=0;animation.onFrame=function(){return true;};return;}if(isColor(value)){colorOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=colorOnFrame;return;}else if(isAffineMatrixFlat(value)){transformationMatrixOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=transformationMatrixOnFrame;return;}else if(Array.isArray(value)){arrayOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=arrayOnFrame;return;}else if(typeof value==='string'){prefNumberSuffOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=prefNumberSuffOnFrame;return;}else if(typeof value==='object'&&value!==null){objectOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=objectOnFrame;return;}baseOnStart(animation,value,timestamp,previousAnimation);};}",
};
const __initData = {
  code: "function pnpm_utilTs10(){const{factory,decorateAnimation}=this.__closure;const animation=factory();decorateAnimation(animation);return animation;}",
};
function defineAnimation(substr, fn) {
  let closure_129_0;
  let closure_129_1;
  let onStart;
  if (c2) {
    let tmp8 = substr;
    return substr;
  } else {
    let factory = function o() {
      let closure_129_0;
      let closure_129_1;
      let onStart;
      let value;
      let tmp = factory();
      if (typeof decorateAnimation === "function") {
        ({ onStart: closure_129_0, onFrame: closure_129_1 } = tmp);
        if (tmp.isHigherOrder) {
          tmp.onStart = onStart;
        } else {
          let tmp2 = globalThis;
          let _Object = Object;
          const merged = Object.assign({}, tmp);
          delete tmp3["callback"];
          const prefNumberSuffOnFrame = prefNumberSuffOnFrame2;
          let closure_4 = ["R", "G", "B", "A"];
          function colorOnFrame(nonscaledCurrent, arg1) {
            let closure_0 = nonscaledCurrent;
            let closure_1 = arg1;
            const items = [];
            let closure_3 = true;
            nonscaledCurrent.current = nonscaledCurrent.nonscaledCurrent;
            const item = closure_4.forEach((item) => {
              const obj = closure_0[item];
              const tmp2 = closure_3 && obj.onFrame(closure_0[item], closure_1);
              closure_3 = tmp2;
              items.push(closure_0[item].current);
            });
            let obj = fn(closure_2_1[5]);
            obj.clampRGBA(items);
            nonscaledCurrent.nonscaledCurrent = items;
            const rgbaArrayToRGBAColor = fn(closure_2_1[5]).rgbaArrayToRGBAColor;
            fn(closure_2_1[5]);
            const obj2 = fn(closure_2_1[5]);
            nonscaledCurrent.current = rgbaArrayToRGBAColor(obj2.toGammaSpace(items));
            return closure_3;
          }
          function transformationMatrixOnFrame(arg0, arg1) {
            let tmp3;
            let tmp4;
            let tmp5;
            let tmp7;
            let tmp8;
            let tmp9;
            let closure_0 = arg0;
            const first = arg0[0];
            let closure_1 = arg0[0].current / 100;
            const items = [];
            const items1 = ["translationMatrix", "scaleMatrix", "skewMatrix"];
            const onFrameResult = first.onFrame(arg0[0], arg1);
            const item = items1.forEach((item, index) => {
              if (typeof objectOnFrame === "function") {
                const addMatrices = closure_2_0(closure_2_1[4]).addMatrices;
                closure_2_0(closure_2_1[4]);
                const scaleMatrix = closure_2_0(closure_2_1[4]).scaleMatrix;
                closure_2_0(closure_2_1[4]);
                const obj = closure_2_0(closure_2_1[4]);
                return tmp2(
                  addMatrices(
                    closure_0.startMatrices[item],
                    scaleMatrix(obj.subtractMatrices(tmp5, closure_0.startMatrices[item]), tmp3),
                  ),
                );
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
            const items2 = [];
            const items3 = ["x", "y", "z"];
            [tmp3, tmp4, tmp5] = items;
            const item1 = items3.forEach((item, index) => {
              if (typeof closure_2_9 === "function") {
                const sum = tmp2 + tmp * (closure_0.stopMatrices["r" + item] - tmp2);
                const push = items2.push;
                const obj = closure_2_0(closure_2_1[4]);
                push(obj.getRotationMatrix(sum, item));
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
            [tmp7, tmp8, tmp9] = items2;
            const multiplyMatrices = closure_0(closure_1[4]).multiplyMatrices;
            closure_0(closure_1[4]);
            const obj2 = closure_0(closure_1[4]);
            const multiplyMatricesResult = multiplyMatrices(tmp7, obj2.multiplyMatrices(tmp8, tmp9));
            const flatten = closure_0(closure_1[4]).flatten;
            closure_0(closure_1[4]);
            const multiplyMatrices2 = closure_0(closure_1[4]).multiplyMatrices;
            closure_0(closure_1[4]);
            const multiplyMatrices3 = closure_0(closure_1[4]).multiplyMatrices;
            closure_0(closure_1[4]);
            const obj3 = closure_0(closure_1[4]);
            arg0.current = flatten(
              multiplyMatrices2(multiplyMatrices3(tmp4, obj3.multiplyMatrices(tmp5, multiplyMatricesResult)), tmp3),
            );
            return onFrameResult;
          }
          const arrayOnFrame = arrayOnFrame2;
          function objectOnFrame(current, arg1) {
            const obj = {};
            let flag = true;
            let flag2 = true;
            const keys = Object.keys();
            if (keys !== undefined) {
              flag2 = flag;
              while (keys[tmp] !== undefined) {
                let obj2 = current[tmp4];
                let tmp5 = flag && obj2.onFrame(current[tmp4], arg1);
                obj[tmp4] = current[tmp4].current;
                flag = tmp5;
                continue;
              }
            }
            current.current = obj;
            return flag2;
          }
          tmp.onStart = function (reduceMotion, current, arg2, current2) {
            let strippedValue;
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
                reduceMotion(reduceMotion, current, arg2, current2);
              }
              reduceMotion.startTime = 0;
              reduceMotion.onFrame = () => true;
            } else {
              const obj = closure_1_0(closure_1_1[5]);
              if (obj.isColor(current)) {
                let closure_1 = arg2;
                const items = [];
                const tmp4Result = closure_1_0(closure_1_1[5]);
                if (tmp4Result.isColor(current)) {
                  const toLinearSpace = closure_1_0(closure_1_1[5]).toLinearSpace;
                  closure_1_0(closure_1_1[5]);
                  const tmp4Result14 = closure_1_0(closure_1_1[5]);
                  closure_4 = toLinearSpace(tmp4Result14.convertToRGBA(reduceMotion.current));
                  const toLinearSpace2 = closure_1_0(closure_1_1[5]).toLinearSpace;
                  closure_1_0(closure_1_1[5]);
                  const tmp4Result16 = closure_1_0(closure_1_1[5]);
                  let closure_3 = toLinearSpace2(tmp4Result16.convertToRGBA(current));
                  if (reduceMotion.toValue) {
                    const toLinearSpace3 = closure_1_0(closure_1_1[5]).toLinearSpace;
                    closure_1_0(closure_1_1[5]);
                    const tmp4Result18 = closure_1_0(closure_1_1[5]);
                    let closure_5 = toLinearSpace3(tmp4Result18.convertToRGBA(reduceMotion.toValue));
                  }
                }
                const item = closure_4.forEach((item, index) => {
                  closure_0[item] = Object.assign({}, current2);
                  closure_0[item].current = closure_4[index];
                  let tmp3;
                  const tmp2 = closure_0[item];
                  if (closure_5) {
                    tmp3 = closure_5[index];
                  }
                  tmp2.toValue = tmp3;
                  let tmp8;
                  const onStart = closure_0[item].onStart;
                  const tmp5 = closure_0[item];
                  const tmp6 = closure_3[index];
                  if (current2) {
                    tmp8 = current2[item];
                  }
                  onStart(tmp5, tmp6, closure_1, tmp8);
                  items.push(closure_0[item].current);
                });
                reduceMotion.unroundedCurrent = items;
                const tmp4Result19 = closure_1_0(closure_1_1[5]);
                tmp4Result19.clampRGBA(items);
                const rgbaArrayToRGBAColor = closure_1_0(closure_1_1[5]).rgbaArrayToRGBAColor;
                closure_1_0(closure_1_1[5]);
                const tmp4Result21 = closure_1_0(closure_1_1[5]);
                reduceMotion.current = rgbaArrayToRGBAColor(tmp4Result21.toGammaSpace(items));
                reduceMotion.onFrame = colorOnFrame;
              } else {
                const tmp4Result22 = closure_1_0(closure_1_1[4]);
                if (tmp4Result22.isAffineMatrixFlat(current)) {
                  const toValue = reduceMotion.toValue;
                  const tmp4Result23 = closure_1_0(closure_1_1[4]);
                  reduceMotion.startMatrices = tmp4Result23.decomposeMatrixIntoMatricesAndAngles(current);
                  const tmp4Result24 = closure_1_0(closure_1_1[4]);
                  reduceMotion.stopMatrices = tmp4Result24.decomposeMatrixIntoMatricesAndAngles(toValue);
                  const _Object = Object;
                  reduceMotion[0] = Object.assign({}, current2);
                  reduceMotion[0].current = 0;
                  reduceMotion[0].toValue = 100;
                  const first = reduceMotion[0];
                  const first1 = reduceMotion[0];
                  let first2;
                  let onStart = first.onStart;
                  if (current2) {
                    first2 = current2[0];
                  }
                  onStart(first1, 0, arg2, first2);
                  reduceMotion.current = current;
                  reduceMotion.onFrame = transformationMatrixOnFrame;
                } else {
                  let tmp6 = globalThis;
                  const _Array = Array;
                  if (Array.isArray(current)) {
                    closure_1 = arg2;
                    const item1 = current.forEach((current, index) => {
                      reduceMotion[index] = Object.assign({}, merged);
                      reduceMotion[index].current = current;
                      reduceMotion[index].toValue = reduceMotion.toValue[index];
                      let tmp4;
                      const onStart = reduceMotion[index].onStart;
                      const tmp2 = reduceMotion[index];
                      if (current2) {
                        tmp4 = current2[index];
                      }
                      onStart(tmp2, current, closure_1, tmp4);
                    });
                    const items1 = [];
                    HermesBuiltin.arraySpread(items1, current, 0);
                    reduceMotion.current = items1;
                    reduceMotion.onFrame = arrayOnFrame;
                  } else if (typeof current === "string") {
                    if (typeof colorOnFrame === "function") {
                      let obj3;
                      if (typeof current === "string") {
                        const match = current.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                        if (match) {
                          let str2 = match[3];
                          const tmp27 = match[1];
                          const tmp28 = match[4];
                          const tmp29 = match[2];
                          if (str2 == null) {
                            str2 = "";
                          }
                          const _parseFloat = parseFloat;
                          obj3 = { prefix: tmp27, suffix: tmp28, strippedValue: parseFloat(tmp29 + str2) };
                          const obj2 = { prefix: tmp27, suffix: tmp28, strippedValue: parseFloat(tmp29 + str2) };
                        } else {
                          const self = this;
                          const self2 = this;
                          const reanimatedError = new closure_1_0(closure_1_1[2]).ReanimatedError(
                            "Couldn't parse animation value.",
                          );
                          throw reanimatedError;
                        }
                      } else {
                        obj3 = { strippedValue: current };
                      }
                      ({ strippedValue, prefix: reduceMotion.__prefix, suffix: reduceMotion.__suffix } = obj3);
                      reduceMotion.strippedCurrent = strippedValue;
                      if (typeof colorOnFrame === "function") {
                        let obj5;
                        if (typeof reduceMotion.toValue === "string") {
                          const match1 = str3.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                          if (match1) {
                            let str5 = match1[3];
                            const tmp34 = match1[1];
                            const tmp35 = match1[4];
                            const tmp36 = match1[2];
                            if (str5 == null) {
                              str5 = "";
                            }
                            const _parseFloat2 = parseFloat;
                            obj5 = { prefix: tmp34, suffix: tmp35, strippedValue: parseFloat(tmp36 + str5) };
                            const obj4 = { prefix: tmp34, suffix: tmp35, strippedValue: parseFloat(tmp36 + str5) };
                          } else {
                            const self3 = this;
                            const self4 = this;
                            const reanimatedError1 = new closure_1_0(closure_1_1[2]).ReanimatedError(
                              "Couldn't parse animation value.",
                            );
                            throw reanimatedError1;
                          }
                        } else {
                          obj5 = { strippedValue: reduceMotion.toValue };
                        }
                        reduceMotion.current = strippedValue;
                        reduceMotion.startValue = strippedValue;
                        reduceMotion.toValue = obj5.strippedValue;
                        if (current2) {
                          if (current2 !== reduceMotion) {
                            if (typeof colorOnFrame === "function") {
                              let obj7;
                              if (typeof current2.current === "string") {
                                const match2 = str15.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                                if (match2) {
                                  let str7 = match2[3];
                                  const tmp41 = match2[1];
                                  const tmp42 = match2[4];
                                  const tmp43 = match2[2];
                                  if (str7 == null) {
                                    str7 = "";
                                  }
                                  const _parseFloat3 = parseFloat;
                                  obj7 = { prefix: tmp41, suffix: tmp42, strippedValue: parseFloat(tmp43 + str7) };
                                  const obj6 = {
                                    prefix: tmp41,
                                    suffix: tmp42,
                                    strippedValue: parseFloat(tmp43 + str7),
                                  };
                                } else {
                                  const self5 = this;
                                  const self6 = this;
                                  const reanimatedError2 = new closure_1_0(closure_1_1[2]).ReanimatedError(
                                    "Couldn't parse animation value.",
                                  );
                                  throw reanimatedError2;
                                }
                              } else {
                                obj7 = { strippedValue: current2.current };
                              }
                              ({
                                strippedValue: current2.current,
                                prefix: current2.__prefix,
                                suffix: current2.__suffix,
                              } = obj7);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        }
                        reduceMotion(reduceMotion, strippedValue, arg2, current2);
                        let str8 = reduceMotion.__prefix;
                        if (str8 == null) {
                          str8 = "";
                        }
                        let str9 = reduceMotion.__suffix;
                        const sum = str8 + reduceMotion.current;
                        if (str9 == null) {
                          str9 = "";
                        }
                        reduceMotion.current = sum + str9;
                        const tmp53 = current2 && current2 !== reduceMotion;
                        if (tmp53) {
                          let str10 = current2.__prefix;
                          if (str10 == null) {
                            str10 = "";
                          }
                          let str11 = current2.__suffix;
                          const sum1 = str10 + current2.current;
                          if (str11 == null) {
                            str11 = "";
                          }
                          current2.current = sum1 + str11;
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
                        for (const key10034 in current) {
                          let _Object2 = Object;
                          reduceMotion[key10034] = Object.assign({}, current2);
                          reduceMotion[key10034].onStart = reduceMotion.onStart;
                          reduceMotion[key10034].current = current[key10034];
                          reduceMotion[key10034].toValue = reduceMotion.toValue[key10034];
                          let tmp89 = reduceMotion[key10034];
                          let tmp90 = reduceMotion[key10034];
                          let tmp91 = current[key10034];
                          let tmp15;
                          let onStart2 = tmp89.onStart;
                          if (current2) {
                            tmp15 = current2[key10034];
                          }
                          let onStart2Result = onStart2(tmp90, tmp91, arg2, tmp15);
                          continue;
                        }
                        reduceMotion.current = current;
                        reduceMotion.onFrame = objectOnFrame;
                      }
                    }
                    let tmp8 = reduceMotion;
                    reduceMotion(reduceMotion, current, arg2, current2);
                  }
                }
              }
            }
            return tmp13;
          };
        }
        return tmp;
      } else {
        let str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    };
    let obj = { factory, decorateAnimation };
    factory.__closure = obj;
    factory.__workletHash = 9825023081203;
    factory.__initData = __initData;
    let tmp4 = globalThis;
    if (!_WORKLET) {
      if (!module_1646) {
        let flag = true;
        factory.__isAnimationDefinition = true;
      }
      return factory;
    }
    let tmp6 = factory();
    if (typeof decorateAnimation === "function") {
      ({ onStart: closure_129_0, onFrame: closure_129_1 } = tmp6);
      if (tmp6.isHigherOrder) {
        tmp6.onStart = onStart;
        factory = tmp6;
      } else {
        let _Object = Object;
        let merged = Object.assign({}, tmp6);
        delete tmp7["callback"];
        let prefNumberSuffOnFrame = prefNumberSuffOnFrame2;
        let closure_4 = ["R", "G", "B", "A"];
        function colorOnFrame(nonscaledCurrent, arg1) {
          let closure_0 = nonscaledCurrent;
          let closure_1 = arg1;
          const items = [];
          let closure_3 = true;
          nonscaledCurrent.current = nonscaledCurrent.nonscaledCurrent;
          const item = closure_4.forEach((item) => {
            const obj = closure_0[item];
            const tmp2 = closure_3 && obj.onFrame(closure_0[item], closure_1);
            closure_3 = tmp2;
            items.push(closure_0[item].current);
          });
          let obj = fn(closure_2_1[5]);
          obj.clampRGBA(items);
          nonscaledCurrent.nonscaledCurrent = items;
          const rgbaArrayToRGBAColor = fn(closure_2_1[5]).rgbaArrayToRGBAColor;
          fn(closure_2_1[5]);
          const obj2 = fn(closure_2_1[5]);
          nonscaledCurrent.current = rgbaArrayToRGBAColor(obj2.toGammaSpace(items));
          return closure_3;
        }
        function transformationMatrixOnFrame(arg0, arg1) {
          let tmp3;
          let tmp4;
          let tmp5;
          let tmp7;
          let tmp8;
          let tmp9;
          let closure_0 = arg0;
          const first = arg0[0];
          let closure_1 = arg0[0].current / 100;
          const items = [];
          const items1 = ["translationMatrix", "scaleMatrix", "skewMatrix"];
          const onFrameResult = first.onFrame(arg0[0], arg1);
          const item = items1.forEach((item, index) => {
            if (typeof objectOnFrame === "function") {
              const addMatrices = closure_2_0(closure_2_1[4]).addMatrices;
              closure_2_0(closure_2_1[4]);
              const scaleMatrix = closure_2_0(closure_2_1[4]).scaleMatrix;
              closure_2_0(closure_2_1[4]);
              const obj = closure_2_0(closure_2_1[4]);
              return tmp2(
                addMatrices(
                  closure_0.startMatrices[item],
                  scaleMatrix(obj.subtractMatrices(tmp5, closure_0.startMatrices[item]), tmp3),
                ),
              );
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
          const items2 = [];
          const items3 = ["x", "y", "z"];
          [tmp3, tmp4, tmp5] = items;
          const item1 = items3.forEach((item, index) => {
            if (typeof closure_2_9 === "function") {
              const sum = tmp2 + tmp * (closure_0.stopMatrices["r" + item] - tmp2);
              const push = items2.push;
              const obj = closure_2_0(closure_2_1[4]);
              push(obj.getRotationMatrix(sum, item));
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
          [tmp7, tmp8, tmp9] = items2;
          const multiplyMatrices = closure_0(closure_1[4]).multiplyMatrices;
          closure_0(closure_1[4]);
          const obj2 = closure_0(closure_1[4]);
          const multiplyMatricesResult = multiplyMatrices(tmp7, obj2.multiplyMatrices(tmp8, tmp9));
          const flatten = closure_0(closure_1[4]).flatten;
          closure_0(closure_1[4]);
          const multiplyMatrices2 = closure_0(closure_1[4]).multiplyMatrices;
          closure_0(closure_1[4]);
          const multiplyMatrices3 = closure_0(closure_1[4]).multiplyMatrices;
          closure_0(closure_1[4]);
          const obj3 = closure_0(closure_1[4]);
          arg0.current = flatten(
            multiplyMatrices2(multiplyMatrices3(tmp4, obj3.multiplyMatrices(tmp5, multiplyMatricesResult)), tmp3),
          );
          return onFrameResult;
        }
        let arrayOnFrame = arrayOnFrame2;
        function objectOnFrame(current, arg1) {
          const obj = {};
          let flag = true;
          let flag2 = true;
          const keys = Object.keys();
          if (keys !== undefined) {
            flag2 = flag;
            while (keys[tmp] !== undefined) {
              let obj2 = current[tmp4];
              let tmp5 = flag && obj2.onFrame(current[tmp4], arg1);
              obj[tmp4] = current[tmp4].current;
              flag = tmp5;
              continue;
            }
          }
          current.current = obj;
          return flag2;
        }
        tmp6.onStart = function (reduceMotion, current, arg2, current2) {
          let strippedValue;
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
              reduceMotion(reduceMotion, current, arg2, current2);
            }
            reduceMotion.startTime = 0;
            reduceMotion.onFrame = () => true;
          } else {
            const obj = closure_1_0(closure_1_1[5]);
            if (obj.isColor(current)) {
              let closure_1 = arg2;
              const items = [];
              const tmp4Result = closure_1_0(closure_1_1[5]);
              if (tmp4Result.isColor(current)) {
                const toLinearSpace = closure_1_0(closure_1_1[5]).toLinearSpace;
                closure_1_0(closure_1_1[5]);
                const tmp4Result14 = closure_1_0(closure_1_1[5]);
                closure_4 = toLinearSpace(tmp4Result14.convertToRGBA(reduceMotion.current));
                const toLinearSpace2 = closure_1_0(closure_1_1[5]).toLinearSpace;
                closure_1_0(closure_1_1[5]);
                const tmp4Result16 = closure_1_0(closure_1_1[5]);
                let closure_3 = toLinearSpace2(tmp4Result16.convertToRGBA(current));
                if (reduceMotion.toValue) {
                  const toLinearSpace3 = closure_1_0(closure_1_1[5]).toLinearSpace;
                  closure_1_0(closure_1_1[5]);
                  const tmp4Result18 = closure_1_0(closure_1_1[5]);
                  let closure_5 = toLinearSpace3(tmp4Result18.convertToRGBA(reduceMotion.toValue));
                }
              }
              const item = closure_4.forEach((item, index) => {
                closure_0[item] = Object.assign({}, current2);
                closure_0[item].current = closure_4[index];
                let tmp3;
                const tmp2 = closure_0[item];
                if (closure_5) {
                  tmp3 = closure_5[index];
                }
                tmp2.toValue = tmp3;
                let tmp8;
                const onStart = closure_0[item].onStart;
                const tmp5 = closure_0[item];
                const tmp6 = closure_3[index];
                if (current2) {
                  tmp8 = current2[item];
                }
                onStart(tmp5, tmp6, closure_1, tmp8);
                items.push(closure_0[item].current);
              });
              reduceMotion.unroundedCurrent = items;
              const tmp4Result19 = closure_1_0(closure_1_1[5]);
              tmp4Result19.clampRGBA(items);
              const rgbaArrayToRGBAColor = closure_1_0(closure_1_1[5]).rgbaArrayToRGBAColor;
              closure_1_0(closure_1_1[5]);
              const tmp4Result21 = closure_1_0(closure_1_1[5]);
              reduceMotion.current = rgbaArrayToRGBAColor(tmp4Result21.toGammaSpace(items));
              reduceMotion.onFrame = colorOnFrame;
            } else {
              const tmp4Result22 = closure_1_0(closure_1_1[4]);
              if (tmp4Result22.isAffineMatrixFlat(current)) {
                const toValue = reduceMotion.toValue;
                const tmp4Result23 = closure_1_0(closure_1_1[4]);
                reduceMotion.startMatrices = tmp4Result23.decomposeMatrixIntoMatricesAndAngles(current);
                const tmp4Result24 = closure_1_0(closure_1_1[4]);
                reduceMotion.stopMatrices = tmp4Result24.decomposeMatrixIntoMatricesAndAngles(toValue);
                const _Object = Object;
                reduceMotion[0] = Object.assign({}, current2);
                reduceMotion[0].current = 0;
                reduceMotion[0].toValue = 100;
                const first = reduceMotion[0];
                const first1 = reduceMotion[0];
                let first2;
                let onStart = first.onStart;
                if (current2) {
                  first2 = current2[0];
                }
                onStart(first1, 0, arg2, first2);
                reduceMotion.current = current;
                reduceMotion.onFrame = transformationMatrixOnFrame;
              } else {
                let tmp6 = globalThis;
                const _Array = Array;
                if (Array.isArray(current)) {
                  closure_1 = arg2;
                  const item1 = current.forEach((current, index) => {
                    reduceMotion[index] = Object.assign({}, merged);
                    reduceMotion[index].current = current;
                    reduceMotion[index].toValue = reduceMotion.toValue[index];
                    let tmp4;
                    const onStart = reduceMotion[index].onStart;
                    const tmp2 = reduceMotion[index];
                    if (current2) {
                      tmp4 = current2[index];
                    }
                    onStart(tmp2, current, closure_1, tmp4);
                  });
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, current, 0);
                  reduceMotion.current = items1;
                  reduceMotion.onFrame = arrayOnFrame;
                } else if (typeof current === "string") {
                  if (typeof colorOnFrame === "function") {
                    let obj3;
                    if (typeof current === "string") {
                      const match = current.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                      if (match) {
                        let str2 = match[3];
                        const tmp27 = match[1];
                        const tmp28 = match[4];
                        const tmp29 = match[2];
                        if (str2 == null) {
                          str2 = "";
                        }
                        const _parseFloat = parseFloat;
                        obj3 = { prefix: tmp27, suffix: tmp28, strippedValue: parseFloat(tmp29 + str2) };
                        const obj2 = { prefix: tmp27, suffix: tmp28, strippedValue: parseFloat(tmp29 + str2) };
                      } else {
                        const self = this;
                        const self2 = this;
                        const reanimatedError = new closure_1_0(closure_1_1[2]).ReanimatedError(
                          "Couldn't parse animation value.",
                        );
                        throw reanimatedError;
                      }
                    } else {
                      obj3 = { strippedValue: current };
                    }
                    ({ strippedValue, prefix: reduceMotion.__prefix, suffix: reduceMotion.__suffix } = obj3);
                    reduceMotion.strippedCurrent = strippedValue;
                    if (typeof colorOnFrame === "function") {
                      let obj5;
                      if (typeof reduceMotion.toValue === "string") {
                        const match1 = str3.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                        if (match1) {
                          let str5 = match1[3];
                          const tmp34 = match1[1];
                          const tmp35 = match1[4];
                          const tmp36 = match1[2];
                          if (str5 == null) {
                            str5 = "";
                          }
                          const _parseFloat2 = parseFloat;
                          obj5 = { prefix: tmp34, suffix: tmp35, strippedValue: parseFloat(tmp36 + str5) };
                          const obj4 = { prefix: tmp34, suffix: tmp35, strippedValue: parseFloat(tmp36 + str5) };
                        } else {
                          const self3 = this;
                          const self4 = this;
                          const reanimatedError1 = new closure_1_0(closure_1_1[2]).ReanimatedError(
                            "Couldn't parse animation value.",
                          );
                          throw reanimatedError1;
                        }
                      } else {
                        obj5 = { strippedValue: reduceMotion.toValue };
                      }
                      reduceMotion.current = strippedValue;
                      reduceMotion.startValue = strippedValue;
                      reduceMotion.toValue = obj5.strippedValue;
                      if (current2) {
                        if (current2 !== reduceMotion) {
                          if (typeof colorOnFrame === "function") {
                            let obj7;
                            if (typeof current2.current === "string") {
                              const match2 = str15.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
                              if (match2) {
                                let str7 = match2[3];
                                const tmp41 = match2[1];
                                const tmp42 = match2[4];
                                const tmp43 = match2[2];
                                if (str7 == null) {
                                  str7 = "";
                                }
                                const _parseFloat3 = parseFloat;
                                obj7 = { prefix: tmp41, suffix: tmp42, strippedValue: parseFloat(tmp43 + str7) };
                                const obj6 = { prefix: tmp41, suffix: tmp42, strippedValue: parseFloat(tmp43 + str7) };
                              } else {
                                const self5 = this;
                                const self6 = this;
                                const reanimatedError2 = new closure_1_0(closure_1_1[2]).ReanimatedError(
                                  "Couldn't parse animation value.",
                                );
                                throw reanimatedError2;
                              }
                            } else {
                              obj7 = { strippedValue: current2.current };
                            }
                            ({
                              strippedValue: current2.current,
                              prefix: current2.__prefix,
                              suffix: current2.__suffix,
                            } = obj7);
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                      }
                      reduceMotion(reduceMotion, strippedValue, arg2, current2);
                      let str8 = reduceMotion.__prefix;
                      if (str8 == null) {
                        str8 = "";
                      }
                      let str9 = reduceMotion.__suffix;
                      const sum = str8 + reduceMotion.current;
                      if (str9 == null) {
                        str9 = "";
                      }
                      reduceMotion.current = sum + str9;
                      const tmp53 = current2 && current2 !== reduceMotion;
                      if (tmp53) {
                        let str10 = current2.__prefix;
                        if (str10 == null) {
                          str10 = "";
                        }
                        let str11 = current2.__suffix;
                        const sum1 = str10 + current2.current;
                        if (str11 == null) {
                          str11 = "";
                        }
                        current2.current = sum1 + str11;
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
                      for (const key10034 in current) {
                        let _Object2 = Object;
                        reduceMotion[key10034] = Object.assign({}, current2);
                        reduceMotion[key10034].onStart = reduceMotion.onStart;
                        reduceMotion[key10034].current = current[key10034];
                        reduceMotion[key10034].toValue = reduceMotion.toValue[key10034];
                        let tmp89 = reduceMotion[key10034];
                        let tmp90 = reduceMotion[key10034];
                        let tmp91 = current[key10034];
                        let tmp15;
                        let onStart2 = tmp89.onStart;
                        if (current2) {
                          tmp15 = current2[key10034];
                        }
                        let onStart2Result = onStart2(tmp90, tmp91, arg2, tmp15);
                        continue;
                      }
                      reduceMotion.current = current;
                      reduceMotion.onFrame = objectOnFrame;
                    }
                  }
                  let tmp8 = reduceMotion;
                  reduceMotion(reduceMotion, current, arg2, current2);
                }
              }
            }
          }
          return tmp13;
        };
        factory = tmp6;
      }
    } else {
      let str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
let obj5 = { IN_STYLE_UPDATER: React2, decorateAnimation, SHOULD_BE_USE_WEB: module_1646 };
defineAnimation.__closure = obj5;
defineAnimation.__workletHash = 8998026617746;
defineAnimation.__initData = {
  code: "function defineAnimation_Pnpm_utilTs9(starting,factory){const{IN_STYLE_UPDATER,decorateAnimation,SHOULD_BE_USE_WEB}=this.__closure;if(IN_STYLE_UPDATER){return starting;}const create=function(){'worklet';const animation=factory();decorateAnimation(animation);return animation;};if(_WORKLET||SHOULD_BE_USE_WEB){return create();}create.__isAnimationDefinition=true;return create;}",
};
const __initData2 = {
  code: "function pnpm_utilTs12(){const{sharedValue}=this.__closure;sharedValue.value=sharedValue.value;}",
};
let cancelAnimationWeb = function cancelAnimationNative(animationProgress) {
  let closure_0 = animationProgress;
  if (globalThis._WORKLET) {
    animationProgress.value = animationProgress.value;
  } else {
    const fn = function n() {
      value.value = value.value;
    };
    const obj2 = { sharedValue: animationProgress };
    fn.__closure = obj2;
    fn.__workletHash = 14261344384038;
    fn.__initData = __initData2;
    const obj = setupMicrotasks;
    obj.runOnUI(fn)();
  }
};
let obj6 = { runOnUI: setupMicrotasks.runOnUI };
cancelAnimationWeb.__closure = obj6;
cancelAnimationWeb.__workletHash = 796831326214;
cancelAnimationWeb.__initData = {
  code: "function cancelAnimationNative_Pnpm_utilTs11(sharedValue){const{runOnUI}=this.__closure;if(_WORKLET){sharedValue.value=sharedValue.value;}else{runOnUI(function(){'worklet';sharedValue.value=sharedValue.value;})();}}",
};
if (module_1646) {
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
