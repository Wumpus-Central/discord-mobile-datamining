// _runtime/metro/04743___INTERNAL_VIEW_CONFIG.js
import get_ActivityIndicator from "../00017_get_ActivityIndicator.js";
import result from "../00026_result.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
const obj = { text: true, color: result.colorAttribute, fontSize: true, fontFamily: true, fontWeight: true, fontStyle: true, lineHeight: true, letterSpacing: true, textAlign: true, textAlignVertical: true, textDecorationLine: true, numberOfLines: true, ellipsizeMode: true, allowFontScaling: true, maxFontSizeMultiplier: true };
obj[1] = obj;

export default setRuntimeConfigProvider.get("RNPlainText", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;