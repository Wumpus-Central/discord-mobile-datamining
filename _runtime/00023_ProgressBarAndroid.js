// === Module 23: ProgressBarAndroid ===

// Module 23 (ProgressBarAndroid)
import jsxProd from "jsxProd" /* 21 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 24 */;
import noop from "noop" /* 19 */;

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
  const merged = Object.assign(styleAttr, Object.create(null));
  const obj = { styleAttr: str, indeterminate: flag, animating: flag2 };
  const merged1 = Object.assign(merged);
  obj.ref = styleAttr.ref;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, { styleAttr: str, indeterminate: flag, animating: flag2 });
};