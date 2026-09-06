// === Module 12641: ChatPlaceholderRow ===

// Module 12641 (ChatPlaceholderRow)
import nativeDefault from "native" /* 576 */;
import getChatPlaceholderRowWidthDefault from "getChatPlaceholderRowWidth" /* 12337 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const tmp3 = fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.NORMAL];
fn(4560);
let obj = { row: null, rowInner: null, placeholderAvatar: null, placeholderText: null, placeholderBody: null };
obj = { paddingLeft: nativeDefault.space.PX_12, paddingTop: fn(12640).CHAT_PLACEHOLDER_ROW_MARGIN_TOP, flexDirection: "row" };
obj.row = obj;
const createStyles = { marginHorizontal: nativeDefault.space.PX_12, flex: 1 };
obj.rowInner = createStyles;
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: tmp3, width: tmp3, borderRadius: nativeDefault.radii.round };
obj.placeholderAvatar = size;
obj.placeholderText = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: fn(12640).CHAT_PLACEHOLDER_ROW_LINE_HEIGHT, borderRadius: nativeDefault.radii.sm };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: fn(12640).CHAT_PLACEHOLDER_ROW_LINE_HEIGHT, borderRadius: nativeDefault.radii.sm };
obj.placeholderBody = { marginTop: fn(12640).CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
let closure_5 = createStyles.createStyles(obj);
let obj3 = { marginTop: fn(12640).CHAT_PLACEHOLDER_ROW_LINE_MARGIN_TOP, width: "100%" };
size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholderRow.tsx");

export default noop.memo(function ChatPlaceholderRow(lines) {
  lines = lines.lines;
  const tmp = closure_5();
  const rounded = Math.floor(10 * Math.random());
  const items = [];
  let num = 0;
  const sum = Math.floor(50 * Math.random()) + 10;
  if (0 < lines) {
    do {
      let obj = { style: null };
      let items1 = [tmp.placeholderText, tmp.placeholderBody, ];
      obj = { width: null };
      let _HermesInternal = HermesInternal;
      obj.width = "" + getChatPlaceholderRowWidthDefault(rounded + num) + "%";
      items1[2] = obj;
      obj.style = items1;
      let arr = items.push(React3(View, obj, num));
      num = num + 1;
    } while (num < lines);
  }
  obj = { style: tmp.row, children: null };
  const items2 = [React3(View, { style: tmp.placeholderAvatar }), ];
  const obj2 = { style: tmp.rowInner, children: null };
  const obj3 = { style: null };
  const items3 = [tmp.placeholderText, { width: "" + sum + "%" }];
  obj3.style = items3;
  const items4 = [React3(View, obj3), items];
  obj2.children = items4;
  items2[1] = React4(View, obj2);
  obj.children = items2;
  return React4(View, obj);
});