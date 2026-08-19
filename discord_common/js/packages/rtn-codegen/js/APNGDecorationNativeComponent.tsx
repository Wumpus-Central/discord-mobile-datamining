// === Module 8406: __INTERNAL_VIEW_CONFIG ===

// Module 8406 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import renderElement from "renderElement" /* 114 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "APNGDecorationView", directEventTypes: { topLoad: { registrationName: "onLoad" } }, validAttributes: null };
obj = { url: true, autoplay: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLoad: true }));
obj[2] = obj;
obj = {
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
const value = setRuntimeConfigProvider.get("APNGDecorationView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;