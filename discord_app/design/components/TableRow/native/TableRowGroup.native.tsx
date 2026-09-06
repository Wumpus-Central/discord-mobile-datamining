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
fn(4560);
let createStyles = {
  container: { flexShrink: 0 },
  content: null,
  title: null,
  description: null,
  hasTrailingText: null,
  helperText: null,
};
createStyles = {
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  overflow: "hidden",
  flexGrow: 1,
  flexShrink: 0,
  padding: 0,
};
createStyles.content = createStyles;
createStyles.title = { marginBottom: 8 };
createStyles.description = { marginBottom: 8 };
createStyles.hasTrailingText = {
  borderBottomLeftRadius: nativeDefault.radii.none,
  borderBottomRightRadius: nativeDefault.radii.none,
};
createStyles.helperText = { marginTop: 8 };
const React6 = createStyles.createStyles(createStyles);
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
  let obj = useToken;
  importDefault = false;
  const Children = noop.Children;
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_GROUP_HELPER_TEXT_STYLE);
  const mapped = Children.map(accessibilityLabel.children, (arg0) => {
    if (null == arg0) {
      return null;
    } else if (c1) {
      let obj = { children: null };
      obj = { adjustSpacingForIcon };
      const items = [hasOwnProperty(TableRowDivider.TableRowDivider, obj), arg0];
      obj.children = items;
      const tmp2 = React5(timestampProducer, obj);
    } else {
      c1 = true;
    }
  });
  obj = { style: tmp.container, children: null };
  let tmp6Result = null != title;
  if (tmp6Result) {
    obj = { title };
    tmp6Result = closure_5(TableRowGroupTitle, obj);
  }
  let items = [tmp6Result, , ,];
  tmp6Result = null != description;
  if (tmp6Result) {
    const obj1 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.description, children: description };
    tmp6Result = closure_5(Text_Text.Text, obj1);
  }
  items[1] = tmp6Result;
  const items1 = [tmp.content];
  hasTrailingText = null;
  if (hasTrailingText) {
    hasTrailingText = tmp.hasTrailingText;
  }
  items1[1] = hasTrailingText;
  items[2] = closure_5(View, {
    style: items1,
    accessibilityRole: str,
    accessibilityLabel: accessibilityLabel.accessibilityLabel,
    children: mapped,
  });
  let tmp6Result1 = null != helperText;
  if (tmp6Result1) {
    const obj2 = { variant: token, color: "text-muted", style: tmp.helperText, children: helperText };
    tmp6Result1 = closure_5(Text_Text.Text, obj2);
  }
  items[3] = tmp6Result1;
  obj.children = items;
  return closure_5(TableRowGroupContext.TableRowGroupContext.Provider, { value: true, children: closure_7(View, obj) });
};
