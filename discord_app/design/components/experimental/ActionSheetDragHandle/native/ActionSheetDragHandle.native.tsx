// discord_app/design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import PX_4 from "PX_4";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let DRAG_HANDLE_BAR_HEIGHT;
let DRAG_HANDLE_HEIGHT;
let DRAG_HANDLE_PADDING;
let c3;
let c4;
const require = arg1;
({ TouchableWithoutFeedback: c3, View: c4 } = get_ActivityIndicator);
({ DRAG_HANDLE_BAR_HEIGHT, DRAG_HANDLE_PADDING, DRAG_HANDLE_HEIGHT } = PX_4);
let obj = { container: { height: DRAG_HANDLE_HEIGHT }, containerOverlay: { position: "absolute", top: 0, left: 0, right: 0 }, handle: { alignItems: "center", paddingVertical: DRAG_HANDLE_PADDING }, bar: null };
obj = { backgroundColor: require("Themes").colors.ICON_MUTED, borderRadius: require("Themes").radii.xs, height: DRAG_HANDLE_BAR_HEIGHT, width: 31 };
obj[3] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo((accessibilityLabel) => {
  let onPress;
  let overlay;
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ onPress, overlay } = accessibilityLabel);
  if (accessibilityLabel === undefined) {
    const intl = require(1236) /* getSystemLocale */.intl;
    accessibilityLabel = intl.string(require(1236) /* getSystemLocale */.t.WAI6xu);
  }
  const animatedBarStyles = accessibilityLabel.animatedBarStyles;
  const tmp3 = callback();
  const items = [tmp3.container, ];
  let containerOverlay = null;
  if (null != overlay) {
    containerOverlay = tmp3.containerOverlay;
  }
  let obj = { style: items, accessibilityLabel, accessibilityRole: "button", "aria-hidden": accessibilityLabel["aria-hidden"], onPress, children: null };
  items[1] = containerOverlay;
  obj = { style: tmp3.handle, children: null };
  if (null != animatedBarStyles) {
    obj = { style: null };
    const items1 = [tmp3.bar, animatedBarStyles];
    obj[0] = items1;
    let tmp4Result = tmp4(importDefault(4146).View, obj);
  } else {
    const obj1 = { style: null };
    obj1[0] = tmp3.bar;
    tmp4Result = tmp4(tmp7, obj1);
  }
  obj[1] = tmp4Result;
  obj[5] = <closure_4 style={tmp3.handle}>{null}</closure_4>;
  return <closure_3 style={tmp3.handle}>{null}</closure_3>;
});
const result = require("PX_4").fileFinishedImporting("design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx");

export const ActionSheetDragHandle = memoResult;