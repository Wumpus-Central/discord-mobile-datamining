// === Module 18: ActivityIndicator ===

// Module 18 (ActivityIndicator)
import ViewDefault from "View" /* 108 */;
import noop from "module_19" /* 19 */;
import get_hairlineWidth from "get hairlineWidth" /* 254 */;

const jsx = fn(21).jsx;
let closure_3 = fn(23).default;
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
    merged = Object.assign(global, Object.assign({ ref: 0, animating: 0, color: 0, hidesWhenStopped: 0, onLayout: 0, size: 0, style: 0 }));
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
        sizeSmall.height = size;
        sizeSmall.width = size;
      }
    }
    obj = { animating: flag, color, hidesWhenStopped: flag2 };
    merged1 = Object.assign(merged);
    obj.ref = global.ref;
    obj.style = sizeSmall;
    obj.size = str2;
    obj1 = { onLayout, style: null, children: null };
    tmp6 = closure_0(closure_1[3]);
    obj4 = closure_0(closure_1[4]);
    obj1.style = obj4.compose(closure_4.container, global.style);
    obj2 = {};
    merged2 = Object.assign(obj);
    obj2.styleAttr = "Normal";
    obj2.indeterminate = true;
    obj1.children = jsx(closure_3, obj2);
    return jsx(tmp6, obj1);
  }
}
ActivityIndicator.displayName = "ActivityIndicator";
const React4 = get_hairlineWidth.create({ container: { alignItems: "center", justifyContent: "center" }, sizeSmall: { width: 20, height: 20 }, sizeLarge: { width: 36, height: 36 } });

export default ActivityIndicator;