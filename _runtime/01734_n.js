// _runtime/01734_n.js
import { isValidLayoutAnimationProp } from "01692_isValidLayoutAnimationProp.js";
const require = arg1;
let dependencyMap = arg6;
let closure_2 = {
  code: "function pnpm_springTs2(){const{userConfig,checkIfConfigIsValid,underDampedSpringCalculations,criticallyDampedSpringCalculations,isAnimationTerminatingCalculation,calculateNewMassToMatchDuration,initialCalculations,scaleZetaToMatchClamps,toValue,callback,getReduceMotionForAnimation}=this.__closure;var _userConfig,_userConfig2;const defaultConfig={damping:10,mass:1,stiffness:100,overshootClamping:false,restDisplacementThreshold:0.01,restSpeedThreshold:2,velocity:0,duration:2000,dampingRatio:0.5,reduceMotion:undefined,clamp:undefined};const config={...defaultConfig,...userConfig,useDuration:!!((_userConfig=userConfig)!==null&&_userConfig!==void 0&&_userConfig.duration||(_userConfig2=userConfig)!==null&&_userConfig2!==void 0&&_userConfig2.dampingRatio),skipAnimation:false};config.skipAnimation=!checkIfConfigIsValid(config);if(config.duration===0){config.skipAnimation=true;}function springOnFrame(animation,now){const{toValue:toValue,startTimestamp:startTimestamp,current:current}=animation;const timeFromStart=now-startTimestamp;if(config.useDuration&&timeFromStart>=config.duration){animation.current=toValue;animation.lastTimestamp=0;return true;}if(config.skipAnimation){animation.current=toValue;animation.lastTimestamp=0;return true;}const{lastTimestamp:lastTimestamp,velocity:velocity}=animation;const deltaTime=Math.min(Math.max(now-lastTimestamp,0),64);animation.lastTimestamp=now;const t=deltaTime/1000;const v0=-velocity;const x0=toValue-current;const{zeta:zeta,omega0:omega0,omega1:omega1}=animation;const{position:newPosition,velocity:newVelocity}=zeta<1?underDampedSpringCalculations(animation,{zeta:zeta,v0:v0,x0:x0,omega0:omega0,omega1:omega1,t:t}):criticallyDampedSpringCalculations(animation,{v0:v0,x0:x0,omega0:omega0,t:t});animation.current=newPosition;animation.velocity=newVelocity;const{isOvershooting:isOvershooting,isVelocity:isVelocity,isDisplacement:isDisplacement}=isAnimationTerminatingCalculation(animation,config);const springIsNotInMove=isOvershooting||isVelocity&&isDisplacement;if(!config.useDuration&&springIsNotInMove){animation.velocity=0;animation.current=toValue;animation.lastTimestamp=0;return true;}return false;}function isTriggeredTwice(previousAnimation,animation){return(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.toValue)===animation.toValue&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.duration)===animation.duration&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.dampingRatio)===animation.dampingRatio;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.startValue=value;let mass=config.mass;const triggeredTwice=isTriggeredTwice(previousAnimation,animation);const duration=config.duration;const x0=triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startValue:Number(animation.toValue)-value;if(previousAnimation){animation.velocity=(triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity:(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity)+config.velocity)||0;}else{animation.velocity=config.velocity||0;}const toValueNum=Number(animation.toValue);if(toValueNum>value&&animation.velocity<0||toValueNum<value&&animation.velocity>0){animation.velocity=0;}if(triggeredTwice){animation.zeta=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.zeta)||0;animation.omega0=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega0)||0;animation.omega1=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega1)||0;}else{if(config.useDuration){const actualDuration=triggeredTwice?duration-(((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||0)-((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||0)):duration;config.duration=actualDuration;mass=calculateNewMassToMatchDuration(x0,config,animation.velocity);}const{zeta:zeta,omega0:omega0,omega1:omega1}=initialCalculations(mass,config);animation.zeta=zeta;animation.omega0=omega0;animation.omega1=omega1;if(config.clamp!==undefined){animation.zeta=scaleZetaToMatchClamps(animation,config.clamp);}}animation.lastTimestamp=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||now;animation.startTimestamp=triggeredTwice?(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||now:now;}return{onFrame:springOnFrame,onStart:onStart,toValue:toValue,velocity:config.velocity||0,current:toValue,startValue:0,callback:callback,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};}",
};
let fn = function n(toValue, userConfig, callback) {
  const _require = toValue;
  dependencyMap = userConfig;
  closure_2 = callback;
  let obj = isValidLayoutAnimationProp;
  const fn = function u() {
    let obj = {
      damping: 10,
      mass: 1,
      stiffness: 100,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
      velocity: 0,
      duration: 2000,
      dampingRatio: 0.5,
      reduceMotion: "call",
      clamp: "description",
    };
    const merged = Object.assign(userConfig);
    let duration;
    if (userConfig != null) {
      duration = tmp.duration;
    }
    let tmp4 = !duration;
    if (!duration) {
      let dampingRatio;
      if (tmp != null) {
        dampingRatio = tmp.dampingRatio;
      }
      tmp4 = !dampingRatio;
    }
    obj.useDuration = !tmp4;
    obj.skipAnimation = false;
    obj.skipAnimation = !toValue(userConfig[1]).checkIfConfigIsValid(obj);
    if (0 === obj.duration) {
      obj.skipAnimation = true;
    }
    obj = {
      onFrame: function springOnFrame(toValue, lastTimestamp) {
        toValue = toValue.toValue;
        if (obj.useDuration) {
          if (tmp >= tmp2.duration) {
            toValue.current = toValue;
            toValue.lastTimestamp = 0;
            return true;
          }
        }
        if (obj.skipAnimation) {
          toValue.current = toValue;
          toValue.lastTimestamp = 0;
          return true;
        } else {
          const _Math = Math;
          const _Math2 = Math;
          toValue.lastTimestamp = lastTimestamp;
          const result = Math.min(Math.max(lastTimestamp - toValue.lastTimestamp, 0), 64) / 1000;
          const diff = toValue - toValue.current;
          ({ zeta, omega0 } = toValue);
          if (zeta < 1) {
            obj = { zeta: null, v0: null, x0: null, omega0: null, omega1: null, t: null };
            obj[0] = zeta;
            obj[1] = tmp5;
            obj[2] = diff;
            obj[3] = omega0;
            obj[4] = tmp7;
            obj[5] = result;
            let result1 = obj(closure_1_1[1]).underDampedSpringCalculations(toValue, obj);
            const obj3 = obj(closure_1_1[1]);
          } else {
            obj = obj(closure_1_1[1]);
            obj = { v0: null, x0: null, omega0: null, t: null };
            obj[0] = tmp5;
            obj[1] = diff;
            obj[2] = omega0;
            obj[3] = result;
            result1 = obj.criticallyDampedSpringCalculations(toValue, obj);
          }
          ({ position: toValue.current, velocity: toValue.velocity } = result1);
          const result2 = obj(closure_1_1[1]).isAnimationTerminatingCalculation(toValue, tmp2);
          ({ isOvershooting, isVelocity } = result2);
          if (!isOvershooting) {
            if (isVelocity) {
              isVelocity = result2.isDisplacement;
            }
            isOvershooting = isVelocity;
          }
          let num5 = tmp2.useDuration || !isOvershooting;
          if (!num5) {
            toValue.velocity = 0;
            toValue.current = toValue;
            toValue.lastTimestamp = 0;
            num5 = 0;
          }
          return !num5;
        }
      },
      onStart(toValue, current, arg2, lastTimestamp) {
        toValue.current = current;
        toValue.startValue = current;
        let mass = obj.mass;
        lastTimestamp = undefined;
        if (lastTimestamp != null) {
          lastTimestamp = lastTimestamp.lastTimestamp;
        }
        if (lastTimestamp) {
          let startTimestamp;
          if (lastTimestamp != null) {
            startTimestamp = lastTimestamp.startTimestamp;
          }
          lastTimestamp = startTimestamp;
        }
        if (lastTimestamp) {
          toValue = undefined;
          if (lastTimestamp != null) {
            toValue = lastTimestamp.toValue;
          }
          lastTimestamp = toValue === toValue.toValue;
        }
        if (lastTimestamp) {
          let duration;
          if (lastTimestamp != null) {
            duration = lastTimestamp.duration;
          }
          lastTimestamp = duration === toValue.duration;
        }
        if (lastTimestamp) {
          let dampingRatio;
          if (lastTimestamp != null) {
            dampingRatio = lastTimestamp.dampingRatio;
          }
          lastTimestamp = dampingRatio === toValue.dampingRatio;
        }
        duration = tmp.duration;
        if (lastTimestamp) {
          let startValue;
          if (lastTimestamp != null) {
            startValue = lastTimestamp.startValue;
          }
          let diff = startValue;
        } else {
          const _Number = Number;
          diff = Number(toValue.toValue) - current;
        }
        if (lastTimestamp) {
          if (lastTimestamp) {
            let velocity;
            if (!tmp11) {
              velocity = lastTimestamp.velocity;
            }
            let num = velocity;
          } else {
            let velocity1;
            if (!tmp11) {
              velocity1 = lastTimestamp.velocity;
            }
            num = velocity1 + tmp.velocity;
          }
          if (!num) {
            num = 0;
          }
          let tmp10 = num;
        } else {
          tmp10 = tmp.velocity || 0;
        }
        toValue.velocity = tmp10;
        const NumberResult = Number(toValue.toValue);
        let tmp15 = NumberResult > current;
        if (tmp15) {
          tmp15 = toValue.velocity < 0;
        }
        if (!tmp15) {
          let tmp16 = NumberResult < current;
          if (tmp16) {
            tmp16 = toValue.velocity > 0;
          }
          tmp15 = tmp16;
        }
        if (tmp15) {
          toValue.velocity = 0;
        }
        if (lastTimestamp) {
          let num7;
          if (lastTimestamp != null) {
            num7 = lastTimestamp.zeta;
          }
          if (!num7) {
            num7 = 0;
          }
          toValue.zeta = num7;
          let num8;
          if (lastTimestamp != null) {
            num8 = lastTimestamp.omega0;
          }
          if (!num8) {
            num8 = 0;
          }
          toValue.omega0 = num8;
          let num9;
          if (lastTimestamp != null) {
            num9 = lastTimestamp.omega1;
          }
          if (!num9) {
            num9 = 0;
          }
          toValue.omega1 = num9;
        } else {
          if (tmp.useDuration) {
            let diff1 = duration;
            if (lastTimestamp) {
              let num5;
              if (lastTimestamp != null) {
                num5 = lastTimestamp.lastTimestamp;
              }
              if (!num5) {
                num5 = 0;
              }
              let num6;
              if (lastTimestamp != null) {
                num6 = lastTimestamp.startTimestamp;
              }
              if (!num6) {
                num6 = 0;
              }
              diff1 = duration - (num5 - num6);
            }
            tmp.duration = diff1;
            obj = obj(closure_1_1[1]);
            mass = obj.calculateNewMassToMatchDuration(diff, tmp, toValue.velocity);
          }
          const obj2 = obj(closure_1_1[1]);
          ({
            zeta: toValue.zeta,
            omega0: toValue.omega0,
            omega1: toValue.omega1,
          } = obj(closure_1_1[1]).initialCalculations(mass, tmp));
          if (undefined !== tmp.clamp) {
            toValue.zeta = obj(closure_1_1[1]).scaleZetaToMatchClamps(toValue, tmp.clamp);
            const obj3 = obj(closure_1_1[1]);
          }
          const initialCalculationsResult = obj(closure_1_1[1]).initialCalculations(mass, tmp);
        }
        let lastTimestamp1;
        if (lastTimestamp != null) {
          lastTimestamp1 = lastTimestamp.lastTimestamp;
        }
        if (!lastTimestamp1) {
          lastTimestamp1 = arg2;
        }
        toValue.lastTimestamp = lastTimestamp1;
        if (lastTimestamp) {
          let startTimestamp1;
          if (lastTimestamp != null) {
            startTimestamp1 = lastTimestamp.startTimestamp;
          }
          lastTimestamp = startTimestamp1;
        }
        if (!lastTimestamp) {
          lastTimestamp = arg2;
        }
        toValue.startTimestamp = lastTimestamp;
      },
      toValue: obj,
      velocity: null,
      current: null,
      startValue: 0,
      callback: null,
      lastTimestamp: 0,
      startTimestamp: 0,
      zeta: 0,
      omega0: 0,
      omega1: 0,
      reduceMotion: null,
    };
    let num = obj.velocity;
    if (!num) {
      num = 0;
    }
    obj[3] = num;
    obj[4] = obj;
    obj[6] = closure_2;
    let obj2 = toValue(userConfig[1]);
    const tmp6 = toValue;
    const tmp7 = userConfig;
    const tmp8 = obj;
    obj[12] = toValue(userConfig[0]).getReduceMotionForAnimation(obj.reduceMotion);
    return obj;
  };
  obj = {
    userConfig,
    checkIfConfigIsValid: require("01735_checkIfConfigIsValid.js").checkIfConfigIsValid,
    underDampedSpringCalculations: require("01735_checkIfConfigIsValid.js").underDampedSpringCalculations,
    criticallyDampedSpringCalculations: require("01735_checkIfConfigIsValid.js").criticallyDampedSpringCalculations,
    isAnimationTerminatingCalculation: require("01735_checkIfConfigIsValid.js").isAnimationTerminatingCalculation,
    calculateNewMassToMatchDuration: require("01735_checkIfConfigIsValid.js").calculateNewMassToMatchDuration,
    initialCalculations: require("01735_checkIfConfigIsValid.js").initialCalculations,
    scaleZetaToMatchClamps: require("01735_checkIfConfigIsValid.js").scaleZetaToMatchClamps,
    toValue,
    callback,
    getReduceMotionForAnimation: require("01692_isValidLayoutAnimationProp.js").getReduceMotionForAnimation,
  };
  fn.__closure = obj;
  fn.__workletHash = 3229069592929;
  fn.__initData = closure_2;
  return obj.defineAnimation(toValue, fn);
};
fn.__closure = {
  defineAnimation: require("isValidLayoutAnimationProp").defineAnimation,
  checkIfConfigIsValid: require("checkIfConfigIsValid").checkIfConfigIsValid,
  underDampedSpringCalculations: require("checkIfConfigIsValid").underDampedSpringCalculations,
  criticallyDampedSpringCalculations: require("checkIfConfigIsValid").criticallyDampedSpringCalculations,
  isAnimationTerminatingCalculation: require("checkIfConfigIsValid").isAnimationTerminatingCalculation,
  calculateNewMassToMatchDuration: require("checkIfConfigIsValid").calculateNewMassToMatchDuration,
  initialCalculations: require("checkIfConfigIsValid").initialCalculations,
  scaleZetaToMatchClamps: require("checkIfConfigIsValid").scaleZetaToMatchClamps,
  getReduceMotionForAnimation: require("isValidLayoutAnimationProp").getReduceMotionForAnimation,
};
fn.__workletHash = 15976080506910;
fn.__initData = {
  code: "function pnpm_springTs1(toValue,userConfig,callback){const{defineAnimation,checkIfConfigIsValid,underDampedSpringCalculations,criticallyDampedSpringCalculations,isAnimationTerminatingCalculation,calculateNewMassToMatchDuration,initialCalculations,scaleZetaToMatchClamps,getReduceMotionForAnimation}=this.__closure;return defineAnimation(toValue,function(){'worklet';const defaultConfig={damping:10,mass:1,stiffness:100,overshootClamping:false,restDisplacementThreshold:0.01,restSpeedThreshold:2,velocity:0,duration:2000,dampingRatio:0.5,reduceMotion:undefined,clamp:undefined};const config={...defaultConfig,...userConfig,useDuration:!!(userConfig!==null&&userConfig!==void 0&&userConfig.duration||userConfig!==null&&userConfig!==void 0&&userConfig.dampingRatio),skipAnimation:false};config.skipAnimation=!checkIfConfigIsValid(config);if(config.duration===0){config.skipAnimation=true;}function springOnFrame(animation,now){const{toValue:toValue,startTimestamp:startTimestamp,current:current}=animation;const timeFromStart=now-startTimestamp;if(config.useDuration&&timeFromStart>=config.duration){animation.current=toValue;animation.lastTimestamp=0;return true;}if(config.skipAnimation){animation.current=toValue;animation.lastTimestamp=0;return true;}const{lastTimestamp:lastTimestamp,velocity:velocity}=animation;const deltaTime=Math.min(Math.max(now-lastTimestamp,0),64);animation.lastTimestamp=now;const t=deltaTime/1000;const v0=-velocity;const x0=toValue-current;const{zeta:zeta,omega0:omega0,omega1:omega1}=animation;const{position:newPosition,velocity:newVelocity}=zeta<1?underDampedSpringCalculations(animation,{zeta:zeta,v0:v0,x0:x0,omega0:omega0,omega1:omega1,t:t}):criticallyDampedSpringCalculations(animation,{v0:v0,x0:x0,omega0:omega0,t:t});animation.current=newPosition;animation.velocity=newVelocity;const{isOvershooting:isOvershooting,isVelocity:isVelocity,isDisplacement:isDisplacement}=isAnimationTerminatingCalculation(animation,config);const springIsNotInMove=isOvershooting||isVelocity&&isDisplacement;if(!config.useDuration&&springIsNotInMove){animation.velocity=0;animation.current=toValue;animation.lastTimestamp=0;return true;}return false;}function isTriggeredTwice(previousAnimation,animation){return(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.toValue)===animation.toValue&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.duration)===animation.duration&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.dampingRatio)===animation.dampingRatio;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.startValue=value;let mass=config.mass;const triggeredTwice=isTriggeredTwice(previousAnimation,animation);const duration=config.duration;const x0=triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startValue:Number(animation.toValue)-value;if(previousAnimation){animation.velocity=(triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity:(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity)+config.velocity)||0;}else{animation.velocity=config.velocity||0;}const toValueNum=Number(animation.toValue);if(toValueNum>value&&animation.velocity<0||toValueNum<value&&animation.velocity>0){animation.velocity=0;}if(triggeredTwice){animation.zeta=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.zeta)||0;animation.omega0=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega0)||0;animation.omega1=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega1)||0;}else{if(config.useDuration){const actualDuration=triggeredTwice?duration-(((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||0)-((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||0)):duration;config.duration=actualDuration;mass=calculateNewMassToMatchDuration(x0,config,animation.velocity);}const{zeta:zeta,omega0:omega0,omega1:omega1}=initialCalculations(mass,config);animation.zeta=zeta;animation.omega0=omega0;animation.omega1=omega1;if(config.clamp!==undefined){animation.zeta=scaleZetaToMatchClamps(animation,config.clamp);}}animation.lastTimestamp=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||now;animation.startTimestamp=triggeredTwice?(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||now:now;}return{onFrame:springOnFrame,onStart:onStart,toValue:toValue,velocity:config.velocity||0,current:toValue,startValue:0,callback:callback,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};});}",
};
arg5.withSpring = fn;
