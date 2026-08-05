// discord_app/modules/rtc/native/SecureFramesCode.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
function SecureFramesCodeGrid(chunks) {
  chunks = chunks.chunks;
  const columns = chunks.columns;
  let React;
  let memo;
  React = createCacheKey();
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
      let obj = { style: row.row, children: arr.map((children) => outer1_5(outer1_0(outer1_1[6]).Text, { style: codeText.codeText, variant: "text-md/normal", color: "text-default", children }, "" + children + "-" + arg1)) };
      const children = [outer1_5(outer1_4, obj), ];
      let tmp3Result = arg1 < memo.length - 1;
      if (tmp3Result) {
        obj = { style: null };
        obj[0] = row.divider;
        tmp3Result = outer1_5(tmp2, obj);
      }
      children[1] = tmp3Result;
      return outer1_6(outer1_4, { children }, "" + arr.join(" ") + "-" + arg1);
    })
  });
}
({ ActivityIndicator: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { codeText: createCacheKey, row: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 8 }, divider: null, codeHeader: null, code: null, loading: null };
createCacheKey = { fontFamily: require("sum").Fonts.CODE_NORMAL };
createCacheKey[2] = { height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
let obj1 = { height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderTopRightRadius: require("Themes").radii.lg, borderTopLeftRadius: require("Themes").radii.lg, paddingVertical: 10, paddingHorizontal: 16, justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderTopRightRadius: require("Themes").radii.lg, borderTopLeftRadius: require("Themes").radii.lg, paddingVertical: 10, paddingHorizontal: 16, justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
createCacheKey[4] = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, paddingVertical: 8, paddingHorizontal: 16, borderBottomRightRadius: require("Themes").radii.lg, borderBottomLeftRadius: require("Themes").radii.lg };
createCacheKey[5] = { minHeight: 126 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj3 = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, paddingVertical: 8, paddingHorizontal: 16, borderBottomRightRadius: require("Themes").radii.lg, borderBottomLeftRadius: require("Themes").radii.lg };
const result = require("sum").fileFinishedImporting("modules/rtc/native/SecureFramesCode.tsx");

export default function SecureFramesCode(chunks) {
  let columns;
  let title;
  let trailing;
  chunks = chunks.chunks;
  ({ title, trailing, columns } = chunks);
  const tmp = createCacheKey();
  let obj = { style: tmp.codeHeader, children: null };
  const items = [callback(require(4281) /* Text */.Text, { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: title }), trailing];
  obj[1] = items;
  const items1 = [callback2(closure_4, obj), ];
  obj = { style: tmp.code, children: null };
  if (null != chunks) {
    obj = { chunks: null, columns: null };
    obj[0] = chunks;
    obj[1] = columns;
    let tmp5Result = tmp5(SecureFramesCodeGrid, obj);
  } else {
    const obj1 = { style: null };
    obj1[0] = tmp.loading;
    tmp5Result = tmp5(closure_3, obj1);
  }
  const obj2 = { children: null };
  obj[1] = tmp5Result;
  items1[1] = callback(closure_4, obj);
  obj2[0] = items1;
  return callback2(closure_7, obj2);
};