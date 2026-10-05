// _runtime/00018_ActivityIndicator.js
import Fragment from "react/00021_Fragment.js";
import ProgressBarAndroid from "00023_ProgressBarAndroid.js";
import ViewDefault from "00108_View.js";
import react from "00019_react.js";
import get_hairlineWidth from "00254_get_hairlineWidth.js";

let size;

const jsx = Fragment.jsx;
let closure_3 = ProgressBarAndroid.default;
class ActivityIndicator {
  constructor(animating) {
    let onLayout;
    let sizeSmall;
    let str2;
    let flag = animating.animating;
    const ref = animating.ref;
    if (flag === undefined) {
      flag = true;
    }
    let color = animating.color;
    if (color === undefined) {
      color = null;
    }
    let flag2 = animating.hidesWhenStopped;
    if (flag2 === undefined) {
      flag2 = true;
    }
    ({ size, onLayout } = animating);
    if (size === undefined) {
      size = "small";
    }
    const style = animating.style;
    const merged = Object.assign(
      animating,
      Object.assign({ ref: 0, animating: 0, color: 0, hidesWhenStopped: 0, onLayout: 0, size: 0, style: 0 }),
    );
    if ("small" === size) {
      sizeSmall = closure_4.sizeSmall;
      str2 = "small";
    } else if ("large" === size) {
      sizeSmall = closure_4.sizeLarge;
      str2 = "large";
    } else {
      sizeSmall = { height: size, width: size };
    }
    const obj = { animating: flag, color, hidesWhenStopped: flag2, ref, style: sizeSmall, size: str2 };
    const merged1 = Object.assign(merged);
    ViewDefault;
    const obj4 = get_hairlineWidth;
    const merged2 = Object.assign(obj);
    return (
      <tmp6 onLayout={onLayout} style={obj4.compose(closure_4.container, style)}>
        {null}
      </tmp6>
    );
  }
}
ActivityIndicator.displayName = "ActivityIndicator";
const React3 = get_hairlineWidth.create({
  container: { alignItems: "center", justifyContent: "center" },
  sizeSmall: { width: 20, height: 20 },
  sizeLarge: { width: 36, height: 36 },
});

export default ActivityIndicator;
