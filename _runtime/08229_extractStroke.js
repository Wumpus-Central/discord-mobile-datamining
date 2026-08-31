// _runtime/08229_extractStroke.js
const module = arg2;
const dependencyMap = arg6;
let closure_2 = { butt: 0, square: 2, round: 1 };
let closure_3 = { miter: 0, bevel: 2, round: 1 };
let closure_4 = { none: 0, default: 0, nonScalingStroke: 1, "non-scaling-stroke": 1, inherit: 2, uri: 3 };
arg5.default = function extractStroke(arg0, arg1, arr) {
  ({ stroke, strokeOpacity, strokeLinecap, strokeLinejoin, strokeDasharray, strokeWidth, strokeDashoffset, strokeMiterlimit, vectorEffect } = arg1);
  if (null != stroke) {
    arr.push("stroke");
    arg0.stroke = module(8227)(stroke);
  }
  if (null != strokeWidth) {
    arr.push("strokeWidth");
    arg0.strokeWidth = strokeWidth;
  }
  if (null != strokeOpacity) {
    arr.push("strokeOpacity");
    arg0.strokeOpacity = module(8215)(strokeOpacity);
  }
  if (null != strokeDasharray) {
    arr.push("strokeDasharray");
    let tmp9 = null;
    if (strokeDasharray) {
      tmp9 = null;
      if ("none" !== strokeDasharray) {
        tmp9 = module(8230)(strokeDasharray);
      }
    }
    let combined = tmp9;
    if (tmp9) {
      combined = tmp9;
      if (tmp9.length % 2 === 1) {
        combined = tmp9.concat(tmp9);
      }
    }
    arg0.strokeDasharray = combined;
  }
  if (null != strokeDashoffset) {
    arr.push("strokeDashoffset");
    let tmp14 = null;
    if (strokeDasharray) {
      tmp14 = null;
      if (strokeDashoffset) {
        tmp14 = +strokeDashoffset || 0;
        const tmp15 = +strokeDashoffset || 0;
      }
    }
    arg0.strokeDashoffset = tmp14;
  }
  if (null != strokeLinecap) {
    arr.push("strokeLinecap");
    let num3 = strokeLinecap;
    if (strokeLinecap) {
      num3 = table[strokeLinecap];
    }
    if (!num3) {
      num3 = 0;
    }
    arg0.strokeLinecap = num3;
  }
  if (null != strokeLinejoin) {
    arr.push("strokeLinejoin");
    let num4 = strokeLinejoin;
    if (strokeLinejoin) {
      num4 = table2[strokeLinejoin];
    }
    if (!num4) {
      num4 = 0;
    }
    arg0.strokeLinejoin = num4;
  }
  if (null != strokeMiterlimit) {
    arr.push("strokeMiterlimit");
    let num5 = strokeMiterlimit;
    if (strokeMiterlimit) {
      num5 = strokeMiterlimit;
      if (typeof strokeMiterlimit !== "number") {
        const _parseFloat = parseFloat;
        num5 = parseFloat(strokeMiterlimit);
      }
    }
    if (!num5) {
      num5 = 4;
    }
    arg0.strokeMiterlimit = num5;
  }
  if (null != vectorEffect) {
    let num6 = vectorEffect;
    if (vectorEffect) {
      num6 = table3[vectorEffect];
    }
    if (!num6) {
      num6 = 0;
    }
    arg0.vectorEffect = num6;
  }
};