// === Module 1861: Easing ===

// Module 1861 (Easing)
import _slicedToArray from "module_32" /* 32 */;

let items = [{ code: "(function linear_Pnpm_EasingTs1(t){return t;})" }];
let items1 = [{ code: "(function ease_Pnpm_EasingTs2(t){let[Bezier]=this.__closure;return Bezier(0.42,0,1,1)(t);})" }, fn(1862).Bezier];
let items2 = [{ code: "(function quad_Pnpm_EasingTs3(t){return t*t;})" }];
const tmp3 = (function linear_Pnpm_EasingTs1Factory(items) {
  [tmp] = items;
  function linear(arg0) {
    return arg0;
  }
  linear.__workletHash = 9200481781933;
  linear.__initData = tmp;
  return linear;
})(items);
const items3 = [{ code: "(function cubic_Pnpm_EasingTs4(t){return t*t*t;})" }];
const tmp4 = (function ease_Pnpm_EasingTs2Factory(items1) {
  [tmp, tmp2] = items1;
  function ease(arg0) {
    return closure_1_0(0.42, 0, 1, 1)(arg0);
  }
  items = [tmp2];
  ease.__closure = items;
  ease.__workletHash = 9971916457857;
  ease.__initData = tmp;
  return ease;
})(items1);
const items4 = [{ code: "(function poly_Pnpm_EasingTs6(n){let[_worklet_7031124713108_init_data]=this.__closure;return function poly_Pnpm_EasingTs6([_worklet_7031124713108_init_data,n]){const pnpm_EasingTs5=function(t){return Math.pow(t,n);};pnpm_EasingTs5.__closure=[n];pnpm_EasingTs5.__workletHash=7031124713108;pnpm_EasingTs5.__initData=_worklet_7031124713108_init_data;return pnpm_EasingTs5;}([_worklet_7031124713108_init_data,n]);})" }, { code: "(function pnpm_EasingTs5(t){let[n]=this.__closure;return Math.pow(t,n);})" }];
const tmp5 = (function quad_Pnpm_EasingTs3Factory(items2) {
  [tmp] = items2;
  function quad(arg0) {
    return arg0 * arg0;
  }
  quad.__workletHash = 506946899981;
  quad.__initData = tmp;
  return quad;
})(items2);
const items5 = [{ code: "(function sin_Pnpm_EasingTs7(t){return 1-Math.cos(t*Math.PI/2);})" }];
const tmp6 = (function cubic_Pnpm_EasingTs4Factory(items3) {
  [tmp] = items3;
  function cubic(arg0) {
    return arg0 * arg0 * arg0;
  }
  cubic.__workletHash = 2349464199723;
  cubic.__initData = tmp;
  return cubic;
})(items3);
const items6 = [{ code: "(function circle_Pnpm_EasingTs8(t){return 1-Math.sqrt(1-t*t);})" }];
const tmp7 = (function poly_Pnpm_EasingTs6Factory(items4) {
  [tmp, tmp2] = items4;
  function poly(arg0) {
    items = [closure_1_0, arg0];
    [tmp, tmp2] = items;
    function pnpm_EasingTs5(sum) {
      return Math.pow(sum, closure_1_0);
    }
    const items1 = [tmp2];
    pnpm_EasingTs5.__closure = items1;
    pnpm_EasingTs5.__workletHash = 7031124713108;
    pnpm_EasingTs5.__initData = tmp;
    return pnpm_EasingTs5;
  }
  items = [tmp2];
  poly.__closure = items;
  poly.__workletHash = 10639967864317;
  poly.__initData = tmp;
  return poly;
})(items4);
const items7 = [{ code: "(function exp_Pnpm_EasingTs9(t){return Math.pow(2,10*(t-1));})" }];
const tmp8 = (function sin_Pnpm_EasingTs7Factory(items5) {
  [tmp] = items5;
  function sin(arg0) {
    return 1 - Math.cos(arg0 * Math.PI / 2);
  }
  sin.__workletHash = 1766583818158;
  sin.__initData = tmp;
  return sin;
})(items5);
const items8 = [{ code: "(function elastic_Pnpm_EasingTs11(bounciness=1){let[_worklet_5468694313579_init_data]=this.__closure;const p=bounciness*Math.PI;return function elastic_Pnpm_EasingTs11([_worklet_5468694313579_init_data,p]){const pnpm_EasingTs10=function(t){return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*p);};pnpm_EasingTs10.__closure=[p];pnpm_EasingTs10.__workletHash=5468694313579;pnpm_EasingTs10.__initData=_worklet_5468694313579_init_data;return pnpm_EasingTs10;}([_worklet_5468694313579_init_data,p]);})" }, { code: "(function pnpm_EasingTs10(t){let[p]=this.__closure;return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*p);})" }];
const tmp9 = (function circle_Pnpm_EasingTs8Factory(items6) {
  [tmp] = items6;
  function circle(arg0) {
    return 1 - Math.sqrt(1 - arg0 * arg0);
  }
  circle.__workletHash = 13654134500334;
  circle.__initData = tmp;
  return circle;
})(items6);
const items9 = [{ code: "(function back_Pnpm_EasingTs13(s=1.70158){let[_worklet_6756008277047_init_data]=this.__closure;return function back_Pnpm_EasingTs13([_worklet_6756008277047_init_data,s]){const pnpm_EasingTs12=function(t){return t*t*((s+1)*t-s);};pnpm_EasingTs12.__closure=[s];pnpm_EasingTs12.__workletHash=6756008277047;pnpm_EasingTs12.__initData=_worklet_6756008277047_init_data;return pnpm_EasingTs12;}([_worklet_6756008277047_init_data,s]);})" }, { code: "(function pnpm_EasingTs12(t){let[s]=this.__closure;return t*t*((s+1)*t-s);})" }];
const tmp10 = (function exp_Pnpm_EasingTs9Factory(items7) {
  [tmp] = items7;
  function exp(arg0) {
    return Math.pow(2, 10 * (arg0 - 1));
  }
  exp.__workletHash = 1055966298250;
  exp.__initData = tmp;
  return exp;
})(items7);
const items10 = [{ code: "(function bounce_Pnpm_EasingTs14(t){if(t<1/2.75){return 7.5625*t*t;}if(t<2/2.75){const t2=t-1.5/2.75;return 7.5625*t2*t2+0.75;}if(t<2.5/2.75){const t2=t-2.25/2.75;return 7.5625*t2*t2+0.9375;}const t2=t-2.625/2.75;return 7.5625*t2*t2+0.984375;})" }];
const tmp11 = (function elastic_Pnpm_EasingTs11Factory(items8) {
  [tmp, tmp2] = items8;
  function elastic() {
    let num = arg0;
    if (arg0 === undefined) {
      num = 1;
    }
    items = [closure_1_0, num * Math.PI];
    c0 = undefined;
    [tmp, tmp2] = items;
    function pnpm_EasingTs10(arg0) {
      return 1 - Math.pow(Math.cos(arg0 * Math.PI / 2), 3) * Math.cos(arg0 * c0);
    }
    const items1 = [tmp2];
    pnpm_EasingTs10.__closure = items1;
    pnpm_EasingTs10.__workletHash = 5468694313579;
    pnpm_EasingTs10.__initData = tmp;
    return pnpm_EasingTs10;
  }
  items = [tmp2];
  elastic.__closure = items;
  elastic.__workletHash = 1748302103486;
  elastic.__initData = tmp;
  return elastic;
})(items8);
const items11 = [{ code: "(function bezier_Pnpm_EasingTs16(x1,y1,x2,y2){let[_worklet_1268734785907_init_data,Bezier]=this.__closure;return{bezier:[x1,y1,x2,y2],factory:function bezier_Pnpm_EasingTs16([_worklet_1268734785907_init_data,Bezier,x1,y1,x2,y2]){const pnpm_EasingTs15=function(){return Bezier(x1,y1,x2,y2);};pnpm_EasingTs15.__closure=[Bezier,x1,y1,x2,y2];pnpm_EasingTs15.__workletHash=1268734785907;pnpm_EasingTs15.__initData=_worklet_1268734785907_init_data;return pnpm_EasingTs15;}([_worklet_1268734785907_init_data,Bezier,x1,y1,x2,y2])};})" }, { code: "(function pnpm_EasingTs15(){let[Bezier,x1,y1,x2,y2]=this.__closure;return Bezier(x1,y1,x2,y2);})" }, ];
const tmp12 = (function back_Pnpm_EasingTs13Factory(items9) {
  [tmp, tmp2] = items9;
  function back() {
    let num = arg0;
    if (arg0 === undefined) {
      num = 1.70158;
    }
    items = [closure_1_0, num];
    [tmp, tmp2] = items;
    function pnpm_EasingTs12(arg0) {
      return arg0 * arg0 * ((closure_1_0 + 1) * arg0 - closure_1_0);
    }
    const items1 = [tmp2];
    pnpm_EasingTs12.__closure = items1;
    pnpm_EasingTs12.__workletHash = 6756008277047;
    pnpm_EasingTs12.__initData = tmp;
    return pnpm_EasingTs12;
  }
  items = [tmp2];
  back.__closure = items;
  back.__workletHash = 10770646342815;
  back.__initData = tmp;
  return back;
})(items9);
items11[2] = fn(1862).Bezier;
const items12 = [{ code: "(function bezierFn_Pnpm_EasingTs17(x1,y1,x2,y2){let[Bezier]=this.__closure;return Bezier(x1,y1,x2,y2);})" }, ];
const tmp13 = (function bounce_Pnpm_EasingTs14Factory(items10) {
  [tmp] = items10;
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
  bounce.__workletHash = 12139603391680;
  bounce.__initData = tmp;
  return bounce;
})(items10);
items12[1] = fn(1862).Bezier;
const items13 = [{ code: "(function in__Pnpm_EasingTs18(easing){return easing;})" }];
const tmp14 = (function bezier_Pnpm_EasingTs16Factory(items11) {
  [tmp, tmp2, tmp3] = items11;
  function bezier(arg0, arg1, arg2, arg3) {
    const obj = { bezier: null, factory: null };
    items = [arg0, arg1, arg2, arg3];
    obj.bezier = items;
    const items1 = [closure_1_0, closure_1_1, arg0, arg1, arg2, arg3];
    [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = items1;
    function pnpm_EasingTs15() {
      return closure_1_0(closure_1_1, closure_1_2, closure_1_3, closure_1_4);
    }
    const items2 = [tmp2, tmp3, tmp4, tmp5, tmp6];
    pnpm_EasingTs15.__closure = items2;
    pnpm_EasingTs15.__workletHash = 1268734785907;
    pnpm_EasingTs15.__initData = tmp;
    obj.factory = pnpm_EasingTs15;
    return obj;
  }
  items = [tmp2, tmp3];
  bezier.__closure = items;
  bezier.__workletHash = 2757748789351;
  bezier.__initData = tmp;
  return bezier;
})(items11);
const items14 = [{ code: "(function out_Pnpm_EasingTs20(easing){let[_worklet_14756612927091_init_data]=this.__closure;return function out_Pnpm_EasingTs20([_worklet_14756612927091_init_data,easing]){const pnpm_EasingTs19=function(t){return 1-easing(1-t);};pnpm_EasingTs19.__closure=[easing];pnpm_EasingTs19.__workletHash=14756612927091;pnpm_EasingTs19.__initData=_worklet_14756612927091_init_data;return pnpm_EasingTs19;}([_worklet_14756612927091_init_data,easing]);})" }, { code: "(function pnpm_EasingTs19(t){let[easing]=this.__closure;return 1-easing(1-t);})" }];
const tmp15 = (function bezierFn_Pnpm_EasingTs17Factory(items12) {
  [tmp, tmp2] = items12;
  function bezierFn(arg0, arg1, arg2, arg3) {
    return closure_1_0(arg0, arg1, arg2, arg3);
  }
  items = [tmp2];
  bezierFn.__closure = items;
  bezierFn.__workletHash = 15119849615561;
  bezierFn.__initData = tmp;
  return bezierFn;
})(items12);
const items15 = [{ code: "(function inOut_Pnpm_EasingTs22(easing){let[_worklet_14608405676097_init_data]=this.__closure;return function inOut_Pnpm_EasingTs22([_worklet_14608405676097_init_data,easing]){const pnpm_EasingTs21=function(t){if(t<0.5){return easing(t*2)/2;}return 1-easing((1-t)*2)/2;};pnpm_EasingTs21.__closure=[easing];pnpm_EasingTs21.__workletHash=14608405676097;pnpm_EasingTs21.__initData=_worklet_14608405676097_init_data;return pnpm_EasingTs21;}([_worklet_14608405676097_init_data,easing]);})" }, { code: "(function pnpm_EasingTs21(t){let[easing]=this.__closure;if(t<0.5){return easing(t*2)/2;}return 1-easing((1-t)*2)/2;})" }];
const tmp16 = (function in__Pnpm_EasingTs18Factory(items13) {
  [tmp] = items13;
  function in_(arg0) {
    return arg0;
  }
  in_.__workletHash = 13222614632240;
  in_.__initData = tmp;
  return in_;
})(items13);
const items16 = [{ code: "(function steps_Pnpm_EasingTs24(n=10,roundToNextStep=true){let[_worklet_7826286138888_init_data]=this.__closure;return function steps_Pnpm_EasingTs24([_worklet_7826286138888_init_data,n,roundToNextStep]){const pnpm_EasingTs23=function(t){const value=Math.min(Math.max(t,0),1)*n;if(roundToNextStep){return Math.ceil(value)/n;}return Math.floor(value)/n;};pnpm_EasingTs23.__closure=[n,roundToNextStep];pnpm_EasingTs23.__workletHash=7826286138888;pnpm_EasingTs23.__initData=_worklet_7826286138888_init_data;return pnpm_EasingTs23;}([_worklet_7826286138888_init_data,n,roundToNextStep]);})" }, { code: "(function pnpm_EasingTs23(t){let[n,roundToNextStep]=this.__closure;const value=Math.min(Math.max(t,0),1)*n;if(roundToNextStep){return Math.ceil(value)/n;}return Math.floor(value)/n;})" }];
const tmp17 = (function out_Pnpm_EasingTs20Factory(items14) {
  [tmp, tmp2] = items14;
  function out(arg0) {
    items = [closure_1_0, arg0];
    [tmp, tmp2] = items;
    function pnpm_EasingTs19(arg0) {
      return 1 - closure_1_0(1 - arg0);
    }
    const items1 = [tmp2];
    pnpm_EasingTs19.__closure = items1;
    pnpm_EasingTs19.__workletHash = 14756612927091;
    pnpm_EasingTs19.__initData = tmp;
    return pnpm_EasingTs19;
  }
  items = [tmp2];
  out.__closure = items;
  out.__workletHash = 17238241896349;
  out.__initData = tmp;
  return out;
})(items14);
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
  steps: (function steps_Pnpm_EasingTs24Factory(items16) {
    [tmp, tmp2] = items16;
    function steps() {
      let num = arg0;
      if (arg0 === undefined) {
        num = 10;
      }
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      items = [closure_1_0, num, flag];
      [tmp, tmp2, tmp3] = items;
      function pnpm_EasingTs23(arg0) {
        const result = Math.min(Math.max(arg0, 0), 1) * closure_1_0;
        const _Math = Math;
        if (closure_1_1) {
          let result1 = _Math.ceil(result) / closure_1_0;
        } else {
          result1 = _Math.floor(result) / closure_1_0;
        }
        return result1;
      }
      const items1 = [tmp2, tmp3];
      pnpm_EasingTs23.__closure = items1;
      pnpm_EasingTs23.__workletHash = 7826286138888;
      pnpm_EasingTs23.__initData = tmp;
      return pnpm_EasingTs23;
    }
    items = [tmp2];
    steps.__closure = items;
    steps.__workletHash = 17325143310045;
    steps.__initData = tmp;
    return steps;
  })(items16),
  in: tmp16,
  out: tmp17,
  inOut: (function inOut_Pnpm_EasingTs22Factory(items15) {
    [tmp, tmp2] = items15;
    function inOut(arg0) {
      items = [closure_1_0, arg0];
      [tmp, tmp2] = items;
      function pnpm_EasingTs21(arg0) {
        if (arg0 < 0.5) {
          let result = closure_1_0(2 * arg0) / 2;
        } else {
          result = 1 - closure_1_0(2 * (1 - arg0)) / 2;
        }
        return result;
      }
      const items1 = [tmp2];
      pnpm_EasingTs21.__closure = items1;
      pnpm_EasingTs21.__workletHash = 14608405676097;
      pnpm_EasingTs21.__initData = tmp;
      return pnpm_EasingTs21;
    }
    items = [tmp2];
    inOut.__closure = items;
    inOut.__workletHash = 9950285812236;
    inOut.__initData = tmp;
    return inOut;
  })(items15)
};
const SymbolResult = Symbol("easingName");
const entries = Object.entries(obj);
const iter = entries[Symbol.iterator]();
while (iter !== undefined) {
  let importDefaultResultResult = _slicedToArray(iter.next(), 2);
  let _Object = Object;
  let obj2 = { value: importDefaultResultResult[0], configurable: false, enumerable: false, writable: false };
  let definePropertyResult1 = Object.defineProperty(importDefaultResultResult[1], SymbolResult, obj2);
  continue;
}

export const EasingNameSymbol = SymbolResult;
export const Easing = obj;