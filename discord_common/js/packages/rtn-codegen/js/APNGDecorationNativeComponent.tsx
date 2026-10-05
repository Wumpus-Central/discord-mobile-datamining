// === Module 8465: APNGDecorationNativeComponent ===

// Module 8465 (APNGDecorationNativeComponent)
import renderElement from "renderElement" /* 114 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "APNGDecorationView", directEventTypes: { topLoad: { registrationName: "onLoad" } }, validAttributes: obj2 };
obj2 = { url: true, autoplay: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onLoad: true }));
const obj3 = {
  play(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "play", []);
  },
  pause(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "pause", []);
  },
  seek(nodeFromPublicInstance, arg1) {
    const items = [arg1];
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "seek", items);
  }
};
const value = module_65.get("APNGDecorationView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj3;