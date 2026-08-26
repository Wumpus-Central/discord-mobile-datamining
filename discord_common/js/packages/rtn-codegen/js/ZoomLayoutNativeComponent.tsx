// === Module 10860: __INTERNAL_VIEW_CONFIG ===

// Module 10860 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import renderElement from "renderElement" /* 114 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "DCDZoomLayoutAndroid", directEventTypes: { topZoomChanged: { registrationName: "onZoomChanged" } }, validAttributes: null };
obj = { gestureEnabled: true, minimumZoomScale: true, maximumZoomScale: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onZoomChanged: true }));
obj[2] = obj;
obj = {
  zoomTo(arg0, arg1, arg2, arg3, arg4) {
    const items = [arg1, arg2, arg3, arg4];
    renderElement.dispatchCommand(arg0, "zoomTo", items);
  },
  unzoom(arg0, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(arg0, "unzoom", items);
  }
};
const value = setRuntimeConfigProvider.get("DCDZoomLayoutAndroid", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;