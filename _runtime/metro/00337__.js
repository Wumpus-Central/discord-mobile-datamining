// _runtime/metro/00337__.js
import _mod26 from "00026__.js";
import codegenNativeCommandsDefault from "../00113_codegenNativeCommands.js";
import 00065__ from "00065__.js";

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RCTImageView", bubblingEventTypes: {}, directEventTypes: { topLoadStart: { registrationName: "onLoadStart" }, topProgress: { registrationName: "onProgress" }, topError: { registrationName: "onError" }, topLoad: { registrationName: "onLoad" }, topLoadEnd: { registrationName: "onLoadEnd" } }, validAttributes: obj2 };
obj2 = { blurRadius: true, defaultSource: true, internal_analyticTag: true, resizeMethod: true, resizeMode: true, resizeMultiplier: true, tintColor: _mod26.colorAttribute, borderBottomLeftRadius: true, borderTopLeftRadius: true, src: true, source: true, borderRadius: true, headers: true, shouldNotifyLoadEvents: true, overlayColor: _mod26.colorAttribute, borderColor: _mod26.colorAttribute, accessible: true, progressiveRenderingEnabled: true, fadeDuration: true, borderBottomRightRadius: true, borderTopRightRadius: true, loadingIndicatorSrc: true };
const tmp2 = codegenNativeCommandsDefault({ supportedCommands: ["setIsVisible_EXPERIMENTAL"] });

export default module_65.get("RCTImageView", () => obj);
export const Commands = tmp2;
export { __INTERNAL_VIEW_CONFIG };