// discord_app/design/components/RowGroup/native/RowGroup.native.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: { overflow: "hidden" }, content: null };
createCacheKey = { backgroundColor: require("Themes").colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: require("Themes").modules.mobile.TABLE_ROW_BORDER_RADIUS, padding: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("design/components/RowGroup/native/RowGroup.native.tsx");

export const RowGroup = function RowGroup(children) {
  let title;
  let trailing;
  ({ title, trailing } = children);
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  let tmp2Result = null != title || null != trailing;
  if (tmp2Result) {
    let tmp7 = null != title;
    if (tmp7) {
      obj = { title: null };
      obj[0] = title;
      tmp7 = callback(tmp5(5558).TableRowGroupTitle, obj);
    }
    obj = { direction: "horizontal", spacing: 4, children: null };
    const items = [tmp7, trailing];
    obj[2] = items;
    tmp2Result = tmp2(require(4602) /* Stack */.Stack, obj);
    tmp5 = require;
  }
  const items1 = [tmp2Result, callback(View, { style: tmp.content, children: children.children })];
  obj[1] = items1;
  return closure_4(View, obj);
};