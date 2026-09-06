// discord_app/utils/native/requireNativeComponentOrDefault.native.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import get_ActivityIndicator from "../../../_runtime/metro/00017__.js";
import size from "../../../_runtime/metro/00002__.js";

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
      const result = obj.set(componentName, componentFoundInstance);
    }
    value = obj.get(componentName);
  } else {
    value = componentMissingFallbackInstance;
    if (flag) {
      const _HermesInternal = HermesInternal;
      logger.warn("" + componentName + " not found, you are likely on a branch override without the native code.");
      value = componentMissingFallbackInstance;
    }
  }
  return value;
}
