// discord_app/design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import _modDef4185 from "../../../../../modules/reanimated/ReanimatedRexport.tsx";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import PX_4 from "ActionSheetDragHandleConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = arg1;
({ TouchableWithoutFeedback: c3, View: c4 } = get_ActivityIndicator);
({ DRAG_HANDLE_BAR_HEIGHT, DRAG_HANDLE_PADDING, DRAG_HANDLE_HEIGHT } = PX_4);
let obj = { container: { height: DRAG_HANDLE_HEIGHT }, containerOverlay: { position: "absolute", top: 0, left: 0, right: 0 }, handle: { alignItems: "center", paddingVertical: DRAG_HANDLE_PADDING }, bar: null };
obj = { backgroundColor: ThemesDefault.colors.ICON_MUTED, borderRadius: ThemesDefault.radii.xs, height: DRAG_HANDLE_BAR_HEIGHT, width: 31 };
obj[3] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((accessibilityLabel) => {
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ onPress, overlay } = accessibilityLabel);
  if (accessibilityLabel === undefined) {
    const intl = getSystemLocale.intl;
    accessibilityLabel = intl.string(getSystemLocale.t.WAI6xu);
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
    let tmp4Result = tmp4(_modDef4185.View, obj);
  } else {
    obj1 = { style: null };
    obj1[0] = tmp3.bar;
    tmp4Result = tmp4(tmp7, obj1);
  }
  obj[1] = tmp4Result;
  obj[5] = <closure_4 style={tmp3.handle}>{null}</closure_4>;
  return <closure_3 style={tmp3.handle}>{null}</closure_3>;
});
const result = require("set").fileFinishedImporting("design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx");

export const ActionSheetDragHandle = memoResult;