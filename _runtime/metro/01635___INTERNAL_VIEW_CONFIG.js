// === Module 1635: __INTERNAL_VIEW_CONFIG ===

// Module 1635 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onInsetsChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNCSafeAreaProvider", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;