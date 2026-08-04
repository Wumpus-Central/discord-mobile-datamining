// _runtime/00023_ProgressBarAndroid.js
import { jsx } from "jsxProd";
import noop from "noop";


export default function ProgressBarAndroid(styleAttr) {
  let str = styleAttr.styleAttr;
  if (str === undefined) {
    str = "Normal";
  }
  let flag = styleAttr.indeterminate;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = styleAttr.animating;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const merged = Object.assign(styleAttr, Object.create(null));
  const obj = { styleAttr: str, indeterminate: flag, animating: flag2 };
  const merged1 = Object.assign(merged);
  obj.ref = styleAttr.ref;
  return jsx(importDefault(24), { styleAttr: str, indeterminate: flag, animating: flag2 });
};