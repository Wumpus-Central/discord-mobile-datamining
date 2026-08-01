// === Module 5177: initialWindowMetrics ===

// Module 5177 (initialWindowMetrics)
import "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Dimensions;
let Platform;
let StyleSheet;
let c3;
let c4;
let jsxs;
const require = arg1;
({ Dimensions, Platform, StyleSheet, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs } = jsxProd);
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
if (null == require("module_1584").initialWindowMetrics) {
  let obj = { frame: null, insets: null };
  obj = { x: 0, y: 0, width: null, height: null };
  obj[2] = num;
  obj[3] = num2;
  obj[0] = obj;
  obj[1] = { top: 0, left: 0, right: 0, bottom: 0 };
  let initialWindowMetrics = obj;
} else {
  initialWindowMetrics = require("module_1584").initialWindowMetrics;
}
class SafeAreaProviderCompat {
  constructor(arg0) {
    ({ children, style } = global);
    tmp = closure_0;
    tmp2 = closure_1;
    tmp3 = jsx;
    if (noop.useContext(require("module_1584").SafeAreaInsetsContext)) {
      tmp6 = View;
      obj = { style: null, children: null };
      tmp7 = initialWindowMetrics;
      items = [, ];
      items[0] = initialWindowMetrics.container;
      items[1] = style;
      obj[0] = items;
      obj[1] = children;
      tmp3Result = tmp3(View, obj);
    } else {
      obj = { initialMetrics: null, style: null, children: null };
      tmp4 = initialWindowMetrics;
      obj[0] = initialWindowMetrics;
      obj[1] = style;
      obj[2] = children;
      tmp3Result = tmp3(require("module_1584").SafeAreaProvider, obj);
    }
    return tmp3Result;
  }
}
SafeAreaProviderCompat.initialMetrics = initialWindowMetrics;
const styles = StyleSheet.create({ container: { flex: 1 } });

export default SafeAreaProviderCompat;