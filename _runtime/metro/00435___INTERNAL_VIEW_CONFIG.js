// _runtime/metro/00435___INTERNAL_VIEW_CONFIG.js
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const obj = { initialHidden: true, removeClippedSubviews: true, renderState: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onModeChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("VirtualViewExperimental", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;