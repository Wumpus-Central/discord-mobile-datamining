// discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx
import renderElement from "../../../../../_runtime/00114_renderElement.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import 00065__ from "../../../../../_runtime/metro/00065__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDZoomLayoutAndroid", directEventTypes: { topZoomChanged: { registrationName: "onZoomChanged" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onZoomChanged: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { gestureEnabled: true, minimumZoomScale: true, maximumZoomScale: true };
const value = module_65.get("DCDZoomLayoutAndroid", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  zoomTo(nodeFromPublicInstance, arg1, arg2, arg3, arg4) {
    items = [arg1, arg2, arg3, arg4];
    renderElement.dispatchCommand(nodeFromPublicInstance, "zoomTo", items);
  },
  unzoom(nodeFromPublicInstance, arg1) {
    items = [arg1];
    renderElement.dispatchCommand(nodeFromPublicInstance, "unzoom", items);
  }
};