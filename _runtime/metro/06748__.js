// _runtime/metro/06748__.js
import cancelAnimation from "../01636_cancelAnimation.js";

require = fn;
const dependencyMap = arg6;
fn = function n(keyboard, value) {
  if ("easeIn" === keyboard) {
    const obj2 = { easing: null, duration: null };
    const Easing3 = cancelAnimation.Easing;
    obj2.easing = Easing3.in(cancelAnimation.Easing.ease);
    obj2.duration = value;
    return obj2;
  } else if ("easeOut" === keyboard) {
    const obj3 = { easing: null, duration: null };
    const Easing2 = cancelAnimation.Easing;
    obj3.easing = Easing2.out(cancelAnimation.Easing.ease);
    obj3.duration = value;
    return obj3;
  } else if ("easeInEaseOut" === keyboard) {
    const obj4 = { easing: null, duration: null };
    const Easing = cancelAnimation.Easing;
    obj4.easing = Easing.inOut(cancelAnimation.Easing.ease);
    obj4.duration = value;
    return obj4;
  } else if ("linear" === keyboard) {
    const obj = { easing: cancelAnimation.Easing.linear, duration: value };
    return obj;
  } else if ("keyboard" === keyboard) {
    return {
      damping: 500,
      stiffness: 1000,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 10,
      restSpeedThreshold: 10,
    };
  }
};
fn.__closure = { Easing: fn(1636).Easing };
fn.__workletHash = 10639588577824;
fn.__initData = {
  code: "function pnpm_getKeyboardAnimationConfigsTs1(easing,duration){const{Easing}=this.__closure;switch(easing){case'easeIn':return{easing:Easing.in(Easing.ease),duration:duration};case'easeOut':return{easing:Easing.out(Easing.ease),duration:duration};case'easeInEaseOut':return{easing:Easing.inOut(Easing.ease),duration:duration};case'linear':return{easing:Easing.linear,duration:duration};case'keyboard':return{damping:500,stiffness:1000,mass:3,overshootClamping:true,restDisplacementThreshold:10,restSpeedThreshold:10};}}",
};

export const getKeyboardAnimationConfigs = fn;
