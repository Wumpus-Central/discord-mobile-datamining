// _runtime/metro/01615__.js
import NativeSafeAreaProvider from "../01616_NativeSafeAreaProvider.js";
import _slicedToArray from "00032__.js";
import noop from "00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Dimensions: closure_4, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let context = noop.createContext(null);
let context1 = noop.createContext(null);
const styles = StyleSheet.create({ fill: { flex: 1 } });
let c9 = "No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.";

export const SafeAreaInsetsContext = context;
export const SafeAreaFrameContext = context1;
export const SafeAreaProvider = function SafeAreaProvider(initialMetrics) {
  initialMetrics = initialMetrics.initialMetrics;
  ({ children, initialSafeAreaInsets, style } = initialMetrics);
  const merged = Object.assign(
    initialMetrics,
    Object.assign({ children: 0, initialMetrics: 0, initialSafeAreaInsets: 0, style: 0 }),
  );
  c0 = undefined;
  c1 = undefined;
  let obj = noop;
  context = noop.useContext(context);
  let insets;
  context1 = noop.useContext(context1);
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
  [tmp9, c0] = _slicedToArray(noop.useState(insets), 2);
  let frame;
  if (initialMetrics != null) {
    frame = initialMetrics.frame;
  }
  if (frame == null) {
    frame = context1;
  }
  if (frame == null) {
    let size = { x: 0, y: 0, width: React4.get("window").width, height: React4.get("window").height };
    frame = size;
  }
  const tmp2 = context;
  const tmp4 = context1;
  const tmp8 = _slicedToArray(noop.useState(insets), 2);
  [tmp13, c1] = _slicedToArray(obj.useState(frame), 2);
  const callback = obj.useCallback((nativeEvent) => {
    ({ frame: c0, insets: c1 } = nativeEvent.nativeEvent);
    _undefined2((height) => {
      const size = _undefined;
      if (!_undefined) {
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
  obj = { style: null, onInsetsChange: callback };
  const items = [closure_8.fill, style];
  obj.style = items;
  const merged1 = Object.assign(merged);
  let tmp15Result = null;
  if (null != tmp9) {
    obj = { value: tmp13, children: null };
    const obj1 = { value: tmp9, children };
    obj.children = tmp15(tmp2.Provider, obj1);
    tmp15Result = tmp15(tmp4.Provider, obj);
  }
  obj.children = tmp15Result;
  return jsx(NativeSafeAreaProvider.NativeSafeAreaProvider, { style: null, onInsetsChange: callback });
};
export const SafeAreaListener = function SafeAreaListener(onChange) {
  onChange = onChange.onChange;
  ({ style, children } = onChange);
  const merged = Object.assign(onChange, Object.assign({ onChange: 0, style: 0, children: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [closure_8.fill, style];
  obj.style = items;
  obj.onInsetsChange = function onInsetsChange(insets) {
    onChange({ insets: insets.nativeEvent.insets, frame: insets.nativeEvent.frame });
  };
  obj.children = children;
  return jsx(NativeSafeAreaProvider.NativeSafeAreaProvider, {});
};
export const useSafeAreaInsets = function useSafeAreaInsets() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error(c9);
    throw error;
  } else {
    return context;
  }
};
export const useSafeAreaFrame = function useSafeAreaFrame() {
  context = noop.useContext(context1);
  if (null == context) {
    const _Error = Error;
    const error = new Error(c9);
    throw error;
  } else {
    return context;
  }
};
export const withSafeAreaInsets = function withSafeAreaInsets(arg0) {
  closure_0 = arg0;
  return noop.forwardRef((arg0, ref) => {
    context = noop.useContext(context);
    if (null == context) {
      const _Error = Error;
      const error = new Error(c9);
      throw error;
    } else {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.insets = context;
      obj.ref = ref;
      return <closure_0 />;
    }
  });
};
export const useSafeArea = function useSafeArea() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error(c9);
    throw error;
  } else {
    return context;
  }
};
export const SafeAreaConsumer = context.Consumer;
export const SafeAreaContext = context;
