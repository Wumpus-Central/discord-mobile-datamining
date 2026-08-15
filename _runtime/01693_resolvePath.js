// _runtime/01693_resolvePath.js
import { addLogBoxLog } from "01658_addLogBoxLog.js";
import { isValidLayoutAnimationProp } from "01694_isValidLayoutAnimationProp.js";
import { call } from "01697_call.js";
import { t } from "01705_t.js";
const require = arg1;
const dependencyMap = arg6;
function resolvePath(arg0, arg1) {
  let arr = arg1;
  if (!Array.isArray(arg1)) {
    const items = [arg1];
    arr = items;
  }
  return arr.reduce((obj, num) => {
    if (!Array.isArray(obj)) {
      let tmp2;
      return tmp2;
    }
    tmp2 = obj[num];
  }, arg0);
}
resolvePath.__closure = {};
resolvePath.__workletHash = 6511886988303;
resolvePath.__initData = { code: "function resolvePath_Pnpm_styleAnimationTs1(obj,path){const keys=Array.isArray(path)?path:[path];return keys.reduce(function(acc,current){if(Array.isArray(acc)&&typeof current==='number'){return acc[current];}else if(acc!==null&&typeof acc==='object'&&current in acc){return acc[current];}return undefined;},obj);}" };
function setPath(arg0, arg1, arg2) {
  let arr = arg1;
  if (!Array.isArray(arg1)) {
    const items = [arg1];
    arr = items;
  }
  let tmp = arg0;
  let tmp2 = arg0;
  let num = 0;
  if (0 < arr.length - 1) {
    do {
      let tmp3 = num;
      let tmp4 = tmp;
      if (!(arr[num] in tmp)) {
        if (typeof arr[num + 1] === "number") {
          tmp[arr[num]] = [];
        } else {
          tmp[arr[num]] = {};
        }
      }
      tmp = tmp[arr[num]];
      num = num + 1;
      tmp2 = tmp;
    } while (num < arr.length - 1);
  }
  tmp2[arr[arr.length - 1]] = arg2;
}
setPath.__closure = {};
setPath.__workletHash = 1936400546748;
setPath.__initData = { code: "function setPath_Pnpm_styleAnimationTs2(obj,path,value){const keys=Array.isArray(path)?path:[path];let currObj=obj;for(let i=0;i<keys.length-1;i++){currObj=currObj;if(!(keys[i]in currObj)){if(typeof keys[i+1]==='number'){currObj[keys[i]]=[];}else{currObj[keys[i]]={};}}currObj=currObj[keys[i]];}currObj[keys[keys.length-1]]=value;}" };
let closure_4 = { code: "function pnpm_styleAnimationTs4(){const{ColorProperties,setPath,processColor,styleAnimations,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming}=this.__closure;const onFrame=function(animation,now){let stillGoing=false;const entriesToCheck=[{value:animation.styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onFrame===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const currentStyleAnimation=currentEntry.value;if(currentStyleAnimation.finished){continue;}const finished=currentStyleAnimation.onFrame(currentStyleAnimation,now);if(finished){currentStyleAnimation.finished=true;if(currentStyleAnimation.callback){currentStyleAnimation.callback(true);}}else{stillGoing=true;}const isAnimatingColorProp=ColorProperties.includes(currentEntry.path[0]);setPath(animation.current,currentEntry.path,isAnimatingColorProp?processColor(currentStyleAnimation.current):currentStyleAnimation.current);}}return!stillGoing;};const onStart=function(animation,value,now,previousAnimation){const entriesToCheck=[{value:styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onStart===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const prevAnimation=resolvePath(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.styleAnimations,currentEntry.path);let prevVal=resolvePath(value,currentEntry.path);if(prevAnimation&&!prevVal){prevVal=prevAnimation.current;}if(__DEV__){if(prevVal===undefined){logger.warn(\"Initial values for animation are missing for property \"+currentEntry.path.join('.'));}const propName=currentEntry.path[0];if(typeof propName==='string'&&!isValidLayoutAnimationProp(propName.trim())){logger.warn(\"'\"+propName+\"' property is not officially supported for layout animations. It may not work as expected.\");}}setPath(animation.current,currentEntry.path,prevVal);let currentAnimation;if(typeof currentEntry.value!=='object'||!currentEntry.value.onStart){currentAnimation=withTiming(currentEntry.value,{duration:0});setPath(animation.styleAnimations,currentEntry.path,currentAnimation);}else{currentAnimation=currentEntry.value;}currentAnimation.onStart(currentAnimation,prevVal,now,prevAnimation);}}};const callback=function(finished){if(!finished){const animationsToCheck=[styleAnimations];while(animationsToCheck.length>0){const currentAnimation=animationsToCheck.pop();if(Array.isArray(currentAnimation)){for(const element of currentAnimation){animationsToCheck.push(element);}}else if(typeof currentAnimation==='object'&&currentAnimation.onStart===undefined){for(const value of Object.values(currentAnimation)){animationsToCheck.push(value);}}else{const currentStyleAnimation=currentAnimation;if(!currentStyleAnimation.finished&&currentStyleAnimation.callback){currentStyleAnimation.callback(false);}}}}};return{isHigherOrder:true,onFrame:onFrame,onStart:onStart,current:{},styleAnimations:styleAnimations,callback:callback};}" };
function withStyleAnimation(animations) {
  const _require = animations;
  let obj = _isValidLayoutAnimationProp;
  const fn = function i() {
    return {
      isHigherOrder: true,
      onFrame(styleAnimations) {
        let obj = { value: styleAnimations.styleAnimations, path: [] };
        const items = [obj];
        let flag = false;
        let flag2 = false;
        while (items.length > 0) {
          let iter = items.pop();
          let _Array = Array;
          let value = iter.value;
          let tmp = flag;
          if (Array.isArray(iter.value)) {
            let num = 0;
            let tmp2 = flag;
            if (0 < value.length) {
              do {
                obj = { value: null, path: null };
                obj[0] = iter.value[num];
                let path2 = iter.path;
                obj[1] = path2.concat(num);
                let arr = items.push(obj);
                num = num + 1;
                tmp2 = flag;
                length = iter.value.length;
              } while (num < length);
            }
          } else {
            if (typeof value === "object") {
              if (undefined === iter.value.onFrame) {
                let _Object = Object;
                let keys = Object.keys(iter.value);
                let tmp9 = keys;
                let tmp10 = keys;
                tmp2 = flag;
                for (const item10057 of keys) {
                  obj = { value: null, path: null };
                  obj[0] = iter.value[item10057];
                  let path = iter.path;
                  obj[1] = path.concat(item10057);
                  arr = items.push(obj);
                  continue;
                }
              }
            }
            value = iter.value;
            tmp2 = flag;
            if (!value.finished) {
              let flag3 = true;
              if (value.onFrame(value, arg1)) {
                value.finished = true;
                flag3 = flag;
                if (value.callback) {
                  let callbackResult = value.callback(true);
                  flag3 = flag;
                }
              }
              let tmp4 = callback;
              let tmp5 = table;
              let ColorProperties = callback(table[1]).ColorProperties;
              let tmp6 = closure_3;
              if (ColorProperties.includes(iter.path[0])) {
                let tmp4Result = tmp4(tmp5[1]);
                let current = tmp4Result.processColor(value.current);
              } else {
                current = value.current;
              }
              let tmp6Result = tmp6(styleAnimations.current, iter.path, current);
              tmp2 = flag3;
            }
          }
          flag = tmp2;
          flag2 = tmp2;
        }
        return !flag2;
      },
      onStart(current, arg1, arg2, styleAnimations) {
        let obj = { value: closure_0, path: [] };
        const items = [obj];
        if (items.length > 0) {
          do {
            let iter = items.pop();
            let _Array = Array;
            let value = iter.value;
            if (Array.isArray(iter.value)) {
              let num = 0;
              if (0 < value.length) {
                do {
                  obj = { value: null, path: null };
                  obj[0] = iter.value[num];
                  let path2 = iter.path;
                  obj[1] = path2.concat(num);
                  let arr = items.push(obj);
                  num = num + 1;
                  length = iter.value.length;
                } while (num < length);
              }
            } else {
              if (typeof value === "object") {
                if (undefined === iter.value.onStart) {
                  let _Object = Object;
                  let keys = Object.keys(iter.value);
                  let tmp19 = keys;
                  let tmp20 = keys;
                  for (const item10061 of keys) {
                    obj = { value: null, path: null };
                    obj[0] = iter.value[item10061];
                    let path = iter.path;
                    obj[1] = path.concat(item10061);
                    arr = items.push(obj);
                    continue;
                  }
                }
              }
              let tmp = outer1_2;
              styleAnimations = undefined;
              if (styleAnimations != null) {
                styleAnimations = styleAnimations.styleAnimations;
              }
              let tmpResult = tmp(styleAnimations, iter.path);
              current = tmp(arg1, iter.path);
              let tmp4 = tmpResult;
              if (tmpResult) {
                tmp4 = !current;
              }
              if (tmp4) {
                current = tmpResult.current;
              }
              let tmp5 = outer1_3;
              let tmp6 = outer1_3(current.current, iter.path, current);
              if (typeof iter.value === "object") {
                if (iter.value.onStart) {
                  value = iter.value;
                  let tmp12 = value;
                  let tmp13 = value;
                  let tmp14 = current;
                  let tmp15 = arg2;
                  let tmp16 = tmpResult;
                  let onStartResult = value.onStart(value, tmp7, arg2, tmpResult);
                }
              }
              let tmp8 = outer1_0;
              let tmp9 = outer1_1;
              let obj2 = outer1_0(outer1_1[2]);
              let withTimingResult = obj2.withTiming(iter.value, { duration: 0 });
              let tmp5Result = tmp5(current.styleAnimations, iter.path, withTimingResult);
              value = withTimingResult;
            }
          } while (items.length > 0);
        }
      },
      current: {},
      styleAnimations: closure_0,
      callback(arg0) {
        if (!arg0) {
          const items = [closure_0];
          if (items.length > 0) {
            do {
              let arr = items.pop();
              let _Array = Array;
              if (Array.isArray(arr)) {
                let tmp8 = arr;
                let tmp9 = arr;
                for (const item10031 of arr) {
                  arr = items.push(item10031);
                  continue;
                }
              } else {
                if (typeof arr === "object") {
                  if (undefined === arr.onStart) {
                    let _Object = Object;
                    let values = Object.values(arr);
                    let tmp5 = values;
                    let tmp6 = values;
                    for (const item10023 of values) {
                      let arr1 = items.push(item10023);
                      continue;
                    }
                  }
                }
                let finished = arr.finished;
                let callback = !finished;
                if (!finished) {
                  callback = arr.callback;
                }
                if (callback) {
                  let callbackResult = arr.callback(false);
                }
              }
            } while (items.length > 0);
          }
        }
      }
    };
  };
  obj = { ColorProperties: _call.ColorProperties, setPath, processColor: _call.processColor, styleAnimations: animations, resolvePath, __DEV__: false, logger: _addLogBoxLog.logger, isValidLayoutAnimationProp: _isValidLayoutAnimationProp.isValidLayoutAnimationProp, withTiming: _t.withTiming };
  fn.__closure = obj;
  fn.__workletHash = 1293354823532;
  fn.__initData = closure_4;
  return obj.defineAnimation({}, fn);
}
withStyleAnimation.__closure = { defineAnimation: require("isValidLayoutAnimationProp").defineAnimation, ColorProperties: require("call").ColorProperties, setPath, processColor: require("call").processColor, resolvePath, __DEV__: false, logger: require("addLogBoxLog").logger, isValidLayoutAnimationProp: require("isValidLayoutAnimationProp").isValidLayoutAnimationProp, withTiming: require("t").withTiming };
withStyleAnimation.__workletHash = 3046356752495;
withStyleAnimation.__initData = { code: "function withStyleAnimation_Pnpm_styleAnimationTs3(styleAnimations){const{defineAnimation,ColorProperties,setPath,processColor,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming}=this.__closure;return defineAnimation({},function(){'worklet';const onFrame=function(animation,now){let stillGoing=false;const entriesToCheck=[{value:animation.styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onFrame===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const currentStyleAnimation=currentEntry.value;if(currentStyleAnimation.finished){continue;}const finished=currentStyleAnimation.onFrame(currentStyleAnimation,now);if(finished){currentStyleAnimation.finished=true;if(currentStyleAnimation.callback){currentStyleAnimation.callback(true);}}else{stillGoing=true;}const isAnimatingColorProp=ColorProperties.includes(currentEntry.path[0]);setPath(animation.current,currentEntry.path,isAnimatingColorProp?processColor(currentStyleAnimation.current):currentStyleAnimation.current);}}return!stillGoing;};const onStart=function(animation,value,now,previousAnimation){const entriesToCheck=[{value:styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onStart===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const prevAnimation=resolvePath(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.styleAnimations,currentEntry.path);let prevVal=resolvePath(value,currentEntry.path);if(prevAnimation&&!prevVal){prevVal=prevAnimation.current;}if(__DEV__){if(prevVal===undefined){logger.warn(\"Initial values for animation are missing for property \"+currentEntry.path.join('.'));}const propName=currentEntry.path[0];if(typeof propName==='string'&&!isValidLayoutAnimationProp(propName.trim())){logger.warn(\"'\"+propName+\"' property is not officially supported for layout animations. It may not work as expected.\");}}setPath(animation.current,currentEntry.path,prevVal);let currentAnimation;if(typeof currentEntry.value!=='object'||!currentEntry.value.onStart){currentAnimation=withTiming(currentEntry.value,{duration:0});setPath(animation.styleAnimations,currentEntry.path,currentAnimation);}else{currentAnimation=currentEntry.value;}currentAnimation.onStart(currentAnimation,prevVal,now,prevAnimation);}}};const callback=function(finished){if(!finished){const animationsToCheck=[styleAnimations];while(animationsToCheck.length>0){const currentAnimation=animationsToCheck.pop();if(Array.isArray(currentAnimation)){for(const element of currentAnimation){animationsToCheck.push(element);}}else if(typeof currentAnimation==='object'&&currentAnimation.onStart===undefined){for(const value of Object.values(currentAnimation)){animationsToCheck.push(value);}}else{const currentStyleAnimation=currentAnimation;if(!currentStyleAnimation.finished&&currentStyleAnimation.callback){currentStyleAnimation.callback(false);}}}}};return{isHigherOrder:true,onFrame:onFrame,onStart:onStart,current:{},styleAnimations:styleAnimations,callback:callback};});}" };
arg5.withStyleAnimation = withStyleAnimation;