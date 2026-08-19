// _runtime/metro/00418___INTERNAL_VIEW_CONFIG.js
import noopAll from "../00019_noop.js";
import renderElement from "../00114_renderElement.js";
import processColorElement from "../00080_processColorElement.js";
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

require = fn;
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