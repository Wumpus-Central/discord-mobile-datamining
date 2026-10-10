// === Module 12382: ChatPlaceholderRow ===

// Module 12382 (ChatPlaceholderRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import getChatPlaceholderRowWidthDefault from "getChatPlaceholderRowWidth" /* 12033 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const tmp3 = fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.NORMAL];
const createStyles = fn(5092);
let obj = { row: { paddingLeft: nativeDefault.space.PX_12, paddingTop: fn(12381).CHAT_PLACEHOLDER_ROW_MARGIN_TOP, flexDirection: "row" }, rowInner: null, placeholderAvatar: null, placeholderText: null, placeholderBody: null };
let obj3 = { paddingLeft: nativeDefault.space.PX_12, paddingTop: fn(12381).CHAT_PLACEHOLDER_ROW_MARGIN_TOP, flexDirection: "row" };
obj.rowInner = { marginHorizontal: nativeDefault.space.PX_12, flex: 1 };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: tmp3, width: tmp3, borderRadius: nativeDefault.radii.round };
obj.placeholderAvatar = size;
let obj4 = { marginHorizontal: nativeDefault.space.PX_12, flex: 1 };
obj.placeholderText = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: fn(12381).CHAT_PLACEHOLDER_ROW_LINE_HEIGHT, borderRadius: nativeDefault.radii.sm };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: fn(12381).CHAT_PLACEHOLDER_ROW_LINE_HEIGHT, borderRadius: nativeDefault.radii.sm };
obj.placeholderBody = { marginTop: fn(12381).CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj6 = { marginTop: fn(12381).CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholderRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatPlaceholderRow(lines) {
  const cResult = c.c(17);
  lines = lines.lines;
  const tmp2 = closure_6();
  const rounded = Math.floor(10 * Math.random());
  if (cResult[0] === lines) {
    if (cResult[1] === tmp2.placeholderBody) {
      if (cResult[2] === tmp2.placeholderText) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp2.placeholderAvatar) {
        const obj2 = { style: tmp2.placeholderAvatar };
        const tmp14 = React4(View, obj2);
        cResult[4] = tmp2.placeholderAvatar;
        cResult[5] = tmp14;
        let tmp11 = tmp14;
      } else {
        tmp11 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { width: null };
        const _HermesInternal2 = HermesInternal;
        obj3.width = "" + tmp4 + "%";
        cResult[6] = obj3;
        let tmp15 = obj3;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] !== tmp2.placeholderText) {
        const obj4 = { style: null };
        const items = [tmp2.placeholderText, tmp15];
        obj4.style = items;
        const tmp19 = React4(View, obj4);
        cResult[7] = tmp2.placeholderText;
        cResult[8] = tmp19;
        let tmp16 = tmp19;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        if (cResult[10] === tmp2.rowInner) {
          if (cResult[11] === tmp16) {
            let tmp20 = cResult[12];
          }
          if (cResult[13] === tmp2.row) {
            if (cResult[14] === tmp11) {
              if (cResult[15] === tmp20) {
                let tmp24 = cResult[16];
              }
              return tmp24;
            }
          }
          const obj5 = { style: tmp2.row, children: null };
          const items1 = [tmp11, tmp20];
          obj5.children = items1;
          const tmp27 = hasOwnProperty(View, obj5);
          cResult[13] = tmp2.row;
          cResult[14] = tmp11;
          cResult[15] = tmp20;
          cResult[16] = tmp27;
          tmp24 = tmp27;
        }
      }
      const obj6 = { style: tmp2.rowInner, children: null };
      const items2 = [tmp16, tmp5];
      obj6.children = items2;
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
    let obj7 = { style: null };
    let items4 = [tmp2.placeholderText, tmp2.placeholderBody, ];
    let obj8 = { width: null };
    let _HermesInternal = HermesInternal;
    obj8.width = "" + getChatPlaceholderRowWidthDefault(rounded + num) + "%";
    items4[2] = obj8;
    obj7.style = items4;
    let arr = items3.push(React4(View, obj7, num));
  }
  cResult[0] = lines;
  cResult[1] = tmp2.placeholderBody;
  cResult[2] = tmp2.placeholderText;
  cResult[3] = items3;
  tmp5 = items3;
}) : (function ChatPlaceholderRow(lines) {
  lines = lines.lines;
  const tmp = closure_6();
  const rounded = Math.floor(10 * Math.random());
  const items = [];
  let num = 0;
  const sum = Math.floor(50 * Math.random()) + 10;
  if (0 < lines) {
    do {
      let obj = { style: null };
      let items1 = [tmp.placeholderText, tmp.placeholderBody, ];
      let obj2 = { width: null };
      let _HermesInternal = HermesInternal;
      obj2.width = "" + getChatPlaceholderRowWidthDefault(rounded + num) + "%";
      items1[2] = obj2;
      obj.style = items1;
      let arr = items.push(React4(View, obj, num));
      num = num + 1;
    } while (num < lines);
  }
  const obj3 = { style: tmp.row, children: null };
  const items2 = [React4(View, { style: tmp.placeholderAvatar }), ];
  const obj5 = { style: tmp.rowInner, children: null };
  const obj6 = { style: null };
  const items3 = [tmp.placeholderText, { width: "" + sum + "%" }];
  obj6.style = items3;
  const items4 = [React4(View, obj6), items];
  obj5.children = items4;
  items2[1] = hasOwnProperty(View, obj5);
  obj3.children = items2;
  return hasOwnProperty(View, obj3);
}));