// === Module 8809: APNGDecorationNativeComponent ===

// Module 8809 (APNGDecorationNativeComponent)
import renderElement from "renderElement" /* 114 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let Commands = { uiViewClassName: "APNGDecorationView", directEventTypes: { topLoad: { registrationName: "onLoad" } }, validAttributes: null };
Commands = { url: true, autoplay: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLoad: true }));
Commands.validAttributes = Commands;
Commands = {
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
const value = module_65.get("APNGDecorationView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = Commands;
export { Commands };