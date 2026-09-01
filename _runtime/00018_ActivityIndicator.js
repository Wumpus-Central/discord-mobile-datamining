// _runtime/00018_ActivityIndicator.js
import noopAll from "00019_noop.js";
import ViewDefault from "00108_View.js";
import get_hairlineWidthDefault from "00254_get_hairlineWidth.js";
import { jsx } from "react/00021_jsxProd.js";
import { default as ProgressBarAndroid } from "00023_ProgressBarAndroid.js";

noopAll;
class ActivityIndicator {
  constructor(arg0) {
    flag = global.animating;
    if (flag === undefined) {
      flag = true;
    }
    color = global.color;
    if (color === undefined) {
      color = null;
    }
    flag2 = global.hidesWhenStopped;
    if (flag2 === undefined) {
      flag2 = true;
    }
    ({ size, onLayout } = global);
    if (size === undefined) {
      size = "small";
    }
    merged = Object.assign(global, Object.create(null));
    if ("small" === size) {
      tmp4 = closure_4;
      sizeSmall = closure_4.sizeSmall;
      str2 = "small";
    } else {
      str = "large";
      if ("large" === size) {
        tmp3 = closure_4;
        sizeSmall = closure_4.sizeLarge;
        str2 = "large";
      } else {
        sizeSmall = { height: null, width: null };
        sizeSmall[0] = size;
        sizeSmall[1] = size;
      }
    }
    obj = { animating: flag, color, hidesWhenStopped: flag2 };
    merged1 = Object.assign(merged);
    obj.ref = global.ref;
    obj.style = sizeSmall;
    obj.size = str2;
    obj1 = { onLayout, style: null, children: null };
    tmp6 = require("View");
    obj4 = require("get hairlineWidth");
    obj1[1] = obj4.compose(closure_4.container, global.style);
    obj2 = {};
    merged2 = Object.assign(obj);
    obj2.styleAttr = "Normal";
    obj2.indeterminate = true;
    obj1[2] = jsx(ProgressBarAndroid, obj2);
    return jsx(tmp6, obj1);
  }
}
ActivityIndicator.displayName = "ActivityIndicator";
let closure_4 = get_hairlineWidthDefault.create({
  container: { alignItems: "center", justifyContent: "center" },
  sizeSmall: { width: 20, height: 20 },
  sizeLarge: { width: 36, height: 36 },
});

export default ActivityIndicator;
