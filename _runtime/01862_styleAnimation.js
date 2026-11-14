// _runtime/01862_styleAnimation.js
import _mod1668 from "metro/01668__.js";
import Colors from "01683_Colors.js";
import utilNative from "01844_utilNative.js";
import timing from "01863_timing.js";

let items = [
  {
    code: "(function resolvePath_Pnpm_styleAnimationTs1(obj,path){const keys=Array.isArray(path)?path:[path];return keys.reduce(function(acc,current){if(Array.isArray(acc)&&typeof current==='number'){return acc[current];}else if(acc!==null&&typeof acc==='object'&&current in acc){return acc[current];}return undefined;},obj);})",
  },
];
[tmp2] = items;
function resolvePath(arg0, arg1) {
  let arr = arg1;
  if (!Array.isArray(arg1)) {
    items = [arg1];
    arr = items;
  }
  return arr.reduce((acc, item) => {
    if (!Array.isArray(acc)) {
      let tmp2;
      return tmp2;
    }
    tmp2 = acc[item];
  }, arg0);
}
resolvePath.__workletHash = 2597273838254;
resolvePath.__initData = tmp2;
let items1 = [
  {
    code: "(function setPath_Pnpm_styleAnimationTs2(obj,path,value){const keys=Array.isArray(path)?path:[path];let currObj=obj;for(let i=0;i<keys.length-1;i++){currObj=currObj;if(!(keys[i]in currObj)){if(typeof keys[i+1]==='number'){currObj[keys[i]]=[];}else{currObj[keys[i]]={};}}currObj=currObj[keys[i]];}currObj[keys[keys.length-1]]=value;})",
  },
];
[tmp3] = items1;
function setPath(arg0, arg1, arg2) {
  let arr = arg1;
  if (!Array.isArray(arg1)) {
    items = [arg1];
    arr = items;
  }
  let tmp = arg0;
  let tmp2 = arg0;
  let num = 0;
  if (0 < arr.length - 1) {
    do {
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
setPath.__workletHash = 10689147226077;
setPath.__initData = tmp3;
const items2 = [
  {
    code: "(function withStyleAnimation_Pnpm_styleAnimationTs4(styleAnimations,callback){let[defineAnimation,_worklet_3559038576417_init_data,ColorProperties,setPath,processColor,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming]=this.__closure;return defineAnimation({},function withStyleAnimation_Pnpm_styleAnimationTs4([_worklet_3559038576417_init_data,ColorProperties,setPath,processColor,styleAnimations,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming,callback]){const pnpm_styleAnimationTs3=function(){const onFrame=function(animation,now){let stillGoing=false;const entriesToCheck=[{value:animation.styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onFrame===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const currentStyleAnimation=currentEntry.value;if(currentStyleAnimation.finished){continue;}const finished=currentStyleAnimation.onFrame(currentStyleAnimation,now);if(finished){currentStyleAnimation.finished=true;if(currentStyleAnimation.callback){currentStyleAnimation.callback(true);}}else{stillGoing=true;}const isAnimatingColorProp=ColorProperties.includes(currentEntry.path[0])||currentEntry.path[0]==='boxShadow'&&currentEntry.path.length>2&&currentEntry.path[2]==='color';setPath(animation.current,currentEntry.path,isAnimatingColorProp?processColor(currentStyleAnimation.current):currentStyleAnimation.current);}}return!stillGoing;};const onStart=function(animation,value,now,previousAnimation){const entriesToCheck=[{value:styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onStart===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const prevAnimation=resolvePath(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.styleAnimations,currentEntry.path);let prevVal=resolvePath(value,currentEntry.path);if(prevAnimation&&prevVal===undefined){prevVal=prevAnimation.current;}if(__DEV__){if(prevVal===undefined){logger.warn(\"Initial values for animation are missing for property \"+currentEntry.path.join('.'));}const propName=currentEntry.path[0];if(typeof propName==='string'&&!isValidLayoutAnimationProp(propName.trim())){logger.warn(\"'\"+propName+\"' property is not officially supported for layout animations. It may not work as expected.\");}}setPath(animation.current,currentEntry.path,prevVal);let currentAnimation;if(typeof currentEntry.value!=='object'||!currentEntry.value.onStart){currentAnimation=withTiming(currentEntry.value,{duration:0});setPath(animation.styleAnimations,currentEntry.path,currentAnimation);}else{currentAnimation=currentEntry.value;}currentAnimation.onStart(currentAnimation,prevVal,now,prevAnimation);}}};const styleAnimationCallback=function(finished){if(!finished){const animationsToCheck=[styleAnimations];while(animationsToCheck.length>0){const currentAnimation=animationsToCheck.pop();if(Array.isArray(currentAnimation)){for(const element of currentAnimation){animationsToCheck.push(element);}}else if(typeof currentAnimation==='object'&&currentAnimation.onStart===undefined){for(const value of Object.values(currentAnimation)){animationsToCheck.push(value);}}else{const currentStyleAnimation=currentAnimation;if(!currentStyleAnimation.finished&&currentStyleAnimation.callback){currentStyleAnimation.callback(false);}}}}callback===null||callback===void 0||callback(finished);};return{isHigherOrder:true,onFrame:onFrame,onStart:onStart,current:{},styleAnimations:styleAnimations,callback:styleAnimationCallback};};pnpm_styleAnimationTs3.__closure=[ColorProperties,setPath,processColor,styleAnimations,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming,callback];pnpm_styleAnimationTs3.__workletHash=3559038576417;pnpm_styleAnimationTs3.__initData=_worklet_3559038576417_init_data;return pnpm_styleAnimationTs3;}([_worklet_3559038576417_init_data,ColorProperties,setPath,processColor,styleAnimations,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming,callback]));})",
  },
  utilNative.defineAnimation,
  {
    code: "(function pnpm_styleAnimationTs3(){let[ColorProperties,setPath,processColor,styleAnimations,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming,callback]=this.__closure;const onFrame=function(animation,now){let stillGoing=false;const entriesToCheck=[{value:animation.styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onFrame===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const currentStyleAnimation=currentEntry.value;if(currentStyleAnimation.finished){continue;}const finished=currentStyleAnimation.onFrame(currentStyleAnimation,now);if(finished){currentStyleAnimation.finished=true;if(currentStyleAnimation.callback){currentStyleAnimation.callback(true);}}else{stillGoing=true;}const isAnimatingColorProp=ColorProperties.includes(currentEntry.path[0])||currentEntry.path[0]==='boxShadow'&&currentEntry.path.length>2&&currentEntry.path[2]==='color';setPath(animation.current,currentEntry.path,isAnimatingColorProp?processColor(currentStyleAnimation.current):currentStyleAnimation.current);}}return!stillGoing;};const onStart=function(animation,value,now,previousAnimation){const entriesToCheck=[{value:styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onStart===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const prevAnimation=resolvePath(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.styleAnimations,currentEntry.path);let prevVal=resolvePath(value,currentEntry.path);if(prevAnimation&&prevVal===undefined){prevVal=prevAnimation.current;}if(__DEV__){if(prevVal===undefined){logger.warn(\"Initial values for animation are missing for property \"+currentEntry.path.join('.'));}const propName=currentEntry.path[0];if(typeof propName==='string'&&!isValidLayoutAnimationProp(propName.trim())){logger.warn(\"'\"+propName+\"' property is not officially supported for layout animations. It may not work as expected.\");}}setPath(animation.current,currentEntry.path,prevVal);let currentAnimation;if(typeof currentEntry.value!=='object'||!currentEntry.value.onStart){currentAnimation=withTiming(currentEntry.value,{duration:0});setPath(animation.styleAnimations,currentEntry.path,currentAnimation);}else{currentAnimation=currentEntry.value;}currentAnimation.onStart(currentAnimation,prevVal,now,prevAnimation);}}};const styleAnimationCallback=function(finished){var _callback;if(!finished){const animationsToCheck=[styleAnimations];while(animationsToCheck.length>0){const currentAnimation=animationsToCheck.pop();if(Array.isArray(currentAnimation)){for(const element of currentAnimation){animationsToCheck.push(element);}}else if(typeof currentAnimation==='object'&&currentAnimation.onStart===undefined){for(const value of Object.values(currentAnimation)){animationsToCheck.push(value);}}else{const currentStyleAnimation=currentAnimation;if(!currentStyleAnimation.finished&&currentStyleAnimation.callback){currentStyleAnimation.callback(false);}}}}(_callback=callback)===null||_callback===void 0||_callback(finished);};return{isHigherOrder:true,onFrame:onFrame,onStart:onStart,current:{},styleAnimations:styleAnimations,callback:styleAnimationCallback};})",
  },
  Colors.ColorProperties,
  setPath,
  _mod1668.processColor,
  resolvePath,
  false,
  _mod1668.logger,
  utilNative.isValidLayoutAnimationProp,
  timing.withTiming,
];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;
let c9;
[tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
function withStyleAnimation(arg0, arg1) {
  items = [c1, c2, c3, c4, arg0, c5, c6, c7, c8, c9, arg1];
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  function pnpm_styleAnimationTs3() {
    return {
      isHigherOrder: true,
      onFrame(styleAnimations, arg1) {
        items = [{ value: styleAnimations.styleAnimations, path: [] }];
        let flag = false;
        let flag2 = false;
        while (items.length > 0) {
          let iter = items.pop();
          let _Array = Array;
          let value2 = iter.value;
          if (Array.isArray(iter.value)) {
            let num = 0;
            let tmp2 = flag;
            if (0 < value2.length) {
              do {
                let obj2 = { value: iter.value[num], path: null };
                let path2 = iter.path;
                obj2.path = path2.concat(num);
                let arr = items.push(obj2);
                num = num + 1;
                tmp2 = flag;
                length = iter.value.length;
              } while (num < length);
            }
          } else {
            if (typeof value2 === "object") {
              if (undefined === iter.value.onFrame) {
                let _Object = Object;
                let keys = Object.keys(iter.value);
                tmp2 = flag;
                for (const item10061 of keys) {
                  let obj3 = { value: iter.value[item10061], path: null };
                  let path = iter.path;
                  obj3.path = path.concat(item10061);
                  let arr2 = items.push(obj3);
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
              let hasItem = closure_1_0.includes(iter.path[0]);
              if (!hasItem) {
                let tmp6 = "boxShadow" === iter.path[0] && iter.path.length > 2 && "color" === iter.path[2];
                hasItem = tmp6;
              }
              if (hasItem) {
                let current = closure_1_2(value.current);
              } else {
                current = value.current;
              }
              let tmp7Result = closure_1_1(styleAnimations.current, iter.path, current);
              tmp2 = flag3;
            }
          }
          flag = tmp2;
          flag2 = tmp2;
        }
        return !flag2;
      },
      onStart(current, arg1, arg2, styleAnimations) {
        items = [{ value, path: [] }];
        if (items.length > 0) {
          do {
            let iter = items.pop();
            let _Array = Array;
            let value2 = iter.value;
            if (Array.isArray(iter.value)) {
              let num = 0;
              if (0 < value2.length) {
                do {
                  let obj2 = { value: iter.value[num], path: null };
                  let path3 = iter.path;
                  obj2.path = path3.concat(num);
                  let arr = items.push(obj2);
                  num = num + 1;
                  length = iter.value.length;
                } while (num < length);
              }
            } else {
              if (typeof value2 === "object") {
                if (undefined === iter.value.onStart) {
                  let _Object = Object;
                  let keys = Object.keys(iter.value);
                  for (const item10080 of keys) {
                    let obj3 = { value: iter.value[item10080], path: null };
                    let path2 = iter.path;
                    obj3.path = path2.concat(item10080);
                    let arr2 = items.push(obj3);
                    continue;
                  }
                }
              }
              styleAnimations = undefined;
              if (styleAnimations != null) {
                styleAnimations = styleAnimations.styleAnimations;
              }
              let tmpResult = closure_1_4(styleAnimations, iter.path);
              let tmpResult2 = closure_1_4(arg1, iter.path);
              let tmp5 = tmpResult;
              if (tmpResult) {
                tmp5 = undefined === tmpResult2;
              }
              current = tmpResult2;
              if (tmp5) {
                current = tmpResult.current;
              }
              if (closure_1_5) {
                if (undefined === current) {
                  let path = iter.path;
                  let _HermesInternal = HermesInternal;
                  let warnResult = logger.warn(
                    "Initial values for animation are missing for property " + path.join("."),
                  );
                }
                let str = iter.path[0];
                let tmp9 = typeof str !== "string";
                if (typeof str === "string") {
                  tmp9 = closure_1_7(str.trim());
                }
                if (!tmp9) {
                  let _HermesInternal2 = HermesInternal;
                  let warnResult1 = logger.warn(
                    "'" +
                      str +
                      "' property is not officially supported for layout animations. It may not work as expected.",
                  );
                }
              }
              let tmp13 = closure_1_1(current.current, iter.path, current);
              if (typeof iter.value === "object") {
                if (iter.value.onStart) {
                  value = iter.value;
                  let onStartResult = value.onStart(value, current, arg2, tmpResult);
                }
              }
              let tmp15 = closure_1_8(iter.value, { duration: 0 });
              let tmp12Result = closure_1_1(current.styleAnimations, iter.path, tmp15);
              value = tmp15;
            }
          } while (items.length > 0);
        }
        const obj = { value, path: [] };
      },
      current: {},
      styleAnimations,
      callback(arg0) {
        if (!arg0) {
          items = [styleAnimations];
          if (items.length > 0) {
            do {
              let arr = items.pop();
              let _Array = Array;
              if (Array.isArray(arr)) {
                for (const item10031 of arr) {
                  let arr4 = items.push(item10031);
                  continue;
                }
              } else {
                if (typeof arr === "object") {
                  if (undefined === arr.onStart) {
                    let _Object = Object;
                    let values = Object.values(arr);
                    for (const item10023 of values) {
                      let arr5 = items.push(item10023);
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
        if (closure_1_9 != null) {
          tmp11(arg0);
        }
      },
    };
  }
  const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
  pnpm_styleAnimationTs3.__closure = items1;
  pnpm_styleAnimationTs3.__workletHash = 3559038576417;
  pnpm_styleAnimationTs3.__initData = tmp;
  return _undefined({}, pnpm_styleAnimationTs3);
}
const items3 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
withStyleAnimation.__closure = items3;
withStyleAnimation.__workletHash = 14805506577709;
withStyleAnimation.__initData = tmp4;

export { withStyleAnimation };
