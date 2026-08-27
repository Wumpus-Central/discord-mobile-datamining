// _runtime/metro/08185___INTERNAL_VIEW_CONFIG.js
import result from "../00026_result.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

let obj = { uiViewClassName: "RNSVGSvgViewAndroid", validAttributes: null };
obj = { bbWidth: true, bbHeight: true, minX: true, minY: true, vbWidth: true, vbHeight: true, align: true, meetOrSlice: true, color: result.colorAttribute, pointerEvents: true, hasTVPreferredFocus: true, borderBottomColor: result.colorAttribute, nextFocusDown: true, borderRightColor: result.colorAttribute, nextFocusRight: true, borderLeftColor: result.colorAttribute, borderColor: result.colorAttribute, removeClippedSubviews: true, nextFocusForward: true, nextFocusUp: true, accessible: true, borderStartColor: result.colorAttribute, borderEndColor: result.colorAttribute, focusable: true, nativeBackgroundAndroid: true, nativeForegroundAndroid: true, backfaceVisibility: true, borderStyle: true, needsOffscreenAlphaCompositing: true, hitSlop: true, borderTopColor: result.colorAttribute, nextFocusLeft: true, borderBlockColor: result.colorAttribute, borderBlockEndColor: result.colorAttribute, borderBlockStartColor: result.colorAttribute, borderRadius: true, borderTopLeftRadius: true, borderTopRightRadius: true, borderBottomRightRadius: true, borderBottomLeftRadius: true, borderTopStartRadius: true, borderTopEndRadius: true, borderBottomStartRadius: true, borderBottomEndRadius: true, borderEndEndRadius: true, borderEndStartRadius: true, borderStartEndRadius: true, borderStartStartRadius: true };
obj[1] = obj;

export default setRuntimeConfigProvider.get("RNSVGSvgViewAndroid", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;