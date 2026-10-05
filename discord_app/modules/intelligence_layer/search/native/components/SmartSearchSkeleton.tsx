// === Module 16863: SmartSearchSkeleton ===

// Module 16863 (SmartSearchSkeleton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef3919 from "module_3919" /* 3919 */;
import react3 from "react" /* 4596 */;
import AILoader from "AILoader" /* 14209 */;
import AIShimmer from "AIShimmer" /* 14213 */;
import waveTransition from "waveTransition" /* 14215 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 16847 */;
import react from "react" /* 19 */;
import AILoaderConstants from "AILoaderConstants" /* 14210 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let isCollapsed;

let AI_LOADER_REST_FRACTION;
let AI_LOADER_STEP_FRACTION;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f126928 = () => Math.random() - 0.5;
const View = react_native.View;
({ AI_LOADER_CYCLE_MS: hasOwnProperty, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroRequire, AI_LOADER_REST_FRACTION, AI_LOADER_STEP_FRACTION } = AILoaderConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = AI_LOADER_REST_FRACTION + 2 * AI_LOADER_STEP_FRACTION;
let items = [_modDef3919.Sb2fo2, _modDef3919.rXNe0Z, _modDef3919["22g6Ju"], _modDef3919.IogGZY, _modDef3919.UEnMJF, _modDef3919.kk7BVL, _modDef3919.UVa49v];
let closure_11 = createStyles.createStyles((arg0) => {
  let num2;
  let num3;
  let num;
  if (arg0) {
    num = 228;
  }
  const obj = { height: num, marginBottom: num2 };
  num2 = 0;
  if (arg0) {
    num2 = 18;
  }
  const obj2 = { block: obj, header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_20 }, label: { flexShrink: 1, overflow: "hidden" }, skeletons: { flex: num3, overflow: "hidden" } };
  num3 = 0;
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_20 });
  if (arg0) {
    num3 = 1;
  }
  return obj2;
});
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isCollapsed) => {
  let first;
  let items1;
  let items2;
  let shimmerDelayMs;
  let shimmerDurationMs;
  let shimmerInitialDelayMs;
  const obj = react2;
  const cResult = obj.c(23);
  isCollapsed = isCollapsed.isCollapsed;
  const tmp5 = closure_11(isCollapsed);
  const reducedMotion = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [_modDef3919.ffCCEe];
    HermesBuiltin.arraySpread(items, items.sort(f126928), 1);
    const mapped = items.map((item) => {
      const intl = intl2.intl;
      return intl.string(item);
    });
    cResult[0] = mapped;
    first = mapped;
  } else {
    first = cResult[0];
  }
  const tmp12 = reducedMotion.enabled ? metroRequire : hasOwnProperty;
  const result = 0.8 * tmp12;
  let REDUCED_MOTION_PASS_MS = result;
  if (reducedMotion.enabled) {
    REDUCED_MOTION_PASS_MS = waveTransition.REDUCED_MOTION_PASS_MS;
  }
  const diff = tmp12 - REDUCED_MOTION_PASS_MS;
  const diff1 = tmp12 * closure_9 - diff;
  if (cResult[1] === diff) {
    if (cResult[2] === result) {
      let tmp16;
      let tmp17;
      if (cResult[3] === diff1) {
        tmp16 = cResult[4];
      }
      ({ shimmerDurationMs, shimmerDelayMs, shimmerInitialDelayMs } = tmp16);
      const _Symbol = Symbol;
      const block = tmp5.block;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp19 = metroImportDefault(AILoader.AILoader, { size: 12, color: "interactive-text-default" });
        cResult[5] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[5];
      }
      if (cResult[6] === shimmerDelayMs) {
        if (cResult[7] === shimmerDurationMs) {
          if (cResult[8] === shimmerInitialDelayMs) {
            let tmp20;
            if (cResult[9] === tmp5.label) {
              tmp20 = cResult[10];
            }
            if (cResult[11] === tmp5.header) {
              let tmp23;
              let tmp27;
              if (cResult[12] === tmp20) {
                tmp23 = cResult[13];
              }
              const skeletons = tmp5.skeletons;
              if (cResult[14] !== isCollapsed) {
                let num12 = 6;
                const _Array = Array;
                if (isCollapsed) {
                  num12 = 3;
                }
                const obj2 = { length: num12 };
                const fromResult = from(obj2);
                const mapped1 = fromResult.map((item, index) => {
                  const tmp = FormRowPlaceholderDefault;
                  return closure_1_7(tmp, {}, "skeleton-" + index);
                });
                cResult[14] = isCollapsed;
                cResult[15] = mapped1;
                tmp27 = mapped1;
              } else {
                tmp27 = cResult[15];
              }
              if (cResult[16] === tmp5.skeletons) {
                let tmp29;
                if (cResult[17] === tmp27) {
                  tmp29 = cResult[18];
                }
                if (cResult[19] === tmp5.block) {
                  if (cResult[20] === tmp23) {
                    let tmp33;
                    if (cResult[21] === tmp29) {
                      tmp33 = cResult[22];
                    }
                    return tmp33;
                  }
                }
                const obj3 = { style: block, children: items1 };
                items1 = [tmp23, tmp29];
                const tmp36 = metroImportAll(View, obj3);
                cResult[19] = tmp5.block;
                cResult[20] = tmp23;
                cResult[21] = tmp29;
                cResult[22] = tmp36;
                tmp33 = tmp36;
              }
              const obj4 = { style: skeletons, children: tmp27 };
              const tmp32 = metroImportDefault(View, obj4);
              cResult[16] = tmp5.skeletons;
              cResult[17] = tmp27;
              cResult[18] = tmp32;
              tmp29 = tmp32;
            }
            const obj5 = { style: tmp5.header, children: items2 };
            items2 = [tmp17, tmp20];
            const tmp26 = metroImportAll(View, obj5);
            cResult[11] = tmp5.header;
            cResult[12] = tmp20;
            cResult[13] = tmp26;
            tmp23 = tmp26;
          }
        }
      }
      const obj6 = { text: first, variant: "text-sm/semibold", color: "interactive-text-default", delay: shimmerDelayMs, initialDelay: shimmerInitialDelayMs, duration: shimmerDurationMs, style: tmp5.label };
      const tmp22 = metroImportDefault(AIShimmer.AIShimmer, obj6);
      cResult[6] = shimmerDelayMs;
      cResult[7] = shimmerDurationMs;
      cResult[8] = shimmerInitialDelayMs;
      cResult[9] = tmp5.label;
      cResult[10] = tmp22;
      tmp20 = tmp22;
    }
  }
  const obj7 = { shimmerDurationMs: result, shimmerDelayMs: diff, shimmerInitialDelayMs: diff1 };
  cResult[1] = diff;
  cResult[2] = result;
  cResult[3] = diff1;
  cResult[4] = obj7;
  tmp16 = obj7;
}) : ((isCollapsed) => {
  let fromResult;
  let items1;
  let items2;
  let shimmerDelayMs;
  let shimmerDurationMs;
  let shimmerInitialDelayMs;
  isCollapsed = isCollapsed.isCollapsed;
  let reducedMotion;
  let tmp = closure_11(isCollapsed);
  reducedMotion = react.useContext(reducedMotion(4596).AccessibilityPreferencesContext).reducedMotion;
  items = [reducedMotion.enabled];
  const memo = react.useMemo(() => {
    items = [_modDef3919.ffCCEe, ...closure_1_10.sort(f126928)];
    return items.map((item) => {
      const intl = reducedMotion(closure_1_2[10]).intl;
      return intl.string(item);
    });
  }, []);
  const memo1 = react.useMemo(() => {
    const tmp = reducedMotion.enabled ? metroRequire : hasOwnProperty;
    const result = 0.8 * tmp;
    let REDUCED_MOTION_PASS_MS = result;
    if (reducedMotion.enabled) {
      REDUCED_MOTION_PASS_MS = waveTransition.REDUCED_MOTION_PASS_MS;
    }
    const diff = tmp - REDUCED_MOTION_PASS_MS;
    return { shimmerDurationMs: result, shimmerDelayMs: diff, shimmerInitialDelayMs: tmp * closure_9 - diff };
  }, items);
  const obj = { style: tmp.block, children: items2 };
  const obj2 = { style: tmp.header, children: items1 };
  ({ shimmerDurationMs, shimmerDelayMs, shimmerInitialDelayMs } = memo1);
  items1 = [closure_7(reducedMotion(14209).AILoader, { size: 12, color: "interactive-text-default" }), ];
  const obj3 = { text: memo, variant: "text-sm/semibold", color: "interactive-text-default", delay: shimmerDelayMs, initialDelay: shimmerInitialDelayMs, duration: shimmerDurationMs, style: tmp.label };
  items1[1] = closure_7(reducedMotion(14213).AIShimmer, obj3);
  items2 = [closure_8(View, obj2), ];
  let num = 6;
  const _Array = Array;
  const obj4 = {
    style: tmp.skeletons,
    children: fromResult.map((item, index) => {
      const tmp = FormRowPlaceholderDefault;
      return closure_1_7(tmp, {}, "skeleton-" + index);
    })
  };
  if (isCollapsed) {
    num = 3;
  }
  fromResult = from({ length: num });
  items2[1] = closure_7(View, obj4);
  return closure_8(View, obj);
}));
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx");

export default memoResult;