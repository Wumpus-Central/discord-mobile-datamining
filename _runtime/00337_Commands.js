// _runtime/00337_Commands.js
import setRuntimeConfigProviderAll from "00065_setRuntimeConfigProvider.js";
import codegenNativeCommandsDefault from "00113_codegenNativeCommands.js";

let obj = {
  uiViewClassName: "RCTImageView",
  bubblingEventTypes: {},
  directEventTypes: {
    topLoadStart: { registrationName: "onLoadStart" },
    topProgress: { registrationName: "onProgress" },
    topError: { registrationName: "onError" },
    topLoad: { registrationName: "onLoad" },
    topLoadEnd: { registrationName: "onLoadEnd" },
  },
  validAttributes: null,
};
obj = {
  blurRadius: true,
  defaultSource: true,
  internal_analyticTag: true,
  resizeMethod: true,
  resizeMode: true,
  resizeMultiplier: true,
  tintColor: require("result").colorAttribute,
  borderBottomLeftRadius: true,
  borderTopLeftRadius: true,
  src: true,
  source: true,
  borderRadius: true,
  headers: true,
  shouldNotifyLoadEvents: true,
  overlayColor: require("result").colorAttribute,
  borderColor: require("result").colorAttribute,
  accessible: true,
  progressiveRenderingEnabled: true,
  fadeDuration: true,
  borderBottomRightRadius: true,
  borderTopRightRadius: true,
  loadingIndicatorSrc: true,
};
obj[3] = obj;
const tmp2 = codegenNativeCommandsDefault({ supportedCommands: ["setIsVisible_EXPERIMENTAL"] });

export default setRuntimeConfigProviderAll.get("RCTImageView", () => obj);
export const Commands = tmp2;
export const __INTERNAL_VIEW_CONFIG = obj;
