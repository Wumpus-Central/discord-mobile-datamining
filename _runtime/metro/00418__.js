// _runtime/metro/00418__.js
import renderElement from "../00114_renderElement.js";
import noop from "00019__.js";

require = fn;
const __INTERNAL_VIEW_CONFIG = {
  uiViewClassName: "AndroidSwipeRefreshLayout",
  directEventTypes: { topRefresh: { registrationName: "onRefresh" } },
  validAttributes: null,
};
let processColorElement = fn(80);
if ("default" in processColorElement) {
  processColorElement = processColorElement.default;
}
const weakSet = fn(106);
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onRefresh: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = {
  enabled: true,
  colors: { process: processColorElement },
  progressBackgroundColor: fn(26).colorAttribute,
  size: true,
  progressViewOffset: true,
  refreshing: true,
};
const module_65 = fn(65);

export default module_65.get("AndroidSwipeRefreshLayout", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  setNativeRefreshing(_nativeRef, refreshing) {
    const items = [refreshing];
    renderElement.dispatchCommand(_nativeRef, "setNativeRefreshing", items);
  },
};
