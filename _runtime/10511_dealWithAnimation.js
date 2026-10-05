// _runtime/10511_dealWithAnimation.js
import _mod1643 from "metro/01643__.js";

let closure_2 = {
  code: "function pnpm_dealWithAnimationTs2(isFinished){const{cb}=this.__closure;return cb(isFinished);}",
};
let closure_3 = {
  code: "function pnpm_dealWithAnimationTs3(isFinished){const{cb}=this.__closure;return cb(isFinished);}",
};
function dealWithAnimation(type) {
  type = type.type;
  if ("spring" === type) {
    return (arg0, cb) => {
      type = cb;
      const fn = function o(arg0) {
        return closure_0(arg0);
      };
      fn.__closure = { cb };
      fn.__workletHash = 5381689684735;
      fn.__initData = __initData;
      const obj = _mod1643;
      return obj.withSpring(arg0, type.config, fn);
    };
  } else {
    return "timing" === type
      ? (arg0, cb) => {
          type = cb;
          const fn = function o(arg0) {
            return closure_0(arg0);
          };
          fn.__closure = { cb };
          fn.__workletHash = 457847741022;
          fn.__initData = __initData2;
          const obj = _mod1643;
          return obj.withTiming(arg0, type.config, fn);
        }
      : undefined;
  }
}
let obj = { withSpring: _mod1643.withSpring, withTiming: _mod1643.withTiming };
dealWithAnimation.__closure = obj;
dealWithAnimation.__workletHash = 2113361159301;
dealWithAnimation.__initData = {
  code: 'function dealWithAnimation_Pnpm_dealWithAnimationTs1(withAnimation){const{withSpring,withTiming}=this.__closure;switch(withAnimation.type){case"spring":return function(value,cb){return withSpring(value,withAnimation.config,function(isFinished){return cb(isFinished);});};case"timing":return function(value,cb){return withTiming(value,withAnimation.config,function(isFinished){return cb(isFinished);});};}}',
};

export { dealWithAnimation };
