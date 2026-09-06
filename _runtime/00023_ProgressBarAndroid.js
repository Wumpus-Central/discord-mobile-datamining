// === Module 23: ProgressBarAndroid ===

// Module 23 (ProgressBarAndroid)
import jsxProd from "jsxProd" /* 21 */;
import _modDef24 from "module_24" /* 24 */;
import noop from "module_19" /* 19 */;

const jsx = jsxProd.jsx;

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
  const merged = Object.assign(styleAttr, Object.assign({ ref: 0, styleAttr: 0, indeterminate: 0, animating: 0 }));
  const obj = { styleAttr: str, indeterminate: flag, animating: flag2 };
  const merged1 = Object.assign(merged);
  obj.ref = styleAttr.ref;
  return jsx(_modDef24, { styleAttr: str, indeterminate: flag, animating: flag2 });
};