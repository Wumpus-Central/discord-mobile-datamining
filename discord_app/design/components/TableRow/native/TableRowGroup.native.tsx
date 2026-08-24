// === Module 6317: TableRowGroupTitle ===

// Module 6317 (TableRowGroupTitle)
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import map from "map" /* 4100 */;
import Text from "Text" /* 4739 */;
import context from "context" /* 6321 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
class TableRowGroupTitle {
  constructor(arg0) {
    ({ title, style, lineClamp } = global);
    tmp = require("useIsMobileVisualRefreshExperimentEnabled")("TableRowGroup");
    tmp2 = closure_8();
    tmp3 = jsx;
    str = "text-sm/semibold";
    if (tmp) {
      str = "text-md/medium";
    }
    obj = { accessibilityRole: "header", variant: str, color: null, style: null, lineClamp: null, children: null };
    str2 = "text-default";
    if (tmp) {
      str2 = "text-subtle";
    }
    obj[2] = str2;
    items = [, ];
    items[0] = tmp2.title;
    items[1] = style;
    obj[3] = items;
    obj[4] = lineClamp;
    obj[5] = title;
    return tmp3(require("Text").Text, obj);
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
  const tmp = callback();
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
      const items = [closure_1_5(closure_1_0(closure_1_2[8]).TableRowDivider, obj), arg0];
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
    tmp6Result = tmp6(tmp2(4739).Text, obj1);
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
    tmp6Result1 = tmp6(tmp2(4739).Text, obj2);
  }
  items[3] = tmp6Result1;
  obj[1] = items;
  return closure_5(context.TableRowGroupContext.Provider, { value: true, children: closure_7(View, obj) });
};