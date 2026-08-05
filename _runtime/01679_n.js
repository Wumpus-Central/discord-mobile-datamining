// _runtime/01679_n.js
const require = arg1;
let dependencyMap = arg6;
let closure_2 = { code: "function pnpm_clampTs2(){const{_animationToClamp,config,recognizePrefixSuffix,logger,getReduceMotionForAnimation}=this.__closure;const animationToClamp=typeof _animationToClamp==='function'?_animationToClamp():_animationToClamp;const strippedMin=config.min===undefined?undefined:recognizePrefixSuffix(config.min).strippedValue;const strippedMax=config.max===undefined?undefined:recognizePrefixSuffix(config.max).strippedValue;function clampOnFrame(animation,now){const finished=animationToClamp.onFrame(animationToClamp,now);if(animationToClamp.current===undefined){logger.warn(\"Error inside 'withClamp' animation, the inner animation has invalid current value\");return true;}else{const{prefix:prefix,strippedValue:strippedValue,suffix:suffix}=recognizePrefixSuffix(animationToClamp.current);let newValue;if(strippedMax!==undefined&&strippedMax<strippedValue){newValue=strippedMax;}else if(strippedMin!==undefined&&strippedMin>strippedValue){newValue=strippedMin;}else{newValue=strippedValue;}animation.current=typeof animationToClamp.current==='number'?newValue:\"\"+(prefix===undefined?'':prefix)+newValue+(suffix===undefined?'':suffix);}return finished;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.previousAnimation=animationToClamp;const animationBeforeClamped=previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.previousAnimation;if(config.max!==undefined&&config.min!==undefined&&config.max<config.min){logger.warn('Wrong config was provided to withClamp. Min value is bigger than max');}animationToClamp.onStart(animationToClamp,(animationBeforeClamped===null||animationBeforeClamped===void 0?void 0:animationBeforeClamped.current)||value,now,animationBeforeClamped);}const callback=function(finished){if(animationToClamp.callback){animationToClamp.callback(finished);}};return{isHigherOrder:true,onFrame:clampOnFrame,onStart:onStart,current:animationToClamp.current,callback:callback,previousAnimation:null,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};}" };
let fn = function n(config, _animationToClamp) {
  const _require = config;
  const dependencyMap = _animationToClamp;
  let obj = _require("01646_isValidLayoutAnimationProp.js");
  const fn = function u() {
    let tmpResult = strippedValue;
    if (typeof strippedValue === "function") {
      tmpResult = tmp();
    }
    const config = tmpResult;
    strippedValue = undefined;
    if (undefined !== config.min) {
      let obj = config(1646);
      strippedValue = obj.recognizePrefixSuffix(tmp3.min).strippedValue;
    }
    let strippedValue1;
    if (undefined !== config.max) {
      strippedValue1 = config(1646).recognizePrefixSuffix(tmp3.max).strippedValue;
      const obj2 = config(1646);
    }
    obj = {
      isHigherOrder: true,
      onFrame: function clampOnFrame(arg0, arg1) {
        let prefix;
        let strippedValue;
        let suffix;
        if (undefined === tmpResult.current) {
          const logger = tmpResult(strippedValue[1]).logger;
          logger.warn("Error inside 'withClamp' animation, the inner animation has invalid current value");
          return true;
        } else {
          const result = tmpResult(strippedValue[0]).recognizePrefixSuffix(tmp.current);
          ({ prefix, strippedValue, suffix } = result);
          let tmp5 = strippedValue1;
          if (undefined === strippedValue1) {
            let tmp4 = strippedValue;
            if (undefined !== strippedValue) {
              tmp4 = strippedValue;
              if (tmp3 > strippedValue) {
                tmp4 = tmp3;
              }
            }
            tmp5 = tmp4;
          }
          let combined = tmp5;
          if (typeof tmp.current !== "number") {
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
        arg0.previousAnimation = tmpResult;
        previousAnimation = undefined;
        if (previousAnimation != null) {
          previousAnimation = previousAnimation.previousAnimation;
        }
        if (tmp3) {
          const logger = tmpResult(strippedValue[1]).logger;
          logger.warn("Wrong config was provided to withClamp. Min value is bigger than max");
        }
        current = undefined;
        if (previousAnimation != null) {
          current = previousAnimation.current;
        }
        tmpResult.onStart(tmpResult, current, arg2, previousAnimation);
      },
      current: tmpResult.current,
      callback(arg0) {
        if (tmpResult.callback) {
          tmpResult.callback(arg0);
        }
      },
      previousAnimation: null,
      reduceMotion: null
    };
    obj[6] = config(1646).getReduceMotionForAnimation(config.reduceMotion);
    return obj;
  };
  obj = { _animationToClamp, config, recognizePrefixSuffix: _require("01646_isValidLayoutAnimationProp.js").recognizePrefixSuffix, logger: _require("01610_addLogBoxLog.js").logger, getReduceMotionForAnimation: _require("01646_isValidLayoutAnimationProp.js").getReduceMotionForAnimation };
  fn.__closure = obj;
  fn.__workletHash = 9293031098818;
  fn.__initData = closure_2;
  return obj.defineAnimation(_animationToClamp, fn);
};
fn.__closure = { defineAnimation: require("isValidLayoutAnimationProp").defineAnimation, recognizePrefixSuffix: require("isValidLayoutAnimationProp").recognizePrefixSuffix, logger: require("addLogBoxLog").logger, getReduceMotionForAnimation: require("isValidLayoutAnimationProp").getReduceMotionForAnimation };
fn.__workletHash = 2452826107198;
fn.__initData = { code: "function pnpm_clampTs1(config,_animationToClamp){const{defineAnimation,recognizePrefixSuffix,logger,getReduceMotionForAnimation}=this.__closure;return defineAnimation(_animationToClamp,function(){'worklet';const animationToClamp=typeof _animationToClamp==='function'?_animationToClamp():_animationToClamp;const strippedMin=config.min===undefined?undefined:recognizePrefixSuffix(config.min).strippedValue;const strippedMax=config.max===undefined?undefined:recognizePrefixSuffix(config.max).strippedValue;function clampOnFrame(animation,now){const finished=animationToClamp.onFrame(animationToClamp,now);if(animationToClamp.current===undefined){logger.warn(\"Error inside 'withClamp' animation, the inner animation has invalid current value\");return true;}else{const{prefix:prefix,strippedValue:strippedValue,suffix:suffix}=recognizePrefixSuffix(animationToClamp.current);let newValue;if(strippedMax!==undefined&&strippedMax<strippedValue){newValue=strippedMax;}else if(strippedMin!==undefined&&strippedMin>strippedValue){newValue=strippedMin;}else{newValue=strippedValue;}animation.current=typeof animationToClamp.current==='number'?newValue:\"\"+(prefix===undefined?'':prefix)+newValue+(suffix===undefined?'':suffix);}return finished;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.previousAnimation=animationToClamp;const animationBeforeClamped=previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.previousAnimation;if(config.max!==undefined&&config.min!==undefined&&config.max<config.min){logger.warn('Wrong config was provided to withClamp. Min value is bigger than max');}animationToClamp.onStart(animationToClamp,(animationBeforeClamped===null||animationBeforeClamped===void 0?void 0:animationBeforeClamped.current)||value,now,animationBeforeClamped);}const callback=function(finished){if(animationToClamp.callback){animationToClamp.callback(finished);}};return{isHigherOrder:true,onFrame:clampOnFrame,onStart:onStart,current:animationToClamp.current,callback:callback,previousAnimation:null,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};});}" };
arg5.withClamp = fn;