// === Module 9269: ActionSheetDragHandle ===

// Module 9269 (ActionSheetDragHandle)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4559 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableWithoutFeedback: c3, View: closure_4 } = get_ActivityIndicator);
const ActionSheetDragHandleConstants = fn(9261);
({ DRAG_HANDLE_BAR_HEIGHT, DRAG_HANDLE_PADDING, DRAG_HANDLE_HEIGHT } = ActionSheetDragHandleConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj = { container: { height: DRAG_HANDLE_HEIGHT }, containerOverlay: { position: "absolute", top: 0, left: 0, right: 0 }, handle: { alignItems: "center", paddingVertical: DRAG_HANDLE_PADDING }, bar: null };
let size = { backgroundColor: nativeDefault.colors.ICON_MUTED, borderRadius: nativeDefault.radii.xs, height: DRAG_HANDLE_BAR_HEIGHT, width: 31 };
obj.bar = size;
let closure_6 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx");

export const ActionSheetDragHandle = noop.memo((accessibilityLabel) => {
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ onPress, overlay } = accessibilityLabel);
  if (accessibilityLabel === undefined) {
    const intl = util.intl;
    accessibilityLabel = intl.string(util.t.WAI6xu);
  }
  const animatedBarStyles = accessibilityLabel.animatedBarStyles;
  const tmp3 = closure_6();
  const items = [tmp3.container, ];
  let containerOverlay = null;
  if (null != overlay) {
    containerOverlay = tmp3.containerOverlay;
  }
  const obj = { style: items, accessibilityLabel, accessibilityRole: "button", "aria-hidden": accessibilityLabel["aria-hidden"], onPress, children: null };
  items[1] = containerOverlay;
  const obj2 = { style: tmp3.handle, children: null };
  if (null != animatedBarStyles) {
    const obj3 = { style: null };
    const items1 = [tmp3.bar, animatedBarStyles];
    obj3.style = items1;
    let tmp4Result = jsx(ReanimatedRexportDefault.View, { style: null });
  } else {
    const obj4 = { style: tmp3.bar };
    tmp4Result = <React4 style={tmp3.bar} />;
  }
  obj2.children = tmp4Result;
  obj.children = <React4 style={tmp3.handle}>{null}</React4>;
  return <React3 style={items} accessibilityLabel={accessibilityLabel} accessibilityRole="button" aria-hidden={accessibilityLabel["aria-hidden"]} onPress={onPress}>{null}</React3>;
});