// _runtime/01657_initializersNative.js
import _mod1658 from "metro/01658__.js";
import _mod1796 from "metro/01796__.js";
import _mod1797 from "metro/01797__.js";
import bundleModeNative from "metro/01708__.js";

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
    _mod1658.setCSSEventHandler((arg0) => _mod1658.cssCallbacksRegistry.dispatch(arg0));
    if (obj2.getStaticFeatureFlag("EXPERIMENTAL_CSS_ANIMATIONS_FOR_SVG_COMPONENTS")) {
      const svgCssSupport = _mod1797.initSvgCssSupport();
      const tmp6Result = _mod1797;
    }
    obj2 = _mod1796;
  } else {
    const _Error = Error;
    const error = new Error("[Reanimated] Tried to initialize Reanimated without a valid ReanimatedModule");
    throw error;
  }
}
