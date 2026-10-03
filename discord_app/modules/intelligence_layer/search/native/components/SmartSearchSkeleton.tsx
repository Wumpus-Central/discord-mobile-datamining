// === Module 16844: SmartSearchSkeleton ===

// Module 16844 (SmartSearchSkeleton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3919 from "module_3919" /* 3919 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4596 */;
import AILoader from "AILoader" /* 14207 */;
import AIShimmer from "AIShimmer" /* 14211 */;
import waveTransition from "waveTransition" /* 14213 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 16828 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AILoaderConstants = fn(14208);
({ AI_LOADER_CYCLE_MS: hasOwnProperty, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroRequire, AI_LOADER_REST_FRACTION, AI_LOADER_STEP_FRACTION } = AILoaderConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = AI_LOADER_REST_FRACTION + 2 * AI_LOADER_STEP_FRACTION;
let items = [_modDef3919.Sb2fo2, _modDef3919.rXNe0Z, _modDef3919["22g6Ju"], _modDef3919.IogGZY, _modDef3919.UEnMJF, _modDef3919.kk7BVL, _modDef3919.UVa49v];
const createStyles = fn(4890);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isCollapsed) => {
  const cResult = c.c(23);
  isCollapsed = isCollapsed.isCollapsed;
  const tmp4 = closure_11(isCollapsed);
  const reducedMotion = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [_modDef3919.ffCCEe];
    HermesBuiltin.arraySpread(items.sort(() => Math.random() - 0.5), 1);
    const mapped = items.map((item) => {
      const intl = util.intl;
      return intl.string(item);
    });
    cResult[0] = mapped;
    let first = mapped;
  } else {
    first = cResult[0];
  }
  const tmp11 = reducedMotion.enabled ? timestampProducer : hasOwnProperty;
  const result = 0.8 * tmp11;
  let REDUCED_MOTION_PASS_MS = result;
  if (reducedMotion.enabled) {
    REDUCED_MOTION_PASS_MS = waveTransition.REDUCED_MOTION_PASS_MS;
  }
  const diff = tmp11 - REDUCED_MOTION_PASS_MS;
  const diff1 = tmp11 * closure_9 - diff;
  if (cResult[1] === diff) {
    if (cResult[2] === result) {
      if (cResult[3] === diff1) {
        let tmp15 = cResult[4];
      }
      ({ shimmerDurationMs, shimmerDelayMs, shimmerInitialDelayMs } = tmp15);
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = React5(AILoader.AILoader, { size: 12, color: "interactive-text-default" });
        cResult[5] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] === shimmerDelayMs) {
        if (cResult[7] === shimmerDurationMs) {
          if (cResult[8] === shimmerInitialDelayMs) {
            if (cResult[9] === tmp4.label) {
              let tmp19 = cResult[10];
            }
            if (cResult[11] === tmp4.header) {
              if (cResult[12] === tmp19) {
                let tmp22 = cResult[13];
              }
              if (cResult[14] !== isCollapsed) {
                let num12 = 6;
                if (isCollapsed) {
                  num12 = 3;
                }
                const obj2 = { length: num12 };
                const mapped1 = Array.from(obj2).map((item, index) => closure_1_7(FormRowPlaceholderDefault, {}, "skeleton-" + index));
                cResult[14] = isCollapsed;
                cResult[15] = mapped1;
                let tmp26 = mapped1;
                const arr = Array.from(obj2);
              } else {
                tmp26 = cResult[15];
              }
              if (cResult[16] === tmp4.skeletons) {
                if (cResult[17] === tmp26) {
                  let tmp28 = cResult[18];
                }
                if (cResult[19] === tmp4.block) {
                  if (cResult[20] === tmp22) {
                    if (cResult[21] === tmp28) {
                      let tmp32 = cResult[22];
                    }
                    return tmp32;
                  }
                }
                const obj3 = { style: tmp4.block, children: null };
                const items1 = [tmp22, tmp28];
                obj3.children = items1;
                const tmp35 = closure_1_8(View, obj3);
                cResult[19] = tmp4.block;
                cResult[20] = tmp22;
                cResult[21] = tmp28;
                cResult[22] = tmp35;
                tmp32 = tmp35;
              }
              const obj4 = { style: tmp4.skeletons, children: tmp26 };
              const tmp31 = React5(View, obj4);
              cResult[16] = tmp4.skeletons;
              cResult[17] = tmp26;
              cResult[18] = tmp31;
              tmp28 = tmp31;
            }
            const obj5 = { style: tmp4.header, children: null };
            const items2 = [tmp16, tmp19];
            obj5.children = items2;
            const tmp25 = closure_1_8(View, obj5);
            cResult[11] = tmp4.header;
            cResult[12] = tmp19;
            cResult[13] = tmp25;
            tmp22 = tmp25;
          }
        }
      }
      const obj6 = { text: first, variant: "text-sm/semibold", color: "interactive-text-default", delay: shimmerDelayMs, initialDelay: shimmerInitialDelayMs, duration: shimmerDurationMs, style: tmp4.label };
      const tmp21 = React5(AIShimmer.AIShimmer, obj6);
      cResult[6] = shimmerDelayMs;
      cResult[7] = shimmerDurationMs;
      cResult[8] = shimmerInitialDelayMs;
      cResult[9] = tmp4.label;
      cResult[10] = tmp21;
      tmp19 = tmp21;
    }
  }
  const obj7 = { shimmerDurationMs: result, shimmerDelayMs: diff, shimmerInitialDelayMs: diff1 };
  cResult[1] = diff;
  cResult[2] = result;
  cResult[3] = diff1;
  cResult[4] = obj7;
  tmp15 = obj7;
}) : ((isCollapsed) => {
  isCollapsed = isCollapsed.isCollapsed;
  let reducedMotion;
  let tmp = closure_11(isCollapsed);
  reducedMotion = noop.useContext(reducedMotion(4596).AccessibilityPreferencesContext).reducedMotion;
  items = [reducedMotion.enabled];
  const memo = noop.useMemo(() => {
    items = [_modDef3919.ffCCEe, ...closure_1_10.sort(() => Math.random() - 0.5)];
    return items.map((item) => {
      const intl = reducedMotion(dependencyMap[10]).intl;
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
  const items1 = [closure_7(reducedMotion(14207).AILoader, { size: 12, color: "interactive-text-default" }), closure_7(reducedMotion(14211).AIShimmer, { text: memo, variant: "text-sm/semibold", color: "interactive-text-default", delay: shimmerDelayMs, initialDelay: shimmerInitialDelayMs, duration: shimmerDurationMs, style: tmp.label })];
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
}));