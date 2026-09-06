// === Module 1694: convertAnimationObjectToKeyframes ===

// Module 1694 (convertAnimationObjectToKeyframes)
import _slicedToArray from "module_32" /* 32 */;

const require = arg1;

export const convertAnimationObjectToKeyframes = function convertAnimationObjectToKeyframes(BounceIn) {
  _require = "@keyframes " + BounceIn.name + " { ";
  let entries = Object.entries(BounceIn.style);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp8] = tmp5;
    let num = 0;
    if ("from" !== tmp6) {
      let num2 = 100;
      if ("to" !== tmp7) {
        num2 = tmp6;
      }
      num = num2;
    }
    let _HermesInternal = HermesInternal;
    _require = _require + "" + num + "% { ";
    let _Object = Object;
    let entries1 = Object.entries(tmp8);
    for (const item10063 of entries1) {
      let tmp16 = _slicedToArray(item10063, 2);
      let first = tmp16[0];
      let tmp18 = first;
      let arr = tmp16[1];
      if ("easing" !== first) {
        if ("originX" !== tmp18) {
          if ("originY" !== tmp18) {
            if ("transform" === tmp18) {
              _require = _require + "transform:";
              let item = arr.forEach((item) => {
                const entries = Object.entries(item);
                while (tmp2 !== undefined) {
                  let tmp5 = _slicedToArray(tmp3, 2);
                  let _HermesInternal = HermesInternal;
                  let str = " ";
                  let str2 = "(";
                  let str3 = ")";
                  closure_0 = closure_0 + " " + tmp5[0] + "(" + tmp5[1] + ")";
                  continue;
                }
              });
              _require = _require + "; ";
            } else {
              let _HermesInternal5 = HermesInternal;
              let str3 = "";
              let str4 = ": ";
              let str5 = "; ";
              _require = _require + "" + tmp18 + ": " + arr + "; ";
            }
          } else {
            let _HermesInternal4 = HermesInternal;
            _require = _require + "top: " + arr + "px; ";
          }
        } else {
          let _HermesInternal3 = HermesInternal;
          _require = _require + "left: " + arr + "px; ";
        }
      } else {
        let str = "linear";
        let tmp38 = _require;
        if (arr in require("WebEasings").WebEasings) {
          str = arr;
        } else if (arr.name in tmp38(1695).WebEasings) {
          str = arr.name;
        }
        let str2 = tmp38(1695).WebEasings[str];
        let _HermesInternal2 = HermesInternal;
        _require = _require + "animation-timing-function: cubic-bezier(" + str2.toString() + ");";
      }
      continue;
    }
    _require = `${closure_0}} `;
    continue;
  }
  _require = `${closure_0}} `;
  return `${closure_0}} `;
};