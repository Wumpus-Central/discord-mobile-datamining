// _runtime/01675_resolvePath.js
const require = fn;
const dependencyMap = arg6;
function resolvePath(arg0, arg1) {
  let arr = arg1;
  if (!Array.isArray(arg1)) {
    const items = [arg1];
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
resolvePath.__closure = {};
resolvePath.__workletHash = 6511886988303;
resolvePath.__initData = {
  code: "function resolvePath_Pnpm_styleAnimationTs1(obj,path){const keys=Array.isArray(path)?path:[path];return keys.reduce(function(acc,current){if(Array.isArray(acc)&&typeof current==='number'){return acc[current];}else if(acc!==null&&typeof acc==='object'&&current in acc){return acc[current];}return undefined;},obj);}",
};
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
setPath.__initData = {
  code: "function setPath_Pnpm_styleAnimationTs2(obj,path,value){const keys=Array.isArray(path)?path:[path];let currObj=obj;for(let i=0;i<keys.length-1;i++){currObj=currObj;if(!(keys[i]in currObj)){if(typeof keys[i+1]==='number'){currObj[keys[i]]=[];}else{currObj[keys[i]]={};}}currObj=currObj[keys[i]];}currObj[keys[keys.length-1]]=value;}",
};
const __initData = {
  code: "function pnpm_styleAnimationTs4(){const{ColorProperties,setPath,processColor,styleAnimations,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming}=this.__closure;const onFrame=function(animation,now){let stillGoing=false;const entriesToCheck=[{value:animation.styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onFrame===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const currentStyleAnimation=currentEntry.value;if(currentStyleAnimation.finished){continue;}const finished=currentStyleAnimation.onFrame(currentStyleAnimation,now);if(finished){currentStyleAnimation.finished=true;if(currentStyleAnimation.callback){currentStyleAnimation.callback(true);}}else{stillGoing=true;}const isAnimatingColorProp=ColorProperties.includes(currentEntry.path[0]);setPath(animation.current,currentEntry.path,isAnimatingColorProp?processColor(currentStyleAnimation.current):currentStyleAnimation.current);}}return!stillGoing;};const onStart=function(animation,value,now,previousAnimation){const entriesToCheck=[{value:styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onStart===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const prevAnimation=resolvePath(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.styleAnimations,currentEntry.path);let prevVal=resolvePath(value,currentEntry.path);if(prevAnimation&&!prevVal){prevVal=prevAnimation.current;}if(__DEV__){if(prevVal===undefined){logger.warn(\"Initial values for animation are missing for property \"+currentEntry.path.join('.'));}const propName=currentEntry.path[0];if(typeof propName==='string'&&!isValidLayoutAnimationProp(propName.trim())){logger.warn(\"'\"+propName+\"' property is not officially supported for layout animations. It may not work as expected.\");}}setPath(animation.current,currentEntry.path,prevVal);let currentAnimation;if(typeof currentEntry.value!=='object'||!currentEntry.value.onStart){currentAnimation=withTiming(currentEntry.value,{duration:0});setPath(animation.styleAnimations,currentEntry.path,currentAnimation);}else{currentAnimation=currentEntry.value;}currentAnimation.onStart(currentAnimation,prevVal,now,prevAnimation);}}};const callback=function(finished){if(!finished){const animationsToCheck=[styleAnimations];while(animationsToCheck.length>0){const currentAnimation=animationsToCheck.pop();if(Array.isArray(currentAnimation)){for(const element of currentAnimation){animationsToCheck.push(element);}}else if(typeof currentAnimation==='object'&&currentAnimation.onStart===undefined){for(const value of Object.values(currentAnimation)){animationsToCheck.push(value);}}else{const currentStyleAnimation=currentAnimation;if(!currentStyleAnimation.finished&&currentStyleAnimation.callback){currentStyleAnimation.callback(false);}}}}};return{isHigherOrder:true,onFrame:onFrame,onStart:onStart,current:{},styleAnimations:styleAnimations,callback:callback};}",
};
function withStyleAnimation(animations) {
  _require = animations;
  require("metro/01676__.js");
  const fn = function i() {
    return {
      isHigherOrder: true,
      onFrame(styleAnimations, arg1) {
        let obj = { value: styleAnimations.styleAnimations, path: [] };
        const items = [obj];
        let flag = false;
        let flag2 = false;
        while (items.length > 0) {
          let iter = items.pop();
          let _Array = Array;
          value = iter.value;
          if (Array.isArray(iter.value)) {
            let num = 0;
            let tmp2 = flag;
            if (0 < value.length) {
              do {
                obj = { value: iter.value[num], path: null };
                let path2 = iter.path;
                obj.path = path2.concat(num);
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
                tmp2 = flag;
                for (const item10057 of keys) {
                  obj = { value: iter.value[item10057], path: null };
                  let path = iter.path;
                  obj.path = path.concat(item10057);
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
              let tmp4 = value;
              let tmp5 = closure_1_1;
              let ColorProperties = value(closure_1_1[1]).ColorProperties;
              let tmp6 = closure_1_3;
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
        let obj = { value, path: [] };
        const items = [obj];
        if (items.length > 0) {
          do {
            let iter = items.pop();
            let _Array = Array;
            value = iter.value;
            if (Array.isArray(iter.value)) {
              let num = 0;
              if (0 < value.length) {
                do {
                  obj = { value: iter.value[num], path: null };
                  let path2 = iter.path;
                  obj.path = path2.concat(num);
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
                  for (const item10061 of keys) {
                    obj = { value: iter.value[item10061], path: null };
                    let path = iter.path;
                    obj.path = path.concat(item10061);
                    arr = items.push(obj);
                    continue;
                  }
                }
              }
              let tmp = resolvePath;
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
              let tmp5 = setPath;
              let tmp6 = setPath(current.current, iter.path, current);
              if (typeof iter.value === "object") {
                if (iter.value.onStart) {
                  value = iter.value;
                  let onStartResult = value.onStart(value, tmp7, arg2, tmpResult);
                }
              }
              let obj2 = value(dependencyMap[2]);
              let withTimingResult = obj2.withTiming(iter.value, { duration: 0 });
              let tmp5Result = tmp5(current.styleAnimations, iter.path, withTimingResult);
              value = withTimingResult;
            }
          } while (items.length > 0);
        }
      },
      current: {},
      styleAnimations,
      callback(arg0) {
        if (!arg0) {
          const items = [styleAnimations];
          if (items.length > 0) {
            do {
              let arr = items.pop();
              let _Array = Array;
              if (Array.isArray(arr)) {
                for (const item10031 of arr) {
                  arr = items.push(item10031);
                  continue;
                }
              } else {
                if (typeof arr === "object") {
                  if (undefined === arr.onStart) {
                    let _Object = Object;
                    let values = Object.values(arr);
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
      },
    };
  };
  let obj = {
    ColorProperties: require("metro/01679__.js").ColorProperties,
    setPath,
    processColor: require("metro/01679__.js").processColor,
    styleAnimations: animations,
    resolvePath,
    __DEV__: false,
    logger: require("metro/01640__.js").logger,
    isValidLayoutAnimationProp: require("metro/01676__.js").isValidLayoutAnimationProp,
    withTiming: require("metro/01687__.js").withTiming,
  };
  fn.__closure = obj;
  fn.__workletHash = 1293354823532;
  fn.__initData = __initData;
  return obj.defineAnimation({}, fn);
}
withStyleAnimation.__closure = {
  defineAnimation: fn(1676).defineAnimation,
  ColorProperties: fn(1679).ColorProperties,
  setPath,
  processColor: fn(1679).processColor,
  resolvePath,
  __DEV__: false,
  logger: fn(1640).logger,
  isValidLayoutAnimationProp: fn(1676).isValidLayoutAnimationProp,
  withTiming: fn(1687).withTiming,
};
withStyleAnimation.__workletHash = 3046356752495;
withStyleAnimation.__initData = {
  code: "function withStyleAnimation_Pnpm_styleAnimationTs3(styleAnimations){const{defineAnimation,ColorProperties,setPath,processColor,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming}=this.__closure;return defineAnimation({},function(){'worklet';const onFrame=function(animation,now){let stillGoing=false;const entriesToCheck=[{value:animation.styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onFrame===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const currentStyleAnimation=currentEntry.value;if(currentStyleAnimation.finished){continue;}const finished=currentStyleAnimation.onFrame(currentStyleAnimation,now);if(finished){currentStyleAnimation.finished=true;if(currentStyleAnimation.callback){currentStyleAnimation.callback(true);}}else{stillGoing=true;}const isAnimatingColorProp=ColorProperties.includes(currentEntry.path[0]);setPath(animation.current,currentEntry.path,isAnimatingColorProp?processColor(currentStyleAnimation.current):currentStyleAnimation.current);}}return!stillGoing;};const onStart=function(animation,value,now,previousAnimation){const entriesToCheck=[{value:styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onStart===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const prevAnimation=resolvePath(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.styleAnimations,currentEntry.path);let prevVal=resolvePath(value,currentEntry.path);if(prevAnimation&&!prevVal){prevVal=prevAnimation.current;}if(__DEV__){if(prevVal===undefined){logger.warn(\"Initial values for animation are missing for property \"+currentEntry.path.join('.'));}const propName=currentEntry.path[0];if(typeof propName==='string'&&!isValidLayoutAnimationProp(propName.trim())){logger.warn(\"'\"+propName+\"' property is not officially supported for layout animations. It may not work as expected.\");}}setPath(animation.current,currentEntry.path,prevVal);let currentAnimation;if(typeof currentEntry.value!=='object'||!currentEntry.value.onStart){currentAnimation=withTiming(currentEntry.value,{duration:0});setPath(animation.styleAnimations,currentEntry.path,currentAnimation);}else{currentAnimation=currentEntry.value;}currentAnimation.onStart(currentAnimation,prevVal,now,prevAnimation);}}};const callback=function(finished){if(!finished){const animationsToCheck=[styleAnimations];while(animationsToCheck.length>0){const currentAnimation=animationsToCheck.pop();if(Array.isArray(currentAnimation)){for(const element of currentAnimation){animationsToCheck.push(element);}}else if(typeof currentAnimation==='object'&&currentAnimation.onStart===undefined){for(const value of Object.values(currentAnimation)){animationsToCheck.push(value);}}else{const currentStyleAnimation=currentAnimation;if(!currentStyleAnimation.finished&&currentStyleAnimation.callback){currentStyleAnimation.callback(false);}}}}};return{isHigherOrder:true,onFrame:onFrame,onStart:onStart,current:{},styleAnimations:styleAnimations,callback:callback};});}",
};

export { withStyleAnimation };
