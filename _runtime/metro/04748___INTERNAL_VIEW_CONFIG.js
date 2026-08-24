// === Module 4748: __INTERNAL_VIEW_CONFIG ===

// Module 4748 (__INTERNAL_VIEW_CONFIG)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import result from "result" /* 26 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
let obj = { uiViewClassName: "RNPlainText", validAttributes: null };
obj = { text: true, color: result.colorAttribute, fontSize: true, fontFamily: true, fontWeight: true, fontStyle: true, lineHeight: true, letterSpacing: true, textAlign: true, textAlignVertical: true, textDecorationLine: true, numberOfLines: true, ellipsizeMode: true, allowFontScaling: true, maxFontSizeMultiplier: true };
obj[1] = obj;

export default setRuntimeConfigProvider.get("RNPlainText", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;