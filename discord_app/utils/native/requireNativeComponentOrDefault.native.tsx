// === Module 4728: map ===

// Module 4728 (map)
import obj132 from "obj132" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

({ requireNativeComponent: c0, UIManager: closure_1, View: obj1 } = get_ActivityIndicator);
let closure_3 = new timestampDefault("RequireNativeComponentOrDefault");
const map = new Map();
const tmp3 = new timestampDefault("RequireNativeComponentOrDefault");
let result = obj132.fileFinishedImporting("utils/native/requireNativeComponentOrDefault.native.tsx");

export default function requireNativeComponentOrDefault(warnWhenMissing) {
  ({ componentName, componentFoundInstance, componentMissingFallbackInstance } = warnWhenMissing);
  if (componentMissingFallbackInstance === undefined) {
    componentMissingFallbackInstance = closure_2;
  }
  let flag = warnWhenMissing.warnWhenMissing;
  if (flag === undefined) {
    flag = true;
  }
  if (closure_1.hasViewManagerConfig(componentName)) {
    if (!map.has(componentName)) {
      if (componentFoundInstance == null) {
        componentFoundInstance = callback(componentName);
      }
      const result = map.set(componentName, componentFoundInstance);
    }
    let value = map.get(componentName);
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