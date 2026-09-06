// === Module 6647: ? ===

// Module 6647
import cancelAnimation from "cancelAnimation" /* 1636 */;

require = fn;
const dependencyMap = arg6;
fn = function n(keyboard, value) {
  if ("easeIn" === keyboard) {
    let obj = { easing: null, duration: null };
    const Easing3 = cancelAnimation.Easing;
    obj.easing = Easing3.in(cancelAnimation.Easing.ease);
    obj.duration = value;
    return obj;
  } else if ("easeOut" === keyboard) {
    obj = { easing: null, duration: null };
    const Easing2 = cancelAnimation.Easing;
    obj.easing = Easing2.out(cancelAnimation.Easing.ease);
    obj.duration = value;
    return obj;
  } else if ("easeInEaseOut" === keyboard) {
    const obj1 = { easing: null, duration: null };
    const Easing = cancelAnimation.Easing;
    obj1.easing = Easing.inOut(cancelAnimation.Easing.ease);
    obj1.duration = value;
    return obj1;
  } else if ("linear" === keyboard) {
    obj = { easing: cancelAnimation.Easing.linear, duration: value };
    return obj;
  } else if ("keyboard" === keyboard) {
    return { damping: 500, stiffness: 1000, mass: 3, overshootClamping: true, restDisplacementThreshold: 10, restSpeedThreshold: 10 };
  }
};
fn.__closure = { Easing: fn(1636).Easing };
fn.__workletHash = 10639588577824;
fn.__initData = { code: "function pnpm_getKeyboardAnimationConfigsTs1(easing,duration){const{Easing}=this.__closure;switch(easing){case'easeIn':return{easing:Easing.in(Easing.ease),duration:duration};case'easeOut':return{easing:Easing.out(Easing.ease),duration:duration};case'easeInEaseOut':return{easing:Easing.inOut(Easing.ease),duration:duration};case'linear':return{easing:Easing.linear,duration:duration};case'keyboard':return{damping:500,stiffness:1000,mass:3,overshootClamping:true,restDisplacementThreshold:10,restSpeedThreshold:10};}}" };

export const getKeyboardAnimationConfigs = fn;