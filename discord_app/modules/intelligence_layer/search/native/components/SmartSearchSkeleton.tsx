// === Module 16698: SmartSearchSkeleton ===

// Module 16698 (SmartSearchSkeleton)
import nativeDefault from "native" /* 576 */;
import _modDef3881 from "module_3881" /* 3881 */;
import waveTransition from "waveTransition" /* 14110 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 16682 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AILoaderConstants = fn(14105);
({ AI_LOADER_CYCLE_MS: hasOwnProperty, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroRequire, AI_LOADER_REST_FRACTION, AI_LOADER_STEP_FRACTION } = AILoaderConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = AI_LOADER_REST_FRACTION + 2 * AI_LOADER_STEP_FRACTION;
let items = [_modDef3881.Sb2fo2, _modDef3881.rXNe0Z, _modDef3881["22g6Ju"], _modDef3881.IogGZY, _modDef3881.UEnMJF, _modDef3881.kk7BVL, _modDef3881.UVa49v];
const createStyles = fn(4836);
let closure_11 = createStyles.createStyles((arg0) => {
  let num;
  if (arg0) {
    num = 228;
  }
  const obj = { height: num, marginBottom: null };
  let num2 = 0;
  if (arg0) {
    num2 = 18;
  }
  const obj2 = { block: obj, header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_20 }, label: { flexShrink: 1, overflow: "hidden" }, skeletons: null };
  obj.marginBottom = num2;
  let num3 = 0;
  if (arg0) {
    num3 = 1;
  }
  obj2.skeletons = { flex: num3, overflow: "hidden" };
  return obj2;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx");

export default noop.memo((isCollapsed) => {
  isCollapsed = isCollapsed.isCollapsed;
  let reducedMotion;
  let tmp = closure_11(isCollapsed);
  reducedMotion = noop.useContext(reducedMotion(4550).AccessibilityPreferencesContext).reducedMotion;
  items = [reducedMotion.enabled];
  const memo = noop.useMemo(() => {
    items = [_modDef3881.ffCCEe, ...closure_1_10.sort(() => Math.random() - 0.5)];
    return items.map((item) => {
      const intl = reducedMotion(dependencyMap[8]).intl;
      return intl.string(item);
    });
  }, []);
  const memo1 = noop.useMemo(() => {
    const tmp = reducedMotion.enabled ? timestampProducer : hasOwnProperty;
    const result = 0.8 * tmp;
    let REDUCED_MOTION_PASS_MS = result;
    if (reducedMotion.enabled) {
      REDUCED_MOTION_PASS_MS = waveTransition.REDUCED_MOTION_PASS_MS;
    }
    const diff = tmp - REDUCED_MOTION_PASS_MS;
    return { shimmerDurationMs: result, shimmerDelayMs: diff, shimmerInitialDelayMs: tmp * closure_9 - diff };
  }, items);
  const obj = { style: tmp.block, children: null };
  const obj2 = { style: tmp.header, children: null };
  ({ shimmerDurationMs, shimmerDelayMs, shimmerInitialDelayMs } = memo1);
  const items1 = [closure_7(reducedMotion(14104).AILoader, { size: 12, color: "interactive-text-default" }), closure_7(reducedMotion(14108).AIShimmer, { text: memo, variant: "text-sm/semibold", color: "interactive-text-default", delay: shimmerDelayMs, initialDelay: shimmerInitialDelayMs, duration: shimmerDurationMs, style: tmp.label })];
  obj2.children = items1;
  const items2 = [closure_8(View, obj2), ];
  const obj4 = { style: tmp.skeletons, children: null };
  let num = 6;
  if (isCollapsed) {
    num = 3;
  }
  obj4.children = Array.from({ length: num }).map((item, index) => closure_1_7(FormRowPlaceholderDefault, {}, "skeleton-" + index));
  items2[1] = closure_7(View, obj4);
  obj.children = items2;
  return closure_8(View, obj);
});