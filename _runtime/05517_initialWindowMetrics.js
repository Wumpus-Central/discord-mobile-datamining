// === Module 5517: initialWindowMetrics ===

// Module 5517 (initialWindowMetrics)
import _mod1631 from "module_1631" /* 1631 */;
import useFrameSize from "useFrameSize" /* 5494 */;
import closure_2 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
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
if (null == require("module_1631").initialWindowMetrics) {
  let obj = { frame: null, insets: null };
  obj = { x: 0, y: 0, width: null, height: null };
  obj[2] = num;
  obj[3] = num2;
  obj[0] = obj;
  obj[1] = { top: 0, left: 0, right: 0, bottom: 0 };
  let initialWindowMetrics = obj;
} else {
  initialWindowMetrics = require("module_1631").initialWindowMetrics;
}
class SafeAreaProviderCompat {
  constructor(arg0) {
    ({ children, style } = global);
    closure_2 = undefined;
    closure_2 = closure_2.useContext(require("module_1631").SafeAreaInsetsContext);
    obj = {
      initialFrame: initialWindowMetrics.frame,
      render(onLayout) {
            onLayout = onLayout.onLayout;
            if (closure_2) {
              let obj = { ref: null, onLayout: null, style: null, children: null };
              obj[0] = tmp;
              obj[1] = onLayout;
              const items = [closure_1_6.container, closure_1];
              obj[2] = items;
              obj[3] = closure_0;
              let tmp2Result = tmp2(closure_1_3, obj);
            } else {
              obj = { initialMetrics: null, style: null, onLayout: null, children: null };
              obj[0] = closure_1_5;
              obj[1] = closure_1;
              obj[2] = onLayout;
              obj[3] = closure_0;
              tmp2Result = tmp2(closure_1_0(closure_1_1[3]).SafeAreaProvider, obj);
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