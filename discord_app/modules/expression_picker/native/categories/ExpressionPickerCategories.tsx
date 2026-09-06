// === Module 10359: ExpressionPickerCategories ===

// Module 10359 (ExpressionPickerCategories)
import nativeDefault from "native" /* 576 */;
import Portal from "Portal" /* 4432 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, containerRefresh: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingHorizontal: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
createStyles.container = createStyles;
createStyles.containerRefresh = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategories.tsx");

export default function ExpressionPickerCategories(arg0) {
  ({ children, portalHostName, style } = arg0);
  let obj = { hostName: portalHostName, children: null };
  obj = { style: null, children };
  const items = [, , ];
  ({ container: arr[0], containerRefresh: arr[1] } = closure_4());
  items[2] = style;
  obj.style = items;
  obj.children = <View style={null}>{children}</View>;
  return jsx(Portal.Portal, { style: null, children });
};