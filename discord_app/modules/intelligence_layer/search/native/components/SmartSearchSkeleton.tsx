// discord_app/modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4120 from "../../SmartSearch.messages.js";
import FormRowPlaceholderDefault from "../../../../search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const AILoaderConstants = fn(12063);
({ AI_LOADER_CYCLE_MS: hasOwnProperty, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroRequire } = AILoaderConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let items = [
  _modDef4120.Sb2fo2,
  _modDef4120.rXNe0Z,
  _modDef4120["22g6Ju"],
  _modDef4120.IogGZY,
  _modDef4120.UEnMJF,
  _modDef4120.kk7BVL,
  _modDef4120.UVa49v,
];
const createStyles = fn(5009);
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
    skeletons: null,
  };
  obj.marginBottom = num2;
  let num3 = 0;
  if (arg0) {
    num3 = 1;
  }
  obj2.skeletons = { flex: num3, overflow: "hidden" };
  return obj2;
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx",
);

export default noop.memo(function SmartSearchSkeleton(isCollapsed) {
  isCollapsed = isCollapsed.isCollapsed;
  let reducedMotion;
  const tmp = closure_10(isCollapsed);
  reducedMotion = noop.useContext(reducedMotion(5023).AccessibilityPreferencesContext).reducedMotion;
  items = [reducedMotion.enabled];
  const memo = noop.useMemo(() => {
    items = [_modDef4120.ffCCEe, ...closure_1_9.sort(() => Math.random() - 0.5)];
    return items.map((item) => {
      const intl = reducedMotion(dependencyMap[8]).intl;
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
  const items1 = [
    closure_7(reducedMotion(12062).AILoader, { size: 12, color: "interactive-text-default" }),
    closure_7(reducedMotion(12747).AIShimmer, {
      text: memo,
      variant: "text-sm/semibold",
      color: "interactive-text-default",
      delay: memo1.shimmerDelayMs,
      initialDelay: memo1.shimmerInitialDelayMs,
      duration: memo1.shimmerDurationMs,
      style: tmp.label,
    }),
  ];
  obj2.children = items1;
  const items2 = [closure_8(View, obj2)];
  const obj4 = { style: tmp.skeletons, children: null };
  let num = 6;
  if (isCollapsed) {
    num = 3;
  }
  obj4.children = Array.from({ length: num }).map((item, index) =>
    closure_1_7(FormRowPlaceholderDefault, {}, "skeleton-" + index),
  );
  items2[1] = closure_7(View, obj4);
  obj.children = items2;
  return closure_8(View, obj);
});
