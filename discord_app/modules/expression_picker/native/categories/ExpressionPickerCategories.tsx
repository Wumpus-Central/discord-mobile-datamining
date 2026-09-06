// discord_app/modules/expression_picker/native/categories/ExpressionPickerCategories.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Portal from "../../../../../_runtime/04432_Portal.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, containerRefresh: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  paddingHorizontal: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
};
createStyles.container = createStyles;
createStyles.containerRefresh = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategories.tsx");

export default function ExpressionPickerCategories(arg0) {
  ({ children, portalHostName, style } = arg0);
  let obj = { hostName: portalHostName, children: null };
  obj = { style: null, children };
  const items = [, ,];
  ({ container: arr[0], containerRefresh: arr[1] } = closure_4());
  items[2] = style;
  obj.style = items;
  obj.children = <View style={null}>{children}</View>;
  return jsx(Portal.Portal, { style: null, children });
}
