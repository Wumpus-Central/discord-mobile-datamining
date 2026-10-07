// discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx
import renderElement from "../../../../../_runtime/00114_renderElement.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import 00065__ from "../../../../../_runtime/metro/00065__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "APNGDecorationView", directEventTypes: { topLoad: { registrationName: "onLoad" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLoad: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { url: true, autoplay: true };
const value = module_65.get("APNGDecorationView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  play(arg0) {
    renderElement.dispatchCommand(arg0, "play", []);
  },
  pause(arg0) {
    renderElement.dispatchCommand(arg0, "pause", []);
  },
  seek(arg0, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(arg0, "seek", items);
  }
};