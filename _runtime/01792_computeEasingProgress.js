// _runtime/01792_computeEasingProgress.js
const require = arg1;
const dependencyMap = arg6;
let c2 = 400;
function computeEasingProgress(arg0, arg1, arg2) {
  let num = 1;
  if (Math.abs(arg1) >= 1) {
    num = arg2 * ((globalThis._getAnimationTimestamp() - arg0) / 1000) / arg1;
  }
  return num;
}
computeEasingProgress.__closure = {};
computeEasingProgress.__workletHash = 11092056948922;
computeEasingProgress.__initData = { code: "function computeEasingProgress_Pnpm_swipeSimulatorTs1(startingTimestamp,distance,velocity){if(Math.abs(distance)<1){return 1;}const elapsedTime=(_getAnimationTimestamp()-startingTimestamp)/1000;const currentPosition=velocity*elapsedTime;const progress=currentPosition/distance;return progress;}" };
function easing(arg0) {
  return 1 - Math.pow(1 - arg0, 5);
}
easing.__closure = {};
easing.__workletHash = 4992389111746;
easing.__initData = { code: "function easing_Pnpm_swipeSimulatorTs2(x){return 1-Math.pow(1-x,5);}" };
function computeProgress(screenDimensions, translationX) {
  screenDimensions = screenDimensions.screenDimensions;
  const absolute = Math.abs(translationX.translationX / screenDimensions.width);
  const bound = Math.max(absolute, Math.abs(translationX.translationY / screenDimensions.height));
  let result = bound;
  if (arg2) {
    result = bound / 2;
  }
  return result;
}
computeProgress.__closure = {};
computeProgress.__workletHash = 3778680834909;
computeProgress.__initData = { code: "function computeProgress_Pnpm_swipeSimulatorTs3(screenTransitionConfig,event,isTransitionCanceled){const screenDimensions=screenTransitionConfig.screenDimensions;const progressX=Math.abs(event.translationX/screenDimensions.width);const progressY=Math.abs(event.translationY/screenDimensions.height);const maxProgress=Math.max(progressX,progressY);const progress=isTransitionCanceled?maxProgress/2:maxProgress;return progress;}" };
function maybeScheduleNextFrame(scrollAnimation, arg1, onFinishAnimation, translationX) {
  if (arg1) {
    onFinishAnimation = onFinishAnimation.onFinishAnimation;
    if (onFinishAnimation != null) {
      onFinishAnimation();
    }
  } else {
    if (typeof computeProgress !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const screenDimensions = onFinishAnimation.screenDimensions;
    const _Math = Math;
    const _Math2 = Math;
    const absolute = Math.abs(translationX.translationX / screenDimensions.width);
    const _Math3 = Math;
    const bound = Math.max(absolute, Math.abs(translationX.translationY / screenDimensions.height));
    let result = bound;
    if (arg4) {
      result = bound / 2;
    }
    const RNScreensTurboModule = require("01793_RNScreensTurboModule.js") /* RNScreensTurboModule */.RNScreensTurboModule;
    RNScreensTurboModule.updateTransition(onFinishAnimation.stackTag, result);
    const _requestAnimationFrame = requestAnimationFrame;
    const animationFrame = requestAnimationFrame(scrollAnimation);
  }
}
let obj = { computeProgress, RNScreensTurboModule: require("RNScreensTurboModule").RNScreensTurboModule };
maybeScheduleNextFrame.__closure = obj;
maybeScheduleNextFrame.__workletHash = 7657931427196;
maybeScheduleNextFrame.__initData = { code: "function maybeScheduleNextFrame_Pnpm_swipeSimulatorTs4(step,didScreenReachDestination,screenTransitionConfig,event,isTransitionCanceled){const{computeProgress,RNScreensTurboModule}=this.__closure;if(!didScreenReachDestination){const stackTag=screenTransitionConfig.stackTag;const progress=computeProgress(screenTransitionConfig,event,isTransitionCanceled);RNScreensTurboModule.updateTransition(stackTag,progress);requestAnimationFrame(step);}else{var _screenTransitionConf;(_screenTransitionConf=screenTransitionConfig.onFinishAnimation)===null||_screenTransitionConf===void 0||_screenTransitionConf.call(screenTransitionConfig);}}" };
function getSwipeSimulator(value, screenDimensions, arg2) {
  let closure_0 = value;
  let closure_1 = screenDimensions;
  let closure_2 = arg2;
  screenDimensions = screenDimensions.screenDimensions;
  let closure_4 = globalThis._getAnimationTimestamp();
  const isTransitionCanceled = screenDimensions.isTransitionCanceled;
  let point = { x: value.translationX, y: value.translationY };
  const signResult = Math.sign(value.translationX);
  let closure_7 = signResult;
  const signResult1 = Math.sign(value.translationY);
  if (isTransitionCanceled) {
    let point2 = { x: 0, y: 0 };
  } else {
    point2 = { x: null, y: null };
    point2[0] = signResult * screenDimensions.width;
    point2[1] = signResult1 * screenDimensions.height;
  }
  const point3 = { x: Math.abs(point2.x - point.x), y: Math.abs(point2.y - point.y) };
  let closure_10 = { x: false, y: false };
  const point4 = { x: closure_2, y: closure_2 };
  if ("x" === arg2) {
    point4.y = 0;
    point4.x = point4.x + 400 * point3.x / screenDimensions.width;
  } else if ("y" === arg2) {
    point4.x = 0;
    point4.y = point4.y + 500 * point3.y / screenDimensions.height;
  } else {
    let _Math3 = Math;
    const _Math4 = Math;
    const sum = tmp3 + 600 * Math.sqrt(point3.x ** 2 + point3.y ** 2) / Math.sqrt(screenDimensions.width ** 2 + screenDimensions.height ** 2);
    const _Math5 = Math;
    const _Math6 = Math;
    let absolute = Math.abs(point.x);
    if (absolute > Math.abs(point.y)) {
      point4.x = sum;
      let _Math2 = Math;
      point4.y = sum * Math.abs(point.y / point.x);
    } else {
      let _Math = Math;
      point4.x = sum * Math.abs(point.x / point.y);
      point4.y = sum;
    }
    const sqrtResult = Math.sqrt(point3.x ** 2 + point3.y ** 2);
  }
  if (isTransitionCanceled) {
    function computeFrame() {
      const point = point3;
      const x = point3.x;
      if (typeof screenDimensions !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let num = 1;
      if (Math.abs(x) >= 1) {
        num = point4.x * ((globalThis._getAnimationTimestamp() - tmp2) / 1000) / x;
      }
      const y = point.y;
      if (typeof screenDimensions !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let num3 = 1;
      if (Math.abs(y) >= 1) {
        num3 = point4.y * ((globalThis._getAnimationTimestamp() - tmp2) / 1000) / y;
      }
      const result = closure_7 * point.x;
      if (typeof closure_4 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      value.translationX = point.x - result * (1 - Math.pow(1 - num, 5));
      const result1 = signResult1 * point.y;
      if (typeof closure_4 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      value.translationY = point.y - result1 * (1 - Math.pow(1 - num3, 5));
      if (closure_7 > 0) {
        if (tmp4.translationX <= 0) {
          closure_10.x = true;
          tmp4.translationX = 0;
        }
      } else if (tmp4.translationX >= 0) {
        closure_10.x = true;
        tmp4.translationX = 0;
      }
      if (signResult1 > 0) {
        if (tmp4.translationY <= 0) {
          closure_10.y = true;
          tmp4.translationY = 0;
        }
      } else if (tmp4.translationY >= 0) {
        closure_10.y = true;
        tmp4.translationY = 0;
      }
      value(screenDimensions[1]).applyStyle(screenDimensions, value);
      if ("x" === closure_2) {
        let y2 = closure_10.x;
      } else {
        y2 = "y" === tmp19;
        if (!y2) {
          y2 = closure_10.x;
        }
        if (y2) {
          y2 = closure_10.y;
        }
      }
      if (y2) {
        tmp4.translationX = tmp6 * screenDimensions.width;
        tmp4.translationY = tmp9 * screenDimensions.height;
        const result2 = tmp15(tmp16[1]).applyStyleForBelowTopScreen(tmp17, tmp4);
        const tmp15Result = tmp15(tmp16[1]);
      }
      if (typeof point !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (y2) {
        const onFinishAnimation = tmp17.onFinishAnimation;
        if (onFinishAnimation != null) {
          onFinishAnimation();
        }
      } else {
        if (typeof isTransitionCanceled !== "function") {
          HermesBuiltin.throwTypeError();
        }
        screenDimensions = tmp17.screenDimensions;
        const _Math = Math;
        const _Math2 = Math;
        const absolute = Math.abs(tmp4.translationX / screenDimensions.width);
        const _Math3 = Math;
        const bound = Math.max(absolute, Math.abs(tmp4.translationY / screenDimensions.height));
        let result3 = bound;
        if (isTransitionCanceled) {
          result3 = bound / 2;
        }
        const RNScreensTurboModule = tmp15(tmp16[0]).RNScreensTurboModule;
        RNScreensTurboModule.updateTransition(tmp17.stackTag, result3);
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(computeFrame);
      }
    }
    return computeFrame;
  } else {
    function _computeFrame() {
      const point = point3;
      const x = point3.x;
      if (typeof screenDimensions !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let num = 1;
      if (Math.abs(x) >= 1) {
        num = point4.x * ((globalThis._getAnimationTimestamp() - tmp2) / 1000) / x;
      }
      const y = point.y;
      if (typeof screenDimensions !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let num3 = 1;
      if (Math.abs(y) >= 1) {
        num3 = point4.y * ((globalThis._getAnimationTimestamp() - tmp2) / 1000) / y;
      }
      const result = closure_7 * point.x;
      if (typeof closure_4 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      value.translationX = point.x + result * (1 - Math.pow(1 - num, 5));
      const result1 = signResult1 * point.y;
      if (typeof closure_4 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      value.translationY = point.y + result1 * (1 - Math.pow(1 - num3, 5));
      if (closure_7 > 0) {
        let tmp12 = screenDimensions;
        if (tmp4.translationX >= screenDimensions.width) {
          closure_10.x = true;
          tmp4.translationX = tmp14.width;
          tmp12 = tmp14;
        }
      } else {
        tmp12 = screenDimensions;
        if (tmp4.translationX <= -screenDimensions.width) {
          closure_10.x = true;
          tmp4.translationX = -tmp11.width;
          tmp12 = tmp11;
        }
      }
      if (signResult1 > 0) {
        if (tmp4.translationY >= tmp12.height) {
          closure_10.y = true;
          tmp4.translationY = tmp12.height;
        }
      } else if (tmp4.translationY <= -tmp12.height) {
        closure_10.y = true;
        tmp4.translationY = -tmp12.height;
      }
      value(screenDimensions[1]).applyStyle(screenDimensions, value);
      let y2 = closure_10.x;
      if (!y2) {
        y2 = closure_10.y;
      }
      if (typeof point !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (y2) {
        const onFinishAnimation = tmp20.onFinishAnimation;
        if (onFinishAnimation != null) {
          onFinishAnimation();
        }
      } else {
        if (typeof isTransitionCanceled !== "function") {
          HermesBuiltin.throwTypeError();
        }
        screenDimensions = tmp20.screenDimensions;
        const _Math = Math;
        const _Math2 = Math;
        const absolute = Math.abs(tmp4.translationX / screenDimensions.width);
        const _Math3 = Math;
        const bound = Math.max(absolute, Math.abs(tmp4.translationY / screenDimensions.height));
        let result2 = bound;
        if (isTransitionCanceled) {
          result2 = bound / 2;
        }
        const RNScreensTurboModule = value(screenDimensions[0]).RNScreensTurboModule;
        RNScreensTurboModule.updateTransition(tmp20.stackTag, result2);
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(_computeFrame);
      }
    }
    return _computeFrame;
  }
}
obj = { BASE_VELOCITY: 400, ADDITIONAL_VELOCITY_FACTOR_X: 400, ADDITIONAL_VELOCITY_FACTOR_Y: 500, ADDITIONAL_VELOCITY_FACTOR_XY: 600, applyStyleForBelowTopScreen: require("createViewDescriptorPaper").applyStyleForBelowTopScreen, computeEasingProgress, easing, applyStyle: require("createViewDescriptorPaper").applyStyle, maybeScheduleNextFrame };
getSwipeSimulator.__closure = obj;
getSwipeSimulator.__workletHash = 11722244836970;
getSwipeSimulator.__initData = { code: "function getSwipeSimulator_Pnpm_swipeSimulatorTs5(event,screenTransitionConfig,lockAxis){const{BASE_VELOCITY,ADDITIONAL_VELOCITY_FACTOR_X,ADDITIONAL_VELOCITY_FACTOR_Y,ADDITIONAL_VELOCITY_FACTOR_XY,applyStyleForBelowTopScreen,computeEasingProgress,easing,applyStyle,maybeScheduleNextFrame}=this.__closure;const screenDimensions=screenTransitionConfig.screenDimensions;const startTimestamp=_getAnimationTimestamp();const{isTransitionCanceled:isTransitionCanceled}=screenTransitionConfig;const startingPosition={x:event.translationX,y:event.translationY};const direction={x:Math.sign(event.translationX),y:Math.sign(event.translationY)};const finalPosition=isTransitionCanceled?{x:0,y:0}:{x:direction.x*screenDimensions.width,y:direction.y*screenDimensions.height};const distance={x:Math.abs(finalPosition.x-startingPosition.x),y:Math.abs(finalPosition.y-startingPosition.y)};const didScreenReachDestination={x:false,y:false};const velocity={x:BASE_VELOCITY,y:BASE_VELOCITY};if(lockAxis==='x'){velocity.y=0;velocity.x+=ADDITIONAL_VELOCITY_FACTOR_X*distance.x/screenDimensions.width;}else if(lockAxis==='y'){velocity.x=0;velocity.y+=ADDITIONAL_VELOCITY_FACTOR_Y*distance.y/screenDimensions.height;}else{const euclideanDistance=Math.sqrt(distance.x**2+distance.y**2);const screenDiagonal=Math.sqrt(screenDimensions.width**2+screenDimensions.height**2);const velocityVectorLength=BASE_VELOCITY+ADDITIONAL_VELOCITY_FACTOR_XY*euclideanDistance/screenDiagonal;if(Math.abs(startingPosition.x)>Math.abs(startingPosition.y)){velocity.x=velocityVectorLength;velocity.y=velocityVectorLength*Math.abs(startingPosition.y/startingPosition.x);}else{velocity.x=velocityVectorLength*Math.abs(startingPosition.x/startingPosition.y);velocity.y=velocityVectorLength;}}if(isTransitionCanceled){function didScreenReachDestinationCheck(){if(lockAxis==='x'){return didScreenReachDestination.x;}else if(lockAxis==='y'){return didScreenReachDestination.y;}else{return didScreenReachDestination.x&&didScreenReachDestination.y;}}function restoreOriginalStyleForBelowTopScreen(){event.translationX=direction.x*screenDimensions.width;event.translationY=direction.y*screenDimensions.height;applyStyleForBelowTopScreen(screenTransitionConfig,event);}const computeFrame=function(){const progress={x:computeEasingProgress(startTimestamp,distance.x,velocity.x),y:computeEasingProgress(startTimestamp,distance.y,velocity.y)};event.translationX=startingPosition.x-direction.x*distance.x*easing(progress.x);event.translationY=startingPosition.y-direction.y*distance.y*easing(progress.y);if(direction.x>0){if(event.translationX<=0){didScreenReachDestination.x=true;event.translationX=0;}}else{if(event.translationX>=0){didScreenReachDestination.x=true;event.translationX=0;}}if(direction.y>0){if(event.translationY<=0){didScreenReachDestination.y=true;event.translationY=0;}}else{if(event.translationY>=0){didScreenReachDestination.y=true;event.translationY=0;}}applyStyle(screenTransitionConfig,event);const finished=didScreenReachDestinationCheck();if(finished){restoreOriginalStyleForBelowTopScreen();}maybeScheduleNextFrame(computeFrame,finished,screenTransitionConfig,event,isTransitionCanceled);};return computeFrame;}else{const computeFrame=function(){const progress={x:computeEasingProgress(startTimestamp,distance.x,velocity.x),y:computeEasingProgress(startTimestamp,distance.y,velocity.y)};event.translationX=startingPosition.x+direction.x*distance.x*easing(progress.x);event.translationY=startingPosition.y+direction.y*distance.y*easing(progress.y);if(direction.x>0){if(event.translationX>=screenDimensions.width){didScreenReachDestination.x=true;event.translationX=screenDimensions.width;}}else{if(event.translationX<=-screenDimensions.width){didScreenReachDestination.x=true;event.translationX=-screenDimensions.width;}}if(direction.y>0){if(event.translationY>=screenDimensions.height){didScreenReachDestination.y=true;event.translationY=screenDimensions.height;}}else{if(event.translationY<=-screenDimensions.height){didScreenReachDestination.y=true;event.translationY=-screenDimensions.height;}}applyStyle(screenTransitionConfig,event);maybeScheduleNextFrame(computeFrame,didScreenReachDestination.x||didScreenReachDestination.y,screenTransitionConfig,event,isTransitionCanceled);};return computeFrame;}}" };
arg5.getSwipeSimulator = getSwipeSimulator;