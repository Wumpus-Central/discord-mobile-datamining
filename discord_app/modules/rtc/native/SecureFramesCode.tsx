// === Module 9393: SecureFramesCode ===

// Module 9393 (SecureFramesCode)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import Text_Text from "Text/Text" /* 4892 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let react = react_mod;
({ ActivityIndicator: c3, View: closure_4 } = react_native);
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { codeText: { fontFamily: Fonts.CODE_NORMAL }, row: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 8 }, divider: obj2, codeHeader: obj3, code: obj4, loading: { minHeight: 126 } };
obj2 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, paddingVertical: 10, paddingHorizontal: 16, justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
obj4 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, paddingVertical: 8, paddingHorizontal: 16, borderBottomRightRadius: nativeDefault.radii.lg, borderBottomLeftRadius: nativeDefault.radii.lg };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr;
  let chunks;
  let columns;
  let num;
  let row;
  let obj = require("react");
  const cResult = obj.c(6);
  ({ chunks, columns } = arg0);
  const tmp2 = closure_8();
  _require = tmp2;
  if (cResult[0] === chunks) {
    if (cResult[1] === columns) {
      arr = cResult[2];
    }
    if (cResult[3] === arr) {
      let tmp7;
      if (cResult[4] === tmp2) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
    let obj2 = {
      children: arr.map((join, index) => {
          let obj = {
            style: row.row,
            children: join.map((children, index) => {
              const obj = { style: closure_1_0.codeText, variant: "text-md/normal", color: "text-default", children };
              return closure_2_5(closure_0(arr[8]).Text, obj, "" + children + "-" + index);
            })
          };
          const children = [hasOwnProperty(React3, obj), ];
          let tmp3Result = index < arr.length - 1;
          if (tmp3Result) {
            const obj2 = { style: row.divider };
            tmp3Result = hasOwnProperty(React3, obj2);
          }
          children[1] = tmp3Result;
          return metroRequire(React3, { children }, "" + join.join(" ") + "-" + index);
        })
    };
    const tmp10 = closure_5(closure_7, obj2);
    cResult[3] = arr;
    cResult[4] = tmp2;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  const items = [];
  const rounded = Math.ceil(chunks.length / columns);
  for (let num = 0; num < rounded; num = num + 1) {
    let num2;
    let items1 = [];
    for (let num2 = 0; num2 < columns; num2 = num2 + 1) {
      let arr2 = items1.push(chunks[num * columns + num2]);
    }
    let arr3 = items.push(items1);
  }
  cResult[0] = chunks;
  cResult[1] = columns;
  cResult[2] = items;
  arr = items;
}) : ((chunks) => {
  let row;
  chunks = chunks.chunks;
  const columns = chunks.columns;
  react = closure_8();
  let items = [chunks, columns];
  const memo = react.useMemo(() => {
    let num;
    const items = [];
    const rounded = Math.ceil(chunks.length / columns);
    for (let num = 0; num < rounded; num = num + 1) {
      let num2;
      let items1 = [];
      for (let num2 = 0; num2 < columns; num2 = num2 + 1) {
        let arr = items1.push(chunks[num * columns + num2]);
      }
      let arr2 = items.push(items1);
    }
    return items;
  }, items);
  let obj = {
    children: memo.map((join, index) => {
      let codeText;
      let obj = {
        style: row.row,
        children: join.map((children, index) => {
          const obj = { style: codeText.codeText, variant: "text-md/normal", color: "text-default", children };
          return closure_2_5(chunks(columns[8]).Text, obj, "" + children + "-" + index);
        })
      };
      const children = [hasOwnProperty(React3, obj), ];
      let tmp3Result = index < memo.length - 1;
      if (tmp3Result) {
        const obj2 = { style: row.divider };
        tmp3Result = hasOwnProperty(React3, obj2);
      }
      children[1] = tmp3Result;
      return metroRequire(React3, { children }, "" + join.join(" ") + "-" + index);
    })
  };
  return closure_5(closure_7, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let chunks;
  let columns;
  let items;
  let items1;
  let title;
  let tmp5;
  let trailing;
  const obj = react2;
  const cResult = obj.c(16);
  ({ title, trailing, chunks, columns } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== title) {
    const obj2 = { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: title };
    const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = title;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.codeHeader) {
    if (cResult[3] === tmp5) {
      let tmp8;
      let tmp14;
      if (cResult[4] === trailing) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === chunks) {
        if (cResult[7] === columns) {
          let tmp10;
          if (cResult[8] === tmp4.loading) {
            tmp10 = cResult[9];
          }
          if (cResult[10] === tmp4.code) {
            let tmp17;
            if (cResult[11] === tmp10) {
              tmp17 = cResult[12];
            }
            if (cResult[13] === tmp8) {
              let tmp21;
              if (cResult[14] === tmp17) {
                tmp21 = cResult[15];
              }
              return tmp21;
            }
            const obj3 = { children: items };
            items = [tmp8, tmp17];
            const tmp24 = metroRequire(metroImportDefault, obj3);
            cResult[13] = tmp8;
            cResult[14] = tmp17;
            cResult[15] = tmp24;
            tmp21 = tmp24;
          }
          const obj4 = { style: tmp4.code, children: tmp10 };
          const tmp20 = hasOwnProperty(React3, obj4);
          cResult[10] = tmp4.code;
          cResult[11] = tmp10;
          cResult[12] = tmp20;
          tmp17 = tmp20;
        }
      }
      if (null != chunks) {
        const obj5 = { chunks, columns };
        tmp14 = hasOwnProperty(closure_9, obj5);
      } else {
        const obj6 = { style: tmp4.loading };
        tmp14 = hasOwnProperty(_false, obj6);
      }
      cResult[6] = chunks;
      cResult[7] = columns;
      cResult[8] = tmp4.loading;
      cResult[9] = tmp14;
      tmp10 = tmp14;
    }
  }
  const obj7 = { style: tmp4.codeHeader, children: items1 };
  items1 = [tmp5, trailing];
  const tmp9 = metroRequire(React3, obj7);
  cResult[2] = tmp4.codeHeader;
  cResult[3] = tmp5;
  cResult[4] = trailing;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : ((chunks) => {
  let columns;
  let items;
  let title;
  let tmp5Result;
  let trailing;
  chunks = chunks.chunks;
  ({ title, trailing, columns } = chunks);
  const tmp = closure_8();
  const obj = { style: tmp.codeHeader, children: items };
  items = [hasOwnProperty(Text_Text.Text, { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: title }), trailing];
  const items1 = [metroRequire(React3, obj), ];
  const obj2 = { style: tmp.code, children: tmp5Result };
  if (null != chunks) {
    const obj3 = { chunks, columns };
    tmp5Result = hasOwnProperty(closure_9, obj3);
  } else {
    const obj4 = { style: tmp.loading };
    tmp5Result = hasOwnProperty(_false, obj4);
  }
  const obj5 = { children: items1 };
  items1[1] = hasOwnProperty(React3, obj2);
  return metroRequire(metroImportDefault, obj5);
});
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCode.tsx");

export default tmp5;