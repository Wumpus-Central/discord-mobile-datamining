// === Module 1654: initializersNative ===

// Module 1654 (initializersNative)
import _mod1655 from "module_1655" /* 1655 */;
import _mod1793 from "module_1793" /* 1793 */;
import _mod1794 from "module_1794" /* 1794 */;
import bundleModeNative from "module_1705" /* 1705 */;

globalThis.__toggleSlowAnimationsOnUIRuntime = () => bundleModeNative.toggleSlowAnimationsOnUIRuntime();
const items = [{ code: "(function pnpm_initializersNativeTs1(){global._tagToJSPropNamesMapping={};})" }];
[tmp2] = items;
function pnpm_initializersNativeTs1() {
  global._tagToJSPropNamesMapping = {};
}
pnpm_initializersNativeTs1.__workletHash = 4559181787150;
pnpm_initializersNativeTs1.__initData = tmp2;
bundleModeNative.runOnUISync(pnpm_initializersNativeTs1);

export function initializeReanimatedModule(ReanimatedModule) {
  if (ReanimatedModule) {
    _mod1655.setCSSEventHandler((arg0) => _mod1655.cssCallbacksRegistry.dispatch(arg0));
    if (obj2.getStaticFeatureFlag("EXPERIMENTAL_CSS_ANIMATIONS_FOR_SVG_COMPONENTS")) {
      const svgCssSupport = _mod1794.initSvgCssSupport();
      const tmp6Result = _mod1794;
    }
    obj2 = _mod1793;
  } else {
    const _Error = Error;
    const error = new Error("[Reanimated] Tried to initialize Reanimated without a valid ReanimatedModule");
    throw error;
  }
}