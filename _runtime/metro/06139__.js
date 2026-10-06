// === Module 6139: ? ===

// Module 6139
import _mod1643 from "module_1643" /* 1643 */;

const fn = function n(keyboard, value) {
  let Easing;
  let Easing2;
  let Easing3;
  if ("easeIn" === keyboard) {
    const obj2 = { easing: Easing3.in(_mod1643.Easing.ease), duration: value };
    Easing3 = _mod1643.Easing;
    return obj2;
  } else if ("easeOut" === keyboard) {
    const obj3 = { easing: Easing2.out(_mod1643.Easing.ease), duration: value };
    Easing2 = _mod1643.Easing;
    return obj3;
  } else if ("easeInEaseOut" === keyboard) {
    const obj4 = { easing: Easing.inOut(_mod1643.Easing.ease), duration: value };
    Easing = _mod1643.Easing;
    return obj4;
  } else if ("linear" === keyboard) {
    const obj = { easing: _mod1643.Easing.linear, duration: value };
    return obj;
  } else if ("keyboard" === keyboard) {
    return { damping: 500, stiffness: 1000, mass: 3, overshootClamping: true, restDisplacementThreshold: 10, restSpeedThreshold: 10 };
  }
};
let obj = { Easing: _mod1643.Easing };
fn.__closure = obj;
fn.__workletHash = 10639588577824;
fn.__initData = { code: "function pnpm_getKeyboardAnimationConfigsTs1(easing,duration){const{Easing}=this.__closure;switch(easing){case'easeIn':return{easing:Easing.in(Easing.ease),duration:duration};case'easeOut':return{easing:Easing.out(Easing.ease),duration:duration};case'easeInEaseOut':return{easing:Easing.inOut(Easing.ease),duration:duration};case'linear':return{easing:Easing.linear,duration:duration};case'keyboard':return{damping:500,stiffness:1000,mass:3,overshootClamping:true,restDisplacementThreshold:10,restSpeedThreshold:10};}}" };

export const getKeyboardAnimationConfigs = fn;