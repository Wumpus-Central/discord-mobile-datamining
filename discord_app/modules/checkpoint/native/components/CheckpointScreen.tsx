// === Module 15262: CheckpointScreen ===

// Module 15262 (CheckpointScreen)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const CHECKPOINT_NAV_HEIGHT = fn(5061).CHECKPOINT_NAV_HEIGHT;
const jsx = fn(21).jsx;
const PX_24 = nativeDefault.space.PX_24;
const createStyles = fn(4836);
let closure_8 = createStyles.createStyles({ container: { height: "100%", width: "100%" }, scroll: { width: "100%" }, scrollContent: { flexGrow: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointScreen.tsx");

export default function CheckpointScreen(children) {
  let insets;
  const tmp = closure_8();
  insets = insets(6402)().insets;
  const items = [, , , ];
  ({ bottom: arr[0], left: arr[1], right: arr[2], top: arr[3] } = insets);
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.scroll, contentContainerStyle: null, showsVerticalScrollIndicator: false, children: null };
  const items1 = [tmp.scrollContent, noop.useMemo(() => ({ paddingLeft: insets.left + PX_24, paddingRight: insets.right + PX_24, paddingBottom: insets.bottom + nativeDefault.space.PX_24, paddingTop: insets.top + CHECKPOINT_NAV_HEIGHT }), items)];
  obj2.contentContainerStyle = items1;
  obj2.children = children.children;
  obj.children = <closure_3 style={tmp.scroll} contentContainerStyle={null} showsVerticalScrollIndicator={false}>{null}</closure_3>;
  return <closure_4 style={tmp.container}>{null}</closure_4>;
};