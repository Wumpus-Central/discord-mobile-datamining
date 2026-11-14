// _runtime/01770_PATH_COMMAND_LENGTHS.js
import _slicedToArray from "metro/00032__.js";

export const PATH_COMMAND_LENGTHS = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 };
export const SEGMENT_PATTERN = /([achlmqstvz])([^achlmqstvz]*)/gi;
export const NUMBER_PATTERN = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
export function reflectControlPoint(curX, curY, lastCubicCtrlX, lastCubicCtrlY) {
  items = [2 * curX - lastCubicCtrlX, 2 * curY - lastCubicCtrlY];
  return items;
}
export function lineToCubic(curX, curY, arg2, arg3) {
  items = [
    curX + (arg2 - curX) / 3,
    curY + (arg3 - curY) / 3,
    curX + (2 * (arg2 - curX)) / 3,
    curY + (2 * (arg3 - curY)) / 3,
    arg2,
    arg3,
  ];
  return items;
}
export function quadraticToCubic(curX, curY, arg2, arg3, arg4, arg5) {
  items = [
    curX + 0.6666666666666666 * (arg2 - curX),
    curY + 0.6666666666666666 * (arg3 - curY),
    arg4 + 0.6666666666666666 * (arg2 - arg4),
    arg5 + 0.6666666666666666 * (arg3 - arg5),
    arg4,
    arg5,
  ];
  return items;
}
export function arcToCubic(curX, curY, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  let sum8;
  if (curX === arg7) {
    if (curY === arg8) {
      return [];
    }
  }
  const absolute = Math.abs(arg2);
  const absolute1 = Math.abs(arg3);
  if (0 !== absolute) {
    if (0 !== absolute1) {
      let num = 0;
      if (0 !== arg5) {
        num = 1;
      }
      let num2 = 0;
      if (0 !== arg6) {
        num2 = 1;
      }
      const _Math = Math;
      const result = ((arg4 % 360) * Math.PI) / 180;
      const _Math2 = Math;
      const sinResult = Math.sin(result);
      const _Math3 = Math;
      const cosResult = Math.cos(result);
      const sum = (cosResult * (curX - arg7)) / 2 + (sinResult * (curY - arg8)) / 2;
      const sum1 = (-sinResult * (curX - arg7)) / 2 + (cosResult * (curY - arg8)) / 2;
      const result1 = sum * sum;
      const result2 = sum1 * sum1;
      const sum2 = result1 / (absolute * absolute) + result2 / (absolute1 * absolute1);
      let result4 = absolute1;
      let result3 = absolute;
      if (1 < sum2) {
        const _Math4 = Math;
        const sqrtResult = Math.sqrt(sum2);
        result3 = absolute * sqrtResult;
        result4 = absolute1 * sqrtResult;
      }
      const result5 = result3 * result3;
      const result6 = result4 * result4;
      let num7 = 1;
      if (num === num2) {
        num7 = -1;
      }
      const _Math5 = Math;
      const _Math6 = Math;
      const result7 =
        num7 *
        Math.sqrt(
          Math.max(0, result5 * result6 - result5 * result2 - result6 * result1) /
            (result5 * result2 + result6 * result1),
        );
      const result8 = result7 * ((result3 * sum1) / result4);
      const result9 = result7 * ((-result4 * sum) / result3);
      const sum3 = cosResult * result8 - sinResult * result9 + (curX + arg7) / 2;
      const sum4 = sinResult * result8 + cosResult * result9 + (curY + arg8) / 2;
      const result10 = (sum - result8) / result3;
      const result11 = (sum1 - result9) / result4;
      const result12 = (-sum - result8) / result3;
      const result13 = (-sum1 - result9) / result4;
      const _Math7 = Math;
      const _Math8 = Math;
      const sum5 = result10 * result10 + result11 * result11;
      let num8 = 1;
      const result14 = Math.sqrt(1) * Math.sqrt(sum5);
      if (result11 < 0) {
        num8 = -1;
      }
      const _Math9 = Math;
      const _Math10 = Math;
      const _Math11 = Math;
      const result15 = num8 * Math.acos(Math.max(-1, Math.min(1, result10 / result14)));
      const _Math12 = Math;
      const _Math13 = Math;
      const sqrtResult1 = Math.sqrt(1);
      let num10 = 1;
      const result16 = Math.sqrt(sum5) * Math.sqrt(result12 * result12 + result13 * result13);
      if (result10 * result13 - result11 * result12 < 0) {
        num10 = -1;
      }
      const _Math14 = Math;
      const _Math15 = Math;
      const _Math16 = Math;
      const result17 =
        num10 * Math.acos(Math.max(-1, Math.min(1, (result10 * result12 + result11 * result13) / result16)));
      let tmp34 = 0 === num2;
      if (0 === num2) {
        tmp34 = result17 > 0;
      }
      let diff = result17;
      if (tmp34) {
        const _Math17 = Math;
        diff = result17 - 2 * Math.PI;
      }
      let tmp36 = 1 === num2;
      if (1 === num2) {
        tmp36 = diff < 0;
      }
      let sum6 = diff;
      if (tmp36) {
        const _Math18 = Math;
        sum6 = diff + 2 * Math.PI;
      }
      const _Math19 = Math;
      const _Math20 = Math;
      const _Math21 = Math;
      const rounded = Math.ceil(Math.abs(sum6) / (Math.PI / 2));
      const result18 = sum6 / rounded;
      const _Math22 = Math;
      const result19 = 1.3333333333333333 * Math.tan(result18 / 4);
      items = [];
      let num13 = 0;
      if (0 < rounded) {
        do {
          let sum7 = result15 + num13 * result18;
          sum8 = num13 + 1;
          let sum9 = result15 + sum8 * result18;
          let _Math23 = Math;
          let cosResult1 = Math.cos(sum7);
          let _Math24 = Math;
          let sinResult1 = Math.sin(sum7);
          let _Math25 = Math;
          let cosResult2 = Math.cos(sum9);
          let _Math26 = Math;
          let sinResult2 = Math.sin(sum9);
          let sum10 = cosResult2 + result19 * sinResult2;
          let diff1 = sinResult2 - result19 * cosResult2;
          let diff2 = cosResult1 - result19 * sinResult1;
          let sum11 = sinResult1 + result19 * cosResult1;
          let items1 = [
            sum3 + cosResult * diff2 * result3 - sinResult * sum11 * result4,
            sum4 + sinResult * diff2 * result3 + cosResult * sum11 * result4,
          ];
          let tmp53 = _slicedToArray(items1, 2);
          let items2 = [
            sum3 + cosResult * sum10 * result3 - sinResult * diff1 * result4,
            sum4 + sinResult * sum10 * result3 + cosResult * diff1 * result4,
          ];
          let tmp54 = _slicedToArray(items2, 2);
          let items3 = [
            sum3 + cosResult * cosResult2 * result3 - sinResult * sinResult2 * result4,
            sum4 + sinResult * cosResult2 * result3 + cosResult * sinResult2 * result4,
          ];
          let tmp55 = _slicedToArray(items3, 2);
          let items4 = [tmp53[0], tmp53[1], tmp54[0], tmp54[1], tmp55[0], tmp55[1]];
          let arr = items.push(items4);
          num13 = sum8;
        } while (sum8 < rounded);
      }
      return items;
    }
  }
  const items5 = [
    curX + (arg7 - curX) / 3,
    curY + (arg8 - curY) / 3,
    curX + (2 * (arg7 - curX)) / 3,
    curY + (2 * (arg8 - curY)) / 3,
    arg7,
    arg8,
  ];
  const items6 = [items5];
  return items6;
}
