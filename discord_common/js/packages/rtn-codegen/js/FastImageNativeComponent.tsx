// === Module 5502: __INTERNAL_VIEW_CONFIG ===

// Module 5502 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "DCDFastImageView", directEventTypes: { topLoadStart: { registrationName: "onLoadStart" }, topProgress: { registrationName: "onProgress" }, topError: { registrationName: "onError" }, topLoad: { registrationName: "onLoad" }, topLoadEnd: { registrationName: "onLoadEnd" } }, validAttributes: null };
obj = { source: true, resizeMode: true, placeholder: true, enableAnimation: true, paused: true, manualPlayback: true, fade: true, usesSmallCache: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLoadStart: true, onProgress: true, onError: true, onLoad: true, onLoadEnd: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("DCDFastImageView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/FastImageNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;