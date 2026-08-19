// === Module 13438: RowGroup ===

// Module 13438 (RowGroup)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Stack from "Stack" /* 4733 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: { overflow: "hidden" }, content: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, padding: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
createCacheKey[1] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("design/components/RowGroup/native/RowGroup.native.tsx");

export const RowGroup = function RowGroup(children) {
  ({ title, trailing } = children);
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  let tmp2Result = null != title || null != trailing;
  if (tmp2Result) {
    let tmp7 = null != title;
    if (tmp7) {
      obj = { title: null };
      obj[0] = title;
      tmp7 = callback(tmp5(6286).TableRowGroupTitle, obj);
    }
    obj = { direction: "horizontal", spacing: 4, children: null };
    const items = [tmp7, trailing];
    obj[2] = items;
    tmp2Result = tmp2(Stack.Stack, obj);
    tmp5 = require;
  }
  const items1 = [tmp2Result, callback(View, { style: tmp.content, children: children.children })];
  obj[1] = items1;
  return closure_4(View, obj);
};