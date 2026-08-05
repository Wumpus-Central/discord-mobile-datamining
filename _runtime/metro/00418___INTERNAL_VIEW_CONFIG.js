import { renderElement } from "../00114_renderElement.js";
// _runtime/metro/00418___INTERNAL_VIEW_CONFIG.js
import "noop";
import processColorElement from "processColorElement";
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const require = arg1;
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
    renderElement /* renderElement */.dispatchCommand(_nativeRef, "setNativeRefreshing", items);
  }
};

export default setRuntimeConfigProvider.get("AndroidSwipeRefreshLayout", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;