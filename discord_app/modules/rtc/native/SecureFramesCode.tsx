// === Module 9876: SecureFramesCodeGrid ===

// Module 9876 (SecureFramesCodeGrid)
import ThemesDefault from "Themes" /* 709 */;
import Text from "Text" /* 4474 */;
import closure_2 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function SecureFramesCodeGrid(chunks) {
  chunks = chunks.chunks;
  const columns = chunks.columns;
  let React;
  let memo;
  React = callback3();
  let items = [chunks, columns];
  memo = React.useMemo(() => {
    const items = [];
    const rounded = Math.ceil(chunks.length / columns);
    for (let num = 0; num < rounded; num = num + 1) {
      let items1 = [];
      let tmp2 = columns;
      let tmp3 = num;
      for (let num2 = 0; num2 < columns; num2 = num2 + 1) {
        let tmp4 = columns;
        let tmp5 = chunks;
        let arr = items1.push(chunks[num * columns + num2]);
      }
      arr = items.push(items1);
    }
    return items;
  }, items);
  return callback(closure_7, {
    children: memo.map((arr) => {
      let obj = { style: row.row, children: arr.map((children) => closure_1_5(closure_1_0(closure_1_1[6]).Text, { style: codeText.codeText, variant: "text-md/normal", color: "text-default", children }, "" + children + "-" + arg1)) };
      const children = [closure_1_5(closure_1_4, obj), ];
      let tmp3Result = arg1 < memo.length - 1;
      if (tmp3Result) {
        obj = { style: null };
        obj[0] = row.divider;
        tmp3Result = closure_1_5(tmp2, obj);
      }
      children[1] = tmp3Result;
      return closure_1_6(closure_1_4, { children }, "" + arr.join(" ") + "-" + arg1);
    })
  });
}
({ ActivityIndicator: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { codeText: createCacheKey, row: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 8 }, divider: null, codeHeader: null, code: null, loading: null };
createCacheKey = { fontFamily: require("sum").Fonts.CODE_NORMAL };
createCacheKey[2] = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj1 = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderTopRightRadius: ThemesDefault.radii.lg, borderTopLeftRadius: ThemesDefault.radii.lg, paddingVertical: 10, paddingHorizontal: 16, justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderTopRightRadius: ThemesDefault.radii.lg, borderTopLeftRadius: ThemesDefault.radii.lg, paddingVertical: 10, paddingHorizontal: 16, justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, paddingVertical: 8, paddingHorizontal: 16, borderBottomRightRadius: ThemesDefault.radii.lg, borderBottomLeftRadius: ThemesDefault.radii.lg };
createCacheKey[5] = { minHeight: 126 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const obj3 = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, paddingVertical: 8, paddingHorizontal: 16, borderBottomRightRadius: ThemesDefault.radii.lg, borderBottomLeftRadius: ThemesDefault.radii.lg };
const result = require("set").fileFinishedImporting("modules/rtc/native/SecureFramesCode.tsx");

export default function SecureFramesCode(chunks) {
  chunks = chunks.chunks;
  ({ title, trailing, columns } = chunks);
  const tmp = callback3();
  let obj = { style: tmp.codeHeader, children: null };
  const items = [callback(Text.Text, { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: title }), trailing];
  obj[1] = items;
  const items1 = [callback2(closure_4, obj), ];
  obj = { style: tmp.code, children: null };
  if (null != chunks) {
    obj = { chunks: null, columns: null };
    obj[0] = chunks;
    obj[1] = columns;
    let tmp5Result = tmp5(SecureFramesCodeGrid, obj);
  } else {
    obj1 = { style: null };
    obj1[0] = tmp.loading;
    tmp5Result = tmp5(closure_3, obj1);
  }
  const obj2 = { children: null };
  obj[1] = tmp5Result;
  items1[1] = callback(closure_4, obj);
  obj2[0] = items1;
  return callback2(closure_7, obj2);
};