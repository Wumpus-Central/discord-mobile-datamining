// discord_app/modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3876 from "../../IntelligenceSearch.messages.js";
import waveTransition from "../../../../../design/visual-identities/ai/AIShimmer/waveTransition.tsx";
import FormRowPlaceholderDefault from "../../../../search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const IntelligenceSearchConstants = fn(12707);
({ LOADING_BLOCK_HEIGHT: hasOwnProperty, LOADING_BOTTOM_GAP: metroRequire } = IntelligenceSearchConstants);
const AILoaderConstants = fn(14499);
({
  AI_LOADER_CYCLE_MS: closure_7,
  AI_LOADER_REDUCED_MOTION_CYCLE_MS: closure_8,
  AI_LOADER_REST_FRACTION,
  AI_LOADER_STEP_FRACTION,
} = AILoaderConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = AI_LOADER_REST_FRACTION + 2 * AI_LOADER_STEP_FRACTION;
let items = [
  _modDef3876.G9wVrJ,
  _modDef3876.nE828Q,
  _modDef3876.RJyNW8,
  _modDef3876.bsB1as,
  _modDef3876.nQrJzz,
  _modDef3876["5OQUzL"],
  _modDef3876.LCtCSE,
];
const createStyles = fn(4829);
let closure_13 = createStyles.createStyles((arg0) => {
  let tmp;
  if (arg0) {
    tmp = hasOwnProperty;
  }
  const obj = { height: tmp, marginBottom: null };
  let num = 0;
  if (arg0) {
    num = timestampProducer;
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
  obj.marginBottom = num;
  let num2 = 0;
  if (arg0) {
    num2 = 1;
  }
  obj2.skeletons = { flex: num2, overflow: "hidden" };
  return obj2;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx");

export default noop.memo((isCollapsed) => {
  isCollapsed = isCollapsed.isCollapsed;
  let reducedMotion;
  let tmp = closure_13(isCollapsed);
  reducedMotion = noop.useContext(reducedMotion(4545).AccessibilityPreferencesContext).reducedMotion;
  items = [reducedMotion.enabled];
  const memo = noop.useMemo(() => {
    items = [_modDef3876.CM07jO, ...closure_1_12.sort(() => Math.random() - 0.5)];
    return items.map((item) => {
      const intl = reducedMotion(dependencyMap[9]).intl;
      return intl.string(item);
    });
  }, []);
  const memo1 = noop.useMemo(() => {
    const tmp = reducedMotion.enabled ? React6 : React5;
    const result = 0.8 * tmp;
    let REDUCED_MOTION_PASS_MS = result;
    if (reducedMotion.enabled) {
      REDUCED_MOTION_PASS_MS = waveTransition.REDUCED_MOTION_PASS_MS;
    }
    const diff = tmp - REDUCED_MOTION_PASS_MS;
    return { shimmerDurationMs: result, shimmerDelayMs: diff, shimmerInitialDelayMs: tmp * closure_11 - diff };
  }, items);
  const obj = { style: tmp.block, children: null };
  const obj2 = { style: tmp.header, children: null };
  ({ shimmerDurationMs, shimmerDelayMs, shimmerInitialDelayMs } = memo1);
  const items1 = [
    closure_9(reducedMotion(14498).AILoader, { size: 12, color: "interactive-text-default" }),
    closure_9(reducedMotion(14502).AIShimmer, {
      text: memo,
      variant: "text-sm/semibold",
      color: "interactive-text-default",
      delay: shimmerDelayMs,
      initialDelay: shimmerInitialDelayMs,
      duration: shimmerDurationMs,
      style: tmp.label,
    }),
  ];
  obj2.children = items1;
  const items2 = [closure_10(View, obj2)];
  const obj4 = { style: tmp.skeletons, children: null };
  let num = 6;
  if (isCollapsed) {
    num = 3;
  }
  obj4.children = Array.from({ length: num }).map((item, index) =>
    closure_1_9(FormRowPlaceholderDefault, {}, "skeleton-" + index),
  );
  items2[1] = closure_9(View, obj4);
  obj.children = items2;
  return closure_10(View, obj);
});
