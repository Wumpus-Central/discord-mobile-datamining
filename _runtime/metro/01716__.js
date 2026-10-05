// _runtime/metro/01716__.js
import react_native from "../01647_react-native.js";
import _mod1683 from "01683__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const __initData = {
  code: "function pnpm_clampTs2(){const{_animationToClamp,config,recognizePrefixSuffix,logger,getReduceMotionForAnimation}=this.__closure;const animationToClamp=typeof _animationToClamp==='function'?_animationToClamp():_animationToClamp;const strippedMin=config.min===undefined?undefined:recognizePrefixSuffix(config.min).strippedValue;const strippedMax=config.max===undefined?undefined:recognizePrefixSuffix(config.max).strippedValue;function clampOnFrame(animation,now){const finished=animationToClamp.onFrame(animationToClamp,now);if(animationToClamp.current===undefined){logger.warn(\"Error inside 'withClamp' animation, the inner animation has invalid current value\");return true;}else{const{prefix:prefix,strippedValue:strippedValue,suffix:suffix}=recognizePrefixSuffix(animationToClamp.current);let newValue;if(strippedMax!==undefined&&strippedMax<strippedValue){newValue=strippedMax;}else if(strippedMin!==undefined&&strippedMin>strippedValue){newValue=strippedMin;}else{newValue=strippedValue;}animation.current=typeof animationToClamp.current==='number'?newValue:\"\"+(prefix===undefined?'':prefix)+newValue+(suffix===undefined?'':suffix);}return finished;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.previousAnimation=animationToClamp;const animationBeforeClamped=previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.previousAnimation;if(config.max!==undefined&&config.min!==undefined&&config.max<config.min){logger.warn('Wrong config was provided to withClamp. Min value is bigger than max');}animationToClamp.onStart(animationToClamp,(animationBeforeClamped===null||animationBeforeClamped===void 0?void 0:animationBeforeClamped.current)||value,now,animationBeforeClamped);}const callback=function(finished){if(animationToClamp.callback){animationToClamp.callback(finished);}};return{isHigherOrder:true,onFrame:clampOnFrame,onStart:onStart,current:animationToClamp.current,callback:callback,previousAnimation:null,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};}",
};
let fn = function n(config, _animationToClamp) {
  _require = config;
  dependencyMap = _animationToClamp;
  let obj = require("01683__.js");
  const fn = function u() {
    let obj4;
    let strippedValue;
    let tmpResult = strippedValue;
    if (typeof strippedValue === "function") {
      tmpResult = tmp();
    }
    config = tmpResult;
    let range = config;
    strippedValue = undefined;
    if (undefined !== config.min) {
      let tmp4 = config;
      let obj = config(_animationToClamp[0]);
      strippedValue = obj.recognizePrefixSuffix(range.min).strippedValue;
    }
    let strippedValue1;
    if (undefined !== range.max) {
      const obj2 = config(_animationToClamp[0]);
      strippedValue1 = obj2.recognizePrefixSuffix(range.max).strippedValue;
    }
    const obj3 = {
      isHigherOrder: true,
      onFrame: function clampOnFrame(arg0, arg1) {
        let prefix;
        let suffix;
        if (undefined === previousAnimation.current) {
          const logger = react_native.logger;
          logger.warn("Error inside 'withClamp' animation, the inner animation has invalid current value");
          return true;
        } else {
          const obj = _mod1683;
          const result = obj.recognizePrefixSuffix(previousAnimation.current);
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
        const tmp3 = undefined !== previousAnimation.max && undefined !== range.min && range.max < range.min;
        if (tmp3) {
          const logger = react_native.logger;
          logger.warn("Wrong config was provided to withClamp. Min value is bigger than max");
        }
        current = undefined;
        const onStart = tmp.onStart;
        if (previousAnimation != null) {
          current = previousAnimation.current;
        }
        onStart(previousAnimation, current, arg2, previousAnimation);
      },
      current: tmpResult.current,
      callback(arg0) {
        if (previousAnimation.callback) {
          previousAnimation.callback(arg0);
        }
      },
      previousAnimation: null,
      reduceMotion: obj4.getReduceMotionForAnimation(range.reduceMotion),
    };
    obj4 = config(_animationToClamp[0]);
    return obj3;
  };
  let obj2 = {
    _animationToClamp,
    config,
    recognizePrefixSuffix: require("01683__.js").recognizePrefixSuffix,
    logger: require("react-native").logger,
    getReduceMotionForAnimation: require("01683__.js").getReduceMotionForAnimation,
  };
  fn.__closure = obj2;
  fn.__workletHash = 9293031098818;
  fn.__initData = __initData;
  return obj.defineAnimation(_animationToClamp, fn);
};
let obj = {
  defineAnimation: _mod1683.defineAnimation,
  recognizePrefixSuffix: _mod1683.recognizePrefixSuffix,
  logger: react_native.logger,
  getReduceMotionForAnimation: _mod1683.getReduceMotionForAnimation,
};
fn.__closure = obj;
fn.__workletHash = 2452826107198;
fn.__initData = {
  code: "function pnpm_clampTs1(config,_animationToClamp){const{defineAnimation,recognizePrefixSuffix,logger,getReduceMotionForAnimation}=this.__closure;return defineAnimation(_animationToClamp,function(){'worklet';const animationToClamp=typeof _animationToClamp==='function'?_animationToClamp():_animationToClamp;const strippedMin=config.min===undefined?undefined:recognizePrefixSuffix(config.min).strippedValue;const strippedMax=config.max===undefined?undefined:recognizePrefixSuffix(config.max).strippedValue;function clampOnFrame(animation,now){const finished=animationToClamp.onFrame(animationToClamp,now);if(animationToClamp.current===undefined){logger.warn(\"Error inside 'withClamp' animation, the inner animation has invalid current value\");return true;}else{const{prefix:prefix,strippedValue:strippedValue,suffix:suffix}=recognizePrefixSuffix(animationToClamp.current);let newValue;if(strippedMax!==undefined&&strippedMax<strippedValue){newValue=strippedMax;}else if(strippedMin!==undefined&&strippedMin>strippedValue){newValue=strippedMin;}else{newValue=strippedValue;}animation.current=typeof animationToClamp.current==='number'?newValue:\"\"+(prefix===undefined?'':prefix)+newValue+(suffix===undefined?'':suffix);}return finished;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.previousAnimation=animationToClamp;const animationBeforeClamped=previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.previousAnimation;if(config.max!==undefined&&config.min!==undefined&&config.max<config.min){logger.warn('Wrong config was provided to withClamp. Min value is bigger than max');}animationToClamp.onStart(animationToClamp,(animationBeforeClamped===null||animationBeforeClamped===void 0?void 0:animationBeforeClamped.current)||value,now,animationBeforeClamped);}const callback=function(finished){if(animationToClamp.callback){animationToClamp.callback(finished);}};return{isHigherOrder:true,onFrame:clampOnFrame,onStart:onStart,current:animationToClamp.current,callback:callback,previousAnimation:null,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};});}",
};

export const withClamp = fn;
