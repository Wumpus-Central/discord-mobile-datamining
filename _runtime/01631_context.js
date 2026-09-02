// === Module 1631: context ===

// Module 1631 (context)
import closure_2 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
({ Dimensions: c4, StyleSheet } = get_ActivityIndicator);
let context = importAllResult.createContext(null);
let context1 = importAllResult.createContext(null);
const styles = StyleSheet.create({ fill: { flex: 1 } });
let c9 = "No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.";

export const SafeAreaInsetsContext = context;
export const SafeAreaFrameContext = context1;
export const SafeAreaProvider = function SafeAreaProvider(initialMetrics) {
  initialMetrics = initialMetrics.initialMetrics;
  ({ children, initialSafeAreaInsets, style } = initialMetrics);
  const merged = Object.assign(initialMetrics, Object.create(null));
  let _require;
  dependencyMap = undefined;
  let obj = importAllResult;
  context = importAllResult.useContext(context);
  let insets;
  context1 = importAllResult.useContext(context1);
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
  [tmp9, c0] = callback(importAllResult.useState(insets), 2);
  let frame;
  if (initialMetrics != null) {
    frame = initialMetrics.frame;
  }
  if (frame == null) {
    frame = context1;
  }
  if (frame == null) {
    obj = { x: 0, y: 0, width: null, height: null };
    obj[2] = store.get("window").width;
    obj[3] = store.get("window").height;
    frame = obj;
  }
  const tmp2 = context;
  const tmp4 = context1;
  const tmp7 = callback;
  const tmp8 = callback(importAllResult.useState(insets), 2);
  [tmp13, c1] = callback(obj.useState(frame), 2);
  callback = obj.useCallback((nativeEvent) => {
    ({ frame: c0, insets: c1 } = nativeEvent.nativeEvent);
    _undefined2((height) => {
      const size = closure_0;
      if (!closure_0) {
        let tmp = height;
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
      if (arg0) {
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
  obj = { style: items, onInsetsChange: callback };
  items = [closure_8.fill, style];
  const merged1 = Object.assign(merged);
  let tmp15Result = null;
  if (null != tmp9) {
    obj1 = { value: null, children: null };
    obj1[0] = tmp13;
    const obj2 = { value: null, children: null };
    obj2[0] = tmp9;
    obj2[1] = children;
    obj1[1] = tmp15(tmp2.Provider, obj2);
    tmp15Result = tmp15(tmp4.Provider, obj1);
  }
  obj.children = tmp15Result;
  return jsx(_require(1632).NativeSafeAreaProvider, { style: items, onInsetsChange: callback });
};
export const SafeAreaListener = function SafeAreaListener(onChange) {
  onChange = onChange.onChange;
  ({ style, children } = onChange);
  const merged = Object.assign(onChange, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [closure_8.fill, style];
  obj.style = items;
  obj.onInsetsChange = function onInsetsChange(insets) {
    onChange({ insets: insets.nativeEvent.insets, frame: insets.nativeEvent.frame });
  };
  obj.children = children;
  return jsx(onChange(1632).NativeSafeAreaProvider, {});
};
export const useSafeAreaInsets = function useSafeAreaInsets() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    error = new Error(c9);
    throw error;
  } else {
    return context;
  }
};
export const useSafeAreaFrame = function useSafeAreaFrame() {
  context = importAllResult.useContext(context1);
  if (null == context) {
    const _Error = Error;
    error = new Error(c9);
    throw error;
  } else {
    return context;
  }
};
export const withSafeAreaInsets = function withSafeAreaInsets(arg0) {
  closure_0 = arg0;
  return importAllResult.forwardRef((arg0, ref) => {
    context = closure_1_3.useContext(closure_1_6);
    if (null == context) {
      const _Error = Error;
      error = new Error(closure_1_9);
      throw error;
    } else {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.insets = context;
      obj.ref = ref;
      return closure_1_5(closure_0, obj);
    }
  });
};
export const useSafeArea = function useSafeArea() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    error = new Error(c9);
    throw error;
  } else {
    return context;
  }
};
export const SafeAreaConsumer = context.Consumer;
export const SafeAreaContext = context;