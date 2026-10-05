// discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx
import renderElement from "../../../../../_runtime/00114_renderElement.js";
import DynamicallyInjectedByGestureHandler from "../../../../../_runtime/00106_DynamicallyInjectedByGestureHandler.js";
import 00065__ from "../../../../../_runtime/metro/00065__.js";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDZoomLayoutAndroid", directEventTypes: { topZoomChanged: { registrationName: "onZoomChanged" } }, validAttributes: obj2 };
obj2 = { gestureEnabled: true, minimumZoomScale: true, maximumZoomScale: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onZoomChanged: true }));
const obj3 = {
  zoomTo(nodeFromPublicInstance, arg1, arg2, arg3, arg4) {
    const items = [arg1, arg2, arg3, arg4];
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "zoomTo", items);
  },
  unzoom(nodeFromPublicInstance, arg1) {
    const items = [arg1];
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "unzoom", items);
  }
};
const value = module_65.get("DCDZoomLayoutAndroid", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj3;