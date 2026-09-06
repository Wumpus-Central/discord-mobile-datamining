// _runtime/00299_NativeText.js
import measureDefault from "00068_measure.js";
import _mod103 from "metro/00103__.js";
import _modDef300 from "metro/00300__.js";

require = fn;
let obj = {
  validAttributes: {
    isHighlighted: true,
    isPressable: true,
    numberOfLines: true,
    ellipsizeMode: true,
    allowFontScaling: true,
    dynamicTypeRamp: true,
    maxFontSizeMultiplier: true,
    disabled: true,
    selectable: true,
    selectionColor: true,
    adjustsFontSizeToFit: true,
    minimumFontScale: true,
    textBreakStrategy: true,
    onTextLayout: true,
    dataDetectorType: true,
    android_hyphenationFrequency: true,
    lineBreakStrategyIOS: true,
    gradientColors: true,
    gradientAngle: true,
    gradientLength: true,
    gradientMode: true,
    textStrokeWidth: true,
    textStrokeColor: true,
  },
  directEventTypes: { topTextLayout: { registrationName: "onTextLayout" } },
  uiViewClassName: "RCTText",
};
let closure_3 = {
  validAttributes: {
    isHighlighted: true,
    isPressable: true,
    maxFontSizeMultiplier: true,
    gradientColors: true,
    gradientAngle: true,
    gradientLength: true,
    gradientMode: true,
    textStrokeWidth: true,
    textStrokeColor: true,
  },
  uiViewClassName: "RCTVirtualText",
};
const tmp2 = _modDef300("RCTText", () => {
  obj = _mod103;
  return obj.createViewConfig(obj);
});
if (global.RN$Bridgeless) {
  let tmp3 = _modDef300("RCTVirtualText", () => _mod103.createViewConfig(closure_3));
} else {
  tmp3 = tmp2;
  const importDefaultResult = measureDefault;
}
const javaScriptFlagGetter = fn(27);
let tmp4 = tmp2;
if (javaScriptFlagGetter.enablePreparedTextLayout()) {
  tmp4 = _modDef300("RCTSelectableText", () => {
    obj = {};
    const merged = Object.assign(obj);
    obj.uiViewClassName = "RCTSelectableText";
    return obj.createViewConfig(obj);
  });
}

export const NativeText = tmp2;
export const NativeVirtualText = tmp3;
export const NativeSelectableText = tmp4;
