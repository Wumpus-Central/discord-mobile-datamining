// === Module 6073: SafeAreaProviderCompat ===

// Module 6073 (SafeAreaProviderCompat)
import Fragment from "Fragment" /* 21 */;
import _mod1621 from "module_1621" /* 1621 */;
import FrameSizeProvider from "FrameSizeProvider" /* 6050 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let Dimensions;
let Platform;
let StyleSheet;
let c3;
let initialWindowMetrics;
let size1;
let react = react_mod;
({ Dimensions, Platform, StyleSheet, View: c3 } = react_native);
const jsx = Fragment.jsx;
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
if (null == _mod1621.initialWindowMetrics) {
  const obj = { frame: size1, insets: { top: 0, left: 0, right: 0, bottom: 0 } };
  size1 = { x: 0, y: 0, width: num, height: num2 };
  initialWindowMetrics = obj;
} else {
  initialWindowMetrics = _mod1621.initialWindowMetrics;
}
class SafeAreaProviderCompat {
  constructor(arg0) {
    let children;
    let closure_2;
    let container;
    let style;
    ({ children: require, style: dependencyMap } = arg0);
    react = undefined;
    react = react.useContext(_mod1621.SafeAreaInsetsContext);
    return jsx(FrameSizeProvider.FrameSizeProvider, {
      initialFrame: initialWindowMetrics.frame,
      render(onLayout) {
        let tmp2Result;
        onLayout = onLayout.onLayout;
        if (closure_2) {
          const items = [container.container, dependencyMap];
          tmp2Result = <_false ref={tmp} onLayout={onLayout} style={items}>{require}</_false>;
        } else {
          tmp2Result = jsx(_mod1621.SafeAreaProvider, { initialMetrics: initialWindowMetrics, style: dependencyMap, onLayout, children: require });
        }
        return tmp2Result;
      }
    });
  }
}
SafeAreaProviderCompat.initialMetrics = initialWindowMetrics;
const styles = StyleSheet.create({ container: { flex: 1 } });

export { SafeAreaProviderCompat };