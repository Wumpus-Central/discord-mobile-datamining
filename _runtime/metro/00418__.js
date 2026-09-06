// === Module 418: ? ===

// Module 418
import renderElement from "renderElement" /* 114 */;
import noop from "module_19" /* 19 */;

require = fn;
let Commands = { uiViewClassName: "AndroidSwipeRefreshLayout", directEventTypes: { topRefresh: { registrationName: "onRefresh" } }, validAttributes: null };
let processColorElement = fn(80);
if ("default" in processColorElement) {
  processColorElement = processColorElement.default;
}
Commands = { enabled: true, colors: { process: processColorElement }, progressBackgroundColor: fn(26).colorAttribute, size: true, progressViewOffset: true, refreshing: true };
const weakSet = fn(106);
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onRefresh: true }));
Commands.validAttributes = Commands;
const module_65 = fn(65);
Commands = {
  setNativeRefreshing(_nativeRef, refreshing) {
    const items = [refreshing];
    renderElement.dispatchCommand(_nativeRef, "setNativeRefreshing", items);
  }
};

export default module_65.get("AndroidSwipeRefreshLayout", () => obj);
export const __INTERNAL_VIEW_CONFIG = Commands;
export { Commands };