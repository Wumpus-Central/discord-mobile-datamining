// _runtime/05420_getKeyboardAnimationConfigs.js
import _mod1652 from "metro/01652__.js";

const items = [
  {
    code: "(function pnpm_getKeyboardAnimationConfigsTs1(easing,duration){let[Easing]=this.__closure;switch(easing){case'easeIn':return{easing:Easing.in(Easing.ease),duration:duration};case'easeOut':return{easing:Easing.out(Easing.ease),duration:duration};case'easeInEaseOut':return{easing:Easing.inOut(Easing.ease),duration:duration};case'linear':return{easing:Easing.linear,duration:duration};case'keyboard':return{damping:500,stiffness:1000,mass:3,overshootClamping:true,restDisplacementThreshold:10,restSpeedThreshold:10};}})",
  },
  _mod1652.Easing,
];
let c0;
[tmp2, tmp3] = items;
function pnpm_getKeyboardAnimationConfigsTs1(keyboard, duration) {
  if ("easeIn" === keyboard) {
    const obj2 = { easing: _undefined.in(_undefined.ease), duration };
    return obj2;
  } else if ("easeOut" === keyboard) {
    const obj3 = { easing: _undefined.out(_undefined.ease), duration };
    return obj3;
  } else if ("easeInEaseOut" === keyboard) {
    const obj4 = { easing: _undefined.inOut(_undefined.ease), duration };
    return obj4;
  } else if ("linear" === keyboard) {
    const obj = { easing: _undefined.linear, duration };
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
}
const items1 = [tmp3];
pnpm_getKeyboardAnimationConfigsTs1.__closure = items1;
pnpm_getKeyboardAnimationConfigsTs1.__workletHash = 3250606586393;
pnpm_getKeyboardAnimationConfigsTs1.__initData = tmp2;

export const getKeyboardAnimationConfigs = pnpm_getKeyboardAnimationConfigsTs1;
