// === Module 12322: ChatPlaceholderRow ===

// Module 12322 (ChatPlaceholderRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import getChatPlaceholderRowWidthDefault from "getChatPlaceholderRowWidth" /* 11979 */;
import getChatPlaceholderRowHeight from "getChatPlaceholderRowHeight" /* 12321 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let lines;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const tmp3 = native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL];
let createStyles = createStyles_mod;
let obj = { row: obj2, rowInner: obj3, placeholderAvatar: size, placeholderText: obj4, placeholderBody: obj5 };
obj2 = { paddingLeft: nativeDefault.space.PX_12, paddingTop: getChatPlaceholderRowHeight.CHAT_PLACEHOLDER_ROW_MARGIN_TOP, flexDirection: "row" };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_12, flex: 1 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: tmp3, width: tmp3, borderRadius: nativeDefault.radii.round };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: getChatPlaceholderRowHeight.CHAT_PLACEHOLDER_ROW_LINE_HEIGHT, borderRadius: nativeDefault.radii.sm };
obj5 = { marginTop: getChatPlaceholderRowHeight.CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
let closure_6 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((lines) => {
  let items;
  let items1;
  let items2;
  let items4;
  let num;
  const obj = react2;
  const cResult = obj.c(17);
  lines = lines.lines;
  const tmp2 = closure_6();
  const rounded = Math.floor(10 * Math.random());
  if (cResult[0] === lines) {
    if (cResult[1] === tmp2.placeholderBody) {
      let tmp5;
      let tmp11;
      let tmp15;
      let tmp16;
      if (cResult[2] === tmp2.placeholderText) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp2.placeholderAvatar) {
        const obj2 = { style: tmp2.placeholderAvatar };
        const tmp14 = React3(View, obj2);
        cResult[4] = tmp2.placeholderAvatar;
        cResult[5] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { width: "" + tmp4 + "%" };
        const _HermesInternal2 = HermesInternal;
        cResult[6] = obj3;
        tmp15 = obj3;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] !== tmp2.placeholderText) {
        const obj4 = { style: items };
        items = [tmp2.placeholderText, tmp15];
        const tmp19 = React3(View, obj4);
        cResult[7] = tmp2.placeholderText;
        cResult[8] = tmp19;
        tmp16 = tmp19;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        if (cResult[10] === tmp2.rowInner) {
          let tmp20;
          if (cResult[11] === tmp16) {
            tmp20 = cResult[12];
          }
          if (cResult[13] === tmp2.row) {
            if (cResult[14] === tmp11) {
              let tmp24;
              if (cResult[15] === tmp20) {
                tmp24 = cResult[16];
              }
              return tmp24;
            }
          }
          const obj5 = { style: tmp2.row, children: items1 };
          items1 = [tmp11, tmp20];
          const tmp27 = hasOwnProperty(View, obj5);
          cResult[13] = tmp2.row;
          cResult[14] = tmp11;
          cResult[15] = tmp20;
          cResult[16] = tmp27;
          tmp24 = tmp27;
        }
      }
      const obj6 = { style: tmp2.rowInner, children: items2 };
      items2 = [tmp16, tmp5];
      const tmp23 = hasOwnProperty(View, obj6);
      cResult[9] = tmp5;
      cResult[10] = tmp2.rowInner;
      cResult[11] = tmp16;
      cResult[12] = tmp23;
      tmp20 = tmp23;
    }
  }
  const items3 = [];
  for (let num = 0; num < lines; num = num + 1) {
    let obj7 = { style: items4 };
    items4 = [tmp2.placeholderText, tmp2.placeholderBody, ];
    let obj8 = { width: "" + getChatPlaceholderRowWidthDefault(rounded + num) + "%" };
    let _HermesInternal = HermesInternal;
    let push = items3.push;
    items4[2] = obj8;
    let arr = push(React3(View, obj7, num));
  }
  cResult[0] = lines;
  cResult[1] = tmp2.placeholderBody;
  cResult[2] = tmp2.placeholderText;
  cResult[3] = items3;
  tmp5 = items3;
}) : ((lines) => {
  let items1;
  let items2;
  let items3;
  let items4;
  lines = lines.lines;
  const tmp = closure_6();
  const rounded = Math.floor(10 * Math.random());
  const items = [];
  let num = 0;
  const sum = Math.floor(50 * Math.random()) + 10;
  if (0 < lines) {
    do {
      let obj = { style: items1 };
      items1 = [tmp.placeholderText, tmp.placeholderBody, ];
      let obj2 = { width: "" + getChatPlaceholderRowWidthDefault(rounded + num) + "%" };
      let _HermesInternal = HermesInternal;
      let push = items.push;
      items1[2] = obj2;
      let arr = push(React3(View, obj, num));
      num = num + 1;
    } while (num < lines);
  }
  const obj3 = { style: tmp.row, children: items2 };
  items2 = [, ];
  const obj4 = { style: tmp.placeholderAvatar };
  items2[0] = React3(View, obj4);
  const obj5 = { style: tmp.rowInner, children: items4 };
  const obj6 = { style: items3 };
  items3 = [tmp.placeholderText, { width: "" + sum + "%" }];
  items4 = [, ];
  ({ width: "" + sum + "%" });
  items4[0] = React3(View, obj6);
  items4[1] = items;
  items2[1] = hasOwnProperty(View, obj5);
  return hasOwnProperty(View, obj3);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholderRow.tsx");

export default memoResult;