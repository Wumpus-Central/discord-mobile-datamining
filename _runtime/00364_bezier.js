// === Module 364: bezier ===

// Module 364 (bezier)
import bezier from "bezier" /* 365 */;

require = arg1;
const dependencyMap = arg6;
const obj = {
  step0(arg0) {
    let num = 0;
    if (arg0 > 0) {
      num = 1;
    }
    return num;
  },
  step1(arg0) {
    let num = 0;
    if (arg0 >= 1) {
      num = 1;
    }
    return num;
  },
  linear(arg0) {
    return arg0;
  },
  ease(arg0) {
    let tmp = closure_2;
    if (!closure_2) {
      const bezierResult = obj.bezier(0.42, 0, 1, 1);
      closure_2 = bezierResult;
      tmp = bezierResult;
    }
    return tmp(arg0);
  },
  quad(arg0) {
    return arg0 * arg0;
  },
  cubic(arg0) {
    return arg0 * arg0 * arg0;
  },
  poly(arg0) {
    closure_0 = arg0;
    return (sum) => Math.pow(sum, closure_0);
  },
  sin(arg0) {
    return 1 - Math.cos(arg0 * Math.PI / 2);
  },
  circle(arg0) {
    return 1 - Math.sqrt(1 - arg0 * arg0);
  },
  exp(arg0) {
    return Math.pow(2, 10 * (arg0 - 1));
  },
  elastic() {
    let num = arg0;
    if (arg0 === undefined) {
      num = 1;
    }
    closure_0 = undefined;
    closure_0 = num * Math.PI;
    return (arg0) => 1 - Math.pow(Math.cos(arg0 * Math.PI / 2), 3) * Math.cos(arg0 * closure_0);
  },
  back() {
    let num = arg0;
    if (arg0 === undefined) {
      num = 1.70158;
    }
    return (arg0) => arg0 * arg0 * ((num + 1) * arg0 - num);
  },
  bounce(arg0) {
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
  },
  bezier(arg0, arg1, arg2, arg3) {
    return bezier.default(arg0, arg1, arg2, arg3);
  },
  in(ease) {
    return ease;
  },
  out(arg0) {
    closure_0 = arg0;
    return (arg0) => 1 - callback(1 - arg0);
  },
  inOut(arg0) {
    closure_0 = arg0;
    return (arg0) => {
      if (arg0 < 0.5) {
        let result = callback(2 * arg0) / 2;
      } else {
        result = 1 - callback(2 * (1 - arg0)) / 2;
      }
      return result;
    };
  }
};
arg5.default = obj;