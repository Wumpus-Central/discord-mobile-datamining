// discord_app/modules/expression_picker/native/categories/ExpressionPickerCategories.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Portal from "../../../../../_runtime/04702_Portal.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    paddingHorizontal: nativeDefault.space.PX_8,
    flexDirection: "row",
    alignItems: "center",
  },
  containerRefresh: null,
};
const obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  paddingHorizontal: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
};
obj2.containerRefresh = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategories.tsx");

export default function ExpressionPickerCategories(arg0) {
  ({ children, portalHostName, style } = arg0);
  const obj = { hostName: portalHostName, children: null };
  const obj2 = { style: null, children };
  const items = [, ,];
  ({ container: arr[0], containerRefresh: arr[1] } = closure_4());
  items[2] = style;
  obj2.style = items;
  obj.children = <View style={null}>{children}</View>;
  return jsx(Portal.Portal, { hostName: portalHostName, children: null });
}
