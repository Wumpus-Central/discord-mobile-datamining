// === Module 1622: ? ===

// Module 1622
import Fragment from "Fragment" /* 21 */;
import NativeSafeAreaProvider2 from "NativeSafeAreaProvider" /* 1623 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let size;

let StyleSheet;
let closure_4;
({ Dimensions: closure_4, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let context = react.createContext(null);
let context1 = react.createContext(null);
const styles = StyleSheet.create({ fill: { flex: 1 } });
let c9 = "No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.";

export const SafeAreaInsetsContext = context;
export const SafeAreaFrameContext = context1;
export const SafeAreaProvider = function SafeAreaProvider(initialMetrics) {
  let c0;
  let c1;
  let children;
  let initialSafeAreaInsets;
  let style;
  let tmp13;
  let tmp9;
  initialMetrics = initialMetrics.initialMetrics;
  ({ children, initialSafeAreaInsets, style } = initialMetrics);
  const merged = Object.assign(initialMetrics, Object.assign({ children: 0, initialMetrics: 0, initialSafeAreaInsets: 0, style: 0 }));
  c0 = undefined;
  c1 = undefined;
  context = react.useContext(context);
  let insets;
  const tmp4 = context1;
  context1 = react.useContext(context1);
  const useState = react.useState;
  if (initialMetrics != null) {
    insets = initialMetrics.insets;
  }
  if (insets == null) {
    insets = initialSafeAreaInsets;
  }
  if (insets == null) {
    insets = context;
  }
  if (insets == null) {
    insets = null;
  }
  [tmp9, c0] = useState(insets);
  let frame;
  const useState2 = react.useState;
  _slicedToArray(useState(insets), 2);
  if (initialMetrics != null) {
    frame = initialMetrics.frame;
  }
  if (frame == null) {
    frame = context1;
  }
  if (frame == null) {
    size = { x: 0, y: 0, width: React3.get("window").width, height: React3.get("window").height };
    frame = size;
  }
  [tmp13, c1] = useState2(frame);
  _slicedToArray(useState2(frame), 2);
  const callback = react.useCallback((nativeEvent) => {
    let closure_129_0;
    let closure_129_1;
    ({ frame: closure_129_0, insets: closure_129_1 } = nativeEvent.nativeEvent);
    let tmp = _undefined2((height) => {
      let tmp;
      size = closure_1_0;
      if (!size) {
        tmp = height;
      } else {
        tmp = size;
        if (size.height === height.height) {
          tmp = size;
          if (size.width === height.width) {
            tmp = size;
            if (size.x === height.x) {
              tmp = size;
            }
          }
        }
      }
      return tmp;
    });
    _undefined((arg0) => {
      let rect = arg0;
      if (rect) {
        const rect2 = bottom;
        if (bottom.bottom === rect.bottom) {
          if (rect2.left === rect.left) {
            return rect;
          }
        }
      }
      rect = bottom;
    });
  }, []);
  const items = [closure_8.fill, style];
  const NativeSafeAreaProvider = NativeSafeAreaProvider2.NativeSafeAreaProvider;
  const merged1 = Object.assign(merged);
  let tmp15Result = null;
  if (null != tmp9) {
    const Provider = tmp4.Provider;
    tmp15Result = <Provider value={tmp13}>{null}</Provider>;
  }
  return <NativeSafeAreaProvider style={items} onInsetsChange={callback}>{tmp15Result}</NativeSafeAreaProvider>;
};
export const SafeAreaListener = function SafeAreaListener(onChange) {
  let children;
  let style;
  onChange = onChange.onChange;
  ({ style, children } = onChange);
  const merged = Object.assign(onChange, Object.assign({ onChange: 0, style: 0, children: 0 }));
  const NativeSafeAreaProvider = NativeSafeAreaProvider2.NativeSafeAreaProvider;
  const merged1 = Object.assign(merged);
  const items = [closure_8.fill, style];
  return <NativeSafeAreaProvider style={items} onInsetsChange={function onInsetsChange(insets) {
    const obj = { insets: insets.nativeEvent.insets, frame: insets.nativeEvent.frame };
    onChange(obj);
  }}>{children}</NativeSafeAreaProvider>;
};
export const useSafeAreaInsets = function useSafeAreaInsets() {
  context = react.useContext(context);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error(c9);
    throw error;
  } else {
    return context;
  }
};
export const useSafeAreaFrame = function useSafeAreaFrame() {
  context = react.useContext(context1);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error(c9);
    throw error;
  } else {
    return context;
  }
};
export const withSafeAreaInsets = function withSafeAreaInsets(arg0) {
  let closure_0 = arg0;
  return react.forwardRef(function(arg0, ref) {
    context = react.useContext(context);
    if (null == context) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(c9);
      throw error;
    } else {
      const merged = Object.assign(arg0);
      return <closure_0 insets={context} ref={ref} />;
    }
  });
};
export const useSafeArea = function useSafeArea() {
  context = react.useContext(context);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error(c9);
    throw error;
  } else {
    return context;
  }
};
export const SafeAreaConsumer = context.Consumer;
export const SafeAreaContext = context;