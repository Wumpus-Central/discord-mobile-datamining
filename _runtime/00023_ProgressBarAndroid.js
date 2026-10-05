// _runtime/00023_ProgressBarAndroid.js
import Fragment from "react/00021_Fragment.js";
import _modDef24 from "metro/00024__.js";
import react from "00019_react.js";

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
}
