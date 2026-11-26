// _runtime/01656_initializersNative.js
import _mod1657 from "metro/01657__.js";
import _mod1795 from "metro/01795__.js";
import _mod1796 from "metro/01796__.js";
import bundleModeNative from "metro/01707__.js";

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
    _mod1657.setCSSEventHandler((arg0) => _mod1657.cssCallbacksRegistry.dispatch(arg0));
    if (obj2.getStaticFeatureFlag("EXPERIMENTAL_CSS_ANIMATIONS_FOR_SVG_COMPONENTS")) {
      const svgCssSupport = _mod1796.initSvgCssSupport();
      const tmp6Result = _mod1796;
    }
    obj2 = _mod1795;
  } else {
    const _Error = Error;
    const error = new Error("[Reanimated] Tried to initialize Reanimated without a valid ReanimatedModule");
    throw error;
  }
}
