// === Module 1655: initializersNative ===

// Module 1655 (initializersNative)
import _mod1656 from "module_1656" /* 1656 */;
import _mod1794 from "module_1794" /* 1794 */;
import _mod1795 from "module_1795" /* 1795 */;
import bundleModeNative from "module_1706" /* 1706 */;

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
    _mod1656.setCSSEventHandler((arg0) => _mod1656.cssCallbacksRegistry.dispatch(arg0));
    if (obj2.getStaticFeatureFlag("EXPERIMENTAL_CSS_ANIMATIONS_FOR_SVG_COMPONENTS")) {
      const svgCssSupport = _mod1795.initSvgCssSupport();
      const tmp6Result = _mod1795;
    }
    obj2 = _mod1794;
  } else {
    const _Error = Error;
    const error = new Error("[Reanimated] Tried to initialize Reanimated without a valid ReanimatedModule");
    throw error;
  }
}