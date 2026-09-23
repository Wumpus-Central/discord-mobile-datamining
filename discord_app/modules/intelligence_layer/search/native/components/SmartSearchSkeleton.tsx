// discord_app/modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3874 from "../../IntelligenceSearch.messages.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const IntelligenceSearchConstants = fn(12698);
({ LOADING_BLOCK_HEIGHT: metroRequire, LOADING_BOTTOM_GAP: closure_7 } = IntelligenceSearchConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [
  _modDef3874.G9wVrJ,
  _modDef3874.nE828Q,
  _modDef3874.RJyNW8,
  _modDef3874.bsB1as,
  _modDef3874.nQrJzz,
  _modDef3874["5OQUzL"],
  _modDef3874.LCtCSE,
];
const createStyles = fn(4827);
let closure_11 = createStyles.createStyles((arg0) => {
  let tmp;
  if (arg0) {
    tmp = timestampProducer;
  }
  const obj = { height: tmp, marginBottom: null };
  let num = 0;
  if (arg0) {
    num = React5;
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
    label: { flexShrink: 1 },
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
const result = size.fileFinishedImporting(
  "modules/intelligence_layer/search/native/components/SmartSearchSkeleton.tsx",
);

export default noop.memo((isCollapsed) => {
  isCollapsed = isCollapsed.isCollapsed;
  _require = undefined;
  const tmp = closure_11(isCollapsed);
  [tmp3, c0] = noop.useState(0);
  const memo = noop.useMemo(() => {
    items = [memo(3874).CM07jO, ...closure_1_10.sort(() => Math.random() - 0.5)];
    return items;
  }, []);
  items = [memo.length];
  const effect = noop.useEffect(() => {
    const interval = setInterval(() => {
      closure_0((arg0) => (arg0 + 1) % length.length);
    }, 2000);
    return () => clearInterval(closure_0);
  }, items);
  const obj = { style: tmp.block, children: null };
  const obj2 = { style: tmp.header, children: null };
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  const items1 = [closure_8(require("SparklesIcon").SparklesIcon, { size: "xs", color: memo(576).colors.TEXT_SUBTLE })];
  const obj4 = {
    variant: "text-sm/semibold",
    color: "interactive-text-default",
    lineClamp: 1,
    style: tmp.label,
    children: null,
  };
  const intl = require("util").intl;
  obj4.children = intl.string(memo[tmp3]);
  items1[1] = closure_8(require("Text/Text").Text, obj4);
  obj2.children = items1;
  const items2 = [closure_9(View, obj2)];
  const obj5 = { style: tmp.skeletons, children: null };
  let num = 6;
  if (isCollapsed) {
    num = 3;
  }
  const obj3 = { size: "xs", color: memo(576).colors.TEXT_SUBTLE };
  obj5.children = Array.from({ length: num }).map((item, index) => closure_1_8(memo(17220), {}, "skeleton-" + index));
  items2[1] = closure_8(View, obj5);
  obj.children = items2;
  return closure_9(View, obj);
});
