// _runtime/00299_NativeText.js
import javaScriptFlagGetter from "javaScriptFlagGetter";
import { createViewConfig } from "00103_createViewConfig.js";

const require = arg1;
let closure_2 = { validAttributes: { isHighlighted: true, isPressable: true, numberOfLines: true, ellipsizeMode: true, allowFontScaling: true, dynamicTypeRamp: true, maxFontSizeMultiplier: true, disabled: true, selectable: true, selectionColor: true, adjustsFontSizeToFit: true, minimumFontScale: true, textBreakStrategy: true, onTextLayout: true, dataDetectorType: true, android_hyphenationFrequency: true, lineBreakStrategyIOS: true, gradientColors: true, gradientAngle: true, gradientLength: true, gradientWidth: true, gradientMode: true, textStrokeWidth: true, textStrokeColor: true }, directEventTypes: { topTextLayout: { registrationName: "onTextLayout" } }, uiViewClassName: "RCTText" };
let closure_3 = { validAttributes: { isHighlighted: true, isPressable: true, maxFontSizeMultiplier: true, gradientColors: true, gradientAngle: true, gradientLength: true, gradientWidth: true, gradientMode: true, textStrokeWidth: true, textStrokeColor: true }, uiViewClassName: "RCTVirtualText" };
const tmp2 = require("get BatchedBridge")("RCTText", () => createViewConfig /* createViewConfig */.createViewConfig(closure_2));
if (global.RN$Bridgeless) {
  let tmp3 = require("get BatchedBridge")("RCTVirtualText", () => createViewConfig /* createViewConfig */.createViewConfig(closure_3));
} else {
  tmp3 = tmp2;
  const importDefaultResult = require("measure");
}
let tmp4 = tmp2;
if (javaScriptFlagGetter.enablePreparedTextLayout()) {
  tmp4 = require("get BatchedBridge")("RCTSelectableText", () => {
    let obj = createViewConfig /* createViewConfig */;
    obj = {};
    const merged = Object.assign(closure_2);
    obj.uiViewClassName = "RCTSelectableText";
    return obj.createViewConfig(obj);
  });
}

export const NativeText = tmp2;
export const NativeVirtualText = tmp3;
export const NativeSelectableText = tmp4;