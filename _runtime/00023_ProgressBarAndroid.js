// === Module 23: ProgressBarAndroid ===

// Module 23 (ProgressBarAndroid)
import Fragment from "Fragment" /* 21 */;
import _modDef24 from "module_24" /* 24 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default function ProgressBarAndroid(styleAttr) {
  let str = styleAttr.styleAttr;
  const ref = styleAttr.ref;
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
  _modDef24;
  const merged1 = Object.assign(merged);
  return <tmp2 styleAttr={str} indeterminate={flag} animating={flag2} ref={ref} />;
};