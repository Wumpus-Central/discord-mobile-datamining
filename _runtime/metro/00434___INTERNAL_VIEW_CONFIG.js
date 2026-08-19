// === Module 434: __INTERNAL_VIEW_CONFIG ===

// Module 434 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { initialHidden: true, removeClippedSubviews: true, renderState: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onModeChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("VirtualView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;