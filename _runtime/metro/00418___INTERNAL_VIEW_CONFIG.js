// === Module 418: __INTERNAL_VIEW_CONFIG ===

// Module 418 (__INTERNAL_VIEW_CONFIG)
import noopAll from "noop" /* 19 */;
import renderElement from "renderElement" /* 114 */;
import processColorElement from "processColorElement" /* 80 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

require = arg1;
noopAll;
let obj = { uiViewClassName: "AndroidSwipeRefreshLayout", directEventTypes: { topRefresh: { registrationName: "onRefresh" } }, validAttributes: null };
if ("default" in processColorElement) {
  processColorElement = processColorElement.default;
}
obj = { enabled: true, colors: { process: processColorElement }, progressBackgroundColor: require("result").colorAttribute, size: true, progressViewOffset: true, refreshing: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onRefresh: true }));
obj[2] = obj;
obj = {
  setNativeRefreshing(_nativeRef, refreshing) {
    const items = [refreshing];
    renderElement.dispatchCommand(_nativeRef, "setNativeRefreshing", items);
  }
};

export default setRuntimeConfigProvider.get("AndroidSwipeRefreshLayout", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;