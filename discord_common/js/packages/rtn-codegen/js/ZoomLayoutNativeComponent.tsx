// discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx
import renderElement from "../../../../../_runtime/00114_renderElement.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import 00065__ from "../../../../../_runtime/metro/00065__.js";
import size from "../../../../../_runtime/metro/00002__.js";

let Commands = { uiViewClassName: "DCDZoomLayoutAndroid", directEventTypes: { topZoomChanged: { registrationName: "onZoomChanged" } }, validAttributes: null };
Commands = { gestureEnabled: true, minimumZoomScale: true, maximumZoomScale: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onZoomChanged: true }));
Commands.validAttributes = Commands;
Commands = {
  zoomTo(arg0, arg1, arg2, arg3, arg4) {
    const items = [arg1, arg2, arg3, arg4];
    renderElement.dispatchCommand(arg0, "zoomTo", items);
  },
  unzoom(arg0, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(arg0, "unzoom", items);
  }
};
const value = module_65.get("DCDZoomLayoutAndroid", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = Commands;
export { Commands };