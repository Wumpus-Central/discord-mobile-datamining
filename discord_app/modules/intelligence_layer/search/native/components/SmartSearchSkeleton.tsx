// discord_app/modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import _modDef3919 from "../../SmartSearch.messages.js";
import react3 from "../../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import AILoader from "../../../../../design/visual-identities/ai/AILoader/AILoader.native.tsx";
import AIShimmer from "../../../../../design/visual-identities/ai/AIShimmer/AIShimmer.native.tsx";
import FormRowPlaceholderDefault from "../../../../search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import AILoaderConstants from "../../../../../design/visual-identities/ai/AILoader/AILoaderConstants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let isCollapsed;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f127081 = () => Math.random() - 0.5;
const View = react_native.View;
({ AI_LOADER_CYCLE_MS: hasOwnProperty, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroRequire } = AILoaderConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let items = [
  _modDef3919.Sb2fo2,
  _modDef3919.rXNe0Z,
  _modDef3919["22g6Ju"],
  _modDef3919.IogGZY,
  _modDef3919.UEnMJF,
  _modDef3919.kk7BVL,
  _modDef3919.UVa49v,
];
let closure_10 = createStyles.createStyles((arg0) => {
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
  const obj2 = {
    block: obj,
    header: {
      flexDirection: "row",
      alignItems: "center",
      gap: nativeDefault.space.PX_6,
      marginHorizontal: nativeDefault.space.PX_16,
      marginTop: nativeDefault.space.PX_8,
      marginBottom: nativeDefault.space.PX_8,
      minHeight: nativeDefault.space.PX_20,
    },
    label: { flexShrink: 1, overflow: "hidden" },
    skeletons: { flex: num3, overflow: "hidden" },
  };
  num3 = 0;
  ({
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_6,
    marginHorizontal: nativeDefault.space.PX_16,
    marginTop: nativeDefault.space.PX_8,
    marginBottom: nativeDefault.space.PX_8,
    minHeight: nativeDefault.space.PX_20,
  });
  if (arg0) {
    num3 = 1;
  }
  return obj2;
});
let memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (isCollapsed) => {
        let first;
        let items1;
        let items2;
        let tmp12;
        let tmp16;
        const obj = react2;
        const cResult = obj.c(21);
        isCollapsed = isCollapsed.isCollapsed;
        const tmp5 = closure_10(isCollapsed);
        const reducedMotion = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          items = [_modDef3919.ffCCEe];
          HermesBuiltin.arraySpread(items, items.sort(f127081), 1);
          const mapped = items.map((item) => {
            const intl = intl2.intl;
            return intl.string(item);
          });
          cResult[0] = mapped;
          first = mapped;
        } else {
          first = cResult[0];
        }
        if (reducedMotion.enabled) {
          let tmp14;
          const _Symbol2 = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { shimmerDurationMs: 1000, shimmerDelayMs: metroRequire - 450, shimmerInitialDelayMs: 550 };
            cResult[1] = obj2;
            tmp14 = obj2;
          } else {
            tmp14 = cResult[1];
          }
          tmp12 = tmp14;
        } else {
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { shimmerDurationMs: 1000, shimmerDelayMs: hasOwnProperty - 1000, shimmerInitialDelayMs: 300 };
            cResult[2] = obj3;
            tmp12 = obj3;
          } else {
            tmp12 = cResult[2];
          }
        }
        const block = tmp5.block;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp18 = metroImportDefault(AILoader.AILoader, { size: 12, color: "interactive-text-default" });
          cResult[3] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[3];
        }
        if (cResult[4] === tmp12.shimmerDelayMs) {
          if (cResult[5] === tmp12.shimmerDurationMs) {
            if (cResult[6] === tmp12.shimmerInitialDelayMs) {
              let tmp19;
              if (cResult[7] === tmp5.label) {
                tmp19 = cResult[8];
              }
              if (cResult[9] === tmp5.header) {
                let tmp21;
                let tmp25;
                if (cResult[10] === tmp19) {
                  tmp21 = cResult[11];
                }
                const skeletons = tmp5.skeletons;
                if (cResult[12] !== isCollapsed) {
                  let num11 = 6;
                  const _Array = Array;
                  if (isCollapsed) {
                    num11 = 3;
                  }
                  const obj4 = { length: num11 };
                  const fromResult = from(obj4);
                  const mapped1 = fromResult.map((item, index) => {
                    const tmp = FormRowPlaceholderDefault;
                    return closure_1_7(tmp, {}, "skeleton-" + index);
                  });
                  cResult[12] = isCollapsed;
                  cResult[13] = mapped1;
                  tmp25 = mapped1;
                } else {
                  tmp25 = cResult[13];
                }
                if (cResult[14] === tmp5.skeletons) {
                  let tmp27;
                  if (cResult[15] === tmp25) {
                    tmp27 = cResult[16];
                  }
                  if (cResult[17] === tmp5.block) {
                    if (cResult[18] === tmp21) {
                      let tmp31;
                      if (cResult[19] === tmp27) {
                        tmp31 = cResult[20];
                      }
                      return tmp31;
                    }
                  }
                  const obj5 = { style: block, children: items1 };
                  items1 = [tmp21, tmp27];
                  const tmp34 = metroImportAll(View, obj5);
                  cResult[17] = tmp5.block;
                  cResult[18] = tmp21;
                  cResult[19] = tmp27;
                  cResult[20] = tmp34;
                  tmp31 = tmp34;
                }
                const obj6 = { style: skeletons, children: tmp25 };
                const tmp30 = metroImportDefault(View, obj6);
                cResult[14] = tmp5.skeletons;
                cResult[15] = tmp25;
                cResult[16] = tmp30;
                tmp27 = tmp30;
              }
              const obj7 = { style: tmp5.header, children: items2 };
              items2 = [tmp16, tmp19];
              const tmp24 = metroImportAll(View, obj7);
              cResult[9] = tmp5.header;
              cResult[10] = tmp19;
              cResult[11] = tmp24;
              tmp21 = tmp24;
            }
          }
        }
        const obj8 = {
          text: first,
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          delay: tmp12.shimmerDelayMs,
          initialDelay: tmp12.shimmerInitialDelayMs,
          duration: tmp12.shimmerDurationMs,
          style: tmp5.label,
        };
        const tmp20 = metroImportDefault(AIShimmer.AIShimmer, obj8);
        cResult[4] = tmp12.shimmerDelayMs;
        cResult[5] = tmp12.shimmerDurationMs;
        cResult[6] = tmp12.shimmerInitialDelayMs;
        cResult[7] = tmp5.label;
        cResult[8] = tmp20;
        tmp19 = tmp20;
      }
    : (isCollapsed) => {
        let fromResult;
        let items1;
        let items2;
        isCollapsed = isCollapsed.isCollapsed;
        let reducedMotion;
        let tmp = closure_10(isCollapsed);
        reducedMotion = react.useContext(reducedMotion(4602).AccessibilityPreferencesContext).reducedMotion;
        items = [reducedMotion.enabled];
        const memo = react.useMemo(() => {
          items = [_modDef3919.ffCCEe, ...closure_1_9.sort(f127081)];
          return items.map((item) => {
            const intl = reducedMotion(closure_1_2[10]).intl;
            return intl.string(item);
          });
        }, []);
        const memo1 = react.useMemo(() => {
          let obj;
          if (reducedMotion.enabled) {
            obj = { shimmerDurationMs: 1000, shimmerDelayMs: metroRequire - 450, shimmerInitialDelayMs: 550 };
            const obj2 = { shimmerDurationMs: 1000, shimmerDelayMs: metroRequire - 450, shimmerInitialDelayMs: 550 };
          } else {
            obj = { shimmerDurationMs: 1000, shimmerDelayMs: hasOwnProperty - 1000, shimmerInitialDelayMs: 300 };
          }
          return obj;
        }, items);
        let obj = { style: tmp.block, children: items2 };
        let obj2 = { style: tmp.header, children: items1 };
        items1 = [closure_7(reducedMotion(14227).AILoader, { size: 12, color: "interactive-text-default" })];
        const obj3 = {
          text: memo,
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          delay: memo1.shimmerDelayMs,
          initialDelay: memo1.shimmerInitialDelayMs,
          duration: memo1.shimmerDurationMs,
          style: tmp.label,
        };
        items1[1] = closure_7(reducedMotion(14231).AIShimmer, obj3);
        items2 = [closure_8(View, obj2)];
        let num = 6;
        const _Array = Array;
        const obj4 = {
          style: tmp.skeletons,
          children: fromResult.map((item, index) => {
            const tmp = FormRowPlaceholderDefault;
            return closure_1_7(tmp, {}, "skeleton-" + index);
          }),
        };
        if (isCollapsed) {
          num = 3;
        }
        fromResult = from({ length: num });
        items2[1] = closure_7(View, obj4);
        return closure_8(View, obj);
      },
);
const result = size.fileFinishedImporting(
  "modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx",
);

export default memoResult;
