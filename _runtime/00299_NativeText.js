// === Module 299: NativeText ===

// Module 299 (NativeText)
import measureDefault from "measure" /* 68 */;
import createViewConfig from "createViewConfig" /* 103 */;
import get_BatchedBridgeDefault from "get BatchedBridge" /* 300 */;
import javaScriptFlagGetter from "javaScriptFlagGetter" /* 27 */;

require = arg1;
let closure_2 = { validAttributes: { isHighlighted: true, isPressable: true, numberOfLines: true, ellipsizeMode: true, allowFontScaling: true, dynamicTypeRamp: true, maxFontSizeMultiplier: true, disabled: true, selectable: true, selectionColor: true, adjustsFontSizeToFit: true, minimumFontScale: true, textBreakStrategy: true, onTextLayout: true, dataDetectorType: true, android_hyphenationFrequency: true, lineBreakStrategyIOS: true, gradientColors: true, gradientAngle: true, gradientLength: true, gradientMode: true, textStrokeWidth: true, textStrokeColor: true }, directEventTypes: { topTextLayout: { registrationName: "onTextLayout" } }, uiViewClassName: "RCTText" };
let closure_3 = { validAttributes: { isHighlighted: true, isPressable: true, maxFontSizeMultiplier: true, gradientColors: true, gradientAngle: true, gradientLength: true, gradientMode: true, textStrokeWidth: true, textStrokeColor: true }, uiViewClassName: "RCTVirtualText" };
const tmp2 = get_BatchedBridgeDefault("RCTText", () => createViewConfig.createViewConfig(closure_2));
if (global.RN$Bridgeless) {
  let tmp3 = get_BatchedBridgeDefault("RCTVirtualText", () => createViewConfig.createViewConfig(closure_3));
} else {
  tmp3 = tmp2;
  const importDefaultResult = measureDefault;
}
let tmp4 = tmp2;
if (javaScriptFlagGetter.enablePreparedTextLayout()) {
  tmp4 = get_BatchedBridgeDefault("RCTSelectableText", () => {
    let obj = createViewConfig;
    obj = {};
    const merged = Object.assign(closure_2);
    obj.uiViewClassName = "RCTSelectableText";
    return obj.createViewConfig(obj);
  });
}

export const NativeText = tmp2;
export const NativeVirtualText = tmp3;
export const NativeSelectableText = tmp4;