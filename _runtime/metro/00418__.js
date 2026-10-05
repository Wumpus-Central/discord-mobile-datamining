// _runtime/metro/00418__.js
import _mod26 from "00026__.js";
import renderElement from "../00114_renderElement.js";
import react from "../00019_react.js";
import processColorArray_mod from "../00080_processColorArray.js";
import DynamicallyInjectedByGestureHandler from "../00106_DynamicallyInjectedByGestureHandler.js";
import 00065__ from "00065__.js";

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