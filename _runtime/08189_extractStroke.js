// === Module 8189: extractStroke ===

// Module 8189 (extractStroke)
import extractOpacityDefault from "extractOpacity" /* 8175 */;
import extractBrushDefault from "extractBrush" /* 8187 */;
import extractLengthListDefault from "extractLengthList" /* 8190 */;

let closure_2 = { butt: 0, square: 2, round: 1 };
let closure_3 = { miter: 0, bevel: 2, round: 1 };
let closure_4 = { none: 0, default: 0, nonScalingStroke: 1, "non-scaling-stroke": 1, inherit: 2, uri: 3 };

export default function extractStroke(arg0, arg1, arr) {
  let stroke;
  let strokeDasharray;
  let strokeDashoffset;
  let strokeLinecap;
  let strokeLinejoin;
  let strokeMiterlimit;
  let strokeOpacity;
  let strokeWidth;
  let vectorEffect;
  ({ stroke, strokeOpacity, strokeLinecap, strokeLinejoin, strokeDasharray, strokeWidth, strokeDashoffset, strokeMiterlimit, vectorEffect } = arg1);
  if (null != stroke) {
    arr = arr.push("stroke");
    arg0.stroke = extractBrushDefault(stroke);
  }
  if (null != strokeWidth) {
    arr.push("strokeWidth");
    arg0.strokeWidth = strokeWidth;
  }
  if (null != strokeOpacity) {
    arr.push("strokeOpacity");
    arg0.strokeOpacity = extractOpacityDefault(strokeOpacity);
  }
  if (null != strokeDasharray) {
    arr.push("strokeDasharray");
    let tmp9 = null;
    if (strokeDasharray) {
      tmp9 = null;
      if ("none" !== strokeDasharray) {
        tmp9 = extractLengthListDefault(strokeDasharray);
      }
    }
    let combined = tmp9;
    if (combined) {
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
      }
    }
    arg0.strokeDashoffset = tmp14;
  }
  if (null != strokeLinecap) {
    arr.push("strokeLinecap");
    const num3 = strokeLinecap && closure_2[strokeLinecap] || 0;
    arg0.strokeLinecap = num3;
  }
  if (null != strokeLinejoin) {
    arr.push("strokeLinejoin");
    const num4 = strokeLinejoin && closure_3[strokeLinejoin] || 0;
    arg0.strokeLinejoin = num4;
  }
  if (null != strokeMiterlimit) {
    arr.push("strokeMiterlimit");
    let num5 = strokeMiterlimit;
    if (num5) {
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
    const num6 = vectorEffect && closure_4[vectorEffect] || 0;
    arg0.vectorEffect = num6;
  }
};