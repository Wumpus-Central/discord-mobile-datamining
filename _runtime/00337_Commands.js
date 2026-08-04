// _runtime/00337_Commands.js
let obj = { uiViewClassName: "RCTImageView", bubblingEventTypes: {}, directEventTypes: { topLoadStart: { registrationName: "onLoadStart" }, topProgress: { registrationName: "onProgress" }, topError: { registrationName: "onError" }, topLoad: { registrationName: "onLoad" }, topLoadEnd: { registrationName: "onLoadEnd" } }, validAttributes: null };
obj = { blurRadius: true, defaultSource: true, internal_analyticTag: true, resizeMethod: true, resizeMode: true, resizeMultiplier: true, tintColor: null, borderBottomLeftRadius: true, borderTopLeftRadius: true, src: true, source: true, borderRadius: true, headers: true, shouldNotifyLoadEvents: true, overlayColor: null, borderColor: null, accessible: true, progressiveRenderingEnabled: true, fadeDuration: true, borderBottomRightRadius: true, borderTopRightRadius: true, loadingIndicatorSrc: true };
obj[6] = require("result").colorAttribute;
obj[14] = require("result").colorAttribute;
obj[15] = require("result").colorAttribute;
obj[3] = obj;
const tmp2 = require("codegenNativeCommands")({ supportedCommands: ["setIsVisible_EXPERIMENTAL"] });

export default require("setRuntimeConfigProvider").get("RCTImageView", () => obj);
export const Commands = tmp2;
export const __INTERNAL_VIEW_CONFIG = obj;