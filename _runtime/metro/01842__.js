// === Module 1842: ? ===

// Module 1842
import Colors from "Colors" /* 1680 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1697 */;
import _mod1843 from "module_1843" /* 1843 */;
import _mod1845 from "module_1845" /* 1845 */;
import bundleModeNative from "module_1705" /* 1705 */;

const IN_STYLE_UPDATER = { current: false };
const serializable = bundleModeNative.createSerializable({ current: false });
const serializableMappingCache = bundleModeNative.serializableMappingCache;
const result = serializableMappingCache.set(IN_STYLE_UPDATER, serializable);
let items = [{ code: "(function isValidLayoutAnimationProp_Pnpm_utilCommonTs1(prop){let[LAYOUT_ANIMATION_SUPPORTED_PROPS]=this.__closure;return prop in LAYOUT_ANIMATION_SUPPORTED_PROPS;})" }, { originX: true, originY: true, width: true, height: true, borderRadius: true, globalOriginX: true, globalOriginY: true, opacity: true, transform: true, backgroundColor: true }];
let closure_129_0;
[tmp4, tmp5] = items;
function isValidLayoutAnimationProp(arg0) {
  return arg0 in obj;
}
let items1 = [tmp5];
isValidLayoutAnimationProp.__closure = items1;
isValidLayoutAnimationProp.__workletHash = 3692039011472;
isValidLayoutAnimationProp.__initData = tmp4;
let items2 = [{ code: "(function recognizePrefixSuffix_Pnpm_utilCommonTs2(value){if(typeof value==='string'){var _match$;const match=value.match(/([A-Za-z]*)(-?\\d*\\.?\\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);if(!match){throw new Error(\"[Reanimated] Couldn't parse animation value.\");}const prefix=match[1];const suffix=match[4];const number=match[2]+((_match$=match[3])!==null&&_match$!==void 0?_match$:'');return{prefix:prefix,suffix:suffix,strippedValue:parseFloat(number)};}else{return{strippedValue:value};}})" }];
[tmp6] = items2;
function recognizePrefixSuffix(strippedValue) {
  if (typeof strippedValue === "string") {
    const match = strippedValue.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
    if (match) {
      let str2 = match[3];
      if (str2 == null) {
        str2 = "";
      }
      obj = { prefix: match[1], suffix: match[4], strippedValue: null };
      const _parseFloat = parseFloat;
      obj.strippedValue = parseFloat(match[2] + str2);
      return obj;
    } else {
      const _Error = Error;
      const error = new Error("[Reanimated] Couldn't parse animation value.");
      throw error;
    }
  } else {
    const obj2 = { strippedValue };
    return obj2;
  }
}
recognizePrefixSuffix.__workletHash = 15666383332526;
recognizePrefixSuffix.__initData = tmp6;
let items3 = [{ code: "(function getReduceMotionFromConfig_Pnpm_utilCommonTs3(config){let[ReduceMotion,isReduceMotionOnUI]=this.__closure;return!config||config===ReduceMotion.System?isReduceMotionOnUI.value:config===ReduceMotion.Always;})" }, LayoutAnimationType.ReduceMotion, _mod1843.ReducedMotionManager.uiValue];
let closure_130_0;
let closure_130_1;
[tmp7, tmp8, tmp9] = items3;
function getReduceMotionFromConfig(arg0) {
  if (arg0) {
    if (arg0 !== obj.System) {
      value = arg0 === obj.Always;
    }
    return value;
  }
  value = duration.value;
}
const items4 = [tmp8, tmp9];
getReduceMotionFromConfig.__closure = items4;
getReduceMotionFromConfig.__workletHash = 240605741019;
getReduceMotionFromConfig.__initData = tmp7;
const items5 = [{ code: "(function getReduceMotionForAnimation_Pnpm_utilCommonTs4(config){let[getReduceMotionFromConfig]=this.__closure;if(!config){return undefined;}return getReduceMotionFromConfig(config);})" }, getReduceMotionFromConfig];
let closure_131_0;
[tmp10, tmp11] = items5;
function getReduceMotionForAnimation(arg0) {
  if (arg0) {
    return obj(arg0);
  }
}
const items6 = [tmp11];
getReduceMotionForAnimation.__closure = items6;
getReduceMotionForAnimation.__workletHash = 17394846570243;
getReduceMotionForAnimation.__initData = tmp10;
const items7 = [{ code: "(function applyProgressToMatrix_Pnpm_utilCommonTs5(progress,a,b){let[addMatrices,scaleMatrix,subtractMatrices]=this.__closure;return addMatrices(a,scaleMatrix(subtractMatrices(b,a),progress));})" }, _mod1845.addMatrices, _mod1845.scaleMatrix, _mod1845.subtractMatrices];
let closure_132_0;
let closure_132_1;
let closure_132_2;
[tmp12, tmp13, tmp14, tmp15] = items7;
function applyProgressToMatrix(arg0, arg1, arg2) {
  return obj(arg1, duration(React2(arg2, arg1), arg0));
}
const items8 = [tmp13, tmp14, tmp15];
applyProgressToMatrix.__closure = items8;
applyProgressToMatrix.__workletHash = 15807166362027;
applyProgressToMatrix.__initData = tmp12;
const items9 = [{ code: "(function applyProgressToNumber_Pnpm_utilCommonTs6(progress,a,b){return a+progress*(b-a);})" }];
[tmp16] = items9;
function applyProgressToNumber(arg0, arg1, arg2) {
  return arg1 + arg0 * (arg2 - arg1);
}
applyProgressToNumber.__workletHash = 13377856094452;
applyProgressToNumber.__initData = tmp16;
const items10 = [{ code: "(function decorateAnimation_Pnpm_utilCommonTs7(animation){let[getReduceMotionFromConfig,recognizePrefixSuffix,isColor,toLinearSpace,convertToRGBA,clampRGBA,rgbaArrayToRGBAColor,toGammaSpace,decomposeMatrixIntoMatricesAndAngles,applyProgressToMatrix,applyProgressToNumber,getRotationMatrix,multiplyMatrices,flatten,isAffineMatrixFlat]=this.__closure;const baseOnStart=animation.onStart;const baseOnFrame=animation.onFrame;if(animation.isHigherOrder){animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}return baseOnStart(animation,value,timestamp,previousAnimation);};return;}const animationCopy=Object.assign({},animation);delete animationCopy.callback;const prefNumberSuffOnStart=function(animation,value,timestamp,previousAnimation){var _animation$__prefix,_animation$__suffix;const{prefix:prefix,suffix:suffix,strippedValue:strippedValue}=recognizePrefixSuffix(value);animation.__prefix=prefix;animation.__suffix=suffix;animation.strippedCurrent=strippedValue;const{strippedValue:strippedToValue}=recognizePrefixSuffix(animation.toValue);animation.current=strippedValue;animation.startValue=strippedValue;animation.toValue=strippedToValue;if(previousAnimation&&previousAnimation!==animation){const{prefix:paPrefix,suffix:paSuffix,strippedValue:paStrippedValue}=recognizePrefixSuffix(previousAnimation.current);previousAnimation.current=paStrippedValue;previousAnimation.__prefix=paPrefix;previousAnimation.__suffix=paSuffix;}baseOnStart(animation,strippedValue,timestamp,previousAnimation);animation.current=((_animation$__prefix=animation.__prefix)!==null&&_animation$__prefix!==void 0?_animation$__prefix:'')+animation.current+((_animation$__suffix=animation.__suffix)!==null&&_animation$__suffix!==void 0?_animation$__suffix:'');if(previousAnimation&&previousAnimation!==animation){var _previousAnimation$__,_previousAnimation$__2;previousAnimation.current=((_previousAnimation$__=previousAnimation.__prefix)!==null&&_previousAnimation$__!==void 0?_previousAnimation$__:'')+previousAnimation.current+((_previousAnimation$__2=previousAnimation.__suffix)!==null&&_previousAnimation$__2!==void 0?_previousAnimation$__2:'');}};const prefNumberSuffOnFrame=function(animation,timestamp){var _animation$__prefix2,_animation$__suffix2;animation.current=animation.strippedCurrent;const res=baseOnFrame(animation,timestamp);animation.strippedCurrent=animation.current;animation.current=((_animation$__prefix2=animation.__prefix)!==null&&_animation$__prefix2!==void 0?_animation$__prefix2:'')+animation.current+((_animation$__suffix2=animation.__suffix)!==null&&_animation$__suffix2!==void 0?_animation$__suffix2:'');return res;};const tab=['R','G','B','A'];const colorOnStart=function(animation,value,timestamp,previousAnimation){let RGBAValue;let RGBACurrent;let RGBAToValue;const res=[];if(isColor(value)){RGBACurrent=toLinearSpace(convertToRGBA(animation.current));RGBAValue=toLinearSpace(convertToRGBA(value));if(animation.toValue){RGBAToValue=toLinearSpace(convertToRGBA(animation.toValue));}}tab.forEach(function(i,index){animation[i]=Object.assign({},animationCopy);animation[i].current=RGBACurrent[index];animation[i].toValue=RGBAToValue?RGBAToValue[index]:undefined;animation[i].onStart(animation[i],RGBAValue[index],timestamp,previousAnimation?previousAnimation[i]:undefined);res.push(animation[i].current);});animation.unroundedCurrent=res;clampRGBA(res);animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));};const colorOnFrame=function(animation,timestamp){const res=[];let finished=true;animation.current=animation.nonscaledCurrent;tab.forEach(function(i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;res.push(animation[i].current);});clampRGBA(res);animation.nonscaledCurrent=res;animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));return finished;};const transformationMatrixOnStart=function(animation,value,timestamp,previousAnimation){const toValue=animation.toValue;animation.startMatrices=decomposeMatrixIntoMatricesAndAngles(value);animation.stopMatrices=decomposeMatrixIntoMatricesAndAngles(toValue);animation[0]=Object.assign({},animationCopy);animation[0].current=0;animation[0].toValue=100;animation[0].onStart(animation[0],0,timestamp,previousAnimation?previousAnimation[0]:undefined);animation.current=value;};const transformationMatrixOnFrame=function(animation,timestamp){let finished=true;const result=animation[0].onFrame(animation[0],timestamp);finished=finished&&result;const progress=animation[0].current/100;const transforms=['translationMatrix','scaleMatrix','skewMatrix'];const mappedTransforms=[];transforms.forEach(function(key,_){return mappedTransforms.push(applyProgressToMatrix(progress,animation.startMatrices[key],animation.stopMatrices[key]));});const[currentTranslation,currentScale,skewMatrix]=mappedTransforms;const rotations=['x','y','z'];const mappedRotations=[];rotations.forEach(function(key,_){const angle=applyProgressToNumber(progress,animation.startMatrices['r'+key],animation.stopMatrices['r'+key]);mappedRotations.push(getRotationMatrix(angle,key));});const[rotationMatrixX,rotationMatrixY,rotationMatrixZ]=mappedRotations;const rotationMatrix=multiplyMatrices(rotationMatrixX,multiplyMatrices(rotationMatrixY,rotationMatrixZ));const updated=flatten(multiplyMatrices(multiplyMatrices(currentScale,multiplyMatrices(skewMatrix,rotationMatrix)),currentTranslation));animation.current=updated;return finished;};const arrayOnStart=function(animation,value,timestamp,previousAnimation){value.forEach(function(v,i){animation[i]=Object.assign({},animationCopy);animation[i].current=v;animation[i].toValue=animation.toValue[i];animation[i].onStart(animation[i],v,timestamp,previousAnimation?previousAnimation[i]:undefined);});animation.current=[...value];};const arrayOnFrame=function(animation,timestamp){let finished=true;animation.current.forEach(function(_,i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;animation.current[i]=animation[i].current;});return finished;};const objectOnStart=function(animation,value,timestamp,previousAnimation){for(const key in value){animation[key]=Object.assign({},animationCopy);animation[key].onStart=animation.onStart;animation[key].current=value[key];animation[key].toValue=animation.toValue[key];animation[key].onStart(animation[key],value[key],timestamp,previousAnimation?previousAnimation[key]:undefined);}animation.current=value;};const objectOnFrame=function(animation,timestamp){let finished=true;const newObject={};for(const key in animation.current){const result=animation[key].onFrame(animation[key],timestamp);finished=finished&&result;newObject[key]=animation[key].current;}animation.current=newObject;return finished;};animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}if(animation.reduceMotion){if(animation.toValue!==undefined){animation.current=animation.toValue;}else{baseOnStart(animation,value,timestamp,previousAnimation);}animation.startTime=0;animation.onFrame=function(){return true;};return;}if(isColor(value)){colorOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=colorOnFrame;return;}else if(isAffineMatrixFlat(value)){transformationMatrixOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=transformationMatrixOnFrame;return;}else if(Array.isArray(value)){arrayOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=arrayOnFrame;return;}else if(typeof value==='string'){prefNumberSuffOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=prefNumberSuffOnFrame;return;}else if(typeof value==='object'&&value!==null){objectOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=objectOnFrame;return;}baseOnStart(animation,value,timestamp,previousAnimation);};})" }, getReduceMotionFromConfig, recognizePrefixSuffix, Colors.isColor, Colors.toLinearSpace, Colors.convertToRGBA, Colors.clampRGBA, Colors.rgbaArrayToRGBAColor, Colors.toGammaSpace, _mod1845.decomposeMatrixIntoMatricesAndAngles, applyProgressToMatrix, applyProgressToNumber, _mod1845.getRotationMatrix, _mod1845.multiplyMatrices, _mod1845.flatten, _mod1845.isAffineMatrixFlat];
let closure_133_0;
let closure_133_1;
let closure_133_2;
let closure_133_3;
let closure_133_4;
let closure_133_5;
let closure_133_6;
let closure_133_7;
let closure_133_8;
let closure_133_9;
let closure_133_10;
let closure_133_11;
let closure_133_12;
let closure_133_13;
let closure_133_14;
[tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items10;
function decorateAnimation(isHigherOrder) {
  ({ onStart: obj, onFrame: closure_1 } = isHigherOrder);
  if (isHigherOrder.isHigherOrder) {
    isHigherOrder.onStart = (reduceMotion, arg1, arg2, arg3) => {
      if (undefined === reduceMotion.reduceMotion) {
        reduceMotion.reduceMotion = obj();
      }
      return closure_1_0(reduceMotion, arg1, arg2, arg3);
    };
  } else {
    let _Object = Object;
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
      return closure_1_1(strippedCurrent, arg1);
    }
    closure_4 = ["R", "G", "B", "A"];
    function colorOnFrame(items, arg1) {
      closure_1 = arg1;
      items = [];
      c3 = true;
      items.current = items.nonscaledCurrent;
      const item = closure_4.forEach((item) => {
        let onFrameResult = c3;
        if (c3) {
          onFrameResult = obj.onFrame(items[item], closure_1);
        }
        c3 = onFrameResult;
        items.push(items[item].current);
        obj = items[item];
      });
      hasOwnProperty(items);
      items.nonscaledCurrent = items;
      items.current = timestampProducer(metroImportDefault(items));
      return c3;
    }
    function transformationMatrixOnFrame(arg0, arg1) {
      closure_0 = arg0;
      const first = arg0[0];
      closure_1 = arg0[0].current / 100;
      items = [];
      const items1 = ["translationMatrix", "scaleMatrix", "skewMatrix"];
      const item = items1.forEach((item, index) => items.push(closure_2_9(closure_1, closure_0.startMatrices[item], closure_0.stopMatrices[item])));
      const items2 = [];
      const items3 = ["x", "y", "z"];
      [tmp3, tmp4, tmp5] = items;
      const item1 = items3.forEach((item, index) => {
        items2.push(closure_2_11(closure_2_10(closure_1, closure_0.startMatrices["r" + item], closure_0.stopMatrices["r" + item]), item));
      });
      arg0.current = closure_13(closure_12(closure_12(tmp4, closure_12(tmp5, closure_12(items2[0], closure_12(items2[1], items2[2])))), tmp3));
      return first.onFrame(arg0[0], arg1);
    }
    function arrayOnFrame(items, arg1) {
      closure_1 = arg1;
      c2 = true;
      const current = items.current;
      const item = current.forEach((item, index) => {
        let onFrameResult = c2;
        if (c2) {
          onFrameResult = obj.onFrame(items[index], closure_1);
        }
        c2 = onFrameResult;
        items.current[index] = items[index].current;
        obj = items[index];
      });
      return c2;
    }
    function objectOnFrame(toValue, arg1) {
      const current = {};
      let flag = true;
      let flag2 = true;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag2 = flag;
        while (keys[tmp] !== undefined) {
          let obj2 = toValue[tmp4];
          let onFrameResult = flag;
          if (flag) {
            onFrameResult = obj2.onFrame(toValue[tmp4], arg1);
          }
          current[tmp4] = toValue[tmp4].current;
          flag = onFrameResult;
          continue;
        }
      }
      toValue.current = current;
      return flag2;
    }
    isHigherOrder.onStart = (reduceMotion, current, arg2, current2) => {
      if (undefined === reduceMotion.reduceMotion) {
        reduceMotion.reduceMotion = obj();
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
        if (dependencyMap(current)) {
          closure_129_0 = reduceMotion;
          closure_129_1 = arg2;
          closure_129_2 = current2;
          items = [];
          closure_129_6 = items;
          if (dependencyMap(current)) {
            closure_129_4 = prefNumberSuffOnFrame(closure_4(reduceMotion.current));
            closure_129_3 = prefNumberSuffOnFrame(closure_4(current));
            if (reduceMotion.toValue) {
              closure_129_5 = prefNumberSuffOnFrame(closure_4(reduceMotion.toValue));
            }
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
          colorOnFrame(items);
          reduceMotion.current = transformationMatrixOnFrame(arrayOnFrame(items));
          reduceMotion.onFrame = colorOnFrame;
        } else if (closure_1_14(current)) {
          reduceMotion.startMatrices = objectOnFrame(current);
          reduceMotion.stopMatrices = objectOnFrame(reduceMotion.toValue);
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
        } else {
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
            ({ strippedValue, prefix: reduceMotion.__prefix, suffix: reduceMotion.__suffix } = closure_1_1(current));
            reduceMotion.strippedCurrent = strippedValue;
            reduceMotion.current = strippedValue;
            reduceMotion.startValue = strippedValue;
            reduceMotion.toValue = closure_1_1(reduceMotion.toValue).strippedValue;
            if (current2) {
              if (current2 !== reduceMotion) {
                ({ strippedValue: current2.current, prefix: current2.__prefix, suffix: current2.__suffix } = closure_1_1(current2.current));
                const tmp21Result = closure_1_1(current2.current);
              }
            }
            toValue(reduceMotion, strippedValue, arg2, current2);
            let str = reduceMotion.__prefix;
            if (str == null) {
              str = "";
            }
            let str2 = reduceMotion.__suffix;
            const sum = str + reduceMotion.current;
            if (str2 == null) {
              str2 = "";
            }
            reduceMotion.current = sum + str2;
            let tmp32 = current2;
            if (current2) {
              tmp32 = current2 !== reduceMotion;
            }
            if (tmp32) {
              let str3 = current2.__prefix;
              if (str3 == null) {
                str3 = "";
              }
              let str4 = current2.__suffix;
              const sum1 = str3 + current2.current;
              if (str4 == null) {
                str4 = "";
              }
              current2.current = sum1 + str4;
            }
            reduceMotion.onFrame = prefNumberSuffOnFrame;
            const tmp22 = closure_1_1(current);
          } else {
            if (typeof current === "object") {
              if (null !== current) {
                for (const key10027 in arg1) {
                  let _Object2 = Object;
                  arg0[key10027] = Object.assign({}, dependencyMap);
                  arg0[key10027].onStart = arg0.onStart;
                  arg0[key10027].current = arg1[key10027];
                  arg0[key10027].toValue = arg0.toValue[key10027];
                  let obj2 = arg0[key10027];
                  let tmp69 = arg0[key10027];
                  let tmp70 = arg1[key10027];
                  let tmp13;
                  if (arg3) {
                    tmp13 = arg3[key10027];
                  }
                  let onStartResult1 = obj2.onStart(tmp69, tmp70, arg2, tmp13);
                  continue;
                }
                reduceMotion.current = current;
                reduceMotion.onFrame = objectOnFrame;
              }
            }
            toValue(reduceMotion, current, arg2, current2);
          }
        }
        return tmp11;
      }
    };
  }
}
const items11 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
decorateAnimation.__closure = items11;
decorateAnimation.__workletHash = 12529430525701;
decorateAnimation.__initData = tmp17;

export { IN_STYLE_UPDATER };
export { isValidLayoutAnimationProp };
export function initialUpdaterRun(updater) {
  obj.current = true;
  try {
    tmp2.current = false;
    return updater();
  } catch (tmp4) {
    tmp.current = false;
    throw tmp4;
  }
}
export { recognizePrefixSuffix };
export { getReduceMotionFromConfig };
export { getReduceMotionForAnimation };
export { decorateAnimation };