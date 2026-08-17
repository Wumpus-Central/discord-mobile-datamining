// _runtime/01712_convertAnimationObjectToKeyframes.js
import closure_2 from "metro/00032__slicedToArray.js";
import { getEasingByName } from "01713_getEasingByName.js";

const require = arg1;

export const convertAnimationObjectToKeyframes = function convertAnimationObjectToKeyframes(BounceIn) {
  let _require = "@keyframes " + BounceIn.name + " { ";
  let entries = Object.entries(BounceIn.style);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp8] = tmp5;
    let num = 0;
    if ("from" !== tmp6) {
      let tmp9 = tmp6;
      let num2 = 100;
      if ("to" !== tmp7) {
        num2 = tmp6;
      }
      num = num2;
    }
    let tmp10 = _require;
    let _HermesInternal = HermesInternal;
    _require = _require + "" + num + "% { ";
    let _Object = Object;
    let tmp11 = tmp8;
    let entries1 = Object.entries(tmp8);
    let tmp13 = entries1;
    let tmp14 = entries1;
    for (const item10063 of entries1) {
      let tmp15 = callback;
      let tmp16 = callback(item10063, 2);
      let first = tmp16[0];
      let tmp18 = first;
      let arr = tmp16[1];
      if ("easing" !== first) {
        let tmp22 = first;
        if ("originX" !== tmp18) {
          let tmp25 = first;
          if ("originY" !== tmp18) {
            let tmp28 = first;
            if ("transform" === tmp18) {
              let tmp32 = _require;
              _require = _require + "transform:";
              let tmp33 = arr;
              let item = arr.forEach((arg0) => {
                const entries = Object.entries(arg0);
                while (tmp2 !== undefined) {
                  let tmp4 = closure_1_2;
                  let tmp5 = closure_1_2(tmp3, 2);
                  let tmp6 = closure_0;
                  let _HermesInternal = HermesInternal;
                  let str = " ";
                  let str2 = "(";
                  let str3 = ")";
                  closure_0 = closure_0 + " " + tmp5[0] + "(" + tmp5[1] + ")";
                  continue;
                }
              });
              let tmp35 = _require;
              _require = _require + "; ";
            } else {
              let tmp29 = _require;
              let tmp30 = first;
              let tmp31 = arr;
              let _HermesInternal5 = HermesInternal;
              let str3 = "";
              let str4 = ": ";
              let str5 = "; ";
              _require = _require + "" + tmp18 + ": " + arr + "; ";
            }
          } else {
            let tmp26 = _require;
            let tmp27 = arr;
            let _HermesInternal4 = HermesInternal;
            _require = _require + "top: " + arr + "px; ";
          }
        } else {
          let tmp23 = _require;
          let tmp24 = arr;
          let _HermesInternal3 = HermesInternal;
          _require = _require + "left: " + arr + "px; ";
        }
      } else {
        let str = "linear";
        let tmp37 = arr;
        let tmp38 = _require;
        let tmp39 = dependencyMap;
        let tmp40 = arr;
        if (arr in _getEasingByName.WebEasings) {
          str = arr;
        } else if (arr.name in tmp38(1713).WebEasings) {
          let tmp19 = arr;
          str = arr.name;
        }
        let tmp20 = _require;
        let tmp21 = str;
        let str2 = tmp38(1713).WebEasings[str];
        let _HermesInternal2 = HermesInternal;
        _require = _require + "animation-timing-function: cubic-bezier(" + str2.toString() + ");";
      }
      continue;
    }
    let tmp36 = _require;
    _require = `${closure_0}} `;
    continue;
  }
  _require = `${closure_0}} `;
  return `${closure_0}} `;
};