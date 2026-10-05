// === Module 418: ? ===

// Module 418
import _mod26 from "module_26" /* 26 */;
import renderElement from "renderElement" /* 114 */;
import react from "react" /* 19 */;
import processColorArray_mod from "processColorArray" /* 80 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "AndroidSwipeRefreshLayout", directEventTypes: { topRefresh: { registrationName: "onRefresh" } }, validAttributes: obj2 };
let processColorArray = processColorArray_mod;
if ("default" in processColorArray) {
  processColorArray = processColorArray.default;
}
obj2 = { enabled: true, colors: { process: processColorArray }, progressBackgroundColor: _mod26.colorAttribute, size: true, progressViewOffset: true, refreshing: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onRefresh: true }));
const obj3 = {
  setNativeRefreshing(_nativeRef, refreshing) {
    const items = [refreshing];
    const obj = renderElement;
    obj.dispatchCommand(_nativeRef, "setNativeRefreshing", items);
  }
};

export default module_65.get("AndroidSwipeRefreshLayout", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj3;