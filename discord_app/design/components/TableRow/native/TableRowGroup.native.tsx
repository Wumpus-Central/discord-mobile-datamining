// === Module 5992: TableRowGroupTitle ===

// Module 5992 (TableRowGroupTitle)
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4197 */;
import Text from "Text" /* 4474 */;
import context from "context" /* 5600 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
class TableRowGroupTitle {
  constructor(arg0) {
    ({ title, style, lineClamp } = global);
    tmp = closure_8();
    items = [, ];
    items[0] = tmp.title;
    items[1] = style;
    return jsx(require("Text").Text, { accessibilityRole: "header", variant: "text-md/medium", color: "text-subtle", style: items, lineClamp, children });
  }
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { flexShrink: 0 }, content: null, title: null, description: null, hasTrailingText: null, helperText: null };
createCacheKey = { borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, overflow: "hidden", flexGrow: 1, flexShrink: 0, padding: 0 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginBottom: 8 };
createCacheKey[3] = { marginBottom: 8 };
createCacheKey[4] = { borderBottomLeftRadius: ThemesDefault.radii.none, borderBottomRightRadius: ThemesDefault.radii.none };
createCacheKey[5] = { marginTop: 8 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderBottomLeftRadius: ThemesDefault.radii.none, borderBottomRightRadius: ThemesDefault.radii.none };
const result = require("set").fileFinishedImporting("design/components/TableRow/native/TableRowGroup.native.tsx");

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
  importDefault = undefined;
  const tmp = callback2();
  let obj = map;
  importDefault = false;
  const Children = React.Children;
  const token = obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_GROUP_HELPER_TEXT_STYLE);
  const mapped = Children.map(accessibilityLabel.children, (arg0) => {
    if (null == arg0) {
      return null;
    } else if (c1) {
      let obj = { children: null };
      obj = { adjustSpacingForIcon: null };
      obj[0] = closure_0;
      const items = [closure_1_5(closure_1_0(closure_1_2[7]).TableRowDivider, obj), arg0];
      obj[0] = items;
      let tmp2 = closure_1_7(closure_1_6, obj);
    } else {
      c1 = true;
      tmp2 = arg0;
    }
  });
  obj = { style: tmp.container, children: null };
  let tmp6Result = null != title;
  if (tmp6Result) {
    obj = { title: null };
    obj[0] = title;
    tmp6Result = tmp6(TableRowGroupTitle, obj);
  }
  let items = [tmp6Result, , , ];
  tmp6Result = null != description;
  if (tmp6Result) {
    obj1 = { variant: "text-sm/normal", color: "text-subtle", style: null, children: null };
    obj1[2] = tmp.description;
    obj1[3] = description;
    tmp6Result = tmp6(tmp2(4474).Text, obj1);
  }
  items[1] = tmp6Result;
  const items1 = [tmp.content, ];
  hasTrailingText = null;
  if (hasTrailingText) {
    hasTrailingText = tmp.hasTrailingText;
  }
  items1[1] = hasTrailingText;
  items[2] = closure_5(View, { style: items1, accessibilityRole: str, accessibilityLabel: accessibilityLabel.accessibilityLabel, children: mapped });
  let tmp6Result1 = null != helperText;
  if (tmp6Result1) {
    const obj2 = { variant: null, color: "text-muted", style: null, children: null };
    obj2[0] = token;
    obj2[2] = tmp.helperText;
    obj2[3] = helperText;
    tmp6Result1 = tmp6(tmp2(4474).Text, obj2);
  }
  items[3] = tmp6Result1;
  obj[1] = items;
  return closure_5(context.TableRowGroupContext.Provider, { value: true, children: closure_7(View, obj) });
};