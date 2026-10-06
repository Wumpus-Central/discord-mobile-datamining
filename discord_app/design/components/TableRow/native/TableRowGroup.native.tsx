// === Module 6081: TableRowGroup ===

// Module 6081 (TableRowGroup)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4586 */;
import Text_Text from "Text/Text" /* 4892 */;
import TableRowDivider from "TableRowDivider" /* 5995 */;
import react3 from "react" /* 6001 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, importDefault;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexShrink: 0 }, content: obj2, title: { marginBottom: 8 }, description: { marginBottom: 8 }, hasTrailingText: obj3, helperText: { marginTop: 8 } };
obj2 = { borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, overflow: "hidden", flexGrow: 1, flexShrink: 0, padding: 0 };
createStyles = createStyles.createStyles;
obj3 = { borderBottomLeftRadius: nativeDefault.radii.none, borderBottomRightRadius: nativeDefault.radii.none };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let lineClamp;
  let style;
  let title;
  const obj = react2;
  const cResult = obj.c(7);
  ({ title, style, lineClamp } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === style) {
    let tmp5;
    if (cResult[1] === tmp4.title) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === lineClamp) {
      if (cResult[4] === tmp5) {
        let tmp6;
        if (cResult[5] === title) {
          tmp6 = cResult[6];
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
  let items;
  let lineClamp;
  let style;
  let title;
  ({ title, style, lineClamp } = arg0);
  const obj = { accessibilityRole: "header", variant: "text-md/medium", color: "text-subtle", style: items, lineClamp, children: title };
  items = [closure_8().title, style];
  closure_8();
  return hasOwnProperty(Text_Text.Text, obj);
});
let closure_9 = tmp4;
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowGroup.native.tsx");

export const TableRowGroupTitle = tmp4;
export const TableRowGroup = function TableRowGroup(children) {
  let adjustSpacingForIcon;
  let description;
  let hasTrailingText;
  let helperText;
  let items;
  let title;
  ({ title, description, helperText, hasIcons: require, hasTrailingText } = children);
  children = children.children;
  if (hasTrailingText === undefined) {
    hasTrailingText = false;
  }
  let str = children.accessibilityRole;
  if (str === undefined) {
    str = "none";
  }
  const accessibilityLabel = children.accessibilityLabel;
  let tmp = closure_8();
  let obj = useToken;
  importDefault = false;
  const Children = react.Children;
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_GROUP_HELPER_TEXT_STYLE);
  const mapped = Children.map(children, (arg0) => {
    let items;
    let tmp = null;
    if (null != arg0) {
      let tmp3;
      const tmp2 = c1;
      if (tmp2) {
        const obj = { children: items };
        const obj2 = { adjustSpacingForIcon: require };
        items = [hasOwnProperty(TableRowDivider.TableRowDivider, obj2), arg0];
        tmp3 = metroImportDefault(metroRequire, obj);
      } else {
        c1 = true;
        tmp3 = arg0;
      }
      tmp = tmp3;
    }
    return tmp;
  });
  let obj2 = { style: tmp.container, children: items };
  let tmp6Result = null != title;
  const Provider = react3.TableRowGroupContext.Provider;
  if (tmp6Result) {
    const obj3 = { title };
    tmp6Result = closure_5(closure_9, obj3);
  }
  items = [tmp6Result, , , ];
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
  items[2] = closure_5(View, { style: items1, accessibilityRole: str, accessibilityLabel, children: mapped });
  let tmp6Result4 = null != helperText;
  if (tmp6Result4) {
    const obj5 = { variant: token, color: "text-muted", style: tmp.helperText, children: helperText };
    tmp6Result4 = closure_5(Text_Text.Text, obj5);
  }
  items[3] = tmp6Result4;
  const obj6 = { value: true, children: closure_7(View, obj2) };
  return closure_5(Provider, obj6);
};