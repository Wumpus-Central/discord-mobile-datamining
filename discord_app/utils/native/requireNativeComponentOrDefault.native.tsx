// === Module 4968: requireNativeComponentOrDefault ===

// Module 4968 (requireNativeComponentOrDefault)
import LoggerDefault from "Logger" /* 3 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

({ requireNativeComponent: closure_0, UIManager: closure_1, View: c2 } = get_ActivityIndicator);
const logger = new LoggerDefault("RequireNativeComponentOrDefault");
const map = new Map();
let result = size.fileFinishedImporting("utils/native/requireNativeComponentOrDefault.native.tsx");

export default function requireNativeComponentOrDefault(warnWhenMissing) {
  ({ componentName, componentFoundInstance, componentMissingFallbackInstance } = warnWhenMissing);
  if (componentMissingFallbackInstance === undefined) {
    componentMissingFallbackInstance = React2;
  }
  let flag = warnWhenMissing.warnWhenMissing;
  if (flag === undefined) {
    flag = true;
  }
  if (framebus.hasViewManagerConfig(componentName)) {
    if (!map.has(componentName)) {
      if (componentFoundInstance == null) {
        componentFoundInstance = React(componentName);
      }
      const result = map.set(componentName, componentFoundInstance);
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