// === Module 17309: SmartSearchSkeleton ===

// Module 17309 (SmartSearchSkeleton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef4053 from "module_4053" /* 4053 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4795 */;
import AILoader from "AILoader" /* 14148 */;
import AIShimmer from "AIShimmer" /* 14152 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 17297 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AILoaderConstants = fn(14149);
({ AI_LOADER_CYCLE_MS: hasOwnProperty, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroRequire } = AILoaderConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let items = [_modDef4053.Sb2fo2, _modDef4053.rXNe0Z, _modDef4053["22g6Ju"], _modDef4053.IogGZY, _modDef4053.UEnMJF, _modDef4053.kk7BVL, _modDef4053.UVa49v];
const createStyles = fn(5091);
let closure_10 = createStyles.createStyles((arg0) => {
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
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SmartSearchSkeleton(isCollapsed) {
  const cResult = c.c(21);
  isCollapsed = isCollapsed.isCollapsed;
  const tmp4 = closure_10(isCollapsed);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [_modDef4053.ffCCEe];
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
  if (noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled) {
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { shimmerDurationMs: 1000, shimmerDelayMs: timestampProducer - 450, shimmerInitialDelayMs: 550 };
      cResult[1] = obj2;
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { shimmerDurationMs: 1000, shimmerDelayMs: hasOwnProperty - 1000, shimmerInitialDelayMs: 300 };
      cResult[2] = obj3;
      let tmp11 = obj3;
    } else {
      tmp11 = cResult[2];
    }
    const _Symbol3 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp18 = React5(AILoader.AILoader, { size: 12, color: "interactive-text-default" });
      cResult[3] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[3];
    }
    if (cResult[4] === tmp11.shimmerDelayMs) {
      if (cResult[5] === tmp11.shimmerDurationMs) {
        if (cResult[6] === tmp11.shimmerInitialDelayMs) {
          if (cResult[7] === tmp4.label) {
            let tmp19 = cResult[8];
          }
          if (cResult[9] === tmp4.header) {
            if (cResult[10] === tmp19) {
              let tmp22 = cResult[11];
            }
            if (cResult[12] !== isCollapsed) {
              let num16 = 6;
              if (isCollapsed) {
                num16 = 3;
              }
              const obj5 = { length: num16 };
              const mapped1 = Array.from(obj5).map((item, index) => closure_1_7(FormRowPlaceholderDefault, {}, "skeleton-" + index));
              cResult[12] = isCollapsed;
              cResult[13] = mapped1;
              let tmp26 = mapped1;
              const arr = Array.from(obj5);
            } else {
              tmp26 = cResult[13];
            }
            if (cResult[14] === tmp4.skeletons) {
              if (cResult[15] === tmp26) {
                let tmp28 = cResult[16];
              }
              if (cResult[17] === tmp4.block) {
                if (cResult[18] === tmp22) {
                  if (cResult[19] === tmp28) {
                    let tmp32 = cResult[20];
                  }
                  return tmp32;
                }
              }
              const obj6 = { style: tmp4.block, children: null };
              const items1 = [tmp22, tmp28];
              obj6.children = items1;
              const tmp35 = closure_1_8(View, obj6);
              cResult[17] = tmp4.block;
              cResult[18] = tmp22;
              cResult[19] = tmp28;
              cResult[20] = tmp35;
              tmp32 = tmp35;
            }
            const obj7 = { style: tmp4.skeletons, children: tmp26 };
            const tmp31 = React5(View, obj7);
            cResult[14] = tmp4.skeletons;
            cResult[15] = tmp26;
            cResult[16] = tmp31;
            tmp28 = tmp31;
          }
          const obj8 = { style: tmp4.header, children: null };
          const items2 = [tmp16, tmp19];
          obj8.children = items2;
          const tmp25 = closure_1_8(View, obj8);
          cResult[9] = tmp4.header;
          cResult[10] = tmp19;
          cResult[11] = tmp25;
          tmp22 = tmp25;
        }
      }
    }
    const obj15 = { text: first, variant: "text-sm/semibold", color: "interactive-text-default", delay: null, initialDelay: null, duration: null, style: null };
    ({ shimmerDelayMs: obj4.delay, shimmerInitialDelayMs: obj4.initialDelay, shimmerDurationMs: obj4.duration } = tmp11);
    obj15.style = tmp4.label;
    const tmp21 = React5(AIShimmer.AIShimmer, obj15);
    cResult[4] = tmp11.shimmerDelayMs;
    cResult[5] = tmp11.shimmerDurationMs;
    cResult[6] = tmp11.shimmerInitialDelayMs;
    cResult[7] = tmp4.label;
    cResult[8] = tmp21;
    tmp19 = tmp21;
  }
}) : (function SmartSearchSkeleton(isCollapsed) {
  isCollapsed = isCollapsed.isCollapsed;
  let reducedMotion;
  const tmp = closure_10(isCollapsed);
  reducedMotion = noop.useContext(reducedMotion(4795).AccessibilityPreferencesContext).reducedMotion;
  items = [reducedMotion.enabled];
  const memo = noop.useMemo(() => {
    items = [_modDef4053.ffCCEe, ...closure_1_9.sort(() => Math.random() - 0.5)];
    return items.map((item) => {
      const intl = reducedMotion(dependencyMap[10]).intl;
      return intl.string(item);
    });
  }, []);
  const memo1 = noop.useMemo(() => {
    if (reducedMotion.enabled) {
      const obj2 = { shimmerDurationMs: 1000, shimmerDelayMs: timestampProducer - 450, shimmerInitialDelayMs: 550 };
      let obj = obj2;
    } else {
      obj = { shimmerDurationMs: 1000, shimmerDelayMs: hasOwnProperty - 1000, shimmerInitialDelayMs: 300 };
    }
    return obj;
  }, items);
  let obj = { style: tmp.block, children: null };
  let obj2 = { style: tmp.header, children: null };
  const items1 = [closure_7(reducedMotion(14148).AILoader, { size: 12, color: "interactive-text-default" }), closure_7(reducedMotion(14152).AIShimmer, { text: memo, variant: "text-sm/semibold", color: "interactive-text-default", delay: memo1.shimmerDelayMs, initialDelay: memo1.shimmerInitialDelayMs, duration: memo1.shimmerDurationMs, style: tmp.label })];
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