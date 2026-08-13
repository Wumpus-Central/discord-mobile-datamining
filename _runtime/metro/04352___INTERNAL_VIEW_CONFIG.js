// _runtime/metro/04352___INTERNAL_VIEW_CONFIG.js
import { codegenNativeComponent } from "get ActivityIndicator";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNPlainText", validAttributes: null };
obj = { text: true, color: require("result").colorAttribute, fontSize: true, fontFamily: true, fontWeight: true, fontStyle: true, lineHeight: true, letterSpacing: true, textAlign: true, textAlignVertical: true, textDecorationLine: true, numberOfLines: true, ellipsizeMode: true, allowFontScaling: true, maxFontSizeMultiplier: true };
obj[1] = obj;

export default setRuntimeConfigProvider.get("RNPlainText", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;