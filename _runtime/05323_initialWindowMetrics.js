// _runtime/05323_initialWindowMetrics.js
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Dimensions;
let Platform;
let StyleSheet;
let c3;
const require = arg1;
({ Dimensions, Platform, StyleSheet, View: c3 } = get_ActivityIndicator);
const size = Dimensions.get("window");
const width = size.width;
let num = 0;
if (undefined !== width) {
  num = width;
}
const height = size.height;
let num2 = 0;
if (undefined !== height) {
  num2 = height;
}
if (null == require("module_1612").initialWindowMetrics) {
  let obj = { frame: null, insets: null };
  obj = { x: 0, y: 0, width: null, height: null };
  obj[2] = num;
  obj[3] = num2;
  obj[0] = obj;
  obj[1] = { top: 0, left: 0, right: 0, bottom: 0 };
  let initialWindowMetrics = obj;
} else {
  initialWindowMetrics = require("module_1612").initialWindowMetrics;
}
class SafeAreaProviderCompat {
  constructor(arg0) {
    ({ children, style } = global);
    SafeAreaInsetsContext = undefined;
    SafeAreaInsetsContext = SafeAreaInsetsContext.useContext(require("module_1612").SafeAreaInsetsContext);
    obj = {
      initialFrame: initialWindowMetrics.frame,
      render(onLayout) {
            onLayout = onLayout.onLayout;
            if (noop) {
              let obj = { ref: null, onLayout: null, style: null, children: null };
              obj[0] = tmp;
              obj[1] = onLayout;
              const items = [outer1_6.container, closure_1];
              obj[2] = items;
              obj[3] = closure_0;
              let tmp2Result = tmp2(outer1_3, obj);
            } else {
              obj = { initialMetrics: null, style: null, onLayout: null, children: null };
              obj[0] = outer1_5;
              obj[1] = closure_1;
              obj[2] = onLayout;
              obj[3] = closure_0;
              tmp2Result = tmp2(outer1_0(outer1_1[3]).SafeAreaProvider, obj);
            }
            return tmp2Result;
          }
    };
    return jsx(require("useFrameSize").FrameSizeProvider, obj);
  }
}
SafeAreaProviderCompat.initialMetrics = initialWindowMetrics;
const styles = StyleSheet.create({ container: { flex: 1 } });

export { SafeAreaProviderCompat };