// === Module 5609: n ===

// Module 5609 (n)
import cancelAnimation from "cancelAnimation" /* 1654 */;

require = arg1;
const dependencyMap = arg6;
const fn = function n(arg0, arg1) {
  if ("easeIn" === arg0) {
    let obj = { easing: null, duration: null };
    const Easing3 = cancelAnimation.Easing;
    obj[0] = Easing3.in(cancelAnimation.Easing.ease);
    obj[1] = arg1;
    return obj;
  } else if ("easeOut" === arg0) {
    obj = { easing: null, duration: null };
    const Easing2 = cancelAnimation.Easing;
    obj[0] = Easing2.out(cancelAnimation.Easing.ease);
    obj[1] = arg1;
    return obj;
  } else if ("easeInEaseOut" === arg0) {
    obj1 = { easing: null, duration: null };
    const Easing = cancelAnimation.Easing;
    obj1[0] = Easing.inOut(cancelAnimation.Easing.ease);
    obj1[1] = arg1;
    return obj1;
  } else if ("linear" === arg0) {
    obj = { easing: null, duration: null };
    obj[0] = cancelAnimation.Easing.linear;
    obj[1] = arg1;
    return obj;
  } else if ("keyboard" === arg0) {
    return { damping: 500, stiffness: 1000, mass: 3, overshootClamping: true, restDisplacementThreshold: 10, restSpeedThreshold: 10 };
  }
};
fn.__closure = { Easing: require("cancelAnimation").Easing };
fn.__workletHash = 10639588577824;
fn.__initData = { code: "function pnpm_getKeyboardAnimationConfigsTs1(easing,duration){const{Easing}=this.__closure;switch(easing){case'easeIn':return{easing:Easing.in(Easing.ease),duration:duration};case'easeOut':return{easing:Easing.out(Easing.ease),duration:duration};case'easeInEaseOut':return{easing:Easing.inOut(Easing.ease),duration:duration};case'linear':return{easing:Easing.linear,duration:duration};case'keyboard':return{damping:500,stiffness:1000,mass:3,overshootClamping:true,restDisplacementThreshold:10,restSpeedThreshold:10};}}" };
arg5.getKeyboardAnimationConfigs = fn;