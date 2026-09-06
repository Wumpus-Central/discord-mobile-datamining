// _runtime/01688_linear.js
import calcBezier from "01689_calcBezier.js";
import _slicedToArray from "metro/00032__.js";

require = arg1;
const __initData = { code: "function linear_Pnpm_EasingTs1(t){return t;}" };
const __initData2 = {
  code: "function ease_Pnpm_EasingTs2(t){const{Bezier}=this.__closure;return Bezier(0.42,0,1,1)(t);}",
};
const __initData3 = { code: "function quad_Pnpm_EasingTs3(t){return t*t;}" };
const tmp3 = (() => {
  function linear(arg0) {
    return arg0;
  }
  linear.__closure = {};
  linear.__workletHash = 1364160462572;
  linear.__initData = __initData;
  return linear;
})();
const __initData4 = { code: "function cubic_Pnpm_EasingTs4(t){return t*t*t;}" };
const tmp4 = (() => {
  function ease(arg0) {
    return calcBezier.Bezier(0.42, 0, 1, 1)(arg0);
  }
  ease.__closure = { Bezier: calcBezier.Bezier };
  ease.__workletHash = 1401633715672;
  ease.__initData = __initData2;
  return ease;
})();
const __initData5 = { code: "function poly_Pnpm_EasingTs5(n){return function(t){'worklet';return Math.pow(t,n);};}" };
let closure_7 = { code: "function pnpm_EasingTs6(t){const{n}=this.__closure;return Math.pow(t,n);}" };
const tmp5 = (() => {
  function quad(arg0) {
    return arg0 * arg0;
  }
  quad.__closure = {};
  quad.__workletHash = 10142286247628;
  quad.__initData = __initData3;
  return quad;
})();
const __initData6 = { code: "function sin_Pnpm_EasingTs7(t){return 1-Math.cos(t*Math.PI/2);}" };
const tmp6 = (() => {
  function cubic(arg0) {
    return arg0 * arg0 * arg0;
  }
  cubic.__closure = {};
  cubic.__workletHash = 10979714220746;
  cubic.__initData = __initData4;
  return cubic;
})();
const __initData7 = { code: "function circle_Pnpm_EasingTs8(t){return 1-Math.sqrt(1-t*t);}" };
const tmp7 = (() => {
  function poly(n) {
    closure_0 = n;
    const fn = function n(sum) {
      return Math.pow(sum, closure_0);
    };
    fn.__closure = { n };
    fn.__workletHash = 14203338349806;
    fn.__initData = __initData;
    return fn;
  }
  poly.__closure = {};
  poly.__workletHash = 8340356940855;
  poly.__initData = __initData5;
  return poly;
})();
const __initData8 = { code: "function exp_Pnpm_EasingTs9(t){return Math.pow(2,10*(t-1));}" };
const tmp8 = (() => {
  function sin(arg0) {
    return 1 - Math.cos((arg0 * Math.PI) / 2);
  }
  sin.__closure = {};
  sin.__workletHash = 2581928095407;
  sin.__initData = __initData6;
  return sin;
})();
const __initData9 = {
  code: "function elastic_Pnpm_EasingTs10(bounciness=1){const p=bounciness*Math.PI;return function(t){'worklet';return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*p);};}",
};
let closure_12 = {
  code: "function pnpm_EasingTs11(t){const{p}=this.__closure;return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*p);}",
};
const tmp9 = (() => {
  function circle(arg0) {
    return 1 - Math.sqrt(1 - arg0 * arg0);
  }
  circle.__closure = {};
  circle.__workletHash = 1916826022255;
  circle.__initData = __initData7;
  return circle;
})();
const __initData10 = {
  code: "function back_Pnpm_EasingTs12(s=1.70158){return function(t){'worklet';return t*t*((s+1)*t-s);};}",
};
let closure_14 = { code: "function pnpm_EasingTs13(t){const{s}=this.__closure;return t*t*((s+1)*t-s);}" };
const tmp10 = (() => {
  function exp(arg0) {
    return Math.pow(2, 10 * (arg0 - 1));
  }
  exp.__closure = {};
  exp.__workletHash = 1613943935211;
  exp.__initData = __initData8;
  return exp;
})();
const __initData11 = {
  code: "function bounce_Pnpm_EasingTs14(t){if(t<1/2.75){return 7.5625*t*t;}if(t<2/2.75){const t2=t-1.5/2.75;return 7.5625*t2*t2+0.75;}if(t<2.5/2.75){const t2=t-2.25/2.75;return 7.5625*t2*t2+0.9375;}const t2=t-2.625/2.75;return 7.5625*t2*t2+0.984375;}",
};
const tmp11 = (() => {
  function elastic() {
    let num = arg0;
    if (arg0 === undefined) {
      num = 1;
    }
    const result = num * Math.PI;
    c0 = result;
    const fn = function n(arg0) {
      return 1 - Math.pow(Math.cos((arg0 * Math.PI) / 2), 3) * Math.cos(arg0 * c0);
    };
    fn.__closure = { p: result };
    fn.__workletHash = 5150660709939;
    fn.__initData = __initData;
    return fn;
  }
  elastic.__closure = {};
  elastic.__workletHash = 10979580678533;
  elastic.__initData = __initData9;
  return elastic;
})();
const __initData12 = {
  code: "function bezier_Pnpm_EasingTs15(x1,y1,x2,y2){const{Bezier}=this.__closure;return{factory:function(){'worklet';return Bezier(x1,y1,x2,y2);}};}",
};
let closure_17 = {
  code: "function pnpm_EasingTs16(){const{Bezier,x1,y1,x2,y2}=this.__closure;return Bezier(x1,y1,x2,y2);}",
};
const tmp12 = (() => {
  function back() {
    let num = arg0;
    if (arg0 === undefined) {
      num = 1.70158;
    }
    const fn = function n(arg0) {
      return arg0 * arg0 * ((num + 1) * arg0 - num);
    };
    fn.__closure = { s: num };
    fn.__workletHash = 16684305377199;
    fn.__initData = __initData;
    return fn;
  }
  back.__closure = {};
  back.__workletHash = 16940891371724;
  back.__initData = __initData10;
  return back;
})();
const __initData13 = {
  code: "function bezierFn_Pnpm_EasingTs17(x1,y1,x2,y2){const{Bezier}=this.__closure;return Bezier(x1,y1,x2,y2);}",
};
const tmp13 = (() => {
  function bounce(arg0) {
    if (arg0 < 0.36363636363636365) {
      return 7.5625 * arg0 * arg0;
    } else if (arg0 < 0.7272727272727273) {
      const diff = arg0 - 0.5454545454545454;
      return 7.5625 * diff * diff + 0.75;
    } else if (arg0 < 0.9090909090909091) {
      const diff1 = arg0 - 0.8181818181818182;
      return 7.5625 * diff1 * diff1 + 0.9375;
    } else {
      const diff2 = arg0 - 0.9545454545454546;
      return 7.5625 * diff2 * diff2 + 0.984375;
    }
  }
  bounce.__closure = {};
  bounce.__workletHash = 2135448560481;
  bounce.__initData = __initData11;
  return bounce;
})();
const __initData14 = { code: "function in__Pnpm_EasingTs18(easing){return easing;}" };
const tmp14 = (() => {
  function bezier(x1, y1, x2, y2) {
    closure_0 = x1;
    dependencyMap = y1;
    closure_2 = x2;
    closure_3 = y2;
    let obj = { factory: null };
    const fn = function _() {
      return calcBezier.Bezier(closure_0, closure_1, closure_2, closure_3);
    };
    obj = { Bezier: closure_0(1689).Bezier, x1, y1, x2, y2 };
    fn.__closure = obj;
    fn.__workletHash = 4393056133737;
    fn.__initData = __initData;
    obj.factory = fn;
    return obj;
  }
  bezier.__closure = { Bezier: calcBezier.Bezier };
  bezier.__workletHash = 9084654739329;
  bezier.__initData = __initData12;
  return bezier;
})();
const __initData15 = {
  code: "function out_Pnpm_EasingTs19(easing){return function(t){'worklet';return 1-easing(1-t);};}",
};
let closure_21 = { code: "function pnpm_EasingTs20(t){const{easing}=this.__closure;return 1-easing(1-t);}" };
const tmp15 = (() => {
  function bezierFn(mX1, mY1, mX2, mY2) {
    return calcBezier.Bezier(mX1, mY1, mX2, mY2);
  }
  bezierFn.__closure = { Bezier: calcBezier.Bezier };
  bezierFn.__workletHash = 13829274299696;
  bezierFn.__initData = __initData13;
  return bezierFn;
})();
const __initData16 = {
  code: "function inOut_Pnpm_EasingTs21(easing){return function(t){'worklet';if(t<0.5){return easing(t*2)/2;}return 1-easing((1-t)*2)/2;};}",
};
let closure_23 = {
  code: "function pnpm_EasingTs22(t){const{easing}=this.__closure;if(t<0.5){return easing(t*2)/2;}return 1-easing((1-t)*2)/2;}",
};
const tmp16 = (() => {
  function in_(arg0) {
    return arg0;
  }
  in_.__closure = {};
  in_.__workletHash = 694257484177;
  in_.__initData = __initData14;
  return in_;
})();
const __initData17 = {
  code: "function steps_Pnpm_EasingTs23(n=10,roundToNextStep=true){return function(t){'worklet';const value=Math.min(Math.max(t,0),1)*n;if(roundToNextStep){return Math.ceil(value)/n;}return Math.floor(value)/n;};}",
};
let closure_25 = {
  code: "function pnpm_EasingTs24(t){const{n,roundToNextStep}=this.__closure;const value=Math.min(Math.max(t,0),1)*n;if(roundToNextStep){return Math.ceil(value)/n;}return Math.floor(value)/n;}",
};
let obj = {
  linear: tmp3,
  ease: tmp4,
  quad: tmp5,
  cubic: tmp6,
  poly: tmp7,
  sin: tmp8,
  circle: tmp9,
  exp: tmp10,
  elastic: tmp11,
  back: tmp12,
  bounce: tmp13,
  bezier: tmp14,
  bezierFn: tmp15,
  steps: null,
  in: null,
  out: null,
  inOut: null,
};
const tmp17 = (() => {
  function out(easing) {
    const fn = function n(arg0) {
      return 1 - easing(1 - arg0);
    };
    fn.__closure = { easing };
    fn.__workletHash = 13160996716928;
    fn.__initData = __initData;
    return fn;
  }
  out.__closure = {};
  out.__workletHash = 12515331118228;
  out.__initData = __initData15;
  return out;
})();
obj.steps = (() => {
  function steps() {
    let num = arg0;
    if (arg0 === undefined) {
      num = 10;
    }
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    const fn = function o(arg0) {
      const result = Math.min(Math.max(arg0, 0), 1) * num;
      const _Math = Math;
      if (flag) {
        let result1 = _Math.ceil(result) / tmp;
      } else {
        result1 = _Math.floor(result) / tmp;
      }
      return result1;
    };
    fn.__closure = { n: num, roundToNextStep: flag };
    fn.__workletHash = 7402810856406;
    fn.__initData = __initData;
    return fn;
  }
  steps.__closure = {};
  steps.__workletHash = 14069361825623;
  steps.__initData = __initData17;
  return steps;
})();
obj.in = tmp16;
obj.out = tmp17;
obj.inOut = (() => {
  function inOut(easing) {
    const fn = function n(arg0) {
      if (arg0 < 0.5) {
        let result = easing(2 * arg0) / 2;
      } else {
        result = 1 - easing(2 * (1 - arg0)) / 2;
      }
      return result;
    };
    fn.__closure = { easing };
    fn.__workletHash = 10095021666171;
    fn.__initData = __initData;
    return fn;
  }
  inOut.__closure = {};
  inOut.__workletHash = 7477395191617;
  inOut.__initData = __initData16;
  return inOut;
})();
const SymbolResult = Symbol("easingName");
const entries = Object.entries(obj);
const iter = entries[Symbol.iterator]();
while (iter !== undefined) {
  let importDefaultResultResult = _slicedToArray(iter.next(), 2);
  let _Object = Object;
  obj = { value: importDefaultResultResult[0], configurable: false, enumerable: false, writable: false };
  let definePropertyResult1 = Object.defineProperty(importDefaultResultResult[1], SymbolResult, obj);
  continue;
}

export const EasingNameSymbol = SymbolResult;
export const Easing = obj;
