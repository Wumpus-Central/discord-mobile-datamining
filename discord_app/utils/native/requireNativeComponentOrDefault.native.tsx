// === Module 4659: map ===

// Module 4659 (map)
import get_ActivityIndicator from "get ActivityIndicator";

let c0;
let closure_1;
let obj1;
({ requireNativeComponent: c0, UIManager: closure_1, View: obj1 } = get_ActivityIndicator);
let c3 = new require("timestamp")("RequireNativeComponentOrDefault");
const map = new Map();
const tmp3 = new require("timestamp")("RequireNativeComponentOrDefault");
let result = require("set").fileFinishedImporting("utils/native/requireNativeComponentOrDefault.native.tsx");

export default function requireNativeComponentOrDefault(warnWhenMissing) {
  let componentFoundInstance;
  let componentMissingFallbackInstance;
  let componentName;
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
      const result = obj.set(componentName, componentFoundInstance);
    }
    let value = obj.get(componentName);
  } else {
    value = componentMissingFallbackInstance;
    if (flag) {
      const _HermesInternal = HermesInternal;
      globalThis.warn("" + componentName + " not found, you are likely on a branch override without the native code.");
      value = componentMissingFallbackInstance;
    }
  }
  return value;
};