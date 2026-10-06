// === Module 1725: ? ===

// Module 1725
import _mod1683 from "module_1683" /* 1683 */;
import _mod1726 from "module_1726" /* 1726 */;

const require = globalThis.__r;
let _require, dependencyMap;

let __initData = { code: "function pnpm_springTs2(){const{userConfig,checkIfConfigIsValid,underDampedSpringCalculations,criticallyDampedSpringCalculations,isAnimationTerminatingCalculation,calculateNewMassToMatchDuration,initialCalculations,scaleZetaToMatchClamps,toValue,callback,getReduceMotionForAnimation}=this.__closure;var _userConfig,_userConfig2;const defaultConfig={damping:10,mass:1,stiffness:100,overshootClamping:false,restDisplacementThreshold:0.01,restSpeedThreshold:2,velocity:0,duration:2000,dampingRatio:0.5,reduceMotion:undefined,clamp:undefined};const config={...defaultConfig,...userConfig,useDuration:!!((_userConfig=userConfig)!==null&&_userConfig!==void 0&&_userConfig.duration||(_userConfig2=userConfig)!==null&&_userConfig2!==void 0&&_userConfig2.dampingRatio),skipAnimation:false};config.skipAnimation=!checkIfConfigIsValid(config);if(config.duration===0){config.skipAnimation=true;}function springOnFrame(animation,now){const{toValue:toValue,startTimestamp:startTimestamp,current:current}=animation;const timeFromStart=now-startTimestamp;if(config.useDuration&&timeFromStart>=config.duration){animation.current=toValue;animation.lastTimestamp=0;return true;}if(config.skipAnimation){animation.current=toValue;animation.lastTimestamp=0;return true;}const{lastTimestamp:lastTimestamp,velocity:velocity}=animation;const deltaTime=Math.min(Math.max(now-lastTimestamp,0),64);animation.lastTimestamp=now;const t=deltaTime/1000;const v0=-velocity;const x0=toValue-current;const{zeta:zeta,omega0:omega0,omega1:omega1}=animation;const{position:newPosition,velocity:newVelocity}=zeta<1?underDampedSpringCalculations(animation,{zeta:zeta,v0:v0,x0:x0,omega0:omega0,omega1:omega1,t:t}):criticallyDampedSpringCalculations(animation,{v0:v0,x0:x0,omega0:omega0,t:t});animation.current=newPosition;animation.velocity=newVelocity;const{isOvershooting:isOvershooting,isVelocity:isVelocity,isDisplacement:isDisplacement}=isAnimationTerminatingCalculation(animation,config);const springIsNotInMove=isOvershooting||isVelocity&&isDisplacement;if(!config.useDuration&&springIsNotInMove){animation.velocity=0;animation.current=toValue;animation.lastTimestamp=0;return true;}return false;}function isTriggeredTwice(previousAnimation,animation){return(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.toValue)===animation.toValue&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.duration)===animation.duration&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.dampingRatio)===animation.dampingRatio;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.startValue=value;let mass=config.mass;const triggeredTwice=isTriggeredTwice(previousAnimation,animation);const duration=config.duration;const x0=triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startValue:Number(animation.toValue)-value;if(previousAnimation){animation.velocity=(triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity:(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity)+config.velocity)||0;}else{animation.velocity=config.velocity||0;}const toValueNum=Number(animation.toValue);if(toValueNum>value&&animation.velocity<0||toValueNum<value&&animation.velocity>0){animation.velocity=0;}if(triggeredTwice){animation.zeta=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.zeta)||0;animation.omega0=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega0)||0;animation.omega1=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega1)||0;}else{if(config.useDuration){const actualDuration=triggeredTwice?duration-(((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||0)-((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||0)):duration;config.duration=actualDuration;mass=calculateNewMassToMatchDuration(x0,config,animation.velocity);}const{zeta:zeta,omega0:omega0,omega1:omega1}=initialCalculations(mass,config);animation.zeta=zeta;animation.omega0=omega0;animation.omega1=omega1;if(config.clamp!==undefined){animation.zeta=scaleZetaToMatchClamps(animation,config.clamp);}}animation.lastTimestamp=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||now;animation.startTimestamp=triggeredTwice?(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||now:now;}return{onFrame:springOnFrame,onStart:onStart,toValue:toValue,velocity:config.velocity||0,current:toValue,startValue:0,callback:callback,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};}" };
let fn = function n(toValue, userConfig, callback) {
  _require = toValue;
  dependencyMap = userConfig;
  __initData = callback;
  let obj = require("module_1683");
  const fn = function u() {
    let num;
    let obj;
    let obj2;
    let tmp4;
    let tmp6Result;
    obj = { damping: 10, mass: 1, stiffness: 100, overshootClamping: false, restDisplacementThreshold: 0.01, restSpeedThreshold: 2, velocity: 0, duration: 2000, dampingRatio: 0.5, reduceMotion: "constructor", clamp: "keys", useDuration: !tmp4, skipAnimation: !obj2.checkIfConfigIsValid(obj) };
    const merged = Object.assign(userConfig);
    let duration;
    if (userConfig != null) {
      duration = userConfig.duration;
    }
    tmp4 = !duration;
    if (tmp4) {
      let dampingRatio;
      if (userConfig != null) {
        dampingRatio = userConfig.dampingRatio;
      }
      tmp4 = !dampingRatio;
    }
    obj2 = _mod1726;
    if (0 === obj.duration) {
      obj.skipAnimation = true;
    }
    let obj3 = {
      onFrame: function springOnFrame(toValue, lastTimestamp) {
        let isOvershooting;
        let isVelocity;
        let omega0;
        let zeta;
        toValue = toValue.toValue;
        const current = toValue.current;
        if (obj.useDuration) {
          if (tmp >= obj.duration) {
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
          let result1;
          const _Math = Math;
          const _Math2 = Math;
          const velocity = toValue.velocity;
          toValue.lastTimestamp = lastTimestamp;
          const result = Math.min(Math.max(lastTimestamp - toValue.lastTimestamp, 0), 64) / 1000;
          const diff = toValue - current;
          ({ zeta, omega0 } = toValue);
          if (zeta < 1) {
            const obj2 = { zeta, v0: -velocity, x0: diff, omega0, omega1: tmp7, t: result };
            const obj3 = closure_2_0(userConfig[1]);
            result1 = obj3.underDampedSpringCalculations(toValue, obj2);
          } else {
            obj = closure_2_0(userConfig[1]);
            const obj4 = { v0: -velocity, x0: diff, omega0, t: result };
            result1 = obj.criticallyDampedSpringCalculations(toValue, obj4);
          }
          ({ position: toValue.current, velocity: toValue.velocity } = result1);
          const obj5 = closure_2_0(userConfig[1]);
          const result2 = obj5.isAnimationTerminatingCalculation(toValue, tmp2);
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
        let diff;
        let tmp10;
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
          let duration1;
          if (lastTimestamp != null) {
            duration1 = lastTimestamp.duration;
          }
          lastTimestamp = duration1 === toValue.duration;
        }
        if (lastTimestamp) {
          let dampingRatio;
          if (lastTimestamp != null) {
            dampingRatio = lastTimestamp.dampingRatio;
          }
          lastTimestamp = dampingRatio === toValue.dampingRatio;
        }
        const duration = tmp.duration;
        if (lastTimestamp) {
          let startValue;
          if (lastTimestamp != null) {
            startValue = lastTimestamp.startValue;
          }
          diff = startValue;
        } else {
          const _Number = Number;
          diff = Number(toValue.toValue) - current;
        }
        if (lastTimestamp) {
          let num;
          if (lastTimestamp) {
            let velocity;
            if (lastTimestamp != null) {
              velocity = lastTimestamp.velocity;
            }
            num = velocity;
          } else {
            let velocity1;
            if (lastTimestamp != null) {
              velocity1 = lastTimestamp.velocity;
            }
            num = velocity1 + tmp.velocity;
          }
          if (!num) {
            num = 0;
          }
          tmp10 = num;
        } else {
          tmp10 = tmp.velocity || 0;
        }
        toValue.velocity = tmp10;
        const NumberResult = Number(toValue.toValue);
        let tmp15 = NumberResult > current && toValue.velocity < 0;
        if (!tmp15) {
          tmp15 = NumberResult < current && toValue.velocity > 0;
          const tmp16 = NumberResult < current && toValue.velocity > 0;
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
          if (obj.useDuration) {
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
            obj.duration = diff1;
            obj = closure_2_0(userConfig[1]);
            mass = obj.calculateNewMassToMatchDuration(diff, tmp, toValue.velocity);
          }
          const obj2 = closure_2_0(userConfig[1]);
          ({ zeta: toValue.zeta, omega0: toValue.omega0, omega1: toValue.omega1 } = obj2.initialCalculations(mass, obj));
          obj2.initialCalculations(mass, obj);
          if (undefined !== obj.clamp) {
            const obj3 = closure_2_0(userConfig[1]);
            toValue.zeta = obj3.scaleZetaToMatchClamps(toValue, obj.clamp);
          }
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
      toValue,
      velocity: num,
      current: toValue,
      startValue: 0,
      callback,
      lastTimestamp: 0,
      startTimestamp: 0,
      zeta: 0,
      omega0: 0,
      omega1: 0,
      reduceMotion: tmp6Result.getReduceMotionForAnimation(obj.reduceMotion)
    };
    num = obj.velocity || 0;
    tmp6Result = _mod1683;
    return obj3;
  };
  let obj2 = { userConfig, checkIfConfigIsValid: require("module_1726").checkIfConfigIsValid, underDampedSpringCalculations: require("module_1726").underDampedSpringCalculations, criticallyDampedSpringCalculations: require("module_1726").criticallyDampedSpringCalculations, isAnimationTerminatingCalculation: require("module_1726").isAnimationTerminatingCalculation, calculateNewMassToMatchDuration: require("module_1726").calculateNewMassToMatchDuration, initialCalculations: require("module_1726").initialCalculations, scaleZetaToMatchClamps: require("module_1726").scaleZetaToMatchClamps, toValue, callback, getReduceMotionForAnimation: require("module_1683").getReduceMotionForAnimation };
  fn.__closure = obj2;
  fn.__workletHash = 3229069592929;
  fn.__initData = __initData;
  return obj.defineAnimation(toValue, fn);
};
let obj = { defineAnimation: _mod1683.defineAnimation, checkIfConfigIsValid: _mod1726.checkIfConfigIsValid, underDampedSpringCalculations: _mod1726.underDampedSpringCalculations, criticallyDampedSpringCalculations: _mod1726.criticallyDampedSpringCalculations, isAnimationTerminatingCalculation: _mod1726.isAnimationTerminatingCalculation, calculateNewMassToMatchDuration: _mod1726.calculateNewMassToMatchDuration, initialCalculations: _mod1726.initialCalculations, scaleZetaToMatchClamps: _mod1726.scaleZetaToMatchClamps, getReduceMotionForAnimation: _mod1683.getReduceMotionForAnimation };
fn.__closure = obj;
fn.__workletHash = 15976080506910;
fn.__initData = { code: "function pnpm_springTs1(toValue,userConfig,callback){const{defineAnimation,checkIfConfigIsValid,underDampedSpringCalculations,criticallyDampedSpringCalculations,isAnimationTerminatingCalculation,calculateNewMassToMatchDuration,initialCalculations,scaleZetaToMatchClamps,getReduceMotionForAnimation}=this.__closure;return defineAnimation(toValue,function(){'worklet';const defaultConfig={damping:10,mass:1,stiffness:100,overshootClamping:false,restDisplacementThreshold:0.01,restSpeedThreshold:2,velocity:0,duration:2000,dampingRatio:0.5,reduceMotion:undefined,clamp:undefined};const config={...defaultConfig,...userConfig,useDuration:!!(userConfig!==null&&userConfig!==void 0&&userConfig.duration||userConfig!==null&&userConfig!==void 0&&userConfig.dampingRatio),skipAnimation:false};config.skipAnimation=!checkIfConfigIsValid(config);if(config.duration===0){config.skipAnimation=true;}function springOnFrame(animation,now){const{toValue:toValue,startTimestamp:startTimestamp,current:current}=animation;const timeFromStart=now-startTimestamp;if(config.useDuration&&timeFromStart>=config.duration){animation.current=toValue;animation.lastTimestamp=0;return true;}if(config.skipAnimation){animation.current=toValue;animation.lastTimestamp=0;return true;}const{lastTimestamp:lastTimestamp,velocity:velocity}=animation;const deltaTime=Math.min(Math.max(now-lastTimestamp,0),64);animation.lastTimestamp=now;const t=deltaTime/1000;const v0=-velocity;const x0=toValue-current;const{zeta:zeta,omega0:omega0,omega1:omega1}=animation;const{position:newPosition,velocity:newVelocity}=zeta<1?underDampedSpringCalculations(animation,{zeta:zeta,v0:v0,x0:x0,omega0:omega0,omega1:omega1,t:t}):criticallyDampedSpringCalculations(animation,{v0:v0,x0:x0,omega0:omega0,t:t});animation.current=newPosition;animation.velocity=newVelocity;const{isOvershooting:isOvershooting,isVelocity:isVelocity,isDisplacement:isDisplacement}=isAnimationTerminatingCalculation(animation,config);const springIsNotInMove=isOvershooting||isVelocity&&isDisplacement;if(!config.useDuration&&springIsNotInMove){animation.velocity=0;animation.current=toValue;animation.lastTimestamp=0;return true;}return false;}function isTriggeredTwice(previousAnimation,animation){return(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.toValue)===animation.toValue&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.duration)===animation.duration&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.dampingRatio)===animation.dampingRatio;}function onStart(animation,value,now,previousAnimation){animation.current=value;animation.startValue=value;let mass=config.mass;const triggeredTwice=isTriggeredTwice(previousAnimation,animation);const duration=config.duration;const x0=triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startValue:Number(animation.toValue)-value;if(previousAnimation){animation.velocity=(triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity:(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity)+config.velocity)||0;}else{animation.velocity=config.velocity||0;}const toValueNum=Number(animation.toValue);if(toValueNum>value&&animation.velocity<0||toValueNum<value&&animation.velocity>0){animation.velocity=0;}if(triggeredTwice){animation.zeta=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.zeta)||0;animation.omega0=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega0)||0;animation.omega1=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega1)||0;}else{if(config.useDuration){const actualDuration=triggeredTwice?duration-(((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||0)-((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||0)):duration;config.duration=actualDuration;mass=calculateNewMassToMatchDuration(x0,config,animation.velocity);}const{zeta:zeta,omega0:omega0,omega1:omega1}=initialCalculations(mass,config);animation.zeta=zeta;animation.omega0=omega0;animation.omega1=omega1;if(config.clamp!==undefined){animation.zeta=scaleZetaToMatchClamps(animation,config.clamp);}}animation.lastTimestamp=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||now;animation.startTimestamp=triggeredTwice?(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||now:now;}return{onFrame:springOnFrame,onStart:onStart,toValue:toValue,velocity:config.velocity||0,current:toValue,startValue:0,callback:callback,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};});}" };

export const withSpring = fn;