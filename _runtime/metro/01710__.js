// _runtime/metro/01710__.js
import _mod1641 from "01641__.js";
import _mod1677 from "01677__.js";

require = fn;
let dependencyMap = arg6;
const __initData = {
  code: "function pnpm_clampTs2(){const{_animationToClamp,config,recognizePrefixSuffix,logger,getReduceMotionForAnimation}=this.__closure;const animationToClamp=typeof _animationToClamp==='function'?_animationToClamp():_animationToClamp;const strippedMin=config.min===undefined?undefined:recognizePrefixSuffix(config.min).strippedValue;const strippedMax=config.max===undefined?undefined:recognizePrefixSuffix(config.max).strippedValue;function clampOnFrame(animation,now){const finished=animationToClamp.onFrame(animationToClamp,now);if(animationToClamp.current===undefined){logger.warn(\"Error inside 'withClamp' animation, the inner animation has invalid current value\");return true;}else{const{prefix:prefix,strippedValue:strippedValue,suffix:suffix}=recognizePrefixSuffix(animationToClamp.current);let newValue;if(strippedMax!==undefined&&strippedMax<strippedValue){newValue=strippedMax;}else if(strippedMin!==undefined&&strippedMin>strippedValue){newValue=strippedMin;}else{newValue=strippedValue;}animation.current=typeof animationToClamp.current==='number'?newValue:\"\"+(prefix===undefined?'':prefix)+newValue+(suffix===undefined?'':suffix);}return finished;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.previousAnimation=animationToClamp;const animationBeforeClamped=previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.previousAnimation;if(config.max!==undefined&&config.min!==undefined&&config.max<config.min){logger.warn('Wrong config was provided to withClamp. Min value is bigger than max');}animationToClamp.onStart(animationToClamp,(animationBeforeClamped===null||animationBeforeClamped===void 0?void 0:animationBeforeClamped.current)||value,now,animationBeforeClamped);}const callback=function(finished){if(animationToClamp.callback){animationToClamp.callback(finished);}};return{isHigherOrder:true,onFrame:clampOnFrame,onStart:onStart,current:animationToClamp.current,callback:callback,previousAnimation:null,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};}",
};
fn = function n(config, _animationToClamp) {
  _require = config;
  dependencyMap = _animationToClamp;
  const fn = function u() {
    let tmpResult = strippedValue;
    if (typeof strippedValue === "function") {
      tmpResult = tmp();
    }
    config = tmpResult;
    let range = config;
    strippedValue = undefined;
    if (undefined !== config.min) {
      strippedValue = config(1677).recognizePrefixSuffix(range.min).strippedValue;
      const obj = config(1677);
    }
    let strippedValue1;
    if (undefined !== range.max) {
      strippedValue1 = config(1677).recognizePrefixSuffix(range.max).strippedValue;
      const obj2 = config(1677);
    }
    const obj3 = {
      isHigherOrder: true,
      onFrame: function clampOnFrame(arg0, arg1) {
        if (undefined === previousAnimation.current) {
          const logger = _mod1641.logger;
          logger.warn("Error inside 'withClamp' animation, the inner animation has invalid current value");
          return true;
        } else {
          const result = _mod1677.recognizePrefixSuffix(previousAnimation.current);
          ({ prefix, strippedValue, suffix } = result);
          let tmp5 = strippedValue1;
          if (undefined === strippedValue1) {
            let tmp4 = strippedValue;
            if (undefined !== strippedValue) {
              tmp4 = strippedValue;
              if (strippedValue > strippedValue) {
                tmp4 = strippedValue;
              }
            }
            tmp5 = tmp4;
          }
          let combined = tmp5;
          if (typeof previousAnimation.current !== "number") {
            let str = "";
            if (undefined !== prefix) {
              str = prefix;
            }
            let str2 = "";
            if (undefined !== suffix) {
              str2 = suffix;
            }
            const _HermesInternal = HermesInternal;
            combined = "" + str + tmp5 + str2;
          }
          arg0.current = combined;
          return tmp2;
        }
      },
      onStart(arg0, current, arg2, previousAnimation) {
        arg0.current = current;
        arg0.previousAnimation = previousAnimation;
        previousAnimation = undefined;
        if (previousAnimation != null) {
          previousAnimation = previousAnimation.previousAnimation;
        }
        const range = previousAnimation;
        if (tmp2) {
          const logger = _mod1641.logger;
          logger.warn("Wrong config was provided to withClamp. Min value is bigger than max");
        }
        current = undefined;
        if (previousAnimation != null) {
          current = previousAnimation.current;
        }
        previousAnimation.onStart(previousAnimation, current, arg2, previousAnimation);
        tmp2 = undefined !== previousAnimation.max && undefined !== range.min && range.max < range.min;
      },
      current: tmpResult.current,
      callback(arg0) {
        if (previousAnimation.callback) {
          previousAnimation.callback(arg0);
        }
      },
      previousAnimation: null,
      reduceMotion: config(1677).getReduceMotionForAnimation(range.reduceMotion),
    };
    return obj3;
  };
  let obj = require("01677__.js");
  fn.__closure = {
    _animationToClamp,
    config,
    recognizePrefixSuffix: require("01677__.js").recognizePrefixSuffix,
    logger: require("01641__.js").logger,
    getReduceMotionForAnimation: require("01677__.js").getReduceMotionForAnimation,
  };
  fn.__workletHash = 9293031098818;
  fn.__initData = __initData;
  return obj.defineAnimation(_animationToClamp, fn);
};
fn.__closure = {
  defineAnimation: fn(1677).defineAnimation,
  recognizePrefixSuffix: fn(1677).recognizePrefixSuffix,
  logger: fn(1641).logger,
  getReduceMotionForAnimation: fn(1677).getReduceMotionForAnimation,
};
fn.__workletHash = 2452826107198;
fn.__initData = {
  code: "function pnpm_clampTs1(config,_animationToClamp){const{defineAnimation,recognizePrefixSuffix,logger,getReduceMotionForAnimation}=this.__closure;return defineAnimation(_animationToClamp,function(){'worklet';const animationToClamp=typeof _animationToClamp==='function'?_animationToClamp():_animationToClamp;const strippedMin=config.min===undefined?undefined:recognizePrefixSuffix(config.min).strippedValue;const strippedMax=config.max===undefined?undefined:recognizePrefixSuffix(config.max).strippedValue;function clampOnFrame(animation,now){const finished=animationToClamp.onFrame(animationToClamp,now);if(animationToClamp.current===undefined){logger.warn(\"Error inside 'withClamp' animation, the inner animation has invalid current value\");return true;}else{const{prefix:prefix,strippedValue:strippedValue,suffix:suffix}=recognizePrefixSuffix(animationToClamp.current);let newValue;if(strippedMax!==undefined&&strippedMax<strippedValue){newValue=strippedMax;}else if(strippedMin!==undefined&&strippedMin>strippedValue){newValue=strippedMin;}else{newValue=strippedValue;}animation.current=typeof animationToClamp.current==='number'?newValue:\"\"+(prefix===undefined?'':prefix)+newValue+(suffix===undefined?'':suffix);}return finished;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.previousAnimation=animationToClamp;const animationBeforeClamped=previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.previousAnimation;if(config.max!==undefined&&config.min!==undefined&&config.max<config.min){logger.warn('Wrong config was provided to withClamp. Min value is bigger than max');}animationToClamp.onStart(animationToClamp,(animationBeforeClamped===null||animationBeforeClamped===void 0?void 0:animationBeforeClamped.current)||value,now,animationBeforeClamped);}const callback=function(finished){if(animationToClamp.callback){animationToClamp.callback(finished);}};return{isHigherOrder:true,onFrame:clampOnFrame,onStart:onStart,current:animationToClamp.current,callback:callback,previousAnimation:null,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};});}",
};

export const withClamp = fn;
