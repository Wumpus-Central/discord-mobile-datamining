// === Module 9165: SecureFramesCode ===

// Module 9165 (SecureFramesCode)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
function SecureFramesCodeGrid(chunks) {
  chunks = chunks.chunks;
  const columns = chunks.columns;
  noop = closure_8();
  let items = [chunks, columns];
  const memo = noop.useMemo(() => {
    const items = [];
    const rounded = Math.ceil(chunks.length / columns);
    for (let num = 0; num < rounded; num = num + 1) {
      let items1 = [];
      for (let num2 = 0; num2 < columns; num2 = num2 + 1) {
        let arr = items1.push(chunks[num * columns + num2]);
      }
      arr = items.push(items1);
    }
    return items;
  }, items);
  return closure_5(closure_7, {
    children: memo.map((join, index) => {
      let obj = { style: row.row, children: join.map((children, index) => closure_2_5(chunks(columns[6]).Text, { style: codeText.codeText, variant: "text-md/normal", color: "text-default", children }, "" + children + "-" + index)) };
      const children = [hasOwnProperty(React4, obj), ];
      let tmp3Result = index < memo.length - 1;
      if (tmp3Result) {
        obj = { style: row.divider };
        tmp3Result = hasOwnProperty(tmp2, obj);
      }
      children[1] = tmp3Result;
      return timestampProducer(React4, { children }, "" + join.join(" ") + "-" + index);
    })
  });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4560);
let createStyles = { codeText: { fontFamily: fn(1085).Fonts.CODE_NORMAL }, row: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 8 }, divider: null, codeHeader: null, code: null, loading: null };
createStyles = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.divider = createStyles;
createStyles.codeHeader = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, paddingVertical: 10, paddingHorizontal: 16, justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, paddingVertical: 10, paddingHorizontal: 16, justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
createStyles.code = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, paddingVertical: 8, paddingHorizontal: 16, borderBottomRightRadius: nativeDefault.radii.lg, borderBottomLeftRadius: nativeDefault.radii.lg };
createStyles.loading = { minHeight: 126 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCode.tsx");

export default function SecureFramesCode(chunks) {
  chunks = chunks.chunks;
  ({ title, trailing, columns } = chunks);
  const tmp = closure_8();
  let obj = { style: tmp.codeHeader, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: title }), trailing];
  obj.children = items;
  const items1 = [timestampProducer(React4, obj), ];
  obj = { style: tmp.code, children: null };
  if (null != chunks) {
    obj = { chunks, columns };
    let tmp5Result = tmp5(SecureFramesCodeGrid, obj);
  } else {
    const obj1 = { style: tmp.loading };
    tmp5Result = tmp5(React3, obj1);
  }
  const obj2 = { children: null };
  obj.children = tmp5Result;
  items1[1] = hasOwnProperty(React4, obj);
  obj2.children = items1;
  return timestampProducer(React5, obj2);
};