// === Module 11709: dealWithAnimation ===

// Module 11709 (dealWithAnimation)
import _mod1655 from "module_1655" /* 1655 */;

let items = [{ code: "(function dealWithAnimation_Pnpm_dealWithAnimationTs3(withAnimation){let[withSpring,_worklet_13043395906693_init_data,withTiming,_worklet_7361757128774_init_data]=this.__closure;switch(withAnimation.type){case\"spring\":return function(value,cb){return withSpring(value,withAnimation.config,function pnpm_dealWithAnimationTs1Factory([_worklet_13043395906693_init_data,cb]){const pnpm_dealWithAnimationTs1=function(isFinished){return cb(isFinished);};pnpm_dealWithAnimationTs1.__closure=[cb];pnpm_dealWithAnimationTs1.__workletHash=13043395906693;pnpm_dealWithAnimationTs1.__initData=_worklet_13043395906693_init_data;return pnpm_dealWithAnimationTs1;}([_worklet_13043395906693_init_data,cb]));};case\"timing\":return function(value,cb){return withTiming(value,withAnimation.config,function pnpm_dealWithAnimationTs2Factory([_worklet_7361757128774_init_data,cb]){const pnpm_dealWithAnimationTs2=function(isFinished){return cb(isFinished);};pnpm_dealWithAnimationTs2.__closure=[cb];pnpm_dealWithAnimationTs2.__workletHash=7361757128774;pnpm_dealWithAnimationTs2.__initData=_worklet_7361757128774_init_data;return pnpm_dealWithAnimationTs2;}([_worklet_7361757128774_init_data,cb]));};}})" }, _mod1655.withSpring, { code: "(function pnpm_dealWithAnimationTs1(isFinished){let[cb]=this.__closure;return cb(isFinished);})" }, _mod1655.withTiming, { code: "(function pnpm_dealWithAnimationTs2(isFinished){let[cb]=this.__closure;return cb(isFinished);})" }];
let c0;
let c1;
let c2;
let c3;
[tmp2, tmp3, tmp4, tmp5, tmp6] = items;
function dealWithAnimation(type) {
  type = type.type;
  if ("spring" === type) {
    return (arg0, arg1) => {
      items = [c1, arg1];
      type = undefined;
      [tmp, tmp2] = items;
      function pnpm_dealWithAnimationTs1(arg0) {
        return _undefined(arg0);
      }
      const items1 = [tmp2];
      pnpm_dealWithAnimationTs1.__closure = items1;
      pnpm_dealWithAnimationTs1.__workletHash = 13043395906693;
      pnpm_dealWithAnimationTs1.__initData = tmp;
      return type(arg0, type.config, pnpm_dealWithAnimationTs1);
    };
  } else {
    return "timing" === type ? ((arg0, arg1) => {
      items = [c3, arg1];
      c0 = undefined;
      [tmp, tmp2] = items;
      function pnpm_dealWithAnimationTs2(arg0) {
        return _undefined(arg0);
      }
      const items1 = [tmp2];
      pnpm_dealWithAnimationTs2.__closure = items1;
      pnpm_dealWithAnimationTs2.__workletHash = 7361757128774;
      pnpm_dealWithAnimationTs2.__initData = tmp;
      return c2(arg0, type.config, pnpm_dealWithAnimationTs2);
    }) : undefined;
  }
}
let items1 = [tmp3, tmp4, tmp5, tmp6];
dealWithAnimation.__closure = items1;
dealWithAnimation.__workletHash = 14642296786830;
dealWithAnimation.__initData = tmp2;

export { dealWithAnimation };