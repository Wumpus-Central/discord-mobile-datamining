// discord_app/design/components/TableRow/native/TableRowGroup.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import TableRowDivider from "TableRowDivider.native.tsx";
import TableRowGroupContext from "TableRowGroupContext.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class TableRowGroupTitle {
  constructor(arg0) {
    ({ title, style, lineClamp } = global);
    tmp = closure_8();
    obj = {
      accessibilityRole: "header",
      variant: "text-md/medium",
      color: "text-subtle",
      style: null,
      lineClamp,
      children: title,
    };
    items = [,];
    items[0] = tmp.title;
    items[1] = style;
    obj.style = items;
    return jsx(closure_0(closure_2[5]).Text, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: { flexShrink: 0 },
  content: {
    borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
    overflow: "hidden",
    flexGrow: 1,
    flexShrink: 0,
    padding: 0,
  },
  title: { marginBottom: 8 },
  description: { marginBottom: 8 },
  hasTrailingText: null,
  helperText: null,
};
let obj3 = {
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  overflow: "hidden",
  flexGrow: 1,
  flexShrink: 0,
  padding: 0,
};
obj2.hasTrailingText = {
  borderBottomLeftRadius: nativeDefault.radii.none,
  borderBottomRightRadius: nativeDefault.radii.none,
};
obj2.helperText = { marginTop: 8 };
const React6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowGroup.native.tsx");

export { TableRowGroupTitle };
export const TableRowGroup = function TableRowGroup(accessibilityLabel) {
  ({ title, description, helperText, hasIcons: require, hasTrailingText } = accessibilityLabel);
  if (hasTrailingText === undefined) {
    hasTrailingText = false;
  }
  let str = accessibilityLabel.accessibilityRole;
  if (str === undefined) {
    str = "none";
  }
  const tmp = closure_8();
  importDefault = false;
  const Children = noop.Children;
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_GROUP_HELPER_TEXT_STYLE);
  const mapped = Children.map(accessibilityLabel.children, (arg0) => {
    if (null == arg0) {
      return null;
    } else if (c1) {
      const obj = { children: null };
      const obj2 = { adjustSpacingForIcon };
      const items = [hasOwnProperty(TableRowDivider.TableRowDivider, obj2), arg0];
      obj.children = items;
      const tmp2 = React5(timestampProducer, obj);
    } else {
      c1 = true;
    }
  });
  let obj2 = { style: tmp.container, children: null };
  let tmp6Result = null != title;
  if (tmp6Result) {
    const obj3 = { title };
    tmp6Result = closure_5(TableRowGroupTitle, obj3);
  }
  let items = [tmp6Result, , ,];
  let tmp6Result3 = null != description;
  if (tmp6Result3) {
    const obj4 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.description, children: description };
    tmp6Result3 = closure_5(Text_Text.Text, obj4);
  }
  items[1] = tmp6Result3;
  const items1 = [tmp.content];
  let hasTrailingText1 = null;
  if (hasTrailingText) {
    hasTrailingText1 = tmp.hasTrailingText;
  }
  items1[1] = hasTrailingText1;
  items[2] = closure_5(View, {
    style: items1,
    accessibilityRole: str,
    accessibilityLabel: accessibilityLabel.accessibilityLabel,
    children: mapped,
  });
  let tmp6Result4 = null != helperText;
  if (tmp6Result4) {
    const obj5 = { variant: token, color: "text-muted", style: tmp.helperText, children: helperText };
    tmp6Result4 = closure_5(Text_Text.Text, obj5);
  }
  items[3] = tmp6Result4;
  obj2.children = items;
  return closure_5(TableRowGroupContext.TableRowGroupContext.Provider, {
    value: true,
    children: closure_7(View, obj2),
  });
};
