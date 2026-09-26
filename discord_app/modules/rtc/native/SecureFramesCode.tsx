// discord_app/modules/rtc/native/SecureFramesCode.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
      let arr2 = items.push(items1);
    }
    return items;
  }, items);
  return closure_5(closure_7, {
    children: memo.map((join, index) => {
      const children = [
        hasOwnProperty(React4, {
          style: row.row,
          children: join.map((children, index) =>
            closure_2_5(
              chunks(columns[6]).Text,
              { style: codeText.codeText, variant: "text-md/normal", color: "text-default", children },
              "" + children + "-" + index,
            ),
          ),
        }),
      ];
      let tmp3Result = index < memo.length - 1;
      if (tmp3Result) {
        const obj2 = { style: row.divider };
        tmp3Result = hasOwnProperty(React4, obj2);
      }
      children[1] = tmp3Result;
      return timestampProducer(React4, { children }, "" + join.join(" ") + "-" + index);
    }),
  });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  codeText: { fontFamily: fn(1085).Fonts.CODE_NORMAL },
  row: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 8 },
  divider: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE },
  codeHeader: null,
  code: null,
  loading: null,
};
let obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.codeHeader = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderTopRightRadius: nativeDefault.radii.lg,
  borderTopLeftRadius: nativeDefault.radii.lg,
  paddingVertical: 10,
  paddingHorizontal: 16,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
};
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderTopRightRadius: nativeDefault.radii.lg,
  borderTopLeftRadius: nativeDefault.radii.lg,
  paddingVertical: 10,
  paddingHorizontal: 16,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
};
obj2.code = {
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderBottomRightRadius: nativeDefault.radii.lg,
  borderBottomLeftRadius: nativeDefault.radii.lg,
};
obj2.loading = { minHeight: 126 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCode.tsx");

export default function SecureFramesCode(chunks) {
  chunks = chunks.chunks;
  ({ title, trailing, columns } = chunks);
  const tmp = closure_8();
  const obj = { style: tmp.codeHeader, children: null };
  const items = [
    hasOwnProperty(Text_Text.Text, {
      color: "mobile-text-heading-primary",
      variant: "heading-md/semibold",
      children: title,
    }),
    trailing,
  ];
  obj.children = items;
  const items1 = [timestampProducer(React4, obj)];
  const obj2 = { style: tmp.code, children: null };
  if (null != chunks) {
    const obj3 = { chunks, columns };
    let tmp5Result = hasOwnProperty(SecureFramesCodeGrid, obj3);
  } else {
    const obj4 = { style: tmp.loading };
    tmp5Result = hasOwnProperty(React3, obj4);
  }
  const obj5 = { children: null };
  obj2.children = tmp5Result;
  items1[1] = hasOwnProperty(React4, obj2);
  obj5.children = items1;
  return timestampProducer(React5, obj5);
}
