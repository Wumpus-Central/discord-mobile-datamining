// === Module 5776: requireNativeComponentOrDefault ===

// Module 5776 (requireNativeComponentOrDefault)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let set;

let _window;
let c2;
let map;
({ requireNativeComponent: _window, UIManager: map, View: c2 } = react_native);
const logger = new LoggerDefault("RequireNativeComponentOrDefault");
const tmp3 = new LoggerDefault("RequireNativeComponentOrDefault");
map = new Map();
let result = size.fileFinishedImporting("utils/native/requireNativeComponentOrDefault.native.tsx");

export default function requireNativeComponentOrDefault(warnWhenMissing) {
  let componentFoundInstance;
  let componentMissingFallbackInstance;
  let componentName;
  let value;
  ({ componentName, componentFoundInstance, componentMissingFallbackInstance } = warnWhenMissing);
  if (componentMissingFallbackInstance === undefined) {
    componentMissingFallbackInstance = React2;
  }
  let flag = warnWhenMissing.warnWhenMissing;
  if (flag === undefined) {
    flag = true;
  }
  if (map.hasViewManagerConfig(componentName)) {
    if (!map.has(componentName)) {
      set = map.set;
      if (componentFoundInstance == null) {
        componentFoundInstance = React(componentName);
      }
      const result = set(componentName, componentFoundInstance);
    }
    value = map.get(componentName);
  } else {
    value = componentMissingFallbackInstance;
    if (flag) {
      const _HermesInternal = HermesInternal;
      logger.warn("" + componentName + " not found, you are likely on a branch override without the native code.");
      value = componentMissingFallbackInstance;
    }
  }
  return value;
};