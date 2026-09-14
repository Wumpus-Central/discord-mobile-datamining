// === Module 9745: ZoomLayoutNativeComponent ===

// Module 9745 (ZoomLayoutNativeComponent)
import renderElement from "renderElement" /* 114 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDZoomLayoutAndroid", directEventTypes: { topZoomChanged: { registrationName: "onZoomChanged" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onZoomChanged: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { gestureEnabled: true, minimumZoomScale: true, maximumZoomScale: true };
const value = module_65.get("DCDZoomLayoutAndroid", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  zoomTo(arg0, arg1, arg2, arg3, arg4) {
    const items = [arg1, arg2, arg3, arg4];
    renderElement.dispatchCommand(arg0, "zoomTo", items);
  },
  unzoom(arg0, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(arg0, "unzoom", items);
  }
};