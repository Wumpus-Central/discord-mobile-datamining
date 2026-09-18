// === Module 15907: CheckpointScreen ===

// Module 15907 (CheckpointScreen)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ Image: c3, ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const CheckpointConstants = fn(4948);
({ CHECKPOINT_BACKGROUND_GRADIENT: metroRequire, CHECKPOINT_NAV_HEIGHT: closure_7 } = CheckpointConstants);
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const PX_24 = nativeDefault.space.PX_24;
const createStyles = fn(4722);
let closure_13 = createStyles.createStyles({ container: { height: "100%", width: "100%" }, scroll: { width: "100%" }, background: { position: "absolute", width: "100%", height: "100%" }, scrollContent: { flexGrow: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointScreen.tsx");

export default function CheckpointScreen(children) {
  let insets;
  const tmp = closure_13();
  insets = insets(7177)().insets;
  const items = [, , , ];
  ({ bottom: arr[0], left: arr[1], right: arr[2], top: arr[3] } = insets);
  const obj = { children: null };
  const memo = noop.useMemo(() => ({ paddingLeft: insets.left + PX_24, paddingRight: insets.right + PX_24, paddingBottom: insets.bottom + nativeDefault.space.PX_24, paddingTop: insets.top + React5 }), items);
  const items1 = [closure_9(insets(5156), { colors, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.background }), , ];
  const obj3 = { source: { uri: insets(15908) }, style: tmp.background, resizeMode: "cover" };
  items1[1] = closure_9(closure_3, obj3);
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.scroll, contentContainerStyle: null, showsVerticalScrollIndicator: false, children: children.children };
  const items2 = [tmp.scrollContent, memo];
  obj6.contentContainerStyle = items2;
  obj5.children = closure_9(closure_4, obj6);
  items1[2] = closure_9(closure_5, obj5);
  obj.children = items1;
  return closure_11(closure_10, obj);
};