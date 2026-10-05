// === Module 11964: GuildDirectoryPlaceholderRow ===

// Module 11964 (GuildDirectoryPlaceholderRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import LegacyTokens from "LegacyTokens" /* 5620 */;
import getChatPlaceholderRowWidthDefault from "getChatPlaceholderRowWidth" /* 11965 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: { flexDirection: "row", padding: 16 }, rowInner: { flex: 1 }, placeholderAvatar: size, placeholderText: obj2, placeholderBody: { width: "100%", marginTop: 10 } };
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, overflow: "hidden", marginRight: 16, backgroundColor: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
createStyles = createStyles.createStyles;
obj2 = { height: 15, borderRadius: 5, backgroundColor: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
let closure_6 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let items;
  let items1;
  let items2;
  let tmp10;
  let tmp5;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(16);
  const tmp2 = closure_6();
  _require = tmp2;
  const sum = Math.floor(2 * Math.random()) + 2;
  let closure_1 = Math.floor(10 * Math.random());
  const sum1 = Math.floor(50 * Math.random()) + 10;
  const row = tmp2.row;
  if (cResult[0] !== tmp2.placeholderAvatar) {
    const obj2 = { style: tmp2.placeholderAvatar };
    const tmp8 = closure_4(View, obj2);
    cResult[0] = tmp2.placeholderAvatar;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  const rowInner = tmp2.rowInner;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { width: "" + sum1 + "%" };
    const _HermesInternal = HermesInternal;
    cResult[2] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp2.placeholderText) {
    const obj4 = { style: items };
    items = [tmp2.placeholderText, tmp9];
    const tmp13 = closure_4(View, obj4);
    cResult[3] = tmp2.placeholderText;
    cResult[4] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === tmp2.placeholderBody) {
    let tmp14;
    if (cResult[6] === tmp2.placeholderText) {
      tmp14 = cResult[7];
    }
    if (cResult[8] === tmp2.rowInner) {
      if (cResult[9] === tmp10) {
        let tmp16;
        if (cResult[10] === tmp14) {
          tmp16 = cResult[11];
        }
        if (cResult[12] === tmp2.row) {
          if (cResult[13] === tmp5) {
            let tmp20;
            if (cResult[14] === tmp16) {
              tmp20 = cResult[15];
            }
            return tmp20;
          }
        }
        const obj5 = { style: row, children: items1 };
        items1 = [tmp5, tmp16];
        const tmp23 = closure_5(View, obj5);
        cResult[12] = tmp2.row;
        cResult[13] = tmp5;
        cResult[14] = tmp16;
        cResult[15] = tmp23;
        tmp20 = tmp23;
      }
    }
    const obj6 = { style: rowInner, children: items2 };
    items2 = [tmp10, tmp14];
    const tmp19 = closure_5(View, obj6);
    cResult[8] = tmp2.rowInner;
    cResult[9] = tmp10;
    cResult[10] = tmp14;
    cResult[11] = tmp19;
    tmp16 = tmp19;
  }
  const array = new Array(sum);
  const fillResult = array.fill(undefined);
  const mapped = fillResult.map((item, index) => {
    let items;
    const obj = { style: items };
    items = [, , ];
    ({ placeholderText: arr[0], placeholderBody: arr[1] } = closure_0);
    items[2] = { width: "" + getChatPlaceholderRowWidthDefault(closure_1 + index) + "%" };
    ({ width: "" + getChatPlaceholderRowWidthDefault(closure_1 + index) + "%" });
    return React3(View, obj, index);
  });
  cResult[5] = tmp2.placeholderBody;
  cResult[6] = tmp2.placeholderText;
  cResult[7] = mapped;
  tmp14 = mapped;
}) : (() => {
  let items;
  let items1;
  let items2;
  const tmp = closure_6();
  let closure_0 = tmp;
  const sum = Math.floor(2 * Math.random()) + 2;
  let closure_1 = Math.floor(10 * Math.random());
  let obj = { style: tmp.row, children: items };
  const obj2 = { style: tmp.placeholderAvatar };
  const sum1 = Math.floor(50 * Math.random()) + 10;
  items = [closure_4(View, obj2), ];
  const obj3 = { style: tmp.rowInner, children: items2 };
  const obj4 = { style: items1 };
  items1 = [tmp.placeholderText, { width: "" + sum1 + "%" }];
  items2 = [, ];
  ({ width: "" + sum1 + "%" });
  items2[0] = closure_4(View, obj4);
  const array = new Array(sum);
  const fillResult = array.fill(undefined);
  items2[1] = fillResult.map((item, index) => {
    let items;
    const obj = { style: items };
    items = [, , ];
    ({ placeholderText: arr[0], placeholderBody: arr[1] } = closure_0);
    items[2] = { width: "" + getChatPlaceholderRowWidthDefault(closure_1 + index) + "%" };
    ({ width: "" + getChatPlaceholderRowWidthDefault(closure_1 + index) + "%" });
    return React3(View, obj, index);
  });
  items[1] = closure_5(View, obj3);
  return closure_5(View, obj);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryPlaceholderRow.tsx");

export default memoResult;