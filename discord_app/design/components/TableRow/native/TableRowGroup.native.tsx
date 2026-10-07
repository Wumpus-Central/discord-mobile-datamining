// === Module 6081: TableRowGroup ===

// Module 6081 (TableRowGroup)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4586 */;
import Text_Text from "Text/Text" /* 4892 */;
import TableRowDivider from "TableRowDivider" /* 5995 */;
import TableRowGroupContext from "TableRowGroupContext" /* 6001 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flexShrink: 0 }, content: { borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, overflow: "hidden", flexGrow: 1, flexShrink: 0, padding: 0 }, title: { marginBottom: 8 }, description: { marginBottom: 8 }, hasTrailingText: null, helperText: null };
let obj3 = { borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, overflow: "hidden", flexGrow: 1, flexShrink: 0, padding: 0 };
obj2.hasTrailingText = { borderBottomLeftRadius: nativeDefault.radii.none, borderBottomRightRadius: nativeDefault.radii.none };
obj2.helperText = { marginTop: 8 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ title, style, lineClamp } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.title) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === lineClamp) {
      if (cResult[4] === tmp5) {
        if (cResult[5] === title) {
          let tmp6 = cResult[6];
        }
        return tmp6;
      }
    }
    const obj2 = { accessibilityRole: "header", variant: "text-md/medium", color: "text-subtle", style: tmp5, lineClamp, children: title };
    const tmp8 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[3] = lineClamp;
    cResult[4] = tmp5;
    cResult[5] = title;
    cResult[6] = tmp8;
    tmp6 = tmp8;
  }
  const items = [tmp4.title, style];
  cResult[0] = style;
  cResult[1] = tmp4.title;
  cResult[2] = items;
  tmp5 = items;
}) : ((arg0) => {
  ({ title, style, lineClamp } = arg0);
  const obj = { accessibilityRole: "header", variant: "text-md/medium", color: "text-subtle", style: null, lineClamp, children: title };
  const items = [closure_8().title, style];
  obj.style = items;
  return hasOwnProperty(Text_Text.Text, obj);
});
let closure_9 = tmp3;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowGroup.native.tsx");

export const TableRowGroupTitle = tmp3;
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
    tmp6Result = closure_5(closure_9, obj3);
  }
  let items = [tmp6Result, , , ];
  let tmp6Result3 = null != description;
  if (tmp6Result3) {
    const obj4 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.description, children: description };
    tmp6Result3 = closure_5(Text_Text.Text, obj4);
  }
  items[1] = tmp6Result3;
  const items1 = [tmp.content, ];
  let hasTrailingText1 = null;
  if (hasTrailingText) {
    hasTrailingText1 = tmp.hasTrailingText;
  }
  items1[1] = hasTrailingText1;
  items[2] = closure_5(View, { style: items1, accessibilityRole: str, accessibilityLabel: accessibilityLabel.accessibilityLabel, children: mapped });
  let tmp6Result4 = null != helperText;
  if (tmp6Result4) {
    const obj5 = { variant: token, color: "text-muted", style: tmp.helperText, children: helperText };
    tmp6Result4 = closure_5(Text_Text.Text, obj5);
  }
  items[3] = tmp6Result4;
  obj2.children = items;
  return closure_5(TableRowGroupContext.TableRowGroupContext.Provider, { value: true, children: closure_7(View, obj2) });
};