// _runtime/metro/00025___INTERNAL_VIEW_CONFIG.js
import result from "../00026_result.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

let obj = { uiViewClassName: "AndroidProgressBar", validAttributes: null };
obj = {
  styleAttr: true,
  typeAttr: true,
  indeterminate: true,
  progress: true,
  animating: true,
  color: result.colorAttribute,
  testID: true,
};
obj[1] = obj;

export default setRuntimeConfigProvider.get("AndroidProgressBar", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
